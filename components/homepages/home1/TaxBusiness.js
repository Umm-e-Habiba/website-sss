
import Link from "next/link"

export default function TaxBusiness() {
    return (
        <>
            <div className="tax-business section-padding2 bg6" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Integrated Security Services
</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Metro Guard</span> Top-Rated Security Services in Melbourne</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/hiring.png" alt="" />
                                </div>
                                <h3>Hire Security Guard in Melbourne</h3>
                                <p>Security guards hire to protect your homes, businesses, construction sites, and events to prevent losses. They are the pinnacle of power and safety and are paramount to protecting your residential and commercial properties.  
                                </p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/security.png" alt="" />
                                </div>
                                <h3>Concierge Security Guards Melbourne</h3>
                                <p>At Metro Guards, we offer premium concierge security services designed to meet the specific needs of businesses and residential properties across Melbourne.Creating a safe and welcoming environment for your employees,and guests. </p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/warehouse.png" alt="" />
                                </div>
                                <h3>Warehouse Security Guards Melbourne</h3>
                                <p>At Metro Guards, we understand the critical importance of securing your warehouse operations. With warehousing, shipping, and logistics companies managing large volumes of stock, equipment, and machinery daily.Our warehouse CCTV systems ensure that your property and employees are safe.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/patrol.png" alt="" />
                                </div>
                                <h3>Melbourne Mobile Patrol Security</h3>
                                <p>Metro Security Guards with Mobile Patrol Services in Melbourne are designed to provide an effective and reliable solution to enhance the security of your premises. By conducting regular patrols, we monitor for any signs of suspicious activity, ensuring that your property remains secure at all times. </p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="space20" />
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration={1400}>
                            <Link className="theme-btn-3" href="#">Explore More Services <span><i className="fa-solid fa-arrow-right" /></span></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
