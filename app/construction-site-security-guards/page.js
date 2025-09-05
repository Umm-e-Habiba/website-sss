'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function ConstructionSecurityPage() {
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
            title: "Security Guards",
            icon: <Shield size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Trained professionals providing round-the-clock protection and access control",
            details: "Our trained and highly visible security guards provide round-the-clock protection, safeguarding your site from theft, vandalism, and unauthorized access. They are equipped to manage access, conduct regular patrols, and secure key areas on-site."
        },
        {
            title: "Access Control and Traffic Management", 
            icon: <Key size={24} />,
            iconSymbol: <Key size={24} />,
            description: "Restrict site entry to authorized personnel only with efficient traffic management",
            details: "We ensure that only authorized personnel have access to your site, preventing potential security breaches. Our access control systems are integrated with efficient traffic management to streamline entry and exit procedures."
        },
        {
            title: "Surveillance Systems",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "24/7 monitoring with recorded footage for evidence",
            details: "Our state-of-the-art CCTV surveillance systems monitor activity on your construction site 24/7, ensuring constant oversight and providing valuable evidence in case of incidents."
        },
        {
            title: "Mobile Patrols",
            icon: <Truck size={24} />,
            iconSymbol: <Truck size={24} />,
            description: "Random checks and inspections to deter criminal activity",
            details: "Mobile patrols provide a dynamic security presence, performing random checks and inspections to deter criminal activity and ensure your site is secure at all times."
        },
        {
            title: "Static Security",
            icon: <User size={24} />,
            iconSymbol: <User size={24} />,
            description: "Continuous monitoring at fixed locations during off-hours",
            details: "Stationary guards provide continuous monitoring, ensuring that no unauthorized individuals enter your construction site during off-hours."
        }
    ];

    const faqData = [
        {
            question: "What are the main risks on construction site security Melbourne?",
            answer: "Construction sites are vulnerable to theft, vandalism, trespassing, and accidents. Ensuring proper security is vital to protecting valuable equipment and maintaining safety."
        },
        {
            question: "Why do I need security guards services on my construction site?",
            answer: "Security guards provide visible deterrence, manage access control, conduct regular patrols, and protect valuable assets, ensuring your site is safe from criminal activity."
        },
        {
            question: "How do you ensure the safety of construction sites?",
            answer: "We provide comprehensive security solutions, including 24/7 surveillance, security guards, mobile patrols, and access control systems, to ensure the safety and security of your site."
        },
        {
            question: "Can you customize the security plan for my site?",
            answer: "Yes, we tailor our construction site security solutions to meet the specific needs of your site, ensuring you receive the most effective protection for your assets."
        },
        {
            question: "What happens if there is a security breach?",
            answer: "In the event of a breach, our team acts quickly to address the situation. Our emergency response protocols ensure swift action, minimizing the impact on your site."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONSTRUCTION SITE SECURITY SERVICES"
                mainTitle="Construction Site Security Services in Melbourne"
                subtitle="Protecting Your Construction Site with Tailored Security Solutions - Metro Guards"
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
                                                PROFESSIONAL PROTECTION
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
                                            CONSTRUCTION SITE<br />
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
                                                At Metro Guards, we understand the complexities and risks associated with the construction industry. With the Australian construction sector generating around $360 billion annually, protecting your assets, workers, and property from theft, vandalism, and unauthorized access is crucial.
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
                                                src="/assets/img/blog/construction-guard.webp" 
                                                alt="Professional Construction Site Security" 
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
                                                src="/assets/img/blog/construction-guard.webp" 
                                                alt="Professional Construction Site Security" 
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
                                                <p>We pride ourselves on offering 24/7 security to protect your assets, tools, and materials, and to ensure the safety of your construction team and contractors.</p>
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
                                                    <HardHat size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Construction Industry Expertise</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>24/7 Security Coverage</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Security Solutions</span>
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
                                                Our Construction Security Services Solutions
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                Our construction site security services include a variety of measures to ensure comprehensive coverage. From security guards to advanced surveillance systems, we ensure that your site remains safe, secure, and operational.
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

                    {/*===== Risks Section =====*/}
                    <div className="risks-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-exclamation-triangle me-2"></i>
                                            INDUSTRY CHALLENGES
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4 text-white">
                                        Risks and Challenges on Construction Sites
                                    </h2>
                                    <p className="lead text-white" style={{opacity: '0.9'}}>
                                        Construction sites in Australia face significant risks, with theft and vandalism costing the industry over $1 billion annually. The valuable machinery, tools, and equipment found on construction sites make them prime targets for criminals.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a', cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                        <div className="risk-icon mb-3 text-center">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <AlertCircle size={28} />
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Theft</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Expensive machinery and tools are common targets for theft, especially when construction sites are left unguarded after hours.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a', cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                        <div className="risk-icon mb-3 text-center">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <AlertTriangle size={28} />
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Vandalism</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Construction sites are often subject to vandalism, from graffiti to more severe damage, which can delay projects and increase costs.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a', cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                        <div className="risk-icon mb-3 text-center">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <UserX size={28} />
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Trespassing</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            Unauthorized individuals may enter the site, exposing themselves to hazardous conditions, which could lead to accidents or delays in construction work.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="risk-card bg-white p-4 rounded-3 shadow-lg h-100" style={{borderLeft: '4px solid #fdc51a', cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                        <div className="risk-icon mb-3 text-center">
                                            <div 
                                                className="d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#fdc51a',
                                                    borderRadius: '15px',
                                                    color: '#1e2247',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <Shield size={28} />
                                            </div>
                                        </div>
                                        <h4 className="text-center mb-3" style={{color: '#1e2247'}}>Assault</h4>
                                        <p className="text-center" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                            The presence of valuable materials often attracts criminal activity, including assault or robbery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Construction Site Security Solutions Section =====*/}
                    <div className="solutions-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="solutions-content pe-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    OUR SOLUTIONS
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Construction Site Security Solutions
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                                We provide comprehensive security solutions tailored specifically for construction sites, ensuring maximum protection for your assets, workers, and project timeline.
                                            </p>
                                        </div>
                                        
                                        {/* Expandable Solution Cards */}
                                        <div className="solutions-accordion">
                                            {[
                                                {
                                                    title: "Security Guards",
                                                    icon: <Shield size={24} />,
                                                    description: "Trained professionals who provide a visible deterrent to criminal activity and ensure the safety of your workers and valuable equipment."
                                                },
                                                {
                                                    title: "Mobile Patrols",
                                                    icon: <Truck size={24} />,
                                                    description: "Frequent patrols around your site to deter unauthorized access and detect potential risks before they escalate."
                                                },
                                                {
                                                    title: "CCTV Surveillance",
                                                    icon: <Camera size={24} />,
                                                    description: "24/7 surveillance systems provide constant monitoring, capturing footage of all activity on your site to ensure nothing goes unnoticed."
                                                },
                                                {
                                                    title: "Access Control",
                                                    icon: <Key size={24} />,
                                                    description: "Secure your site by controlling who enters, ensuring only authorized personnel have access to sensitive areas."
                                                }
                                            ].map((solution, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeService === index ? '#ffffff' : '#ffffff',
                                                            borderRadius: '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a',
                                                            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                                                        }}
                                                        onClick={() => toggleService(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="solution-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff',
                                                                        fontSize: '1.5rem'
                                                                    }}
                                                                >
                                                                    {solution.icon}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{solution.title}</h5>
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
                                                                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                                                {solution.description}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="solutions-image-section ps-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/construction-guard.webp" 
                                                alt="Construction Site Security Solutions" 
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
                                                    <HardHat size={20} />
                                                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Industry-Specific Expertise</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Round-the-Clock Monitoring</span>
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
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Rapid Response Capability</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Construction Site Security Important Section =====*/}
                    <div className="importance-section section-padding" style={{background: 'linear-gradient(135deg, #1e2247 0%, #2a2d5a 100%)'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="importance-content">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <i className="bi bi-shield-check me-2"></i>
                                                SECURITY IMPORTANCE
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4 text-white">
                                            Why is Construction Site Security Important?
                                        </h2>
                                        <p className="lead text-white mb-4" style={{opacity: '0.9'}}>
                                            Investing in construction site security services offers significant benefits to contractors and project managers. Proactive security measures not only reduce the likelihood of theft, vandalism, and trespassing but also provide peace of mind, allowing your team to focus on completing the project on time.
                                        </p>
                                        <p className="text-white mb-4" style={{opacity: '0.8'}}>
                                            With security in place, you can prevent delays, safeguard valuable materials, and ensure the safety of everyone on-site.
                                        </p>
                                        
                                        <div className="importance-features">
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '45px',
                                                        height: '45px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <CheckCircle size={24} />
                                                </div>
                                                <span className="text-white" style={{fontWeight: '500'}}>Prevent costly project delays from theft or damage</span>
                                            </div>
                                            <div className="feature-item d-flex align-items-center mb-3">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '45px',
                                                        height: '45px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <Shield size={24} />
                                                </div>
                                                <span className="text-white" style={{fontWeight: '500'}}>Safeguard valuable equipment and materials</span>
                                            </div>
                                            <div className="feature-item d-flex align-items-center">
                                                <div 
                                                    className="feature-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '45px',
                                                        height: '45px',
                                                        backgroundColor: '#fdc51a',
                                                        borderRadius: '50%',
                                                        color: '#1e2247'
                                                    }}
                                                >
                                                    <Users size={24} />
                                                </div>
                                                <span className="text-white" style={{fontWeight: '500'}}>Ensure worker safety and reduce liability risks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="importance-image mt-5 mt-lg-0">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                                            }}
                                        >
                                            <img 
                                                src="/assets/img/blog/construct.jpg" 
                                                alt="Construction Site Security Importance" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '400px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="decoration-circle position-absolute"
                                            style={{
                                                top: '-20px',
                                                right: '-20px',
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
                                                left: '-30px',
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#ffffff',
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

                    {/*===== Why Choose Us Section =====*/}
                    <div className="benefits-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-award me-2"></i>
                                            WHY CHOOSE US
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Why Choose Metro Guards for Your Construction Site Security?
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        We are among Melbourne's most trusted security companies because we have been serving people and businesses for a decade with exceptional, result-oriented services.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { 
                                        icon: <Award size={40} />, 
                                        title: "Experience", 
                                        description: "With over 10 years of experience in the construction security industry, we have a proven track record of protecting construction sites and ensuring the safety of your staff and assets." 
                                    },
                                    { 
                                        icon: <Wrench size={40} />, 
                                        title: "Tailored Solutions", 
                                        description: "We provide customized security plans designed specifically for your construction site's needs, ensuring you receive the right level of protection." 
                                    },
                                    { 
                                        icon: <Shield size={40} />, 
                                        title: "Comprehensive Coverage", 
                                        description: "From access control and CCTV monitoring to mobile patrols and security guards, our services cover all aspects of construction site security." 
                                    },
                                    { 
                                        icon: <Clock size={40} />, 
                                        title: "24/7 Protection", 
                                        description: "Our team offers continuous security coverage, with on-site security personnel available day and night to monitor activity and respond to incidents promptly." 
                                    },
                                    { 
                                        icon: <Zap size={40} />, 
                                        title: "Cost-Effective", 
                                        description: "Our security solutions are designed to save you money by minimizing theft and damage, ultimately reducing project delays and additional costs caused by security breaches." 
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
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
                                        Everything You Need to Know About Construction Site Security
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
                
                .risk-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 197, 26, 0.3);
                }
                
                .risk-card:hover .risk-icon > div {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 20px 40px rgba(253, 197, 26, 0.4);
                }
                
                .risk-card:hover h4 {
                    color: #fdc51a;
                    transform: translateY(-3px);
                    text-shadow: 0 2px 4px rgba(253, 197, 26, 0.3);
                }
                
                .risk-card:hover p {
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