import Layout from "@/components/layout/Layout"

export default function WarehouseSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="WAREHOUSE SECURITY SOLUTIONS">
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
                                                Securing Your Warehouse Operations
                                            </small>
                                            <h2>WAREHOUSE SECURITY SOLUTIONS IN MELBOURNE</h2>
                                            <p>
                                                At Metro Guards, we understand the critical importance of securing your warehouse operations. With warehousing, shipping, and logistics companies managing large volumes of stock, equipment, and machinery daily, warehouse security becomes a top priority.
                                            </p>
                                            <p>
                                                Our warehouse security systems in Melbourne are designed to safeguard your valuable assets, prevent theft, and ensure a safe working environment for your employees and contractors with cutting-edge technology and professional security services.
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
                                        <img src="/assets/img/blog/warehouse.jpg" alt="Warehouse Security Systems" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Systems Section - Alternative Design =====*/}
                    <div className="systems-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Protection
                                        </small>
                                        <h2>COMPREHENSIVE WAREHOUSE SECURITY SYSTEMS</h2>
                                        <p>Warehouses are vulnerable to theft, vandalism, and accidents. We offer tailored warehouse security solutions that help mitigate risks and prevent financial losses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-camera-video text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Warehouse CCTV Systems</h4>
                                        <p>Continuous surveillance to deter criminals, track stock movement, and ensure property and employee safety with real-time monitoring capabilities.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#FDC24C'}}>
                                                <i className="bi bi-door-open text-dark" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Access Control Systems</h4>
                                        <p>Limit entry to authorized personnel only, enhancing security of sensitive areas and controlling vehicle access to your warehouse premises.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <div className="system-card text-center p-5 bg-white rounded-lg shadow-lg h-100 position-relative">
                                        <div className="system-icon-wrapper mb-4">
                                            <div className="system-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" 
                                                 style={{width: '80px', height: '80px', backgroundColor: '#1E2247'}}>
                                                <i className="bi bi-alarm text-white" style={{fontSize: '2.5rem'}}></i>
                                            </div>
                                        </div>
                                        <h4 className="mb-3">Warehouse Alarm Systems</h4>
                                        <p>Advanced alarm systems that detect intruders immediately, alerting you and our monitoring team for rapid response times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section - Grid Layout Design =====*/}
                    <div className="benefits-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Security Advantages
                                        </small>
                                        <h2>BENEFITS OF INSTALLING WAREHOUSE SECURITY SYSTEMS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#1E2247', borderRadius: '50%'}}>
                                                <i className="bi bi-shield-check text-white" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Prevention of Theft and Vandalism</h5>
                                            <p className="mb-0">Installing CCTV systems, alarm systems, and access control creates a formidable barrier against theft and vandalism, with security systems acting as visible deterrents.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#FDC24C', borderRadius: '50%'}}>
                                                <i className="bi bi-person-check text-dark" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Reducing OH&S Risks</h5>
                                            <p className="mb-0">Our CCTV systems monitor internal operations, ensuring compliance with Occupational Health and Safety standards while preventing accidents and workplace injuries.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#1E2247', borderRadius: '50%'}}>
                                                <i className="bi bi-boxes text-white" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Stock and Handling Discrepancies</h5>
                                            <p className="mb-0">Security cameras track inventory movement through your warehouse, minimizing theft risks and errors in stock handling with real-time monitoring capabilities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="benefit-item d-flex align-items-start p-4 bg-white rounded shadow-lg h-100">
                                        <div className="benefit-icon me-4 flex-shrink-0">
                                            <div className="icon-circle d-flex align-items-center justify-content-center"
                                                 style={{width: '60px', height: '60px', backgroundColor: '#FDC24C', borderRadius: '50%'}}>
                                                <i className="bi bi-person-x text-dark" style={{fontSize: '1.8rem'}}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Employee Theft Prevention</h5>
                                            <p className="mb-0">Our security systems deter dishonest activities by monitoring staff interactions with goods, ensuring fraudulent behavior is detected immediately.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Security Solutions Section - Icon List Design =====*/}
                    <div className="solutions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Complete Protection Package
                                        </small>
                                        <h2>OUR WAREHOUSE SECURITY SOLUTIONS</h2>
                                        <p>We offer a comprehensive range of warehouse security services tailored to your specific needs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-camera-video" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">24/7 CCTV Surveillance</h5>
                                            <p className="mb-0">Constant monitoring to protect assets, monitor operations, and ensure personnel safety</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-door-closed" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Access Control</h5>
                                            <p className="mb-0">Control warehouse entry, preventing unauthorized access and reducing security risks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-bell" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Alarm Monitoring</h5>
                                            <p className="mb-0">Real-time alerts and immediate responses to security breaches with quick intervention</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-car-front" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Mobile Patrols</h5>
                                            <p className="mb-0">Random or scheduled patrols to deter criminal activity and ensure continuous monitoring</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="solution-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg">
                                        <div className="solution-icon me-4">
                                            <i className="bi bi-person-badge" style={{fontSize: '2.5rem', color: '#1E2247'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Security Guards</h5>
                                            <p className="mb-0">On-site security personnel offering visible deterrent and quick response to security breaches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Choose Us Section - Alternate Layout =====*/}
                    <div className="choose-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="choose-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                The Metro Guards Advantage
                                            </small>
                                            <h2>WHY CHOOSE METRO GUARDS FOR WAREHOUSE SECURITY?</h2>
                                            <div className="choose-features mt-4">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-gear-fill" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Tailored Security Solutions</h5>
                                                        <p>We create customized warehouse security plans that meet your specific requirements with thorough site evaluation.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-people-fill" style={{fontSize: '1.5rem', color: '#1E22471'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Experienced Security Personnel</h5>
                                                        <p>Highly trained security guards with 24/7 availability, ready to handle theft prevention and emergency response.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-cpu-fill" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Advanced Technology</h5>
                                                        <p>Latest security technology including CCTV systems, access control, and alarm monitoring for round-the-clock protection.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start">
                                                    <div className="feature-icon me-3 mt-1">
                                                        <i className="bi bi-cash-stack" style={{fontSize: '1.5rem', color: '#1E2247'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Cost-Effective Security</h5>
                                                        <p>Prevent costly theft, damage, and workplace injuries with affordable and effective security solutions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="choose-image ml50">
                                        <img src="/assets/img/blog/warehouse 2.webp" alt="Metro Guards Team" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   {/*===== FAQ Section - Accordion Style =====*/}
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
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="accordion" id="warehouseFAQ">
                    <div className="accordion-item mb-3 border-0 rounded shadow-sm">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1"
                                    style={{backgroundColor: '#f8f9fa', border: 'none'}}>
                                <i className="bi bi-question-circle me-3" style={{color: '#1E2247'}}></i>
                                What is a warehouse security system?
                            </button>
                        </h5>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#warehouseFAQ">
                            <div className="accordion-body">
                                A warehouse security system includes a combination of CCTV surveillance, access control, alarm monitoring, and security guards to protect your warehouse from theft, vandalism, and accidents.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3 border-0 rounded shadow-sm">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2"
                                    style={{backgroundColor: '#f8f9fa', border: 'none'}}>
                                <i className="bi bi-question-circle me-3" style={{color: '#1E2247'}}></i>
                                How do warehouse CCTV systems work?
                            </button>
                        </h5>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#warehouseFAQ">
                            <div className="accordion-body">
                                Warehouse CCTV systems provide continuous surveillance of your property. The footage is monitored in real-time or recorded for later review, allowing you to track inventory, monitor employee behavior, and detect security breaches.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3 border-0 rounded shadow-sm">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3"
                                    style={{backgroundColor: '#f8f9fa', border: 'none'}}>
                                <i className="bi bi-question-circle me-3" style={{color: '#1E2247'}}></i>
                                Can warehouse security systems help with employee theft?
                            </button>
                        </h5>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#warehouseFAQ">
                            <div className="accordion-body">
                                Yes, warehouse security systems can monitor employee interactions with goods and track any suspicious activities, reducing the risk of employee theft and ensuring accountability.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item border-0 rounded shadow-sm">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4"
                                    style={{backgroundColor: '#f8f9fa', border: 'none'}}>
                                <i className="bi bi-question-circle me-3" style={{color: '#1E2247'}}></i>
                                How can access control improve warehouse security?
                            </button>
                        </h5>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#warehouseFAQ">
                            <div className="accordion-body">
                                Access control systems ensure that only authorized individuals are allowed to enter sensitive areas within your warehouse, reducing the risk of theft and ensuring better management of personnel.
                            </div>
                        </div>
                    </div>
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
                                        <h3 className="mb-3">Get in Touch with Metro Guards for Warehouse Security</h3>
                                        <p className="mb-4">
                                            If you want to protect your warehouse from theft, damage, and safety risks, Metro Guards is here to help. 
                                            Our warehouse security systems are designed to provide you with peace of mind while ensuring the safety of your employees and assets.
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
                                        <h2 className="text-white">READY TO SECURE YOUR WAREHOUSE?</h2>
                                        <p className="text-white">
                                            Metro Guards offers comprehensive, tailored warehouse security solutions to meet the unique needs of your business. 
                                            From CCTV surveillance to access control and security patrols, we provide top-tier security systems that keep your warehouse safe.
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