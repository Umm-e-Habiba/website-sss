"use client";

import Image from "next/image";

export default function Awareness() {
  return (
    <section className="awareness-section">
      <div className="container">
        <div className="awareness-content">
          <div className="text-content">
            <div className="awareness-header">
              <h2 className="awareness-title">How we raise awareness and serve our community</h2>
              <p className="awareness-description">
                Metro Security Experts are (Melbourne-based security) passionate about raising awareness and eagerly wish to do our part in building an ideal 
                society and we believe that a healthy society is a prosperous one. Therefore, we proudly support 'The Royal Melbourne Hospital' that has a 
                renowned reputation in healthcare and medical research. We also support 'Beyond Blue' an Australian not-for-profit organisation that provides 
                support and raises awareness regarding mental health issues.
              </p>
              <p className="awareness-description">
                We also strongly believe that women being the integral part of our society should be treated with cordial respect and therefore we support 'White 
                Ribbon' in their divine cause of stopping violence against women. We are proudly supporting following community groups and organisations:
              </p>
            </div>
          </div>
          
          <div className="right-image">
            <div className="organization-item">
              <div className="organization-logo">
                <Image
                  src="/assets/img/blog/asial.jpg"
                  alt="The Royal Melbourne Hospital"
                  width={450}
                  height={180}
                  className="logo-image"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-organizations">
          <div className="organization-item">
            <div className="organization-logo">
              <Image
                src="/assets/img/blog/awarness.png"
                alt="Beyond Blue"
                width={300}
                height={120}
                className="logo-image"
              />
            </div>
          </div>
          
          <div className="organization-item">
            <div className="organization-logo">
              <Image
                src="/assets/img/blog/white-ribbon.webp"
                alt="White Ribbon Australia"
                width={300}
                height={120}
                className="logo-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .awareness-section {
          padding: 40px 0 80px 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .awareness-content {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 60px;
          align-items: start;
          margin-bottom: 60px;
        }

        .text-content {
          flex: 1;
        }

        .awareness-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .awareness-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #333333;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .awareness-description {
          max-width: 600px;
          color: #666666;
          margin: 0;
          line-height: 1.6;
          font-size: 1.1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .right-image {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: 140px;
        }

        .bottom-organizations {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: center;
          justify-items: center;
        }

        .organization-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 180px;
          width: 100%;
        }

        .organization-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .organization-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .logo-image {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .awareness-content {
            grid-template-columns: 1fr 450px;
            gap: 40px;
          }

          .right-image {
            margin-top: 100px;
          }

          .awareness-title {
            font-size: 2.5rem;
            font-weight: 700;
          }
          
          .awareness-description {
            font-size: 1rem;
          }

          .bottom-organizations {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .awareness-section {
            padding: 30px 0 60px 0;
          }

          .awareness-content {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .right-image {
            margin-top: 0;
          }

          .awareness-title {
            font-size: 2rem;
            font-weight: 700;
          }
          
          .awareness-description {
            font-size: 0.95rem;
          }

          .bottom-organizations {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .organization-item {
            padding: 25px;
            min-height: 140px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }

          .awareness-title {
            font-size: 1.75rem;
            font-weight: 700;
          }
          
          .awareness-description {
            font-size: 0.9rem;
          }

          .organization-item {
            padding: 20px;
            min-height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
