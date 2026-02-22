import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AudienceSection from './components/AudienceSection';
import IdentitySection from './components/IdentitySection';
import PromiseSection from './components/PromiseSection';
import MethodologySection from './components/MethodologySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MisionVisionSection from './components/MisionVisionSection';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import AdminPanel from './components/admin/AdminPanel';
import CaseStudyDetail from './pages/CaseStudyDetail';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiesPolicy from './pages/CookiesPolicy';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <SiteProvider>
      <Router>
        <div className="app-container">
          <CustomCursor />
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <Hero />
                  <AboutSection />
                  <ServicesSection />
                  <MisionVisionSection />
                  <PortfolioSection />
                  <AudienceSection />
                  <IdentitySection />
                  <PromiseSection />
                  <MethodologySection />
                  <ContactSection />
                </main>
                <Footer />
              </>
            } />

            {/* Admin Panel Route */}
            <Route path="/admin" element={<AdminPanel />} />

            {/* Portfolio Case Study Route */}
            <Route path="/portfolio/:id" element={<CaseStudyDetail />} />

            {/* All Projects Page */}
            <Route path="/proyectos" element={<ProjectsPage />} />

            {/* Legal Routes */}
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos" element={<TermsConditions />} />
            <Route path="/cookies" element={<CookiesPolicy />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </SiteProvider>
  );
}

export default App;
