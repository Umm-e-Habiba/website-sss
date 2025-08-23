import Layout from "@/components/layout/Layout"

export default function AlarmResponsePage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ALARM RESPONSE SERVICES">
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
                                                Rapid Security Response
                                            </small>
                                            <h2>ALARM RESPONSE SERVICES IN MELBOURNE</h2>
                                            <p>
                                                At Metro Guards, we understand that securing your property is a top priority. Our Alarm Response Services are designed to provide fast, effective responses to any security breaches, offering peace of mind for both residential and commercial properties across Melbourne.
                                            </p>
                                            <p>
                                                With a skilled team of security professionals and state-of-the-art technology, we ensure your property is continuously monitored and protected.
                                            </p>
                                            <div className="btn-area mt-4">
                                                <a 
                                                    href="/get-quotation" 
                                                    className="btn text-white px-4 py-3 me-3"
                                                    style={{
                                                        backgroundColor: '#1E2247',
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
                                                    href="tel:1300731173" 
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
                                        <img src="/assets/img/blog/emergency.webp" alt="Alarm Response Services" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Services Section =====*/}
                    <div className="services-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Protection
                                        </small>
                                        <h2>OUR ALARM RESPONSE SERVICES</h2>
                                        <p>We specialize in alarm response and provide an array of services tailored to meet your security needs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-alarm" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">24/7 Alarm Monitoring</h4>
                                        <p className="text-center">Constant surveillance with immediate alert assessment when alarms are triggered</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-Site Security Response</h4>
                                        <p className="text-center">Immediate dispatch of trained officers to assess and neutralize threats</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-exclamation-triangle" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Emergency Alarm Response</h4>
                                        <p className="text-center">Rapid response to break-ins, fires, and medical emergencies with trained personnel</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-filter-circle" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">False Alarm Management</h4>
                                        <p className="text-center">Assessment of alarm activations with thorough checks even for false alarms</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-car-front" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Mobile Patrols Integration</h4>
                                        <p className="text-center">Enhanced response with mobile patrol units stationed across Melbourne</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-key" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Key Holding Services</h4>
                                        <p className="text-center">Secure key access for faster after-hours emergency responses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== How It Works Section =====*/}
                    <div className="process-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Response Protocol
                                        </small>
                                        <h2>HOW ALARM RESPONSE WORKS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="process-step text-center p-4 bg-white rounded shadow h-100">
                                        <div className="step-number mb-3">
                                            <div className="number-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto" style={{width: '60px', height: '60px', borderRadius: '50%', fontSize: '24px', fontWeight: 'bold'}}>
                                                1
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Alarm Activation</h4>
                                        <p>Our monitoring center receives the alert as soon as an alarm is triggered</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="process-step text-center p-4 bg-white rounded shadow h-100">
                                        <div className="step-number mb-3">
                                            <div className="number-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto" style={{width: '60px', height: '60px', borderRadius: '50%', fontSize: '24px', fontWeight: 'bold'}}>
                                                2
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Assessment</h4>
                                        <p>Our team quickly assesses the situation to determine the appropriate response</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="process-step text-center p-4 bg-white rounded shadow h-100">
                                        <div className="step-number mb-3">
                                            <div className="number-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto" style={{width: '60px', height: '60px', borderRadius: '50%', fontSize: '24px', fontWeight: 'bold'}}>
                                                3
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Deployment</h4>
                                        <p>Trained security officers are dispatched immediately to your location</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="process-step text-center p-4 bg-white rounded shadow h-100">
                                        <div className="step-number mb-3">
                                            <div className="number-circle bg-info text-white d-flex align-items-center justify-content-center mx-auto" style={{width: '60px', height: '60px', borderRadius: '50%', fontSize: '24px', fontWeight: 'bold'}}>
                                                4
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Follow-Up</h4>
                                        <p>Comprehensive report detailing actions taken and next steps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="benefits-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            The Metro Guards Advantage
                                        </small>
                                        <h2>WHY CHOOSE OUR ALARM RESPONSE SERVICES?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-lightning" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Rapid Response Time</h4>
                                        <p className="text-center">On-site within minutes to address threats and minimize damage</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Experienced Personnel</h4>
                                        <p className="text-center">Extensively trained team handles all situations calmly and efficiently</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-cpu" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Advanced Technology</h4>
                                        <p className="text-center">Cutting-edge monitoring systems with real-time updates</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-cash-coin" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Cost-Effective</h4>
                                        <p className="text-center">Affordable alternative to full-time security guards</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-gear" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Customizable Solutions</h4>
                                        <p className="text-center">Tailored plans for residential or commercial properties</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-geo-alt" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Local Expertise</h4>
                                        <p className="text-center">Melbourne-based with knowledge of local regulations and challenges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Specialized Services Section =====*/}
                    <div className="specialized-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Protection
                                        </small>
                                        <h2>SPECIALIZED ALARM RESPONSE SERVICES</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="special-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="special-header d-flex align-items-center mb-3">
                                            <div className="special-icon mr-3">
                                                <i className="bi bi-fire" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                            </div>
                                            <h4 className="mb-0">Fire Alarm Response</h4>
                                        </div>
                                        <p>We respond promptly to fire alarm activations, working in conjunction with emergency services to ensure that your property and its occupants are safe. Our team is trained in fire safety procedures and can assist with evacuations if necessary.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="special-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="special-header d-flex align-items-center mb-3">
                                            <div className="special-icon mr-3">
                                                <i className="bi bi-building" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                            </div>
                                            <h4 className="mb-0">Commercial Alarm Response</h4>
                                        </div>
                                        <p>Our services for commercial properties include comprehensive alarm monitoring and rapid response to protect your business assets. We understand the unique security needs of commercial facilities and provide tailored solutions accordingly.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="special-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="special-header d-flex align-items-center mb-3">
                                            <div className="special-icon mr-3">
                                                <i className="bi bi-house" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                            </div>
                                            <h4 className="mb-0">Residential Alarm Response</h4>
                                        </div>
                                        <p>Protecting your home and family is our priority. Our residential alarm response services provide peace of mind with rapid response to any security breaches at your home, day or night.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="special-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="special-header d-flex align-items-center mb-3">
                                            <div className="special-icon mr-3">
                                                <i className="bi bi-file-text" style={{fontSize: '2rem', color: '#1E2247'}}></i>
                                            </div>
                                            <h4 className="mb-0">Comprehensive Reporting</h4>
                                        </div>
                                        <p>After every alarm response, we provide a detailed incident report including time of activation, officer arrival time, actions taken, and security improvement recommendations for your property.</p>
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
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What is an alarm response service?</h5>
                                        <p>Alarm response services involve monitoring your security system and dispatching trained security personnel to your location whenever an alarm is triggered.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What does a security alarm response do?</h5>
                                        <p>Security alarm response ensures a rapid and effective response to alarm activations, addressing any security breaches and minimizing damage or loss.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What are the benefits of alarm response?</h5>
                                        <p>The benefits include quick action to prevent loss or damage, cost-effective protection, and peace of mind knowing your property is always under professional surveillance.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What areas do you cover for alarm response services?</h5>
                                        <p>We provide alarm response services across all suburbs of Melbourne, ensuring reliable security for both residential and commercial properties.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Final CTA Section =====*/}
                    <div className="cta-section bg-dark text-center section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading2">
                                        <h2 className="text-white">READY TO PROTECT YOUR PROPERTY WITH RELIABLE ALARM RESPONSE?</h2>
                                        <p className="text-white">
                                            Don't leave the safety of your property to chance. Trust Metro Guards for efficient and reliable Alarm Response Services in Melbourne. With rapid response times, experienced security personnel, and advanced monitoring technology, Metro Guards is your trusted partner in ensuring the safety and security of your property.
                                        </p>
                                        <div className="btn-area mt-4">
                                            <a 
                                                href="/get-quotation" 
                                                className="btn text-white px-4 py-3 me-3"
                                                style={{
                                                    backgroundColor: '#1E2247',
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
                                                href="tel:1300731173" 
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
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}