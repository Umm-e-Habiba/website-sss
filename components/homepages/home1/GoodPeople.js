"use client";

import { useEffect, useState } from "react";

export default function GoodPeople() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className={`goodpeople-section ${isLoaded ? 'loaded' : ''}`}
      style={{
        padding: '80px 0',
        background: '#ffffff',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        clear: 'both'
      }}
    >
      <div className="goodpeople-container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="goodpeople-content" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Brand Label */}
          <div className="brand-label" style={{ marginBottom: '8px' }}>
            <span className="brand-text" style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              color: '#00bcd4', 
              letterSpacing: '0.5px', 
              textTransform: 'uppercase',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              MetroGuards Services Group
            </span>
          </div>

          {/* Main Heading */}
          <div className="main-heading" style={{ marginBottom: '16px' }}>
            <h2 className="heading-line" style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#333333',
              lineHeight: '1.1',
              margin: '0',
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Good People.</h2>
            <h2 className="heading-line" style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#333333',
              lineHeight: '1.1',
              margin: '0',
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>Good Work.</h2>
          </div>

          {/* Description */}
          <div className="description-content">
            <p className="description-text" style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#666666',
              margin: '0 0 16px 0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Metro Guards has served its clients in Melbourne, Victoria, and its suburbs for years. We have a rigorous procedure for hiring and training our guards. Our highly professional security guards can exceptionally address the safety needs of individual, corporate, institutional, residential, and commercial clients.
            </p>
            <p className="description-text" style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#666666',
              margin: '0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              We have proven strategies for assessing risks and designing tailored security solutions. We are also your go-to security solution and have a proven record of providing the most result-oriented emergency security services.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .goodpeople-section {
          padding: 80px 0;
          background: #ffffff;
          position: relative;
          z-index: 10;
          width: 100%;
          clear: both;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .goodpeople-section.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .goodpeople-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .goodpeople-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .brand-label {
          margin-bottom: 8px;
        }

        .brand-text {
          font-size: 1rem;
          font-weight: 600;
          color: #00bcd4;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .main-heading {
          margin-bottom: 16px;
        }

        .heading-line {
          font-size: 3rem;
          font-weight: 700;
          color: #333333;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .description-content {
        }

        .description-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #666666;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .goodpeople-container {
            padding: 0 16px;
          }

          .heading-line {
            font-size: 2.5rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 1024px) {
          .goodpeople-section {
            padding: 70px 0;
          }

          .heading-line {
            font-size: 2.5rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 768px) {
          .goodpeople-section {
            padding: 60px 0;
          }

          .goodpeople-content {
            gap: 20px;
          }

          .brand-text {
            font-size: 0.9rem;
          }

          .heading-line {
            font-size: 2rem;
            font-weight: 700;
          }

          .description-text {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 640px) {
          .goodpeople-container {
            padding: 0 16px;
          }

          .goodpeople-section {
            padding: 50px 0;
          }

          .goodpeople-content {
            gap: 16px;
          }

          .brand-text {
            font-size: 0.85rem;
          }

          .heading-line {
            font-size: 1.75rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .description-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 480px) {
          .goodpeople-section {
            padding: 40px 0;
          }

          .goodpeople-content {
            gap: 14px;
          }

          .brand-text {
            font-size: 0.8rem;
          }

          .heading-line {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .description-text {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 360px) {
          .goodpeople-container {
            padding: 0 12px;
          }

          .goodpeople-section {
            padding: 35px 0;
          }

          .heading-line {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          }

          .description-text {
            font-size: 0.85rem;
          }
        }

        /* Animation for smooth entrance */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .brand-label {
          animation: fadeInUp 0.6s ease-out;
        }

        .main-heading {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .description-content {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .brand-label,
          .main-heading,
          .description-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
