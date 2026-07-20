import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/content';
import { Play, ZoomIn, Film } from 'lucide-react';

export default function Gallery({ onOpenVideo, onOpenImageLightbox }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredItems = activeTab === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{
        background: '#FAF7F2',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <span className="section-subtext">OUR GALLERY</span>
          <h2 className="section-title">Moments We Create</h2>
          <div className="gold-divider" />
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {galleryCategories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  border: isActive ? '2px solid var(--primary-emerald)' : '1px solid rgba(197, 160, 89, 0.3)',
                  background: isActive ? 'var(--primary-emerald)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--primary-emerald)',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Media Grid (3 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
          className="gallery-grid"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.type === 'video') {
                  onOpenVideo(item.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ');
                } else {
                  onOpenImageLightbox(item.image, item.title);
                }
              }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(13, 56, 43, 0.08)',
                height: '270px',
                cursor: 'pointer',
                border: '2px solid #FFFFFF'
              }}
              className="gallery-item-card"
            >
              {/* Background Thumbnail Image or Actual Video Frame */}
              {item.type === 'video' ? (
                <video
                  src={`${item.videoUrl}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="gallery-img"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="gallery-img"
                />
              )}

              {/* Hover Dark Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(13,56,43,0.1) 0%, rgba(13,56,43,0.75) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.2rem',
                  color: '#FFFFFF',
                  transition: 'opacity 0.3s ease'
                }}
              >
                {/* Center Action Icon (Play button or Zoom icon) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.92)',
                    border: '2px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-emerald)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease'
                  }}
                  className="gallery-action-btn"
                >
                  {item.type === 'video' ? (
                    <Play size={22} fill="var(--primary-emerald)" style={{ marginLeft: '2px' }} />
                  ) : (
                    <ZoomIn size={22} color="var(--primary-emerald)" />
                  )}
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.subtitle}
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => onOpenVideo('/assets/video1.mp4')} className="btn-outline-gold">
            <Film size={18} />
            VIEW MORE PHOTOS & VIDEOS
          </button>
        </div>
      </div>

      <style>{`
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-item-card:hover .gallery-action-btn {
          transform: translate(-50%, -50%) scale(1.15);
          background: var(--gold-primary) !important;
          color: white !important;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
