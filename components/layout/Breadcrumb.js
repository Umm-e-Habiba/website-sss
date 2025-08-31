export default function Breadcrumb({ 
    breadcrumbTitle, 
    mainTitle, 
    subtitle, 
    backgroundImage = "/assets/img/about/values.jpg" 
}) {
    return (
        <>
            <div 
                className="breadcrumb-section" 
                id="home"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 75%, rgba(30,34,71,0.8) 100%), url('${backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    position: "relative",
                    paddingTop: "100px",
                    paddingBottom: "80px",
                    minHeight: "280px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {/* Animated Background Elements */}
                <div 
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        width: "100px",
                        height: "100px",
                        background: "rgba(253, 197, 26, 0.1)",
                        borderRadius: "50%",
                        animation: "float 6s ease-in-out infinite"
                    }}
                />
                <div 
                    style={{
                        position: "absolute",
                        top: "60%",
                        right: "15%",
                        width: "80px",
                        height: "80px",
                        background: "rgba(253, 197, 26, 0.08)",
                        borderRadius: "50%",
                        animation: "float 8s ease-in-out infinite reverse"
                    }}
                />
                <div 
                    style={{
                        position: "absolute",
                        top: "40%",
                        right: "5%",
                        width: "60px",
                        height: "60px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        animation: "float 7s ease-in-out infinite"
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content text-center">
                                {/* Breadcrumb Badge */}
                                <div 
                                    style={{
                                        display: "inline-block",
                                        background: "rgba(253, 197, 26, 0.15)",
                                        color: "#fdc51a",
                                        padding: "8px 20px",
                                        borderRadius: "25px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        letterSpacing: "0.5px",
                                        textTransform: "uppercase",
                                        marginBottom: "20px",
                                        border: "1px solid rgba(253, 197, 26, 0.3)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    {breadcrumbTitle}
                                </div>

                                {/* Main Title */}
                                <h1 
                                    style={{
                                        fontSize: "clamp(2rem, 4vw, 3rem)",
                                        fontWeight: "600",
                                        color: "#ffffff",
                                        lineHeight: "1.2",
                                        marginBottom: "15px",
                                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: mainTitle || "Our <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Values</span> Define Our Excellence"
                                    }}
                                />

                                {/* Subtitle */}
                                {subtitle && (
                                    <p 
                                        style={{
                                            fontSize: "1.1rem",
                                            color: "rgba(255, 255, 255, 0.85)",
                                            lineHeight: "1.5",
                                            marginBottom: "25px",
                                            maxWidth: "500px",
                                            margin: "0 auto 25px auto",
                                            fontWeight: "300"
                                        }}
                                    >
                                        {subtitle}
                                    </p>
                                )}

                                {/* Decorative Line */}
                                <div 
                                    style={{
                                        width: "80px",
                                        height: "4px",
                                        background: "linear-gradient(90deg, #fdc51a, #f39c12)",
                                        margin: "0 auto",
                                        borderRadius: "2px",
                                        boxShadow: "0 2px 10px rgba(253, 197, 26, 0.4)"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div 
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "rgba(255, 255, 255, 0.7)",
                        animation: "bounce 2s infinite"
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
                    40% { transform: translateX(-50%) translateY(-10px); }
                    60% { transform: translateX(-50%) translateY(-5px); }
                }

                .breadcrumb-section {
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .breadcrumb-section {
                        padding-top: 80px !important;
                        padding-bottom: 60px !important;
                        min-height: 240px !important;
                        background-attachment: scroll !important;
                    }
                }

                @media (max-width: 480px) {
                    .breadcrumb-content h1 br {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}