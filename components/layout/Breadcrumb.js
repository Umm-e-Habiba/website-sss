export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div 
                className="inner-1 bg-13" 
                id="home"
                style={{
                    backgroundImage: "url('/assets/img/header image.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="inner-title text-center">
                                <p>{breadcrumbTitle}</p>
                                <h2>Metroguards security service in Melbourne</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}