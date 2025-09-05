'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/homepages/home1/Subscribe'
import Accrediation10 from '@/components/accrediation10'
import WhyChooseUs from '@/components/ui/why-choose-us'
import { Shield, Users, Settings, Building, Laptop, Brain, Target, RotateCcw, CheckCircle, Phone, FileText, MapPin } from 'lucide-react'



export default function AssetProtectionPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeWhyChoose, setActiveWhyChoose] = useState(null);
    const [activeAssetType, setActiveAssetType] = useState(null);
    const [activeCustomApproach, setActiveCustomApproach] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleWhyChoose = (index) => {
        setActiveWhyChoose(activeWhyChoose === index ? null : index);
    };

    const toggleAssetType = (index) => {
        setActiveAssetType(activeAssetType === index ? null : index);
    };

    const toggleCustomApproach = (index) => {
        setActiveCustomApproach(activeCustomApproach === index ? null : index);
    };

    const services = [
        {
            title: "Educational Institutions Protection",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Comprehensive security for schools, universities and educational facilities",
            details: "Ensuring the safety of students, staff, and school property with comprehensive security measures tailored for educational environments. Our trained guards understand the unique challenges of educational settings."
        },
        {
            title: "Corporate Asset Security", 
            icon: <Building size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Advanced protection for corporate offices and business assets",
            details: "Protecting your business assets, from sensitive documents to physical equipment, with advanced corporate security solutions. We specialize in maintaining secure business environments while ensuring smooth operations."
        },
        {
            title: "Healthcare Facility Security",
            icon: <Building size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Specialized security for healthcare and medical facilities",
            details: "Safeguarding the well-being of staff, patients, and medical equipment with specialized healthcare security protocols. Our guards are trained to handle sensitive medical environments with care and professionalism."
        },
        {
            title: "Retail & Shopping Center Protection",
            icon: <Building size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Comprehensive security for retail environments and shopping centers",
            details: "Ensuring a safe shopping environment for customers and securing high-value merchandise with retail security expertise. We provide visible deterrence while maintaining a welcoming atmosphere for customers."
        }
    ];

    const whyChooseData = [
        {
            title: "Decades of Experience",
            description: "Our trained security guards brings years of experience in delivering top-tier security services across Melbourne. With a history of success, our security team provide reliable asset protection you can trust.",
            details: "With over 50 years of combined experience in the security industry, our team has successfully protected thousands of assets across Melbourne. Our guards undergo continuous training and certification to stay updated with the latest security protocols and technologies. We have a proven track record of preventing theft, vandalism, and unauthorized access while maintaining the highest standards of professionalism."
        },
        {
            title: "Customized Security Plans",
            description: "Every client has unique needs. That's why we develop tailored security plans, ensuring your assets are protected according to their specific risks and challenges.",
            details: "Our security experts conduct thorough risk assessments to identify potential vulnerabilities and threats specific to your property. We then develop comprehensive security strategies that include access control, surveillance systems, patrol schedules, and emergency response protocols. Each plan is regularly reviewed and updated to ensure maximum effectiveness and adapt to changing security needs."
        },
        {
            title: "Skilled Team",
            description: "Our team of security professionals is fully trained, highly skilled, and committed to protecting your assets. No matter the security challenge, Metro Guards is ready to handle it with expertise.",
            details: "All our security personnel are fully licensed, insured, and undergo rigorous background checks. They receive specialized training in conflict resolution, emergency response, first aid, and industry-specific security protocols. Our team includes former law enforcement officers and military personnel, bringing additional expertise and experience to every assignment."
        },
        {
            title: "Adaptive Security Solutions",
            description: "As your assets evolve, so does our protection plan. We continuously adjust our strategies to meet new security challenges, ensuring long-term protection.",
            details: "We understand that security needs change over time. Our flexible approach allows us to quickly adapt to new threats, seasonal variations, business growth, or operational changes. We use advanced monitoring systems and regular security audits to identify areas for improvement and implement proactive measures to stay ahead of potential security risks."
        }
    ];

    const assetTypesData = [
        {
            title: "Physical Assets",
            icon: <Building size={24} />,
            description: "Our surveillance systems, access control, and mobile patrol services are designed to protect tangible assets such as buildings, vehicles, and equipment."
        },
        {
            title: "Digital Assets",
            icon: <Laptop size={24} />,
            description: "We use the latest in encryption and cybersecurity technologies to safeguard your online data, protecting it from potential hackers and cybercriminals."
        },
        {
            title: "Intangible Assets",
            icon: <Brain size={24} />,
            description: "We protect intellectual property, confidential business information, and creative works through secure systems and strategies tailored to your needs."
        }
    ];

    const customApproachData = [
        {
            title: "Initial Consultation",
            icon: <Target size={24} />,
            description: "A thorough discussion to assess your specific security needs and understand your assets.",
            details: "Our security experts conduct comprehensive interviews to understand your business operations, identify potential vulnerabilities, and evaluate your current security measures. We analyze your property layout, access points, and specific security concerns to develop a complete picture of your protection needs."
        },
        {
            title: "Tailored Protection Plan",
            icon: <Shield size={24} />,
            description: "Based on your needs, we create a flexible security plan that adapts to changing threats.",
            details: "We develop a customized security strategy that includes specific protocols for access control, surveillance coverage, patrol schedules, and emergency response procedures. Our plans are designed to be flexible and can be adjusted as your business grows or security requirements change."
        },
        {
            title: "Ongoing Monitoring and Adjustment",
            icon: <RotateCcw size={24} />,
            description: "Our team continuously monitors your security situation and makes adjustments as necessary to provide the best possible protection.",
            details: "We provide regular security assessments, performance reviews, and system updates to ensure your protection remains effective. Our team stays informed about emerging threats and security technologies to continuously improve your security posture."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ASSET PROTECTION & SECURITY SERVICES"
                mainTitle="Professional Asset Protection Services"
                subtitle="Comprehensive Asset Security Solutions in Melbourne - Protect What Matters Most"
            >
                
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
                                            At Metro Guards, we understand the importance of safeguarding your valuable assets. Whether it’s your business, home, or personal belongings, asset protection has become more critical than ever in today’s unpredictable world. Our team of highly skilled and dedicated professionals provides reliable security services tailored to meet your unique needs. With decades of experience and a customer-first approach, we ensure that your assets remain secure, giving you peace of mind.
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
                                                <Phone size={16} className="me-2" /> 1300731173
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
                                    <div className="services-image-section pe-lg-4" style={{position: 'sticky', top: '20px'}}>
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
                                                    <Shield size={20} />
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
                                                    <Users size={20} />
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
                                                    <Settings size={20} />
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
                                                    <Shield size={16} className="me-2" /> OUR SERVICES
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

                    {/*===== Why Choose Metro Guards Section =====*/}
                    <div className="why-choose-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                {/* Left Column - Image */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section pe-lg-4" style={{position: 'sticky', top: '20px'}}>
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
                                                    <Shield size={20} />
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
                                                    <Users size={20} />
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
                                                    <Settings size={20} />
                        </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Protection Plans</span>
                                                    </div>
                    </div>
                                    </div>
                                </div>
                                
                                {/* Right Column - Content */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="content-section">
                                        <div className="subtitle mb-3">
                                            <span 
                                                    style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '8px 16px',
                                                    borderRadius: '25px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                Why Choose Metro Guards
                                            </span>
                                        </div>
                                        
                                        <h2 
                                                        style={{
                                                fontSize: '2.5rem',
                                                fontWeight: '700',
                                                color: '#1e2247',
                                                marginBottom: '20px',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Why Choose Metro Guards for Asset Protection Services
                                        </h2>
                                        
                                        <p 
                                                        style={{
                                                fontSize: '1.1rem',
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                marginBottom: '30px'
                                            }}
                                        >
                                            We offer a comprehensive range of asset protection services designed to protect everything that matters to you.
                                        </p>
                                        
                                        {/* Why Choose Content with Dropdowns */}
                                        <div className="why-choose-accordion">
                                            {whyChooseData.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                    style={{
                                                            backgroundColor: activeWhyChoose === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeWhyChoose === index ? '12px 12px 0 0' : '12px',
                                                        border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                    }}
                                                        onClick={() => toggleWhyChoose(index)}
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
                                                                    {index === 0 && <Target size={24} />}
                                                                    {index === 1 && <FileText size={24} />}
                                                                    {index === 2 && <Users size={24} />}
                                                                    {index === 3 && <RotateCcw size={24} />}
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
                                                                        backgroundColor: activeWhyChoose === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeWhyChoose === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeWhyChoose === index ? '−' : '+'}
                                                                    </span>
                        </div>
                    </div>
                        </div>
                    </div>

                                                    {/* Dropdown Content */}
                                                    {activeWhyChoose === index && (
                                                <div 
                                                            className="accordion-content p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                        border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                animation: 'fadeIn 0.3s ease-in-out'
                                                            }}
                                                        >
                                                            <p style={{
                                                                color: '#6c757d',
                                                                margin: '0',
                                                                lineHeight: '1.6',
                                                                fontSize: '1rem'
                                                            }}>
                                                                {item.description}
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


                    {/*===== Benefits of Asset Protection and Security =====*/}
                    <div className="Benefits-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                {/* Left Column - Content */}
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="content-section">
                                        <div className="subtitle mb-3">
                                            <span 
                                                        style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '8px 16px',
                                                    borderRadius: '25px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                BENEFITS
                                            </span>
                </div>
                                        
                                        <h2 
                                                        style={{
                                                            fontSize: '2.5rem',
                                                fontWeight: '700',
                                                color: '#1e2247',
                                                marginBottom: '20px',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Benefits of Our Asset Protection Services
                                        </h2>
                                        
                                        <p 
                                            style={{
                                                fontSize: '1.1rem',
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                marginBottom: '30px'
                                            }}
                                        >
                                            Our asset protection services provide multiple benefits, including:
                                        </p>
                                        
                                        {/* Benefits Content */}
                                        <div className="benefits-content">
                                            <div className="benefit-item mb-4">
                                                <div className="d-flex align-items-start">
                                                    <div 
                                                        className="benefit-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '50px',
                                                            height: '50px',
                                                            borderRadius: '10px',
                                                            backgroundColor: '#1e2247',
                                                            color: '#ffffff',
                                                            fontSize: '1.5rem',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <Shield size={20} />
            </div>
                                                    <div>
                                                        <h5 className="mb-2 fw-bold" style={{color: '#1e2247'}}>Comprehensive Coverage</h5>
                                                        <p style={{color: '#6c757d', margin: '0', lineHeight: '1.6'}}>
                                                            Protection for a wide variety of assets, including physical items, digital data, and intellectual property.
                                                        </p>
        </div>
                        </div>
                        </div>
                                            
                                            <div className="benefit-item mb-4">
                                                <div className="d-flex align-items-start">
                                                <div 
                                                        className="benefit-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                            width: '50px',
                                                            height: '50px',
                                                            borderRadius: '10px',
                                                            backgroundColor: '#1e2247',
                                                            color: '#ffffff',
                                                            fontSize: '1.5rem',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <Target size={24} />
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2 fw-bold" style={{color: '#1e2247'}}>Visual Deterrent</h5>
                                                        <p style={{color: '#6c757d', margin: '0', lineHeight: '1.6'}}>
                                                            Randomized patrols and security measures that discourage criminal activity and keep intruders at bay.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="benefit-item mb-4">
                                                <div className="d-flex align-items-start">
                                                    <div 
                                                        className="benefit-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '50px',
                                                            height: '50px',
                                                            borderRadius: '10px',
                                                            backgroundColor: '#1e2247',
                                                            color: '#ffffff',
                                                            fontSize: '1.5rem',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <Target size={24} />
                    </div>
                                                    <div>
                                                        <h5 className="mb-2 fw-bold" style={{color: '#1e2247'}}>Real-Time Monitoring</h5>
                                                        <p style={{color: '#6c757d', margin: '0', lineHeight: '1.6'}}>
                                                            Continuous surveillance and monitoring to detect potential risks early and respond promptly.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="benefit-item mb-4">
                                                <div className="d-flex align-items-start">
                                                    <div 
                                                        className="benefit-icon me-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '50px',
                                                            height: '50px',
                                                            borderRadius: '10px',
                                                            backgroundColor: '#1e2247',
                                                            color: '#ffffff',
                                                            fontSize: '1.5rem',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <CheckCircle size={24} />
                </div>
                                                    <div>
                                                        <h5 className="mb-2 fw-bold" style={{color: '#1e2247'}}>Peace of Mind</h5>
                                                        <p style={{color: '#6c757d', margin: '0', lineHeight: '1.6'}}>
                                                            With our security systems in place, you can relax knowing that your assets are being constantly monitored and protected.
                                            </p>
                                        </div>
                                                        </div>
                                                        </div>
            </div>
                        </div>
                        </div>
                                            
                                {/* Right Column - Image */}
                                
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4" style={{position: 'sticky', top: '20px'}}>
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
                                                    <Shield size={20} />
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
                                                    <Users size={20} />
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
                                                    <Settings size={20} />
                </div>
                                                <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Protection Plans</span>
            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                                         {/*===== Types of Assets and Protection Methods =====*/}
                     <div className="types-and-methods-section section-padding" style={{background: '#f8f9fa'}}>
                         <div className="container">
                             <div className="row">
                                 {/* Left Column - Image */}
                                 <div className="col-lg-6 order-2 order-lg-1">
                                     <div className="services-image-section pe-lg-4" style={{position: 'sticky', top: '20px'}}>
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
                                                     <Shield size={20} />
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
                                                     <Users size={20} />
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
                                                     <Settings size={20} />
                         </div>
                                                 <span style={{color: '#1e2247', fontWeight: '500'}}>Customized Protection Plans</span>
                                                     </div>
                     </div>
                         </div>
                    </div>

                                 {/* Right Column - Content */}
                                 <div className="col-lg-6 order-1 order-lg-2">
                                     <div className="content-section">
                                        <div className="subtitle mb-3">
                                             <span 
                                                     style={{
                                                     backgroundColor: '#fdc51a',
                                                     color: '#1e2247',
                                                     padding: '8px 16px',
                                                     borderRadius: '25px',
                                                     fontSize: '0.9rem',
                                                     fontWeight: '600',
                                                     textTransform: 'uppercase',
                                                     letterSpacing: '1px'
                                                 }}
                                             >
                                                 PROTECTION METHODS
                                            </span>
                                        </div>
                                         
                                         <h2 
                                                         style={{
                                                 fontSize: '2.5rem',
                                                 fontWeight: '700',
                                                 color: '#1e2247',
                                                 marginBottom: '20px',
                                                 lineHeight: '1.2'
                                             }}
                                         >
                                             Types of Assets and Protection Methods
                                        </h2>
                                         
                                         <p 
                                                         style={{
                                                 fontSize: '1.1rem',
                                                 color: '#6c757d',
                                                 lineHeight: '1.6',
                                                 marginBottom: '30px'
                                             }}
                                         >
                                             At Metropolitan Guards, Our top security experts understand that assets come in many forms, and each requires unique protection. That's why we offer specialized methods for different types of assets:
                                         </p>
                                         
                                         {/* Asset Types Content with Dropdowns */}
                                         <div className="asset-types-accordion">
                                             {assetTypesData.map((item, index) => (
                                                 <div key={index} className="accordion-item mb-3">
                                                     <div 
                                                         className="accordion-header p-4"
                                                         style={{
                                                             backgroundColor: activeAssetType === index ? '#ffffff' : '#f8f9fa',
                                                             borderRadius: activeAssetType === index ? '12px 12px 0 0' : '12px',
                                                             border: '1px solid #e9ecef',
                                                             cursor: 'pointer',
                                                             transition: 'all 0.3s ease',
                                                             borderLeft: '4px solid #fdc51a'
                                                         }}
                                                         onClick={() => toggleAssetType(index)}
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
                                                                     {item.icon}
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
                                                                         backgroundColor: activeAssetType === index ? '#1e2247' : '#e9ecef',
                                                                         borderRadius: '50%',
                                                                         color: activeAssetType === index ? '#ffffff' : '#1e2247',
                                                                         transition: 'all 0.3s ease'
                                                                     }}
                                                                 >
                                                                     <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                         {activeAssetType === index ? '−' : '+'}
                                                                     </span>
                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                     
                                                     {/* Dropdown Content */}
                                                     {activeAssetType === index && (
                                                         <div 
                                                             className="accordion-content p-4"
                                                             style={{
                                                                 backgroundColor: '#ffffff',
                                                                 borderRadius: '0 0 12px 12px',
                                                                 border: '1px solid #e9ecef',
                                                                 borderTop: 'none',
                                                                 animation: 'fadeIn 0.3s ease-in-out'
                                                             }}
                                                         >
                                                             <p style={{
                                                                 color: '#6c757d',
                                                                 margin: '0',
                                                                 lineHeight: '1.6',
                                                                 fontSize: '1rem'
                                                             }}>
                                                                 {item.description}
                                                             </p>
                                            </div>
                                                     )}
                                                 </div>
                                             ))}
                                             
                                             {/* Conclusion Text */}
                                             <div className="conclusion-text mt-4">
                                                 <p style={{
                                                     color: '#1e2247',
                                                     fontSize: '1.1rem',
                                                     fontWeight: '600',
                                                     lineHeight: '1.6',
                                                     margin: '0',
                                                     padding: '20px',
                                                     backgroundColor: '#f8f9fa',
                                                     borderRadius: '10px',
                                                     borderLeft: '4px solid #fdc51a'
                                                 }}>
                                                     Each protection method is customized to fit the specific weaknesses of the asset, ensuring that it is comprehensively safeguarded against all potential risks.
                                                 </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    {/*===== Metro Guards Custom Security Approach =====*/}
                    <div className="custom-approach-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                {/* Left Column - Content */}
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="content-section">
                                        <div className="subtitle mb-3">
                                            <span 
                                                style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    padding: '8px 16px',
                                                    borderRadius: '25px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                CUSTOM APPROACH
                                            </span>
                                            </div>
                                        
                                        <h2 
                                            style={{
                                                fontSize: '2.5rem',
                                                fontWeight: '700',
                                                color: '#1e2247',
                                                marginBottom: '20px',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Metro Guards' Custom Security Approach
                                        </h2>
                                        
                                        <p 
                                            style={{
                                                fontSize: '1.1rem',
                                                color: '#6c757d',
                                                lineHeight: '1.6',
                                                marginBottom: '30px'
                                            }}
                                        >
                                            At Metro Guards, we don't offer a one-size-fits-all solution. Instead, we work with you to develop a customized asset protection plan that addresses your unique security needs. Our approach includes:
                                        </p>
                                        
                                        {/* Custom Approach Steps with Dropdowns */}
                                        <div className="custom-approach-accordion">
                                            {customApproachData.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeCustomApproach === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeCustomApproach === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleCustomApproach(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="service-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '50%',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff',
                                                                        fontSize: '1.2rem',
                                                                        fontWeight: 'bold'
                                                                    }}
                                                                >
                                                                    {item.icon}
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
                                                                        backgroundColor: activeCustomApproach === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeCustomApproach === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeCustomApproach === index ? '−' : '+'}
                                                                    </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                                    {/* Dropdown Content */}
                                                    {activeCustomApproach === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                animation: 'fadeIn 0.3s ease-in-out'
                                                            }}
                                                        >
                                                            <p style={{
                                                                color: '#6c757d',
                                                                margin: '0',
                                                                lineHeight: '1.6',
                                                                fontSize: '1rem'
                                                            }}>
                                                                {item.description}
                                                            </p>
                                                            <div className="mt-3">
                                                                <p style={{
                                                                    color: '#1e2247',
                                                                    margin: '0',
                                                                    lineHeight: '1.6',
                                                                    fontSize: '0.95rem',
                                                                    fontWeight: '500'
                                                                }}>
                                                                    {item.details}
                                                                </p>
                                                        </div>
                                                        </div>
                                                    )}
                                                    </div>
                                            ))}
                                            
                                            {/* Conclusion Box */}
                                            <div className="conclusion-box mt-4">
                                                <div 
                                                    style={{
                                                        backgroundColor: '#f8f9fa',
                                                        padding: '25px',
                                                        borderRadius: '12px',
                                                        borderLeft: '4px solid #fdc51a',
                                                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                                                    }}
                                                >
                                                    <p style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.1rem',
                                                        fontWeight: '600',
                                                        lineHeight: '1.6',
                                                        margin: '0'
                                                    }}>
                                                        We ensure that every aspect of your asset protection plan is tailored specifically to your requirements, offering both immediate security and long-term peace of mind.
                                                    </p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                {/* Right Column - Image */}
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4" style={{position: 'sticky', top: '20px'}}>
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/bg/security img.webp" 
                                                alt="Metro Guards Custom Security Approach" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            
                                            {/* Overlay with Security Features */}
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    top: '20px',
                                                    right: '20px',
                                                    backgroundColor: 'rgba(30, 34, 71, 0.9)',
                                                    color: '#ffffff',
                                                    padding: '15px 20px',
                                                    borderRadius: '10px',
                                                    backdropFilter: 'blur(10px)'
                                                }}
                                            >
                                                <h6 className="mb-2 fw-bold" style={{color: '#fdc51a', fontSize: '0.9rem'}}>
                                                    CUSTOMIZED SOLUTIONS
                                                </h6>
                                                <p className="mb-0" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                                                    Tailored to Your Needs
                                                </p>
                                                        </div>
                                                        </div>
                                        
                                        {/* Feature Highlights */}
                                        <div className="features-highlights mt-4">
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <div className="feature-highlight text-center">
                                                        <div 
                                                            className="feature-icon mb-2"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto',
                                                                fontSize: '1.5rem'
                                                            }}
                                                        >
                                                            <Target size={24} />
                                                    </div>
                                                        <h6 style={{color: '#1e2247', fontSize: '0.9rem', fontWeight: '600', margin: '0'}}>
                                                            Targeted
                                                        </h6>
                                                </div>
                                            </div>
                                                <div className="col-4">
                                                    <div className="feature-highlight text-center">
                                                        <div 
                                                            className="feature-icon mb-2"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto',
                                                                fontSize: '1.5rem'
                                                            }}
                                                        >
                                                            <RotateCcw size={24} />
                                                    </div>
                                                        <h6 style={{color: '#1e2247', fontSize: '0.9rem', fontWeight: '600', margin: '0'}}>
                                                            Adaptive
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="feature-highlight text-center">
                                                        <div 
                                                            className="feature-icon mb-2"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto',
                                                                fontSize: '1.5rem'
                                                            }}
                                                        >
                                                            <Shield size={20} />
                                                            </div>
                                                        <h6 style={{color: '#1e2247', fontSize: '0.9rem', fontWeight: '600', margin: '0'}}>
                                                            Comprehensive
                                                        </h6>
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
                        
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(-10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        .dropdown-content {
                            animation: fadeIn 0.3s ease-in-out;
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
                    <WhyChooseUs />
                    <Accrediation10 />
                    <Subscribe />
                
            </Layout>
        </>
    )
}