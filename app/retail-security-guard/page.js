'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu, UserPlus, Handshake, Star, Heart, Building2, Hospital, GraduationCap, Warehouse, ShoppingCart, Store, Gem, Box, ChevronDown } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function RetailSecurityPage() {
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
            title: "Customized Security Solutions",
            icon: <Settings size={24} />,
            iconSymbol: <Settings size={24} />,
            description: "Tailored services designed for your business size, location, and operational requirements",
            details: "Metro Guards understands that each retail store has its own set of security needs. That's why we provide customized retail security solutions that are specifically designed for your business size, location, and operational requirements. Whether you need to secure a small boutique or a large shopping center, we work closely with you to ensure our services align with your needs."
        },
        {
            title: "Advanced Security Technology", 
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "Latest CCTV systems with continuous monitoring and integrated security systems",
            details: "To ensure maximum protection, Metro Guards utilizes the latest in security technology. Our CCTV systems offer continuous monitoring of your store, allowing you to track activity both during business hours and after closing. Our integrated systems include alarm monitoring, access control, and surveillance systems that work seamlessly to prevent theft, vandalism, and other security threats."
        },
        {
            title: "Professional Security Officers",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Skilled guards trained in loss prevention and customer service",
            details: "Our retail security officers are specifically trained to handle the unique challenges that retail environments face. They are proficient in managing customer flow, monitoring suspicious activity, and deterring theft. As visible deterrents, our uniformed officers help maintain a sense of security for your customers, while also ensuring the safety of your employees."
        },
        {
            title: "Covert Loss Prevention",
            icon: <Eye size={24} />,
            iconSymbol: <Eye size={24} />,
            description: "Undercover officers for discreet theft detection and prevention",
            details: "For stores that require a more discreet approach to loss prevention, we provide covert security officers. These trained personnel work undercover to detect and prevent theft without being noticed by customers or employees. Their presence is a powerful tool in reducing organized retail crime and preventing internal theft."
        }
    ];

    const faqData = [
        {
            question: "What types of retail businesses do you serve?",
            answer: "We provide security services for a wide range of retail businesses including retail stores and shopping malls, supermarkets and convenience stores, warehouses and distribution centers, high-end retail outlets and boutiques, and educational institutions and healthcare facilities."
        },
        {
            question: "Do you provide both uniformed and covert security officers?",
            answer: "Yes, we offer both uniformed security officers who serve as visible deterrents and covert loss prevention officers who work undercover to detect theft without being noticed by customers or employees."
        },
        {
            question: "What security technology do you use?",
            answer: "We utilize the latest security technology including CCTV systems with continuous monitoring, alarm monitoring systems, access control systems, and integrated surveillance systems that work seamlessly to prevent theft, vandalism, and other security threats."
        },
        {
            question: "How do you customize security solutions for different retail businesses?",
            answer: "We work closely with each client to understand their specific security needs based on business size, location, and operational requirements. Whether you need to secure a small boutique or a large shopping center, we design solutions that align with your unique needs."
        },
        {
            question: "What training do your retail security officers receive?",
            answer: "Our retail security officers are specifically trained to handle retail environment challenges including customer flow management, suspicious activity monitoring, conflict resolution, first aid, emergency response, and loss prevention techniques."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="RETAIL SECURITY SOLUTIONS"
                mainTitle="Professional Retail Security Services"
                subtitle="Protecting Your Business with Tailored Security Solutions in Melbourne"
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
                                                RETAIL PROTECTION
                                            </span>
                                        </div>
                                        <h2 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                            Ensuring Protection for Your Business with Retail Security Solutions
                                        </h2>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                                Retail businesses are susceptible to a variety of security threats, including theft, vandalism, and internal losses. At Metro Guards, we specialize in offering tailored retail security guard services designed to safeguard your assets, ensure a safe environment for your customers, and protect your employees.
                                            </p>
                                        <p 
                                            className="mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1rem',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            Whether you run a single store, a chain of retail outlets, or a shopping mall, we understand the unique challenges faced by retail businesses and provide solutions that cater to your specific needs. Our retail security services are designed to tackle the various risks in a retail environment, offering everything from access control and surveillance to loss prevention and emergency response.
                                        </p>
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
                                                <a 
                                                    href="/get-quotation" 
                                                className="btn btn-primary px-4 py-3"
                                                    style={{
                                                    backgroundColor: '#1e2247',
                                                        border: 'none',
                                                    borderRadius: '8px',
                                                        fontWeight: '600',
                                                    fontSize: '0.95rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(30, 34, 71, 0.3)',
                                                    color: '#ffffff'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.3)';
                                                }}
                                            >
                                                Get Free Quote <i className="bi bi-arrow-right ms-2"></i>
                                                </a>
                                                <a 
                                                    href="tel:1300731173" 
                                                className="btn btn-outline-primary px-4 py-3"
                                                    style={{
                                                    color: '#1e2247',
                                                    borderColor: '#fdc51a',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '8px',
                                                        fontWeight: '600',
                                                    fontSize: '0.95rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = '#ffffff';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#fdc51a';
                                                    e.target.style.color = '#1e2247';
                                                    e.target.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                Call Now <i className="bi bi-telephone ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-image position-relative">
                                        <img 
                                            src="/assets/img/blog/retail.jpg" 
                                            alt="Retail Security Solutions" 
                                            className="img-fluid rounded-4 shadow-lg"
                                            style={{
            width: '100%', 
                                                height: '500px',
            objectFit: 'cover' 
                                            }}
                                        />
                                        {/* Decorative Elements */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                top: '-20px',
                                                right: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                background: 'linear-gradient(135deg, #fdc51a 0%, #ffd700 100%)',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                bottom: '-30px',
                                                left: '-30px',
                                                width: '150px',
                                                height: '150px',
                                                background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)',
                                                borderRadius: '50%',
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
                                                src="/assets/img/blog/retail 2.webp" 
                                                alt="Retail Security Services" 
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
                                                <p>Our retail security services provide comprehensive protection for your business, customers, and employees with professional security solutions.</p>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Available Service</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Licensed Professional Guards</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Cost-Effective Solutions</span>
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
                                                Our Retail Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We provide comprehensive retail security solutions designed to protect your business, customers, and employees from various security threats.
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
                                                                        color: activeService === index ? '#ffffff' : '#6c757d',
                                                                        transition: 'all 0.3s ease',
                                                                        transform: activeService === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                                                    }}
                                                                >
                                                                    <ChevronDown size={20} />
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
                                                                borderLeft: '4px solid #fdc51a'
                                                            }}
                                                        >
                                                            <div className="service-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7'}}>
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

                    {/*===== Key Benefits Section =====*/}
                    <div className="benefits-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="benefits-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <i className="bi bi-shield-exclamation me-2"></i>
                                                PROFESSIONAL HANDLING
                                            </span>
                                                    </div>
                                        <h2 className="display-5 fw-bold mb-4 text-white">
                                            Why Choose Metro Guards for Your Retail Security?
                                        </h2>
                                        <p className="lead text-white mb-4" style={{opacity: '0.9'}}>
                                            We provide comprehensive retail security solutions that protect your business, enhance customer experience, and ensure operational efficiency.
                                        </p>
                                        <div className="benefits-features">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '10px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <Award size={24} />
                                                    </div>
                                                    <div>
                                                    <h5 className="text-white fw-bold mb-2">Trusted by Melbourne Retailers</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        With years of experience in providing retail security services, Metro Guards has earned the trust of retail businesses across Melbourne. Our security solutions have helped businesses prevent theft, reduce liability, and enhance the overall customer experience.
                                                    </p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '10px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <DollarSign size={24} />
                                                    </div>
                                                    <div>
                                                    <h5 className="text-white fw-bold mb-2">Cost-Effective Security Solutions</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        Metro Guards is committed to offering cost-effective retail security services without compromising on quality. We understand the importance of staying within budget while ensuring the safety and security of your retail operations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="benefits-image mt-5 mt-lg-0">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                                            }}
                                        >
                                            <img 
                                                src="/assets/img/blog/retail.jpg" 
                                                alt="Retail Security Benefits" 
                                                className="img-fluid"
                                                style={{
            width: '100%', 
                                                    height: '100%',
            objectFit: 'cover' 
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Industries We Serve Section =====*/}
                    <div className="industries-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-building me-2"></i>
                                            VERSATILE PROTECTION
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Industries We Serve
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        We provide retail security services for a wide range of industries in Melbourne, tailoring our solutions to meet your specific needs.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { icon: <Store size={32} />, title: "Retail Stores & Malls", description: "From small boutiques to large shopping centers" },
                                    { icon: <ShoppingCart size={32} />, title: "Supermarkets", description: "Grocery stores and convenience outlets" },
                                    { icon: <Warehouse size={32} />, title: "Warehouses", description: "Distribution centers and stock rooms" },
                                    { icon: <Gem size={32} />, title: "High-End Retail", description: "Luxury boutiques and jewelry stores" },
                                    { icon: <Building2 size={32} />, title: "Educational Institutions", description: "Schools and universities" },
                                    { icon: <Hospital size={32} />, title: "Healthcare Facilities", description: "Hospitals and medical centers" }
                                ].map((industry, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div 
                                            className="industry-card h-100 position-relative"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderRadius: '0',
                                                boxShadow: 'none',
                                                border: 'none',
                                                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                                                textAlign: 'center',
                                                overflow: 'visible',
                                                cursor: 'pointer',
                                                padding: '20px'
                                            }}
                                        >
                                            {/* Card container with unique design */}
                                            <div 
                                                className="position-relative h-100"
                                                style={{
                                                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                                                    borderRadius: '30px',
                                                    padding: '35px 25px',
                                                    boxShadow: '0 15px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                                                    border: '1px solid rgba(253, 197, 26, 0.1)',
                                                    transition: 'all 0.6s ease',
                                                    transform: 'perspective(1000px) rotateX(0deg)',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {/* Animated background elements */}
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        top: '-100px',
                                                        left: '-100px',
                                                        width: '200px',
                                                        height: '200px',
                                                        background: 'radial-gradient(circle, rgba(253, 197, 26, 0.1) 0%, transparent 70%)',
                                                        borderRadius: '50%',
                                                        transition: 'all 0.8s ease',
                                                        zIndex: '0'
                                                    }}
                                                ></div>
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '-80px',
                                                        right: '-80px',
                                                        width: '160px',
                                                        height: '160px',
                                                        background: 'radial-gradient(circle, rgba(30, 34, 71, 0.08) 0%, transparent 70%)',
                                                        borderRadius: '50%',
                                                        transition: 'all 0.8s ease',
                                                        zIndex: '0'
                                                    }}
                                                ></div>
                                                
                                                {/* Icon with unique styling */}
                                                <div 
                                                    className="industry-icon mb-4 d-flex align-items-center justify-content-center mx-auto position-relative"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        background: 'linear-gradient(45deg, #1e2247 0%, #2a2d5a 50%, #1e2247 100%)',
                                                        borderRadius: '50%',
                                                        color: '#fdc51a',
                                                        boxShadow: '0 10px 30px rgba(30, 34, 71, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '2',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    {industry.icon}
                                                    
                                                    {/* Rotating ring around icon */}
                                                    <div 
                                                        className="position-absolute"
                                                        style={{
                                                            width: '120px',
                                                            height: '120px',
                                                            border: '2px solid transparent',
                                                            borderTop: '2px solid #fdc51a',
                                                            borderRight: '2px solid #fdc51a',
                                                            borderRadius: '50%',
                                                            top: '-10px',
                                                            left: '-10px',
                                                            animation: 'rotate 3s linear infinite',
                                                            zIndex: '1'
                                                        }}
                                                    ></div>
                                    </div>
                                                
                                                {/* Content */}
                                                <div className="position-relative" style={{zIndex: '2'}}>
                                                    <h5 
                                                        className="fw-bold mb-3" 
                                                        style={{
                                                            color: '#1e2247',
                                                            fontSize: '1.3rem',
                                                            lineHeight: '1.3',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        {industry.title}
                                                    </h5>
                                                    <p 
                                                        className="mb-0" 
                                                        style={{
                                                            color: '#6c757d',
                                                            lineHeight: '1.6',
                                                            fontSize: '0.95rem',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        {industry.description}
                                                    </p>
                                </div>
                                                
                                                {/* Decorative corner elements */}
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        top: '20px',
                                                        right: '20px',
                                                        width: '30px',
                                                        height: '30px',
                                                        background: 'linear-gradient(45deg, #fdc51a, #ffd700)',
                                                        borderRadius: '50%',
                                                        opacity: '0.3',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                                <div 
                                                    className="position-absolute"
                                                    style={{
                                                        bottom: '20px',
                                                        left: '20px',
                                                        width: '20px',
                                                        height: '20px',
                                                        background: 'linear-gradient(45deg, #1e2247, #2a2d5a)',
                                                        borderRadius: '50%',
                                                        opacity: '0.4',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                    </div>
                                </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section section-padding" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="section-header">
                                        <div className="subtitle mb-3">
                                            <span 
                                                className="badge px-3 py-2" 
                                                style={{
                                                    backgroundColor: '#fdc51a', 
                                                    color: '#1e2247', 
                                                    fontWeight: '600',
                                                    fontSize: '0.8rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    borderRadius: '20px'
                                                }}
                                            >
                                                FAQ
                                            </span>
                                        </div>
                                        <h2 
                                            className="display-4 fw-bold mb-4" 
                                            style={{color: '#1e2247'}}
                                        >
                                            Frequently Asked Questions
                                        </h2>
                                        <p 
                                            className="lead" 
                                            style={{color: '#6c757d', maxWidth: '600px', margin: '0 auto'}}
                                        >
                                            Get answers to common questions about our retail security services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="faq-accordion">
                                        {faqData.map((faq, index) => (
                                            <div key={index} className="accordion-item mb-3">
                                                <div 
                                                    className="accordion-header p-4"
                                                    style={{
                                                        backgroundColor: activeFaq === index ? '#ffffff' : '#f8f9fa',
                                                        borderRadius: activeFaq === index ? '12px 12px 0 0' : '12px',
                                                        border: '1px solid #e9ecef',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        borderLeft: '4px solid #fdc51a'
                                                    }}
                                                    onClick={() => toggleFaq(index)}
                                                >
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5 
                                                            className="mb-0 fw-bold" 
                                                            style={{
                                                                color: activeFaq === index ? '#1e2247' : '#495057',
                                                                fontSize: '1.1rem'
                                                            }}
                                                        >
                                                            {faq.question}
                                                        </h5>
                                                        <div 
                                                            className="accordion-icon"
                                            style={{
                                                                transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                transition: 'transform 0.3s ease',
                                                                color: '#1e2247'
                                                            }}
                                                        >
                                                            <ChevronDown size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {activeFaq === index && (
                                                    <div 
                                                        className="accordion-content p-4"
                                            style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '0 0 12px 12px',
                                                            border: '1px solid #e9ecef',
                                                            borderTop: 'none',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                    >
                                                        <p className="mb-0" style={{color: '#495057', lineHeight: '1.7'}}>
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

            <style jsx>{`
                .section-padding {
                    padding: 80px 0;
                }
                
                .min-vh-75 {
                    min-height: 75vh;
                }
                
                .btn:hover {
                    transform: translateY(-2px);
                }
                
                .benefit-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                .benefit-card:hover .benefit-icon > div {
                    transform: scale(1.1);
                    box-shadow: 0 15px 35px rgba(30, 34, 71, 0.4) !important;
                }
                
                .industry-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1);
                    box-shadow: 0 15px 35px rgba(30, 34, 71, 0.4) !important;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .accordion-content {
                    animation: slideDown 0.3s ease;
                }
                
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .industry-card:hover {
                    transform: translateY(-10px) scale(1.02) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1) rotate(5deg) !important;
                    box-shadow: 0 20px 50px rgba(30, 34, 71, 0.4) !important;
                }
                
                .industry-card:hover .industry-icon > div {
                    animation-duration: 1s !important;
                }
                
                @media (max-width: 768px) {
                    .hero-buttons {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .cta-buttons .btn {
                        width: 100%;
                        max-width: 300px;
                    }
                }
            `}</style>
        </>
    )
}