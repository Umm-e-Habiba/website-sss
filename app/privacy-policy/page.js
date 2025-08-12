import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Privacy Policy - Metropolitan Security Services',
  description: 'Learn how Metropolitan Security Services collects, uses, and protects your personal information in accordance with privacy laws.',
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="PRIVACY POLICY">
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
                                                Your Privacy Matters
                                            </small>
                                            <h2>PRIVACY POLICY</h2>
                                            <p>
                                                Metropolitan Guard Services is committed to protecting your personal information in accordance with Australian privacy laws. This policy outlines how we collect, use, disclose and manage your personal information.
                                            </p>
                                            {/* <div className="btn-area mt-4">
                                                <a 
                                                    href="#contact" 
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
                                                    CONTACT OUR PRIVACY OFFICER <span><i className="bi bi-arrow-right"></i></span>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/about img.webp" alt="Privacy and Data Protection" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Policy Content Section =====*/}
                    <div className="policy-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="policy-content bg-white p-5 rounded shadow">
                                        <div className="policy-intro mb-5">
                                            <h3 className="mb-3" style={{color: '#243D31'}}>Our Commitment to Your Privacy</h3>
                                            <p>
                                                Metropolitan Guard Services respects your privacy at all times. When processing your order or application, we collect personal information about you for the primary purpose of providing you with a high level of customer service.
                                            </p>
                                        </div>

                                        <div className="policy-details">
                                            <div className="policy-item mb-5">
                                                <h4 className="mb-3 d-flex align-items-center" style={{color: '#243D31'}}>
                                                    <i className="bi bi-shield-lock me-3"></i>
                                                    Collection and Use of Information
                                                </h4>
                                                <p>
                                                    We may also use this information to inform you of any changes to the services provided or of new services that may become available. The types of personal information we collect may include:
                                                </p>
                                                <ul className="list-unstyled ms-4">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Contact details (name, address, email, phone number)
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Identification information for security clearance purposes
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Payment and billing information
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                        Service preferences and history
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="policy-item mb-5">
                                                <h4 className="mb-3 d-flex align-items-center" style={{color: '#243D31'}}>
                                                    <i className="bi bi-lock me-3"></i>
                                                    Information Disclosure
                                                </h4>
                                                <p>
                                                    As we value your privacy, we do not make your personal information available to other organisations without your consent, except where required by law or as necessary to provide our services to you.
                                                </p>
                                            </div>

                                            <div className="policy-item mb-5">
                                                <h4 className="mb-3 d-flex align-items-center" style={{color: '#243D31'}}>
                                                    <i className="bi bi-eye me-3"></i>
                                                    Access to Your Information
                                                </h4>
                                                <p>
                                                    You have the right to gain access to your information at any time. If you would like to access or correct your personal information, please contact our Privacy Officer.
                                                </p>
                                            </div>

                                            <div className="policy-item">
                                                <h4 className="mb-3 d-flex align-items-center" style={{color: '#243D31'}}>
                                                    <i className="bi bi-shield-check me-3"></i>
                                                    Data Security
                                                </h4>
                                                <p>
                                                    We take reasonable steps to protect all personal information we hold from misuse, interference and loss, and from unauthorised access, modification or disclosure. This protection includes physical security for paper records and electronic security for digital information.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact Section =====*/}
                    <div id="contact" className="contact-cta bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-box bg-primary text-white p-5 rounded text-center position-relative overflow-hidden">
                                        <div className="cta-bg-shape position-absolute" style={{top: '0', right: '0', opacity: '0.1'}}>
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 text-left">
                                                <div className="cta-content">
                                                    <h3 className="text-white mb-3">Privacy Concerns or Questions?</h3>
                                                    <p className="text-white mb-0">
                                                        Please direct privacy related enquiries to our Privacy Officer who will respond to your query within 48 hours.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="cta-buttons">
                                                    <a href="tel:1300731173" className="btn btn-light btn-lg mb-2 d-block">
                                                        <i className="bi bi-telephone mr-2"></i>CALL 1300 73 11 73
                                                    </a>
                                                    <a href="mailto:admin@metroguards.com.au" className="btn btn-outline-light btn-lg d-block">
                                                        <i className="bi bi-envelope mr-2"></i>EMAIL US
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Compliance Section =====*/}
                    <div className="compliance-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Regulatory Compliance
                                        </small>
                                        <h2>OUR PRIVACY COMMITMENTS</h2>
                                        <p>We adhere to all relevant Australian privacy legislation and regulations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="compliance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="compliance-icon mb-3">
                                            <i className="bi bi-file-earmark-text" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4>Privacy Act 1988</h4>
                                        <p>Compliance with Australian Privacy Principles (APPs) governing collection, use and disclosure of personal information</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="compliance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="compliance-icon mb-3">
                                            <i className="bi bi-shield-check" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4>Data Protection</h4>
                                        <p>Implementation of appropriate technical and organizational measures to protect personal data</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="compliance-item text-center p-4 bg-white rounded shadow h-100">
                                        <div className="compliance-icon mb-3">
                                            <i className="bi bi-people" style={{color: '#243D31', fontSize: '2.5rem'}}></i>
                                        </div>
                                        <h4>Staff Training</h4>
                                        <p>Regular privacy training for all employees handling personal information</p>
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