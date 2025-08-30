"use client";

import { ArrowLeft, ArrowRight, Shield, Users, Building, Smartphone, Calendar, HardHat, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: "retail-security",
    title: "Retail Security Implementation",
    description:
      "Comprehensive security solution for a major shopping center including CCTV monitoring, access control, and 24/7 security personnel ensuring customer and staff safety.",
    href: "/retail-security-guard",
    image: "/assets/img/case-study/case-1.jpg",
    icon: Shield,
  },
  {
    id: "corporate-building",
    title: "Corporate Building Security",
    description:
      "Advanced security systems for a high-rise corporate building featuring integrated access control, visitor management, and executive protection services.",
    href: "/building-security-guards",
    image: "/assets/img/case-study/case-2.jpg",
    icon: Building,
  },
  {
    id: "warehouse-security",
    title: "Warehouse Security System",
    description:
      "Complete security infrastructure for logistics and warehouse facilities including perimeter security, cargo protection, and inventory monitoring systems.",
    href: "/warehouse-security-system",
    image: "/assets/img/case-study/case-3.jpg",
    icon: Shield,
  },
  {
    id: "event-security",
    title: "Large Event Security Management",
    description:
      "Professional security coordination for major public events including crowd control, VIP protection, and emergency response planning for 10,000+ attendees.",
    href: "/event-security-guards",
    image: "/assets/img/case-study/case-4.jpg",
    icon: Calendar,
  },
  {
    id: "construction-security",
    title: "Construction Site Security",
    description:
      "Dedicated security solutions for construction sites, protecting valuable equipment, materials, and ensuring safety compliance throughout project phases.",
    href: "/construction-site-security-guards",
    image: "/assets/img/case-study/case-5.jpg",
    icon: HardHat,
  },
  {
    id: "residential-security",
    title: "Residential Complex Security",
    description:
      "Integrated security solution for luxury residential developments featuring 24/7 concierge services, access control, and patrol security services.",
    href: "/private-security-guards",
    image: "/assets/img/case-study/case-6.jpg",
    icon: Users,
  },
  {
    id: "mobile-patrol-security",
    title: "Mobile Patrol Security",
    description:
      "Professional mobile security patrols providing comprehensive coverage and rapid response services for commercial and residential properties with real-time monitoring.",
    href: "/mobile-patrol-security",
    image: "/assets/img/case-study/case-1.jpg",
    icon: Smartphone,
  },
  {
    id: "staff-escort-security",
    title: "Staff Escort Security",
    description:
      "Dedicated personal protection and escort services for staff members ensuring safe transportation and workplace security with trained professional guards.",
    href: "/staff-escort-security",
    image: "/assets/img/case-study/case-2.jpg",
    icon: UserCheck,
  },
];

