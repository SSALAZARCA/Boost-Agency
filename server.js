import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serving static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Database Setup - Enhanced for Docker/Coolify Persistence
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'database.sqlite');
let db;
(async () => {
    try {
        db = await open({
            filename: DB_PATH,
            driver: sqlite3.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS settings (
                id TEXT PRIMARY KEY,
                instagram TEXT,
                whatsapp TEXT,
                email TEXT,
                brand_name TEXT
            );

            CREATE TABLE IF NOT EXISTS leads (
                id TEXT PRIMARY KEY,
                name TEXT,
                company TEXT,
                email TEXT,
                message TEXT,
                date TEXT,
                status TEXT,
                notes TEXT
            );

            CREATE TABLE IF NOT EXISTS projects (
                id TEXT PRIMARY KEY,
                title TEXT,
                category TEXT,
                metric TEXT,
                metric_label TEXT,
                image_url TEXT,
                description TEXT,
                challenge TEXT,
                solution TEXT,
                results TEXT
            );

            -- Initial Settings
            INSERT OR IGNORE INTO settings (id, instagram, whatsapp, email, brand_name) 
            VALUES ('global', 'https://instagram.com/boost', '+1 234 567 890', 'hi@boost.agency', 'BOOST AGENCY');
        `);
        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Database initialization error:', err);
    }
})();

// Settings API
app.get('/api/settings', async (req, res) => {
    try {
        const settings = await db.get('SELECT * FROM settings WHERE id = "global"');
        res.json(settings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/settings', async (req, res) => {
    try {
        const { instagram, whatsapp, email, brandName } = req.body;
        await db.run(
            'UPDATE settings SET instagram = ?, whatsapp = ?, email = ?, brand_name = ? WHERE id = "global"',
            [instagram, whatsapp, email, brandName]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Leads API
app.get('/api/leads', async (req, res) => {
    try {
        const leads = await db.all('SELECT * FROM leads ORDER BY date DESC');
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/leads', async (req, res) => {
    try {
        const { name, company, email, message } = req.body;
        const id = uuidv4();
        const date = new Date().toISOString().split('T')[0];
        await db.run(
            'INSERT INTO leads (id, name, company, email, message, date, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id, name, company, email, message, date, 'Nuevo', '']
        );
        res.json({ success: true, id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/leads/:id', async (req, res) => {
    try {
        const { status, notes } = req.body;
        await db.run('UPDATE leads SET status = ?, notes = ? WHERE id = ?', [status, notes, req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Projects API
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await db.all('SELECT * FROM projects');
        const parsed = projects.map(p => ({
            ...p,
            results: JSON.parse(p.results),
            metricLabel: p.metric_label,
            imageUrl: p.image_url
        }));
        res.json(parsed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        const id = project.title.toLowerCase().replace(/\s+/g, '-');
        const results = JSON.stringify(Array.isArray(project.results) ? project.results : project.results.split(',').map(r => r.trim()));

        await db.run(
            'INSERT INTO projects (id, title, category, metric, metric_label, image_url, description, challenge, solution, results) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [id, project.title, project.category, project.metric, project.metricLabel, project.imageUrl, project.description, project.challenge, project.solution, results]
        );
        res.json({ success: true, id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/projects/:id', async (req, res) => {
    try {
        await db.run('DELETE FROM projects WHERE id = ?', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// SPA catch-all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
