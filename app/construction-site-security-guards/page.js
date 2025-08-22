import Layout from "@/components/layout/Layout"

export default function ConstructionSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONSTRUCTION SITE SECURITY SERVICES">
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
                                                Protecting Your Construction Assets
                                            </small>
                                            <h2>CONSTRUCTION SITE SECURITY SERVICES IN MELBOURNE</h2>
                                            <p>
                                                At Metro Guards, we understand the complexities and risks associated with the construction industry. With the Australian construction sector generating around $360 billion annually, protecting your assets, workers, and property from theft, vandalism, and unauthorized access is crucial.
                                            </p>
                                            <p>
                                                Our construction site security services are specifically designed to mitigate these risks and provide a secure environment for your projects, ensuring safety and compliance throughout the construction process.
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
                                        <img src="/assets/img/blog/construction-guard.webp" alt="Construction Site Security" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Solutions Section =====*/}
                    <div className="solutions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Protection
                                        </small>
                                        <h2>OUR CONSTRUCTION SECURITY SOLUTIONS</h2>
                                        <p>We provide customized security solutions that address the unique needs of your construction site</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Security Guards</h4>
                                        <p className="text-center">Trained professionals providing round-the-clock protection and access control</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-car-front" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Mobile Patrols</h4>
                                        <p className="text-center">Random checks and inspections to deter criminal activity</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-camera-video" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">CCTV Surveillance</h4>
                                        <p className="text-center">24/7 monitoring with recorded footage for evidence</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-door-closed" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Access Control</h4>
                                        <p className="text-center">Restrict site entry to authorized personnel only</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-person-standing" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Static Security</h4>
                                        <p className="text-center">Continuous monitoring at fixed locations during off-hours</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-traffic-cone" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Traffic Management</h4>
                                        <p className="text-center">Streamlined entry and exit procedures for vehicles</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="solution-icon mb-3 text-center">
                                            <i className="bi bi-alarm" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Alarm Response</h4>
                                        <p className="text-center">Immediate reaction to security breaches or emergencies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Risks Section =====*/}
                    <div className="risks-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Industry Challenges
                                        </small>
                                        <h2>CONSTRUCTION SITE RISKS & CHALLENGES</h2>
                                        <p>Construction sites in Australia face significant risks, with theft and vandalism costing the industry over $1 billion annually</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="risk-icon mb-3 text-center">
                                            <i className="bi bi-box-seam" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Theft</h4>
                                        <p className="text-center">Expensive machinery and tools are common targets, especially after hours</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="risk-icon mb-3 text-center">
                                            <i className="bi bi-paint-bucket" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Vandalism</h4>
                                        <p className="text-center">From graffiti to severe damage causing project delays</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="risk-icon mb-3 text-center">
                                            <i className="bi bi-person-raised-hand" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Trespassing</h4>
                                        <p className="text-center">Unauthorized access leading to accidents and liability issues</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="risk-icon mb-3 text-center">
                                            <i className="bi bi-exclamation-triangle" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Assault</h4>
                                        <p className="text-center">Criminal activity targeting valuable materials and workers</p>
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
                                            The Metro Guards Advantage
                                        </small>
                                        <h2>WHY CHOOSE OUR CONSTRUCTION SECURITY?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-icon mb-3 text-center">
                                            <i className="bi bi-award" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">10+ Years Experience</h4>
                                        <p className="text-center">Proven track record in construction site protection</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-icon mb-3 text-center">
                                            <i className="bi bi-gear" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Tailored Solutions</h4>
                                        <p className="text-center">Custom security plans for your specific site requirements</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Comprehensive Coverage</h4>
                                        <p className="text-center">Multiple security layers for complete protection</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-icon mb-3 text-center">
                                            <i className="bi bi-clock" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">24/7 Protection</h4>
                                        <p className="text-center">Continuous monitoring with rapid response teams</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-icon mb-3 text-center">
                                            <i className="bi bi-cash-stack" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Cost-Effective</h4>
                                        <p className="text-center">Prevent losses and delays that impact your budget</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Importance Section =====*/}
                    <div className="importance-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="importance-image mr50">
                                        <img src="/assets/img/blog/construct.jpg" alt="Construction Security Importance" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="importance-content ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Value of Professional Security
                                            </small>
                                            <h2>WHY CONSTRUCTION SITE SECURITY MATTERS</h2>
                                            <p>
                                                Investing in construction site security services offers significant benefits to contractors and project managers. Proactive security measures not only reduce the likelihood of theft, vandalism, and trespassing but also provide peace of mind, allowing your team to focus on completing the project on time.
                                            </p>
                                            <div className="importance-features mt-4">
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Prevent costly project delays from theft or damage</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Safeguard valuable equipment and materials</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Ensure worker safety and reduce liability risks</span>
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
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What are the main risks on construction sites?</h5>
                                        <p>Construction sites are vulnerable to theft, vandalism, trespassing, and accidents. Ensuring proper security is vital to protecting valuable equipment and maintaining safety.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">Why do I need security guards on my construction site?</h5>
                                        <p>Security guards provide visible deterrence, manage access control, conduct regular patrols, and protect valuable assets, ensuring your site is safe from criminal activity.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">How do you ensure the safety of construction sites?</h5>
                                        <p>We provide comprehensive security solutions, including 24/7 surveillance, security guards, mobile patrols, and access control systems, to ensure the safety and security of your site.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">Can you customize the security plan for my site?</h5>
                                        <p>Yes, we tailor our construction site security solutions to meet the specific needs of your site, ensuring you receive the most effective protection for your assets.</p>
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
                                        <h2 className="text-white">READY TO PROTECT YOUR CONSTRUCTION SITE?</h2>
                                        <p className="text-white">
                                            Metro Guards is your trusted partner in construction security services. We are committed to providing reliable, professional security that protects your assets, employees, and property, ensuring your construction project stays on track.
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