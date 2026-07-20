import React, { useState, useEffect } from 'react';
import { navLinks, contactDetails } from '../data/content';
import { Phone, Menu, X, ChefHat, Calendar, ChevronRight } from 'lucide-react';

export default function Header({ onOpenEnquiry, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        transition: 'all 0.35s ease',
        background: isScrolled ? 'rgba(250, 247, 242, 0.96)' : '#FAF7F2',
        boxShadow: isScrolled ? '0 4px 20px rgba(13, 56, 43, 0.08)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo Branding */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        >
          <img
            src="/assets/logo_preethi.png"
            alt="Preethi Caterers Logo"
            style={{
              height: '54px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(13, 56, 43, 0.15))'
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.45rem',
                color: 'var(--primary-emerald)',
                letterSpacing: '1px',
                lineHeight: 1.1
              }}
            >
              PREETHI
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--gold-primary)',
                letterSpacing: '2.5px',
                textTransform: 'uppercase'
              }}
            >
              CATERERS
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: 'var(--primary-emerald)',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '1px',
                transition: 'color 0.25s ease',
                position: 'relative',
                padding: '0.2rem 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-emerald)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={onOpenEnquiry}
            className="btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.85rem' }}
          >
            <Calendar size={16} />
            ENQUIRE NOW
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--primary-emerald)',
              cursor: 'pointer',
              padding: '0.4rem',
              marginLeft: '0.4rem'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(13, 56, 43, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeInUp 0.3s ease'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '82%',
              maxWidth: '340px',
              height: '100%',
              background: '#FAF7F2',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-8px 0 30px rgba(0,0,0,0.2)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ChefHat size={24} color="var(--gold-primary)" />
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--primary-emerald)', fontSize: '1.2rem' }}>
                  PREETHI CATERERS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-medium)', cursor: 'pointer' }}
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: 'auto' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--primary-emerald)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.15)'
                  }}
                >
                  {link.name}
                  <ChevronRight size={18} color="var(--gold-primary)" />
                </a>
              ))}
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={18} />
                ENQUIRE NOW
              </button>
              <a
                href={`tel:${contactDetails.phone1.replace(/\s+/g, '')}`}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <Phone size={18} />
                CALL: {contactDetails.phone1}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
