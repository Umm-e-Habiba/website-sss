import Layout from "@/components/layout/Layout"
import NorthMelbourneClient from "./NorthMelbourneClient"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} 
                breadcrumbTitle="SECURITY GUARDS NORTH MELBOURNE"
                mainTitle="Professional Security Guards in North Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for North Melbourne Homes & Businesses"
            >
                <NorthMelbourneClient />
            </Layout>
        </>
    )
}