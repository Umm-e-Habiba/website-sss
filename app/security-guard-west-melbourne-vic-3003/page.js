import Layout from "@/components/layout/Layout"
import WestMelbourneClient from "./WestMelbourneClient"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} 
                breadcrumbTitle="SECURITY GUARDS WEST MELBOURNE"
                mainTitle="Professional Security Guards in West Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for West Melbourne Homes & Businesses"
            >
                <WestMelbourneClient />
            </Layout>
        </>
    )
}