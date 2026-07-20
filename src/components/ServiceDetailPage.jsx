import React, { useEffect } from 'react';
import { serviceDetailsData } from '../data/serviceDetails';
import { servicesData } from '../data/content';
import { ArrowLeft, CheckCircle2, Heart, CookingPot, Gem, Baby, Home, Briefcase, UtensilsCrossed, Tent, Phone, Calendar, ArrowRight } from 'lucide-react';

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

export default function ServiceDetailPage({ serviceId, onBack, onOpenEnquiry, onSelectService }) {
  const service = serviceDetailsData[serviceId] || serviceDetailsData['wedding'];
  const IconComp = iconMap[service.icon] || Heart;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const otherServices = servicesData.filter((s) => s.id !== serviceId);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* 1. Hero Banner Header matching screenshot 2 */}
      <section
        style={{
          position: 'relative',
          background: `linear-gradient(180deg, rgba(13,56,43,0.7) 0%, rgba(13,56,43,0.85) 100%), url(${service.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '4.5rem',
          color: '#FFFFFF'
        }}
      >
        <div className="container">
          {/* Back to Services Button */}
          <button
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              marginBottom: '2.5rem',
              transition: 'var(--transition-normal)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
          >
            <ArrowLeft size={16} /> BACK TO ALL SERVICES
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', flexWrap: 'wrap' }}>
            {/* Circular Service Icon Badge */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E65100, #F57C00)',
                border: '3px solid #FFFFFF',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0
              }}
            >
              <IconComp size={40} strokeWidth={2} />
            </div>

            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  marginBottom: '0.5rem'
                }}
              >
                {service.title}
              </h1>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '700px',
                  fontWeight: 500
                }}
              >
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview Section matching screenshots 2 & 3 */}
      <section className="section-padding" style={{ background: '#FAF7F2' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3.5rem',
              alignItems: 'center'
            }}
            className="overview-grid"
          >
            {/* Left Column Text Content */}
            <div>
              <div
                style={{
                  color: '#E65100',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <div style={{ width: '30px', height: '2px', background: '#E65100' }} />
                SERVICE OVERVIEW
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#4A121A',
                  marginBottom: '1.5rem',
                  lineHeight: 1.25
                }}
              >
                {service.overviewTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                {service.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1.02rem', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                    {p}
                  </p>
                ))}
              </div>

              <button onClick={onOpenEnquiry} className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                <Calendar size={18} /> Contact Us
              </button>
            </div>

            {/* Right Column 3-Image Showcase matching screenshot 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Top Main Large Image */}
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  height: '280px',
                  border: '3px solid #FFFFFF'
                }}
              >
                <img
                  src={service.mainImage}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bottom 2 Side-by-Side Images */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    height: '160px',
                    border: '3px solid #FFFFFF'
                  }}
                >
                  <img
                    src={service.subImage1}
                    alt="Catering Setup"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    height: '160px',
                    border: '3px solid #FFFFFF'
                  }}
                >
                  <img
                    src={service.subImage2}
                    alt="Event Banquet"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT WE OFFER" Section matching screenshots 4 & 5 */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <div
              style={{
                color: '#E65100',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div style={{ width: '25px', height: '2px', background: '#E65100' }} />
              WHAT WE OFFER
              <div style={{ width: '25px', height: '2px', background: '#E65100' }} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#4A121A'
              }}
            >
              Everything You Need, Nothing Less
            </h2>
          </div>

          {/* 8 Offers Checkmark Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem'
            }}
            className="offers-grid"
          >
            {service.offers.map((offerText, i) => (
              <div
                key={i}
                style={{
                  background: '#FAF7F2',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.6rem 1.4rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  transition: 'transform 0.3s ease'
                }}
                className="offer-card"
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-dark)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <CheckCircle2 size={18} strokeWidth={2.2} />
                </div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#2D3748',
                    lineHeight: 1.45
                  }}
                >
                  {offerText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Switcher Section: Move Between Other Services */}
      <section className="section-padding" style={{ background: '#FAF7F2', borderTop: '1px solid rgba(197, 160, 89, 0.2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-subtext">EXPLORE MORE SERVICES</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--primary-emerald)' }}>
              Explore Other Catering & Event Solutions
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              Click any service below to view its dedicated page and features.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.2rem'
            }}
            className="other-services-grid"
          >
            {otherServices.map((srv) => {
              const SrvIcon = iconMap[srv.icon] || Heart;
              return (
                <div
                  key={srv.id}
                  onClick={() => onSelectService && onSelectService(srv.id)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.4rem 1.2rem',
                    boxShadow: '0 4px 15px rgba(13, 56, 43, 0.05)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    cursor: 'pointer',
                    transition: 'var(--transition-normal)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                  className="other-service-card"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--bg-cream-main)',
                      border: '1px solid var(--gold-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-emerald)',
                      flexShrink: 0
                    }}
                  >
                    <SrvIcon size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-emerald)' }}>
                      {srv.title}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Complete Catering & Event Solutions Yellow Banner matching screenshot 5 */}
      <section
        style={{
          background: 'linear-gradient(135deg, #F8C545, #F5B82E)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          color: '#0D382B'
        }}
      >
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#0D382B',
              marginBottom: '1rem'
            }}
          >
            Complete Catering & Event Solutions
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#1A4D3E',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem auto',
              fontWeight: 500
            }}
          >
            We don't just serve food we create experiences. Along with catering, we offer complete event arrangements including shamiyana, seating, lighting, and décor, ensuring a hassle-free celebration.
          </p>

          <button onClick={onOpenEnquiry} className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
            <Calendar size={18} /> BOOK THIS SERVICE NOW
          </button>
        </div>
      </section>

      <style>{`
        .offer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }
        .other-service-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold-primary) !important;
          box-shadow: 0 10px 25px rgba(13, 56, 43, 0.12) !important;
        }
        @media (max-width: 1024px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
          }
          .offers-grid, .other-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .offers-grid, .other-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
