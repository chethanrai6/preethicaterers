import React from 'react';
import { contactDetails, navLinks } from '../data/content';
import { ChefHat, Phone, MapPin, Mail, ChevronRight, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenEnquiry, onNavigate }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer
      id="contact"
      style={{
        background: '#FAF7F2',
        borderTop: '2px solid rgba(197, 160, 89, 0.3)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 0.9fr 1.3fr',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="footer-grid"
        >
          {/* Column 1: Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.2rem' }}>
              <img
                src="/assets/logo_preethi.png"
                alt="Preethi Caterers Logo"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.45rem', color: 'var(--primary-emerald)', lineHeight: 1.1 }}>
                  PREETHI
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--gold-primary)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                  CATERERS
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', lineHeight: 1.6, marginBottom: '1.2rem', maxWidth: '300px' }}>
              Creating unforgettable culinary experiences and grand event arrangements for weddings, receptions, and special celebrations since 1999.
            </p>

            <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--gold-primary)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              GOOD FOOD. GREAT MEMORIES.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--primary-emerald)', marginBottom: '1.2rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-medium)',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-medium)')}
                  >
                    <ChevronRight size={14} color="var(--gold-primary)" />
                    {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--primary-emerald)', marginBottom: '1.2rem' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['Catering', 'Decorators', 'Arrangers', 'Event Management'].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-medium)',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-medium)')}
                  >
                    <ChevronRight size={14} color="var(--gold-primary)" />
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Social Links */}
          <div style={{ position: 'relative' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--primary-emerald)', marginBottom: '1.2rem' }}>
              Contact Us
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-dark)' }}>
                <Phone size={18} color="var(--gold-primary)" />
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                  <div>{contactDetails.phone1}</div>
                  <div>{contactDetails.phone2}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-dark)' }}>
                <MapPin size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                  <div>{contactDetails.location1}</div>
                  <div>{contactDetails.location2}</div>
                </div>
              </div>
            </div>

            {/* Follow Us Social Media Icons */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-emerald)', marginBottom: '0.6rem' }}>
                Follow Us
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#1877F2',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="social-icon"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="social-icon"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="social-icon"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(197, 160, 89, 0.2)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-medium)'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Preethi Caterers</strong>. All Rights Reserved.
          </div>
          <div>
            Designed with Elegance & Passion for Great Food.
          </div>
        </div>
      </div>

      {/* Decorative Biryani Handi Image in Bottom Right Corner matching Reference */}
      <img
        src="/assets/biryani_handi.png"
        alt="Preethi Caterers Dum Biryani"
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-30px',
          width: '340px',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.25))'
        }}
        className="footer-handi-img"
      />

      <style>{`
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-handi-img {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
