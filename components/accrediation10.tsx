"use client"
import Image from "next/image"

export default function Accreditation() {
  const clients = [
    { name: "8", logo: "/assets/img/corporate-responsibility/img8.webp", website: "/wp-content/uploads/2025/06/australian-achiever-award-2016.pdf" },
    { name: "7", logo: "/assets/img/corporate-responsibility/img7.webp", website: "/wp-content/uploads/2025/06/aus-achiever-award-2015.pdf" },
    { name: "1", logo: "/assets/img/corporate-responsibility/img1.webp", website: "/wp-content/uploads/2025/06/aus-achiever-award-2014.pdf" },
    { name: "2", logo: "/assets/img/corporate-responsibility/img2.webp", website: "/wp-content/uploads/2025/06/3240701-E-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "3", logo: "/assets/img/corporate-responsibility/img3.webp", website: "/wp-content/uploads/2025/06/3240701-Q-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "4", logo: "/assets/img/corporate-responsibility/img4.webp", website: "/wp-content/uploads/2025/06/3240701-O-Certificate-of-Registration-Metro-Guards.pdf" },
    { name: "5", logo: "/assets/img/corporate-responsibility/img5.webp", website: "https://geelongport.com.au" },
    { name: "6", logo: "/assets/img/corporate-responsibility/img6.webp", website: "/wp-content/uploads/2025/06/ASIAL-Org-Membership-Certificate-New.pdf" },
    { name: "9", logo: "/assets/img/corporate-responsibility/img11.webp", website: "/wp-content/uploads/2025/06/13591.pdf" },
    { name: "10", logo: "/assets/img/corporate-responsibility/img10.webp", website: "https://mpdma.com" },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-16" style={{marginBottom:"100px"}}>
    <div className="max-w-7xl mx-auto">
      {/* Heading (always left) */}
      <div className="mb-8">
        <h2 className="acc-heading text-3xl sm:text-4xl font-bold text-gray-900">
          Accreditation & Partnerships
        </h2>
      </div>

      {/* Grid for equal logos - 10 in one row on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 sm:p-3 lg:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    <style jsx global>{`
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

      .values-hero-section.loaded {
        animation: fadeInUp 0.8s ease-out;
      }

      .value-card {
        animation: fadeInUp 0.8s ease-out;
        animation-fill-mode: both;
      }

      .value-card:nth-child(1) { animation-delay: 0.1s; }
      .value-card:nth-child(2) { animation-delay: 0.2s; }
      .value-card:nth-child(3) { animation-delay: 0.3s; }
      .value-card:nth-child(4) { animation-delay: 0.4s; }
      .value-card:nth-child(5) { animation-delay: 0.5s; }
      .value-card:nth-child(6) { animation-delay: 0.6s; }

      @media (max-width: 768px) {
        .values-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        
        .value-card {
          padding: 30px 20px !important;
        }
      }
    `}</style>
    
    <style jsx global>{`
      .acc-heading {
      padding-top: 50px;
      padding-bottom: 50px;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        color: #000;
        letter-spacing: -0.02em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    `}</style>
  </section>
  )
}
