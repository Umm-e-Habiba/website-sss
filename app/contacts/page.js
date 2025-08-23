"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [loading, setLoading] = useState(false);

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
      {/* Toasts */}
      <ToastContainer position="bottom-right" autoClose={3000}/>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US">
        <div>
          {/*===== Hire Security Guards in Melbourne and Surrounding Areas =====*/}
          <div className="section-padding">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <div className="heading2 no-margin-heading">
                    <h2>Hire Security Guards in Melbourne and Surrounding Areas</h2>
                    <h3>Professional Security Solutions Tailored to Your Needs</h3>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="heading2 no-margin-heading">
                    <p>
                      MG is a leading security company in Melbourne, Victoria, renowned for its top-notch security guard services. With a commitment to ensuring safety and protection, we have a team of highly trained and professional security guards equipped to handle a variety of situations, from safeguarding residential properties to securing commercial establishments. If you're looking to hire a security guard in Melbourne.
                    </p>
                    <p>
                      MG provides reliable and effective security solutions tailored to your specific needs. Whether you require short-term event security or long-term protection, our team is dedicated to offering peace of mind through unparalleled service and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Contact Information Section =====*/}
          <div className="about-inner bg-29">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-bg-main-img position-relative mr50">
                    <img src="/assets/img/about/about22.png" alt="" />
                    {/* <div className="corner-right-bottom-shape2 position-absolute">
                      <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ml50">
                    <div className="heading2 no-margin-heading">
                      <small className="heading-top inner-heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />Get In Touch
                      </small>
                      <h2>CONTACT US</h2>
                      <p className="mb-4">
                        For general enquiries, contact <strong>1300 73 11 73</strong> or fill in the form below
                      </p>
                      
                      <div className="contact-info-cards">
                        <div className="d-flex align-items-center mb-4 p-3" style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)'}}>
                          
                          <div>
                            <h5 className="mb-1">Call Us</h5>
                            <p className="mb-0 text-primary font-weight-bold">1300 73 11 73</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mb-4 p-3" style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)'}}>
                          
                          <div>
                            <h5 className="mb-1">Email Us</h5>
                            <p className="mb-0 text-primary">admin@metroguards.com.au</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mb-4 p-3" style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)'}}>
                          
                          <div>
                            <h5 className="mb-1">Office Address</h5>
                            <p className="mb-0">CS Hub, 5, Level 1/34 Commercial Rd,<br />Caroline Springs VIC 3023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== Contact Form & Quick Quote Section =====*/}
          <div className="section-padding">
            <div className="container">
              <div className="row">
                {/* Contact Form */}
                <div className="col-lg-8">
                  <div className="contact-form-wrapper p-5 glassmorphism-card-with-bg">
                    <div className="heading2 no-margin-heading text-center mb-5">
                      <small className="heading-top inner-heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />Get In Touch Now!
                      </small>
                      <h2 style={{ color: "#fff" }}>Contact Us</h2>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                      {/* honeypot (spam trap) */}
                      <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Name *</label>
                            <input name="name" type="text" className="form-control p-3 glassmorphism-input" placeholder="Enter your full name" required />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Email Address *</label>
                            <input name="email" type="email" className="form-control p-3 glassmorphism-input" placeholder="Enter your email" required />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Message *</label>
                          <textarea 
                            name="message" 
                            className="form-control p-3 glassmorphism-input" 
                            rows="5" 
                            placeholder="How can we help you?"
                            style={{ color: "#fff" }}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5 py-3"
                          style={{ 
                            borderRadius: "10px", 
                            fontSize: "18px", 
                            fontWeight: "bold",
                            backgroundColor: "#FDC51A",
                            border: "none",
                            color: "#1E2247"
                          }}
                          disabled={loading}
                          aria-busy={loading}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Quick Actions Sidebar */}
                <div className="col-lg-4">
                  <div className="quick-actions-sidebar ml30">
                    {/* Metropolitan Guard Services Card */}
                    <div className="service-highlight-card p-4 mb-4" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '3px solid #1E2247'}}>
                      <div className="text-center">
                        {/* <div className="service-icon mb-3">
                          <img src="/assets/img/icons/service-14.png" alt="" style={{width: '60px', height: '60px'}} />
                        </div> */}
                        <h3 className="text-primary mb-3">Metropolitan Guard Services</h3>
                        <p className="mb-4">Professional security solutions across Melbourne and surrounding areas.</p>
                        
                        <div className="contact-quick-info">
                          <div className="d-flex align-items-center justify-content-center mb-3 p-2" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                            {/* <img src="/assets/img/icons/service-16.png" alt="" className="me-2" style={{width: '24px', height: '24px'}} /> */}
                            <span className="font-weight-bold">1300 73 11 73</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-3 p-2" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                            {/* <img src="/assets/img/icons/service-9.png" alt="" className="me-2" style={{width: '24px', height: '24px'}} /> */}
                            <span className="small">admin@metroguards.com.au</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="emergency-contact mt-4 p-4 text-center" style={{backgroundColor: '#939393', borderRadius: '15px', color: 'black'}}>
                      <h5 className="mb-2">Emergency Security?</h5>
                      <p className="mb-3 small">24/7 Emergency Response Available</p>
                      <div className="d-flex align-items-center justify-content-center">
                        {/* <img src="/assets/img/icons/service-16.png" alt="" className="me-2" style={{width: '20px', height: '20px', filter: 'brightness(0) invert(1)'}} /> */}
                        <span className="font-weight-bold">Call Now: 1300 73 11 73</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .glassmorphism-card-with-bg {
              background: linear-gradient(135deg, rgba(84, 84, 100, 0.9) 0%, rgba(15, 18, 41, 0.95) 100%);
              backdrop-filter: blur(20px);
              border-radius: 15px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }
            
            .glassmorphism-input {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              color: #fff;
              border-radius: 8px;
            }
            
            .glassmorphism-input::placeholder {
              color: rgba(255, 255, 255, 0.6);
            }
            
            .glassmorphism-input:focus {
              background: rgba(255, 255, 255, 0.15);
              border-color: rgba(255, 255, 255, 0.4);
              box-shadow: 0 0 0 0.2rem rgba(253, 197, 26, 0.25);
              color: #fff;
            }

            select.glassmorphism-input {
              appearance: none;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
              background-repeat: no-repeat;
              background-position: right 1rem center;
              background-size: 1em;
            }

            /* Fix for dropdown options text color */
            select.glassmorphism-input option {
              background: #1E2247;
              color: #fff;
              padding: 10px;
            }

            /* For Firefox */
            select.glassmorphism-input option:checked {
              background: #FDC51A;
              color: #1E2247;
            }

            /* For Webkit browsers (Chrome, Safari) */
            select.glassmorphism-input option:checked,
            select.glassmorphism-input option:hover {
              background: #FDC51A !important;
              color: #1E2247 !important;
            }
          `}</style>
        </div>
      </Layout>
    </>
  )
}