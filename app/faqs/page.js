import CounterUp from "@/components/elements/CounterUp"
import Faq1 from "@/components/elements/Faq1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQs">
                <div className="faqs-area section-padding inner-font-1 inner-faq-1">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10">
                                <div className="heading2 mb-5">
                                    <small className="heading-top inner-heading-top">
                                        <img src="/assets/img/icons/hands.svg" alt="" />Our Success in Numbers
                                    </small>
                                    <h2>Question You Need To Know</h2>
                                    <p>
                                        Experienced, knowledgeable professionals in Property Tax Consulting. 
                                        Our team of Property Tax Consultants is committed to saving you money 
                                        by obtaining the lowest possible assessed value for your commercial or residential properties.
                                    </p>
                                </div>
                                <div className="faqs justify-content-center">
                                    <Faq1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
