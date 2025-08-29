"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const services = [
  {
    title: "Private Security Guard",
    image: "/assets/img/case-study/s4.webp",
    icon: "/assets/img/icons/security.png",
    href: "/services/security",
  },
  {
    title: "Mobile Patrol Security",
    image: "/assets/img/case-study/s7.webp",
    icon: "/assets/img/icons/patrol.png",
    href: "/services/cleaning",
  },
  {
    title: "Construction Site Security",
    image: "/assets/img/case-study/s3.webp",
    icon: "/assets/img/icons/construction.png",
    href: "/services/maintenance",
  },
  {
    title: "Warehouse Security System",
    image: "/assets/img/case-study/s5.webp",
    icon: "/assets/img/icons/warehouse.png",
    href: "/services/alarm",
  },
  {
    title: "Retail Security",
    image: "/assets/img/blog/retail.jpg",
    icon: "/assets/img/icons/mall.png",
    href: "/services/facility",
  },
  {
    title: "Event Security",
    image: "/assets/img/blog/event security.jpg",
    icon: "/assets/img/icons/red-carpet.png",
    href: "/services/emergery",
  },
  {
    title: "K9 Security",
    image: "/assets/img/case-study/s1.webp",
    icon: "/assets/img/icons/police.png",
    href: "/services/consultation",
  },
  {
    title: "Gatehouse Security",
    image: "/assets/img/case-study/s6.webp",
    icon: "/assets/img/icons/security-gate.png",
    href: "/services/technology",
  },
];

export default function ServicesSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="section-padding2 pt-20 pb-16" id="services" style={{ backgroundColor: '#d3d3d3ff'}}>
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="heading2 text-center">
              <small data-aos="fade-up" data-aos-duration={600} className="heading-top">
                <img src="/assets/img/icons/hands.svg" alt="" />
                Integrated Security Services
              </small>
              <h2 data-aos="fade-up" data-aos-duration={800} className="text-gray-800">
                <span className="text-blue-600">Our</span> Services
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-12 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="services-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <Link href={service.href} className="block group">
                  <div className="service-card relative overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                    {/* Background image covering the whole card */}
                    <div className="relative h-80 w-full overflow-hidden service-image-container">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-700"
                      />
                    </div>
                    
                    {/* Content overlay - positioned in center */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-6 service-content">
                      {/* Icon - using image icon (smaller size) */}
                      <div className="service-icon w-10 h-10 mb-10 transform transition-all duration-500 flex items-center justify-center">
                        <Image 
                          src={service.icon} 
                          alt={service.title} 
                          width={48} 
                          height={48} 
                          className="transition-all duration-500"
                        />
                      </div>
                      
                      {/* Title (larger text) */}
                      <h3 className="service-title text-2xl font-bold text-center leading-tight transition-colors duration-300 text-white">
                        {service.title}
                      </h3>
                      
                      {/* Hover indicator */}
                      <div className="service-indicator mt-4 h-0.5 w-12 bg-white rounded-full opacity-0 transition-all duration-500 transform translate-y-4"></div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation arrows - centered with proper spacing using image icons */}
          <div className="flex justify-center items-center mt-12 space-x-6 navigation-container">
            <button className="swiper-button-prev-custom p-2 transition-all duration-300">
              <Image 
                src="/assets/img/icons/back.png" 
                alt="Previous" 
                width={50} 
                height={50} 
                className="hover:opacity-80 transition-opacity"
              />
            </button>
            <button className="swiper-button-next-custom p-2 transition-all duration-300">
              <Image 
                src="/assets/img/icons/next.png" 
                alt="Next" 
                width={50} 
                height={50} 
                className="hover:opacity-80 transition-opacity"
              />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .service-card {
          cursor: pointer;
          will-change: transform;
          border-radius: 1rem;
          height: 320px;
        }
        
        .services-swiper {
          padding-bottom: 20px;
        }
        
        /* Service image container with rounded corners */
        .service-image-container {
          border-radius: 1rem;
        }
        
        /* Service card image */
        .service-card .service-image-container img {
          transition: all 0.5s ease;
          border-radius: 1rem;
        }
        
        /* Hide image completely on hover */
        .service-card:hover .service-image-container img {
          opacity: 0;
          transform: scale(1.1);
        }
        
        /* Slight dark overlay on image only (not affecting text) */
        .service-card .service-image-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3); /* Slight dark overlay */
          border-radius: 1rem;
          z-index: 10;
          transition: all 0.5s ease;
        }
        
        /* Hover effect for service card - golden gradient */
        .service-card:hover .service-image-container::before {
          background: linear-gradient(135deg, 
            rgba(253, 197, 26, 0.95) 0%, 
            rgba(253, 197, 26, 0.7) 50%, 
            rgba(253, 197, 26, 0.5) 100%);
        }
        
        /* Hover border effect */
        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: 1rem;
          z-index: 15;
          transition: all 0.5s ease;
          pointer-events: none;
        }
        
        .service-card:hover::after {
          border-color: #fdc51a;
          opacity: 1;
        }
        
        /* Enhanced content styling for better visibility */
        .service-icon {
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.7));
        }
        
        .service-title {
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.8));
          text-shadow: 0 2px 8px rgba(0,0,0,0.9);
          font-weight: 700;
        }
        
        /* Icons are white by default with stronger contrast */
        .service-icon img {
          filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.7));
        }
        
        /* Change to black on hover */
        .service-card:hover .service-content {
          color: black;
        }
        
        .service-card:hover .service-icon img {
          filter: brightness(0) drop-shadow(0 2px 4px rgba(0,0,0,0.3)) !important;
        }
        
        .service-card:hover .service-indicator {
          background: black;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.2);
        }
        
        .service-card:hover .service-indicator {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Navigation button styles - centered with no borders */
        .navigation-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 2.5rem;
        }
        
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: static;
          margin: 0;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        .swiper-button-prev-custom:focus,
        .swiper-button-next-custom:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        
        .swiper-button-prev-custom::after,
        .swiper-button-next-custom::after {
          content: none;
        }
        
        @media (max-width: 768px) {
          .service-card {
            margin: 0 4px;
          }
          
          .service-card .absolute.inset-0.flex {
            padding: 1rem;
          }
          
          .service-card h3 {
            font-size: 1.4rem;
          }
          
          .service-card .service-icon {
            width: 40px;
            height: 40px;
          }
          
          /* Adjust navigation spacing on mobile */
          .navigation-container {
            margin-top: 2rem;
          }
          
          .space-x-6 {
            column-gap: 1.2rem;
          }
          
          /* Smaller navigation icons on mobile */
          .swiper-button-prev-custom img,
          .swiper-button-next-custom img {
            width: 40px;
            height: 40px;
          }
        }
        
        /* Custom animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .service-card:hover {
          animation: slideInUp 0.3s ease-out;
        }
        
        /* Smooth scroll behavior */
        .services-swiper {
          scroll-behavior: smooth;
        }
        
        /* Swiper navigation adjustments */
        .services-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .services-swiper .swiper-button-disabled img {
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}