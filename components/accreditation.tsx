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
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading (always left) */}
        <div className="mb-8">
          <h2 className="acc-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Accreditation & Partnerships
          </h2>
        </div>

        {/* Grid for equal logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
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
                  width={200}
                  height={150}
                  className="max-h-20 w-auto object-contain mx-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
