"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function K9SecurityPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/k9", { method: "POST", body: formData });
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
        <ToastContainer position="bottom-right" autoClose={3000} />
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="K9 SECURITY SERVICES">
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Elite Canine Protection
                                            </small>
                                            <h2>CANINE (K9) SECURITY SERVICES IN MELBOURNE</h2>
                                            <p>
                                                "Dogs have acted as our guardians since ancient times. Today, man's best friend continues to be one of the most effective ways of protecting people and their property"
                                            </p>
                                            <p>Need security for your business, festival, or event? We have a solution for you. We can provide you with our specialized trained Dog handle security dogs i.e. Canine K9 Security Melbourne which is also known as Guard Dogs Melbourne & Security Dogs Melbourne.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/community.jpg" alt="K9 Security Services" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Main Content Section =====*/}
                    <div className="service-section-three bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="content-block">
                                        <h3 className="mb-3">MG Specialists Provides Canine (K9) Security Solutions across the Melbourne</h3>
                                        <p className="mb-4">
                                            Need security for your business, festival, or event? We have a solution for you. We can provide you with our specialized trained Dog handle security dogs i.e. Canine K9 Security Melbourne which is also known as Guard Dogs Melbourne & Security Dogs Melbourne.
                                        </p>

                                        <h4 className="mb-3">Examples of situations where MGS canine (k9) security services are in high demand include:</h4>
                                        <ul className="mb-4">
                                            <li>Events</li>
                                            <li>VIP protocols</li>
                                            <li>Industrial site security – including warehouse and storage security</li>
                                            <li>Business Security</li>
                                            <li>Construction site Security</li>
                                            <li>Retail</li>
                                            <li>Film & TV</li>
                                        </ul>

                                        <p className="mb-4">
                                            Canine/Dog Security Melbourne is becoming very common nowadays. These highly trained K9 Security dogs are integral to security teams across various sectors, including law enforcement, military, private security firms, and even individual households. With their exceptional senses and unwavering loyalty, our security dogs provide an added layer of protection and assist in detecting threats, preventing crime, and maintaining a secure environment. If you are looking for the best Canine- Dog Security Services, look no further than Metropolitan Guard Security Services.
                                        </p>

                                        <h3 className="mb-3">Hire K9 Security</h3>
                                        <h4 className="mb-3">K9 Security Guards Melbourne – Guard Dog Security Melbourne</h4>
                                        <p className="mb-4">
                                            The selection and training of dogs for dog security are rigorous processes that ensure they possess the essential traits and skills to excel in their roles. Many species of dogs may also be employed based on specific requirements. Additionally, our company has security guard dogs trained to differentiate between friendly interactions and potential threats, ensuring controlled responses in real-life situations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Quote Form Section =====*/}
                    <div className="reasons-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2 no-margin-heading">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Get Started
                                        </small>
                                        <h2 style={{ color: "#000" }}>GET A FREE QUOTE</h2>
                                        <p style={{ color: "#000" }}>K9 Security Services Melbourne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="row">
                                        {/* Quote Form */}
                                        <div className="col-lg-8">
                                            <div className="quote-form-wrapper p-5 glassmorphism-card-with-bg">
                                                <form
                                                    className="quote-form"
                                                    onSubmit={handleSubmit}
                                                    noValidate
                                                >
                                                    {/* honeypot (spam trap) */}
                                                    <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Name</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="name" 
                                                                    name="name" 
                                                                    placeholder="Enter your full name" 
                                                                    required 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Email</label>
                                                                <input 
                                                                    type="email" 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="email" 
                                                                    name="email" 
                                                                    placeholder="Enter your email" 
                                                                    required 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Phone Number</label>
                                                                <input 
                                                                    type="tel" 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="phone" 
                                                                    name="phone" 
                                                                    placeholder="Enter your phone number" 
                                                                    required 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Service Date</label>
                                                                <input 
                                                                    type="date" 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="date" 
                                                                    name="date" 
                                                                    required 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Location</label>
                                                                <select 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="location" 
                                                                    name="location" 
                                                                    required
                                                                >
                                                                    <option value="">Select a location</option>
                                                                    <option value="Sydney">Sydney</option>
                                                                    <option value="Melbourne">Melbourne</option>
                                                                    <option value="Brisbane">Brisbane</option>
                                                                    <option value="Perth">Perth</option>
                                                                    <option value="Adelaide">Adelaide</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Number of Attendees</label>
                                                                <input 
                                                                    type="number" 
                                                                    className="form-control p-3 glassmorphism-input" 
                                                                    id="attendees" 
                                                                    name="attendees" 
                                                                    placeholder="Estimated number of attendees" 
                                                                    min="0" 
                                                                    required 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="form-group">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Type of Service Required</label>
                                                            <select 
                                                                className="form-control p-3 glassmorphism-input" 
                                                                id="service" 
                                                                name="service" 
                                                                required
                                                            >
                                                                <option value="">Select a service</option>
                                                                <option value="Alarm Response Unit">Alarm Response Unit</option>
                                                                <option value="Concierge Services">Concierge Services</option>
                                                                <option value="Crowd Controller">Crowd Controller</option>
                                                                <option value="Guard with Dog">Guard with Dog</option>
                                                                <option value="K9 Response unit">K9 Response unit</option>
                                                                <option value="Security Officers">Security Officers</option>
                                                                <option value="Mobile Security Patrols">Mobile Security Patrols</option>
                                                                <option value="Uniformed Guards">Uniformed Guards</option>
                                                                <option value="Construction Site Security">Construction Site Security</option>
                                                                <option value="Loss Prevention Officer">Loss Prevention Officer</option>
                                                                <option value="Party Security">Party Security</option>
                                                                <option value="Event Security">Event Security</option>
                                                                <option value="COVID Marshal">COVID Marshal</option>
                                                                <option value="Other Services">Other Services</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <button 
                                                            type="submit" 
                                                            disabled={loading} 
                                                            className="btn btn-primary btn-lg px-5 py-3"
                                                            style={{ 
                                                                borderRadius: "10px", 
                                                                fontSize: "18px", 
                                                                fontWeight: "bold",
                                                                backgroundColor: "#FDC51A",
                                                                border: "none",
                                                                color: "#1E2247"
                                                            }}
                                                            aria-busy={loading}
                                                        >
                                                            {loading ? "Sending..." : "GET FREE QUOTE"}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Quick Actions Sidebar */}
                                        <div className="col-lg-4">
                                            <div className="quick-actions-sidebar ml30">
                                                {/* K9 Security Services Card */}
                                                <div className="service-highlight-card p-4 mb-4" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '3px solid #1E2247'}}>
                                                    <div className="text-center">
                                                        {/* <div className="service-icon mb-3">
                                                            <img src="/assets/img/icons/service-14.png" alt="" style={{width: '60px', height: '60px'}} />
                                                        </div> */}
                                                        <h3 className="text-primary mb-3" style={{color: '#000'}}>K9 Security Services</h3>
                                                        <p className="mb-4">Professional K9 security solutions across Melbourne and surrounding areas.</p>
                                                        
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
                                                <div className="emergency-contact mt-4 p-4 text-center" style={{backgroundColor: '#FDC51A', borderRadius: '15px', color: 'black'}}>
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
                        </div>

                        <style jsx>{`
                            .glassmorphism-card-with-bg {
                                background:linear-gradient(330deg, rgb(84, 84, 100) 0%, rgb(15,18,41)100%);
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
                                background: #fff;
                                color: #192533;
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

                    {/*===== Other Services Section =====*/}
                    <div className="guard-types-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Security Solutions
                                        </small>
                                        <h2>OUR SECURITY SERVICES IN MELBOURNE</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Rapid Alarm Security</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Gatehouse Security Guard Services</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Concierge Security Services</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Retail Security Guards Melbourne</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Loss Prevention Security Services</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item text-center p-4 bg-white rounded shadow">
                                        <h5>Staff Escort Security</h5>
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