import Layout from "@/components/layout/Layout"

export default function UnarmedSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="UNARMED SECURITY GUARD SERVICES">
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
                                                Professional Protection
                                            </small>
                                            <h2>UNARMED SECURITY GUARD SERVICES IN MELBOURNE</h2>
                                            <p>
                                                At Metro Guards, we understand the importance of providing effective security solutions that maintain a safe and secure environment without the need for armed personnel. Our unarmed security guards are highly trained professionals who focus on preventing crime and ensuring the safety of your property, people, and assets.
                                            </p>
                                            <p>
                                                Whether it's a retail store, office complex, or residential building, our unarmed security personnel are well-equipped to handle a wide range of duties to ensure your peace of mind.
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
                                        <img src="/assets/img/bg/unarmed-security.webp" alt="Unarmed Security Guards" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Duties Section =====*/}
                    <div className="duties-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Professional Responsibilities
                                        </small>
                                        <h2>DUTIES OF UNARMED SECURITY GUARDS</h2>
                                        <p>The primary role of unarmed security guards is to prevent crime and maintain a safe environment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-shield" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Crime Prevention</h4>
                                        <p className="text-center">Visible presence deters criminal activity before it occurs</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-door-closed" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Access Control</h4>
                                        <p className="text-center">Verify identification and manage building access</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-camera-video" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Surveillance</h4>
                                        <p className="text-center">Monitor cameras and patrol premises for unusual activity</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Crowd Control</h4>
                                        <p className="text-center">Maintain order during events and gatherings</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-journal-text" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Documentation</h4>
                                        <p className="text-center">Maintain visitor logs and incident reports</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="duty-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="duty-icon mb-3 text-center">
                                            <i className="bi bi-telephone" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Emergency Response</h4>
                                        <p className="text-center">Contact authorities when needed and manage situations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Threat Response Section =====*/}
                    <div className="threat-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="threat-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Professional Handling
                                            </small>
                                            <h2>RESPONDING TO THREATS</h2>
                                            <p>
                                                While unarmed security officers are not equipped to handle violent confrontations directly, they are trained to manage escalated situations effectively. If a criminal act or violence occurs, unarmed security personnel are trained to temporarily restrain individuals and immediately contact local authorities.
                                            </p>
                                            <p>
                                                In cases where criminals are armed or pose a serious threat, our guards will swiftly call for police assistance, knowing that delaying intervention can lead to greater risks. Their training in discretion and good decision-making ensures that the situation is handled properly until law enforcement arrives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="threat-image ml50">
                                        <img src="/assets/img/bg/threat-response.webp" alt="Threat Response" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Industries Section =====*/}
                    <div className="industries-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Versatile Protection
                                        </small>
                                        <h2>WHERE UNARMED SECURITY GUARDS ARE EMPLOYED</h2>
                                        <p>Our unarmed security personnel provide protection across diverse industries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-shop" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Retail Stores</h5>
                                        <p className="text-center">Preventing shoplifting and ensuring customer safety</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-building" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Office Complexes</h5>
                                        <p className="text-center">Controlling access and maintaining order</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-book" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Schools & Universities</h5>
                                        <p className="text-center">Safeguarding students, staff, and campus property</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-palette" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Art Galleries</h5>
                                        <p className="text-center">Monitoring valuable artworks and visitors</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-house" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Residential Buildings</h5>
                                        <p className="text-center">Providing security to residents and managing access</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-calendar-event" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Convention Centers</h5>
                                        <p className="text-center">Managing crowds and ensuring attendee safety</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-bank" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Government Buildings</h5>
                                        <p className="text-center">Maintaining security of public institutions</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="industry-icon mb-3 text-center">
                                            <i className="bi bi-building" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                        </div>
                                        <h5 className="text-center mb-3">Construction Sites</h5>
                                        <p className="text-center">Protecting equipment and materials from theft</p>
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
                                            The Metro Guards Advantage
                                        </small>
                                        <h2>BENEFITS OF UNARMED SECURITY GUARDS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-award" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Professionalism</h4>
                                        <p className="text-center">Extensively trained in conflict resolution, emergency response, and customer service</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-collection" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Versatility</h4>
                                        <p className="text-center">Suitable for a wide range of environments from retail to residential</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-cash-stack" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Affordable</h4>
                                        <p className="text-center">Cost-effective alternative to armed guards with similar protection</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-eye" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Visible Deterrent</h4>
                                        <p className="text-center">Presence alone reduces likelihood of theft and vandalism</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="benefit-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="benefit-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Approachable Presence</h4>
                                        <p className="text-center">Creates a welcoming yet secure environment for customers and staff</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Training Section =====*/}
                    <div className="training-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="training-image mr50">
                                        <img src="/assets/img/bg/security-training.webp" alt="Security Training" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="training-content ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Professional Standards
                                            </small>
                                            <h2>TRAINING & CERTIFICATION</h2>
                                            <p>
                                                To become a qualified unarmed security guard, personnel must complete the Certificate II in Security Operations, which covers the essential skills needed for the role. Additionally, guards are trained in emergency response, conflict resolution, and surveillance monitoring to ensure they are equipped to handle a wide range of security situations effectively.
                                            </p>
                                            <div className="training-features mt-4">
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Certificate II in Security Operations</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Conflict resolution training</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success"></i>
                                                    </div>
                                                    <span>Ongoing professional development</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Commitment
                                        </small>
                                        <h2>WHY CHOOSE METRO GUARDS?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-person-check" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Experienced & Trained Guards</h4>
                                        </div>
                                        <p>Our unarmed security personnel are highly skilled, trained, and licensed to ensure that your property is in safe hands.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-gear" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Flexible Security Solutions</h4>
                                        </div>
                                        <p>We offer adaptable security solutions that can be customized to meet the unique needs of your property.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-cash-coin" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Affordable & Effective</h4>
                                        </div>
                                        <p>Our unarmed security services are a cost-effective way to provide robust protection without the higher costs of armed guards.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="choose-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="choose-header d-flex align-items-center mb-3">
                                            <div className="choose-icon mr-3">
                                                <i className="bi bi-graph-up" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Proven Track Record</h4>
                                        </div>
                                        <p>We have a proven track record of providing reliable and effective security services to clients across Melbourne.</p>
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
                                        <h5 className="mb-3">What is an unarmed security guard?</h5>
                                        <p>An unarmed security guard is a licensed professional trained to protect people and property without carrying firearms. They focus on deterring crime, monitoring surveillance systems, and maintaining order.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">What are unarmed guards suited for?</h5>
                                        <p>Unarmed security guards are ideal for environments where a non-threatening, visible presence is required, such as retail stores, office complexes, schools, and residential buildings.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">How are unarmed security guards trained?</h5>
                                        <p>Unarmed security guards undergo Certificate II in Security Operations, which covers essential security skills. They also receive training in emergency response, conflict resolution, and surveillance monitoring.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg h-100">
                                        <h5 className="mb-3">Can unarmed guards detain people?</h5>
                                        <p>Unarmed security guards can detain individuals temporarily if necessary and call local authorities for assistance in case of criminal activity.</p>
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
                                        <h2 className="text-white">READY TO PROTECT YOUR PROPERTY WITH PROFESSIONAL SECURITY?</h2>
                                        <p className="text-white">
                                            Metro Guards is a top-notch unarmed security company providing best-in-class services across Melbourne. Whether you need security for a retail store, office, or residential building, our experienced guards are ready to offer the protection and peace of mind you deserve.
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