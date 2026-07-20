import React, { useState } from 'react';
import { menuShowcase } from '../data/content';
import { Utensils, Award, Sparkles, Check } from 'lucide-react';

export default function MenuExplorer({ onOpenEnquiry }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const currentCategory = menuShowcase[activeCategoryIndex];

  return (
    <section
      id="menu-explorer"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FAF7F2 0%, #F4EFE6 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <span className="section-subtext">CULINARY EXCELLENCE</span>
          <h2 className="section-title">Explore Gourmet Menu</h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '1rem' }}>
            From authentic traditional Mangalorean banana leaf feasts to royal North Indian banquets and live chaat counters.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          {menuShowcase.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  padding: '0.8rem 1.6rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  border: isActive ? '2px solid var(--gold-primary)' : '1px solid rgba(197, 160, 89, 0.3)',
                  background: isActive ? 'var(--primary-emerald)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--primary-emerald)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <Utensils size={18} color={isActive ? 'var(--gold-primary)' : 'var(--primary-emerald)'} />
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Menu Items Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem auto'
          }}
          className="menu-grid"
        >
          {currentCategory.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem 1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                boxShadow: '0 4px 15px rgba(13, 56, 43, 0.04)',
                transition: 'var(--transition-normal)'
              }}
              className="menu-item-row"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--bg-cream-main)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-dark)',
                    marginTop: '2px',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={18} />
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-emerald)' }}>
                    {item.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(197, 160, 89, 0.15)',
                        color: 'var(--gold-dark)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--primary-emerald)',
                  background: 'var(--bg-cream-card)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0D382B, #144D3B)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 15px 35px rgba(13, 56, 43, 0.2)',
            border: '2px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ textContent: 'left', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              Want a Customized Menu for Your Event?
            </h3>
            <p style={{ color: 'var(--gold-light)', fontSize: '0.95rem' }}>
              Select your guest count and dish preferences for an instant custom quote!
            </p>
          </div>

          <button onClick={onOpenEnquiry} className="btn-gold" style={{ flexShrink: 0 }}>
            CREATE CUSTOM MENU
          </button>
        </div>
      </div>

      <style>{`
        .menu-item-row:hover {
          transform: translateY(-4px);
          border-color: var(--gold-primary);
          box-shadow: 0 10px 25px rgba(13, 56, 43, 0.1) !important;
        }
        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
