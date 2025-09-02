'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import "../contacts/contact-styles.css"

export default function AssetProtectionPage() {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const services = [
        {
            title: "Educational Institutions Protection",
            icon: "🏫",
            iconSymbol: "🎓",
            description: "Comprehensive security for schools, universities and educational facilities",
            details: "Ensuring the safety of students, staff, and school property with comprehensive security measures tailored for educational environments. Our trained guards understand the unique challenges of educational settings."
        },
        {
            title: "Corporate Asset Security", 
            icon: "🏢",
            iconSymbol: "🔐",
            description: "Advanced protection for corporate offices and business assets",
            details: "Protecting your business assets, from sensitive documents to physical equipment, with advanced corporate security solutions. We specialize in maintaining secure business environments while ensuring smooth operations."
        },
        {
            title: "Healthcare Facility Security",
            icon: "🏥",
            iconSymbol: "⚕️",
            description: "Specialized security for healthcare and medical facilities",
            details: "Safeguarding the well-being of staff, patients, and medical equipment with specialized healthcare security protocols. Our guards are trained to handle sensitive medical environments with care and professionalism."
        },
        {
            title: "Retail & Shopping Center Protection",
            icon: "🛍️",
            iconSymbol: "🛡️",
            description: "Comprehensive security for retail environments and shopping centers",
            details: "Ensuring a safe shopping environment for customers and securing high-value merchandise with retail security expertise. We provide visible deterrence while maintaining a welcoming atmosphere for customers."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ASSET PROTECTION & SECURITY SERVICES"
                mainTitle="Professional Asset Protection Services"
                subtitle="Comprehensive Asset Security Solutions in Melbourne - Protect What Matters Most"
            >
                <div>
                  {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                                    <div className="hero-content">
                                        <div className="subtitle mb-4">
                                            <span 
                                                className="badge px-4 py-2" 
                                                style={{
                                                    backgroundColor: '#fdc51a', 
                                                    color: '#1e2247', 
                                                    fontWeight: '600',
                                                    fontSize: '0.85rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    borderRadius: '25px'
                                                }}
                                            >
                                                🛡️ YOUR TRUSTED PROTECTION PARTNER
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
                                            }}
                                        >
                                            ASSET PROTECTION<br />
                                            <span style={{color: '#fdc51a'}}>& SECURITY SERVICES</span>
                                        </h1>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem', 
                                                lineHeight: '1.6',
                                                maxWidth: '500px'
                                            }}
                                        >
                                            At Metro Guards, we understand the importance of safeguarding your valuable assets. Whether it's your business, home, or personal belongings, comprehensive protection is critical.
                                        </p>
                                        <p 
                                            className="mb-5" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1rem',
                                                lineHeight: '1.6',
                                                maxWidth: '480px'
                                            }}
                                        >
                                            Our team of highly skilled professionals provides reliable security services tailored to meet your unique needs, ensuring your assets remain secure with complete peace of mind.
                                        </p>
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
                            <a 
                                href="/get-quotation" 
                                                className="btn btn-primary px-5 py-3"
                                style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                    border: 'none',
                                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                }}
                                            >
                                                📋 GET QUOTATION
                            </a>
                            <a 
                                href="tel:1300731173" 
                                                className="btn btn-outline-dark px-5 py-3"
                                style={{
                                                    borderColor: '#1e2247',
                                                    color: '#1e2247',
                                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    borderWidth: '2px'
                                                }}
                                            >
                                                📞 CALL US NOW
                            </a>
                        </div>
                                        
                                        {/* Trust Indicators */}
                                        
                                        </div>
                                    </div>
                                
            <div className="col-lg-6">
                                    <div className="hero-image position-relative mt-5 mt-lg-0">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                                            }}
                                        >
                                            <img 
                                                src="/assets/img/bg/security img.webp" 
                                                alt="Professional Asset Protection Team" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            
                                            {/* Floating Badge */}
                                            <div 
                                                className="floating-badge position-absolute"
                                                style={{
                                                    top: '30px',
                                                    right: '30px',
                                                    backgroundColor: '#1e2247',
                                                    color: '#ffffff',
                                                    padding: '15px 20px',
                                                    borderRadius: '15px',
                                                    fontWeight: '700',
                                                    fontSize: '0.9rem',
                                                    boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                                }}
                                            >
                                                🥇 Metro Guards
                                </div>
                                            
                                            {/* Bottom Badge */}
                                            <div 
                                                className="bottom-badge position-absolute"
                                                style={{
                                                    bottom: '30px',
                                                    left: '30px',
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '12px 20px',
                                                    borderRadius: '12px',
                                                    fontWeight: '700',
                                                    fontSize: '0.85rem',
                                                    boxShadow: '0 8px 20px rgba(253, 197, 26, 0.4)'
                                                }}
                                            >
                                                ✅ Licensed & Insured
                                        </div>
                                    </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="decoration-circle position-absolute"
                                            style={{
                                                top: '-20px',
                                                left: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                        <div 
                                            className="decoration-square position-absolute"
                                            style={{
                                                bottom: '-30px',
                                                right: '-30px',
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#1e2247',
                                                borderRadius: '15px',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/*===== Our Services Section =====*/}
                    <div className="services-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/bg/security img.webp" 
                                                alt="Professional Asset Protection Team" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div 
                                                className="overlay-badge position-absolute"
                                                style={{
                                                    bottom: '30px',
                                                    left: '30px',
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '15px 25px',
                                                    borderRadius: '10px',
                                                    fontWeight: '700',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                ✅ Licensed & Insured
                                        </div>
                                    </div>
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    🛡️
                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Comprehensive Asset Coverage</span>
                                                    </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    👨‍💼
                                                    </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Professional Security Guards</span>
                                                </div>
                                            <div className="feature-item d-flex align-items-center">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    🔧
                                            </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Protection Plans</span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    🛡️ OUR SERVICES
                                                </span>
                                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Our Asset Protection Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We offer a comprehensive range of asset protection services designed to protect everything that matters to you.
                                            </p>
                                                    </div>
                                        
                                        {/* Expandable Service Cards */}
                                        <div className="services-accordion">
                                            {services.map((service, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeService === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeService === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleService(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="service-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff',
                                                                        fontSize: '1.5rem'
                                                                    }}
                                                                >
                                                                    {service.iconSymbol}
                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{service.title}</h5>
                                            </div>
                                        </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeService === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeService === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeService === index ? '−' : '+'}
                                                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                                                    {activeService === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                borderLeft: '4px solid #fdc51a',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {service.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {service.details}
                                            </p>
                    </div>

                                                            {/* Additional service features */}
                                                            <div className="service-features mt-3 pt-3" style={{borderTop: '1px solid #f0f0f0'}}>
                            <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Professional trained staff</span>
                                    </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>24/7 availability</span>
                                </div>
                            </div>
                                                                    <div className="col-md-6">
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Licensed & insured</span>
                                        </div>
                                                                        <div className="feature-item d-flex align-items-center mb-2">
                                                                            <span style={{color: '#fdc51a', fontSize: '0.9rem', marginRight: '8px'}}>✓</span>
                                                                            <span style={{fontSize: '0.85rem', color: '#6c757d'}}>Customized solutions</span>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        </div>
                                                    )}
                                    </div>
                                            ))}
                                </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Importance of Asset Protection Section =====*/}
                    <div className="why-choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-exclamation me-2"></i>
                                            CRITICAL SECURITY SOLUTIONS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        The Importance of Asset Protection in Today's Risky Environment
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        In today's unstable environment, safeguarding your valuable assets is paramount. Asset protection prevents unauthorized access and damage to your physical and digital assets.
                                    </p>
                                                    </div>
                                                </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-shield-fill-check fs-3"></i>
                                                    </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Physical Security Protection</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Advanced surveillance, access control, and patrolling techniques to protect your physical assets from theft, vandalism, and unauthorized access.
                                            </p>
                                                </div>
                                                    </div>
                                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-laptop fs-3"></i>
                                                    </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Cybersecurity Measures</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                State-of-the-art encryption and continuous monitoring to safeguard your digital assets from cyber threats and data breaches.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-eye-fill fs-3"></i>
                                    </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Risk Assessment</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Proactive threat identification and prevention strategies to address risks before they escalate into real security threats.
                                            </p>
                                </div>
</div>
                                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div 
                                        className="reason-card h-100 p-4 d-flex align-items-start"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div 
                                            className="reason-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '12px',
                                                color: '#1e2247'
                                            }}
                                        >
                                            <i className="bi bi-people fs-3"></i>
                                            </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Professional Team</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Highly trained security professionals dedicated to protecting your assets with expertise, reliability, and unwavering commitment to excellence.
                                            </p>
