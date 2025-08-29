"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
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
  },
  {
    id: "corporate-building",
    title: "Corporate Building Security",
    description:
      "Advanced security systems for a high-rise corporate building featuring integrated access control, visitor management, and executive protection services.",
    href: "/building-security-guards",
    image: "/assets/img/case-study/case-2.jpg",
  },
  {
    id: "warehouse-security",
    title: "Warehouse Security System",
    description:
      "Complete security infrastructure for logistics and warehouse facilities including perimeter security, cargo protection, and inventory monitoring systems.",
    href: "/warehouse-security-system",
    image: "/assets/img/case-study/case-3.jpg",
  },
  {
    id: "event-security",
    title: "Large Event Security Management",
    description:
      "Professional security coordination for major public events including crowd control, VIP protection, and emergency response planning for 10,000+ attendees.",
    href: "/event-security-guards",
    image: "/assets/img/case-study/case-4.jpg",
  },
  {
    id: "construction-security",
    title: "Construction Site Security",
    description:
      "Dedicated security solutions for construction sites, protecting valuable equipment, materials, and ensuring safety compliance throughout project phases.",
    href: "/construction-site-security-guards",
    image: "/assets/img/case-study/case-5.jpg",
  },
];

const Gallery4 = ({ title = "Security Case Studies", description = "Explore our successful security implementations across Melbourne. These featured projects showcase our expertise in delivering comprehensive security solutions for diverse client needs and industries.", items = data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setCanScrollPrev(currentSlide > 0);
    setCanScrollNext(currentSlide < items.length - 1);
  }, [currentSlide, items.length]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const scrollNext = () => {
    if (currentSlide < items.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const scrollTo = (index) => {
    setCurrentSlide(index);
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

        <div className="gallery-carousel-wrapper">
          <div className="gallery-carousel">
            <div 
              className="gallery-content"
              style={{
                transform: `translateX(-${currentSlide * 340}px)`,
              }}
            >
              {items.map((item) => (
                <div key={item.id} className="gallery-item">
                  <a href={item.href} className="gallery-card-link">
                    <div className="gallery-card">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="gallery-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                      />
                      <div className="gallery-overlay" />
                      <div className="gallery-card-content">
                        <div className="gallery-card-title">{item.title}</div>
                        <div className="gallery-card-description">{item.description}</div>
                        <div className="gallery-read-more">
                          Read more{" "}
                          <ArrowRight className="read-more-arrow" size={16} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? "active" : ""}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-section {
          padding: 128px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .gallery-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: 500;
          margin: 0;
          color: #1f2937;
        }

        .gallery-description {
          max-width: 512px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
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
        }

        .gallery-carousel {
          overflow: hidden;
          width: 100%;
        }

        .gallery-content {
          display: flex;
          gap: 20px;
          transition: transform 0.3s ease;
          margin-left: 0;
        }

        .gallery-item {
          max-width: 320px;
          padding-left: 20px;
          flex-shrink: 0;
        }

        .gallery-card-link {
          display: block;
          border-radius: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover {
          transform: translateY(-2px);
        }

        .gallery-card {
          position: relative;
          height: 432px;
          max-width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f0f0f0;
        }

        .gallery-image {
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover .gallery-image {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(31, 41, 55, 0.4) 40%,
            rgba(31, 41, 55, 0.8) 100%
          );
        }

        .gallery-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          color: white;
        }

        .gallery-card-title {
          margin-bottom: 8px;
          padding-top: 16px;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
        }

        .gallery-card-description {
          margin-bottom: 32px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gallery-read-more {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
        }

        .read-more-arrow {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .gallery-card-link:hover .read-more-arrow {
          transform: translateX(4px);
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
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 80px 0;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 56px;
            gap: 16px;
          }

          .gallery-title {
            font-size: 2rem;
          }

          .gallery-item {
            max-width: 280px;
          }

          .gallery-card {
            height: 380px;
          }

          .gallery-card-content {
            padding: 24px 20px;
          }

          .gallery-card-description {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }

          .gallery-title {
            font-size: 1.75rem;
          }

          .gallery-item {
            max-width: 260px;
          }

          .gallery-card {
            height: 350px;
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
