import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  const isLocalVideo = videoUrl.endsWith('.mp4') || videoUrl.includes('/assets/');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(10px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'pinchZoomSpring 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          aspectRatio: '16/9',
          background: '#000000',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
          border: '2px solid var(--gold-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '0.8rem',
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid var(--gold-primary)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            zIndex: 10,
            transition: 'var(--transition-normal)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)')}
        >
          CLOSE <X size={18} />
        </button>

        {isLocalVideo ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            webkit-playsinline="true"
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        ) : (
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Preethi Caterers Showcase Video"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
