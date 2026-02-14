import React from 'react';
import LegalPage from './LegalPage';

const CookiesPolicy = () => {
    return (
        <LegalPage title="Política de Cookies" lastUpdated="13 de febrero, 2026">
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>1. ¿Qué son las Cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>2. Uso de Cookies en Boost</h2>
                <p>En este sitio web utilizamos las siguientes cookies:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Cookies Técnicas:</strong> Esenciales para el funcionamiento del sitio y la navegación básica.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Cookies de Análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Cookies de Personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>3. Cómo Desactivar las Cookies</h2>
                <p>En cualquier momento usted puede ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#ffbd69', marginBottom: '1.5rem' }}>4. Notas Adicionales</h2>
                <p>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</p>
            </section>
        </LegalPage>
    );
};

export default CookiesPolicy;
