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
                    <h2>OUR VALUES ARE OUR ASSETS!</h2>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="heading2 no-margin-heading">
                    <p>
                      Metropolitan Security guards Melbourne’ is a dedicated team of responsible and fully
                      insured security services providers across Melbourne with expertise and command in risk
                      and facilities management. Honesty, ethics, responsibility, integrity, transparency,
                      teamwork, and professionalism are the hallmarks of our company. We hire and recruit
                      professional licensed guards who are action‑oriented and have a keen eye for detail.
                    </p>
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
