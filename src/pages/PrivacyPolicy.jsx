import React from 'react';
import LegalPage from './LegalPage';

const PrivacyPolicy = () => {
    return (
        <LegalPage title="Política de Privacidad" lastUpdated="13 de febrero, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>1. Compromiso de Privacidad</h2>
                <p>En Boost Agency, valoramos la privacidad de nuestros clientes y visitantes. Esta política detalla cómo recopilamos, utilizamos y protegemos su información personal cuando interactúa con nuestra plataforma estratégica.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>2. Recopilación de Datos</h2>
                <p>Recopilamos información que usted nos proporciona voluntariamente a través de nuestro formulario de contacto, incluyendo:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Nombre y Empresa.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Dirección de correo electrónico.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Mensajes y requerimientos estratégicos.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>3. Uso de la Información</h2>
                <p>La información recopilada se utiliza exclusivamente para:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Responder a sus consultas de servicios.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Enviar propuestas comerciales personalizadas.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Mejorar nuestra experiencia de usuario y servicios de marketing.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>4. Seguridad</h2>
                <p>Implementamos medidas de seguridad de nivel industrial para proteger sus datos contra el acceso no autorizado, alteración o divulgación. Sus datos se almacenan en servidores seguros con cifrado de alta calidad.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>5. Contacto</h2>
                <p>Para cualquier duda sobre su privacidad, puede contactarnos en legal@boost.agency.</p>
            </section>
        </LegalPage>
    );
};

export default PrivacyPolicy;
