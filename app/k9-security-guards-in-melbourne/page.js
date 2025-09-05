'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu, UserPlus, Handshake, Star, Heart, Building2, Hospital, GraduationCap, Warehouse, ShoppingCart, Store, Gem, Box, ChevronDown } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function K9SecurityPage() {
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
            title: "K9 Detection Services",
            icon: <Search size={24} />,
            iconSymbol: <Eye size={24} />,
            description: "Highly trained dogs for drug, explosive, and contraband detection",
            details: "Our K9 teams are specially trained to detect drugs, explosives, weapons, and other contraband with exceptional accuracy. These highly skilled dogs can search large areas quickly and efficiently, providing an additional layer of security."
        },
        {
            title: "Patrol & Deterrence", 
            icon: <Shield size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Visible K9 presence that deters criminal activity",
            details: "The presence of our trained security dogs acts as a powerful deterrent to potential criminals. Our K9 teams patrol your premises, providing both physical security and psychological deterrence through their professional appearance and training."
        },
        {
            title: "Emergency Response",
            icon: <AlertTriangle size={24} />,
            iconSymbol: <Bell size={24} />,
            description: "Rapid response K9 teams for emergency situations",
            details: "Our K9 security teams are trained to respond quickly to emergency situations, providing immediate assistance and maintaining control during high-stress scenarios. They work in coordination with human security personnel for maximum effectiveness."
        },
    ];

    const faqData = [
        {
            question: "What types of K9 security services do you provide?",
            answer: "We provide comprehensive K9 security services including drug detection, explosive detection, patrol services, crowd control, and emergency response. Our trained dogs work alongside human security personnel to provide enhanced protection for your property."
        },
        {
            question: "Are your K9 teams properly licensed and certified?",
            answer: "Yes, all our K9 teams are fully licensed and certified according to Australian security industry standards. Our dogs undergo rigorous training and regular recertification to ensure they maintain the highest levels of performance and safety."
        },
        {
            question: "How do K9 security services differ from regular security?",
            answer: "K9 security provides enhanced detection capabilities, stronger deterrence through the presence of trained dogs, and the ability to search large areas quickly. Dogs can detect threats that humans might miss and provide an additional layer of security that criminals are less likely to challenge."
        },
        {
            question: "What breeds of dogs do you use for security?",
            answer: "We use various breeds including German Shepherds, Belgian Malinois, and Labrador Retrievers, all selected for their intelligence, trainability, and temperament. Each dog is specifically trained for their role and undergoes continuous assessment to ensure optimal performance."
        },
        {
            question: "How much do K9 security services cost?",
            answer: "K9 security services are priced competitively based on your specific needs, location, and duration of service. Contact us for a customized quote that takes into account your security requirements and budget considerations."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="K9 SECURITY SERVICES"
                mainTitle="Professional K9 Security Guards"
                subtitle="Elite Canine Protection Services in Melbourne - Advanced Detection and Security Solutions"
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
                                                    fontSize: '0.9rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                <i className="bi bi-shield-check me-2"></i>
                                                Elite Canine Protection
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-4 fw-bold mb-4" 
                                            style={{color: '#1e2247', lineHeight: '1.2'}}
                                        >
                                            Professional K9 Security Guards in Melbourne
                                        </h1>
                                        
                                        <p 
                                            className="mb-5" 
                                            style={{color: '#6c757d', lineHeight: '1.6'}}
                                        >
                                           Canine/Dog Security Melbourne is becoming very common nowadays. These highly trained K9 Security dogs are integral to security teams across various sectors, including law enforcement, military, private security firms, and even individual households. With their exceptional senses and unwavering loyalty, our security dogs provide an added layer of protection and assist in detecting threats, preventing crime, and maintaining a secure environment. If you are looking for the best Canine- Dog Security Services, look no further than Metropolitan Guard Security Services.</p>
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
                                            <a 
                                                href="/get-quotation" 
                                                className="btn btn-primary px-5 py-3"
                                                style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    fontWeight: '600',
                                                    fontSize: '1rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(253, 197, 26, 0.3)';
                                                }}
                                            >
                                                Get Free Quote <i className="bi bi-arrow-right ms-2"></i>
                                            </a>
                                            <a 
                                                href="tel:1300731173" 
                                                className="btn btn-outline-primary px-5 py-3"
                                                style={{
                                                    borderColor: '#1e2247',
                                                    color: '#1e2247',
                                                    borderRadius: '8px',
                                                    fontWeight: '600',
                                                    fontSize: '1rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                Call Now <i className="bi bi-telephone ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-image position-relative">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                                            }}
                                        >
                                            <img 
                                                src="/assets/img/about/community.jpg" 
                                                alt="K9 Security Services" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            {/* Decorative elements */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    top: '20px',
                                                    right: '20px',
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#1e2247',
                                                    fontSize: '24px',
                                                    boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)'
                                                }}
                                            >
                                                <Shield size={32} />
                                            </div>
                                        </div>
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
                                                src="/assets/img/about/community.jpg" 
                                                alt="K9 Security Services" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',height:"500px",width:"100%"
                                                }}
                                            />
                                        </div>
                                        <div className="features-list mt-4">
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '8px',
                                                        color: '#1e2247'
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
                                                        borderRadius: '8px',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <UserCheck size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Licensed Professional Handlers</span>
                                            </div>
                                            <div className="feature-item d-flex align-items-center">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '8px',
                                                        color: '#1e2247'
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
                                    <div className="services-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <i className="bi bi-shield-check me-2"></i>
                                                OUR SERVICES
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Professional K9 Security Services
                                        </h2>
                                        <p className="lead mb-4" style={{color: '#6c757d'}}>
                                            Our specialized trained K9 security teams provide elite canine protection services across Melbourne. These highly trained security dogs are integral to security teams across various sectors, providing an added layer of protection and assisting in detecting threats, preventing crime, and maintaining a secure environment.
                                        </p>
                                        <div className="services-accordion">
                                            {services.map((service, index) => (
                                                <div key={index} className="service-item mb-3">
                                                    <div 
                                                        className="service-header d-flex align-items-center justify-content-between p-3"
                                                        style={{
                                                            backgroundColor: '#f8f9fa',
                                                            borderRadius: '10px',
                                                            cursor: 'pointer',
                                                            border: '1px solid #e9ecef',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onClick={() => toggleService(index)}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#e9ecef';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <div 
                                                                className="service-icon me-3 d-flex align-items-center justify-content-center"
                                                                style={{
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    backgroundColor: '#1e2247',
                                                                    borderRadius: '8px',
                                                                    color: '#fdc51a'
                                                                }}
                                                            >
                                                                {service.icon}
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-1 fw-bold" style={{color: '#1e2247'}}>{service.title}</h5>
                                                                <p className="mb-0 small" style={{color: '#6c757d'}}>{service.description}</p>
                                                            </div>
                                                        </div>
                                                        <div 
                                                            className="toggle-icon"
                                                            style={{
                                                                transform: activeService === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                transition: 'transform 0.3s ease',
                                                                color: '#1e2247'
                                                            }}
                                                        >
                                                            <ChevronDown size={20} />
                                                        </div>
                                                    </div>
                                                    {activeService === index && (
                                                        <div 
                                                            className="service-details p-3"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 10px 10px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                                                {service.details}
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
                                            Why Choose Metro Guards K9 Security?
                                        </h2>
                                        <p className="lead text-white mb-4" style={{opacity: '0.9'}}>
                                            Our K9 security teams provide unmatched protection through highly trained dogs and professional handlers. We offer comprehensive security solutions that combine the natural instincts of our canine partners with advanced training techniques.
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
                                                    <Search size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-white fw-bold mb-2">Advanced Detection Capabilities</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        Our K9 teams are specially trained to detect drugs, explosives, weapons, and other contraband with exceptional accuracy. These highly skilled dogs can search large areas quickly and efficiently, providing an additional layer of security that human guards alone cannot match.
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
                                                    <Shield size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-white fw-bold mb-2">Superior Deterrence and Protection</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        The presence of our trained security dogs acts as a powerful deterrent to potential criminals. Our K9 teams patrol your premises, providing both physical security and psychological deterrence through their professional appearance and training, ensuring maximum protection for your property and personnel.
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
                                                src="/assets/img/about/community.jpg" 
                                                alt="K9 Security Benefits" 
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
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                <i className="bi bi-question-circle me-2"></i>
                                                FREQUENTLY ASKED QUESTIONS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            K9 Security Services FAQ
                                        </h2>
                                        <p className="lead" style={{color: '#6c757d', maxWidth: '600px', margin: '0 auto'}}>
                                            Get answers to common questions about our professional K9 security services in Melbourne.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="faq-accordion">
                                        {faqData.map((faq, index) => (
                                            <div key={index} className="faq-item mb-3">
                                                <div 
                                                    className="faq-header d-flex align-items-center justify-content-between p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        border: '1px solid #e9ecef',
                                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onClick={() => toggleFaq(index)}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                                    }}
                                                >
                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>
                                                        {faq.question}
                                                    </h5>
                                                    <div 
                                                        className="faq-icon"
                                                        style={{
                                                            transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.3s ease',
                                                            color: '#fdc51a'
                                                        }}
                                                    >
                                                        <ChevronDown size={24} />
                                                    </div>
                                                </div>
                                                {activeFaq === index && (
                                                    <div 
                                                        className="faq-content p-4"
                                                        style={{
                                                            backgroundColor: '#f8f9fa',
                                                            borderRadius: '0 0 10px 10px',
                                                            border: '1px solid #e9ecef',
                                                            borderTop: 'none',
                                                            animation: 'slideDown 0.3s ease'
                                                        }}
                                                    >
                                                        <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
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

                    {/*===== Quote Form Section =====*/}
                    <div className="quote-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
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
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                <i className="bi bi-clipboard-check me-2"></i>
                                            Get Started
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4 text-white">
                                            GET A FREE QUOTE
                                        </h2>
                                        <p className="lead text-white-50">
                                            K9 Security Services Melbourne
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="row">
                                        {/* Quote Form */}
                                        <div className="col-lg-8">
                                            <div 
                                                className="quote-form-wrapper p-5" 
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                                    backdropFilter: 'blur(10px)'
                                                }}
                                            >
                                                <form
                                                    className="quote-form"
                                                    action="/api/k9"
                                                    method="POST"
                                                    noValidate
                                                >
                                                    {/* honeypot (spam trap) */}
                                                    <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Your Name</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control p-3" 
                                                                    id="name" 
                                                                    name="name" 
                                                                    placeholder="Enter your full name" 
                                                                    required 
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Your Email</label>
                                                                <input 
                                                                    type="email" 
                                                                    className="form-control p-3" 
                                                                    id="email" 
                                                                    name="email" 
                                                                    placeholder="Enter your email" 
                                                                    required 
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Your Phone Number</label>
                                                                <input 
                                                                    type="tel" 
                                                                    className="form-control p-3" 
                                                                    id="phone" 
                                                                    name="phone" 
                                                                    placeholder="Enter your phone number" 
                                                                    required 
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Service Type</label>
                                                                <select 
                                                                    className="form-control p-3" 
                                                                    id="serviceType" 
                                                                    name="serviceType" 
                                                                    required 
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                >
                                                                    <option value="">Select Service Type</option>
                                                                    <option value="k9-detection">K9 Detection Services</option>
                                                                    <option value="k9-patrol">K9 Patrol & Deterrence</option>
                                                                    <option value="k9-emergency">K9 Emergency Response</option>
                                                                    <option value="k9-event">Event K9 Security</option>
                                                                    <option value="k9-vip">VIP K9 Protection</option>
                                                                    <option value="other">Other K9 Security Needs</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Location</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control p-3" 
                                                                    id="location" 
                                                                    name="location" 
                                                                    placeholder="Enter your location" 
                                                                    required
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Duration</label>
                                                                <select 
                                                                    className="form-control p-3" 
                                                                    id="duration" 
                                                                    name="duration" 
                                                                    required 
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                >
                                                                    <option value="">Select Duration</option>
                                                                    <option value="one-time">One-time Event</option>
                                                                    <option value="daily">Daily Service</option>
                                                                    <option value="weekly">Weekly Service</option>
                                                                    <option value="monthly">Monthly Service</option>
                                                                    <option value="ongoing">Ongoing Service</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12 mb-4">
                                                        <div className="form-group">
                                                                <label className="form-label fw-bold" style={{ color: "#1e2247 !important", fontSize: "1rem", fontWeight: "600" }}>Message</label>
                                                                <textarea 
                                                                    className="form-control p-3" 
                                                                    id="message" 
                                                                    name="message" 
                                                                    rows="4" 
                                                                    placeholder="Tell us about your K9 security requirements..." 
                                                                required
                                                                    style={{
                                                                        borderRadius: '10px',
                                                                        border: '2px solid #e9ecef',
                                                                        fontSize: '1rem',
                                                                        transition: 'all 0.3s ease',
                                                                        resize: 'vertical'
                                                                    }}
                                                                    onFocus={(e) => {
                                                                        e.target.style.borderColor = '#fdc51a';
                                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(253, 197, 26, 0.25)';
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        e.target.style.borderColor = '#e9ecef';
                                                                        e.target.style.boxShadow = 'none';
                                                                    }}
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <button 
                                                            type="submit" 
                                                            className="btn btn-primary btn-lg px-5 py-3"
                                                            style={{ 
                                                                borderRadius: "10px", 
                                                                fontSize: "18px", 
                                                                fontWeight: "bold",
                                                                backgroundColor: "#FDC51A",
                                                                border: "none",
                                                                color: "#1E2247",
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.5px',
                                                                transition: 'all 0.3s ease',
                                                                boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.transform = 'translateY(-2px)';
                                                                e.target.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.4)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.transform = 'translateY(0)';
                                                                e.target.style.boxShadow = '0 4px 15px rgba(253, 197, 26, 0.3)';
                                                            }}
                                                        >
                                                            GET FREE QUOTE
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Quick Actions Sidebar */}
                                        <div className="col-lg-4">
                                            <div className="quick-actions-sidebar">
                                                {/* K9 Security Services Card */}
                                                <div 
                                                    className="service-highlight-card p-4 mb-4" 
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                        borderRadius: '15px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                                        border: '3px solid #1E2247',
                                                        backdropFilter: 'blur(10px)'
                                                    }}
                                                >
                                                    <div className="text-center">
                                                        <div 
                                                            className="service-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247'
                                                            }}
                                                        >
                                                            <Shield size={40} />
                                                        </div>
                                                        <h3 className="fw-bold mb-3" style={{color: '#1e2247'}}>K9 Security Services</h3>
                                                        <p className="mb-4" style={{color: '#6c757d'}}>Professional K9 security solutions across Melbourne and surrounding areas.</p>
                                                        
                                                        <div className="contact-quick-info">
                                                            <div 
                                                                className="d-flex align-items-center justify-content-center mb-3 p-3" 
                                                                style={{
                                                                    backgroundColor: '#f8f9fa', 
                                                                    borderRadius: '8px',
                                                                    border: '1px solid #e9ecef'
                                                                }}
                                                            >
                                                                <Phone size={20} className="me-2" style={{color: '#fdc51a'}} />
                                                                <span className="fw-bold" style={{color: '#1e2247'}}>1300 73 11 73</span>
                                                            </div>
                                                            <div 
                                                                className="d-flex align-items-center justify-content-center mb-3 p-3" 
                                                                style={{
                                                                    backgroundColor: '#f8f9fa', 
                                                                    borderRadius: '8px',
                                                                    border: '1px solid #e9ecef'
                                                                }}
                                                            >
                                                                <MapPin size={20} className="me-2" style={{color: '#fdc51a'}} />
                                                                <span className="small" style={{color: '#6c757d'}}>admin@metroguards.com.au</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Emergency Contact */}
                                                <div 
                                                    className="emergency-contact p-4 text-center" 
                                                    style={{
                                                        backgroundColor: '#FDC51A', 
                                                        borderRadius: '15px', 
                                                        color: '#1e2247',
                                                        boxShadow: '0 10px 30px rgba(253, 197, 26, 0.3)'
                                                    }}
                                                >
                                                    <h4 className="fw-bold mb-3">Emergency Contact</h4>
                                                    <p className="mb-3">Need immediate K9 security assistance?</p>
                                                    <a 
                                                        href="tel:1300731173" 
                                                        className="btn btn-dark btn-lg px-4 py-2"
                                                        style={{
                                                            borderRadius: '8px',
                                                            fontWeight: '600',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >
                                                        Call Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
                
                .industry-card:hover {
                    transform: translateY(-10px) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1);
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
                
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @media (max-width: 768px) {
                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .hero-buttons .btn {
                        width: 100%;
                        max-width: 300px;
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