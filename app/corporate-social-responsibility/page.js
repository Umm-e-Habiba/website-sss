import Layout from "@/components/layout/Layout"

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT METRO GUARDS">
        <div>
          {/*===== Our Values Section Only =====*/}
          <div className="section-padding">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <div className="heading2 no-margin-heading">
                    <h2>CORPORATE SOCIAL RESPONSIBILITY</h2>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="heading2 no-margin-heading">
                    <p>
                       We ensure to play our part in making a healthy and sustainable society believing that a prosperous society promotes awareness and fosters the building of an ideal community. This is the only reason we support “ The Royal Melbourne Hospital”, which aligns with our credo of creating an all-in healthy and secure society by dedicatedly serving those in need. Moreover, we also join hands with “ Beyond Blue”, a non-profit organisation that raises awareness against mental health issues and provides the best possible support for the suffering.
                    </p>
                    <p>We at Metropolitan guards believe women are vital to a community and should be treated with the utmost respect. In favour of this ideology, we support the “White Ribbon” in its efforts to support violence against women.</p>
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
