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
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
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
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Get Started
                                        </small>
                                        <h2>GET A FREE QUOTE</h2>
                                        <p>K9 Security Services Melbourne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                <form
                                className="quote-form bg-white p-5 rounded shadow"
                                onSubmit={handleSubmit}
                                noValidate
                                >
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="phone">Your Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="date">Service Date</label>
                                    <input type="date" className="form-control" id="date" name="date" required />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="location">Location</label>
                                    <select className="form-control" id="location" name="location" required>
                                    <option value="">Select a location</option>
                                    <option value="Sydney">Sydney</option>
                                    <option value="Melbourne">Melbourne</option>
                                    <option value="Brisbane">Brisbane</option>
                                    <option value="Perth">Perth</option>
                                    <option value="Adelaide">Adelaide</option>
                                    </select>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="attendees">Number of Attendees</label>
                                    <input type="number" className="form-control" id="attendees" name="attendees" placeholder="Estimated number of attendees" min="0" required />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="service">Type of Service Required:</label>
                                    <select className="form-control" id="service" name="service" required>
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

                                <button type="submit" disabled={loading} className="btn btn-primary btn-block py-3" style={{ backgroundColor: '#243D31', border: 'none' }}>
                                    {loading ? "Sending..." : "SEND"}
                                </button>
                                </form>

                                </div>
                            </div>
                        </div>
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