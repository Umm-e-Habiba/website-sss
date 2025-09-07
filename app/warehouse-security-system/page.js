'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function WarehouseSecurityPage() {
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
            title: "Warehouse CCTV Systems",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "Continuous surveillance to deter criminals, track stock movement, and ensure property and employee safety",
            details: "Our warehouse CCTV systems provide continuous surveillance to deter potential criminals, track stock movement, and ensure that your property and employees are safe. CCTV surveillance can prevent theft, monitor hazardous staff behaviors, and reduce incidents of embezzlement, fraud, and vandalism. By maintaining constant oversight of incoming and outgoing activity, our systems ensure that your warehouse remains secure, and any risks are identified early."
        },
        {
            title: "Warehouse Access Control Systems", 
            icon: <Key size={24} />,
            iconSymbol: <Key size={24} />,
            description: "Limit entry to authorized personnel only, enhancing security of sensitive areas and controlling vehicle access",
            details: "Our warehouse access control systems are designed to limit entry to authorized personnel only. This system enhances the security of sensitive areas, such as storage rooms and high-value asset locations. It can also control which vehicles are allowed on-site, ensuring that only trusted individuals have access. When integrated with CCTV surveillance, our access control systems provide a robust, multi-layered security solution."
        },
        {
            title: "Warehouse Alarm Systems",
            icon: <Bell size={24} />,
            iconSymbol: <Bell size={24} />,
            description: "Advanced alarm systems that detect intruders immediately, alerting you and our monitoring team for rapid response",
            details: "To further secure your warehouse, we offer advanced warehouse alarm systems that detect intruders immediately. These systems alert you and our monitoring team the moment unauthorized access is detected, ensuring rapid response times. Whether it's after hours or during peak operations, our alarm systems ensure that your warehouse remains protected at all times."
        }
    ];

    const faqData = [
        {
            question: "What is a warehouse security system?",
            answer: "A warehouse security system includes a combination of CCTV surveillance, access control, alarm monitoring, and security guards to protect your warehouse from theft, vandalism, and accidents."
        },
        {
            question: "How do warehouse CCTV systems work?",
            answer: "Warehouse CCTV systems provide continuous surveillance of your property. The footage is monitored in real-time or recorded for later review, allowing you to track inventory, monitor employee behavior, and detect security breaches."
        },
        {
            question: "Can warehouse security systems help with employee theft?",
            answer: "Yes, warehouse security systems can monitor employee interactions with goods and track any suspicious activities, reducing the risk of employee theft."
        },
        {
            question: "How can access control improve warehouse security?",
            answer: "Access control systems ensure that only authorized individuals are allowed to enter sensitive areas within your warehouse, reducing the risk of theft and ensuring better management of personnel."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="WAREHOUSE SECURITY SOLUTIONS"
                mainTitle="Warehouse Security Solutions in Melbourne"
                subtitle="Comprehensive Warehouse Security Systems Melbourne - Metro Guards"
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
                                                COMPREHENSIVE PROTECTION
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
                                            WAREHOUSE SECURITY<br />
                                            <span style={{color: '#fdc51a'}}>SOLUTIONS</span>
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
                                                At Metro Guards, we understand the critical importance of securing your warehouse operations. With warehousing, shipping, and logistics companies managing large volumes of stock, equipment, and machinery daily, warehouse security becomes a top priority.
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
                                                src="/assets/img/blog/warehouse.jpg" 
                                                alt="Professional Warehouse Security Systems" 
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
                                                src="/assets/img/blog/warehouse 2.webp" 
                                                alt="Professional Warehouse Security Systems" 
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
                                                <p>Warehouses are vulnerable to theft, vandalism, and accidents, especially with high-value goods and equipment stored at all times. Metro Guards offers tailored warehouse security solutions that help mitigate risks, prevent financial losses, and ensure the safety of your premises.</p>
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
                                                    <Package size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>High-Value Asset Protection</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Monitoring & Response</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Cutting-Edge Technology</span>
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
                                                Comprehensive Warehouse Security Systems Melbourne
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Our warehouse security systems in Melbourne are designed to safeguard your valuable assets, prevent theft, and ensure a safe working environment for your employees and contractors with cutting-edge technology and professional security services.
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
                                        Benefits of Installing Warehouse Security Systems
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        By installing comprehensive warehouse security systems, you create multiple layers of protection that safeguard your business operations and valuable assets.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { 
                                        icon: <Shield size={40} />, 
                                        title: "Prevention of Theft and Vandalism", 
                                        description: "By installing CCTV systems, alarm systems, and access control, you create a formidable barrier against theft and vandalism. The presence of security systems acts as a visible deterrent, significantly reducing the likelihood of break-ins and malicious damage." 
                                    },
                                    { 
                                        icon: <Users size={40} />, 
                                        title: "Reducing OH&S Risks", 
                                        description: "Our warehouse CCTV systems not only protect against external threats but also help monitor internal operations, ensuring compliance with Occupational Health and Safety (OH&S) standards. Monitoring staff movement and machinery use can help prevent accidents, improve safety protocols, and reduce workplace injuries." 
                                    },
                                    { 
                                        icon: <Package size={40} />, 
                                        title: "Stock and Handling Discrepancies", 
                                        description: "Security cameras and monitoring systems can track inventory as it moves through your warehouse, minimizing the risk of theft or errors in stock handling. Real-time footage allows you to review activities and identify any discrepancies that could lead to financial losses." 
                                    },
                                    { 
                                        icon: <UserX size={40} />, 
                                        title: "Employee Theft Prevention", 
                                        description: "Employee theft is a significant concern for warehouses handling high-value goods. Our security systems help deter dishonest activities by keeping an eye on staff interactions with goods, ensuring that any fraudulent behavior is detected immediately." 
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
                                                src="/assets/img/blog/warehouse 2.webp" 
                                                alt="Metro Guards Warehouse Security Team" 
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
                                                <p>Metro Guards offers comprehensive, tailored warehouse security solutions to meet the unique needs of your business. From CCTV surveillance to access control and security patrols, we provide top-tier security systems that keep your warehouse safe.</p>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Security Plans</span>
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
                                                    <Users size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Expert Security Team</span>
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
                                                    <DollarSign size={20} />
                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Cost-Effective Solutions</span>
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
                                                Why Choose Metro Guards for Warehouse Security?
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We are committed to providing reliable, professional security services that protect your assets, employees, and property, ensuring your warehouse operations stay secure and efficient.
                                            </p>
                                        </div>
                                        
                                        {/* Expandable Why Choose Cards */}
                                        <div className="why-choose-accordion">
                                            {[
                                                {
                                                    title: "Tailored Security Solutions",
                                                    icon: <Settings size={24} />,
                                                    iconSymbol: <Settings size={24} />,
                                                    description: "Customized security plans designed specifically for your warehouse's unique requirements",
                                                    details: "At Metro Guards, we recognize that every warehouse has unique security needs. We work with you to create a customized warehouse security plan that meets your specific requirements. Our team of experts will conduct a thorough site evaluation and design a solution that maximizes security while minimizing potential risks."
                                                },
                                                {
                                                    title: "Experienced Security Personnel",
                                                    icon: <Users size={24} />,
                                                    iconSymbol: <Users size={24} />,
                                                    description: "Highly trained security guards with 24/7 availability for comprehensive protection",
                                                    details: "Our security guards are highly trained to handle a wide range of scenarios, from theft prevention to emergency response. With 24/7 availability, our team is always ready to ensure that your warehouse remains secure, regardless of the time of day or night."
                                                },
                                                {
                                                    title: "Advanced Technology",
                                                    icon: <Cpu size={24} />,
                                                    iconSymbol: <Cpu size={24} />,
                                                    description: "Latest security technology including CCTV systems, access control, and alarm monitoring",
                                                    details: "We utilize the latest security technology, including CCTV systems, access control solutions, and alarm monitoring, to provide round-the-clock protection for your warehouse. Our systems are designed to be both efficient and effective, giving you peace of mind knowing your assets are safe."
                                                },
                                                {
                                                    title: "Cost-Effective Security",
                                                    icon: <DollarSign size={24} />,
                                                    iconSymbol: <DollarSign size={24} />,
                                                    description: "Affordable solutions that save money by preventing theft, damage, and workplace injuries",
                                                    details: "Investing in warehouse security systems can save you money in the long run by preventing costly theft, damage, and workplace injuries. Our solutions are designed to be both affordable and effective, ensuring that you get the best value for your investment."
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

                    {/*===== Our Warehouse Security Solutions Section =====*/}
                    <div className="solutions-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-check me-2"></i>
                                            OUR SOLUTIONS
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Our Warehouse Security Solutions
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        We offer a range of comprehensive warehouse security services tailored to your specific needs. These include:
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="solution-icon mb-3 text-center">
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
                                                <Camera size={28} />
                                        </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>24/7 CCTV Surveillance</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Constant monitoring to protect your assets, monitor operations, and ensure personnel safety.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="solution-icon mb-3 text-center">
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
                                                <Key size={28} />
                                        </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Access Control</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Control who enters your warehouse, preventing unauthorized access and reducing security risks.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="solution-icon mb-3 text-center">
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
                                                <Bell size={28} />
                                        </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Alarm Monitoring</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Real-time alerts and immediate responses to security breaches, ensuring quick intervention when necessary.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="solution-icon mb-3 text-center">
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
                                                <Truck size={28} />
                                        </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Mobile Patrols</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Random or scheduled patrols around your warehouse to deter criminal activity and ensure continuous monitoring.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="solution-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a'}}>
                                        <div className="solution-icon mb-3 text-center">
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
                                                <Shield size={28} />
                                        </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Security Guards</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            On-site security personnel who offer a visible deterrent and can act quickly in case of a security breach.
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
                                        Everything You Need to Know About Warehouse Security
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
                
                .solution-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 197, 26, 0.3);
                }
                
                .solution-card:hover .solution-icon > div {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(253, 197, 26, 0.4);
                }
                
                .solution-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-3px);
                    text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                }
                
                .solution-card:hover p {
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