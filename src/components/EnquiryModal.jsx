import React, { useState } from 'react';
import { X, Calendar, Users, Utensils, Phone, User, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { contactDetails } from '../data/content';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Catering',
    eventDate: '',
    guestCount: 250,
    mealType: 'Lunch Banquet',
    city: 'Mangalore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Estimated range based on guests
  const estimatedMin = formData.guestCount * 280;
  const estimatedMax = formData.guestCount * 450;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(13, 56, 43, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={resetAndClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '620px',
          padding: '2.5rem 2rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          border: '2px solid var(--gold-primary)',
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'fadeInScale 0.35s cubic-bezier(0.2,0.8,0.2,1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-medium)',
            cursor: 'pointer'
          }}
        >
          <X size={26} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.15)',
                border: '3px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-emerald)',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={46} color="var(--gold-primary)" />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--primary-emerald)', marginBottom: '0.8rem' }}>
              Enquiry Received!
            </h3>

            <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.name}</strong>! Our event executive will call you shortly at <strong>{formData.phone}</strong> to discuss your customized menu and event arrangements for <strong>{formData.guestCount} guests</strong>.
            </p>

            <div
              style={{
                background: 'var(--bg-cream-main)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem',
                marginBottom: '2rem',
                border: '1px solid rgba(197, 160, 89, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: 700, textTransform: 'uppercase' }}>
                DIRECT HOTLINE SUPPORT
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-emerald)', marginTop: '0.3rem' }}>
                {contactDetails.phone1} / {contactDetails.phone2}
              </div>
            </div>

            <button onClick={resetAndClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              DONE
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--primary-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)'
                }}
              >
                <Sparkles size={22} />
              </div>
              <div>
                <span className="section-subtext" style={{ fontSize: '0.75rem', marginBottom: 0 }}>
                  BOOKING & ESTIMATION
                </span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-emerald)' }}>
                  Event Catering Enquiry
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(197, 160, 89, 0.4)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '0.4rem' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(197, 160, 89, 0.4)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Event Type & Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '0.4rem' }}>
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#FFFFFF'
                    }}
                  >
                    <option value="Wedding Catering">Wedding Catering</option>
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="House Warming">House Warming</option>
                    <option value="Corporate Event">Corporate Event</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '0.4rem' }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)' }}>
                    Expected Guest Count: <strong style={{ color: 'var(--gold-dark)', fontSize: '1.1rem' }}>{formData.guestCount} Guests</strong>
                  </label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)' }}>100 - 5000+</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  style={{
                    width: '100%',
                    accentColor: 'var(--gold-primary)',
                    cursor: 'pointer'
                  }}
                />
              </div>



              {/* Location & Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '0.4rem' }}>
                  Event Location & Special Demands
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Mangalore Hall / Special vegetarian menu requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                SUBMIT ENQUIRY FOR FREE QUOTE
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
