import Layout from "@/components/layout/Layout"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT METROGUARDS">
                <div>
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Our stories how we establish our company.
                                            </small>
                                            <h2>PROVIDING SECURITY WITH INTEGRITY!</h2>
                                            <p>
                                                As the premier security company in Australia, our mission is to provide customers with cost-effective solutions of the highest quality and the best security guard services using the latest technologies with global connections whilst targeting enhanced security in the Melbourne and Sydney security industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/about23.png" alt="" style={{ height: "700px", width: "600px", objectFit: "cover" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-inner-1 section-padding2 inner-font-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Metro Guards Services
                                        </small>
                                        <h2>
                                            Security Services in Melbourne with a highly responsive, professional and industry-leading security team.
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/red-carpet.png" alt="" />
                                        </div>
                                        <h3>Event Security Guards in Melbourne</h3>
                                        <p>
                                            Ensure your event runs smoothly and safely with our professional event security guards available across Melbourne.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/policeman.png" alt="" />
                                        </div>
                                        <h3>Private Security guard hire Melbourne</h3>
                                        <p>
                                            Hire trusted private security guards in Melbourne for personal protection, property safety, and peace of mind around the clock.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/construction.png" alt="" />
                                        </div>
                                        <h3>Construction site security guards</h3>
                                        <p>
                                            Protect your equipment, materials, and workers with reliable construction site security guards across Melbourne's job sites.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/corporate.png" alt="" />
                                        </div>
                                        <h3>Corporate security guards</h3>
                                        <p>
                                            Maintain a safe and professional environment with experienced corporate security guards serving businesses throughout Melbourne.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/patrol.png" alt="" />
                                        </div>
                                        <h3>Mobile security patrols Melbourne</h3>
                                        <p>
                                            Deter threats and respond swiftly with our 24/7 mobile security patrol services available throughout Melbourne.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/police.png" alt="" />
                                        </div>
                                        <h3>K9 security guards Melbourne</h3>
                                        <p>
                                            Enhance your security with highly trained K9 security guards for advanced threat detection across Melbourne properties.
                                        </p>
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