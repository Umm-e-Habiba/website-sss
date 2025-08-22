import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Professional Event Security Guards in Melbourne | Metro Guards',
  description: 'Hire our professional event security guards in Melbourne for concerts, festivals, corporate events and private parties. Comprehensive security solutions tailored for your event.',
}

export default function EventSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EVENT SECURITY SERVICES">
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
                                                Your Trusted Event Protection Partner
                                            </small>
                                            <h2>PROFESSIONAL EVENT SECURITY GUARDS</h2>
                                            <p>
                                                Hire our professional event security guards in Melbourne to ensure your occasions and parties are secure and run smoothly. Our expert guards are always on their toes to ensure efficient crowd control and protection at your events by addressing all potential threats.
                                            </p>
                                            <p>
                                                They are extensively trained to design comprehensive security plans and follow all security protocols. They are expert at scanning the vehicles/bags, identifying and addressing any risks, emergency responses, and adhering to the strict safety needs.
                                            </p>
                                            <div className="btn-area mt-4">
                                                <a 
                                                    href="/get-quotation" 
                                                    className="btn text-white px-4 py-3 me-3"
                                                    style={{
                                                        backgroundColor: '#243D31',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        textDecoration: 'none',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    GET QUOTATION <span><i className="bi bi-arrow-right"></i></span>
                                                </a>
                                                <a 
                                                    href="/" 
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
                                                    CALL US NOW <span><i className="bi bi-telephone"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/blog/event security.jpg" alt="Event Security Services" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  {/*===== Why Hire Section =====*/}
<div className="service-section-three bg-29 section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="heading2">
                    <small className="heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />
                        Secure Your Event Success
                    </small>
                    <h2>WHY HIRE EVENT SECURITY GUARDS IN MELBOURNE</h2>
                    <p>Successful event hosting requires the safety and protection of all attendees and the venue.</p>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                    <div className="service-icon mb-3 d-flex justify-content-center align-items-center mx-auto" 
                         style={{
                             width: '80px', 
                             height: '80px', 
                             borderRadius: '50%', 
                             backgroundColor: '#f8f9fa',
                             border: '2px solid #e9ecef'
                         }}>
                        <img src="/assets/img/icons/security.png" 
                             alt="VIP Protection" 
                             style={{width: '40px', height: '40px', objectFit: 'contain'}} />
                    </div>
                    <h4 className="mb-3">VIP Protection</h4>
                    <p>Dedicated security personnel to safeguard your special guests, celebrities, and high-profile attendees throughout your event.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                    <div className="service-icon mb-3 d-flex justify-content-center align-items-center mx-auto" 
                         style={{
                             width: '80px', 
                             height: '80px', 
                             borderRadius: '50%', 
                             backgroundColor: '#f8f9fa',
                             border: '2px solid #e9ecef'
                         }}>
                        <img src="/assets/img/icons/crowd.png" 
                             alt="Crowd Management" 
                             style={{width: '40px', height: '40px', objectFit: 'contain'}} />
                    </div>
                    <h4 className="mb-3">Crowd Management</h4>
                    <p>Professional handling of large gatherings to prevent overcrowding, maintain order, and ensure smooth flow of attendees.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                    <div className="service-icon mb-3 d-flex justify-content-center align-items-center mx-auto" 
                         style={{
                             width: '80px', 
                             height: '80px', 
                             borderRadius: '50%', 
                             backgroundColor: '#f8f9fa',
                             border: '2px solid #e9ecef'
                         }}>
                        <img src="/assets/img/icons/cctv-camera.png" 
                             alt="Security Screening" 
                             style={{width: '40px', height: '40px', objectFit: 'contain'}} />
                    </div>
                    <h4 className="mb-3">Security Screening</h4>
                    <p>Thorough bag checks and metal detection to prevent weapons or prohibited items from entering your event venue.</p>
                </div>
            </div>
        </div>
    </div>
</div>
                    {/*===== Our Services Section =====*/}
                    <div className="reasons-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Event Security
                                        </small>
                                        <h2>OUR EVENT SECURITY SERVICES</h2>
                                        <p>We offer a full spectrum of event security guard services in Melbourne including:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-shield-check text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Access Control</h5>
                                            <p className="mb-0">Checking IDs of all attendees to prevent unauthorized entries and ensure only ticketed guests gain access.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-people text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Crowd Management</h5>
                                            <p className="mb-0">Professional handling of large crowds to maintain order and prevent dangerous situations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-heart-pulse text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">First Aid & Emergency Response</h5>
                                            <p className="mb-0">Trained personnel ready to provide first aid and coordinate emergency medical responses.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-car-front text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Traffic & Parking Control</h5>
                                            <p className="mb-0">Managing vehicle flow and parking areas to prevent congestion and ensure smooth arrivals/departures.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-exclamation-triangle text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Conflict Resolution</h5>
                                            <p className="mb-0">De-escalating tense situations and handling disputes professionally to maintain a safe environment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-door-open text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Emergency Evacuation</h5>
                                            <p className="mb-0">Organized evacuation procedures in case of fire, threat, or other emergencies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Event Types Section =====*/}
                    <div className="guard-types-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Specialized Event Security
                                        </small>
                                        <h2>OUR EVENT SECURITY SOLUTIONS</h2>
                                        <p>Comprehensive security services tailored for every type of event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Concert Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Specialized security for music events of all sizes, from intimate performances to large festivals with thousands of attendees.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Artist protection</li>
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Stage security</li>
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Mosh pit control</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Festival Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Comprehensive security solutions for multi-day festivals with multiple stages, vendors, and large crowds.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Perimeter control</li>
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Vendor security</li>
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Campsite patrols</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Corporate Event Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Discreet yet effective security for business conferences, product launches, and executive gatherings.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>VIP protection</li>
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>Data security</li>
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>Media management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Sporting Event Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Specialized security for stadiums and sporting venues to manage passionate fans and large crowds.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>Fan zone management</li>
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>Player protection</li>
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>Alcohol monitoring</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Private Party Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Discreet security for weddings, birthdays, and exclusive gatherings where privacy is paramount.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Guest list verification</li>
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Property protection</li>
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Alcohol management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#ffc718'}}>
                                                <h5 className="mb-0">Community Event Security</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Friendly yet professional security for public gatherings, markets, and family-friendly events.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Public safety</li>
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Lost child assistance</li>
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Vendor security</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Hiring Process Section =====*/}
                    <div className="stats-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Professional Security Personnel
                                            </small>
                                            <h2>OUR HIRING PROCESS</h2>
                                            <p>
                                                We take great care in selecting and training our event security personnel to ensure you receive only the most professional and capable guards.
                                            </p>
                                            <div className="advantages-list mt-4">
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Rigorous background checks and police clearance</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Certified in First Aid and CPR</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Extensive event security training program</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Ongoing professional development</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Regular performance evaluations</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="stats-grid ml50">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-primary" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        100+
                                                    </div>
                                                    <div className="stat-label">Events Secured</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-success" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        24/7
                                                    </div>
                                                    <div className="stat-label">Availability</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-warning" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        50+
                                                    </div>
                                                    <div className="stat-label">Trained Guards</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-info" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        0
                                                    </div>
                                                    <div className="stat-label">Major Incidents</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact CTA Section =====*/}
                    <div className="cta-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-banner bg-primary text-white p-5 rounded text-center position-relative overflow-hidden">
                                        <div className="cta-bg-shape position-absolute" style={{top: '0', right: '0', opacity: '0.1'}}>
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 text-left">
                                                <div className="cta-content">
                                                    <h3 className="text-white mb-3">Ready to Secure Your Event?</h3>
                                                    <p className="text-white mb-0">
                                                        Contact us today to discuss your event security needs. Our team will work with you to develop a customized security plan that ensures your event runs smoothly and safely.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="cta-buttons">
                                                    <a href="#" className="btn btn-light btn-lg mb-2 d-block">
                                                        <i className="bi bi-file-earmark-text mr-2"></i>GET QUOTATION
                                                    </a>
                                                    <a href="#" className="btn btn-outline-light btn-lg d-block">
                                                        <i className="bi bi-telephone mr-2"></i>CALL US NOW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className="contact-info-row d-flex justify-content-around text-center">
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-calendar-event" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Any Event Size</h6>
                                                        <small className="text-white-50">From 10 to 10,000+ guests</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-shield-check" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Fully Licensed</h6>
                                                        <small className="text-white-50">All guards certified</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-lightning-charge" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Rapid Deployment</h6>
                                                        <small className="text-white-50">Last-minute requests</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-geo-alt" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Melbourne Wide</h6>
                                                        <small className="text-white-50">All venues covered</small>
                                                    </div>
                                                </div>
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