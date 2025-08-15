
import Link from "next/link"

export default function About() {
    return (
        <>

            <div className="about-area section-padding bg5-left">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-bg-21 mr50" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="about-bg-main-img position-relative top-left-polygon-0">
                                    <img src="/assets/img/about/about img.webp" alt="" />
                                    {/* <div className="corner-right-bottom-shape2 position-absolute">
                                        <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                    </div> */}
                                    {/* <div className="corner-shape2-left position-absolute">
                                        <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2 no-margin-heading ml50">
                                <small data-aos="fade-left" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Security Company in Melbourne</small>
                                <h2 data-aos="fade-left" data-aos-duration={800}>We Deliver The Best Security Services in Melbourne.</h2>
                                <p data-aos="fade-left" data-aos-duration={1000}>Metro Guards has served its clients in Melbourne, Victoria, and its suburbs for years. We have a rigorous procedure for hiring and training our guards. Our highly professional security guards can exceptionally address the safety needs of individual, corporate, institutional, residential, and commercial clients.
                                </p>
                                <p data-aos="fade-left" data-aos-duration={1000}>  We have proven strategies for assessing risks and designing tailored security solutions. We are also your go-to security solution and have a proven record of providing the most result-oriented emergency security services.</p>
                                <div className="space50" />
                               <div className="button-group" data-aos="fade-left" data-aos-duration={1200}>
    <Link 
        className="theme-btn-2" 
        href="/our-values"
        style={{
            backgroundColor: '#FDC51A',
            color: '#000',
            borderColor: '#FDC51A'
        }}
    >
        More About Us <span><i className="fa-solid fa-arrow-right" /></span>
    </Link>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