</div>
                                                </div>
                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                    {/*===== Statistics & Advantages Section =====*/}
                    <div className="stats-advantages-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6">
                                    <div className="advantages-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <i className="bi bi-lightning me-2"></i>
                                                WHY CHOOSE METRO GUARDS
                                            </span>
</div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Why Choose Metro Guards for Asset Protection
                                        </h2>
                                        <p className="lead mb-4" style={{color: '#6c757d'}}>
                                                Our commitment to excellence and tailored security solutions makes us Melbourne's trusted security partner with decades of proven experience.
                                            </p>
                                        
                                        <div className="advantages-list">
                                            {[
                                                "Decades of experience in asset protection",
                                                "Customized security plans for every client", 
                                                "Highly skilled and trained professionals",
                                                "Adaptive solutions that evolve with threats",
                                                "Comprehensive coverage and peace of mind"
                                            ].map((advantage, index) => (
                                                <div key={index} className="advantage-item d-flex align-items-center mb-3">
                                                    <div 
                                                        className="check-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            backgroundColor: '#fdc51a',
                                                            borderRadius: '50%',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        <i className="bi bi-check-lg fw-bold"></i>
                                                </div>
                                                    <span style={{color: '#1e2247', fontWeight: '500'}}>{advantage}</span>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="stats-grid">
                                        <div className="row g-4">
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-award"></i>
                            </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        50+
                        </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Years Experience
                    </div>
                        </div>
                    </div>

                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-shield-check"></i>
                </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
    24/7
            </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Protection Service
        </div>
                        </div>
                        </div>
                                            
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-gear-fill"></i>
                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        100%
                </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Customized Plans
            </div>
                        </div>
                        </div>
                                            
                                            <div className="col-6">
                                                <div 
                                                    className="stat-card text-center p-4 h-100"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                        border: '1px solid #e9ecef',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div 
                                                        className="stat-icon mb-3"
                                                        style={{
                                                            color: '#fdc51a',
                                                            fontSize: '2.5rem'
                                                        }}
                                                    >
                                                        <i className="bi bi-buildings"></i>
                    </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
    500+
                </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Protected Assets
            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                    {/*===== Old sections removed for cleaner modern design =====*/}
                    <div className="hidden-sections" style={{display: 'none'}}>
                    </div>

                                        {/*===== Contact Section =====*/}
                    <div className="contact-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact-content me-4">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                🛡️ GET PROTECTED TODAY
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Contact Metro Guards for Asset Protection Services
                                        </h2>
                                        <p className="lead mb-4" style={{color: '#6c757d'}}>
                                            Ready to secure your assets with the best in the business? Metro Guards offers expert asset protection services in Melbourne, customized to your needs.
                                        </p>
                                        
                                        <div className="contact-methods">
                                            <div className="contact-card mb-4 p-4" style={{backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #e1e8ed'}}>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon me-3" style={{width: '50px', height: '50px', backgroundColor: '#1e2247', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff'}}>
                                                        <i className="bi bi-telephone" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5 className="mb-1" style={{color: '#1e2247', fontWeight: '600'}}>Call Us Now</h5>
                                                        <div className="contact-value" style={{fontSize: '1.1rem', fontWeight: '600', color: '#1e2247'}}>1300 73 11 73</div>
                                                        <small style={{color: '#6c757d'}}>Available 24/7 for emergencies</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="contact-card mb-4 p-4" style={{backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #e1e8ed'}}>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon me-3" style={{width: '50px', height: '50px', backgroundColor: '#fdc51a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e2247'}}>
                                                        <i className="bi bi-envelope" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5 className="mb-1" style={{color: '#1e2247', fontWeight: '600'}}>Email Us</h5>
                                                        <div className="contact-value" style={{fontSize: '1.1rem', fontWeight: '600', color: '#1e2247'}}>info@metrogards.com.au</div>
                                                        <small style={{color: '#6c757d'}}>Quick response within 2 hours</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="contact-card p-4" style={{backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #e1e8ed'}}>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon me-3" style={{width: '50px', height: '50px', backgroundColor: '#fdc51a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e2247'}}>
                                                        <i className="bi bi-geo-alt" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <div className="card-content">
                                                        <h5 className="mb-1" style={{color: '#1e2247', fontWeight: '600'}}>Service Area</h5>
                                                        <div className="contact-value" style={{fontSize: '1.1rem', fontWeight: '600', color: '#1e2247'}}>Melbourne & Suburbs</div>
                                                        <small style={{color: '#6c757d'}}>Complete metropolitan coverage</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div className="col-lg-6">
                                    <div className="modern-form-wrapper ms-4">
                                        <div className="form-header text-center">
                                            <div className="form-badge">
                                                <span className="badge-icon">📋</span>
                                                <span>Get Your Security Quote</span>
                                            </div>
                                            <h3 className="form-title">Request a Free Consultation</h3>
                                            <p className="form-subtitle">
                                                Get personalized security solutions tailored to your specific asset protection needs.
                                            </p>
                                        </div>
                                        
                                        <form className="classic-contact-form">
                                            <div className="form-section">
                                                <div className="form-grid">
                                                    <div className="form-field">
                                                        <div className="classic-label">
                                                            <span className="label-title">Your Name</span>
                                                            <span className="required-asterisk">*</span>
                                                        </div>
                                                        <div className="input-container">
                                                            <input 
                                                                type="text" 
                                                                className="classic-input" 
                                                                placeholder="Enter your full name"
                                                                required
                                                            />
                                                            <div className="input-border-effect"></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-field">
                                                        <div className="classic-label">
                                                            <span className="label-title">Your Email</span>
                                                            <span className="required-asterisk">*</span>
                                                        </div>
                                                        <div className="input-container">
                                                            <input 
                                                                type="email" 
                                                                className="classic-input" 
                                                                placeholder="Enter your email address"
                                                                required
                                                            />
                                                            <div className="input-border-effect"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-section">
                                                <div className="form-grid">
                                                    <div className="form-field">
                                                        <div className="classic-label">
                                                            <span className="label-title">Phone Number</span>
                                                            <span className="required-asterisk">*</span>
                                                        </div>
                                                        <div className="input-container">
                                                            <input 
                                                                type="tel" 
                                                                className="classic-input" 
                                                                placeholder="Enter your phone number"
                                                                required
                                                            />
                                                            <div className="input-border-effect"></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-field">
                                                        <div className="classic-label">
                                                            <span className="label-title">Service Type</span>
                                                            <span className="required-asterisk">*</span>
                                                        </div>
                                                        <div className="select-container">
                                                            <select className="classic-select" required>
                                                                <option value="">Please select a service</option>
                                                                <option value="asset-protection">Asset Protection</option>
                                                                <option value="corporate-security">Corporate Security</option>
                                                                <option value="event-security">Event Security</option>
                                                                <option value="mobile-patrols">Mobile Patrols</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                            <div className="select-arrow">
                                                                <svg viewBox="0 0 24 24" fill="none">
                                                                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                            </div>
                                                            <div className="input-border-effect"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-section">
                                                <div className="form-grid">
                                                    <div className="form-field full-width">
                                                        <div className="classic-label">
                                                            <span className="label-title">Your Message</span>
                                                            <span className="required-asterisk">*</span>
                                                        </div>
                                                        <div className="textarea-container">
                                                            <textarea 
                                                                className="classic-textarea" 
                                                                placeholder="Tell us about your security requirements and property details..."
                                                                rows="4"
                                                                required
                                                            ></textarea>
                                                            <div className="input-border-effect"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-footer-section">
                                                <div className="privacy-notice-classic">
                                                    <div className="privacy-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2"/>
                                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                                                        </svg>
                                                    </div>
                                                    <div className="privacy-text">
                                                        <h6>Your Privacy is Protected</h6>
                                                        <p>All information provided is strictly confidential and used only to provide you with accurate security quotes and services.</p>
                                                    </div>
                                                </div>

                                                <div className="submit-section">
                                                    <button type="submit" className="classic-submit-btn">
                                                        <div className="btn-content-classic">
                                                            <div className="btn-icon-classic">
                                                                <svg viewBox="0 0 24 24" fill="none">
                                                                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                            </div>
                                                            <span className="btn-text">SUBMIT REQUEST</span>
                                                        </div>
                                                    </button>
                                                    
                                                    <div className="response-time">
                                                        <span className="clock-icon">🕒</span>
                                                        <span>We typically respond within 2 hours</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add custom styles */}
<style jsx>{`
                        .section-padding {
                            padding: 80px 0;
                        }
                        
                        .contact-section {
                            padding: 60px 0 !important;
                        }
                        
                        .modern-form-wrapper {
                            padding: 35px !important;
                            margin-top: 0 !important;
                        }
                        
                        .form-section {
                            margin-bottom: 20px !important;
                            padding: 15px !important;
                        }
                        
                        .form-title {
                            font-size: 2rem !important;
                            margin-bottom: 10px !important;
                        }
                        
                        .form-subtitle {
                            font-size: 1rem !important;
                            margin-bottom: 0 !important;
                        }
                        
                        .classic-input, .classic-select {
                            height: 48px !important;
                            padding: 12px 16px !important;
                        }
                        
                        .classic-textarea {
                            min-height: 100px !important;
                            padding: 12px 16px !important;
                        }
                        
                        .privacy-notice-classic {
                            padding: 18px !important;
                        }
                        
                        .classic-submit-btn {
                            padding: 15px 40px !important;
                            font-size: 1rem !important;
                        }
                        
                        .contact-card {
                            margin-bottom: 15px !important;
                            padding: 20px !important;
                        }
                        
                        .contact-methods {
                            margin-top: 30px;
                        }
                        
                        .min-vh-75 {
                            min-height: 75vh;
                        }
                        
                        .btn-primary:hover {
                            background-color: #e8b502 !important;
                            transform: translateY(-3px);
                            box-shadow: 0 12px 30px rgba(253, 197, 26, 0.4) !important;
                        }
                        
                        .btn-outline-dark:hover {
                            background-color: #1e2247 !important;
                            border-color: #1e2247 !important;
                            color: #ffffff !important;
                            transform: translateY(-3px);
                            box-shadow: 0 12px 30px rgba(30, 34, 71, 0.3);
                        }
                        
                        .trust-item:hover {
                            transform: translateY(-5px);
        transition: all 0.3s ease;
    }
    
                        .floating-badge {
                            animation: float 3s ease-in-out infinite;
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-10px); }
                        }
                        
                        .service-header:hover {
                            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                        }
                        
                        .reason-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                        }
                        
                        .stat-card:hover {
        transform: translateY(-5px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
                        }
                        
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                max-height: 0;
                                transform: translateY(-10px);
                            }
                            to {
                                opacity: 1;
                                max-height: 200px;
                                transform: translateY(0);
                            }
                        }
                        
                        .accordion-header:hover {
                            background-color: #e9ecef !important;
                            border-color: #fdc51a !important;
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                        }
                        
                        .accordion-content {
                            overflow: hidden;
                        }
                        
                        @media (max-width: 768px) {
                            .section-padding {
                                padding: 60px 0;
                            }
                            
                            .display-4 {
                                font-size: 2.5rem;
                            }
                            
                            .display-5 {
                                font-size: 2rem;
                            }
                            
                            .contact-info-grid {
                                flex-direction: column;
                                gap: 20px;
                            }
                            
                            .cta-buttons .btn {
                                display: block;
                                width: 100%;
                                margin-bottom: 15px;
                            }
    }
`}</style>

                    {/*===== Contact CTA Section =====*/}
                    <div className="contact-cta-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-content text-center text-white">
                                        <div className="subtitle mb-4">
                                            <span className="badge px-4 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600', fontSize: '0.9rem'}}>
                                                <i className="bi bi-shield-check me-2"></i>
                                                PROTECT YOUR ASSETS TODAY
                                            </span>
                                        </div>
                                        <h2 className="display-4 fw-bold mb-4">
                                            Your Trusted Partner in Asset Protection Across Melbourne
                                        </h2>
                                        <p className="lead mb-5" style={{maxWidth: '800px', margin: '0 auto'}}>
                                                        Whether you need to secure physical assets, protect digital information, or safeguard intangible business resources, our tailored solutions offer the highest level of security with experienced professionals.
                                                    </p>
                                        
                                        <div className="cta-buttons mb-5">
                                            <a 
                                                href="/get-quotation" 
                                                className="btn btn-lg me-3 px-5 py-3"
                                                style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    border: 'none',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i className="bi bi-file-earmark-text me-2"></i>GET QUOTATION
                                            </a>
                                            <a 
                                                href="tel:1300731173" 
                                                className="btn btn-outline-light btn-lg px-5 py-3"
                                                style={{
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i className="bi bi-telephone me-2"></i>CALL US NOW
                                            </a>
                                        </div>
                                        
        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="contact-info-grid d-flex justify-content-around text-center flex-wrap">
                                                    <div className="contact-info-item mb-3">
                                                        <div 
                                                            className="contact-icon mb-3 mx-auto d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                                borderRadius: '50%',
                                                                fontSize: '2rem'
                                                            }}
                                                        >
                                                            <i className="bi bi-shield-check"></i>
                                    </div>
                                                        <h6 className="text-white mb-2 fw-bold">Complete Protection</h6>
                                                        <small className="text-white" style={{opacity: '0.8'}}>Physical & Digital Assets</small>
                                </div>
                                                    <div className="contact-info-item mb-3">
                                                        <div 
                                                            className="contact-icon mb-3 mx-auto d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                                borderRadius: '50%',
                                                                fontSize: '2rem'
                                                            }}
                                                        >
                                                            <i className="bi bi-people"></i>
                            </div>
                                                        <h6 className="text-white mb-2 fw-bold">Professional Guards</h6>
                                                        <small className="text-white" style={{opacity: '0.8'}}>Fully trained & licensed</small>
                        </div>
                                                    <div className="contact-info-item mb-3">
                                                        <div 
                                                            className="contact-icon mb-3 mx-auto d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                                borderRadius: '50%',
                                                                fontSize: '2rem'
                                                            }}
                                                        >
                                                            <i className="bi bi-gear-fill"></i>
                                                        </div>
                                                        <h6 className="text-white mb-2 fw-bold">Customized Plans</h6>
                                                        <small className="text-white" style={{opacity: '0.8'}}>Tailored solutions</small>
                                                    </div>
                                                    <div className="contact-info-item mb-3">
                                                        <div 
                                                            className="contact-icon mb-3 mx-auto d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                                borderRadius: '50%',
                                                                fontSize: '2rem'
                                                            }}
                                                        >
                                                            <i className="bi bi-geo-alt"></i>
                                                        </div>
                                                        <h6 className="text-white mb-2 fw-bold">Melbourne Wide</h6>
                                                        <small className="text-white" style={{opacity: '0.8'}}>Complete coverage</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Gallery4 />
            </Layout>
        </>
    )
}