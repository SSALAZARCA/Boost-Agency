import React from 'react';
import LegalPage from './LegalPage';
import { useSite } from '../context/SiteContext';

const PrivacyPolicy = () => {
    const { settings } = useSite();
    return (
        <LegalPage title="PRIVACY POLICY" lastUpdated="March 2, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>1. Data Controller</h2>
                <p>Boost Agency S.A.S. (“Boost”, “we”, “our”) is a company incorporated under the laws of the Republic of Colombia and domiciled in Bogotá, Colombia.</p>
                <p>Boost Agency is responsible for the processing of personal data collected through this website.</p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Contact email:</strong> {settings.email || 'contact@boost.agency'}<br />
                    <strong>Location:</strong> Bogotá, Colombia
                </p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    This Privacy Policy is issued in accordance with Colombian Law 1581 of 2012 and other applicable data protection regulations.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>2. Information We Collect</h2>
                <p>We collect personal information voluntarily provided by users through our website contact forms, including:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Full name</li>
                    <li style={{ marginBottom: '0.5rem' }}>Company name</li>
                    <li style={{ marginBottom: '0.5rem' }}>Email address</li>
                    <li style={{ marginBottom: '0.5rem' }}>Phone number</li>
                    <li style={{ marginBottom: '0.5rem' }}>Project-related information</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>We may also collect limited technical information such as IP address, browser type, device information, and website usage data (via analytics tools or cookies).</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>3. Use of Contact Forms and Database Storage</h2>
                <p>By submitting personal information through our website, users expressly authorize Boost Agency to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Store their information in an internal commercial database</li>
                    <li style={{ marginBottom: '0.5rem' }}>Contact them regarding proposals, services, or potential business opportunities</li>
                    <li style={{ marginBottom: '0.5rem' }}>Maintain communication related to potential or existing professional relationships</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Personal data will not be sold, rented, or shared with third parties for unrelated marketing purposes.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>4. Purpose of Data Processing</h2>
                <p>Personal data is processed exclusively for the following purposes:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Responding to inquiries</li>
                    <li style={{ marginBottom: '0.5rem' }}>Sending commercial proposals</li>
                    <li style={{ marginBottom: '0.5rem' }}>Establishing business relationships</li>
                    <li style={{ marginBottom: '0.5rem' }}>Managing client communications</li>
                    <li style={{ marginBottom: '0.5rem' }}>Improving website performance</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>5. Legal Basis for Processing</h2>
                <p>We process personal data based on the data subject’s explicit consent, legitimate business interest, and potential or existing contractual relationships.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>6. Data Retention</h2>
                <p>Personal data will be retained only for as long as necessary to fulfill the purposes described above or as required by applicable law. Users may request deletion of their data at any time.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>7. International Access and Transfers</h2>
                <p>As Boost Agency operates internationally and this website is accessible globally, personal data may be processed and stored in Colombia. By submitting personal information, users consent to this processing location.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>8. Rights of Data Subjects</h2>
                <p>In accordance with Colombian law and applicable international regulations, data subjects have the right to know, update, and rectify their personal data, request proof of authorization, request deletion of data when applicable, and revoke consent.</p>
                <p style={{ marginTop: '1rem' }}>
                    Requests may be submitted to: <strong>{settings.email || 'contact@boost.agency'}</strong>
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>9. Data Security</h2>
                <p>Boost Agency implements reasonable administrative, technical, and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>10. Cookies and Analytics</h2>
                <p>This website may use cookies and analytics tools to improve browsing experience, analyze website performance, and optimize digital content. For more information, please refer to our Cookie Policy.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>11. Updates to This Policy</h2>
                <p>Boost Agency reserves the right to update this Privacy Policy at any time. The most recent version will always be available on this page.</p>
            </section>
        </LegalPage>
    );
};

export default PrivacyPolicy;
