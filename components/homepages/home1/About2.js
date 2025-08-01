
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"

export default function About2() {
    return (
        <>
            <div className="about-area section-padding bg5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="mr50">
                                <div className="heading2 no-margin-heading">
                                    <small data-aos="fade-right" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />We Are Here For Your Tax
                                        Relief.</small>
                                    <h2 data-aos="fade-right" data-aos-duration={800}>Why Choose Metro Security Guards Services in Melbourne?</h2>
                                    <p data-aos="fade-right" data-aos-duration={1000}>    Metro Guards is one of the most trusted security companies among the top private security firms in Melbourne VIC, Australia. We provide specialized security service solutions to our clients. Choose us because:

                                    </p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
    <li>Protect your property and loved ones by delivering reliable on-call security services 24/7</li>
    <li>Licensed security guards</li>
    <li>Best private security guard</li>
    <li>Highly trained to respond to emergencies</li>
    {/* <li>Security guards have law enforcement training to avoid security concerns in Melbourne</li> */}
    <li>Cost-effective security guard solution</li>
    {/* <li>Customised security solutions to your security needs</li> */}
    <li>Our guards are licensed, bonded, and insured</li>
    {/* <li>Have close contact with emergency departments and police stations</li> */}
  </ul>
                                    <div className="space50" />
                                    <div className="button-group" data-aos="fade-right" data-aos-duration={1200}>
                                        <Link className="theme-btn-2" href="#">More About Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter2 ml50 position-relative">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={600}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter21.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={4300}/>+</h2>
                                            <p>Clients So For</p>
                                        </div>
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={800}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter22.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={3}/>+</h2>
                                            <p>Awards So For</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-counter mt-5" data-aos="zoom-out" data-aos-duration={1000}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter23.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={8}/>+</h2>
                                            <p>Memberships So For</p>
                                        </div>
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={1200}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter24.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={90}/>%</h2>
                                            <p>Meetings So For</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="corner-right-bottom-shape2 position-absolute">
                                    <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                </div>
                                <div className="corner-shape2-left position-absolute">
                                    <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-none">
                            <div className="mr50">
                                <div className="heading2 no-margin-heading">
                                    <small className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />We Are Here For Your
                                        Tax
                                        Relief.</small>
                                    <h2>We Handle The Most Tedious Bookkeeping Tasks of Your Business Operations.</h2>
                                    <p>Experienced, knowledgeable professionals in Property Tax Consulting. Our team of Property
                                        Tax
                                        Consultants is committed to saving you money by obtaining the lowest possible assessed
                                        value for your
                                        commercial or residential properties.
                                    </p>
                                    <div className="space50" />
                                    <Link className="theme-btn-2" href="#">More About Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
