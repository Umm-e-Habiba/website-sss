import Layout from "@/components/layout/Layout"
import EastMelbourneClient from "./EastMelbourneClient"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} 
                breadcrumbTitle="SECURITY GUARDS EAST MELBOURNE"
                mainTitle="Professional Security Guards in East Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for East Melbourne Homes & Businesses"
            >
                <EastMelbourneClient />
            </Layout>
        </>
    )
}
