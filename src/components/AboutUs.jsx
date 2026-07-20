import React from 'react';
import { Award, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AboutUs({ onOpenEnquiry }) {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column Text Content */}
          <div className="reveal-left active">
            <span className="section-subtext">OUR STORY</span>
            <h2 className="section-title">About Us</h2>
            <div
              style={{
                width: '50px',
                height: '3px',
                background: 'var(--gold-primary)',
                marginBottom: '1.5rem'
              }}
            />

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-medium)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}
            >
              Preethi Caterers was founded with a passion for food and a commitment to quality. For over 25 years, we have been delivering exceptional catering and event management services for all kinds of celebrations. Our experienced team, professional approach and attention to detail ensure that every event we cater becomes a memorable experience.
            </p>

            {/* Key Value Points */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--primary-emerald)' }}>
                <CheckCircle2 size={18} color="var(--gold-primary)" /> 100% Hygienic Kitchen
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--primary-emerald)' }}>
                <CheckCircle2 size={18} color="var(--gold-primary)" /> Authentic Regional Taste
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--primary-emerald)' }}>
                <CheckCircle2 size={18} color="var(--gold-primary)" /> Master Chef Team
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--primary-emerald)' }}>
                <CheckCircle2 size={18} color="var(--gold-primary)" /> Custom Menu Options
              </div>
            </div>

            <button onClick={onOpenEnquiry} className="btn-primary">
              KNOW MORE
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right Column Image & Circular Gold Seal Badge */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="reveal-right active"
          >
            {/* Main Image in Arched Curved Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                height: '420px',
                borderRadius: '160px 160px 24px 24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(13, 56, 43, 0.14)',
                border: '4px solid #FFFFFF'
              }}
            >
              <img
                src="/assets/real_buffet_serving.jpg"
                alt="Preethi Caterers Serving Team"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Circular Gold Seal Badge */}
            <div
              style={{
                position: 'absolute',
                left: '-20px',
                bottom: '30px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0D382B, #144D3B)',
                border: '4px solid var(--gold-primary)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                textAlign: 'center',
                padding: '0.5rem',
                zIndex: 5
              }}
              className="animate-float"
            >
              {/* Outer Rotating Leaf Accent SVG */}
              <svg
                className="animate-rotate-seal"
                viewBox="0 0 100 100"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fontSize="8.5" fill="#E2C787" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath">
                    • 25+ YEARS OF EXCELLENCE •
                  </textPath>
                </text>
              </svg>

              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-primary)', lineHeight: 1 }}>
                25+
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFFFFF', marginTop: '2px' }}>
                Years Of
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 700 }}>
                Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
