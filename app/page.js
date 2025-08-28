import Layout from "@/components/layout/Layout"

import About from "@/components/homepages/home1/About"
import About2 from "@/components/homepages/home1/About2"
import Blog from "@/components/homepages/home1/Blog"
import CaseStudy from "@/components/homepages/home1/CaseStudy"
//import Pricing from "@/components/homepages/home1/Pricing"
import Subscribe from "@/components/homepages/home1/Subscribe"
import TaxBusiness from "@/components/homepages/home1/TaxBusiness"
import Testimonial from "@/components/homepages/home1/Testimonial"
import Welcome from "@/components/homepages/home1/Welcome"
import HeroBanner from "@/components/homepages/home1/HeroBanner";
import ServicesSlider from "@/components/homepages/home1/Services";

export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <HeroBanner
                // optional overrides
                // titleLines={["Security.", "Cleaning.", "Maintenance."]}
                // kicker="Integrated Business Solutions"
                // cta={{ label: "Contact Us", href: "/contact" }}
                // image="/assets/hero/staff-triplet.png"
                // social={{ youtube: "#", instagram: "#", linkedin: "#" }}
                />
                
                <About />
                <ServicesSlider />
                 <About />
                <CaseStudy />
                <About2 />
                <Testimonial />
                <Blog />
                <Subscribe />
            </Layout>
        </>
    )
}