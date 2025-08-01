
import Link from "next/link"

export default function Blog() {
    return (
        <>
            <div className="blog-area blog2 section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="heading2 text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Need a quote? Get in Touch</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">More</span> about Metro Gaurds</h2>
                                {/* <p>Workplace health and safety is the foremost priority at Metropolitan Guards Security. Through a meticulously designed way of induction, preparation, and assessment, we make certain that every personnel at Metropolitan Guards Security is aware of their rights and duties regarding occupational health and safety and environmental hazards and protection. </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-blog blog-md ">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/awareness 3.png" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Stories</Link></li>
                                    </ul>
                                    <h3><Link href="/single">How we raise awareness and serve our community</Link>
                                    </h3>
                                    <p>Metro Security Experts, based in Melbourne, are committed to building a healthier, more aware society.
We proudly support The Royal Melbourne Hospital for its excellence in healthcare and Beyond Blue for mental health advocacy.
We also stand with White Ribbon to help end violence against women and promote respect and equality.</p>
                                    {/* <Link href="#" className="theme-btn-4">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-blog blog-md">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/ab.png" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Need a quote? Get in Touch</Link></li>
                                    </ul>
                                    <h3><Link href="/single">Our Membership / Health & Safety.</Link></h3>
                                    <p>Workplace health and safety is the foremost priority at Metropolitan Guards Security. Through a meticulously designed way of induction, preparation, and assessment, we make certain that every personnel at Metropolitan Guards Security is aware of their rights and duties regarding occupational health and safety and environmental hazards.</p>
                                    {/* <Link href="#" className="theme-btn-4">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-blog blog-md">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/local.webp" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Need a quote? Get in Touch</Link></li>
                                    </ul>
                                    <h3><Link href="/single">Why Does Local Security Company Matter in Security Services?</Link>
                                    </h3>
                                    <p>Choosing a expert security services company near you has unquestionable advantages.Local companies understand the unique security threats faced by people and businesses in your area.
                                    As Melbourne’s most trusted security contractor, Metro Guard understands local crime trends and security challenges.</p>
                                    {/* <Link href="#" className="theme-btn-4">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                </div>
                         
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
