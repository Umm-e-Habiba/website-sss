import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="footer-area padding-top footer-2 bg9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer mr50">
                                 <Link href="/">
  <img src="/assets/img/logo/mg logo 2.png" alt="Metro Guards Logo" style={{ maxWidth: "80px", height: "auto" }} />
</Link>
                                <div className="space20" />
                                <p>
CS Hub, 5, Level 1/34 Commercial Rd, Caroline Springs VIC 3023</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Corporate Compliance</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">Security License and Insurance</Link></li>
                                        <li><Link href="#">Terms and Conditions</Link></li>
                                        <li><Link href="#">Condition of Hires</Link></li>
                                        <li><Link href="#">FAQs</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Slavery Statement</Link></li>
                                        <li><Link href="#">Service Coverage</Link></li>
                                        <li><Link href="#">Forms and Downloads</Link></li>



                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Careers</h3>
                                <div className="footer-menu">
                                    <p>To find out more about current job opportunities at Metropolitan Guard Services,</p>
                                     <Link href="https://metroguards.com.au/careers/">Click Here</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3>Get in touch</h3>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                        </div>
                                        <Link href="#">1300 73 11 73</Link>
                                        <Link href="#">UK: +61 02 2585 0556</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="#">admin@metroguards.com.au</Link>
                                        {/* <Link href="#">Info@consultia.co</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2">
                        <div className="col-lg-6">
                            <p>© 2025 All Rights Reserved to Metro Gaurds.</p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="social social2">
                                <ul>
                                    <li><Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
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
    )
}
