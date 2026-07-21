import React, { useState } from 'react';
import { servicesData } from '../data/content';
import {
  Heart,
  CookingPot,
  Gem,
  Baby,
  Home,
  Briefcase,
  UtensilsCrossed,
  Tent,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

const iconMap = {
  Heart: Heart,
  Cloche: CookingPot,
  Gem: Gem,
  Baby: Baby,
  Home: Home,
  Briefcase: Briefcase,
  UtensilsCrossed: UtensilsCrossed,
  Tent: Tent
};

export default function Services({ onOpenEnquiry, onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        background: '#FAF7F2',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtext stagger-slide-right">OUR SERVICES</span>
          <h2 className="section-title stagger-slide-left">Catering & Event Solutions</h2>
          <div className="gold-divider" />
        </div>

        {/* 8 Cards Grid (Staggered Side Entrances One-by-One) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
          className="services-grid stagger-parent"
        >
          {servicesData.map((service) => {
            const IconComp = iconMap[service.icon] || Heart;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService ? onSelectService(service.id) : setSelectedService(service)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 6px 20px rgba(13, 56, 43, 0.05)',
                  border: '1px solid rgba(197, 160, 89, 0.2)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="service-card stagger-child"
              >
                {/* Top Icon Badge */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--bg-cream-main)',
                    border: '1.5px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-emerald)',
                    marginBottom: '1.2rem',
                    transition: 'transform 0.35s ease'
                  }}
                  className="service-icon-box"
                >
                  <IconComp size={28} strokeWidth={1.7} color="var(--primary-emerald)" />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary-emerald)',
                    marginBottom: '0.8rem',
                    lineHeight: 1.3
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-medium)',
                    lineHeight: 1.5,
                    marginBottom: '1.2rem'
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--gold-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenEnquiry} className="btn-primary">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13, 56, 43, 0.7)',
            backdropFilter: 'blur(6px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedService(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem 2rem',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              border: '2px solid var(--gold-primary)',
              animation: 'fadeInScale 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-medium)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'var(--bg-cream-main)',
                  border: '2px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sparkles size={24} color="var(--primary-emerald)" />
              </div>
              <div>
                <span className="section-subtext" style={{ fontSize: '0.75rem', marginBottom: 0 }}>
                  SERVICE DETAILS
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-emerald)' }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-dark)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedService.details}
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenEnquiry();
                }}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                BOOK THIS SERVICE
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 35px rgba(13, 56, 43, 0.12) !important;
          border-color: var(--gold-primary) !important;
        }
        .service-card:hover .service-icon-box {
          transform: scale(1.1);
          background: var(--gold-primary) !important;
          color: white !important;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
