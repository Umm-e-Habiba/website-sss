"use client";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact-styles.css";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // First scroll detection
    const handleFirstScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        document.body.classList.add('has-scrolled');
        // Hide scroll indicator animation
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
          scrollIndicator.style.opacity = '0';
        }
      }
    };

    // Scroll-triggered animations (first time only)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animate-in', 'animated');
          // Stop observing this element after first animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initialize observer after component mounts
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }, 100);

    // Add scroll listener
    window.addEventListener('scroll', handleFirstScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleFirstScroll);
      observer.disconnect();
    };
  }, [hasScrolled]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      toast.error(err.message || "Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Scroll Indicator */}
      {!hasScrolled && (
        <div className="scroll-indicator">
          <div className="scroll-icon">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      )}

      {/* Toasts */}
      <ToastContainer position="bottom-right" autoClose={3000}/>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us"
        mainTitle="Get In Touch With Metro Guards"
        subtitle="Professional Security Solutions in Melbourne - Available 24/7 for Your Protection"
      >
        <div>
                              {/*===== Contact Us Directly Section =====*/}
          <div className="contact-us-directly-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="contact-directly-content">
                    <div className="section-header text-center">
                      <h1 className="main-title">Contact Us Directly</h1>
                      <p className="section-subtitle">
                        Choose your preferred way to get in touch. We're available 24/7 for your convenience.
                      </p>
                    </div>
                    
                    <div className="contact-options-grid">
                      {/* Call Us Now Card */}
                      <div className="contact-option-card call-card card-slide-up-load" style={{animationDelay: '0.2s'}}>
                        <div className="card-icon-wrapper">
                          <div className="icon-circle">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 16.92V19.92C22 20.52 21.53 21.01 20.92 21.01C9.84 21.01 1 12.17 1 1.08C1 0.47 1.47 0 2.08 0H5.09C5.7 0 6.18 0.47 6.18 1.08C6.18 3.25 6.65 5.31 7.52 7.18C7.7 7.57 7.59 8.04 7.26 8.3L5.84 9.32C7.1 12.22 9.78 14.9 12.68 16.16L13.7 14.74C13.96 14.41 14.43 14.3 14.82 14.48C16.69 15.35 18.75 15.82 20.92 15.82C21.53 15.82 22 16.31 22 16.92Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">Call Us Now</h3>
                          <p className="card-number">1300 73 11 73</p>
                          <p className="card-description">Speak directly with our team</p>
                        </div>
                      </div>

                      {/* Send SMS Card */}
                      <div className="contact-option-card sms-card card-slide-up-load" style={{animationDelay: '0.4s'}}>
                        <div className="card-icon-wrapper">
                          <div className="icon-circle">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">Visit Our Office</h3>
                          <p className="card-number">CS Hub, 5, Level 1/34 Commercial Rd</p>
                          <p className="card-description">Caroline Springs VIC 3023</p>
                        </div>
                      </div>

                      {/* Email Support Card */}
                      <div className="contact-option-card email-card card-slide-up-load" style={{animationDelay: '0.6s'}}>
                        <div className="card-icon-wrapper">
                          <div className="icon-circle">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">Email Support</h3>
                          <p className="card-number">admin@metroguards.com.au</p>
                          <p className="card-description">Detailed inquiries welcome</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                 

          {/*===== Modern Contact Form Section =====*/}
          <div className="modern-contact-form-section">
            <div className="container">
              <div className="row">
                {/* Enhanced Contact Form */}
                <div className="col-lg-8">
                  <div className="modern-form-wrapper animate-on-scroll scale-in-animation">
                    <div className="form-header fade-in-up">
                      <div className="form-badge pulse-badge">
                        <span className="badge-icon">💬</span>
                        <span>Get In Touch</span>
                      </div>
                      <h2 className="form-title typing-animation">Send Us a Message</h2>
                      <p className="form-subtitle fade-in-up">
                        Ready to enhance your security? Drop us a message and we'll get back to you within 2 hours.
                      </p>
                    </div>
                    
                                        <form className="classic-contact-form" onSubmit={handleSubmit} noValidate>
                      {/* honeypot (spam trap) */}
                      <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Full Name</span>
                              <span className="required-asterisk">*</span>
                            </label>
                            <div className="input-container">
                              <input 
                                name="name" 
                                type="text" 
                                className="classic-input" 
                                placeholder="Enter your complete name" 
                                required 
                              />
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Email Address</span>
                              <span className="required-asterisk">*</span>
                            </label>
                            <div className="input-container">
                              <input 
                                name="email" 
                                type="email" 
                                className="classic-input" 
                                placeholder="your.email@example.com" 
                                required 
                              />
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Phone Number</span>
                              <span className="optional-text">(Optional)</span>
                            </label>
                            <div className="input-container">
                              <input 
                                name="phone" 
                                type="tel" 
                                className="classic-input" 
                                placeholder="+61 xxx xxx xxx" 
                              />
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Property Location</span>
                              <span className="required-asterisk">*</span>
                            </label>
                            <div className="input-container">
                              <input 
                                name="location" 
                                type="text" 
                                className="classic-input" 
                                placeholder="Enter property address or suburb (e.g. Caroline Springs VIC)" 
                                required 
                              />
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Service Type</span>
                              <span className="required-asterisk">*</span>
                            </label>
                            <div className="select-container">
                              <select name="serviceType" className="classic-select" required>
                                <option value="">Please select a service</option>
                                <option value="residential">Residential Security</option>
                                <option value="commercial">Commercial Security</option>
                                <option value="event">Event Security</option>
                                <option value="personal">Personal Protection</option>
                                <option value="consultation">Security Consultation</option>
                                <option value="other">Other</option>
                              </select>
                              <div className="select-arrow">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <div className="form-grid">
                          <div className="form-field full-width">
                            <label className="classic-label">
                              <span className="label-title">Your Message</span>
                              <span className="required-asterisk">*</span>
                            </label>
                            <div className="textarea-container">
                          <textarea 
                            name="message" 
                                className="classic-textarea" 
                                rows="6" 
                                placeholder="Please describe your security requirements, property details, expected duration, and any specific concerns you may have..."
                            required
                          ></textarea>
                              <div className="input-border-effect"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-footer-section">
                        <div className="privacy-notice-classic">
                          <div className="privacy-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22S2 16 2 8C2 5.8 3.8 4 6 4C8.2 4 10 5.8 10 8H14C14 5.8 15.8 4 18 4C20.2 4 22 5.8 22 8C22 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="privacy-text">
                            <h6>Privacy & Security Guaranteed</h6>
                            <p>Your personal information is encrypted and securely stored. We will only use your details to provide you with a customized security quote and will never share your information with third parties.</p>
                          </div>
                        </div>

                        <div className="submit-section">
                        <button
                          type="submit"
                            className="classic-submit-btn"
                          disabled={loading}
                          aria-busy={loading}
                        >
                            <span className="btn-content-classic">
                              {loading ? (
                                <>
                                  <span className="loading-spinner"></span>
                                  <span className="btn-text">Sending Your Message...</span>
                                </>
                              ) : (
                                <>
                                  <span className="btn-icon-classic">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </span>
                                  <span className="btn-text">Send Message</span>
                                </>
                              )}
                            </span>
                        </button>
                          <p className="response-time">
                            <span className="clock-icon">⏱️</span>
                            We typically respond within 2 hours during business hours
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Enhanced Sidebar */}
                <div className="col-lg-4">
                  <div className="contact-sidebar animate-on-scroll slide-in-right">
                    {/* Why Choose Us Card */}
                    <div className="sidebar-card why-choose-card card-float-animation" style={{ animationDelay: '0.2s' }}>
                      <div className="card-header">
                        <div className="card-icon pulse-icon">
                          <span className="icon">🛡️</span>
                        </div>
                        <h3>Why Choose Metro Guards?</h3>
                      </div>
                      <div className="card-content">
                        <div className="feature-list">
                          <div className="feature-item fade-in-item" style={{ animationDelay: '0.4s' }}>
                            <span className="feature-icon check-bounce">✓</span>
                            <span>24/7 Professional Security</span>
                          </div>
                          <div className="feature-item fade-in-item" style={{ animationDelay: '0.6s' }}>
                            <span className="feature-icon check-bounce">✓</span>
                            <span>Licensed & Insured Guards</span>
                          </div>
                          <div className="feature-item fade-in-item" style={{ animationDelay: '0.8s' }}>
                            <span className="feature-icon check-bounce">✓</span>
                            <span>Rapid Response Team</span>
                          </div>
                          <div className="feature-item fade-in-item" style={{ animationDelay: '1s' }}>
                            <span className="feature-icon check-bounce">✓</span>
                            <span>Customized Solutions</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contact Card */}
                    <div className="sidebar-card emergency-card card-float-animation" style={{ animationDelay: '0.4s' }}>
                      <div className="emergency-content">
                        <div className="emergency-icon pulse-animation">🚨</div>
                        <h4>Need Immediate Security?</h4>
                        <p>Emergency security services available 24/7</p>
                        <a href="tel:1300731173" className="emergency-btn hover-shake">
                          <span className="phone-icon">📞</span>
                          Call Now: 1300 73 11 73
                        </a>
                      </div>
                    </div>

                    {/* Quick Response Card */}
                    <div className="sidebar-card response-card card-float-animation" style={{ animationDelay: '0.6s' }}>
                      <div className="response-content">
                        <h4>Quick Response Guarantee</h4>
                        <div className="response-stats">
                          <div className="stat count-animation">
                            <span className="stat-number count-up">2hrs</span>
                            <span className="stat-label">Response Time</span>
                          </div>
                          <div className="stat count-animation">
                            <span className="stat-number count-up">24/7</span>
                            <span className="stat-label">Availability</span>
                          </div>
                        </div>
                        <p>Get a personalized security quote within 2 hours of your inquiry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            /* Modern Hero Section */
            .modern-hero-section {
              position: relative;
              min-height: 80vh;
              display: flex;
              align-items: center;
              overflow: hidden;
              background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%);
            }

            .hero-background {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: 
                radial-gradient(circle at 20% 50%, rgba(253, 197, 26, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(253, 197, 26, 0.15) 0%, transparent 50%);
            }

            .hero-content {
              position: relative;
              z-index: 2;
              padding: 60px 0;
            }

            .hero-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 50px;
              padding: 8px 20px;
              color: white;
              font-weight: 500;
              margin-bottom: 20px;
              font-size: 14px;
            }

            .badge-icon {
              font-size: 16px;
            }

            .hero-title {
              font-size: 3.5rem;
              font-weight: 800;
              color: white;
              margin-bottom: 20px;
              line-height: 1.2;
            }

            .gradient-text {
              background: linear-gradient(45deg, #fdc51a, #f39c12, #fdc51a, #f39c12);
              background-size: 300% 300%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: gradientShift 3s ease-in-out infinite;
            }

            .hero-subtitle {
              font-size: 1.5rem;
              color: rgba(255, 255, 255, 0.9);
              margin-bottom: 30px;
              font-weight: 300;
            }

            .hero-description {
              max-width: 800px;
              margin: 0 auto 40px;
              color: rgba(255, 255, 255, 0.8);
              font-size: 1.1rem;
              line-height: 1.6;
            }

            .hero-stats {
              display: flex;
              justify-content: center;
              gap: 60px;
              margin-top: 40px;
            }

            .stat-item {
              text-align: center;
              color: white;
            }

            .stat-item h3 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 5px;
              color: #fdc51a;
            }

            .stat-item p {
              font-size: 1rem;
              margin: 0;
              opacity: 0.9;
            }

            /* Responsive Design for Hero */
            @media (max-width: 991px) {
              .hero-title {
                font-size: 2.5rem;
              }

              .hero-stats {
                gap: 30px;
              }
            }

            @media (max-width: 767px) {
              .hero-title {
                font-size: 2rem;
              }

              .hero-subtitle {
                font-size: 1.2rem;
              }

              .hero-stats {
                flex-direction: column;
                gap: 20px;
                margin-top: 30px;
              }

              .stat-item h3 {
                font-size: 2rem;
              }

              .modern-hero-section {
                min-height: 70vh;
              }

              .hero-content {
                padding: 40px 0;
              }
            }
          `}</style>
        </div>
      </Layout>
    </>
  )
}