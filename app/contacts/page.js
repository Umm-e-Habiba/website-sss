"use client";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// initialize toast notifications once in your app layout or here

export default function Page() {
     const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;           // 👈 keep a reference
  const formData = new FormData(form);    // 👈 build from the reference

  try {
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data?.success) {
      throw new Error(data?.error || `Request failed: ${res.status}`);
    }

    toast.success("Message sent successfully!");
    form.reset();                         // 👈 safe now
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
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
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
                                    <div className="contact-form-wrapper p-5" style={{backgroundColor: '#f8f9fa', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
                                        <div className="heading2 no-margin-heading text-center mb-5">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />Get In Touch Now!
                                            </small>
                                            <h2>Get A Quotation</h2>
                                        </div>
                                        
                                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold">First Name *</label>
                                                        <input name="firstName" type="text" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Enter your first name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold">Last Name *</label>
                                                        <input name="lastName" type="text" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Enter your last name" required />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold">Email Address *</label>
                                                        <input name="email" type="email" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Enter your email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold">Phone Number *</label>
                                                        <input name="phone" type="tel" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Enter your phone number" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold">Service Required</label>
                                                    <select name="service" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}}>
                                                        <option value="">Select a service</option>
                                                        <option value="residential">Residential Security</option>
                                                        <option value="commercial">Commercial Security</option>
                                                        <option value="event">Event Security</option>
                                                        <option value="construction">Construction Site Security</option>
                                                        <option value="mobile">Mobile Patrols</option>
                                                        <option value="k9">K9 Security</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold">Location/Suburb</label>
                                                    <input name="location" type="text" className="form-control p-3" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Where do you need security services?" />
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold">Message/Additional Details</label>
                                                    <textarea name="message" className="form-control p-3" rows="5" style={{borderRadius: '8px', border: '2px solid #e9ecef'}} placeholder="Tell us more about your security requirements..."></textarea>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-lg px-5 py-3" style={{borderRadius: '10px', fontSize: '18px', fontWeight: 'bold'}} 
                                                disabled={loading}
                                                aria-busy={loading}
                                                >
                                                    {loading ? "Sending..." : "Send Enquiry"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Quick Actions Sidebar */}
                                <div className="col-lg-4">
                                    <div className="quick-actions-sidebar ml30">
                                        {/* Metropolitan Guard Services Card */}
                                        <div className="service-highlight-card p-4 mb-4" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '3px solid #007bff'}}>
                                            <div className="text-center">
                                                <div className="service-icon mb-3">
                                                    <img src="/assets/img/icons/service-14.png" alt="" style={{width: '60px', height: '60px'}} />
                                                </div>
                                                <h3 className="text-primary mb-3">Metropolitan Guard Services</h3>
                                                <p className="mb-4">Professional security solutions across Melbourne and surrounding areas.</p>
                                                
                                                <div className="contact-quick-info">
                                                    <div className="d-flex align-items-center justify-content-center mb-3 p-2" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                                                        <img src="/assets/img/icons/service-16.png" alt="" className="me-2" style={{width: '24px', height: '24px'}} />
                                                        <span className="font-weight-bold">1300 73 11 73</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center mb-3 p-2" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                                                        <img src="/assets/img/icons/service-9.png" alt="" className="me-2" style={{width: '24px', height: '24px'}} />
                                                        <span className="small">admin@metroguards.com.au</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Book a Guard CTA */}
                                        {/* <div className="book-guard-cta p-4 text-center" style={{backgroundColor: '#28a745', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', color: 'white'}}>
                                            <div className="cta-icon mb-3">
                                                <img src="/assets/img/icons/service-12.png" alt="" style={{width: '50px', height: '50px', filter: 'brightness(0) invert(1)'}} />
                                            </div>
                                            <h4 className="mb-3">Need Immediate Security?</h4>
                                            <p className="mb-4">To book a guard, click on the button below</p>
                                            <button className="btn btn-light btn-lg px-4 py-3 font-weight-bold" style={{borderRadius: '10px', color: '#28a745'}}>
                                                📋 Book a Guard
                                            </button>
                                        </div> */}

                                        {/* Emergency Contact */}
                                        <div className="emergency-contact mt-4 p-4 text-center" style={{backgroundColor: '#dc3545', borderRadius: '15px', color: 'white'}}>
                                            <h5 className="mb-2">🚨 Emergency Security?</h5>
                                            <p className="mb-3 small">24/7 Emergency Response Available</p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="/assets/img/icons/service-16.png" alt="" className="me-2" style={{width: '20px', height: '20px', filter: 'brightness(0) invert(1)'}} />
                                                <span className="font-weight-bold">Call Now: 1300 73 11 73</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </Layout>
        </>
    )
}