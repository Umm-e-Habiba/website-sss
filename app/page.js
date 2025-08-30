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
import { Hero } from "@/components/ui/hero-1";
import ServicesSlider from "@/components/homepages/home1/Services";
import IndustrySection from "@/components/homepages/home1/industry";
import Gallery4 from "@/components/ui/gallery4";




export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero 
                    title="Professional Security Guards & Services in Melbourne"
                    subtitle="Trusted security solutions across Melbourne. Professional guards, mobile patrol, rapid response - keeping your business, property and people safe 24/7."
                    eyebrow="Metro Guards Australia"
                    ctaLabel="Contact Us Now"
                    ctaHref="/contact-us"
                />

                <ServicesSlider />
                <Gallery4 />
                <IndustrySection/>
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