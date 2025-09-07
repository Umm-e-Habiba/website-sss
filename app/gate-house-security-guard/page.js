'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu, UserPlus, Handshake, Star, Heart, Building2, Hospital, GraduationCap, Warehouse } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function GatehouseSecurityPage() {
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
            title: "Access Control and Visitor Management",
            icon: <Key size={24} />,
            iconSymbol: <Key size={24} />,
            description: "Efficient access control ensuring only authorized personnel can enter your property",
            details: "One of the key components of our gatehouse security services is efficient access control. We ensure that only authorized personnel can enter your property by monitoring and managing entry points. Our security guards verify visitors, maintain visitor logs, and ensure that all access protocols are followed. Whether you have a corporate office building, residential complex, or gated community, we create customized access control systems that align with your needs."
        },
        {
            title: "CCTV Surveillance and Monitoring",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "State-of-the-art CCTV systems providing constant monitoring of your premises",
            details: "Surveillance is an essential part of gatehouse security. Our security guards are supported by state-of-the-art CCTV systems that provide constant monitoring of your premises. We use high-definition cameras to track activity around the gatehouse and other critical areas of your property. This technology helps deter criminal activity and ensures that any incidents are recorded for future reference. With 24/7 video monitoring, you can rest assured that your property is always under watchful eyes."
        },
        {
            title: "Emergency Response and Incident Management",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <AlertTriangle size={24} />,
            description: "Swift response to emergencies including medical, fire, and security incidents",
            details: "In case of emergencies, Metro Guards is ready to respond swiftly. Our gatehouse security officers are trained to handle various emergency situations, including medical emergencies, fire incidents, and security breaches. Our guards are equipped to alert authorities and manage the situation until help arrives, ensuring that incidents are resolved quickly and efficiently."
        },
        {
            title: "24/7 Gatehouse Security Monitoring",
            icon: <Clock size={24} />,
            iconSymbol: <Clock size={24} />,
            description: "Around-the-clock monitoring with security professionals always ready to respond",
            details: "We understand that security threats can arise at any time, which is why we offer around-the-clock monitoring of your gatehouse. Our team of security professionals is available 24/7, ready to respond to any alarms or breaches. With continuous surveillance and a rapid response plan, we ensure that your property is protected at all times, day or night."
        }
    ];

    const faqData = [
        {
            question: "What is gatehouse security?",
            answer: "Gatehouse security involves having trained security personnel stationed at the main entrance of your property to control access, monitor visitors, and provide the first line of defense against unauthorized entry and potential threats."
        },
        {
            question: "Why is gatehouse security important?",
            answer: "Gatehouse security is essential as it serves as the first line of defense for your property, preventing unauthorized access, deterring criminal activity, and ensuring the safety of employees, residents, and visitors while maintaining a professional image."
        },
        {
            question: "What services are included in gatehouse security?",
            answer: "Our gatehouse security services include access control, visitor management, CCTV surveillance, emergency response, 24/7 monitoring, and incident management to provide comprehensive protection for your property."
        },
        {
            question: "Which industries can benefit from gatehouse security?",
            answer: "Gatehouse security is suitable for commercial office buildings, residential communities, industrial facilities, construction sites, healthcare facilities, educational institutions, and warehouses and logistics centers."
        },
        {
            question: "How much does gatehouse security cost?",
            answer: "The cost varies depending on your property size, security requirements, and specific needs. We offer competitive pricing and provide customized quotes based on your individual requirements to ensure you get the best value for your investment."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="GATEHOUSE SECURITY SERVICES"
                mainTitle="Gatehouse Security Services in Melbourne"
                subtitle="Professional Gatehouse Security Services - Metro Guards"
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
                                                FIRST LINE OF DEFENSE
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                            GATEHOUSE<br />
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
                                            At Metro Guards, we understand the importance of gatehouse security as the first line of defense for your property. Whether you are managing a commercial building, a residential complex, or an industrial facility, having an experienced team at the gatehouse is crucial.
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
                                                src="/assets/img/blog/gatehouse.jpg" 
                                                alt="Professional Gatehouse Security Services" 
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
                                                src="/assets/img/blog/gatehouse 2.webp"
                                                alt="Professional Gatehouse Security Services"
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
                                                <p>Gatehouses are essential to maintaining control over access to your premises. Our gatehouse security officers are specially trained to monitor entry points, manage access control systems, and enforce security protocols.</p>
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
                                                    <Key size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Access Control</span>
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
                                                    <Camera size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>CCTV Surveillance</span>
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
                                                    <AlertTriangle size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Emergency Response</span>
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
                                                Our Gatehouse Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                With a combination of skilled personnel and advanced security technology, we offer a holistic approach to protecting your property from unauthorized access, theft, and other potential threats.
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

                    

                    

                    {/*===== Benefits of Gatehouse Security Section =====*/}
                    <div className="benefits-gatehouse-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="benefits-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img
                                                src="/assets/img/blog/gatehouse.jpg"
                                                alt="Benefits of Gatehouse Security Services"
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
                                                <p>Discover how our professional gatehouse security services provide comprehensive protection and peace of mind for your property through our proven benefits.</p>
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
                                                    <Shield size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Enhanced Safety</span>
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
                                                    <Star size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Professional Image</span>
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
                                                    <Settings size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Custom Solutions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="benefits-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    BENEFITS OF GATEHOUSE SECURITY
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Benefits of Gatehouse Security from Metro Guards
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Discover how our professional gatehouse security services provide comprehensive protection and peace of mind for your property through our proven benefits and advantages.
                                            </p>
                                        </div>
                                        
                                        {/* Expandable Benefit Cards */}
                                        <div className="benefits-accordion">
                                            {[
                                                {
                                                    title: "Enhanced Safety and Protection",
                                                    icon: <Shield size={24} />,
                                                    iconSymbol: <Shield size={24} />,
                                                    description: "The presence of professional security personnel at your gatehouse significantly enhances the safety of your property",
                                                    details: "The presence of professional security personnel at your gatehouse significantly enhances the safety of your property. By monitoring access points and conducting regular patrols, our gatehouse security guards help deter theft, vandalism, and unauthorized access. The visibility of security officers also reassures employees, residents, and visitors that their safety is a priority."
                                                },
                                                {
                                                    title: "Professional Image and Customer Service",
                                                    icon: <Star size={24} />,
                                                    iconSymbol: <Star size={24} />,
                                                    description: "Gatehouse security serves as a reflection of your commitment to security and professionalism",
                                                    details: "Gatehouse security does more than just protect your property; it also serves as a reflection of your commitment to security and professionalism. Our concierge-style approach to gatehouse security combines high-end customer service with top-notch security measures. Our friendly and professional security officers create a welcoming environment for visitors while ensuring the highest level of protection."
                                                },
                                                {
                                                    title: "Custom Security Solutions",
                                                    icon: <Settings size={24} />,
                                                    iconSymbol: <Settings size={24} />,
                                                    description: "We recognize that every property has unique security requirements and take a tailored approach",
                                                    details: "At Metro Guards, we recognize that every property has unique security requirements. We take a tailored approach to designing gatehouse security solutions that meet your specific needs. Whether you need advanced access control systems, CCTV surveillance, or visitor management, we work closely with you to implement a security plan that fits your property's size, type, and budget."
                                                },
                                                {
                                                    title: "Cost-Effective Security Services",
                                                    icon: <DollarSign size={24} />,
                                                    iconSymbol: <DollarSign size={24} />,
                                                    description: "We offer cost-effective gatehouse security solutions that provide maximum protection without compromising your budget",
                                                    details: "We understand that security is a critical investment, which is why we offer cost-effective gatehouse security solutions that provide maximum protection without compromising your budget. Our competitive pricing ensures that you receive high-quality security services at an affordable rate, making it easier for you to safeguard your property without breaking the bank."
                                                }
                                            ].map((benefit, index) => (
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
                                                                    {benefit.iconSymbol}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{benefit.title}</h5>
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
                                                                {benefit.description}
                                                            </p>
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {benefit.details}
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
                                        Our gatehouse security services are suitable for a variety of industries in Melbourne
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
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Commercial Office Buildings</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Office towers, business parks, and corporate headquarters
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
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Residential Communities</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Gated communities, apartment complexes, and housing estates
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
                                                <Hospital size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Healthcare Facilities</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Hospitals, medical centers, and aged care facilities
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
                                                <Warehouse size={28} />
                                            </div>
                                        </div>
                                        <h4 className="mb-3" style={{color: '#1e2247'}}>Warehouses and Logistics Centers</h4>
                                        <p style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Industrial facilities, construction sites, and educational institutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Gatehouse Security Section =====*/}
                    <div className="why-gatehouse-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-award me-2"></i>
                                            ESSENTIAL PROTECTION
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Why Gatehouse Security is Essential for Your Property
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        Gatehouse security guard services offer several advantages for any property, from residential complexes to corporate headquarters. The presence of trained security personnel at access points helps prevent unauthorized access and ensures only authorized individuals gain entry.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { 
                                        icon: <Shield size={40} />, 
                                        title: "Enhanced Safety and Protection", 
                                        description: "The presence of professional security personnel at your gatehouse significantly enhances the safety of your property. By monitoring access points and conducting regular patrols, our gatehouse security guards help deter theft, vandalism, and unauthorized access. The visibility of security officers also reassures employees, residents, and visitors that their safety is a priority." 
                                    },
                                    { 
                                        icon: <Star size={40} />, 
                                        title: "Professional Image and Customer Service", 
                                        description: "Gatehouse security does more than just protect your property; it also serves as a reflection of your commitment to security and professionalism. Our concierge-style approach to gatehouse security combines high-end customer service with top-notch security measures. Our friendly and professional security officers create a welcoming environment for visitors while ensuring the highest level of protection." 
                                    },
                                    { 
                                        icon: <Settings size={40} />, 
                                        title: "Custom Security Solutions", 
                                        description: "At Metro Guards, we recognize that every property has unique security requirements. We take a tailored approach to designing gatehouse security solutions that meet your specific needs. Whether you need advanced access control systems, CCTV surveillance, or visitor management, we work closely with you to implement a security plan that fits your property's size, type, and budget." 
                                    },
                                    { 
                                        icon: <DollarSign size={40} />, 
                                        title: "Cost-Effective Security Services", 
                                        description: "We understand that security is a critical investment, which is why we offer cost-effective gatehouse security solutions that provide maximum protection without compromising your budget. Our competitive pricing ensures that you receive high-quality security services at an affordable rate, making it easier for you to safeguard your property without breaking the bank." 
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

                    {/*===== Why Choose MG Section =====*/}
                    <div className="why-choose-mg-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-star me-2"></i>
                                            WHY CHOOSE MG
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Why Choose MG for Gatehouse Security in Melbourne?
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        Discover the advantages that make Metro Guards the preferred choice for professional gatehouse security services
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div 
                                        className="why-choose-card h-100 position-relative"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                            border: '2px solid rgba(253, 197, 26, 0.3)',
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {/* Animated Background */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                top: '-100px',
                                                left: '-100px',
                                                width: '200px',
                                                height: '200px',
                                                background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                borderRadius: '50%',
                                                zIndex: '1',
                                                animation: 'float 6s ease-in-out infinite'
                                            }}
                                        ></div>
                                        
                                        {/* Icon Container */}
                                        <div 
                                            className="icon-container mb-4 position-relative"
                                            style={{zIndex: '2'}}
                                        >
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center position-relative"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e8b502 100%)',
                                                    borderRadius: '25px',
                                                    color: '#1e2247',
                                                    boxShadow: '0 15px 30px rgba(253, 197, 26, 0.4)',
                                                    transition: 'all 0.4s ease'
                                                }}
                                            >
                                                <UserCheck size={36} />
                                                {/* Icon Glow Effect */}
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.3) 0%, transparent 70%)',
                                                        borderRadius: '25px',
                                                        opacity: '0',
                                                        transition: 'all 0.4s ease'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="content position-relative" style={{zIndex: '2'}}>
                                            <h3 className="fw-bold mb-3" style={{color: '#1e2247', fontSize: '1.3rem'}}>
                                                Experienced and Trained Security Personnel
                                            </h3>
                                            <p style={{color: '#6c757d', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                                Our gatehouse security officers are highly trained and experienced, with expertise in various aspects of security, including access control, emergency response, and customer service. We carefully select our security guards to ensure that they meet our high standards for professionalism, reliability, and vigilance.
                                            </p>
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                bottom: '20px',
                                                right: '20px',
                                                width: '40px',
                                                height: '40px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '1'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div 
                                        className="why-choose-card h-100 position-relative"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                            border: '2px solid rgba(253, 197, 26, 0.3)',
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {/* Animated Background */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                top: '-100px',
                                                right: '-100px',
                                                width: '200px',
                                                height: '200px',
                                                background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                borderRadius: '50%',
                                                zIndex: '1',
                                                animation: 'float 6s ease-in-out infinite 2s'
                                            }}
                                        ></div>
                                        
                                        {/* Icon Container */}
                                        <div 
                                            className="icon-container mb-4 position-relative"
                                            style={{zIndex: '2'}}
                                        >
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center position-relative"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e8b502 100%)',
                                                    borderRadius: '25px',
                                                    color: '#1e2247',
                                                    boxShadow: '0 15px 30px rgba(253, 197, 26, 0.4)',
                                                    transition: 'all 0.4s ease'
                                                }}
                                            >
                                                <Cpu size={36} />
                                                {/* Icon Glow Effect */}
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.3) 0%, transparent 70%)',
                                                        borderRadius: '25px',
                                                        opacity: '0',
                                                        transition: 'all 0.4s ease'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="content position-relative" style={{zIndex: '2'}}>
                                            <h3 className="fw-bold mb-3" style={{color: '#1e2247', fontSize: '1.3rem'}}>
                                                Advanced Technology and Equipment
                                            </h3>
                                            <p style={{color: '#6c757d', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                                To support our gatehouse security services, we use the latest security technology, including CCTV systems, access control systems, and alarm monitoring. Our security guards are equipped with the tools they need to monitor your property effectively and respond to incidents promptly. By integrating modern technology into our services, we provide a comprehensive security solution that offers maximum protection for your property.
                                            </p>
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                bottom: '20px',
                                                right: '20px',
                                                width: '40px',
                                                height: '40px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '1'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div 
                                        className="why-choose-card h-100 position-relative"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            borderRadius: '25px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                            border: '2px solid rgba(253, 197, 26, 0.3)',
                                            transition: 'all 0.4s ease',
                                            overflow: 'hidden',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {/* Animated Background */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                top: '-100px',
                                                left: '-100px',
                                                width: '200px',
                                                height: '200px',
                                                background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                borderRadius: '50%',
                                                zIndex: '1',
                                                animation: 'float 6s ease-in-out infinite 4s'
                                            }}
                                        ></div>
                                        
                                        {/* Icon Container */}
                                        <div 
                                            className="icon-container mb-4 position-relative"
                                            style={{zIndex: '2'}}
                                        >
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center position-relative"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    background: 'linear-gradient(135deg, #fdc51a 0%, #e8b502 100%)',
                                                    borderRadius: '25px',
                                                    color: '#1e2247',
                                                    boxShadow: '0 15px 30px rgba(253, 197, 26, 0.4)',
                                                    transition: 'all 0.4s ease'
                                                }}
                                            >
                                                <Heart size={36} />
                                                {/* Icon Glow Effect */}
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.3) 0%, transparent 70%)',
                                                        borderRadius: '25px',
                                                        opacity: '0',
                                                        transition: 'all 0.4s ease'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="content position-relative" style={{zIndex: '2'}}>
                                            <h3 className="fw-bold mb-3" style={{color: '#1e2247', fontSize: '1.3rem'}}>
                                                Reliable and Responsive Support
                                            </h3>
                                            <p style={{color: '#6c757d', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                                At Metro Guards, we are committed to providing exceptional customer service and support. Our team is always available to answer your questions and address any security concerns you may have. Whether you need assistance with a security system installation or need help with an emergency situation, we are here to help.
                                            </p>
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                bottom: '20px',
                                                right: '20px',
                                                width: '40px',
                                                height: '40px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '1'
                                            }}
                                        ></div>
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
                                        Everything You Need to Know About Gatehouse Security
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
                
                .benefit-card-modern:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(253, 197, 26, 0.4);
                }
                
                .benefit-card-modern:hover .benefit-icon-modern > div {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(30, 34, 71, 0.4);
                }
                
                .benefit-card-modern:hover h3 {
                    color: #fdc51a;
                    transform: translateY(-3px);
                    text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                }
                
                .benefit-card-modern:hover p {
                    color: #495057;
                    transform: translateY(-2px);
                }
                
                .why-choose-card:hover {
                    transform: translateY(-15px) scale(1.03);
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 197, 26, 0.5)';
                    border: '2px solid rgba(253, 197, 26, 0.6)';
                }
                
                .why-choose-card:hover .icon-container > div {
                    transform: scale(1.15) rotate(10deg);
                    boxShadow: '0 20px 40px rgba(253, 197, 26, 0.5)';
                }
                
                .why-choose-card:hover .icon-container > div > div:last-child {
                    opacity: 1;
                    transform: scale(1.2);
                }
                
                .why-choose-card:hover h3 {
                    color: #fdc51a;
                    transform: translateY(-5px) scale(1.05);
                    text-shadow: 0 3px 6px rgba(253, 197, 26, 0.3);
                }
                
                .why-choose-card:hover p {
                    color: #495057;
                    transform: translateY(-3px);
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
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
            `}</style>
        </>
    )
}