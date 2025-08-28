"use client";
import Link from "next/link";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const services = [
  {
    title: "Security Services",
    image: "/assets/img/about/about img.webp",
    icon: "🔒",
    href: "/services/security",
  },
  {
    title: "Cleaning Services",
    image: "/assets/img/about/s5.webp",
    icon: "✨",
    href: "/services/cleaning",
  },
  {
    title: "Maintenance Services",
    image: "/assets/img/about/south.webp",
    icon: "🛠️",
    href: "/services/maintenance",
  },
  {
    title: "AI Alarm Monitoring",
    image: "/assets/img/about/values.jpg",
    icon: "📺",
    href: "/services/alarm",
  },
];

export default function ServicesSlider() {
  return (
    <section className="section-padding2 pt-20" id="services"  style={{ backgroundColor: '#1E2247'}}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="row">
            <div className="col-md-4 m-auto">
                <div className="heading2 white-heading text-center">
                    <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Integrated Security Services
                    </small>
                    <h2 data-aos="fade-up" data-aos-duration={800}><span>Our</span> Service's</h2>
                </div>
            </div>
        </div>
        

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <Link href={service.href}>
                <div className="relative rounded-xl overflow-hidden group shadow-md">
                  {/* Background image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
