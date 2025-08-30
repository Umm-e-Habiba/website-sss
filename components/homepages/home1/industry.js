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
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="industry-header">
          <div className="industry-header-content">
            <h2 className="industry-title">MASG operates in your industry</h2>
            <p className="industry-description">Find out how MASG operates in your industry with specialized security solutions tailored to meet the unique challenges and requirements of different sectors.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        /* Responsive design for header */
        @media (max-width: 1024px) {
          .industry-title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .industry-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .industry-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            gap: 16px;
          }

          .industry-title {
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .industry-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .industry-title {
            font-size: 1.75rem;
            font-weight: 700;
            letter-spacing: 1px;
          }
          
          .industry-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </main>
  )
}