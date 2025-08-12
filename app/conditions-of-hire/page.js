import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Conditions of Hire - Metropolitan Security Services Melbourne',
  description: 'Review the conditions of hire for Metropolitan Security\'s professional security guard services in Melbourne.',
}

export default function ConditionsOfHirePage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONDITIONS OF HIRE">
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 mx-auto text-center">
                                    <div className="heading2 no-margin-heading">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Hire Agreement Information
                                        </small>
                                        <h1>CONDITIONS OF HIRE</h1>
                                        <p className="lead">
                                            These conditions govern the hire of security personnel from Metropolitan Security Services. 
                                            Please review carefully before engaging our services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Key Conditions Section =====*/}
                    <div className="key-conditions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Important Hire Conditions
                                        </small>
                                        <h2>KEY HIRING CONDITIONS</h2>
                                        <p>Essential conditions that apply when hiring our security personnel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-eye me-2"></i>Supervision</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>The client is responsible for the onsite supervision and direction of our on-hired staff. You must provide a safe workplace for our employees, abiding by the Occupational Health and Safety Act 1985 and relevant industry regulations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-person-check me-2"></i>Client Obligations</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Our employees and contractors are hired at your request. From the time they report for duties, they are under your care, control and supervision for the duration of the assignment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#FDC24C', color: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-briefcase me-2"></i>Permanent Placements</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Under no circumstances can clients directly employ our personnel without approval. Any direct employment will result in a placement fee equal to 160 hours of the person's charge rate.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#FDC24C', color: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-calendar-check me-2"></i>Booking Conditions</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Customers must email 48 hours prior to commencement for booking confirmation. Rates include payroll tax, superannuation, work cover and public liability of 10M.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Payment Terms Section =====*/}
                    <div className="payment-terms-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Payment Information
                                            </small>
                                            <h2>PAYMENT TERMS & CONDITIONS</h2>
                                            <p>
                                                As we are obligated to pay all personnel weekly, our terms of Pre-Paid net are critical to our ongoing service.
                                            </p>
                                            <div className="payment-list mt-4">
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-clock-fill" style={{fontSize: '20px', color: '#FDC24C'}}></i>
                                                    </div>
                                                    <span><strong>Invoice Enquiries:</strong> Must be addressed within 7 days of invoice date</span>
                                                </div>
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-exclamation-triangle-fill" style={{fontSize: '20px', color: '#dc3545'}}></i>
                                                    </div>
                                                    <span><strong>Overdue Accounts:</strong> May incur administration fee after 7 days</span>
                                                </div>
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-credit-card-fill" style={{fontSize: '20px', color: '#28a745'}}></i>
                                                    </div>
                                                    <span><strong>Pre-Paid Terms:</strong> Critical for ongoing service delivery</span>
                                                </div>
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-file-text-fill" style={{fontSize: '20px', color: '#243D31'}}></i>
                                                    </div>
                                                    <span><strong>Recovery Costs:</strong> Client liable for all collection expenses</span>
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
                                                    <div className="stat-number text-warning" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        7
                                                    </div>
                                                    <div className="stat-label">Days for Invoice Queries</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-success" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        48hr
                                                    </div>
                                                    <div className="stat-label">Booking Notice Required</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-primary" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        $10M
                                                    </div>
                                                    <div className="stat-label">Public Liability Cover</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-danger" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        160hr
                                                    </div>
                                                    <div className="stat-label">Placement Fee Rate</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== General Terms Content Section =====*/}
                    <div className="general-terms-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Comprehensive Agreement Terms
                                        </small>
                                        <h2>GENERAL TERMS</h2>
                                        <p>Detailed terms and conditions governing our security service agreements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="terms-content bg-white p-5 rounded shadow-lg">
                                        
                                        {/*===== Supply Agreement =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                1. SUPPLY AGREEMENT
                                            </h3>
                                            <ul className="terms-list">
                                                <li>This Agreement applies to each provision of Goods and Services by Metropolitan Guard Services (MGS)</li>
                                                <li>General Terms apply to all supplies by MGS, with Specific Terms taking precedence where inconsistent</li>
                                                <li>MGS works with independent contractors including State Security Solutions Pty Ltd (ABN: 47 622 754 723)</li>
                                                <li>Client authorizes MGS to use independent contractors where services are required</li>
                                            </ul>
                                        </div>

                                        {/*===== Requests and Pricing =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                2. REQUESTS, PROPOSALS AND PRICING
                                            </h3>
                                            <ul className="terms-list">
                                                <li>MGS is not obligated to provide services but may do so at its discretion</li>
                                                <li>Fees are based on standard pricing or specific Proposals as accepted</li>
                                                <li>MGS may vary service offerings and fees accordingly</li>
                                                <li>Additional work not covered by Proposals subject to standard pricing</li>
                                            </ul>
                                        </div>

                                        {/*===== Payment Terms =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                3. PAYMENT OF FEES
                                            </h3>
                                            <ul className="terms-list">
                                                <li>Payment required on or prior to delivery of services</li>
                                                <li>Written credit terms may vary payment requirements</li>
                                                <li>Fees may be varied by notice from MGS</li>
                                                <li>Interest charged at 2% above 30-day bank bill rate for overdue amounts</li>
                                                <li>Client liable for all collection costs including legal fees</li>
                                            </ul>
                                        </div>

                                        {/*===== Term and Termination =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                5. TERM AND TERMINATION
                                            </h3>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h5 className="mb-3">Termination Rights:</h5>
                                                    <ul className="terms-list">
                                                        <li>One month's notice required after minimum term</li>
                                                        <li>MGS may terminate with seven days' notice</li>
                                                        <li>Immediate termination for material breach</li>
                                                        <li>Early termination requires payment of remaining term</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5 className="mb-3">Suspension Rights:</h5>
                                                    <ul className="terms-list">
                                                        <li>Services may be suspended for unpaid fees</li>
                                                        <li>Immediate termination if site poses risk to personnel</li>
                                                        <li>Termination available if client becomes insolvent</li>
                                                        <li>All accrued rights preserved upon termination</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Liability =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                7. LIABILITY
                                            </h3>
                                            <div className="alert alert-warning">
                                                <strong>Important:</strong> Subject to Competition and Consumer Act 2010 and similar legislation which cannot be excluded.
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-lg-6">
                                                    <h5 className="mb-3">MGS Not Liable For:</h5>
                                                    <ul className="terms-list">
                                                        <li>Force majeure events (strikes, floods, etc.)</li>
                                                        <li>Indirect or consequential losses</li>
                                                        <li>Loss of profit, use, income, or reputation</li>
                                                        <li>Damage except if caused solely by MGS employee</li>
                                                        <li>Loss of keys/access devices (except if caused by MGS)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5 className="mb-3">Liability Limits:</h5>
                                                    <ul className="terms-list">
                                                        <li>Maximum liability: daily fees paid to MGS</li>
                                                        <li>Claims must be notified within 7 days</li>
                                                        <li>Client indemnifies MGS for third-party claims</li>
                                                        <li>No liability during client payment breach</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*===== Additional Key Terms =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                ADDITIONAL KEY TERMS
                                            </h3>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="key-term-box p-3 mb-3" style={{border: '2px solid #FDC24C', borderRadius: '10px'}}>
                                                        <h6 style={{color: '#243D31'}}><i className="bi bi-shield-check me-2"></i>Site Safety</h6>
                                                        <p className="mb-0 small">Client warrants sites are safe and free of harmful materials. Risk management plan required.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="key-term-box p-3 mb-3" style={{border: '2px solid #FDC24C', borderRadius: '10px'}}>
                                                        <h6 style={{color: '#243D31'}}><i className="bi bi-people me-2"></i>Non-Solicitation</h6>
                                                        <p className="mb-0 small">12-month restriction on employing MGS staff. Liquidated damages: 30% of annual salary.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="key-term-box p-3 mb-3" style={{border: '2px solid #FDC24C', borderRadius: '10px'}}>
                                                        <h6 style={{color: '#243D31'}}><i className="bi bi-lock me-2"></i>Confidentiality</h6>
                                                        <p className="mb-0 small">All information must be treated confidentially. No disclosure without written permission.</p>
                                                    </div>
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
                                    <div className="cta-banner bg-primary text-white p-5 rounded text-center">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 text-left">
                                                <h3 className="text-white mb-3">Ready to Hire Our Security Personnel?</h3>
                                                <p className="text-white mb-0">
                                                    Contact us to discuss your security staffing requirements. Our experienced team will help you find the right security solutions for your needs.
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="contact-buttons">
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
                                                        GET QUOTE <span><i className="bi bi-file-earmark-text"></i></span>
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
                                                        CALL NOW <span><i className="bi bi-telephone"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className="contact-info-row d-flex justify-content-around text-center">
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-clock" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">48 Hour Notice</h6>
                                                        <small className="text-white-50">Booking confirmation</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-shield-check" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">$10M Coverage</h6>
                                                        <small className="text-white-50">Public liability</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-people" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Professional Staff</h6>
                                                        <small className="text-white-50">Fully trained guards</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-geo-alt" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Melbourne Wide</h6>
                                                        <small className="text-white-50">Full coverage</small>
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