"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function ServiceCoveragePage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact-us", { method: "POST", body: formData });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SERVICE COVERAGE">
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
                                                Comprehensive Protection
                                            </small>
                                            <h2>OUR SERVICE COVERAGE</h2>
                                            <p>
                                                We offer security solutions across Melbourne Metro Area and beyond. When you need Security Guards, Mobile Security Patrols, Static Guards, or Event Security, there's a good chance we can help.
                                            </p>
                                            <p>
                                                Below is an easy reference to see if we cover your area for regular mobile security service. For intermittent or one-off services like Party Security or VIP Protection, our professional security guards can travel to meet your needs beyond these areas.
                                            </p>
                                            <div className="btn-area mt-4">
                                                <a 
                                                    href="#coverage-map" 
                                                    className="btn text-white px-4 py-3 me-3"
                                                    style={{
                                                        backgroundColor: '#1e2247',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    VIEW COVERAGE MAP <span><i className="bi bi-arrow-right"></i></span>
                                                </a>
                                                <a 
                                                    href="/contacts" 
                                                    className="btn text-dark px-4 py-3"
                                                    style={{
                                                        backgroundColor: '#FDC24C',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    CONTACT US <span><i className="bi bi-telephone"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/case-study/s6.webp" alt="Security Service Coverage Map" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Coverage Map Section =====*/}
                    <div id="coverage-map" className="map-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Service Areas
                                        </small>
                                        <h2>OUR COVERAGE AREAS</h2>
                                        <p>We provide professional security services throughout these locations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="coverage-card bg-white p-4 mb-4 rounded shadow">
                                        <h3 className="mb-4 text-center" style={{color: '#243D31'}}>
                                            <i className="bi bi-geo-alt-fill me-2"></i>Melbourne Areas
                                        </h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Bonbeach
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Bulleen
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Clarinda
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Ashwood
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Yarra
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Wyndham
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Whittlesea
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Whitehorse
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Stonnington
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Port Phillip
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Moreland
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Moonee Valley
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Monash
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Melbourne
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Maroondah
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Maribyrnong
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Manningham
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Knox
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Kingston
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Hume
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Hobsons Bay
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Greater Dandenong
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Glen Eira
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Frankston
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Darebin
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Casey
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Brimbank
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Boroondara
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        City of Bayside
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="coverage-card bg-white p-4 mb-4 rounded shadow">
                                        <h3 className="mb-4 text-center" style={{color: '#243D31'}}>
                                            <i className="bi bi-geo-alt-fill me-2"></i>Sydney Areas
                                        </h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Sydney CBD
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Ultimo
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Chippendale
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Pyrmont
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Surry Hills
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Kings Cross
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Alexandria
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Redfern
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Waterloo
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Rosebery
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Botany
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Mascot
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Paddington
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Bondi Junction
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Bellevue Hill
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Waverley
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Woollahra
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Bondi
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Edgecliff
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Double Bay
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Rose Bay
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Vaucluse
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Randwick
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Kingsford
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Kensington
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Coogee
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        Northern Beaches
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                                                        North Shore
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p className="mb-0">
                                        <strong>Don't see your area listed?</strong> We likely still cover it! Contact us to confirm availability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Additional Areas Section =====*/}
                    <div className="additional-areas bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Extended Coverage
                                        </small>
                                        <h2>ADDITIONAL SERVICE AREAS</h2>
                                        <p>We also provide security services in these surrounding regions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="area-card bg-white p-4 h-100 rounded shadow">
                                        <h4 className="mb-3 text-center" style={{color: '#243D31'}}>
                                            <i className="bi bi-building me-2"></i>Regional Victoria
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                                                Geelong
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                                                Torquay
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                                                Lorne
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                                                Warragul
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                                                Mornington Peninsula
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="area-card bg-white p-4 h-100 rounded shadow">
                                        <h4 className="mb-3 text-center" style={{color: '#243D31'}}>
                                            <i className="bi bi-building me-2"></i>Western Sydney
                                        </h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                                                Parramatta
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                                                Blacktown
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                                                Penrith
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                                                Liverpool
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                                                Campbelltown
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="area-card bg-white p-4 h-100 rounded shadow">
                                        <h4 className="mb-3 text-center" style={{color: '#243D31'}}>
                                            <i className="bi bi-building me-2"></i>Special Events
                                        </h4>
                                        <p className="mb-3">
                                            For special events, we provide security services beyond our regular coverage areas, including:
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                                                Private parties
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                                                Corporate events
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                                                VIP protection
                                            </li>
                                            <li className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                                                Festivals
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                                                Concerts
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact Form Section =====*/}
                    <div id="contact-form" className="contact-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Confirm Your Area
                                        </small>
                                        <h2>CONTACT US</h2>
                                        <p>Check if we cover your location or request service in a new area</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="contact-form bg-white p-5 rounded shadow glassmorphism-card-with-bg">
                                        <form onSubmit={handleSubmit} noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="purpose" className="form-label text-dark">I want to:</label>
                                            <select className="form-select" id="purpose" name="purpose" required>
                                                <option value="">Select Purpose</option>
                                                <option value="consultation">Request consultation</option>
                                                <option value="obtain-code">Obtain code</option>
                                            </select>
                                            </div>

                                            {/* repeat: add name=... */}
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="service" className="form-label text-dark">Service Required:</label>
                                            <select className="form-select" id="service" name="service" required>
                                                <option value="">Select Service</option>
                                                        <option value="loss-prevention">Loss Prevention Office</option>
                                                        <option value="event-security">Event Security</option>
                                                        <option value="mobile-patrol">Mobile Patrol Security</option>
                                                        <option value="uniform-guards">Uniform Guards</option>
                                                        <option value="construction-site">Construction Site Security</option>
                                                        <option value="k9-response">K9 Response Unit</option>
                                                        <option value="crowd-controller">Crowd Controller</option>
                                                        <option value="concierge">Concierge Security</option>
                                                        <option value="alarm-response">Alarm Response Unit Security Officer</option>
                                                        <option value="other">Other Services</option>
                                            </select>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="name" className="form-label text-dark">Your Name:</label>
                                            <input type="text" className="form-control" id="name" name="name" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="phone" className="form-label text-dark">Phone:</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="form-label text-dark">Your Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="location" className="form-label text-dark">Location:</label>
                                            <input type="text" className="form-control" id="location" name="location" required />
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="message" className="form-label text-dark">Message / Details:</label>
                                            <textarea className="form-control" id="message" name="message" rows="4" required />
                                            </div>

                                            <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn px-4 py-3 text-white"
                                                style={{ backgroundColor:'#fdc51a', border:'none', borderRadius:'5px', fontWeight:600, textTransform:'uppercase' }}
                                            >
                                                {loading ? 'SENDING…' : 'SEND REQUEST'} <span><i className="bi bi-send" /></span>
                                            </button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Assurance Section =====*/}
                    <div className="assurance-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="heading2">
                                        <h2>NATIONWIDE SECURITY SOLUTIONS</h2>
                                        <p>Wherever you need protection, we can provide professional security services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-truck" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">Rapid Deployment</h4>
                                        <p>Our security personnel can be deployed quickly to any location within our coverage areas.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-shield-check" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">Licensed Professionals</h4>
                                        <p>All our security officers are fully licensed and trained to handle any security situation.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="assurance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="assurance-icon mb-3">
                                            <i className="bi bi-phone" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4 className="mb-3">24/7 Availability</h4>
                                        <p>Our team is available around the clock to respond to your security needs.</p>
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