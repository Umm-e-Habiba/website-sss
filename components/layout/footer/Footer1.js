import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer className="footer-area padding-top footer-2 bg9">
                <div className="container">
                    <div className="row gy-4 gx-5">
                        {/* Logo and Address */}
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <Link href="/">
                                    <img
                                        src="/assets/img/logo/metroguards logo 2.png"
                                        alt="Metro Guards Logo"
                                        style={{ maxWidth: "100px", height: "auto", display: "block", marginBottom: "20px" }}
                                    />
                                </Link>
                                <p>CS Hub, 5, Level 1/34 Commercial Rd, Caroline Springs VIC 3023</p>
                            </div>
                        </div>

                        {/* Corporate Compliance 1 */}
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer">
                                <h3 className="footer-heading">Corporate Compliance</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="security-licenses-and-insurance">Security License and Insurance</Link></li>
                                        <li><Link href="terms-and-conditions">Terms and Conditions</Link></li>
                                        <li><Link href="conditions-of-hire">Condition of Hires</Link></li>
                                        <li><Link href="faqs">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Compliance 2 */}
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer">
                                <h3 className="footer-heading">Corporate Compliance</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/Modern-Slavery-Statement-V2-1.pdf" target="_blank" rel="noopener noreferrer">Slavery Statement</Link></li>
                                        <li><Link href="service-coverage">Service Coverage</Link></li>
                                        <li><Link href="forms-downloads">Forms and Downloads</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Careers */}
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer">
                                <h3 className="footer-heading">Careers</h3>
                                <div className="footer-menu">
                                    <Link href="/careers" style={{ color: '#FDC51A' }}>Click Here</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3 className="footer-heading">Get in touch</h3>
                                <div className="footer-contact mb-2">
                                    <div className="single-contact d-flex align-items-center">
                                        <div className="contact-icon me-2">
                                            <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                        </div>
                                        <Link href="#">1300 73 11 73</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact d-flex align-items-center">
                                        <div className="contact-icon me-2">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="#">admin@metroguards.com.au</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright and Social */}
                    <div className="row align-items-center copyright2 mt-4 pt-4 border-top">
                        <div className="col-lg-6">
                            <p>© 2025 All Rights Reserved to Metro Guards.</p>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <div className="social social2">
                                <ul className="d-flex justify-content-lg-end justify-content-center gap-3 list-unstyled mb-0">
                                    <li><Link data-bs-toggle="tooltip" title="Whatsapp" href="https://api.whatsapp.com/send?phone=61422039505"><i className="fa-brands fa-whatsapp" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="https://www.facebook.com/metroguards?_rdc=1&_rdr"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="https://www.instagram.com/metropolitanguard/"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Twitter" href="https://x.com/metroguards"><i className="fa-brands fa-twitter" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                .footer-heading {
                    font-family: inherit; /* Uses the same font as body text */
                    font-size: 1.1rem; /* Slightly larger than body text */
                    font-weight: 600; /* Semi-bold */
                    color: #ffffff; /* White text */
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}