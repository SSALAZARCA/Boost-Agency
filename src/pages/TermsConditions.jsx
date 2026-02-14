import React from 'react';
import LegalPage from './LegalPage';

const TermsConditions = () => {
    return (
        <LegalPage title="Términos y Condiciones" lastUpdated="13 de febrero, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>1. Aceptación de Términos</h2>
                <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>2. Propiedad Intelectual</h2>
                <p>Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes y software, es propiedad exclusiva de Boost Agency o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>3. Uso del Sitio</h2>
                <p>Se le otorga una licencia limitada para acceder y hacer uso personal de este sitio. No está permitido descargar, modificar o distribuir ninguna parte del sitio sin el consentimiento expreso por escrito de nuestra agencia.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>4. Limitación de Responsabilidad</h2>
                <p>Boost Agency no será responsable de ningún daño derivado del uso de este sitio o de cualquier información, contenido o servicios incluidos en él. Buscamos la excelencia, pero el uso de la web es bajo su propio riesgo.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>5. Modificaciones</h2>
                <p>Nos reservamos el derecho de realizar cambios en nuestro sitio, políticas y estos Términos y Condiciones en cualquier momento sin previo aviso.</p>
            </section>
        </LegalPage>
    );
};

export default TermsConditions;
