import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Forms & Downloads - Metropolitan Security Services Melbourne',
  description: 'Download forms and documents for Metropolitan Security\'s professional security services in Melbourne.',
}

export default function FormsDownloadsPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FORMS & DOWNLOADS">
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 mx-auto text-center">
                                    <div className="heading2 no-margin-heading">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Easy Access Resources
                                        </small>
                                        <h1>FORMS & DOWNLOADS</h1>
                                        <p className="lead">
                                            We offer security solutions across Melbourne and beyond. Below are easy-ready online 
                                            information submission forms made especially for you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Forms Grid Section =====*/}
                    <div className="forms-grid-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Quick Access Forms
                                        </small>
                                        <h2>CLIENT FORMS & DOCUMENTS</h2>
                                        <p>Download, complete and submit these forms for fast and efficient service.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Get Quotation Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-file-earmark-text" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Get Quotation Form</h5>
                                                <p className="card-text mb-4">Request a detailed quote for our security services. Provide your requirements and get a customized proposal.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="get-quotation" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Book a Guard Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-person-badge" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Book a Guard Form</h5>
                                                <p className="card-text mb-4">Quick booking form to request security guard services. Perfect for immediate security needs.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="book-a-guard" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-calendar-check" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Booking Form</h5>
                                                <p className="card-text mb-4">Comprehensive booking form for scheduling security services with detailed requirements.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/booking-form-security-services-australia" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Us Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-envelope" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Contact Us Form</h5>
                                                <p className="card-text mb-4">Get in touch with our team for general inquiries, support, or additional information.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/contacts" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contractor Declaration Form */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-clipboard-check" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Contractor Declaration Form</h5>
                                                <p className="card-text mb-4">Declaration form for independent contractors working with Metropolitan Security Services.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/contractor-declaration-form" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Incident Log Book */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="form-icon mb-3 text-center">
                                                    <i className="bi bi-journal-text" style={{fontSize: '3rem', color: '#243D31'}}></i>
                                                </div>
                                                <h5 className="card-title text-center mb-3" style={{color: '#243D31'}}>Incident Log Book</h5>
                                                <p className="card-text mb-4">Standardized incident reporting logbook for recording security incidents and observations.</p>
                                                <div className="mt-auto text-center">
                                                    <a 
                                                        href="/incident-report-feedback-form" 
                                                        className="btn px-4 py-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            color: '#243D31',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-eye me-2"></i>Click here to view
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Employment & Documentation Section =====*/}
                    <div className="employment-docs-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Employment & Documentation
                                        </small>
                                        <h2>EMPLOYMENT FORMS & COMPANY DOCUMENTS
                                            
                                        </h2>
                                        <p>Essential documents for employment, procedures, and company information.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Employment Form */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 text-center d-flex flex-column">
                                                <div className="employment-icon mb-3">
                                                    <i className="bi bi-person-plus" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                                </div>
                                                <h6 className="card-title mb-3" style={{color: '#243D31'}}>Employment Form</h6>
                                                <p className="card-text small mb-3">Application form for employment opportunities with Metropolitan Security Services.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Employee-Registration-Form.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            backgroundColor: '#243D31',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SOP's */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 text-center d-flex flex-column">
                                                <div className="employment-icon mb-3">
                                                    <i className="bi bi-list-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                                </div>
                                                <h6 className="card-title mb-3" style={{color: '#243D31'}}>SOP's</h6>
                                                <p className="card-text small mb-3">Standard Operating Procedures for security operations and protocols.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2022/12/Site-specific-SOPS-Final-2.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            backgroundColor: '#243D31',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Employment Pack */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 text-center d-flex flex-column">
                                                <div className="employment-icon mb-3">
                                                    <i className="bi bi-book" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                                </div>
                                                <h6 className="card-title mb-3" style={{color: '#243D31'}}>Employment Pack</h6>
                                                <p className="card-text small mb-3">Complete employee handbook with policies and procedures.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Employee-Handbook.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            backgroundColor: '#243D31',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Profile */}
                                <div className="col-lg-6 col-xl-3 col-md-6 mb-4">
                                    <div className="employment-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-body p-4 text-center d-flex flex-column">
                                                <div className="employment-icon mb-3">
                                                    <i className="bi bi-building" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                                </div>
                                                <h6 className="card-title mb-3" style={{color: '#243D31'}}>Company Profile</h6>
                                                <p className="card-text small mb-3">Comprehensive company profile and service capabilities overview.</p>
                                                <div className="mt-auto">
                                                    <a 
                                                        href="/wp-content/uploads/2025/05/Company-profile.pdf" 
                                                        className="btn btn-sm px-3 py-2"
                                                        style={{
                                                            backgroundColor: '#243D31',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        <i className="bi bi-download me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Quick Access Section =====*/}
                    <div className="quick-access-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Easy Document Access
                                            </small>
                                            <h2>STREAMLINED PROCESS</h2>
                                            <p>
                                                Our forms are designed to make the process as simple and efficient as possible. 
                                                All forms are available online for immediate access and completion.
                                            </p>
                                            <div className="process-list mt-4">
                                                <div className="process-item d-flex align-items-center mb-3">
                                                    <div className="step-number mr-3" 
                                                         style={{
                                                             backgroundColor: '#FDC24C', 
                                                             color: '#243D31', 
                                                             width: '30px', 
                                                             height: '30px', 
                                                             borderRadius: '50%', 
                                                             display: 'flex', 
                                                             alignItems: 'center', 
                                                             justifyContent: 'center', 
                                                             fontWeight: 'bold'
                                                         }}>
                                                        1
                                                    </div>
                                                    <span><strong>Select</strong> the form you need from our comprehensive list</span>
                                                </div>
                                                <div className="process-item d-flex align-items-center mb-3">
                                                    <div className="step-number mr-3" 
                                                         style={{
                                                             backgroundColor: '#FDC24C', 
                                                             color: '#243D31', 
                                                             width: '30px', 
                                                             height: '30px', 
                                                             borderRadius: '50%', 
                                                             display: 'flex', 
                                                             alignItems: 'center', 
                                                             justifyContent: 'center', 
                                                             fontWeight: 'bold'
                                                         }}>
                                                        2
                                                    </div>
                                                    <span><strong>Download</strong> and complete the form with accurate information</span>
                                                </div>
                                                <div className="process-item d-flex align-items-center mb-3">
                                                    <div className="step-number mr-3" 
                                                         style={{
                                                             backgroundColor: '#FDC24C', 
                                                             color: '#243D31', 
                                                             width: '30px', 
                                                             height: '30px', 
                                                             borderRadius: '50%', 
                                                             display: 'flex', 
                                                             alignItems: 'center', 
                                                             justifyContent: 'center', 
                                                             fontWeight: 'bold'
                                                         }}>
                                                        3
                                                    </div>
                                                    <span><strong>Submit</strong> the completed form for fast processing</span>
                                                </div>
                                                <div className="process-item d-flex align-items-center mb-3">
                                                    <div className="step-number mr-3" 
                                                         style={{
                                                             backgroundColor: '#FDC24C', 
                                                             color: '#243D31', 
                                                             width: '30px', 
                                                             height: '30px', 
                                                             borderRadius: '50%', 
                                                             display: 'flex', 
                                                             alignItems: 'center', 
                                                             justifyContent: 'center', 
                                                             fontWeight: 'bold'
                                                         }}>
                                                        4
                                                    </div>
                                                    <span><strong>Receive</strong> confirmation and follow-up from our team</span>
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
                                                        10
                                                    </div>
                                                    <div className="stat-label">Forms Available</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-success" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        24/7
                                                    </div>
                                                    <div className="stat-label">Online Access</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-warning" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        Fast
                                                    </div>
                                                    <div className="stat-label">Processing</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-info" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        Easy
                                                    </div>
                                                    <div className="stat-label">Submission</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== Help & Support CTA ===== */}
                    {/* <div className="help-support-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="help-banner bg-primary text-white p-5 rounded text-center">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 text-left">
                                                <h3 className="text-white mb-3">Need Help with Forms or Downloads?</h3>
                                                <p className="text-white mb-0">
                                                    Our team is here to assist you with any questions about our forms or documents. 
                                                    Contact us for support with completing forms or understanding requirements.
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="help-buttons">
                                                    <a 
                                                        href="#" 
                                                        className="btn text-dark px-4 py-3 me-2 mb-2"
                                                        style={{
                                                            backgroundColor: '#FDC24C',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        GET HELP <span><i className="bi bi-question-circle"></i></span>
                                                    </a>
                                                    <a 
                                                        href="#" 
                                                        className="btn btn-outline-light px-4 py-3"
                                                        style={{
                                                            borderRadius: '5px',
                                                            textDecoration: 'none',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        CALL SUPPORT <span><i className="bi bi-headset"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className="help-info-row d-flex justify-content-around text-center">
                                                    <div className="help-info-item">
                                                        <div className="help-icon mb-2">
                                                            <i className="bi bi-download" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Easy Downloads</h6>
                                                        <small className="text-white-50">One-click access</small>
                                                    </div>
                                                    <div className="help-info-item">
                                                        <div className="help-icon mb-2">
                                                            <i className="bi bi-file-check" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Form Assistance</h6>
                                                        <small className="text-white-50">Step-by-step help</small>
                                                    </div>
                                                    <div className="help-info-item">
                                                        <div className="help-icon mb-2">
                                                            <i className="bi bi-headset" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Support Available</h6>
                                                        <small className="text-white-50">Expert guidance</small>
                                                    </div>
                                                    <div className="help-info-item">
                                                        <div className="help-icon mb-2">
                                                            <i className="bi bi-clock" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Quick Response</h6>
                                                        <small className="text-white-50">Fast processing</small>
                                                    </div> */}
                                                </div>
                                            {/* </div> */}
                                        {/* </div> */}
                                    {/* </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* x</div> */}
                {/* </div> */}
            </Layout>
        </>
    )
}