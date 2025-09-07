import Layout from "@/components/layout/Layout"
import SouthMelbourneClient from "./SouthMelbourneClient"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} 
                breadcrumbTitle="SECURITY GUARDS SOUTH MELBOURNE"
                mainTitle="Professional Security Guards in South Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for South Melbourne Homes & Businesses"
            >
                <SouthMelbourneClient />
            </Layout>
        </>
    )
}