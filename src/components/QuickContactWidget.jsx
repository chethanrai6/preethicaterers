import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactDetails } from '../data/content';

export default function QuickContactWidget() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.8rem',
        right: '1.8rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        alignItems: 'flex-end'
      }}
    >
      {/* Pulsing WhatsApp Action */}
      <a
        href={`https://wa.me/${contactDetails.whatsapp}?text=Hi%20Preethi%20Caterers,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20an%20event.`}
        target="_blank"
        rel="noreferrer"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'transform 0.25s ease'
        }}
        className="animate-pulse-glow"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
