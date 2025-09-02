import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"

export default function RetailSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="RETAIL SECURITY SOLUTIONS">
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
                                                Protecting Your Business
                                            </small>
                                            <h2>RETAIL SECURITY SOLUTIONS IN MELBOURNE</h2>
                                            <p>
                                                Retail businesses are susceptible to a variety of security threats, including theft, vandalism, and internal losses. At Metro Guards, we specialize in offering tailored retail security guard services designed to safeguard your assets, ensure a safe environment for your customers, and protect your employees.
                                            </p>
                                            <p>
                                                Whether you run a single store, a chain of retail outlets, or a shopping mall, we understand the unique challenges faced by retail businesses and provide solutions that cater to your specific needs. Our services tackle everything from access control and surveillance to loss prevention and emergency response.
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
                                        <img src="/assets/img/blog/retail.jpg" alt="Retail Security Solutions"  style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover' 
        }} />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Custom Solutions Section =====*/}
                    <div className="systems-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Tailored Protection
                                        </small>
                                        <h2>CUSTOMIZED SECURITY SOLUTIONS FOR RETAIL</h2>
                                        <p>We provide security services specifically designed for your business size, location, and operational requirements</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-gear text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Tailored Services</h4>
                                        <p>Custom security plans for small boutiques to large shopping centers, including CCTV systems and skilled security personnel.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#FDC24C'}}>
                                                <i className="bi bi-camera-video text-dark" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Advanced Technology</h4>
                                        <p>Latest CCTV systems with continuous monitoring, alarm systems, and access control for comprehensive protection.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-shield-check text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Loss Prevention</h4>
                                        <p>Specialized training to detect and prevent theft, both from customers and employees, reducing shrinkage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Officers Section =====*/}
                    <div className="benefits-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Professional Protection
                                        </small>
                                        <h2>OUR RETAIL SECURITY OFFICERS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#1E2247', borderRadius: '50%'}}>
                                                <i className="bi bi-person-badge text-white" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Uniformed Security Officers</h5>
                                            <p className="mb-0">Visible deterrents trained in customer flow management, suspicious activity monitoring, conflict resolution, first aid, and emergency response.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#FDC24C', borderRadius: '50%'}}>
                                                <i className="bi bi-incognito text-dark" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Covert Loss Prevention</h5>
                                            <p className="mb-0">Undercover officers detecting and preventing theft without being noticed, effectively reducing organized retail crime and internal theft.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Customer Experience Section =====*/}
                    <div className="solutions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Beyond Security
                                        </small>
                                        <h2>ENHANCING CUSTOMER EXPERIENCE</h2>
                                        <p>Our security services contribute to both safety and business operations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Concierge Security Approach</h5>
                                            <p className="mb-0">Blends security with customer service, creating a welcoming atmosphere while maintaining safety.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-graph-up" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Operational Efficiency</h5>
                                            <p className="mb-0">Access control for stock movement, delivery monitoring, and secure storage areas improve operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Emergency Coordination</h5>
                                            <p className="mb-0">Trained response for medical situations, theft incidents, and coordination with contractors.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-building-check" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Professional Image</h5>
                                            <p className="mb-0">Maintains your brand reputation with professional security presence that customers trust.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Comprehensive Coverage Section =====*/}
                    <div className="choose-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="choose-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                360° Protection
                                            </small>
                                            <h2>COMPREHENSIVE RETAIL SECURITY COVERAGE</h2>
                                            <div className="choose-features mt-4">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-door-closed" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Access Control</h5>
                                                        <p>Regulate entry to sensitive areas like stock rooms and offices with verified visitor logging.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-alarm" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">24/7 Monitoring</h5>
                                                        <p>Central monitoring station with real-time alerts for immediate response to breaches.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-camera-video" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Surveillance Systems</h5>
                                                        <p>High-definition CCTV coverage for all areas of your retail space, including blind spots.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-arrow-repeat" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Regular Patrols</h5>
                                                        <p>Systematic checks of all store areas including storage and loading zones.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="choose-image ml50">
                                        <img src="/assets/img/blog/retail 2.webp" alt="Retail Security Coverage" className="img-fluid rounded shadow-lg"  style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover' 
        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section =====*/}
                    <div className="industries-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            The Metro Guards Difference
                                        </small>
                                        <h2>WHY CHOOSE US FOR RETAIL SECURITY?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-award" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Trusted by Melbourne Retailers</h5>
                                        <p>Proven track record in preventing theft, reducing liability, and enhancing customer experience.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-cash-coin" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Cost-Effective Solutions</h5>
                                        <p>Premium security services at affordable costs with flexible pricing for all business sizes.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="industry-card text-center p-4 bg-white rounded shadow-lg h-100">
                                        <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        <h5 className="my-3">Licensed Professionals</h5>
                                        <p>Fully licensed officers with continuous training in latest security protocols and standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Industries Section =====*/}
                    <div className="solutions-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Expertise
                                        </small>
                                        <h2>RETAIL SECTORS WE PROTECT</h2>
                                        <p>We provide security services for all types of retail environments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-6">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-shop" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Retail Stores & Malls</h5>
                                            <p className="mb-0">From small boutiques to large shopping centers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-cart" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Supermarkets</h5>
                                            <p className="mb-0">Grocery stores and convenience outlets</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-gem" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">High-End Retail</h5>
                                            <p className="mb-0">Luxury boutiques and jewelry stores</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg h-100">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-box-seam" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Warehouses</h5>
                                            <p className="mb-0">Distribution centers and stock rooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact CTA Section =====*/}
                    <div className="contact-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="contact-content">
                                        <h3 className="mb-3">Secure Your Retail Business Today</h3>
                                        <p className="mb-4">
                                            Protect your retail business with trusted security solutions from Metro Guards. Whether you need comprehensive surveillance, on-site security personnel, or access control systems, we provide tailored solutions that enhance safety and prevent losses.
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-telephone-fill me-2" style={{color: '#1E2247'}}></i>
                                            <strong>Call us at 1300 73 11 73 for a free consultation.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-lg-end text-center mt-4 mt-lg-0">
                                    <div className="contact-buttons">
                                        <a 
                                            href="/get-quotation" 
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
                                            GET QUOTATION <span><i className="bi bi-arrow-right"></i></span>
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
                                        <h2 className="text-white">READY TO PROTECT YOUR RETAIL BUSINESS?</h2>
                                        <p className="text-white">
                                            Metro Guards offers comprehensive, tailored retail security solutions to prevent theft, ensure customer safety, and give you peace of mind. 
                                            From visible security officers to advanced surveillance systems, we provide the protection your business deserves.
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