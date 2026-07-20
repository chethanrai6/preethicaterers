import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../data/content';
import { Utensils, Users, Sparkles, Handshake, Award } from 'lucide-react';

const iconMap = {
  Utensils: Utensils,
  Users: Users,
  Sparkles: Sparkles,
  Handshake: Handshake,
  Award: Award
};

export default function StatsBar() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          statsData.forEach((item, index) => {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            const increment = item.number / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= item.number) {
                current = item.number;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 12px 35px rgba(13, 56, 43, 0.08)',
        border: '1px solid rgba(197, 160, 89, 0.25)',
        padding: '2rem 1.5rem',
        margin: '0 auto',
        maxWidth: '1140px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          alignItems: 'center',
        }}
        className="stats-grid"
      >
        {statsData.map((stat, idx) => {
          const IconComp = iconMap[stat.icon] || Utensils;
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '0.5rem',
                borderRight: idx < statsData.length - 1 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
              }}
              className="stat-card-item"
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--bg-cream-main)',
                  border: '1.5px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-emerald)',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-normal)'
                }}
                className="stat-icon-wrapper"
              >
                <IconComp size={26} strokeWidth={1.8} color="var(--primary-emerald)" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '2rem',
                    color: 'var(--primary-emerald)',
                    lineHeight: 1
                  }}
                >
                  {counts[idx].toLocaleString()}{stat.suffix}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-medium)',
                    fontWeight: 600,
                    marginTop: '0.3rem',
                    lineHeight: 1.2
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-card-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(197, 160, 89, 0.2);
            padding-bottom: 1rem;
          }
        }
        @media (max-width: 540px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-card-item {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
