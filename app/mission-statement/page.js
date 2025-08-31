"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"

const missionValues = [
  {
    icon: "🛡️",
    title: "Excellence in Security",
    description: "We deliver the highest standards of security services through continuous training, advanced technology, and unwavering commitment to protecting our clients."
  },
  {
    icon: "🤝",
    title: "Trust & Integrity",
    description: "Building lasting relationships through transparent communication, ethical practices, and consistent reliability in every security solution we provide."
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Embracing cutting-edge security technologies and methodologies to stay ahead of evolving threats and provide superior protection."
  },
  {
    icon: "🌟",
    title: "Professional Excellence",
    description: "Maintaining the highest professional standards through rigorous training, certification, and continuous development of our security personnel."
  }
];

const principlesData = [
  {
    number: "01",
    title: "Client-Centric Approach",
    description: "Every security solution is tailored to meet the specific needs and challenges of our clients, ensuring optimal protection and peace of mind."
  },
  {
    number: "02", 
    title: "24/7 Vigilance",
    description: "Round-the-clock security services with rapid response capabilities, ensuring continuous protection for our clients' assets and personnel."
  },
  {
    number: "03",
    title: "Continuous Improvement",
    description: "Regular assessment and enhancement of our security protocols, training programs, and service delivery to maintain industry leadership."
  },
  {
    number: "04",
    title: "Community Safety",
    description: "Contributing to safer communities through responsible security practices and active participation in community safety initiatives."
  }
];

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

    return (
        <>
      <Layout 
        headerStyle={1} 
        footerStyle={1} 
        breadcrumbTitle="ABOUT METRO GUARDS"
        mainTitle="Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Mission</span> & Vision"
        subtitle="Dedicated to Excellence in Security Services & Community Protection"
        backgroundImage="/assets/img/about/about23.png"
      >
                <div>
          {/*===== Mission Statement Introduction Section =====*/}
          <section 
            className={`mission-intro-section ${isLoaded ? 'loaded' : ''}`}
            style={{
              paddingTop: '80px',
              paddingBottom: '60px',
              background: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Mission Statement
                    </span>
                  </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.2',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Providing Security with <span style={{ color: '#fdc51a' }}>Integrity & Excellence</span>
                  </h2>
                  
                  <div 
                    style={{
                      background: '#f8f9fa',
                      borderRadius: '20px',
                      padding: '40px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #f1f3f4',
                      marginBottom: '40px'
                    }}
                  >
                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.7',
                      margin: 0,
                      color: '#1e2247',
                      fontWeight: '400'
                    }}>
                      As the premier security company in Australia, our mission is to provide customers with <strong style={{ color: '#fdc51a' }}>cost-effective solutions of the highest quality</strong> and the best security guard services using the latest technologies with global connections whilst targeting enhanced security in the Melbourne and Sydney security industry.
                    </p>
                  </div>

                  {/* Mission Statistics */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        15+
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Years of Excellence
                                            </p>
                                        </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        500+
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Satisfied Clients
                      </p>
                                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px auto',
                        color: '#1e2247',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        24/7
                                </div>
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        Security Coverage
                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </section>

          {/*===== Vision & Values Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              {/* Vision Statement */}
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-10">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Vision
                    </span>
                  </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '40px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    To Be Australia's Most <span style={{ color: '#fdc51a' }}>Trusted Security Partner</span>
                                        </h2>
                  
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '20px',
                    padding: '50px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #f1f3f4',
                    marginBottom: '80px'
                  }}>
                    <p style={{
                      fontSize: '1.3rem',
                      color: '#1e2247',
                      lineHeight: '1.7',
                      marginBottom: '25px',
                      fontWeight: '500'
                    }}>
                      We envision a future where every business, event, and community in Australia feels completely secure and protected through our innovative security solutions.
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      Our vision extends beyond traditional security services to encompass comprehensive protection strategies that adapt to evolving threats while maintaining the highest standards of professionalism and reliability.
                    </p>
                                    </div>
                                </div>
                            </div>

              {/* Core Values Grid */}
                            <div className="row">
                <div className="col-12">
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: '600',
                    color: '#1e2247',
                    textAlign: 'center',
                    marginBottom: '60px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Our Core Values
                  </h3>
                </div>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '30px',
                  marginBottom: '60px'
                }}
              >
                {missionValues.map((value, index) => (
                  <div 
                    key={index}
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '40px 30px',
                      border: '1px solid #f1f3f4',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      setHoveredCard(index);
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)';
                      e.currentTarget.style.color = '#1e2247';
                    }}
                    onMouseLeave={(e) => {
                      setHoveredCard(null);
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = 'inherit';
                    }}
                  >
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '20px',
                      lineHeight: '1'
                    }}>
                      {value.icon}
                                        </div>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: hoveredCard === index ? '#1e2247' : '#1e2247'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      margin: 0,
                      color: hoveredCard === index ? '#1e2247' : '#6c757d'
                    }}>
                      {value.description}
                    </p>
                  </div>
                ))}
                                    </div>
                                </div>
          </section>

          {/*===== Our Principles Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#ffffff'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-8">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Our Principles
                    </span>
                                        </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Guiding Principles That <span style={{ color: '#fdc51a' }}>Define Our Service</span>
                  </h2>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#6c757d',
                    lineHeight: '1.6',
                    marginBottom: '60px'
                  }}>
                    These fundamental principles guide every aspect of our security services and shape our commitment to excellence.
                                        </p>
                                    </div>
                                </div>

              <div className="row">
                {principlesData.map((principle, index) => (
                  <div key={index} className="col-lg-6" style={{ marginBottom: '40px' }}>
                    <div 
                      style={{
                        background: '#ffffff',
                        borderRadius: '15px',
                        padding: '40px',
                        border: '1px solid #f1f3f4',
                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '25px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                      }}
                    >
                      <div style={{
                        flexShrink: 0,
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1e2247'
                      }}>
                        {principle.number}
                                        </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          color: '#1e2247',
                          marginBottom: '15px',
                          lineHeight: '1.3'
                        }}>
                          {principle.title}
                        </h4>
                        <p style={{
                          fontSize: '1rem',
                          color: '#6c757d',
                          lineHeight: '1.6',
                          margin: 0
                        }}>
                          {principle.description}
                                        </p>
                                    </div>
                                </div>
                                        </div>
                ))}
                                    </div>
                                </div>
          </section>

          {/*===== Leadership & Culture Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: '#f8f9fa'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="brand-label" style={{ marginBottom: '25px' }}>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#fdc51a', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      Leadership & Culture
                    </span>
                                        </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: '700',
                    color: '#1e2247',
                    lineHeight: '1.3',
                    marginBottom: '30px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Building a Culture of <span style={{ color: '#fdc51a' }}>Excellence & Responsibility</span>
                  </h2>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '25px'
                  }}>
                    Our leadership team is committed to fostering a culture where every team member feels valued, empowered, and motivated to deliver exceptional security services. We believe that our people are our greatest asset.
                  </p>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '35px'
                  }}>
                    Through continuous training, professional development, and a supportive work environment, we ensure our security professionals are equipped with the skills and knowledge necessary to exceed client expectations.
                  </p>

                  {/* Key Culture Points */}
                  <div style={{ marginBottom: '30px' }}>
                    {[
                      "Continuous Professional Development",
                      "Inclusive and Supportive Environment", 
                      "Recognition and Career Growth",
                      "Community Engagement"
                    ].map((point, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                          borderRadius: '50%',
                          marginRight: '15px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{ color: '#1e2247', fontSize: '12px', fontWeight: '700' }}>✓</span>
                        </div>
                        <span style={{
                          fontSize: '1rem',
                          color: '#1e2247',
                          fontWeight: '500'
                        }}>
                          {point}
                        </span>
                      </div>
                    ))}
                                    </div>
                                </div>

                <div className="col-lg-6">
                  <div style={{
                    position: 'relative',
                    paddingLeft: '50px'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      borderRadius: '20px',
                      padding: '50px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem'
                      }}>
                        🏆
                                        </div>
                      
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: '#1e2247',
                        marginBottom: '20px'
                      }}>
                        Our Commitment to Excellence
                      </h3>
                      
                      <p style={{
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        lineHeight: '1.6',
                        marginBottom: '25px'
                      }}>
                        We are committed to maintaining the highest standards in the security industry through innovation, dedication, and unwavering focus on client satisfaction.
                      </p>
                      
                      <div style={{
                        background: '#ffffff',
                        borderRadius: '10px',
                        padding: '20px',
                        border: '1px solid #e9ecef'
                      }}>
                        <p style={{
                          fontSize: '1rem',
                          color: '#1e2247',
                          fontStyle: 'italic',
                          margin: 0,
                          textAlign: 'center'
                        }}>
                          "Security is not just our business - it's our passion and responsibility to the community."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </section>

          {/*===== Call to Action Section =====*/}
          <section 
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              background: 'linear-gradient(135deg, #1e2247 0%, #2d3748 100%)',
              color: '#ffffff',
              position: 'relative'
            }}
          >
            <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
              <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                  <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    marginBottom: '25px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    Ready to Experience Our Mission in Action?
                  </h2>
                  
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    marginBottom: '40px',
                    color: '#e9ecef'
                  }}>
                    Partner with MetroGuards and experience security services driven by our unwavering commitment to excellence, integrity, and your peace of mind.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a 
                      href="/contacts"
                      style={{
                        display: 'inline-block',
                        padding: '18px 35px',
                        background: 'linear-gradient(135deg, #fdc51a 0%, #f39c12 100%)',
                        color: '#1e2247',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 12px 30px rgba(253, 197, 26, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 20px rgba(253, 197, 26, 0.3)';
                      }}
                    >
                      Contact Us Today
                    </a>
                    
                    <a 
                      href="/get-quotation"
                      style={{
                        display: 'inline-block',
                        padding: '18px 35px',
                        background: 'transparent',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        border: '2px solid #ffffff',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#ffffff';
                        e.target.style.color = '#1e2247';
                        e.target.style.transform = 'translateY(-3px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#ffffff';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Subscribe />
                </div>
            </Layout>

      <style jsx>{`
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

        .mission-intro-section.loaded {
          animation: fadeInUp 0.8s ease-out;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .brand-label span {
            font-size: 0.9rem !important;
          }
          
          .col-lg-6 {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 576px) {
          .mission-intro-section {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          
          .mission-intro-section div[style*="padding: 40px"] {
            padding: 30px 25px !important;
          }
          
          .row div[style*="gap: 30px"] {
            gap: 20px !important;
          }
        }
      `}</style>
        </>
    )
}