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
                                        src="/assets/img/logo/mg logo 2.png"
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
                                <h3>Corporate Compliance</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">Security License and Insurance</Link></li>
                                        <li><Link href="#">Terms and Conditions</Link></li>
                                        <li><Link href="#">Condition of Hires</Link></li>
                                        <li><Link href="#">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Compliance 2 */}
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer">
                                <h3>Corporate Compliance</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Slavery Statement</Link></li>
                                        <li><Link href="#">Service Coverage</Link></li>
                                        <li><Link href="#">Forms and Downloads</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Careers */}
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer">
                                <h3>Careers</h3>
                                <div className="footer-menu">
                                    <p>To find out more about current job opportunities at Metropolitan Guard Services,</p>
                                    <Link href="https://metroguards.com.au/careers/">Click Here</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3>Get in touch</h3>
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
                                    <li><Link data-bs-toggle="tooltip" title="LinkedIn" href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
