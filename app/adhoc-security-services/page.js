'use client';
import { useState } from 'react';
import { Eye, Search, Lock, Shield, Target, Users, Clock, User, Zap, AlertTriangle, UserX, Home, Wrench, CheckCircle, Award, Headphones, Phone, MapPin } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function AdhocSecurityPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const services = [
        {
            title: "Security Patrols & Surveillance",
            icon: <Eye size={24} />,
            iconSymbol: <Search size={24} />,
            description: "Comprehensive security patrols and surveillance for your property",
            details: "Our trained security guards conduct regular patrols of your property to deter criminal activity and ensure that your assets are protected at all times. We provide comprehensive surveillance and monitoring services with detailed reporting."
        },
        {
            title: "Access Control & Monitoring", 
            icon: <Lock size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Advanced access control systems and monitoring",
            details: "We help you control who has access to your property or event, using various methods including ID checks, biometric scanning systems, and advanced access control technologies to maintain secure entry points."
        },
        {
            title: "Event Security Services",
            icon: <Target size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Professional security for events and gatherings",
            details: "We offer a range of event security services, from concerts and festivals to corporate events and private parties, our experienced personnel ensure your events run smoothly and safely with comprehensive crowd management and security protocols."
        },
        
    ];

    const faqData = [
        {
            question: "How quickly can Adhoc security be mobilized?",
            answer: "This very much depends on your requirements and location as there must be security officers to be deployed on the ground. We pride ourselves on the speed and efficiency of our Adhoc coverage, with officers often deployed in less than 2 hours. If your site is in a remote location, this may take longer, although we have a fantastic track record of providing excellent service even in such areas."
        },
        {
            question: "What Do We Do Differently?",
            answer: "When you use Expeditious Services for your Adhoc needs, you get the benefit of our Critical Review Helpdesk. This includes regular communication and project management to ensure coverage runs as smoothly as possible, regardless of the length of our service. Metro Guards also ensure guards undergo special training prior to deployment to ensure they understand any additional risks and procedures. You can be confident that our officer teams are highly competent thanks to our rapid annual testing and training (EATT) and regular shift tool interviews."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ADHOC SECURITY SERVICES"
                mainTitle="Emergency Adhoc Security Services"
                subtitle="Rapid Response Security Guards in Melbourne - Available 24/7 for Immediate Protection"
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
                                                 YOUR TRUSTED PROTECTION PARTNER
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
                                            ADHOC SECURITY<br />
                                            <span style={{color: '#fdc51a'}}>SERVICES</span>
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
                                            In today’s unpredictable world, safeguarding your people and assets is more critical than ever. Our Adhoc Security Services provide flexible, reliable, and effective protection for businesses, organizations, and individuals.

                                            We understand that every client faces unique challenges. That’s why we offer customizable security solutions tailored to your exact requirements—whether it’s short-term coverage for a one-off event or ongoing protection for your premises.

                                            Our professional guards are equipped with the latest technology, trained in conflict resolution and emergency response, and committed to maintaining safety with vigilance and professionalism. You can rest assured knowing your security is in capable hands.

                                            At Metro Guards, we pride ourselves on delivering services built on integrity, reliability, and excellence. We work closely with our clients to understand their concerns, provide transparent communication, and ensure peace of mind every step of the way.
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
                                                 GET QUOTATION
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
                                                <Phone size={16} style={{marginRight: '8px'}} /> 1300731173
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
                                                alt="Professional Security Team" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            
                                            
                                            
                                            
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
                                        
                                        {/* Additional Features */}
                                        <div className="features-list mt-4">
                                            <div className="align-items-center mb-3">
                                                <p>Personnel will ensure that your event runs smoothly and that your guests are safe and secure.</p>
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
                                                    <Clock size={20} />
                            </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Available Response</span>
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
                                                    <User size={20} />
                                        </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Trained Professional Guards</span>
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
                                                    <Zap size={20} />
                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Rapid Deployment</span>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                     OUR SERVICES
                                                </span>
                                        </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Our Adhoc Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                When it comes to protecting your people and assets, you need a security partner you can trust.
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

                    {/*===== Why Choose Adhoc Security Section =====*/}
                    <div className="why-choose-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-exclamation me-2"></i>
                                            WHEN YOU NEED US
                                        </span>
</div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Common Reasons for Adhoc Security
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        Adhoc security is implemented when external factors increase site vulnerability and immediate protection is needed.
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
                                            <AlertTriangle size={32} />
                                                    </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Damaged Barriers/Gates</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Temporary cover to keep the site resilient while repairs are made. We help organizations deal with broken fences, barriers or gates by controlling entry and exit points.
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
                                            <UserX size={32} />
                                                </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Antisocial Behavior</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Implementing Ad Hoc security helps prevent violence and property damage by offering a visible deterrent in areas with higher crime rates or public exposure.
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
                                            <Home size={32} />
                                </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Unauthorized Campsites</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                This intrusion problem occurs on decommissioned or underutilized sites. Unauthorised campsites are often accompanied by theft or damage threats.
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
                                            <Wrench size={32} />
                </div>
                                        <div className="reason-content">
                                            <h5 className="mb-3 text-white fw-bold">Security System Installation</h5>
                                            <p className="mb-0 text-white" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                Request temporary coverage while setting up new security systems like CCTV or alarm systems, ensuring continuous protection during upgrades.
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
                                                FAST RESPONSE & QUALITY SERVICE
                                            </span>
            </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Advantages of Adhoc Security Guards
                                        </h2>
                                        <p className="lead mb-4" style={{color: '#6c757d'}}>
                                                We pride ourselves on the speed and efficiency of our Adhoc coverage, with officers often deployed in less than 2 hours. Our Critical Review Helpdesk ensures seamless coverage.
                                            </p>
                                        
                                        <div className="advantages-list">
                                            {[
                                                "Reduces accidents and long-term costs",
                                                "Convenient and simple mobilization", 
                                                "Fights temporary vulnerability effectively",
                                                "Identifies additional security needs",
                                                "Great value for money with right provider"
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
                                                        <CheckCircle size={16} />
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
                                                        <Clock size={32} />
                        </div>
                                                    <div 
                                                        className="stat-number fw-bold mb-2"
                                                        style={{
                                                            fontSize: '2.5rem',
                                                            color: '#1e2247'
                                                        }}
                                                    >
                                                        &lt;2
                        </div>
                                                    <div className="stat-label" style={{color: '#6c757d', fontWeight: '600'}}>
                                                        Hours Response Time
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
                                                        <Headphones size={32} />
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
                                                        Available Service
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
                                                        <Shield size={32} />
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
                                                        Professional Guards
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
                                                        <Award size={32} />
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
                </div>

                {/*===== FAQ & Information Section =====*/}
                <div className="faq-info-section " style={{background: '#f8f9fa'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-header text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            FREQUENTLY ASKED QUESTIONS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Everything You Need to Know About Adhoc Security
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row g-5">
                            {/* FAQ Section - Full Width */}
                            <div className="col-lg-12">
                                <div className="faq-content">
                                    {faqData.map((faq, index) => (
                                        <div key={index} className="faq-item mb-3">
                                            <div 
                                                className="faq-header p-4"
                                                style={{
                                                    backgroundColor: activeFaq === index ? '#ffffff' : '#f8f9fa',
                                                    borderRadius: activeFaq === index ? '12px 12px 0 0' : '12px',
                                                    border: '1px solid #e9ecef',
                                                    borderLeft: '4px solid #fdc51a',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="mb-0 fw-bold" style={{color: '#1e2247', fontSize: '1.2rem'}}>
                                                        {faq.question}
                                                    </h4>
                                                    <div className="expand-icon">
                                                        <div 
                                                            className="d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '35px',
                                                                height: '35px',
                                                                backgroundColor: activeFaq === index ? '#1e2247' : '#e9ecef',
                                                                borderRadius: '50%',
                                                                color: activeFaq === index ? '#ffffff' : '#1e2247',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                        >
                                                            <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                                                                {activeFaq === index ? '−' : '+'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {activeFaq === index && (
                                                <div 
                                                    className="faq-content p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '0 0 12px 12px',
                                                        border: '1px solid #e9ecef',
                                                        borderTop: 'none',
                                                        borderLeft: '4px solid #fdc51a',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        animation: 'slideDown 0.3s ease'
                                                    }}
                                                >
                                                    <p style={{color: '#6c757d', lineHeight: '1.7', margin: 0}}>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        
                    </div>
                </div>

                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    )
}