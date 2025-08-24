import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT METRO">
                <div>
                    {/*===== How Do We Thrive =====*/}
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
                                            <h2>How Do We Thrive?</h2>
                                            <p>
                                                To maintain a top position in the security industry, we provide our employees with a vibrant corporate culture and continuous positive reinforcements to develop a healthy work environment for them as they are our assets, and we genuinely regard their efforts in making us a top hire security company in Melbourne. Our employee praise portal makes our employees realize their worth to our security company and enables them to work more efficiently.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/why mg.webp" alt="" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Fundamental Principles =====*/}
                    <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Success in Numbers
                                        </small>
                                        <h2>Our Fundamental principles</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <h3><Link href="#">Customers First</Link></h3>
                                        <p>We are customer care oriented and dedicated to customer satisfaction.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <h3>Risk Prevention</h3>
                                        <p>We have licensed, experienced officers to detect and reduce risks for safety.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <h3>Threat Response</h3>
                                        <p>Our officers handle threats efficiently using expert conflict resolution techniques.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/*===== Why Choose Metro Guards =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Our commitment to quality service.
                                            </small>
                                            <h2>Our Bond With Our Clients</h2>
                                            <p>
                                                We share a robust bond with our clients by providing them quality security guard services in Melbourne that eventually enhance and polish the image of our security company. Our clients deserve quality service, and we leave no stone unturned to fulfil their expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/about img.webp" alt="" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== End Section =====*/}
                </div>
            </Layout>
        </>
    );
}
