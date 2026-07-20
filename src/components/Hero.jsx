import React from 'react';
import StatsBar from './StatsBar';
import { Calendar, Play, Sparkles } from 'lucide-react';

export default function Hero({ onOpenEnquiry, onOpenVideo }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #FAF7F2 0%, #F5EFE6 100%)',
        paddingTop: '3rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Ornamental Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            gap: '2.5rem',
            alignItems: 'center',
            minHeight: '480px'
          }}
          className="hero-grid"
        >
          {/* Left Column Text Content */}
          <div style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.2,0.8,0.2,1)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                color: 'var(--gold-dark)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                marginBottom: '1.2rem'
              }}
            >
              <Sparkles size={14} color="var(--gold-primary)" />
              GOOD FOOD. GREAT MEMORIES.
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                fontWeight: 700,
                color: 'var(--primary-emerald)',
                lineHeight: 1.15,
                marginBottom: '1.2rem'
              }}
            >
              We Serve <br />
              <span className="script-accent" style={{ fontSize: 'clamp(3.8rem, 7vw, 5.5rem)', marginLeft: '0.2rem' }}>
                Happiness
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-medium)',
                maxWidth: '480px',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}
            >
              Delicious food, beautiful arrangements and perfect service for every occasion.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenEnquiry} className="btn-primary">
                <Calendar size={18} />
                ENQUIRE NOW
              </button>

              <button onClick={onOpenVideo} className="btn-circle-video">
                <div className="play-icon-ring">
                  <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />
                </div>
                WATCH VIDEO
              </button>
            </div>
          </div>

          {/* Right Column Hero Banner Image Card */}
          <div
            style={{
              position: 'relative',
              animation: 'fadeInScale 0.9s cubic-bezier(0.2,0.8,0.2,1)'
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(13, 56, 43, 0.16)',
                border: '3px solid #FFFFFF'
              }}
            >
              <img
                src="/assets/hero_buffet.png"
                alt="Preethi Caterers Wedding Buffet Spread"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s ease'
                }}
                className="hero-image-zoom"
              />

              {/* Gradient Vignette Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(13,56,43,0.1) 0%, rgba(13,56,43,0.4) 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Floating Quality Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '4px solid var(--gold-primary)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-emerald)' }}>
                  ★ Premium Catering Standard
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div style={{ marginTop: '3.5rem' }}>
          <StatsBar />
        </div>
      </div>

      <style>{`
        .hero-image-zoom:hover {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
