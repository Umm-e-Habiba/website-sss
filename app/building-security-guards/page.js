import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"

export default function BuildingSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BUILDING SITE SECURITY GUARDS">
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
                                                Comprehensive Building Protection
                                            </small>
                                            <h2>BUILDING SITE SECURITY GUARDS MELBOURNE</h2>
                                            <p>
                                                Metro Guards is a Melbourne-based security company that aims to provide high-quality building security guard services. Our security plans integrate 24/7 surveillance and monitoring with cutting-edge technology.
                                            </p>
                                            <p>
                                                Our building security guards are uniformed and demonstrate professionalism and strength. Their immaculate presence outside your commercial and residential buildings significantly deters crimes.
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
                                        <img src="/assets/img/blog/building-guard.jpg" alt="Building Site Security Guards" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Services Section =====*/}
                    <div className="services-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Tailored Security Solutions
                                        </small>
                                        <h2>OUR BUILDING SECURITY SERVICES</h2>
                                        <p>We provide specialized security solutions for all types of buildings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-header d-flex align-items-center mb-3">
                                            {/* <div className="service-icon mr-3">
                                                <i className="bi bi-building" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div> */}
                                            <h4 className="mb-0">Commercial Building Security</h4>
                                        </div>
                                        <p>Our commercial building security guards control access points, protect sensitive areas, and safeguard valuable assets with stringent security measures tailored for business environments.</p>
                                        <ul className="list-unstyled mt-3">
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> Access control for sensitive areas</li>
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> Protection of office assets and equipment</li>
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> 24/7 monitoring of business premises</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-header d-flex align-items-center mb-3">
                                            {/* <div className="service-icon mr-3">
                                                <i className="bi bi-house" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div> */}
                                            <h4 className="mb-0">Residential Building Security</h4>
                                        </div>
                                        <p>We provide robust security for residential buildings with efficient visitor management, patrol services, and emergency response protocols to ensure resident safety.</p>
                                        <ul className="list-unstyled mt-3">
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> Gate control and visitor management</li>
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> Parking lot and common area patrols</li>
                                            <li><i className="bi bi-check-circle-fill text-success mr-2"></i> Emergency situation handling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Features Section =====*/}
                    <div className="features-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Protection
                                        </small>
                                        <h2>KEY SECURITY FEATURES</h2>
                                        <p>Our building security services include multiple layers of protection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-site Patrols</h4>
                                        <p className="text-center">Regular patrols of building surroundings to deter criminal activity and ensure safety</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-person-bounding-box" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Static Guards</h4>
                                        <p className="text-center">Dedicated guards managing entry points and monitoring visitors 24/7</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-camera-video" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">CCTV Surveillance</h4>
                                        <p className="text-center">24/7 monitoring of visitors and identification of unusual activity</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-alarm" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Alarm Response</h4>
                                        <p className="text-center">Immediate response to fire, medical, or security alarms</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Visitor Management</h4>
                                        <p className="text-center">Professional handling of visitor logs, ID checks, and access control</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="feature-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="feature-icon mb-3 text-center">
                                            <i className="bi bi-fire" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Fire Safety</h4>
                                        <p className="text-center">Trained evacuation procedures and special needs assistance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            The Metro Guards Difference
                                        </small>
                                        <h2>WHY CHOOSE OUR BUILDING SECURITY?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-award" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Professional Training</h4>
                                        </div>
                                        <p>Our guards undergo rigorous training in emergency response, crowd control, first aid, and security protocols to ensure top-level protection.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-star" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Industry Reputation</h4>
                                        </div>
                                        <p>With a decade of service in Melbourne, we have a proven track record protecting residential, commercial, and industrial buildings.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-cpu" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Technology Integration</h4>
                                        </div>
                                        <p>We combine physical security with cutting-edge surveillance technology for comprehensive protection.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-gear" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Customized Solutions</h4>
                                        </div>
                                        <p>We design personalized security plans tailored to your specific building requirements and security needs.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-shield-lock" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Licensed & Accredited</h4>
                                        </div>
                                        <p>All our guards undergo extensive background checks and hold current licenses to operate in Melbourne, complying with all state security regulations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                    <div className="benefits-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Value Proposition
                                        </small>
                                        <h2>BENEFITS OF OUR BUILDING SECURITY</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-clock" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">24/7 Surveillance</h4>
                                        <p className="text-center">Round-the-clock monitoring to ensure continuous safety of your property</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-shield-slash" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Risk Mitigation</h4>
                                        <p className="text-center">Professional handling of emergencies to minimize potential losses</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-lightning" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Rapid Response</h4>
                                        <p className="text-center">Immediate action to security threats before they escalate</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-heart" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Peace of Mind</h4>
                                        <p className="text-center">Assurance that your property and people are protected by professionals</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-graph-up" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Crime Deterrence</h4>
                                        <p className="text-center">Visible security presence significantly reduces criminal activity</p>
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
                                        <h2 className="text-white">READY TO SECURE YOUR BUILDING WITH MELBOURNE'S BEST?</h2>
                                        <p className="text-white">
                                            With increasing crime rates in Melbourne, professional building security has become essential. Metro Guards provides comprehensive protection for your commercial or residential property with trained professionals and advanced technology.
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
                <Gallery4 />
            </Layout>
        </>
    )
}