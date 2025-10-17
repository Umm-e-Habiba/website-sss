'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function BuildingSecurityPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleFeature = (index) => {
        setActiveFeature(activeFeature === index ? null : index);
    };

    const services = [
        {
            title: "15+ Years of Experience",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Securing Melbourne's buildings with consistency and care.",
        },
        {
            title: "Fully Licensed", 
            icon: <Home size={24} />,
            iconSymbol: <Home size={24} />,
            description: "Compliant with all Victorian security and labour hire laws.",
        },
        {
            title: "ISO Certified",
            icon: <CheckCircle size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Meeting international standards for quality, safety, and environment.",
        },
        {
            title: "CM3 & ASIAL Approved",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "Independently verified for compliance and professionalism.",
        },
        {
            title: "Award-Winning Service",
            icon: <Star size={24} />,
            iconSymbol: <Star size={24} />,
            description: "Recognised for reliability and outstanding client support.",
        },
        {
            title: "Local Management",
            icon: <MapPin size={24} />,
            iconSymbol: <MapPin size={24} />,
            description: "Melbourne-based supervisors who respond quickly when you need them.",
        },
    ];

    const securityFeatures = [
        {
            title: "On-site Patrols",
            icon: <Target size={24} />,
            iconSymbol: <Target size={24} />,
            description: "Regular patrols of building surroundings to provide safety and deter criminal activities",
            details: "Our guards monitor the building by regularly patrolling the surroundings to provide safety and deter criminal activities. Our security guards also ensure the safety of the expensive materials and supplies on the construction sites, and they monitor and protect all tools and machinery to prevent business losses."
        },
        {
            title: "Static Guards",
            icon: <User size={24} />,
            iconSymbol: <User size={24} />,
            description: "Dedicated guards managing entry points and monitoring visitors 24/7",
            details: "Hiring static guards is also a practical option for businesses and commercial complexes. Our static building guards manage the entry points and gate access and monitor the visitors and surroundings 24/7. They are highly trained to respond to and control unexpected incidents and protect people."
        },
        {
            title: "CCTV Surveillance",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "24/7 monitoring of visitors and identification of unusual activity",
            details: "Our security integrates technology to provide 24/7 commercial and residential building surveillance. Our building security guards in Melbourne monitor visitors, trespassers, and guests to identify unusual activity and ensure safety."
        },
        {
            title: "Alarm & Emergency Response",
            icon: <Bell size={24} />,
            iconSymbol: <Bell size={24} />,
            description: "Immediate response to fire, medical, or security alarms",
            details: "Our guards immediately respond to any fire, medical, smoke, or threat alarm and evacuate the building's tenants, employees, workers, and others under strict security protocol. They are well-disciplined and manage unexpected situations with calm and exceptional attention."
        },
        {
            title: "Visitor Management",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Professional handling of visitor logs, ID checks, and access control",
            details: "Our guards are highly trained to manage visitors at the building's entry and exit points. They maintain a visitors' log, check IDs, and manage controlled access to commercial, residential and industrial building premises."
        },
        {
            title: "Fire Safety and Evacuation",
            icon: <Flame size={24} />,
            iconSymbol: <Flame size={24} />,
            description: "Trained evacuation procedures and special needs assistance",
            details: "Our building security guards are swift in making decisions and taking action. They are professionally trained to handle people with special needs efficiently in such situations. Once, a fire broke out in an apartment complex. Our guards managed the safe evacuation of the residents and alerted the authorities immediately, resulting in no loss."
        }
    ];

    const faqData = [
        {
            question: "What types of building security services do you provide?",
            answer: "We provide comprehensive building security services including commercial building security, residential building security, on-site patrols, static guards, CCTV surveillance, alarm response, visitor management, and fire safety evacuation services."
        },
        {
            question: "Are your building security guards licensed and trained?",
            answer: "Yes, all our building security guards are licensed and undergo rigorous training in emergency response, crowd control, first aid, and property-related security protocols. They also undergo extensive background checks before being hired."
        },
        {
            question: "Do you provide 24/7 building security services?",
            answer: "Yes, we provide 24/7 surveillance and safety services for both commercial and residential buildings. Our guards are available around the clock to ensure continuous protection of your property and people."
        },
        {
            question: "What technology do you use for building security?",
            answer: "We integrate cutting-edge technology including CCTV surveillance systems, modern communication tools, and advanced surveillance equipment to provide comprehensive building security with real-time monitoring and incident reporting."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONSTRUCTION SITE SECURITY GUARDS"
                mainTitle="CONSTRUCTION SITE SECURITY GUARDS IN MELBOURNE"
                
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
                                                fontSize: '3rem'
                                            }}
                                        >
                                            Where Protection Meets   <br />
                                            <span style={{color: '#fdc51a'}}>Progress</span>
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
                                            Every site has a beginning: a sketch on a desk, a shared plan, a deadline pinned to the calendar. Some nights are full of progress; others test how much a project can stand. When the day ends and the floodlights go down, the job of keeping that work safe falls to someone else.
                                            <br /><br />Metro Guards began on nights like that, the start of what would become one of the most trusted construction site security services in Melbourne. A small team of local security professionals watched over a single inner-city site and found they were protecting more than tools. They were protecting livelihoods, reputation, and the quiet promise of completion. Since then, that quiet duty grew into a service built around respect for work well done.
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
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Phone size={16}/> 1300731173
                                                </span>
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
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
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

                    {/*=====  Services Section =====*/}
                    <div className="services-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 15% 25%, rgba(253, 197, 26, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 85% 75%, rgba(30, 34, 71, 0.03) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center g-5">
                                {/* Left Column - Enhanced Image Section */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section">
                                        <div className="image-container position-relative">
                                            {/* Main Image */}
                                            <div style={{
                                                position: 'relative',
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                                transform: 'perspective(1000px) rotateY(-5deg)',
                                                transition: 'all 0.4s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                                e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                                            }}>
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                        height: '550px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                
                                                {/* Image Overlay */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, transparent 50%, rgba(253, 197, 26, 0.1) 100%)',
                                                    zIndex: 1
                                                }}></div>
                                </div>

                                            {/* Floating Stats Cards */}
                                            
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Enhanced Content Section */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content">
                                        {/* Header Section */}
                                        <div className="section-header mb-5">
                                            <h2 style={{ 
                                                color: "#1e2247", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                The Silent Threats That Stall a Project
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                                Melbourne’s construction industry moves fast. A missing tool, a cut cable, or a broken lock can stretch timelines and raise costs overnight. The real risk shows up where attention drops and routine becomes habit.
                                            </p>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                                marginBottom: "30px"
                                            }}>
                                                Our guards train to read the site as you would: understanding who belongs, what looks right, and when something is out of place. That attention reduces surprises and keeps projects moving.
                                                </p>
                                        </div>

                                      

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*=====  Section 2 =====*/}
                    <div className="services-section-2 section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/building-guard.jpg" 
                                                alt="Professional Building Security Guards" 
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
                                        
                                        {/* The Human Element - Paragraph Style */}
                                        <div className="human-element-section section-header mt-5" style={{
                                            background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9))',
                                            borderRadius: '20px',
                                            padding: '35px',
                                            border: '1px solid rgba(253, 197, 26, 0.15)',
                                            position: 'relative',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                                        }}>
                                            {/* Subtle Background Pattern */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.03) 0%, transparent 50%)',
                                                borderRadius: '20px',
                                                zIndex: 1
                                            }}></div>

                                            <div style={{ position: 'relative', zIndex: 2 }}>
                                                <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                The Cost of Neglect Runs Deeper
                                                </h2>
                                                <p className="lead" style={{
                                                    color: '#6c757d',
                                                    fontSize: '1.2rem',
                                                    lineHeight: '1.8',
                                                    margin: 0
                                                }}>
                                                    Losses show up as replacements and repairs, but they also show up as delayed handovers, strained contractor relationships, and lost confidence from investors. When progress pauses, everyone pays.
                                                    <br /><br />Metro Guards treats each assignment like a milestone. Plans focus on prevention and clarity, and the result is fewer interruptions and steadier schedules.
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    OUR Services
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            How Metro Guards Protects Your Site 
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7'}}>
                                                We partner with major shopping centres, independent retailers, and facility managers across Melbourne. Every client has a different layout, a different crowd, a different tempo, and our strategies evolve with each.
                                            </p>
                                        </div>
                                        
                                        {/* Interactive Service Accordion */}
                                        <div className="services-accordion">
                                            {[
                                                {
                                                    icon: "fas fa-door-open",
                                                    title: "On-site guards",
                                                    // summary: "Every visitor accounted for, every exit secured.",
                                                    details: "Experienced officers manage access, perform checks, and respond to incidents."
                                                },
                                                {
                                                    icon: "fas fa-shield-alt",
                                                    title: "Access control & visitor logging",
                                                    // summary: "Watchful without intrusion, our guards help prevent theft and maintain order.",
                                                    details: "Verified entries, clear records, and controlled deliveries."
                                                },
                                                {
                                                    icon: "fas fa-clipboard-list",
                                                    title: "Mobile patrol units",
                                                    // summary: "Rapid, professional, and calm under pressure.",
                                                    details: "Unpredictable patrol patterns make intrusion harder and detection faster."
                                                },
                                                {
                                                    icon: "fas fa-exclamation-triangle",
                                                    title: "24/7 monitored CCTV",
                                                    // summary: "When situations escalate, our team coordinates seamlessly with local authorities and management.",
                                                    details: "Continuous recording with immediate escalation for suspicious activity."
                                                },
                                                {
                                                    icon: "fas fa-hands-helping",
                                                    title: "Night-shift protection",
                                                    // summary: "Helping lost children, guiding visitors, supporting tenants, the kind of care that builds community trust.",
                                                    details: "Dedicated teams for after-hours risk around high-value equipment."
                                                }
                                            ].map((service, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeService === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeService === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            borderLeft: '4px solid #fdc51a',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease'
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
                                                                    <i className={service.icon}></i>
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-1 fw-bold" style={{color: '#1e2247'}}>{service.title}</h5>
                                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.9rem'}}>{service.summary}</p>
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
                                                            <p style={{
                                                                color: '#6c757d', 
                                                                lineHeight: '1.7', 
                                                                margin: 0,
                                                                fontSize: '1rem'
                                                            }}>
                                                                {service.details}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <p style={{color: '#6c757d', fontSize: '1rem', lineHeight: '1.6', marginTop: '20px'}}>
                                            <strong>These measures stack together to create continuous protection, daytime certainty and overnight assurance.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== New Commitment & Difference Section =====*/}
                    <div className="commitment-difference-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 20%, rgba(253, 197, 26, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(30, 34, 71, 0.03) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Our Commitment Section */}
                            <div className="row align-items-center g-5">
                                {/* Left Column - Image */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="commitment-image-section">
                                        <div className="image-container position-relative">
                                            {/* Main Image */}
                                            <div style={{
                                                position: 'relative',
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                                transform: 'perspective(1000px) rotateY(5deg)',
                                                transition: 'all 0.4s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                                e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                                            }}>
                                                <img 
                                                    src="/assets/img/blog/building-guard.jpg" 
                                                    alt="Construction Site Security Guards" 
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '550px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                
                                                {/* Image Overlay */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, transparent 50%, rgba(253, 197, 26, 0.1) 100%)',
                                                    zIndex: 1
                                                }}></div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Content */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="commitment-content">
                                        <div className="section-header mb-5">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "25px"
                                            }}>
                                                <div style={{
                                                    width: "50px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    boxShadow: "0 4px 15px rgba(30, 34, 71, 0.3)"
                                                }}>
                                                    <i className="fas fa-heart me-2"></i>
                                                    Our Promise
                                                </span>
                                            </div>
                                            
                                            <h2 style={{ 
                                                color: "#1e2247", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "30px",
                                                lineHeight: "1.2",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                Where the Brand Came From  <br/><span style={{ color: "#fdc51a" }}>A Short Story</span>
                                            </h2>
                                            
                                            <div>
                                                <p style={{ 
                                                    color: "#6c757d", 
                                                    fontSize: "1.2rem",
                                                    lineHeight: "1.8",
                                                    marginBottom: "25px"
                                                }}>
                                                    One late shift, a foreman walked the site at dawn and found the crane controls untouched, cables intact, and a log that recorded every patrol. He walked to the small container where the night team had left a note:  <strong style={{color: '#1e2247'}}>"We left it ready." That simple line summed the brand's view of duty, keep work intact so mornings run as planned.</strong>
                                                </p>
                                                
                                                <p style={{ 
                                                    color: "#6c757d", 
                                                    fontSize: "1.1rem",
                                                    lineHeight: "1.7",
                                                    marginBottom: "30px"
                                                }}>
                                                    That work ethic shaped Metro Guards. Local hires, regular supervisor visits, and a commitment to reporting that matches how builders work.  <strong style={{color: '#fdc51a'}}>The team's choices grew from practical nights on site, not from a manual of buzzwords.</strong>
                                                </p>

                                                {/* Trust Points */}
                                                <div className="trust-points">
                                                    <div className="row g-3">
                                                        {[
                                                            { icon: "fas fa-shield-check", text: "Night Duty Excellence" },
                                                            { icon: "fas fa-clipboard-check", text: "Detailed Reporting" }
                                                        ].map((point, index) => (
                                                            <div key={index} className="col-sm-6">
                                                                <div className="trust-point d-flex align-items-center" style={{
                                                                    padding: '12px 15px',
                                                                    background: 'rgba(253, 197, 26, 0.1)',
                                                                    borderRadius: '12px',
                                                                    border: '1px solid rgba(253, 197, 26, 0.2)'
                                                                }}>
                                                                    <div 
                                                                        className="trust-icon me-3"
                                                                        style={{
                                                                            width: '35px',
                                                                            height: '35px',
                                                                            borderRadius: '8px',
                                                                            background: '#1e2247',
                                                                            color: '#fdc51a',
                                                                            fontSize: '0.9rem',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            flexShrink: 0
                                                                        }}
                                                                    >
                                                                        <i className={point.icon}></i>
                                                                    </div>
                                                                    <span style={{
                                                                        color: '#1e2247',
                                                                        fontSize: '0.95rem',
                                                                        fontWeight: '600'
                                                                    }}>
                                                                        {point.text}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Melbourne Chooses Metro Guards Section =====*/}
                    <div className="why-melbourne-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            right: '8%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-12 text-center">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                        marginBottom: "25px",
                                                justifyContent: "center"
                                            }}>
                                                <div style={{
                                            width: "50px",
                                                    height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    boxShadow: "0 4px 15px rgba(30, 34, 71, 0.3)"
                                                }}>
                                                    <i className="fas fa-star me-2"></i>
                                                    Why Choose Us
                                                </span>
                                                <div style={{
                                            width: "50px",
                                                    height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                    borderRadius: "2px"
                                                }}></div>
                                            </div>
                                            
                                            <h2 style={{
                                                        color: "#1e2247", 
                                                        fontSize: "3.2rem",
                                                        fontWeight: "800",
                                                        marginBottom: "30px",
                                                        lineHeight: "1.2",
                                                        textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                                    }}>
                                                        Why <span style={{ color: "#fdc51a" }}>Melbourne Chooses</span> Metro Guards
                                            </h2>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4 mb-5">
                                {[
                                    {
                                        icon: "fas fa-map-marker-alt",
                                        title: "Local Experience",
                                        description: "15+ Years working on Melbourne projects of every size."
                                    },
                                    {
                                        icon: "fas fa-search-location",
                                        title: "Practical Planning",
                                        description: "Site surveys that spot real vulnerabilities, not hypothetical ones."
                                    },
                                    {
                                        icon: "fas fa-certificate",
                                        title: "Licensed and Insured Teams", 
                                        description: "Officers trained to Australian standards and held accountable."
                                    },
                                    {
                                        icon: "fas fa-headset",
                                        title: "Live Coordination",
                                        description: "A 24/7 control hub that moves quickly when incidents arise."
                                    },
                                    {
                                        icon: "fas fa-eye",
                                        title: "Transparent Records",
                                        description: "GPS-verified patrols and photo timestamping for clear oversight."
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="col-md-6 col-lg-4">
                                                        <div className="feature-card h-100" style={{
                                                            background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9))',
                                                            borderRadius: '20px',
                                                            padding: '35px 25px',
                                                            border: '1px solid rgba(253, 197, 26, 0.15)',
                                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                                            transition: 'all 0.3s ease',
                                                            position: 'relative',
                                                            overflow: 'hidden'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), rgba(253, 197, 26, 0.05))';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9))';
                                                        }}>
                                            {/* Subtle Background Pattern */}
                        <div style={{
                            position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(253, 197, 26, 0.1) 0%, transparent 50%)',
                                                borderRadius: '20px',
                                                zIndex: 1
                                            }}></div>

                                            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                                                {/* Icon */}
                                                <div 
                                                    className="feature-icon mb-4 d-flex align-items-center justify-content-center mx-auto"
                                                                    style={{
                                                                        width: '70px',
                                                                        height: '70px',
                                                                        borderRadius: '15px',
                                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                                        color: '#fdc51a',
                                                                        fontSize: '1.8rem',
                                                                        boxShadow: '0 8px 20px rgba(30, 34, 71, 0.25)'
                                                                    }}
                                                >
                                                    <i className={feature.icon}></i>
                                                </div>

                                                {/* Content */}
                                                                <h3 className="fw-bold mb-3" style={{
                                                                    color: '#1e2247', 
                                                                    fontSize: '1.4rem',
                                                                    lineHeight: '1.3'
                                                                }}>
                                                                    {feature.title}
                                                                </h3>
                                            <p style={{
                                                color: '#6c757d',
                                                                    lineHeight: '1.6',
                                                                    margin: 0,
                                                                    fontSize: '1rem'
                                                                }}>
                                                                    {feature.description}
                                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Trust Statement */}
                            <div className="row">
                                <div className="col-12 text-center">
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.95), rgba(44, 62, 80, 0.95))',
                                                        borderRadius: '25px',
                                                        padding: '35px 40px',
                                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                                        maxWidth: '800px',
                                                        margin: '0 auto',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        boxShadow: '0 15px 35px rgba(30, 34, 71, 0.15)'
                                                    }}>
                                        {/* Inner glow effect */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'radial-gradient(circle at 50% 50%, rgba(253, 197, 26, 0.2), transparent 70%)',
                                            borderRadius: '25px',
                                            zIndex: 1
                                        }}></div>
                                        
                                        <p style={{
                                            color: '#ffffff',
                                                fontSize: '1.4rem',
                                            fontWeight: '600',
                                            margin: 0,
                                            lineHeight: '1.6',
                                            position: 'relative',
                                            zIndex: 2
                                        }}>
                                            <i className="fas fa-quote-left me-2" style={{color: '#fdc51a'}}></i>
                                            Trust comes from predictable performance. <span style={{color: '#fdc51a'}}>That's what our clients cite when they renew.</span>
                                            <i className="fas fa-quote-right ms-2" style={{color: '#fdc51a'}}></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>

                    {/*===== Stewards of Progress Section =====*/}
                    <div className="stewards-progress-section section-padding" style={{
                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Animated Background Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.15) 0%, transparent 40%),
                                radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.08) 0%, transparent 60%),
                                linear-gradient(45deg, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Construction-themed Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '200px',
                            height: '200px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '3%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center g-5">
                                {/* Left Column - Content */}
                                <div className="col-lg-6">
                                    <div className="stewards-content">
                                        {/* Header */}
                                        <div className="section-header mb-4">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "12px", 
                                                marginBottom: "25px"
                                            }}>
                                                <div style={{
                                                    width: "40px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-3 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #fdc51a, #ffdb5c)", 
                                                    color: "#1e2247", 
                                                    fontWeight: 700,
                                                    fontSize: "0.8rem",
                                                    borderRadius: "20px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px",
                                                    boxShadow: "0 4px 15px rgba(253, 197, 26, 0.3)"
                                                }}>
                                                    <i className="fas fa-hard-hat me-2"></i>
                                                    CONSTRUCTION GUARDIANS
                                                </span>
                                            </div>
                                            
                                            <h2 style={{
                                                        color: '#ffffff',
                                                fontSize: '2.8rem',
                                                        fontWeight: '700',
                                                marginBottom: '25px',
                                                lineHeight: '1.3'
                                            }}>
                                                More Than Guards – <br/>
                                                <span style={{color: '#fdc51a', fontWeight: '800'}}>Stewards of Progress</span>
                                            </h2>
                                        </div>

                                        {/* Content */}
                                        <div className="content-text mb-4">
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.7',
                                                marginBottom: '25px'
                                            }}>
                                                Every delivered floor and every finished wall traces back to countless small choices. <strong style={{color: '#fdc51a'}}>Metro Guards keeps those choices intact each night.</strong>
                                            </p>
                                            
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: '1.1rem',
                                                lineHeight: '1.6',
                                                marginBottom: '30px'
                                            }}>
                                                Our presence helps supervisors sleep easier, crews start on time, and projects maintain <span style={{color: '#fdc51a', fontWeight: '600'}}>credibility with stakeholders</span>.
                                            </p>
                                                </div>

                                        {/* Key Points */}
                                        <div className="key-points">
                                            <div className="row g-3">
                                                {[
                                                    { icon: "fas fa-bed", text: "Supervisor Peace of Mind" },
                                                    { icon: "fas fa-clock", text: "On-Time Project Starts" }
                                                ].map((point, index) => (
                                                    <div key={index} className="col-sm-6">
                                                        <div className="point-item d-flex align-items-center" style={{
                                                            padding: '12px 15px',
                                                            background: 'rgba(253, 197, 26, 0.1)',
                                                            borderRadius: '12px',
                                                            border: '1px solid rgba(253, 197, 26, 0.2)'
                                                        }}>
                                                            <div 
                                                                className="point-icon me-3"
                                                                style={{
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    borderRadius: '8px',
                                                                    background: '#fdc51a',
                                                        color: '#1e2247',
                                                                    fontSize: '0.9rem',
                                                                    display: 'flex',
                                                        alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    flexShrink: 0
                                                                }}
                                                            >
                                                                <i className={point.icon}></i>
                                                            </div>
                                                            <span style={{
                                                                color: '#ffffff',
                                                                fontSize: '0.95rem',
                                                                fontWeight: '500'
                                                            }}>
                                                                {point.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                                </div>
                                            </div>
                                        </div>

                                {/* Right Column - Visual Elements */}
                                <div className="col-lg-6">
                                    <div className="stewards-visual">
                                        {/* Main Visual Card */}
                                            <div style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                                borderRadius: '25px',
                                            padding: '40px 35px',
                                            border: '2px solid rgba(253, 197, 26, 0.2)',
                                            backdropFilter: 'blur(20px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                            {/* Inner glow */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                background: 'radial-gradient(circle at 30% 30%, rgba(253, 197, 26, 0.2), transparent 60%)',
                                                    borderRadius: '25px',
                                                    zIndex: 1
                                                }}></div>

                                            <div style={{ position: 'relative', zIndex: 2 }}>
                                                {/* Stats Grid */}
                                                <div className="stats-grid">
                                                    <div className="row g-3">
                                                        {[
                                                            {
                                                                icon: "fas fa-moon",
                                                                title: "Night Protection",
                                                                desc: "24/7 Security"
                                                            },
                                                            {
                                                                icon: "fas fa-users-cog",
                                                                title: "Crew Confidence", 
                                                                desc: "Team Assurance"
                                                            },
                                                            {
                                                                icon: "fas fa-handshake",
                                                                title: "Stakeholder Trust",
                                                                desc: "Project Credibility"
                                                            },
                                                            {
                                                                icon: "fas fa-shield-alt",
                                                                title: "Asset Protection",
                                                                desc: "Secure Investment"
                                                            }
                                                        ].map((stat, index) => (
                                                            <div key={index} className="col-6">
                                                                <div className="stat-card text-center" style={{
                                                                    padding: '20px 10px',
                                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                                    borderRadius: '15px',
                                                                    border: '1px solid rgba(253, 197, 26, 0.3)',
                                                                    transition: 'all 0.3s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.transform = 'scale(1.05)';
                                                                    e.currentTarget.style.background = 'rgba(253, 197, 26, 0.15)';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.transform = 'scale(1)';
                                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                                                }}>
                                                                    <div 
                                                                        className="stat-icon mb-2 d-flex align-items-center justify-content-center mx-auto"
                                                                        style={{
                                                                            width: '40px',
                                                                            height: '40px',
                                                                            borderRadius: '10px',
                                                                            background: '#fdc51a',
                                                                            color: '#1e2247',
                                                                            fontSize: '1rem'
                                                                        }}
                                                                    >
                                                                        <i className={stat.icon}></i>
                                                                    </div>
                                                                    <h6 style={{
                                                                        color: '#ffffff',
                                                    fontWeight: '600',
                                                                        fontSize: '0.8rem',
                                                                        marginBottom: '5px',
                                                                        lineHeight: '1.2'
                                                                    }}>
                                                                        {stat.title}
                                                                    </h6>
                                                                    <p style={{
                                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                                        fontSize: '0.7rem',
                                                                        margin: 0
                                                                    }}>
                                                                        {stat.desc}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Secure Your Site Today CTA Section =====*/}
                    <div className="secure-site-cta-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 25% 25%, rgba(30, 34, 71, 0.06) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '12%',
                            right: '8%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '5%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div className="cta-content text-center">
                                        {/* Header */}
                                        <div className="cta-header mb-5">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "30px",
                                                justifyContent: "center"
                                            }}>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    boxShadow: "0 6px 20px rgba(30, 34, 71, 0.25)"
                                                }}>
                                                    <i className="fas fa-shield-check me-2"></i>
                                                    Take Action Now
                                                </span>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                            </div>
                                            
                                            <h2 style={{
                                                color: '#1e2247',
                                                fontSize: '3.5rem',
                                                fontWeight: '800',
                                                marginBottom: '30px',
                                                lineHeight: '1.2',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }}>
                                                Secure Your <span style={{color: '#fdc51a'}}>Site Today</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.4rem',
                                                lineHeight: '1.7',
                                                marginBottom: '40px',
                                                maxWidth: '700px',
                                                margin: '0 auto 40px'
                                            }}>
                                                Protect the work you've invested in. Arrange a <strong style={{color: '#1e2247'}}>free site assessment</strong> and see how a plan tailored to your project feels different in practice.
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="cta-buttons mb-5">
                                            <div className="row g-3 justify-content-center">
                                                <div className="col-auto">
                                                    <a href="/get-quotation" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        color: '#ffffff',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: 'none',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 12px 35px rgba(30, 34, 71, 0.4)';
                                                        e.target.style.background = 'linear-gradient(135deg, #fdc51a, #ffdb5c)';
                                                        e.target.style.color = '#1e2247';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
                                                        e.target.style.background = 'linear-gradient(135deg, #1e2247, #2c3e50)';
                                                        e.target.style.color = '#ffffff';
                                                    }}>
                                                        <i className="fas fa-calculator"></i>
                                                        Get Your Free Quote
                                                    </a>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="tel:1300731173" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'transparent',
                                                        color: '#1e2247',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: '2px solid #1e2247',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.background = '#1e2247';
                                                        e.target.style.color = '#ffffff';
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.25)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.background = 'transparent';
                                                        e.target.style.color = '#1e2247';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}>
                                                        <i className="fas fa-phone"></i>
                                                        Call 1300 73 11 73
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Closing Message */}
                                        <div className="closing-message">
                                            <div style={{
                                                background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.95), rgba(44, 62, 80, 0.95))',
                                                borderRadius: '20px',
                                                padding: '25px 35px',
                                                border: '1px solid rgba(253, 197, 26, 0.2)',
                                                backdropFilter: 'blur(10px)',
                                                maxWidth: '600px',
                                                margin: '0 auto',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                {/* Inner glow effect */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'radial-gradient(circle at 50% 50%, rgba(253, 197, 26, 0.15), transparent 70%)',
                                                    borderRadius: '20px',
                                                    zIndex: 1
                                                }}></div>
                                                
                                                <p style={{
                                                    color: '#ffffff',
                                                    fontSize: '1.2rem',
                                                    fontWeight: '600',
                                                    margin: 0,
                                                    lineHeight: '1.5',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fas fa-moon me-2" style={{color: '#fdc51a'}}></i>
                                                    Reach us out and bring <span style={{color: '#fdc51a'}}>steady nights</span> back to your schedule.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                                        
                    
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }