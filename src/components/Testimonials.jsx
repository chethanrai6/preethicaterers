import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh & Soumya Shetty',
    event: 'Grand Wedding Reception (1200 Guests)',
    location: 'Kottara, Mangalore',
    rating: 5,
    text: 'Preethi Caterers handled our wedding feast with extraordinary perfection. The Mangalorean fish curry, chicken sukka, and banana leaf sadya were praised by every single guest. Flawless presentation!'
  },
  {
    name: 'Dr. Vivek Rai',
    event: 'House Warming & Puja (350 Guests)',
    location: 'Panchami Plaza, Uppala',
    rating: 5,
    text: 'Extremely hygienic, punctual, and authentic South Indian breakfast & lunch. Their team setup live dosa counters that kept our guests coming back for more. Highly recommended!'
  },
  {
    name: 'Anusha Kulkarni',
    event: 'Corporate Annual Gala (600 Guests)',
    location: 'Mangalore Tech Park',
    rating: 5,
    text: 'Professionalism at its finest. From elegant table layouts to warm buffet service, Preethi Caterers delivered a 5-star experience. The dessert bar with Elaneer Payasam was outstanding.'
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevReview = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[activeIdx];

  return (
    <section
      className="section-padding"
      style={{
        background: '#FAF7F2',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <span className="section-subtext">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="gold-divider" />
        </div>

        {/* Carousel Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            boxShadow: '0 15px 40px rgba(13, 56, 43, 0.08)',
            border: '2px solid rgba(197, 160, 89, 0.25)',
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <Quote
            size={48}
            color="var(--gold-primary)"
            style={{ opacity: 0.3, margin: '0 auto 1rem auto' }}
          />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '1.2rem' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="var(--gold-primary)" color="var(--gold-primary)" />
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: 'var(--primary-emerald)',
              lineHeight: 1.6,
              fontStyle: 'italic',
              marginBottom: '2rem'
            }}
          >
            "{current.text}"
          </p>

          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-emerald)' }}>
              {current.name}
            </h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: 600, marginTop: '2px' }}>
              {current.event} • {current.location}
            </div>
          </div>

          {/* Nav Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={prevReview}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--gold-primary)',
                background: '#FFFFFF',
                color: 'var(--primary-emerald)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-normal)'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextReview}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--gold-primary)',
                background: '#FFFFFF',
                color: 'var(--primary-emerald)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-normal)'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
