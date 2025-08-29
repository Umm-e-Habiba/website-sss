"use client";

const industries = [
  {
    title: "Aviation &\nMaritime",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    title: "Commercial\nProperty",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <rect x="7" y="5" width="2" height="14"/>
        <rect x="11" y="5" width="2" height="14"/>
        <rect x="15" y="5" width="2" height="14"/>
        <rect x="5" y="7" width="14" height="2"/>
        <rect x="5" y="11" width="14" height="2"/>
        <rect x="5" y="15" width="14" height="2"/>
      </svg>
    )
  },
  {
    title: "Education",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    title: "Government",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="16" height="10" rx="2"/>
        <path d="M12 2L4 6h16z"/>
        <circle cx="8" cy="11" r="1"/>
        <circle cx="12" cy="11" r="1"/>
        <circle cx="16" cy="11" r="1"/>
        <path d="M7 16v2"/>
        <path d="M12 16v2"/>
        <path d="M17 16v2"/>
      </svg>
    )
  }
];

export default function IndustrySection() {
  return (
    <section className="industry-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">INDUSTRY</h2>
        </div>
        
        <div className="industry-cards-container">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h3 className="industry-title">
                {industry.title}
                <span className="underline-animation"></span>
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .industry-section {
          padding: 80px 0;
          background-color: #ffffff;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: #333333;
          letter-spacing: 3px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
        }
        
        .industry-cards-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          flex-wrap: wrap;
        }
        
        .industry-card {
          background: linear-gradient(135deg, #1ca9c9 0%, #1b9fb5 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 280px;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 0px;
          position: relative;
          overflow: hidden;
          margin-top: 50px;
        }
        
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        .industry-icon {
          margin-bottom: 25px;
          opacity: 0.95;
          transition: opacity 0.3s ease;
        }
        
        .industry-card:hover .industry-icon {
          opacity: 1;
        }
        
        .industry-icon svg {
          width: 70px;
          height: 70px;
          stroke-width: 1.5;
        }
        
        .industry-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          white-space: pre-line;
          position: relative;
          display: inline-block;
          padding-bottom: 5px;
        }
        
        .underline-animation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }
        
        .industry-card:hover .underline-animation {
          width: 100%;
        }
        
        /* Responsive design */
        @media (max-width: 1200px) {
          .industry-cards-container {
            gap: 25px;
          }
          
          .industry-card {
            width: 250px;
            height: 250px;
          }
        }
        
        @media (max-width: 1024px) {
          .industry-cards-container {
            gap: 20px;
          }
          
          .industry-card {
            width: 220px;
            height: 220px;
            padding: 30px 20px;
          }
          
          .industry-icon svg {
            width: 60px;
            height: 60px;
          }
          
          .industry-title {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 900px) {
          .industry-cards-container {
            gap: 20px;
          }
          
          .industry-card {
            width: 200px;
            height: 200px;
            padding: 25px 15px;
          }
          
          .industry-icon {
            margin-bottom: 20px;
          }
          
          .industry-icon svg {
            width: 55px;
            height: 55px;
          }
          
          .industry-title {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 768px) {
          .industry-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .industry-cards-container {
            gap: 15px;
          }
          
          .industry-card {
            width: 180px;
            height: 180px;
            padding: 20px 15px;
          }
          
          .industry-icon svg {
            width: 50px;
            height: 50px;
          }
          
          .industry-title {
            font-size: 1rem;
          }
          
          .underline-animation {
            height: 1.5px;
          }
        }
        
        @media (max-width: 640px) {
          .section-title {
            font-size: 2rem;
          }
          
          .industry-cards-container {
            gap: 15px;
          }
          
          .industry-card {
            width: 160px;
            height: 160px;
            padding: 20px 10px;
          }
          
          .industry-icon {
            margin-bottom: 15px;
          }
          
          .industry-icon svg {
            width: 45px;
            height: 45px;
          }
          
          .industry-title {
            font-size: 0.95rem;
          }
        }
        
        @media (max-width: 480px) {
          .industry-cards-container {
            gap: 12px;
          }
          
          .industry-card {
            width: 140px;
            height: 140px;
            padding: 15px 10px;
          }
          
          .industry-icon svg {
            width: 40px;
            height: 40px;
          }
          
          .industry-title {
            font-size: 0.9rem;
            padding-bottom: 3px;
          }
          
          .underline-animation {
            height: 1px;
          }
        }
      `}</style>
    </section>
  );
}