const Gallery4 = ({ title = "Our Security Services", description = "Discover our comprehensive range of professional security services designed to protect your business, events, and properties across Melbourne with cutting-edge technology and experienced personnel.", items = data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  useEffect(() => {
    setCanScrollPrev(currentSlide > 0);
    const maxSlide = Math.max(0, items.length - 4);
    setCanScrollNext(currentSlide < maxSlide);
  }, [currentSlide, items.length]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlideEnabled || !isClient) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        // For 6 items showing 4 at a time, we can slide 3 positions (0, 1, 2)
        const maxSlide = Math.max(0, items.length - 4);
        if (prev >= maxSlide) {
          return 0; // Reset to beginning
        }
        return prev + 1;
      });
    }, 4500); // Change slide every 4.5 seconds

    return () => clearInterval(interval);
  }, [autoSlideEnabled, isClient, items.length]);

  const scrollPrev = () => {
    setAutoSlideEnabled(false); // Pause auto-slide when user interacts
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    // Re-enable auto-slide after 10 seconds
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const scrollNext = () => {
    setAutoSlideEnabled(false); // Pause auto-slide when user interacts
    const maxSlide = Math.max(0, items.length - 4);
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
    // Re-enable auto-slide after 10 seconds
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const scrollTo = (index) => {
    setAutoSlideEnabled(false); // Pause auto-slide when user interacts
    setCurrentSlide(index);
    // Re-enable auto-slide after 10 seconds
    setTimeout(() => setAutoSlideEnabled(true), 10000);
  };

  const handleMouseEnter = () => {
    setAutoSlideEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoSlideEnabled(true);
  };

  if (!isClient) {
    return (
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <h2 className="gallery-title">{title}</h2>
              <p className="gallery-description">{description}</p>
            </div>
          </div>
        </div>
        <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-header-content">
              <h2 className="gallery-title">{title}</h2>
              <p className="gallery-description">{description}</p>
            </div>
            <div className="gallery-navigation">
              <button
                className="nav-button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                className="nav-button"
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="gallery-carousel-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="gallery-carousel-track">
            <div 
              className="gallery-slides-container"
              style={{
                transform: `translateX(-${currentSlide * 25}%)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="gallery-item">
                  <a href={item.href} className="gallery-card-link">
                    <div className="gallery-card">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="gallery-image"
                        priority={index < 4}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <div className="gallery-overlay" />
                      <div className="gallery-card-icon">
                        <item.icon size={24} />
                      </div>
                      <div className="gallery-card-content">
                        <h3 className="gallery-card-title">{item.title}</h3>
                        <p className="gallery-card-description">{item.description}</p>
                        <div className="gallery-read-more">
                          Read more <ArrowRight className="read-more-arrow" size={16} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-indicators">
            {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${Math.floor(currentSlide / 4) === index ? "active" : ""}`}
                onClick={() => scrollTo(index * 4)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-section {
          padding: 80px 0;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .gallery-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-navigation {
          display: flex;
          flex-shrink: 0;
          gap: 8px;
        }

        .nav-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          color: #374151;
        }

        .nav-button:hover:not(:disabled) {
          background: #f3f4f6;
          color: #111827;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: auto;
        }

        .gallery-carousel-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .gallery-carousel-track {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
          overflow: hidden;
        }

        .gallery-slides-container {
          display: flex;
          will-change: transform;
        }

        .gallery-item {
          flex: 0 0 25%;
          padding-right: 15px;
        }

        .gallery-item:last-child {
          padding-right: 0;
        }

        .gallery-card-link {
          display: block;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .gallery-card-link:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .gallery-card {
          position: relative;
          height: 400px;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f0f0f0;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-image {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 12px;
          filter: brightness(1) saturate(1);
        }

        .gallery-card-link:hover .gallery-image {
          transform: scale(1.08);
          filter: brightness(1.1) saturate(1.2);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.1) 100%
          );
          border-radius: 12px;
          transition: background 0.4s ease;
        }

        .gallery-card-link:hover .gallery-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(253, 197, 26, 0.3) 80%,
            rgba(253, 197, 26, 0.4) 100%
          );
        }

        .gallery-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px 30px 30px;
          color: white;
          z-index: 10;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover .gallery-card-content {
          transform: translateY(-5px);
        }

        .gallery-card-icon {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          color: white;
          z-index: 15;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .gallery-card-link:hover .gallery-card-icon {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .gallery-card-title {
          margin: 0 0 12px 0;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
          color: white;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-card-description {
          margin: 0 0 20px 0;
          font-size: 0.875rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gallery-read-more {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 500;
          color: #fdc51a;
          text-decoration: none;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .read-more-arrow {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover .read-more-arrow {
          transform: translateX(6px);
        }

        .gallery-read-more:hover .read-more-arrow {
          transform: translateX(8px);
        }

        .gallery-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .indicator {
          height: 8px;
          width: 8px;
          border-radius: 50%;
          border: none;
          background-color: rgba(31, 41, 55, 0.2);
          cursor: pointer;
          transition: all 0.2s;
        }

        .indicator.active {
          background-color: #1f2937;
        }

        .indicator:hover {
          background-color: #1f2937;
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .gallery-navigation {
            display: none;
          }
          
          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 1280px) {
          .gallery-carousel-track {
            max-width: 1200px;
          }
          
          .gallery-item {
            padding-right: 12px;
          }
        }

        @media (max-width: 1024px) {
          .gallery-carousel-track {
            max-width: 900px;
          }
          
          .gallery-item {
            flex: 0 0 33.333%;
            padding-right: 12px;
          }
          
          .gallery-card {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 80px 0;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            gap: 16px;
          }

          .gallery-title {
            font-size: 2rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 0.95rem;
          }

          .gallery-carousel-track {
            padding: 0 10px;
          }
          
          .gallery-item {
            flex: 0 0 50%;
            padding-right: 15px;
          }

          .gallery-card {
            height: 320px;
          }

          .gallery-card-content {
            padding: 30px 25px 25px 25px;
          }

          .gallery-card-icon {
            width: 45px;
            height: 45px;
            top: 15px;
            left: 15px;
          }

          .gallery-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .gallery-card-description {
            font-size: 0.8rem;
            margin-bottom: 15px;
            -webkit-line-clamp: 2;
          }
          
          .gallery-read-more {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }

          .gallery-title {
            font-size: 1.75rem;
            font-weight: 700;
          }
          
          .gallery-description {
            font-size: 0.9rem;
          }

          .gallery-item {
            flex: 0 0 100%;
            padding-right: 0;
          }

          .gallery-card {
            height: 300px;
          }

          .gallery-card-content {
            padding: 25px 20px 20px 20px;
          }

          .gallery-card-icon {
            width: 40px;
            height: 40px;
            top: 12px;
            left: 12px;
          }

          .gallery-card-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .gallery-card-description {
            font-size: 0.75rem;
            margin-bottom: 12px;
          }
          
          .gallery-read-more {
            font-size: 0.75rem;
          }
        }

        /* Large screen adjustments */
        @media (min-width: 1536px) {
          .gallery-content {
            margin-left: max(8rem, calc(50vw - 700px));
            margin-right: max(0rem, calc(50vw - 700px));
          }
        }
      `}</style>
    </>
  );
};

export default Gallery4;
