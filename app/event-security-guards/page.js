'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, HardHat, Truck, Key, AlertCircle, Package, Settings, DollarSign, Cpu, UserPlus, Handshake, Star, Heart, Building2, Hospital, GraduationCap, Warehouse, ShoppingCart, Store, Gem, Box, ChevronDown, Music, Calendar as CalendarIcon, Trophy, Crown, Users2, Megaphone } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function EventSecurityPage() {
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
            title: "Event Security Guards",
            icon: <Shield size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "Professional security guards responsible for ensuring safety and security during various events",
            details: "Event security guards are professionals responsible for ensuring the safety and security of people and property during various types of events like parties and festivals. They play a crucial role in preventing and managing security risks, which can range from minor disturbances to more serious threats. Event security guards are trained to handle a variety of situations, from crowd management to emergency response, and they work closely with event organizers to create a safe and enjoyable environment for attendees."
        },
        {
            title: "Crowd Control Guards", 
            icon: <Users size={24} />,
            iconSymbol: <Users size={24} />,
            description: "Specialized guards for managing large groups of people during events",
            details: "Crowd control guards specialize in managing large groups of people during events. Their primary responsibility is to maintain order and safety in densely populated areas. They use their training and experience to prevent overcrowding, control line formations, and respond to any disruptions in the crowd. Effective crowd control guards are essential to prevent stampedes, maintain orderly queues, and ensure the well-being of event attendees."
        },
        {
            title: "Venue Security Guards",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Security personnel trained for specific venue types and locations",
            details: "Venue security guards are specifically trained to provide security services within a particular location, such as a sports stadium, concert hall, or conference center. They focus on access control, surveillance, and emergency response tailored to the unique security challenges of that venue. Their goal is to protect both the facility and the people within it."
        },
        {
            title: "Concert Security Guards",
            icon: <Music size={24} />,
            iconSymbol: <Music size={24} />,
            description: "Specialized security for music events and concerts",
            details: "Concert security guards are a specialized subset of event security professionals who work exclusively at music events. They are responsible for ensuring the safety and well-being of concertgoers. This includes managing access to the concert venue, preventing unauthorized entry, checking for prohibited items, and responding to incidents that may arise during the event."
        },
        {
            title: "Festival Security Guards",
            icon: <CalendarIcon size={24} />,
            iconSymbol: <CalendarIcon size={24} />,
            description: "Experts in providing security services at large outdoor events",
            details: "Festival security guards are experts in providing security services at large outdoor events, such as music festivals, food festivals, and cultural gatherings. They handle challenges unique to open-air venues, including access control, drug detection, alcohol regulations, and crowd management. Their goal is to make sure festival attendees have a fun and secure experience."
        },
        {
            title: "Sporting Event Security Guards",
            icon: <Trophy size={24} />,
            iconSymbol: <Trophy size={24} />,
            description: "Responsible for the safety and security of fans, athletes, and staff",
            details: "Sporting event security guards are responsible for the safety and security of fans, athletes, and staff at sporting events. They help maintain order in the stands, prevent fan altercations, and address any potential threats. These professionals also play a vital role in protecting the integrity of the event by preventing unauthorized access to restricted areas."
        },
        {
            title: "Corporate Event Security Guards",
            icon: <Building2 size={24} />,
            iconSymbol: <Building2 size={24} />,
            description: "Specialize in safeguarding corporate gatherings and conferences",
            details: "Corporate event security guards specialize in safeguarding corporate gatherings, including conferences, trade shows, and product launches. They ensure that confidential information remains secure, manage access to restricted areas, and provide a safe environment for attendees. Corporate event security is particularly crucial in today's business world, where sensitive data and intellectual property are at risk."
        },
        {
            title: "Special Event Security Guards",
            icon: <Crown size={24} />,
            iconSymbol: <Crown size={24} />,
            description: "Versatile professionals for high-profile occasions and VIP parties",
            details: "Special event security guards are versatile professionals who can adapt to the unique security needs of a wide range of events. They are often called upon to handle one-time, high-profile occasions, such as celebrity appearances, political rallies, or VIP parties. Their ability to quickly assess and address security risks makes them invaluable in safeguarding such special events."
        }
    ];

    const faqData = [
        {
            question: "What types of events do you provide security for?",
            answer: "We provide security services for all types of events including concerts, festivals, corporate gatherings, sporting events, private parties, weddings, conferences, trade shows, and community events. Our team is experienced in handling events of any size, from small intimate gatherings to large-scale festivals with thousands of attendees."
        },
        {
            question: "How far in advance should I book event security?",
            answer: "We recommend booking event security at least 2-4 weeks in advance to ensure availability and proper planning. However, we can accommodate last-minute requests depending on availability. For large events or high-profile occasions, we suggest booking 4-6 weeks in advance to allow for comprehensive security planning and coordination."
        },
        {
            question: "What qualifications do your event security guards have?",
            answer: "All our event security guards are fully licensed and undergo rigorous background checks and police clearance. They are certified in First Aid and CPR, have extensive event security training, and receive ongoing professional development. Our guards are also trained in crowd management, conflict resolution, and emergency response procedures."
        },
        {
            question: "Do you provide security for outdoor events?",
            answer: "Yes, we provide comprehensive security services for both indoor and outdoor events. Our team is experienced in handling the unique challenges of outdoor venues including weather considerations, perimeter control, crowd management in open spaces, and coordination with local authorities and emergency services."
        },
        {
            question: "Can you provide security for VIP events and celebrities?",
            answer: "Absolutely. We specialize in providing discreet yet effective security for VIP events, celebrity appearances, and high-profile occasions. Our team is trained in VIP protection protocols, media management, and maintaining privacy while ensuring maximum security for your special guests."
        }
    ];
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EVENT SECURITY SERVICES"
                mainTitle="Professional Event Security Guards"
                subtitle="Ensuring Your Events Are Secure and Run Smoothly - Professional Event Security in Melbourne"
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
                                                EVENT PROTECTION
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
                                            Professional Event Security Guards
                                        </h1>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                                Hire our professional event security guards in Melbourne to ensure your occasions and parties are secure and run smoothly. Our expert guards are always on their toes to ensure efficient crowd control and protection at your events by addressing all potential threats.
                                            </p>
                                        <p 
                                            className="mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1rem',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            They are extensively trained to design comprehensive security plans and follow all security protocols. They are expert at scanning the vehicles/bags, identifying and addressing any risks, emergency responses, and adhering to the strict safety needs. Trust Metro Guards which is the best security industry for your small-scale parties to all major event security services in Melbourne because your safety is our top priority.
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
                                               1300731173 <i className="bi bi-telephone ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-image position-relative">
                                        <img 
                                            src="/assets/img/blog/event security.jpg" 
                                            alt="Event Security Services" 
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
                                                src="/assets/img/blog/event security.jpg" 
                                                alt="Event Security Services" 
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
                                                <p className="lead" style={{color: '#000000'}}>Our event security guards provide comprehensive protection for all types of events, ensuring safety and security for attendees and organizers.</p>
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
                                                Our Event Security Services
                                            </h2>
                                            
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
                                            Hiring Process
                                        </h2>
                                        <p className="lead text-white mb-4" style={{opacity: '0.9'}}>
                                            When choosing an event security company, it's important to understand the hiring process for their security officers. This ensures that you are getting skilled and reliable personnel to protect your event and guests.
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
                                                    <UserCheck size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-white fw-bold mb-2">Qualifications of Security Personnel</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        Even before applying for a security guard position, candidates must meet certain qualifications. You can rest assured that when you hire security guards from Metro Guards, you will be getting personnel who have undergone thorough background checks and possess the necessary qualifications and licenses.
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
                                                    <Award size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-white fw-bold mb-2">Our Commitment to Quality</h5>
                                                    <p className="text-white mb-0" style={{opacity: '0.9', lineHeight: '1.6'}}>
                                                        Your safety and the security of your event are always a top priority for us, and we take great care in choosing the right individuals to join our team.
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
                                                src="/assets/img/blog/event security.jpg" 
                                                alt="Event Security Benefits" 
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

                    {/*===== Event Security Strategies Section =====*/}
                    <div className="strategies-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            <i className="bi bi-shield-check me-2"></i>
                                            PROFESSIONAL STRATEGIES
                                        </span>
                                    </div>
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                        Event Security Strategies
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d', maxWidth: '800px', margin: '0 auto'}}>
                                        For any event, having an effective security strategy is vital to ensure the safety and well-being of all attendees. As a professional event security guard in Melbourne, it's your responsibility to implement the right security measures to mitigate potential risks and handle any critical situations that may arise.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row g-4 mb-5">
                                <div className="col-lg-6">
                                    <div className="strategy-card h-100 p-4" style={{
                                        background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="d-flex align-items-start">
                                            <div 
                                                className="strategy-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '15px',
                                                    color: '#fdc51a'
                                                }}
                                            >
                                                <Search size={28} />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-3" style={{color: '#1e2247'}}>
                                                    Risk Assessment and Planning
                                                </h4>
                                                <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                                    When it comes to event security, thorough risk assessment and planning are essential. As a security guard, your first step is to conduct a comprehensive evaluation of the event venue and identify any potential security threats. This includes assessing the layout of the location, identifying entry and exit points, and evaluating the potential for unauthorized access.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="strategy-card h-100 p-4" style={{
                                        background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="d-flex align-items-start">
                                            <div 
                                                className="strategy-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '15px',
                                                    color: '#fdc51a'
                                                }}
                                            >
                                                <Users size={28} />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-3" style={{color: '#1e2247'}}>
                                                    Crowd Management and Emergency Response
                                                </h4>
                                                <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                                    Effective crowd management and emergency response are crucial components of event security. As a security guard, we play a vital role in controlling the flow of attendees, ensuring that the event runs smoothly and without incident. In the event of an emergency, it's our responsibility to act quickly and decisively to ensure the safety of all individuals present.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="strategy-card h-100 p-4" style={{
                                        background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="d-flex align-items-start">
                                            <div 
                                                className="strategy-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '15px',
                                                    color: '#fdc51a'
                                                }}
                                            >
                                                <Trophy size={28} />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-3" style={{color: '#1e2247'}}>
                                                    Success Stories in Melbourne
                                                </h4>
                                                <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                                    When it comes to event security in Melbourne, success stories abound. From protecting large public gatherings to managing security for exclusive events, Metro Guards has consistently delivered outstanding results. Their professional, well-trained security personnel have earned praise for their effectiveness and reliability in ensuring the safety and security of events across the city.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="strategy-card h-100 p-4" style={{
                                        background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(253, 197, 26, 0.1)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="d-flex align-items-start">
                                            <div 
                                                className="strategy-icon me-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#1e2247',
                                                    borderRadius: '15px',
                                                    color: '#fdc51a'
                                                }}
                                            >
                                                <Book size={28} />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-3" style={{color: '#1e2247'}}>
                                                    Lessons Learned from Past Events
                                                </h4>
                                                <p className="mb-0" style={{color: '#6c757d', lineHeight: '1.6'}}>
                                                    Over the years, Metro Guards has accumulated valuable insights and lessons from past events. One of the most important lessons learned is the critical role that proactive security measures play in preventing potential security threats. By staying ahead of the game and maintaining a strong security presence, you can effectively deter any unwanted incidents.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Why Hire Event Security Section =====*/}
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
                                        Why Hire Event Security Guards Services in Melbourne
                                    </h2>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        Successful event hosting is a challenging job that requires the safety and protection of all attendees and the venue. When an event is planned, whether a small birthday party, a corporate meeting, or a big concert, the responsibility of protecting the guests and VIPs lies with the host.
                                    </p>
                                    <p className="lead" style={{color: '#6c757d'}}>
                                        Get worry free and protect all your small—and large-scale gatherings, indoor and outdoor shows and parties with our trusted security services in Melbourne. Our team is equipped with advanced technology and skills to make your parties secure and memorable. We offer a full spectrum of event security guard services in Melbourne that may include, but not limited to:
                                    </p>
                                </div>
                                                    </div>
                            <div className="row g-4 g-md-3 g-lg-4">
                                {[
                                    { icon: <Truck size={32} />, title: "Controlling traffic within the venue", description: "Managing vehicle flow and parking" },
                                    { icon: <Crown size={32} />, title: "Protecting VIPs and special guests", description: "Dedicated security for important attendees" },
                                    { icon: <UserCheck size={32} />, title: "Checking IDs of all attendees", description: "Preventing unauthorized entries" },
                                    { icon: <Search size={32} />, title: "Scanning of bags", description: "Avoiding entry of harmful weapons" },
                                    { icon: <Users size={32} />, title: "Crowd management", description: "Maintaining order and safety" },
                                    { icon: <Heart size={32} />, title: "First aid service and emergency response", description: "Quick medical assistance when needed" },
                                    { icon: <AlertTriangle size={32} />, title: "Conflict and dispute management", description: "Resolving issues professionally" },
                                    { icon: <AlertCircle size={32} />, title: "Evacuating guests in case of incidents", description: "Safe evacuation procedures" }
                                ].map((service, index) => (
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
                                                    {service.icon}
                                                    
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
                                                        {service.title}
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
                                                        {service.description}
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
                                                        opacity: '0.1',
                                                        transition: 'all 0.6s ease',
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
                                                        opacity: '0.1',
                                                        transition: 'all 0.6s ease',
                                                        zIndex: '1'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-12 text-center">
                                    <p className="lead fw-bold" style={{color: '#1e2247'}}>
                                        No matter how vast your venue or the crowd is, hire our event security services in Melbourne to protect your guests and attendees.
                                    </p>
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
                                            Get answers to common questions about our event security services.
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
                    transform: translateY(-10px) scale(1.02) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1) rotate(5deg) !important;
                    box-shadow: 0 20px 50px rgba(30, 34, 71, 0.4) !important;
                }
                
                .industry-card:hover .industry-icon > div {
                    animation-duration: 1s !important;
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
                    
                    .strategy-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                    }
                    
                    .strategy-card:hover .strategy-icon {
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </>
    )
}