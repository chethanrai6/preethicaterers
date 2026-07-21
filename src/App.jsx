import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import MenuExplorer from './components/MenuExplorer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import QuickContactWidget from './components/QuickContactWidget';
import ServiceDetailPage from './components/ServiceDetailPage';
import ContactPage from './components/ContactPage';
import { X } from 'lucide-react';

export default function App() {
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  
  // Page Navigation View State: 'home' | 'service_detail' | 'contact'
  const [currentView, setCurrentView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-slide-left, .stagger-slide-right, .stagger-child');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentView, selectedServiceId]);

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service_detail');
    window.scrollTo(0, 0);
  };

  const handleOpenContactPage = () => {
    setCurrentView('contact');
    setSelectedServiceId(null);
    window.scrollTo(0, 0);
  };

  const handleBackToServices = () => {
    setCurrentView('home');
    setSelectedServiceId(null);
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo(0, 0);
    }, 100);
  };

  const handleNavigate = (href) => {
    const targetId = href ? href.replace('#', '') : 'home';
    if (targetId === 'contact') {
      handleOpenContactPage();
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setSelectedServiceId(null);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo(0, 0);
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo(0, 0);
    }
  };

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Header
        onOpenEnquiry={handleOpenContactPage}
        onNavigate={handleNavigate}
      />

      {/* Page Routing Views with Slide & Pinch Animations */}
      <div key={currentView + (selectedServiceId || '')} className="page-view-enter" style={{ flex: 1 }}>
        {currentView === 'contact' ? (
          <ContactPage />
        ) : currentView === 'service_detail' && selectedServiceId ? (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onBack={handleBackToServices}
            onOpenEnquiry={handleOpenContactPage}
            onSelectService={handleSelectService}
          />
        ) : (
          <main>
            {/* Section 01: HOME */}
            <Hero
              onOpenEnquiry={handleOpenContactPage}
              onOpenVideo={() => setActiveVideoUrl('/assets/video1.mp4')}
            />

            {/* Section 02: ABOUT US */}
            <AboutUs onOpenEnquiry={handleOpenContactPage} />

            {/* Section 03: SERVICES */}
            <Services
              onOpenEnquiry={handleOpenContactPage}
              onSelectService={handleSelectService}
            />

            {/* Interactive Gourmet Menu Explorer */}
            <MenuExplorer onOpenEnquiry={handleOpenContactPage} />

            {/* Section 04: GALLERY */}
            <Gallery
              onOpenVideo={(url) => setActiveVideoUrl(url)}
              onOpenImageLightbox={(img, title) => setActiveImage({ img, title })}
            />

            {/* Customer Reviews & Testimonials */}
            <Testimonials />
          </main>
        )}
      </div>

      {/* Footer Section */}
      <Footer
        onOpenEnquiry={handleOpenContactPage}
        onNavigate={handleNavigate}
      />

      {/* Floating Quick Action Widget */}
      <QuickContactWidget onOpenEnquiry={handleOpenContactPage} />

      {/* Video Player Lightbox Modal */}
      <VideoModal videoUrl={activeVideoUrl} onClose={() => setActiveVideoUrl(null)} />

      {/* Photo Lightbox Modal */}
      {activeImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeInUp 0.3s ease'
          }}
          onClick={() => setActiveImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              border: '2px solid var(--gold-primary)',
              animation: 'pinchZoomSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img
              src={activeImage.img}
              alt={activeImage.title}
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            <div style={{ padding: '1.2rem', background: '#0D382B', color: '#FFFFFF', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--gold-primary)' }}>
                {activeImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
