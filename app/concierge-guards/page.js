import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Premium Concierge Security Services in Melbourne | Metro Guards',
  description: 'Professional concierge security services for businesses & residential properties in Melbourne. Combining security expertise with exceptional customer service.',
}

export default function ConciergeSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONCIERGE SECURITY SERVICES">
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
                                                Premium Security & Hospitality
                                            </small>
                                            <h2>CONCIERGE SECURITY SERVICES</h2>
                                            <p>
                                                At Metro Guards, we offer premium concierge security services designed to meet the specific needs of businesses and residential properties across Melbourne. Our professional concierge security officers serve as the first point of contact for visitors, creating a safe and welcoming environment.
                                            </p>
                                            <p>
                                                We understand the importance of maintaining a secure and professional atmosphere. Our team members possess impeccable presentation, exceptional customer service skills, and a keen understanding of security protocols.
                                            </p>
                                            <div className="btn-area mt-4">
                                                <a 
                                                    href="#" 
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
                                                    href="#" 
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
                                        <img src="/assets/img/about/south.webp" alt="Concierge Security Services" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                    <div className="service-section-three bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Beyond Traditional Security
                                        </small>
                                        <h2>KEY BENEFITS OF CONCIERGE SECURITY</h2>
                                        <p>Combining security expertise with exceptional customer service for complete property protection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/shield.png" alt="Enhanced Safety" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Enhanced Safety</h4>
                                        <p>Visible deterrence to unauthorized entry with monitoring of access points and regular patrols for complete property security.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/best-customer-experience.png" alt="Customer Experience" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Customer Experience</h4>
                                        <p>Creating a welcoming atmosphere that enhances visitor experience while maintaining strict security protocols.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/visitor.png" alt="Visitor Management" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Visitor Management</h4>
                                        <p>Expert handling of guest verification and authorization before granting access to your premises.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/technology.png" alt="Technology Integration" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Technology Integration</h4>
                                        <p>Utilizing CCTV monitoring, access control systems and alarm systems for comprehensive security coverage.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/emergency.png" alt="Emergency Response" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Emergency Response</h4>
                                        <p>Trained professionals ready to handle medical incidents, security threats and other emergencies efficiently.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-box text-center p-4 bg-white shadow-lg rounded">
                                        <div className="service-icon mb-3">
                                            <div className="icon-wrapper">
                                                <img src="/assets/img/icons/sketch.png" alt="Customizable Plans" />
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Customizable Plans</h4>
                                        <p>Tailored security solutions designed specifically for your property's unique requirements.</p>
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
                                            Comprehensive Protection
                                        </small>
                                        <h2>OUR CONCIERGE SECURITY SERVICES</h2>
                                        <p>Professional security solutions that combine safety with hospitality</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-person-check text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">On-Site Concierge Officers</h5>
                                            <p className="mb-0">Professional officers stationed at key access points to greet visitors, verify identities, provide directions, and ensure only authorized access.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-key text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Access Control Management</h5>
                                            <p className="mb-0">Strict access control using cards for employees and thorough verification of visitors before granting access to sensitive areas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-camera-video text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">CCTV Monitoring</h5>
                                            <p className="mb-0">Continuous surveillance through real-time video feeds to identify and respond to potential threats immediately.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-box-seam text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Visitor & Deliveries Management</h5>
                                            <p className="mb-0">Efficient screening of visitors and coordination of deliveries to maintain security without disrupting operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-building text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Lobby & Reception Security</h5>
                                            <p className="mb-0">Maintaining a secure yet welcoming environment at your property's main entry points.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            <i className="bi bi-shield-lock text-primary" style={{fontSize: '24px'}}></i>
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">VIP Protection Services</h5>
                                            <p className="mb-0">Discreet yet effective security for high-profile guests and executives visiting your premises.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="guard-types-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            The Metro Guards Difference
                                        </small>
                                        <h2>WHY CHOOSE METRO GUARDS</h2>
                                        <p>What sets our concierge security services apart from the competition</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Expertly Trained Personnel</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Our officers undergo rigorous training in both security protocols and customer service excellence.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Victoria Police licensed</li>
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Customer service certified</li>
                                                    <li><i className="bi bi-check-circle-fill text-primary mr-2"></i>Regular skills refreshment</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Customer Experience Focus</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>We prioritize creating positive interactions while maintaining security standards.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Professional demeanor</li>
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Cultural awareness</li>
                                                    <li><i className="bi bi-check-circle-fill text-success mr-2"></i>Conflict resolution skills</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Diverse Workforce</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>We embrace diversity to better serve Melbourne's multicultural community.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>Multilingual staff</li>
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>Inclusive hiring</li>
                                                    <li><i className="bi bi-check-circle-fill text-danger mr-2"></i>Culturally sensitive</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Advanced Technology</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>State-of-the-art security systems integrated with our physical presence.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>Smart access control</li>
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>High-definition CCTV</li>
                                                    <li><i className="bi bi-check-circle-fill text-warning mr-2"></i>Real-time monitoring</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Custom Solutions</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Tailored security plans designed for your specific property needs.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Needs assessment</li>
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Flexible staffing</li>
                                                    <li><i className="bi bi-check-circle-fill text-info mr-2"></i>Scalable services</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="guard-type-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0">Industries We Serve</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Experience across all sectors requiring concierge security services.</p>
                                                <ul className="list-unstyled">
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Corporate offices</li>
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Residential buildings</li>
                                                    <li><i className="bi bi-check-circle-fill text-secondary mr-2"></i>Hotels & retail</li>
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
                                                Simple & Effective
                                            </small>
                                            <h2>OUR HIRING PROCESS</h2>
                                            <p>
                                                Getting started with Metro Guards concierge security services is straightforward and tailored to your specific needs.
                                            </p>
                                            <div className="process-steps mt-4">
                                                <div className="process-step d-flex align-items-start mb-4">
                                                    <div className="step-number mr-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', backgroundColor: '#243D31', color: 'white', borderRadius: '50%', flexShrink: 0}}>
                                                        1
                                                    </div>
                                                    <div className="step-content">
                                                        <h5 className="mb-1">Initial Consultation</h5>
                                                        <p className="mb-0">We discuss your security needs, property specifics, and expectations for concierge services.</p>
                                                    </div>
                                                </div>
                                                <div className="process-step d-flex align-items-start mb-4">
                                                    <div className="step-number mr-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', backgroundColor: '#243D31', color: 'white', borderRadius: '50%', flexShrink: 0}}>
                                                        2
                                                    </div>
                                                    <div className="step-content">
                                                        <h5 className="mb-1">Security Assessment</h5>
                                                        <p className="mb-0">Our team conducts a thorough evaluation of your property to identify security requirements.</p>
                                                    </div>
                                                </div>
                                                <div className="process-step d-flex align-items-start mb-4">
                                                    <div className="step-number mr-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', backgroundColor: '#243D31', color: 'white', borderRadius: '50%', flexShrink: 0}}>
                                                        3
                                                    </div>
                                                    <div className="step-content">
                                                        <h5 className="mb-1">Customized Plan</h5>
                                                        <p className="mb-0">We develop a tailored concierge security solution matching your specific needs.</p>
                                                    </div>
                                                </div>
                                                <div className="process-step d-flex align-items-start">
                                                    <div className="step-number mr-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', backgroundColor: '#243D31', color: 'white', borderRadius: '50%', flexShrink: 0}}>
                                                        4
                                                    </div>
                                                    <div className="step-content">
                                                        <h5 className="mb-1">Implementation</h5>
                                                        <p className="mb-0">Our professionally trained concierge security officers are deployed to your property.</p>
                                                    </div>
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
                                                        500+
                                                    </div>
                                                    <div className="stat-label">Properties Secured</div>
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
                                                        100%
                                                    </div>
                                                    <div className="stat-label">Licensed Officers</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-info" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        1-2
                                                    </div>
                                                    <div className="stat-label">Days Deployment</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Common Questions
                                        </small>
                                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                                        <p>Answers to common questions about our concierge security services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordion" id="faqAccordion">
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span>What is concierge security?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    Concierge security refers to a service where security officers not only provide physical security but also assist visitors, manage access control, and ensure the premises are safe and secure while delivering excellent customer service.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <span>Why do I need concierge security?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    Concierge security helps deter criminal activity, manage visitor access, provide a sense of safety for employees/residents/guests, and enhance the professional image of your property while delivering excellent customer service.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <span>What qualifications do your officers have?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    Our concierge security officers are licensed by Victoria Police and undergo extensive training in customer service, conflict resolution, emergency response, first aid, and specific property security protocols.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion" id="faqAccordion2">
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingFour">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                        <span>How much does concierge security cost?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#faqAccordion2">
                                                <div className="card-body">
                                                    Costs vary depending on property size, security needs, hours required, and specific services. We provide customized quotes after assessing your property's requirements to offer the best value.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingFive">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        <span>How quickly can you deploy officers?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faqAccordion2">
                                                <div className="card-body">
                                                    We can typically deploy concierge security officers within 1-2 business days for standard requests, and offer rapid deployment options for urgent requirements.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-header bg-white" id="headingSix">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        <span>Can you work with our existing security systems?</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#faqAccordion2">
                                                <div className="card-body">
                                                    Absolutely. Our officers are trained to work with all major security systems and can integrate seamlessly with your existing CCTV, access control, and alarm systems.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact CTA Section =====*/}
                    <div className="cta-section bg-28 section-padding">
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
                                                    <h3 className="text-white mb-3">Elevate Your Property's Security & Hospitality</h3>
                                                    <p className="text-white mb-0">
                                                        Contact Metro Guards today to discuss how our concierge security services can enhance safety and customer experience at your property.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="cta-buttons">
                                                    <a href="#" className="btn btn-light btn-lg mb-2 d-block">
                                                        <i className="bi bi-file-earmark-text mr-2"></i>GET QUOTATION
                                                    </a>
                                                    <a href="tel:1300731173" className="btn btn-outline-light btn-lg d-block">
                                                        <i className="bi bi-telephone mr-2"></i>1300 73 11 73
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className="contact-info-row d-flex justify-content-around text-center">
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-building" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">All Property Types</h6>
                                                        <small className="text-white-50">Commercial & residential</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-shield-check" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Fully Licensed</h6>
                                                        <small className="text-white-50">Victoria Police approved</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-people" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Professional Staff</h6>
                                                        <small className="text-white-50">Trained in hospitality & security</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-geo-alt" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Melbourne Wide</h6>
                                                        <small className="text-white-50">Servicing all areas</small>
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