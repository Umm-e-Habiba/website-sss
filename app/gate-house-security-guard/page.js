import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"

export default function GatehouseSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="GATEHOUSE SECURITY SERVICES">
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
                                                First Line of Defense
                                            </small>
                                            <h2>GATEHOUSE SECURITY SERVICES IN MELBOURNE</h2>
                                            <p>
                                                At Metro Guards, we understand the importance of gatehouse security as the first line of defense for your property. Whether you are managing a commercial building, a residential complex, or an industrial facility, having an experienced team at the gatehouse is crucial to ensuring the safety of your employees, tenants, and assets.
                                            </p>
                                            <p>
                                                With our professional gatehouse security services in Melbourne, we provide comprehensive solutions that protect your property from unauthorized access, theft, and other potential threats. Our gatehouse security officers are specially trained to monitor entry points, manage access control systems, and enforce security protocols.
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
                                   <div className="choose-image ml50">
    <img 
        src="/assets/img/blog/gatehouse.jpg" 
        alt="Metro Guards Gatehouse Security Team" 
        className="img-fluid rounded shadow-lg"
        style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover' 
        }}
    />
</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Gatehouse Security Section =====*/}
                    <div className="systems-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Essential Protection
                                        </small>
                                        <h2>WHY GATEHOUSE SECURITY IS ESSENTIAL</h2>
                                        <p>Gatehouse security guard services offer several advantages for any property, from residential complexes to corporate headquarters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-shield-lock text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Access Control</h4>
                                        <p>Prevents unauthorized access and ensures only authorized individuals gain entry to your property, creating a secure environment.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#FDC24C'}}>
                                                <i className="bi bi-eye text-dark" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Visible Deterrent</h4>
                                        <p>The presence of security personnel deters criminal activity and reassures employees, residents, and visitors of their safety.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-speedometer2 text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Rapid Response</h4>
                                        <p>Trained officers can respond immediately to emergencies, security breaches, or medical situations at your property.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Services Section =====*/}
                    <div className="benefits-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Solutions
                                        </small>
                                        <h2>OUR GATEHOUSE SECURITY SERVICES</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#1E2247', borderRadius: '50%'}}>
                                                <i className="bi bi-person-check text-white" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Access Control & Visitor Management</h5>
                                            <p className="mb-0">We ensure only authorized personnel can enter your property by monitoring entry points, verifying visitors, and maintaining detailed logs of all access activity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#FDC24C', borderRadius: '50%'}}>
                                                <i className="bi bi-camera-video text-dark" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">CCTV Surveillance & Monitoring</h5>
                                            <p className="mb-0">Our security guards are supported by state-of-the-art CCTV systems that provide constant monitoring of your premises with high-definition cameras.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#1E2247', borderRadius: '50%'}}>
                                                <i className="bi bi-exclamation-triangle text-white" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Emergency Response</h5>
                                            <p className="mb-0">Our officers are trained to handle various emergencies, including medical situations, fire incidents, and security breaches with rapid response protocols.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#FDC24C', borderRadius: '50%'}}>
                                                <i className="bi bi-clock text-dark" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">24/7 Monitoring</h5>
                                            <p className="mb-0">We offer around-the-clock monitoring of your gatehouse with security professionals always ready to respond to any alarms or breaches.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                    <div className="solutions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            The Metro Guards Advantage
                                        </small>
                                        <h2>BENEFITS OF OUR GATEHOUSE SECURITY</h2>
                                        <p>We provide comprehensive protection with professional security solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Enhanced Safety</h5>
                                            <p className="mb-0">Significantly improves property safety by deterring theft, vandalism, and unauthorized access.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-building" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Professional Image</h5>
                                            <p className="mb-0">Creates a welcoming yet secure environment that reflects your commitment to safety.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-gear" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Custom Solutions</h5>
                                            <p className="mb-0">Tailored security plans designed specifically for your property's unique requirements.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-cash-stack" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Cost-Effective</h5>
                                            <p className="mb-0">High-quality security services at competitive rates that fit your budget.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Trained Personnel</h5>
                                            <p className="mb-0">Highly skilled security officers with expertise in access control and emergency response.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-laptop" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Advanced Technology</h5>
                                            <p className="mb-0">Integrated security systems including CCTV, access control, and alarm monitoring.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="choose-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="choose-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Why Metro Guards?
                                            </small>
                                            <h2>WHY CHOOSE US FOR GATEHOUSE SECURITY?</h2>
                                            <div className="choose-features mt-4">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-person-badge" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Experienced Security Personnel</h5>
                                                        <p>Our gatehouse security officers are highly trained with expertise in access control, emergency response, and customer service.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-cpu" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Advanced Security Technology</h5>
                                                        <p>We use the latest security technology including CCTV systems, access control systems, and alarm monitoring.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-headset" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Reliable Customer Support</h5>
                                                        <p>Our team is always available to answer your questions and address any security concerns you may have.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-building" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Industry-Specific Solutions</h5>
                                                        <p>We serve various industries including commercial buildings, residential communities, healthcare facilities, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                   <div className="choose-image ml50">
    <img 
        src="/assets/img/blog/gatehouse 2.webp" 
        alt="Metro Guards Gatehouse Security Team" 
        className="img-fluid rounded shadow-lg"
        style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover' 
        }}
    />
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
                                            Our Expertise
                                        </small>
                                        <h2>INDUSTRIES WE SERVE</h2>
                                        <p>Our gatehouse security services are suitable for a variety of industries in Melbourne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-6">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-building" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Commercial Buildings</h5>
                                        <p>Office towers, business parks, and corporate headquarters</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-house" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Residential Communities</h5>
                                        <p>Gated communities, apartment complexes, and housing estates</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-hospital" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Healthcare Facilities</h5>
                                        <p>Hospitals, medical centers, and aged care facilities</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-truck" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Industrial Sites</h5>
                                        <p>Warehouses, factories, and logistics centers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact CTA Section =====*/}
                    <div className="contact-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="contact-content">
                                        <h3 className="mb-3">Get in Touch for Gatehouse Security Services</h3>
                                        <p className="mb-4">
                                            Metro Guards is here to provide you with the best gatehouse security solutions in Melbourne. Our team of professional security guards and advanced security technology ensures that your property is always protected, day and night.
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-telephone-fill me-2" style={{color: '#1E2247'}}></i>
                                            <strong>Call us at 1300 73 11 73 or fill out our online form to get started.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-lg-end text-center mt-4 mt-lg-0">
                                    <div className="contact-buttons">
                                        <a 
                                            href="/contacts" 
                                            className="btn text-white px-4 py-3 mb-3 d-block"
                                            style={{
                                                backgroundColor: '#1E2247',
                                                border: 'none',
                                                borderRadius: '5px',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            FREE CONSULTATION <span><i className="bi bi-calendar-check"></i></span>
                                        </a>
                                        <a 
                                            href="tel:1300731173" 
                                            className="btn text-dark px-4 py-3 d-block"
                                            style={{
                                                backgroundColor: '#FDC24C',
                                                border: 'none',
                                                borderRadius: '5px',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            CALL NOW <span><i className="bi bi-telephone"></i></span>
                                        </a>
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
                                        <h2 className="text-white">READY TO SECURE YOUR PROPERTY'S ENTRANCES?</h2>
                                        <p className="text-white">
                                            Metro Guards offers comprehensive, tailored gatehouse security solutions to meet the unique needs of your business. 
                                            From access control to CCTV monitoring and professional security personnel, we provide top-tier security services that keep your property safe.
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