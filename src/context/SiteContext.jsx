import React, { useState, useEffect, createContext, useContext } from 'react';

const SiteContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const SiteProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        instagram: '',
        whatsapp: '',
        email: '',
        brandName: 'BOOST AGENCY'
    });

    const [leads, setLeads] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initial Load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sRes, lRes, pRes] = await Promise.all([
                    fetch(`${API_URL}/settings`),
                    fetch(`${API_URL}/leads`),
                    fetch(`${API_URL}/projects`)
                ]);

                const sData = await sRes.json();
                const lData = await lRes.json();
                const pData = await pRes.json();

                if (sData) setSettings({
                    instagram: sData.instagram,
                    whatsapp: sData.whatsapp,
                    email: sData.email,
                    brandName: sData.brand_name
                });

                setLeads(lData);
                setProjects(pData);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const updateSettings = async (newSettings) => {
        try {
            await fetch(`${API_URL}/settings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSettings)
            });
            setSettings(newSettings);
        } catch (err) {
            console.error("Error updating settings:", err);
        }
    };

    const addLead = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            // Refresh local list or re-fetch
            const listRes = await fetch(`${API_URL}/leads`);
            setLeads(await listRes.json());
        } catch (err) {
            console.error("Error adding lead:", err);
        }
    };

    const updateLeadStatus = async (id, status, notes = '') => {
        try {
            await fetch(`${API_URL}/leads/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status, notes })
            });
            setLeads(prev => prev.map(l => l.id === id ? { ...l, status, notes } : l));
        } catch (err) {
            console.error("Error updating lead:", err);
        }
    };

    const addProject = async (newProject) => {
        try {
            await fetch(`${API_URL}/projects`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProject)
            });
            // Refresh
            const pRes = await fetch(`${API_URL}/projects`);
            setProjects(await pRes.json());
        } catch (err) {
            console.error("Error adding project:", err);
        }
    };

    const deleteProject = async (id) => {
        try {
            await fetch(`${API_URL}/projects/${id}`, { method: 'DELETE' });
            setProjects(prev => prev.filter(p => p.id !== id));
        } catch (err) {
            console.error("Error deleting project:", err);
        }
    };

    return (
        <SiteContext.Provider value={{
            settings, updateSettings,
            leads, addLead, updateLeadStatus,
            projects, addProject, deleteProject,
            loading
        }}>
            {children}
        </SiteContext.Provider>
    );
};

export const useSite = () => useContext(SiteContext);
