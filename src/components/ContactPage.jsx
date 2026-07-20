import React, { useState, useEffect } from 'react';
import { contactDetails } from '../data/content';
import { MapPin, Phone, Mail, ThumbsUp, Calendar, User, CheckCircle2, Sparkles, Send, Utensils } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Catering',
    eventDate: '',
    guestCount: 250,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const estimatedMin = formData.guestCount * 280;
  const estimatedMax = formData.guestCount * 450;

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Hero Banner Header with Curved Bottom matching Image 1 */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(13,56,43,0.85) 0%, rgba(10,42,32,0.94) 100%), url("/assets/hero_buffet.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 1.5rem 6.5rem 1.5rem',
          color: '#FFFFFF',
          textAlign: 'center',
          borderBottomLeftRadius: '50% 40px',
          borderBottomRightRadius: '50% 40px',
          boxShadow: '0 15px 40px rgba(13, 56, 43, 0.15)'
        }}
      >
        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          {/* Gold Cloche Dish Icon & Badge */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '1rem'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.2)',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)'
              }}
            >
              <Utensils size={18} />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--gold-light)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: 'var(--gold-primary)' }}>—✦</span>
              CELEBRATE EVERY MOMENT
              <span style={{ color: 'var(--gold-primary)' }}>✦—</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1.2rem',
              lineHeight: 1.15
            }}
          >
            Let’s Make Your <br />
            <span style={{ color: 'var(--gold-bright)' }}>Event Unforgettable</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: 400
            }}
          >
            We’re here to make your event successful and stress-free. Contact us today for bookings and inquiries.
          </p>
        </div>
      </section>

      {/* 2. 4 Info Cards Section matching Image 1 */}
      <section className="section-padding" style={{ position: 'relative', marginTop: '-1rem' }}>
        <div className="container">
          {/* Section Subheader */}
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--gold-primary)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}
            >
              <span>—✦</span> GET IN TOUCH <span>✦—</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--primary-emerald)'
              }}
            >
              We’d Love to Hear From You
            </h2>
          </div>

          {/* 4 Cards Grid (Soft Cream/White cards with Gold Borders & Dark Green Icon Badges) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
            className="contact-cards-new"
          >
            {/* Box 1: Address */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(13, 56, 43, 0.06)',
                border: '1.5px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.35s ease, border-color 0.35s ease'
              }}
              className="new-info-card"
            >
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: 'var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  marginBottom: '1.2rem',
                  boxShadow: '0 6px 16px rgba(13, 56, 43, 0.2)'
                }}
              >
                <MapPin size={26} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--gold-dark)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem'
                }}
              >
                ADDRESS
              </h3>
              <p style={{ color: 'var(--text-medium)', fontSize: '0.92rem', lineHeight: 1.5, fontWeight: 500 }}>
                {contactDetails.location1}<br />
                {contactDetails.location2}
              </p>
            </div>

            {/* Box 2: Phone */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(13, 56, 43, 0.06)',
                border: '1.5px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.35s ease, border-color 0.35s ease'
              }}
              className="new-info-card"
            >
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: 'var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  marginBottom: '1.2rem',
                  boxShadow: '0 6px 16px rgba(13, 56, 43, 0.2)'
                }}
              >
                <Phone size={26} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--gold-dark)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem'
                }}
              >
                PHONE
              </h3>
              <p style={{ color: 'var(--text-medium)', fontSize: '0.92rem', lineHeight: 1.5, fontWeight: 600 }}>
                +91 {contactDetails.phone1}<br />
                +91 {contactDetails.phone2}
              </p>
            </div>

            {/* Box 3: Email */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(13, 56, 43, 0.06)',
                border: '1.5px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.35s ease, border-color 0.35s ease'
              }}
              className="new-info-card"
            >
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: 'var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  marginBottom: '1.2rem',
                  boxShadow: '0 6px 16px rgba(13, 56, 43, 0.2)'
                }}
              >
                <Mail size={26} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--gold-dark)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem'
                }}
              >
                EMAIL
              </h3>
              <p style={{ color: 'var(--text-medium)', fontSize: '0.88rem', lineHeight: 1.5, fontWeight: 500 }}>
                {contactDetails.email}<br />
                preethicaterers@gmail.com
              </p>
            </div>

            {/* Box 4: Connect */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(13, 56, 43, 0.06)',
                border: '1.5px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.35s ease, border-color 0.35s ease'
              }}
              className="new-info-card"
            >
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: 'var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  marginBottom: '1.2rem',
                  boxShadow: '0 6px 16px rgba(13, 56, 43, 0.2)'
                }}
              >
                <ThumbsUp size={26} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--gold-dark)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem'
                }}
              >
                CONNECT
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--primary-emerald)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="social-btn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--primary-emerald)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="social-btn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Center Decorative Ornament Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem 0 3.5rem 0' }}>
            <div style={{ width: '80px', height: '1px', background: 'var(--gold-primary)' }} />
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-dark)',
                background: '#FAF7F2'
              }}
            >
              <Utensils size={14} />
            </div>
            <div style={{ width: '80px', height: '1px', background: 'var(--gold-primary)' }} />
          </div>

          {/* 3. Interactive Full-Width Office Location & Google Map */}
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-subtext">OUR LOCATION</span>
              <h2 className="section-title">Visit Our Office</h2>
              <div className="gold-divider" style={{ margin: '0.8rem auto 1.5rem auto' }} />
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 15px 45px rgba(13, 56, 43, 0.1)',
                border: '2px solid rgba(197, 160, 89, 0.4)',
                height: '500px'
              }}
            >
              <iframe
                title="Preethi Caterers Mangalore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0123456789!2d74.8395!3d12.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzQzLjgiTiA3NMKwNTAnMjIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .new-info-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold-primary) !important;
          box-shadow: 0 16px 35px rgba(13, 56, 43, 0.12) !important;
        }
        .social-btn:hover {
          transform: scale(1.15);
          background: var(--gold-primary) !important;
        }
        @media (max-width: 992px) {
          .contact-cards-new {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-section-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .contact-cards-new {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
