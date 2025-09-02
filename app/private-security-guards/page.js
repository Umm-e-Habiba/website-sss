'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import "../contacts/contact-styles.css"

export default function PrivateSecurityPage() {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const services = [
        {
            title: "On-Demand Guard Services",
            icon: "⚡",
            iconSymbol: "🚀",
            description: "Flexible security solutions for immediate needs with rapid deployment",
            details: "Flexible security solutions for immediate needs, providing rapid deployment of trained personnel whenever required. Our on-demand services ensure you get professional security coverage within hours of your request."
        },
        {
            title: "Skilled Security Personnel", 
            icon: "🛡️",
            iconSymbol: "👨‍💼",
            description: "Highly trained professionals capable of assessing and preventing threats",
            details: "Highly trained professionals capable of assessing risks and preventing security breaches effectively. Our skilled personnel undergo rigorous training in conflict resolution, emergency response, and advanced security protocols."
        },
        {
            title: "On-Site Protection Experts",
            icon: "🏢",
            iconSymbol: "🔒",
            description: "Proactive security professionals specialized in location-specific challenges",
            details: "Proactive security professionals well-versed in the unique challenges of your location. Our on-site experts understand the specific requirements of different environments and tailor their approach accordingly."
        },
        {
            title: "Premier Private Security",
            icon: "⭐",
            iconSymbol: "🏆",
            description: "Elite services for high-profile individuals and businesses",
            details: "Elite services offering customized solutions for high-profile individuals and businesses. Our premier security services provide discreet, professional protection with the highest level of confidentiality and expertise."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="TOP PRIVATE SECURITY GUARDS IN MELBOURNE"
                mainTitle="Professional Private Security Guards"
                subtitle="Elite Private Security Guards in Melbourne - Protecting What Matters Most"
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
                                                🛡️ MELBOURNE'S TRUSTED SECURITY PARTNER
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
                                            TOP PRIVATE<br />
                                            <span style={{color: '#fdc51a'}}>SECURITY GUARDS</span>
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
                                            When it comes to ensuring safety and security of your property or event, private security guards play a crucial role in Melbourne.
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
                                            Metro Guards is a leading security company offering bespoke security solutions with trained, qualified guards and experienced professionals to ensure your peace of mind.
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
                                                src="/assets/img/blog/private guard.jpg" 
                                                alt="Professional Private Security Guards" 
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
                                                src="/assets/img/blog/private guard.jpg" 
                                                alt="Professional Security Team" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
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
                                                Our Private Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Professional security guards providing comprehensive protection for your property, events, and peace of mind.
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

                    {/*===== Advantages Section =====*/}
                    <div className="advantages-section section-padding" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
                        <div className="container">
                                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="advantages-content pe-lg-5">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    ⭐ WHY CHOOSE US
                                                </span>
                                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Why Choose Metro Guards for Private Security?
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d'}}>
                                                With rising concerns about theft, vandalism, and violence, our team of trained, qualified security guards makes all the difference.
                                            </p>
                                                </div>
                                        
                                        {/* Advantages List */}
                                        <div className="advantages-list">
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    🎓
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>Professional & Trained Officers</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Highly professional and extensively trained security guards with ongoing development programs.
                                                    </p>
                                                    </div>
                                                </div>
                                            
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    🔧
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>Customized Security Solutions</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Personalized security solutions tailored to each client's specific needs for complete protection.
                                                    </p>
                                                    </div>
                                                </div>
                                            
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    ⏰
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>24/7 Protection</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Round-the-clock availability for uninterrupted security services when you need them most.
                                                    </p>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="stats-grid ps-lg-4">
                                        <div className="stats-container">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            🏆
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            50+
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Years Experience
                            </div>
                        </div>
                    </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            🛡️
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            1000+
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Satisfied Clients
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            👥
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            24/7
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Available Support
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            ✅
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            100%
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Licensed & Insured
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

                    {/*===== Old sections removed for cleaner design =====*/}
                    <div className="hidden-sections" style={{display: 'none'}}>

                    {/*===== Roles and Responsibilities Section =====*/}
                    <div className="roles-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Security Commitment
                                        </small>
                                        <h2>ROLES AND RESPONSIBILITIES</h2>
                                        <p>One of the main roles of our private security guards in Melbourne is to ensure the safety and security of the premises you are assigned to.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="role-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="role-header d-flex align-items-center mb-3">
                                            <div className="role-icon mr-3">
                                                <i className="bi bi-building" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">On-site Security Duties</h4>
                                        </div>
                                        <p>When we are on-site, our primary duty is to maintain a high level of visibility to deter potential threats. We are responsible for monitoring surveillance equipment, inspecting buildings, and controlling access to the property.</p>
                                        <p>In the event of an incident, we must act quickly and decisively to handle the situation and protect the safety of everyone on the premises. Our alertness and quick response to suspicious activities can prevent potential threats and security breaches.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="role-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="role-header d-flex align-items-center mb-3">
                                            <div className="role-icon mr-3">
                                                <i className="bi bi-calendar-event" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Event Security Management</h4>
                                        </div>
                                        <p>Event security management is another important aspect of your role as a private security guard. Whether it's a corporate event, concert, or public gathering, our responsibility is to ensure the safety and security of all attendees.</p>
                                        <p>We may be required to screen guests, manage entry and exit points, and be prepared to handle any disturbances or emergencies that may arise. Our ability to remain calm under pressure and quickly assess and address potential risks can make a significant difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Training and Qualifications Section =====*/}
                    <div className="training-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="training-image mr50">
                                        <img src="/assets/img/blog/tranning.jpg" alt="Security Guard Training" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="training-content ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Professional Standards
                                            </small>
                                            <h2>TRAINING AND QUALIFICATIONS</h2>
                                            <p>
                                                Before we can work as a security guard in Melbourne, we need to undergo the necessary training and obtain the required qualifications. This is crucial to ensure that we have the skills and knowledge needed to perform our job effectively and to the highest standards.
                                            </p>
                                            <div className="training-features mt-4">
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Mandatory licensing and certification</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>First aid and emergency response training</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Conflict resolution and de-escalation techniques</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Ongoing professional development</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Legal and Ethical Section =====*/}
                    <div className="legal-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Professional Standards
                                        </small>
                                        <h2>LEGAL AND ETHICAL CONSIDERATIONS</h2>
                                        <p>For private security guards in Melbourne, it is crucial to have a strong understanding of the legal and ethical considerations that govern the industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="legal-card bg-white p-4 rounded shadow-lg h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Understanding Melbourne's Security Industry Legislation</h4>
                                        <p>When working as a private security guard in Melbourne, Metro Guards is essential that we have a comprehensive understanding of the legislation that governs the industry. This includes the Private Security Act and the Security Agents Act, which outline the legal requirements for working in the security industry.</p>
                                        <p>It is important to stay updated on any changes to legislation, as non-compliance can result in serious legal repercussions for Metro Guard's work.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="legal-card bg-white p-4 rounded shadow-lg h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Ethical Standards in Private Security</h4>
                                        <p>As a private security guard, ethical conduct is paramount in every aspect of your work. This includes respecting the rights and dignity of all individuals, adhering to confidentiality and privacy guidelines, and maintaining a high level of professionalism at all times.</p>
                                        <p>By upholding these ethical standards, we not only protect our reputation and the reputation of the security industry, but we also contribute to a safer and more secure community in Melbourne.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Hiring Section =====*/}
                    <div className="hiring-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hiring-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Choosing the Right Security
                                            </small>
                                            <h2>HIRING PRIVATE SECURITY GUARDS</h2>
                                            <p>
                                                Despite the increasing need for private security, not all security companies are created equal. When it comes to hiring private security guards for your business or event, it's essential to choose a reputable and reliable firm that can meet your specific needs.
                                            </p>
                                            <div className="hiring-features mt-4">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon mr-3 mt-1">
                                                        <i className="bi bi-search" style={{fontSize: '24px', color: '#243D31'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5>How to Choose the Right Security Firm</h5>
                                                        <p>Look for a company with a proven track record of delivering effective security solutions and satisfied clients. Ensure they provide tailored solutions to meet your specific needs.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon mr-3 mt-1">
                                                        <i className="bi bi-file-text" style={{fontSize: '24px', color: '#243D31'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5>Contract Guidelines and Expectations</h5>
                                                        <p>Review terms and conditions carefully, including scope of services and pricing. Communicate your expectations clearly and discuss emergency response protocols.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hiring-image ml50">
                                        <img src="/assets/img/blog/private 3.jpg" alt="Hiring Security Guards" className="img-fluid rounded shadow-lg" />
                                        <div className="hiring-stats bg-white p-4 rounded shadow-lg mt-4">
                                            <h5 className="mb-3 text-center">Why Choose Metro Guards</h5>
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Highly trained and vetted security professionals</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Customized security solutions for every client</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>24/7 availability for all your security needs</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Proactive approach to threat prevention</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Full compliance with all legal requirements</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Services Showcase Section =====*/}
                    <div className="services-showcase bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Security Expertise
                                        </small>
                                        <h2>EXPERIENCED SECURITY PROFESSIONALS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-lightning" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-Demand Guard Services</h4>
                                        <p className="text-center">Flexible security solutions for immediate needs, providing rapid deployment of trained personnel whenever required.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Hire Skilled Security Guards</h4>
                                        <p className="text-center">Highly trained professionals capable of assessing risks and preventing security breaches effectively.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Top Security Staffing</h4>
                                        <p className="text-center">Recruiting and placing the best security professionals to meet your specific operational needs.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-building" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-Site Guard Experts</h4>
                                        <p className="text-center">Proactive security professionals well-versed in the unique challenges of your location.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-star" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Premier Private Security</h4>
                                        <p className="text-center">Elite services offering customized solutions for high-profile individuals and businesses.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-award" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Trained Guard Personnel</h4>
                                        <p className="text-center">Security teams well-versed in protocols, emergency response, and conflict resolution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Common Questions
                                        </small>
                                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg mb-4">
                                        <h5 className="mb-3">What services do private security guards in Melbourne provide?</h5>
                                        <p>Private security guards in Melbourne, such as Metro Guards, provide a wide range of services including access control, patrolling, crowd management, CCTV monitoring, and rapid response to security incidents.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg mb-4">
                                        <h5 className="mb-3">Are private security guards in Melbourne licensed and trained?</h5>
                                        <p>Yes, private security guards in Melbourne must be licensed and undergo extensive training in areas such as conflict resolution, first aid, and emergency response. Metro Guards ensures that all of their security personnel meet these requirements.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg">
                                        <h5 className="mb-3">How can I hire private security guards from Metro Guards?</h5>
                                        <p>To hire private security guards from Metro Guards, simply contact their office and discuss your security needs. They will work with you to create a tailored security solution and provide well-trained guards to protect your property or event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                    {/*===== Contact Form Section =====*/}
                    <div className="contact-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2d3561 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact-content text-white pe-lg-5">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span 
                                                    className="badge px-3 py-2" 
                                                    style={{
                                                        backgroundColor: '#fdc51a', 
                                                        color: '#1e2247', 
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    📞 GET IN TOUCH
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4 text-white">
                                                Ready to Secure Your Property?
                                            </h2>
                                            <p className="lead mb-4" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                                                Contact Metro Guards today for professional private security guard services in Melbourne. Our team is ready to provide customized solutions for your security needs.
                                            </p>
                                        </div>
                                        
                                        {/* Contact Cards */}
                                        <div className="contact-cards">
                                            <div className="contact-card d-flex align-items-center mb-4 p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px'}}>
                                                <div 
                                                    className="contact-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '12px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    📞
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 text-white">Phone</h5>
                                                    <p className="mb-0" style={{color: 'rgba(255, 255, 255, 0.8)'}}>1300 731 173 | Available 24/7</p>
                                                </div>
                                            </div>
                                            
                                            <div className="contact-card d-flex align-items-center mb-4 p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px'}}>
                                                <div 
                                                    className="contact-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '12px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    ✉️
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 text-white">Email</h5>
                                                    <p className="mb-0" style={{color: 'rgba(255, 255, 255, 0.8)'}}>info@metroguards.com.au</p>
                                                </div>
                                            </div>
                                            
                                            <div className="contact-card d-flex align-items-center p-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px'}}>
                                                <div 
                                                    className="contact-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '12px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    📍
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 text-white">Service Area</h5>
                                                    <p className="mb-0" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Melbourne & Surrounding Areas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="modern-form-wrapper animate-on-scroll scale-in-animation ps-lg-4">
                                            <div className="form-header fade-in-up">
                                                <div className="form-badge pulse-badge">
                                                    <span className="badge-icon">📋</span>
                                                    <span>Request Security Quote</span>
                                                </div>
                                                <h2 className="form-title typing-animation">Get Your Professional Security Quote</h2>
                                                <p className="form-subtitle fade-in-up">
                                                    Fill out this form and our security experts will contact you within 2 hours with a customized solution.
                                                </p>
                                            </div>
                                            
                                            <form className="classic-contact-form" noValidate>
                                                {/* honeypot (spam trap) */}
                                                <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                                <div className="form-section">
                                                    <div className="form-grid">
                                                        <div className="form-field">
                                                            <label className="label-title">
                                                                Your Full Name
                                                                <span className="required-asterisk">*</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <input 
                                                                    name="name" 
                                                                    type="text" 
                                                                    className="classic-input" 
                                                                    placeholder="Enter your complete name" 
                                                                    required 
                                                                />
                                                                <div className="input-border-effect"></div>
                                                            </div>
                                                        </div>

                                                        <div className="form-field">
                                                            <label className="label-title">
                                                                Email Address
                                                                <span className="required-asterisk">*</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <input 
                                                                    name="email" 
                                                                    type="email" 
                                                                    className="classic-input" 
                                                                    placeholder="your.email@example.com" 
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
                                                            <label className="label-title">
                                                                Phone Number
                                                                <span className="optional-text">(Optional)</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <input 
                                                                    name="phone" 
                                                                    type="tel" 
                                                                    className="classic-input" 
                                                                    placeholder="+61 xxx xxx xxx" 
                                                                />
                                                                <div className="input-border-effect"></div>
                                                            </div>
                                                        </div>

                                                        <div className="form-field">
                                                            <label className="label-title">
                                                                Property Location
                                                                <span className="required-asterisk">*</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <input 
                                                                    name="location" 
                                                                    type="text" 
                                                                    className="classic-input" 
                                                                    placeholder="Enter property address or suburb" 
                                                                    required 
                                                                />
                                                                <div className="input-border-effect"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-section">
                                                    <div className="form-grid">
                                                        <div className="form-field full-width">
                                                            <label className="label-title">
                                                                Security Service Required
                                                                <span className="required-asterisk">*</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <div className="classic-select-wrapper">
                                                                    <select name="serviceType" className="classic-select" required>
                                                                        <option value="">Select the security service you need</option>
                                                                        <option value="on-demand-guards">On-Demand Guard Services</option>
                                                                        <option value="skilled-personnel">Skilled Security Personnel</option>
                                                                        <option value="onsite-protection">On-Site Protection Experts</option>
                                                                        <option value="premier-security">Premier Private Security</option>
                                                                        <option value="event-security">Event Security</option>
                                                                        <option value="mobile-patrol">Mobile Patrol Services</option>
                                                                        <option value="other">Other (please specify in message)</option>
                                                                    </select>
                                                                    <div className="select-icon">
                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="input-border-effect"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-section">
                                                    <div className="form-grid">
                                                        <div className="form-field full-width">
                                                            <label className="label-title">
                                                                Additional Details & Requirements
                                                                <span className="optional-text">(Optional)</span>
                                                            </label>
                                                            <div className="input-container">
                                                                <textarea 
                                                                    name="message" 
                                                                    className="classic-textarea" 
                                                                    placeholder="Please describe your specific security requirements, preferred timing, any special considerations, or questions you may have..."
                                                                    rows="4"
                                                                ></textarea>
                                                                <div className="input-border-effect"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="submit-section">
                                                    <button
                                                        type="submit"
                                                        className="classic-submit-btn"
                                                    >
                                                        <span className="btn-content-classic">
                                                            <span className="btn-icon-classic">
                                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <span className="btn-text">Send Security Quote Request</span>
                                                        </span>
                                                    </button>
                                                    <p className="response-time">
                                                        <span className="clock-icon">⏱️</span>
                                                        We typically respond within 2 hours during business hours
                                                    </p>
                                                </div>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Final CTA Section =====*/}
                    <div className="final-cta-section section-padding text-center" style={{background: 'linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(253, 253, 253) 100%)'}}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="cta-content">
                                        <div className="cta-icon mb-4">
                                            <div 
                                                className="icon-wrapper d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '50%',
                                                    color: '#ffffff',
                                                    fontSize: '2rem'
                                                }}
                                            >
                                                🛡️
                                            </div>
                                        </div>
                                        
                                        <h2 className="display-4 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Your Trusted Security Partner in Melbourne
                                        </h2>
                                        
                                        <p className="lead mb-5" style={{color: '#1e2247', opacity: '0.8', maxWidth: '600px', margin: '0 auto 2rem'}}>
                                            Hiring private security guards from Metro Guards in Melbourne is the best decision to ensure the safety and security of your property. Our highly trained professionals provide peace of mind.
                                        </p>
                                        
                                        <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
                                            <a 
                                                href="/get-quotation" 
                                                className="btn btn-primary px-5 py-3"
                                                style={{
                                                    backgroundColor: '#1e2247',
                                                    color: '#ffffff',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)'
                                                }}
                                            >
                                                📋 GET QUOTATION NOW
                                            </a>
                                            <a 
                                                href="tel:1300731173" 
                                                className="btn btn-outline-dark px-5 py-3"
                                                style={{
                                                    borderColor: '#1e2247',
                                                    color: '#1e2247',
                                                    borderRadius: '12px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    borderWidth: '2px'
                                                }}
                                            >
                                                📞 CALL US: 1300 731 173
                                            </a>
                                        </div>
                                        
                                        <div className="cta-features mt-5">
                                            <div className="row justify-content-center">
                                                <div className="col-md-4">
                                                    <div className="feature-item">
                                                        <span style={{color: '#1e2247', fontSize: '1.5rem'}}>✅</span>
                                                        <span className="ms-2" style={{color: '#1e2247', fontWeight: '600'}}>Licensed & Insured</span>
                                    </div>
                                </div>
                                                <div className="col-md-4">
                                                    <div className="feature-item">
                                                        <span style={{color: '#1e2247', fontSize: '1.5rem'}}>⚡</span>
                                                        <span className="ms-2" style={{color: '#1e2247', fontWeight: '600'}}>24/7 Response</span>
                            </div>
                        </div>
                                                <div className="col-md-4">
                                                    <div className="feature-item">
                                                        <span style={{color: '#1e2247', fontSize: '1.5rem'}}>🏆</span>
                                                        <span className="ms-2" style={{color: '#1e2247', fontWeight: '600'}}>50+ Years Experience</span>
                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                            box-shadow: 0 8px 25px rgba(30, 34, 71, 0.3) !important;
                        }
                        
                        .accordion-header:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
                        }
                        
                        .stat-card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
                        }
                        
                        .modern-form-wrapper {
                            margin-top: 0 !important;
                        }
                        
                        .contact-card:hover {
                            transform: translateX(8px);
                            background-color: rgba(255, 255, 255, 0.15) !important;
                        }
                        
                        .advantage-item:hover .advantage-icon {
                            transform: scale(1.1);
                            background-color: #fdc51a !important;
                            color: #1e2247 !important;
                        }
                        
                        .floating-badge {
                            animation: float 3s ease-in-out infinite;
                        }
                        
                        .bottom-badge {
                            animation: pulse 2s infinite;
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-10px); }
                        }
                        
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); }
                            50% { transform: scale(1.05); }
                        }
                        
                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        .trust-item:hover {
                            transform: translateY(-5px);
                        }
                        
                        .trust-icon {
                            transition: all 0.3s ease;
                        }
                        
                        .trust-item:hover .trust-icon {
                            transform: scale(1.2);
                        }
                        
                        .hero-buttons a {
                            transition: all 0.3s ease;
                        }
                        
                        .contact-icon, .advantage-icon, .stat-icon {
                            transition: all 0.3s ease;
                        }
                        
                        .decoration-circle {
                            animation: float 4s ease-in-out infinite;
                        }
                        
                        .decoration-square {
                            animation: float 4s ease-in-out infinite reverse;
                        }
                        
                        .feature-item {
                            transition: all 0.3s ease;
                        }
                        
                        .feature-item:hover {
                            transform: translateX(5px);
                        }
                        
                        @media (max-width: 768px) {
                            .hero-buttons {
                                flex-direction: column;
                                align-items: stretch;
                            }
                            
                            .hero-buttons a {
                                text-align: center;
                                margin-bottom: 1rem;
                            }
                            
                            .trust-indicators .col-4 {
                                margin-bottom: 1rem;
                            }
                            
                            .cta-buttons {
                                flex-direction: column;
                                align-items: stretch;
                            }
                            
                            .cta-buttons a {
                                text-align: center;
                                margin-bottom: 1rem;
                            }
                        }
                    `}</style>
                </div>
                <Gallery4 />
            </Layout>
        </>
    )
}