'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu, UserPlus, Handshake, Star, Heart } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function ConciergeSecurityPage() {
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
            title: "On-Site Concierge Security Officers",
            icon: <UserPlus size={24} />,
            iconSymbol: <UserPlus size={24} />,
            description: "Professional officers stationed at key access points to greet visitors and ensure security",
            details: "Our concierge security officers provide round-the-clock security services at key access points. They are responsible for greeting visitors, verifying identities, providing directions, and ensuring only authorized individuals are granted entry. Their presence provides both a welcoming environment and a secure setting."
        },
        {
            title: "Access Control Management", 
            icon: <Key size={24} />,
            iconSymbol: <Key size={24} />,
            description: "Strict access control using cards for employees and thorough verification of visitors",
            details: "Ensuring strict access control is a core responsibility of our concierge team. We utilize access cards for employees and verify the identities of visitors before granting them access. This system helps protect restricted areas and prevents unauthorized access to sensitive parts of your premises."
        },
        {
            title: "CCTV Monitoring",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "Continuous surveillance through real-time video feeds to identify and respond to threats",
            details: "Our concierge security team monitors your CCTV systems to provide continuous surveillance. By keeping a close watch on real-time video feeds, we can identify potential threats and take immediate action to address them, ensuring your premises remain secure at all times."
        },
        {
            title: "Visitor and Deliveries Management",
            icon: <Package size={24} />,
            iconSymbol: <Package size={24} />,
            description: "Efficient screening of visitors and coordination of deliveries to maintain security",
            details: "Managing visitors and deliveries efficiently is a crucial part of our concierge security services. We ensure that all visitors are properly screened, and deliveries are coordinated seamlessly to prevent any disruptions while maintaining high-security standards."
        }
    ];

    const faqData = [
        {
            question: "What is concierge security?",
            answer: "Concierge security refers to a service where security officers not only provide physical security but also assist visitors, manage access control, and ensure the premises are safe and secure."
        },
        {
            question: "Why do I need concierge security for my Melbourne property?",
            answer: "Concierge security helps deter criminal activity, manage visitor access, and provide a sense of safety and security for employees, residents, and guests."
        },
        {
            question: "What qualifications do concierge security officers in Melbourne have?",
            answer: "Our concierge security officers are licensed by Victoria Police and undergo extensive training in customer service, conflict resolution, and emergency response."
        },
        {
            question: "How much does concierge security cost in Melbourne?",
            answer: "The cost varies depending on the size of your property and the level of security required. Contact us for a customized quote based on your specific needs."
        },
        {
            question: "How can I choose a reliable concierge security provider?",
            answer: "Look for a provider with a good reputation, relevant experience, and necessary licenses. At Metro Guards, we offer reliable, professional services backed by years of expertise and customer satisfaction."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONCIERGE SECURITY SERVICES"
                mainTitle="Concierge Security Services in Melbourne"
                subtitle="Premium Concierge Security Services - Metro Guards"
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
                                                PREMIUM SECURITY & HOSPITALITY
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
                                            CONCIERGE<br />
                                            <span style={{color: '#fdc51a'}}>SECURITY SERVICES</span>
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
                                            At Metro Guards, we offer premium concierge security services designed to meet the specific needs of businesses and residential properties across Melbourne. Our professional concierge security officers serve as the first point of contact for visitors, creating a safe and welcoming environment.
                                        </p>
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3 flex-column flex-md-row">
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
                                                src="/assets/img/about/south.webp" 
                                                alt="Professional Concierge Security Services" 
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
                                                src="/assets/img/about/south.webp" 
                                                alt="Professional Concierge Security Services" 
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
                                                <p>We understand the importance of maintaining a secure and professional atmosphere in any establishment. With our concierge security service, you can ensure that your property is not only secure but also that visitors are greeted with the utmost professionalism.</p>
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
                                                    <UserPlus size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Professional Officers</span>
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
                                                    <Handshake size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customer Service Excellence</span>
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
                                                    <Shield size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Security Expertise</span>
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
                                                Our Concierge Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Professional security solutions that combine safety with hospitality, ensuring your property is secure while providing exceptional customer service to visitors and guests.
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
                    {/*===== Benefits Section =====*/}
                    <div className="benefits-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-award me-2"></i>
                                            KEY BENEFITS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Key Benefits of Concierge Security Services
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        Combining security expertise with exceptional customer service for complete property protection and enhanced visitor experience.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { 
                                        icon: <Shield size={40} />, 
                                        title: "Enhanced Safety and Security", 
                                        description: "Our concierge security officers play a vital role in providing visible deterrence to unauthorized entry and potential threats. By monitoring access points and conducting regular patrols, they ensure a secure environment for everyone. Their presence significantly reduces the risk of security breaches, giving you peace of mind and protecting your assets." 
                                    },
                                    { 
                                        icon: <Heart size={40} />, 
                                        title: "Improved Customer Experience", 
                                        description: "Our concierge security officers offer more than just safety—they create a welcoming atmosphere that enhances the experience for visitors and clients. They represent the face of your business and ensure that all interactions are handled professionally and courteously. Their ability to balance security with outstanding customer service makes them an asset to any establishment." 
                                    },
                                    { 
                                        icon: <Users size={40} />, 
                                        title: "Efficient Visitor Management", 
                                        description: "Our concierge security team is expertly trained to handle visitor management, ensuring that all guests are verified and authorized before entering your premises. By maintaining strict control over who enters your property, we enhance security while facilitating smooth access for guests." 
                                    },
                                    { 
                                        icon: <Cpu size={40} />, 
                                        title: "Seamless Integration with Technology", 
                                        description: "At Metro Guards, we utilize cutting-edge security technology to complement our concierge services. From CCTV monitoring to access control systems and alarm systems, our team ensures that every aspect of your property's security is managed in real time. This integration allows for proactive monitoring and swift responses to potential security concerns." 
                                    },
                                    { 
                                        icon: <Zap size={40} />, 
                                        title: "Effective Emergency Response", 
                                        description: "Trained in emergency protocols, our concierge security officers can handle a range of emergency situations, from medical incidents to security threats. They are equipped to manage the situation quickly and efficiently, ensuring that your premises remain safe and operations continue smoothly." 
                                    },
                                    { 
                                        icon: <Settings size={40} />, 
                                        title: "Flexible and Customizable Security Plans", 
                                        description: "Every property has unique security needs, and Metro Guards offers tailored concierge security solutions designed to address those specific needs. We provide a comprehensive security plan that ensures optimal protection, no matter the size or type of your property." 
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="col-lg-6 col-md-6">
                                        <div 
                                            className="benefit-card h-100 position-relative"
                                            style={{
                                                backgroundColor: '#ffffff',
                                                borderRadius: '25px',
                                                boxShadow: '0 12px 35px rgba(0,0,0,0.08)',
                                                border: '3px solid transparent',
                                                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #fdc51a, #1e2247) border-box',
                                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                                textAlign: 'center',
                                                overflow: 'hidden',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {/* Animated background overlay */}
                                            <div 
                                                className="position-absolute w-100 h-100"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.05) 0%, rgba(30, 34, 71, 0.05) 100%)',
                                                    opacity: '0',
                                                    transition: 'all 0.5s ease',
                                                    top: '0',
                                                    left: '0',
                                                    zIndex: '1'
                                                }}
                                            ></div>
                                            
                                            {/* Floating particles effect */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    width: '4px',
                                                    height: '4px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '50%',
                                                    top: '20%',
                                                    left: '15%',
                                                    opacity: '0',
                                                    transition: 'all 0.6s ease',
                                                    zIndex: '2'
                                                }}
                                            ></div>
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '50%',
                                                    top: '70%',
                                                    right: '20%',
                                                    opacity: '0',
                                                    transition: 'all 0.8s ease',
                                                    zIndex: '2'
                                                }}
                                            ></div>
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    width: '3px',
                                                    height: '3px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '50%',
                                                    top: '40%',
                                                    right: '15%',
                                                    opacity: '0',
                                                    transition: 'all 0.7s ease',
                                                    zIndex: '2'
                                                }}
                                            ></div>
                                            
                                            {/* Content */}
                                            <div className="position-relative p-4" style={{zIndex: '3'}}>
                                                {/* Icon with enhanced styling */}
                                                <div 
                                                    className="benefit-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                                    style={{
                                                        width: '90px',
                                                        height: '90px',
                                                        background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                        borderRadius: '25px',
                                                        color: '#fdc51a',
                                                        boxShadow: '0 15px 35px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.5s ease',
                                                        transform: 'perspective(1000px) rotateX(0deg)'
                                                    }}
                                                >
                                                    {benefit.icon}
                                                    {/* Icon inner glow */}
                                                    <div 
                                                        className="position-absolute"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            background: 'radial-gradient(circle, rgba(253, 197, 26, 0.2) 0%, transparent 70%)',
                                                            borderRadius: '25px',
                                                            opacity: '0',
                                                            transition: 'all 0.5s ease'
                                                        }}
                                                    ></div>
                                                </div>
                                                
                                                {/* Title with enhanced typography */}
                                                <h4
                                                    className="fw-bold mb-3 position-relative"
                                                    style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.2rem',
                                                        transition: 'all 0.4s ease',
                                                        letterSpacing: '0.5px'
                                                    }}
                                                >
                                                    {benefit.title}
                                                </h4>
                                                
                                                {/* Description with dropdown style */}
                                                <div
                                                    className="benefit-description position-relative"
                                                    style={{
                                                        maxHeight: '120px',
                                                        overflow: 'hidden',
                                                        transition: 'all 0.5s ease'
                                                    }}
                                                >
                                                    <p
                                                        className="mb-0"
                                                        style={{
                                                            color: '#6c757d',
                                                            lineHeight: '1.7',
                                                            fontSize: '0.95rem',
                                                            transition: 'all 0.4s ease',
                                                            transform: 'translateY(0)'
                                                        }}
                                                    >
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                                
                                                {/* Expand indicator */}
                                                <div
                                                    className="expand-indicator position-absolute"
                                                    style={{
                                                        bottom: '15px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: '30px',
                                                        height: '4px',
                                                        background: 'linear-gradient(90deg, #fdc51a 0%, #1e2247 100%)',
                                                        borderRadius: '2px',
                                                        opacity: '0',
                                                        transition: 'all 0.4s ease'
                                                    }}
                                                ></div>
                                            </div>
                                            
                                            {/* Corner accent */}
                                            <div
                                                className="position-absolute"
                                                style={{
                                                    top: '0',
                                                    right: '0',
                                                    width: '0',
                                                    height: '0',
                                                    borderLeft: '30px solid transparent',
                                                    borderTop: '30px solid #fdc51a',
                                                    opacity: '0',
                                                    transition: 'all 0.5s ease'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                   

                    {/*===== Why Choose Metro Guards Section =====*/}
                    <div className="why-choose-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="why-choose-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="/assets/img/about/south.webp"
                                                alt="Metro Guards Concierge Security Team"
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
                                                <p>Our team members possess impeccable presentation, exceptional customer service skills, and a keen understanding of security protocols, making them an invaluable asset to any business or residential complex.</p>
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
                                                    <UserCheck size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Expertly Trained Personnel</span>
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
                                                    <Heart size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customer Experience Focused</span>
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
                                                    <Users size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Diverse Workforce</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="why-choose-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    WHY CHOOSE US
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Why Choose Metro Guards for Concierge Security in Melbourne?
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We are committed to providing reliable, professional concierge security services that protect your assets, employees, and property while delivering exceptional customer service to all visitors and guests.
                                            </p>
                                        </div>

                                        {/* Expandable Why Choose Cards */}
                                        <div className="why-choose-accordion">
                                            {[
                                                {
                                                    title: "Expertly Trained Security Personnel",
                                                    icon: <UserCheck size={24} />,
                                                    iconSymbol: <UserCheck size={24} />,
                                                    description: "Our concierge security officers are selected for their excellent customer service skills and strong security expertise",
                                                    details: "At Metro Guards, our concierge security officers are selected for their excellent customer service skills and strong security expertise. They undergo thorough training in both security protocols and customer service, making them equipped to handle any situation with professionalism and efficiency."
                                                },
                                                {
                                                    title: "Customer Experience Focused",
                                                    icon: <Heart size={24} />,
                                                    iconSymbol: <Heart size={24} />,
                                                    description: "Our commitment to customer experience is what sets us apart from the competition",
                                                    details: "Our commitment to customer experience is what sets us apart. We ensure that our concierge security officers are not only skilled in security but also excel in providing excellent customer service. This dual approach helps create a safe and positive environment for your clients, employees, and visitors."
                                                },
                                                {
                                                    title: "Diverse and Inclusive Workforce",
                                                    icon: <Users size={24} />,
                                                    iconSymbol: <Users size={24} />,
                                                    description: "We believe that diversity strengthens our service and ensures we meet varied client needs",
                                                    details: "We believe that diversity strengthens our service. Metro Guards is committed to fostering a diverse and inclusive workforce, where employees from all backgrounds contribute their unique perspectives and skills. This diversity ensures that we meet the varied needs of all our clients."
                                                },
                                                {
                                                    title: "Integrated Technology",
                                                    icon: <Cpu size={24} />,
                                                    iconSymbol: <Cpu size={24} />,
                                                    description: "Latest security technology including CCTV, access control systems, and alarm systems",
                                                    details: "Our concierge security services are enhanced by the latest security technology, including CCTV, access control systems, alarm systems, and more. This integration ensures that your property is equipped with the best protection possible, combining physical presence with high-tech surveillance."
                                                },
                                                {
                                                    title: "Flexible and Customizable Security Plans",
                                                    icon: <Settings size={24} />,
                                                    iconSymbol: <Settings size={24} />,
                                                    description: "Tailored concierge security solutions designed to address your specific property needs",
                                                    details: "Every property has unique security needs, and Metro Guards offers tailored concierge security solutions designed to address those specific needs. We provide a comprehensive security plan that ensures optimal protection, no matter the size or type of your property."
                                                }
                                            ].map((item, index) => (
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
                                                                    {item.iconSymbol}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.title}</h5>
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
                                                                {item.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {item.details}
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

                    {/*===== How to Hire Section =====*/}
                    <div className="how-to-hire-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="how-to-hire-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="/assets/img/about/south.webp"
                                                alt="Metro Guards Hiring Process"
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
                                                <p>Getting started with Metro Guards concierge security services is straightforward and tailored to your specific needs. Our team is ready to provide a welcoming yet secure environment for your property.</p>
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
                                                    <Phone size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Free Consultation</span>
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
                                                    <Settings size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Plans</span>
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
                                                    <UserCheck size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Ongoing Support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="how-to-hire-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    HIRING PROCESS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                How to Hire Concierge Security Services from Metro Guards
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Our simple and effective hiring process ensures you get the perfect concierge security solution for your property. We make it easy to get started with professional security services.
                                            </p>
                                        </div>

                                        {/* Expandable Hiring Process Cards */}
                                        <div className="hiring-process-accordion">
                                            {[
                                                {
                                                    title: "Consultation",
                                                    icon: <Phone size={24} />,
                                                    iconSymbol: <Phone size={24} />,
                                                    description: "Contact us to discuss your security needs and property requirements",
                                                    details: "Contact us to discuss your security needs. Our team will assess your property's requirements and propose the best concierge security solution. We take the time to understand your specific needs and provide personalized recommendations."
                                                },
                                                {
                                                    title: "Personalized Security Plan",
                                                    icon: <Settings size={24} />,
                                                    iconSymbol: <Settings size={24} />,
                                                    description: "We design tailored security plans that incorporate all necessary security elements",
                                                    details: "We design tailored security plans that incorporate concierge officers, access control, and CCTV monitoring, ensuring the highest level of security for your property. Our plans are customized to meet your specific requirements and budget."
                                                },
                                                {
                                                    title: "Ongoing Support",
                                                    icon: <UserCheck size={24} />,
                                                    iconSymbol: <UserCheck size={24} />,
                                                    description: "We provide continuous support and training for our security officers",
                                                    details: "We provide continuous support and training for our concierge security officers to ensure that they remain prepared for any challenges. Our ongoing support includes regular training updates, performance monitoring, and 24/7 management support."
                                                }
                                            ].map((item, index) => (
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
                                                                    {item.iconSymbol}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.title}</h5>
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
                                                                {item.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {item.details}
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

                    {/*===== Industries We Serve Section =====*/}
                    <div className="industries-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-building me-2"></i>
                                            INDUSTRIES WE SERVE
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Industries We Serve
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        Experience across all sectors requiring concierge security services
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded-3 shadow-lg h-100 text-center" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="industry-icon mb-3">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <Building size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Corporate Offices</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Provide a safe and professional environment for employees, clients, and visitors.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded-3 shadow-lg h-100 text-center" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="industry-icon mb-3">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <Home size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Residential Buildings</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Ensure the safety of residents while maintaining a welcoming atmosphere.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded-3 shadow-lg h-100 text-center" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="industry-icon mb-3">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <Star size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Hotels and Motels</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Enhance the guest experience while ensuring safety and security.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="industry-card bg-white p-4 rounded-3 shadow-lg h-100 text-center" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="industry-icon mb-3">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247'
                                                }}
                                            >
                                                <Package size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Retail Locations</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Improve customer safety and satisfaction with both security presence and excellent service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-question-circle me-2"></i>
                                            FREQUENTLY ASKED QUESTIONS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Everything You Need to Know About Concierge Security
                                    </h2>
                                </div>
                            </div>

                            <div className="row g-4 g-md-3 g-lg-4">
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

                    {/*===== Final CTA Section =====*/}
                    
                </div>
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            
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

                .btn-outline-light:hover {
                    background-color: #ffffff !important;
                    border-color: #ffffff !important;
                    color: #1e2247 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
                }
                
                .benefit-card:hover {
                    transform: perspective(1000px) rotateX(-5deg) translateY(-15px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
                    border-color: rgba(253, 197, 26, 0.3);
                }
                
                .benefit-card:hover .benefit-icon {
                    transform: scale(1.15) rotateY(10deg);
                    box-shadow: 0 15px 40px rgba(30, 34, 71, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
                }
                
                .benefit-card:hover .benefit-icon > div:first-child {
                    opacity: 1;
                    transform: rotate(360deg);
                }
                
                .benefit-card:hover .benefit-icon > div:last-child {
                    opacity: 1;
                    transform: scale(1.2);
                }
                
                .benefit-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-5px) scale(1.05);
                    text-shadow: 0 3px 6px rgba(253, 197, 26, 0.3);
                }
                
                .benefit-card:hover p {
                    color: #495057;
                    transform: translateY(-3px);
                }
                
                .benefit-card:hover .position-absolute:first-child {
                    opacity: 1;
                }
                
                .benefit-card:hover .position-absolute:nth-child(2),
                .benefit-card:hover .position-absolute:nth-child(3),
                .benefit-card:hover .position-absolute:nth-child(4) {
                    opacity: 1;
                }
                
                .benefit-card:hover .expand-indicator {
                    opacity: 1;
                }
                
                .benefit-card:hover .position-absolute:last-child {
                    opacity: 1;
                }
                
                .industry-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 197, 26, 0.3);
                }
                
                .industry-card:hover .industry-icon > div {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(253, 197, 26, 0.4);
                }
                
                .industry-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-3px);
                    text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                }
                
                .industry-card:hover p {
                    color: #495057;
                    transform: translateY(-2px);
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
            `}</style>
        </>
    )
}