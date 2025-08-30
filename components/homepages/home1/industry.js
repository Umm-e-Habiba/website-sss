"use client";

import { Plane, Building2, GraduationCap, Landmark } from "lucide-react"

const industries = [
  {
    title: "Aviation &\nMaritime",
    icon: Plane,
  },
  {
    title: "Commercial\nProperty",
    icon: Building2,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Government",
    icon: Landmark,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-8 pt-8 pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="industry-header">
          <div className="industry-header-content">
            <h2 className="industry-title">
              <span style={{ color: '#fdc51a', fontWeight: '900' }}>M</span>
              <span style={{ color: '#1e2247', fontWeight: '900' }}>G</span>
              {" Operates In Your Industry"}
            </h2>
            <p className="industry-description">Find out how MASG operates in your industry with specialized security solutions tailored to meet the unique challenges and requirements of different sectors.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={index}
                className="industry-card aspect-square flex flex-col items-center justify-center p-8 rounded-lg cursor-pointer"
                style={{ backgroundColor: "#1e2247" }}
              >
                <div className="industry-overlay"></div>
                <IconComponent className="w-16 h-16 text-white mb-6 relative z-20" strokeWidth={1.5} />
                <h3 className="text-white text-xl font-semibold text-center leading-tight whitespace-pre-line relative z-20">
                  {industry.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .industry-header {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 60px;
        }

        .industry-header-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .industry-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: 3px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .industry-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Industry card styles */
        .industry-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-5px);
        }

        .industry-overlay {
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(
              circle at bottom right,
              rgba(0, 0, 0, 0.7) 0%,
              rgba(0, 0, 0, 0.4) 30%,
              rgba(0, 0, 0, 0.1) 50%,
              transparent 70%
            ),
            #fdc51a;
          transition: top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 5;
          border-radius: 8px;
        }

        .industry-card:hover .industry-overlay {
          top: 0;
        }

        .industry-card h3 {
          position: relative;
          text-decoration: none;
        }

        .industry-card h3::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.4s ease;
        }

        .industry-card:hover h3::after {
          width: 100%;
        }

        /* Responsive design for all screen sizes */
        
        /* Extra Large Screens (1400px and up) */
        @media (min-width: 1400px) {
          .max-w-7xl {
            max-width: 1320px;
            padding: 0 40px;
          }
          
          .industry-card {
            padding: 48px 32px;
            min-height: 280px;
          }

          .industry-card .w-16.h-16 {
            width: 80px;
            height: 80px;
            margin-bottom: 32px;
          }

          .industry-card h3 {
            font-size: 1.5rem;
            line-height: 1.3;
          }
        }

        /* Large Screens (1200px - 1399px) */
        @media (max-width: 1399px) and (min-width: 1200px) {
          .industry-card {
            padding: 40px 24px;
            min-height: 260px;
          }

          .industry-card .w-16.h-16 {
            width: 72px;
            height: 72px;
            margin-bottom: 28px;
          }

          .industry-card h3 {
            font-size: 1.4rem;
            line-height: 1.3;
          }
        }

        /* Desktop (1024px - 1199px) */
        @media (max-width: 1199px) and (min-width: 1024px) {
          .industry-title {
            font-size: 2.8rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .industry-description {
            font-size: 1.05rem;
            line-height: 1.6;
          }

          .industry-card {
            padding: 32px 20px;
            min-height: 240px;
          }

          .industry-card .w-16.h-16 {
            width: 64px;
            height: 64px;
            margin-bottom: 24px;
          }

          .industry-card h3 {
            font-size: 1.25rem;
            line-height: 1.3;
          }
        }

        /* Tablet Large (900px - 1023px) */
        @media (max-width: 1023px) and (min-width: 900px) {
          .grid {
            justify-items: center;
          }

          .industry-title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .industry-description {
            font-size: 1rem;
            line-height: 1.6;
          }

          .industry-card {
            padding: 24px 16px;
            min-height: 180px;
          }

          .industry-card .w-16.h-16 {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
          }

          .industry-card h3 {
            font-size: 1.1rem;
            line-height: 1.3;
          }
        }

        /* Tablet (768px - 899px) */
        @media (max-width: 899px) and (min-width: 768px) {
          .grid {
            justify-items: center;
          }

          .industry-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            gap: 16px;
          }

          .industry-title {
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .industry-description {
            font-size: 0.98rem;
            line-height: 1.5;
          }

          .industry-card {
            padding: 20px 14px;
            min-height: 160px;
          }

          .industry-card .w-16.h-16 {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
          }

          .industry-card h3 {
            font-size: 1.05rem;
            line-height: 1.3;
          }
        }

        /* Tablet Small (640px - 767px) */
        @media (max-width: 767px) and (min-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
            justify-items: center;
          }

          .industry-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 35px;
            gap: 14px;
          }

          .industry-title {
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          
          .industry-description {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .industry-card {
            padding: 16px 12px;
            width: 250px;
            height: 140px;
            min-height: unset;
            aspect-ratio: unset;
            transition: all 0.3s ease;
          }

          .industry-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(30, 34, 71, 0.15);
          }

          .industry-card .w-16.h-16 {
            width: 28px;
            height: 28px;
            margin-bottom: 10px;
          }

          .industry-card h3 {
            font-size: 0.8rem;
            line-height: 1.2;
            text-align: center;
          }
        }

        /* Mobile Large (480px - 639px) */
        @media (max-width: 639px) and (min-width: 480px) {
          .min-h-screen.bg-background {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 28px;
            padding-bottom: 16px;
          }

          .industry-header {
            margin-bottom: 25px;
            gap: 10px;
          }

          .industry-title {
            font-size: 1.85rem;
            font-weight: 700;
            letter-spacing: 1px;
          }
          
          .industry-description {
            font-size: 0.92rem;
            line-height: 1.4;
          }

          .industry-card {
            padding: 24px 20px;
            width: 450px;
            height: 200px;
            min-height: unset;
            aspect-ratio: unset;
            transition: all 0.3s ease;
          }

          .industry-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(30, 34, 71, 0.15);
          }

          .industry-card .w-16.h-16 {
            width: 48px;
            height: 48px;
            margin-bottom: 18px;
          }

          .industry-card h3 {
            font-size: 1.2rem;
            line-height: 1.3;
            text-align: center;
          }
        }

        /* Mobile (360px - 479px) */
        @media (max-width: 479px) and (min-width: 360px) {
          .min-h-screen.bg-background {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 24px;
            padding-bottom: 12px;
          }

          .industry-header {
            margin-bottom: 20px;
            gap: 8px;
          }

          .industry-title {
            font-size: 1.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          
          .industry-description {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .industry-card {
            padding: 24px 20px;
            width: 450px;
            height: 200px;
            min-height: unset;
            aspect-ratio: unset;
            transition: all 0.3s ease;
          }

          .industry-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(30, 34, 71, 0.12);
          }

          .industry-card .w-16.h-16 {
            width: 48px;
            height: 48px;
            margin-bottom: 18px;
          }

          .industry-card h3 {
            font-size: 1.2rem;
            line-height: 1.3;
            text-align: center;
          }
        }

        /* Mobile Small (below 360px) */
        @media (max-width: 359px) {
          .min-h-screen.bg-background {
            padding-left: 12px;
            padding-right: 12px;
            padding-top: 20px;
            padding-bottom: 10px;
          }

          .industry-header {
            margin-bottom: 18px;
            gap: 6px;
          }

          .industry-title {
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            line-height: 1.2;
          }
          
          .industry-description {
            font-size: 0.85rem;
            line-height: 1.3;
          }

          .industry-card {
            padding: 22px 18px;
            width: 450px;
            height: 200px;
            min-height: unset;
            aspect-ratio: unset;
            transition: all 0.3s ease;
          }

          .industry-card:hover {
            transform: translateY(-1px);
            box-shadow: 0 3px 12px rgba(30, 34, 71, 0.1);
          }

          .industry-card .w-16.h-16 {
            width: 44px;
            height: 44px;
            margin-bottom: 16px;
          }

          .industry-card h3 {
            font-size: 1.1rem;
            line-height: 1.25;
            text-align: center;
          }
        }

        /* Grid Responsiveness */
        @media (max-width: 1023px) {
          .grid.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            justify-items: center;
          }
        }

        @media (max-width: 767px) and (min-width: 640px) {
          .grid.lg\\:grid-cols-4 {
            grid-template-columns: 1fr;
            gap: 16px;
            justify-items: center;
          }
          
          .max-w-7xl {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 639px) {
          .grid.lg\\:grid-cols-4 {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            max-width: 100%;
            margin: 0 auto;
          }
        }

        @media (max-width: 359px) {
          .grid.lg\\:grid-cols-4 {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            max-width: 100%;
            margin: 0 auto;
          }
        }

        /* Focus and Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .industry-card {
            transition: none;
          }
          
          .industry-card:hover {
            transform: none;
          }
        }

        /* High DPI Displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .industry-card {
            border: 0.5px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </main>
  )
}3 