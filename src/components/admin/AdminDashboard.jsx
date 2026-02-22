import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../../context/SiteContext';

const AdminDashboard = () => {
    const { settings, updateSettings, leads, updateLeadStatus, projects, addProject, deleteProject } = useSite();
    const [activeTab, setActiveTab] = useState('overview');

    // Local state for settings form
    const [tempSettings, setTempSettings] = useState(settings);

    // Local state for new project form
    const [newProject, setNewProject] = useState({
        title: '',
        category: '',
        metric: '',
        metricLabel: '',
        imageUrl: '',
        description: '',
        challenge: '',
        solution: '',
        results: ''
    });

    const handleAddProject = () => {
        if (!newProject.title) return alert('El título es obligatorio');
        addProject(newProject);
        setNewProject({
            title: '',
            category: '',
            metric: '',
            metricLabel: '',
            imageUrl: '',
            description: '',
            challenge: '',
            solution: '',
            results: ''
        });
        alert('Proyecto publicado con éxito');
    };

    const handleSaveSettings = () => {
        updateSettings(tempSettings);
        alert('Configuración actualizada globalmente');
    };

    const inputStyleAdmin = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        color: 'white',
        outline: 'none'
    };

    const sidebarStyle = {
        width: '280px',
        background: '#0a192f',
        height: '100vh',
        padding: '2rem',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        position: 'fixed'
    };

    const navItemStyle = (tab) => ({
        padding: '1rem',
        borderRadius: '12px',
        color: activeTab === tab ? '#64ffda' : '#8892b0',
        background: activeTab === tab ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
        cursor: 'pointer',
        transition: '0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontWeight: activeTab === tab ? 'bold' : 'normal'
    });

    const contentStyle = {
        flexGrow: 1,
        padding: '3rem',
        minHeight: '100vh',
        background: '#020c1b',
        color: 'white',
        marginLeft: '280px'
    };

    const statCardStyle = {
        background: 'rgba(255,255,255,0.03)',
        padding: '2rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)'
    };

    return (
        <div style={{ display: 'flex', width: '100%', minHeight: '100vh', background: '#020c1b' }}>
            <aside style={sidebarStyle}>
                <div style={{ fontFamily: 'var(--font-heading)', color: '#ffbd69', fontSize: '1.5rem', marginBottom: '2rem' }}>BOOST ADMIN</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div onClick={() => setActiveTab('overview')} style={navItemStyle('overview')}>📊 Resumen</div>
                    <div onClick={() => setActiveTab('leads')} style={navItemStyle('leads')}>📩 Leads / Contactos</div>
                    <div onClick={() => setActiveTab('portfolio')} style={navItemStyle('portfolio')}>📂 Portafolio</div>
                    <div onClick={() => setActiveTab('settings')} style={navItemStyle('settings')}>⚙️ Configuración</div>
                </nav>
                <div style={{ marginTop: 'auto', padding: '1rem', fontSize: '0.8rem', color: '#444' }}>v1.0.0 Strategic Edition</div>
            </aside>

            <main style={contentStyle}>
                {activeTab === 'overview' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Impacto Estratégico</h1>

                        {/* Metrics Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            <div style={statCardStyle}>
                                <div style={{ color: '#8892b0', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>TOTAL LEADS</div>
                                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#64ffda' }}>{leads.length}</div>
                                <div style={{ fontSize: '0.8rem', color: '#444', marginTop: '0.5rem' }}>Bandeja de entrada histórica</div>
                            </div>

                            <div style={statCardStyle}>
                                <div style={{ color: '#8892b0', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>EN SEGUIMIENTO</div>
                                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#ffbd69' }}>
                                    {leads.filter(l => l.status === 'En Contacto' || l.status === 'Nuevo').length}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#ffbd6988', marginTop: '0.5rem' }}>Oportunidades activas</div>
                            </div>

                            <div style={statCardStyle}>
                                <div style={{ color: '#8892b0', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>TASA DE CIERRE</div>
                                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: 'white' }}>
                                    {leads.length > 0 ? Math.round((leads.filter(l => l.status === 'Cerrado').length / leads.length) * 100) : 0}%
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#444', marginTop: '0.5rem' }}>Efectividad comercial</div>
                            </div>

                            <div style={statCardStyle}>
                                <div style={{ color: '#8892b0', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px' }}>CASOS PÚBLICOS</div>
                                <div style={{ fontSize: '2.8rem', fontWeight: 'bold' }}>{projects.length}</div>
                                <div style={{ fontSize: '0.8rem', color: '#444', marginTop: '0.5rem' }}>ADN de éxito en web</div>
                            </div>
                        </div>

                        {/* Recent Activity & Quick Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Actividad Reciente</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {leads.slice(0, 4).map(lead => (
                                        <div key={lead.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                            <div>
                                                <div style={{ fontWeight: 'bold' }}>{lead.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#8892b0' }}>{lead.company} · {lead.date}</div>
                                            </div>
                                            <div style={{
                                                fontSize: '0.7rem',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '50px',
                                                background: lead.status === 'Nuevo' ? '#64ffda22' : 'rgba(255,255,255,0.05)',
                                                color: lead.status === 'Nuevo' ? '#64ffda' : '#8892b0'
                                            }}>
                                                {lead.status.toUpperCase()}
                                            </div>
                                        </div>
                                    ))}
                                    {leads.length === 0 && <p style={{ color: '#444' }}>No hay actividad de leads reciente.</p>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ ...statCardStyle, background: 'linear-gradient(135deg, #64ffda11 0%, #0a192f 100%)', borderColor: '#64ffda33' }}>
                                    <h4 style={{ color: '#64ffda', marginBottom: '1rem' }}>Sugerencia Estratégica</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#8892b0' }}>
                                        {leads.filter(l => l.status === 'Nuevo').length > 0
                                            ? `Tienes ${leads.filter(l => l.status === 'Nuevo').length} leads sin contactar. Prioriza el seguimiento para mantener el momentum.`
                                            : "Tu bandeja está limpia. Buen momento para actualizar el portafolio con nuevos casos de éxito."}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setActiveTab('portfolio')}
                                    style={{ padding: '1.2rem', background: 'transparent', border: '1px solid #ffbd69', color: '#ffbd69', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                    + Crear Nuevo Caso de Éxito
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'leads' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Bandeja de Leads Detallada</h1>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '1rem', color: '#8892b0' }}>Nombre / Empresa</th>
                                        <th style={{ padding: '1rem', color: '#8892b0' }}>Contacto</th>
                                        <th style={{ padding: '1rem', color: '#8892b0' }}>Mensaje del Cliente</th>
                                        <th style={{ padding: '1rem', color: '#8892b0' }}>Estado</th>
                                        <th style={{ padding: '1rem', color: '#8892b0' }}>Notas Internas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1.5rem 1rem' }}>
                                                <div style={{ fontWeight: 'bold' }}>{lead.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#8892b0' }}>{lead.company || 'Particular'}</div>
                                                <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', opacity: 0.5 }}>{lead.date}</div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{ color: '#64ffda' }}>{lead.email}</div>
                                            </td>
                                            <td style={{ padding: '1rem', maxWidth: '300px' }}>
                                                <div style={{
                                                    background: 'rgba(255,255,255,0.03)',
                                                    padding: '0.8rem',
                                                    borderRadius: '8px',
                                                    fontSize: '0.85rem',
                                                    lineHeight: '1.4',
                                                    borderLeft: '2px solid #ffbd69'
                                                }}>
                                                    {lead.message || 'Sin mensaje adicional.'}
                                                </div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <select
                                                    value={lead.status}
                                                    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                                                    style={{
                                                        background: 'rgba(100,255,218,0.1)',
                                                        color: '#64ffda',
                                                        border: '1px solid rgba(100,255,218,0.2)',
                                                        padding: '0.5rem',
                                                        borderRadius: '6px',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <option value="Nuevo">Nuevo</option>
                                                    <option value="En Contacto">En Contacto</option>
                                                    <option value="Cerrado">Cerrado</option>
                                                    <option value="Descartado">Descartado</option>
                                                </select>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <textarea
                                                    placeholder="Añadir notas internas..."
                                                    defaultValue={lead.notes || ''}
                                                    onBlur={(e) => {
                                                        const updatedLeads = leads.map(l => l.id === lead.id ? { ...l, notes: e.target.value } : l);
                                                        localStorage.setItem('boost_leads', JSON.stringify(updatedLeads));
                                                    }}
                                                    style={{
                                                        width: '100%',
                                                        minHeight: '60px',
                                                        background: 'rgba(255,255,255,0.02)',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: '4px',
                                                        color: '#ccc',
                                                        padding: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        resize: 'vertical'
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'portfolio' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h1 style={{ fontFamily: 'var(--font-heading)' }}>Gestión de Portafolio</h1>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem' }}>
                            {/* List of Projects */}
                            <div>
                                <h3 style={{ marginBottom: '1.5rem', color: '#8892b0' }}>Proyectos en Vivo</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {projects.map(project => (
                                        <div key={project.id} style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '1.5rem',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                                <img src={project.imageUrl} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} alt="" />
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>{project.title}</div>
                                                    <div style={{ fontSize: '0.8rem', color: '#64ffda' }}>{project.category}</div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => { if (window.confirm('¿Eliminar proyecto?')) deleteProject(project.id); }}
                                                style={{ background: 'transparent', border: '1px solid #ff5252', color: '#ff5252', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add New Project Form */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}>
                                <h3 style={{ marginBottom: '1.5rem', color: '#ffbd69' }}>Publicar Nuevo Caso</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Título del Proyecto"
                                        style={inputStyleAdmin}
                                        value={newProject.title}
                                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Categoría (ej: Real Estate Branding)"
                                        style={inputStyleAdmin}
                                        value={newProject.category}
                                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                                    />
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input
                                            type="text"
                                            placeholder="Métrica (+45%)"
                                            style={inputStyleAdmin}
                                            value={newProject.metric}
                                            onChange={(e) => setNewProject({ ...newProject, metric: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Etiqueta (ROI)"
                                            style={inputStyleAdmin}
                                            value={newProject.metricLabel}
                                            onChange={(e) => setNewProject({ ...newProject, metricLabel: e.target.value })}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="URL de Imagen (Unsplash)"
                                        style={inputStyleAdmin}
                                        value={newProject.imageUrl}
                                        onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Descripción general del proyecto..."
                                        style={{ ...inputStyleAdmin, height: '80px', resize: 'none' }}
                                        value={newProject.description}
                                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                    ></textarea>
                                    <textarea
                                        placeholder="El Desafío (¿Qué problema resolvimos?)..."
                                        style={{ ...inputStyleAdmin, height: '80px', resize: 'none' }}
                                        value={newProject.challenge}
                                        onChange={(e) => setNewProject({ ...newProject, challenge: e.target.value })}
                                    ></textarea>
                                    <textarea
                                        placeholder="Nuestra Solución (Estrategia aplicada)..."
                                        style={{ ...inputStyleAdmin, height: '80px', resize: 'none' }}
                                        value={newProject.solution}
                                        onChange={(e) => setNewProject({ ...newProject, solution: e.target.value })}
                                    ></textarea>
                                    <textarea
                                        placeholder="Resultados clave (separados por coma)..."
                                        style={{ ...inputStyleAdmin, height: '80px', resize: 'none' }}
                                        value={newProject.results}
                                        onChange={(e) => setNewProject({ ...newProject, results: e.target.value })}
                                    ></textarea>

                                    <button
                                        onClick={handleAddProject}
                                        style={{ padding: '1rem', background: '#64ffda', border: 'none', borderRadius: '8px', color: '#0a192f', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}
                                    >
                                        Publicar en Web
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'settings' && (
                    <div style={{ maxWidth: '600px' }}>
                        <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Configuración de Marca</h1>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>Instagram URL</label>
                                <input
                                    type="text"
                                    value={tempSettings.instagram}
                                    onChange={(e) => setTempSettings({ ...tempSettings, instagram: e.target.value })}
                                    style={inputStyleAdmin}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>WhatsApp de Contacto</label>
                                <input
                                    type="text"
                                    value={tempSettings.whatsapp}
                                    onChange={(e) => setTempSettings({ ...tempSettings, whatsapp: e.target.value })}
                                    style={inputStyleAdmin}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>Email de Contacto</label>
                                <input
                                    type="text"
                                    value={tempSettings.email}
                                    onChange={(e) => setTempSettings({ ...tempSettings, email: e.target.value })}
                                    style={inputStyleAdmin}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>Nombre de la Agencia</label>
                                <input
                                    type="text"
                                    value={tempSettings.brandName}
                                    onChange={(e) => setTempSettings({ ...tempSettings, brandName: e.target.value })}
                                    style={inputStyleAdmin}
                                />
                            </div>

                            {/* Separador */}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                                <p style={{ color: '#FDFD88', fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                    🎯 Misión y Visión
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>Misión</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Describe la misión de tu agencia..."
                                            value={tempSettings.mision || ''}
                                            onChange={(e) => setTempSettings({ ...tempSettings, mision: e.target.value })}
                                            style={{ ...inputStyleAdmin, resize: 'vertical', lineHeight: 1.6 }}
                                        />
                                        <p style={{ color: '#687898', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                                            Texto que aparece en la tarjeta "Misión" de la web.
                                        </p>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#8892b0', marginBottom: '0.5rem' }}>Visión</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Describe la visión de tu agencia..."
                                            value={tempSettings.vision || ''}
                                            onChange={(e) => setTempSettings({ ...tempSettings, vision: e.target.value })}
                                            style={{ ...inputStyleAdmin, resize: 'vertical', lineHeight: 1.6 }}
                                        />
                                        <p style={{ color: '#687898', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                                            Texto que aparece en la tarjeta "Visión" de la web.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleSaveSettings}
                                style={{ padding: '1rem', background: '#FDFD88', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', marginTop: '1rem', cursor: 'pointer' }}
                            >
                                Sincronizar Cambios Globales
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
