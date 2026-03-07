import React from 'react';
import LegalPage from './LegalPage';

const TermsConditions = () => {
    return (
        <LegalPage title="TERMS & CONDITIONS" lastUpdated="February 13, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>1. Introduction</h2>
                <p>These Terms & Conditions govern the use of this website operated by Boost Agency S.A.S., a company incorporated under the laws of Colombia and domiciled in Bogotá, Colombia. By accessing or using this website, you agree to comply with these Terms. If you do not agree, please discontinue use of the site.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>2. Informational Purpose</h2>
                <p>This website is provided for informational purposes only. The content available on this site does not constitute legal, financial, or professional advice, nor does it create any contractual relationship between Boost Agency and the user. Any services described are subject to separate written agreements.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>3. Intellectual Property</h2>
                <p>All content, including text, branding elements, graphics, layouts, and strategic frameworks, is the intellectual property of Boost Agency S.A.S., unless otherwise stated. No content may be copied, reproduced, distributed, modified, or exploited without prior written authorization.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>4. Accuracy of Information</h2>
                <p>While we strive to ensure that the information on this website is accurate and up to date, Boost Agency makes no warranties or representations regarding completeness, reliability, or accuracy. We reserve the right to modify content at any time without prior notice.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>5. External Links</h2>
                <p>This website may contain links to third-party websites. Boost Agency is not responsible for the content, policies, or practices of any external sites.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>6. Limitation of Liability</h2>
                <p>Boost Agency shall not be liable for any direct or indirect damages arising from the use of this website, including but not limited to technical interruptions, errors, or omissions. Use of this website is at your own discretion and risk.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>7. Acceptable Use</h2>
                <p>Users agree not to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Use the website for unlawful purposes</li>
                    <li style={{ marginBottom: '0.5rem' }}>Attempt unauthorized access to systems</li>
                    <li style={{ marginBottom: '0.5rem' }}>Introduce harmful or malicious content</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>8. Governing Law</h2>
                <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the Republic of Colombia.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>9. Updates</h2>
                <p>Boost Agency reserves the right to update these Terms at any time. Continued use of the website implies acceptance of any modifications.</p>
            </section>
        </LegalPage>
    );
};

export default TermsConditions;
