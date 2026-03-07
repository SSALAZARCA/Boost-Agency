import React from 'react';
import LegalPage from './LegalPage';

const CookiesPolicy = () => {
    return (
        <LegalPage title="COOKIE POLICY" lastUpdated="March 2, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>1. What Are Cookies?</h2>
                <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience, and provide insights into site performance.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>2. How We Use Cookies</h2>
                <p>Boost Agency uses cookies for the following purposes:</p>
                <div style={{ marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>a) Essential Cookies</h3>
                    <p>These cookies are necessary for the proper functioning of the website and cannot be disabled. They enable basic features such as page navigation and form submission.</p>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>b) Analytics Cookies</h3>
                    <p>We may use analytics tools (such as Google Analytics or similar services) to collect aggregated information about how visitors interact with our website, including:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Pages visited</li>
                        <li style={{ marginBottom: '0.5rem' }}>Time spent on the website</li>
                        <li style={{ marginBottom: '0.5rem' }}>General geographic region</li>
                        <li style={{ marginBottom: '0.5rem' }}>Device and browser type</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>This information is collected in aggregated and anonymized form and does not directly identify individual users.</p>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>c) Performance & Optimization</h3>
                    <p>Cookies may help us understand website performance and improve user experience.</p>
                </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>3. Third-Party Cookies</h2>
                <p>Some cookies may be placed by third-party services integrated into our website, such as analytics providers. These third parties may process data in accordance with their own privacy policies. Boost Agency does not control third-party cookie practices.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>4. Legal Basis</h2>
                <p>Cookies are used based on legitimate interest to improve website performance and ensure proper functionality. Where required by applicable laws, user consent may be requested before placing non-essential cookies.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>5. Managing Cookies</h2>
                <p>Users may manage or disable cookies through their browser settings. Most browsers allow you to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Block cookies</li>
                    <li style={{ marginBottom: '0.5rem' }}>Delete stored cookies</li>
                    <li style={{ marginBottom: '0.5rem' }}>Receive notifications before cookies are stored</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Please note that disabling certain cookies may affect website functionality.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>6. Changes to This Policy</h2>
                <p>Boost Agency reserves the right to update this Cookie Policy at any time. Updates will be reflected on this page with a revised date.</p>
            </section>
        </LegalPage>
    );
};

export default CookiesPolicy;
