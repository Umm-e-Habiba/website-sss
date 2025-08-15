import Link from "next/link"

export default function TaxBusiness() {
    return (
        <>
        
            <div className="tax-business section-padding2" style={{ backgroundColor: '#1E2247' }} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Integrated Security Services
</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span >Melbourne's Expert</span> Security Guards & Mobile Patrols</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/hiring.png" alt="" />
                                </div>
                                <h3 style={{ color: '#FDC51A' }}>Melbourne Security Guard for Hire</h3>
                               <p>We strongly believe that <span className="highlight">security officers</span> are not just your <span className="highlight">protectors</span>; they act as <span className="highlight">guardians in emergencies</span>.</p>
                                <Link href="adhoc-security-services" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/security.png" alt="" />
                                </div>
                                <h3 style={{ color: '#FDC51A' }}>Melbourne Mobile Patrol Security Service
</h3>
                               <p>We know managing and protecting <span className="highlight">commercial buildings</span>, <span className="highlight">huge events</span>, and construction sites is difficult because of their large premises.</p>
                                <Link href="/mobile-patrol-security" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/warehouse.png" alt="" />
                                </div>
                                <h3 style={{ color: '#FDC51A' }}>Warehouse Security Guards Melbourne</h3>
                               <p>Metro Guards know <span className="highlight">warehouses and storage facilities</span> are high-risk and must be protected from <span className="highlight">theft</span> due to valuable stock.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/patrol.png" alt="" />
                                </div>
                                <h3 style={{ color: '#FDC51A' }}>Construction Site Security Guard</h3>
                                <p>Metro Guards is ideal for <span className="highlight">construction site security</span>, protecting <span className="highlight">costly machinery and materials</span> from theft and vandalism.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}