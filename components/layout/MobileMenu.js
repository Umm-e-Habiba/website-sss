"use client"
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {

    const [isActive, setIsActive] = useState({status: false, key: ""});
    const [openSections, setOpenSections] = useState({
        hire: false,
        corporate: false,
        loss: false,
        event: false,
        k9: false,
    });

    const handleToggle = (key) =>
        setIsActive((prev) =>
            prev.key === key ? { status: false, key: "" } : { status: true, key }
        );

    const toggleSection = (id) =>
        setOpenSections((s) => ({ ...s, [id]: !s[id] }));
    
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements" style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            padding: '10px 20px'
                        }}>
                            <div className="mobile-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/metroguards logo 2.png" alt="Metro Guards" style={{ width: "100px", height:"60px"}} />
                                </Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu} style={{
                                cursor: 'pointer',
                                fontSize: '24px',
                                color: '#333'
                            }}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`} style={{
                position: 'fixed',
                top: 0,
                right: isMobileMenu ? 0 : '-400px',
                width: '400px',
                height: '100vh',
                backgroundColor: '#fff',
                zIndex: 9999,
                transition: 'right 0.3s ease-in-out',
                boxShadow: '-2px 0 15px rgba(0,0,0,0.2)',
                overflow: 'auto'
            }}>
                {/* Mobile Sidebar Header */}
                <div className="mobile-sidebar-header" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 20px',
                    borderBottom: '1px solid #eee',
                    backgroundColor: '#f8f9fa'
                }}>
                    <div className="mobile-sidebar-logo">
                        <Link href="/" onClick={handleMobileMenu}>
                            <img src="/assets/img/logo/metroguards logo 2.png" alt="Metro Guards" style={{ width: "80px", height: "48px" }} />
                        </Link>
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu} style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: '#333',
                        padding: '5px'
                    }}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="mobile-nav" style={{ padding: '20px' }}>
                    <ul className="mobile-nav-list" style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        {/* Home */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <Link href="/" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Home
                            </Link>
                        </li>

                        {/* About Us */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px' }}>
                                <span style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1 }}>About Us</span>
                                <span 
                                    className={isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"} 
                                    onClick={() => handleToggle(2)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '8px',
                                        color: '#666',
                                        fontSize: '14px',
                                        minWidth: '30px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <i className={`fa-solid ${isActive.key == 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ 
                                display: isActive.key == 2 ? "block" : "none",
                                listStyle: 'none',
                                padding: '10px 0 0 20px',
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/our-values" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Our Values</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/corporate-responsibility" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Corporate Responsibility</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/corporate-social-responsibility" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Corporate Social Responsibility</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/mission-statement" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Mission Statement</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/our-commitments" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Our Commitments</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/how-we-thrive" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>How we Thrive</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/faqs" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>FAQ</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Services */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px' }}>
                                <span style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1 }}>Services</span>
                                <span
                                    className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"}
                                    onClick={() => handleToggle(3)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '8px',
                                        color: '#666',
                                        fontSize: '14px',
                                        minWidth: '30px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <i className={`fa-solid ${isActive.key == 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </span>
                            </div>
                            <div className="services-submenu" style={{ display: isActive.key == 3 ? "block" : "none", paddingTop: '10px' }}>
                                {/* Security Guard For Hire */}
                                <div className="service-category" style={{ marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', paddingRight: '10px' }}>
                                        <Link href="#" onClick={handleMobileMenu} style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1, textDecoration: 'none' }}>
                                            Security Guard For Hire
                                        </Link>
                                        <span
                                            className={openSections.hire ? "submenu-button submenu-opened" : "submenu-button"}
                                            onClick={() => toggleSection("hire")}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '8px',
                                                color: '#666',
                                                fontSize: '14px',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <i className={`fa-solid ${openSections.hire ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ 
                                        display: openSections.hire ? "block" : "none",
                                        listStyle: 'none',
                                        padding: '8px 0 0 40px',
                                        margin: 0
                                    }}>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/adhoc-security-services" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Adhoc Security Services</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/asset-protection" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Asset Protection</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/private-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Private Security Guards</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/staff-escort-security" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Staff Escort Security</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/mobile-patrol-security" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Mobile Patrol Security</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/rapid-alarm-response-security" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Rapid Alarm Response Security</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/hire-unarmed-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Hire Unarmed Security Guard</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Corporate Security Guards */}
                                <div className="service-category" style={{ marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', paddingRight: '10px' }}>
                                        <Link href="#" onClick={handleMobileMenu} style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1, textDecoration: 'none' }}>
                                            Corporate Security Guards
                                        </Link>
                                        <span
                                            className={openSections.corporate ? "submenu-button submenu-opened" : "submenu-button"}
                                            onClick={() => toggleSection("corporate")}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '8px',
                                                color: '#666',
                                                fontSize: '14px',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <i className={`fa-solid ${openSections.corporate ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ 
                                        display: openSections.corporate ? "block" : "none",
                                        listStyle: 'none',
                                        padding: '8px 0 0 40px',
                                        margin: 0
                                    }}>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/building-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Building Security Guard</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/construction-site-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Construction Site Security Guard</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/warehouse-security-system" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Warehouse Security System</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/concierge-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Concierge Guards</Link>
                                        </li>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/gatehouse-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Gatehouse Security Guard</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Loss Prevention Security */}
                                <div className="service-category" style={{ marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', paddingRight: '10px' }}>
                                        <Link href="#" onClick={handleMobileMenu} style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1, textDecoration: 'none' }}>
                                            Loss Prevention Security
                                        </Link>
                                        <span
                                            className={openSections.loss ? "submenu-button submenu-opened" : "submenu-button"}
                                            onClick={() => toggleSection("loss")}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '8px',
                                                color: '#666',
                                                fontSize: '14px',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <i className={`fa-solid ${openSections.loss ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ 
                                        display: openSections.loss ? "block" : "none",
                                        listStyle: 'none',
                                        padding: '8px 0 0 40px',
                                        margin: 0
                                    }}>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/retail-security-guard" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Retail Security Guard</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Event Security */}
                                <div className="service-category" style={{ marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', paddingRight: '10px' }}>
                                        <Link href="#" onClick={handleMobileMenu} style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1, textDecoration: 'none' }}>
                                            Event Security
                                        </Link>
                                        <span
                                            className={openSections.event ? "submenu-button submenu-opened" : "submenu-button"}
                                            onClick={() => toggleSection("event")}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '8px',
                                                color: '#666',
                                                fontSize: '14px',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <i className={`fa-solid ${openSections.event ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ 
                                        display: openSections.event ? "block" : "none",
                                        listStyle: 'none',
                                        padding: '8px 0 0 40px',
                                        margin: 0
                                    }}>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/event-security-guards" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Event Security Guards</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Canine (K9) Security */}
                                <div className="service-category" style={{ marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', paddingRight: '10px' }}>
                                        <Link href="#" onClick={handleMobileMenu} style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1, textDecoration: 'none' }}>
                                            Canine (K9) Security
                                        </Link>
                                        <span
                                            className={openSections.k9 ? "submenu-button submenu-opened" : "submenu-button"}
                                            onClick={() => toggleSection("k9")}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '8px',
                                                color: '#666',
                                                fontSize: '14px',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <i className={`fa-solid ${openSections.k9 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ 
                                        display: openSections.k9 ? "block" : "none",
                                        listStyle: 'none',
                                        padding: '8px 0 0 40px',
                                        margin: 0
                                    }}>
                                        <li style={{ marginBottom: '6px' }}>
                                            <Link href="/k9-security-guards-in-melbourne" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>Canine (K9) Security Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* Blog */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <Link href="/blogs" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Blog
                            </Link>
                        </li>

                        {/* Service Area */}
                        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px' }}>
                                <span style={{ color: '#333', fontSize: '16px', fontWeight: '500', flex: 1 }}>Service Area</span>
                                <span 
                                    className={isActive.key == 5 ? "submenu-button submenu-opened" : "submenu-button"} 
                                    onClick={() => handleToggle(5)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '8px',
                                        color: '#666',
                                        fontSize: '14px',
                                        minWidth: '30px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <i className={`fa-solid ${isActive.key == 5 ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ 
                                display: isActive.key == 5 ? "block" : "none",
                                listStyle: 'none',
                                padding: '10px 0 0 20px',
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/security-guard-east-melbourne-vic-3002" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Security Guard East Melbourne</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/security-guard-west-melbourne-vic-3003" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Security Guard West Melbourne</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/security-guard-north-melbourne-vic-3051" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Security Guard North Melbourne</Link>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <Link href="/security-guard-south-melbourne-vic-3205" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Security Guard South Melbourne</Link>
                                </li>
                            </ul>
                        </li>

                        {/* Contact */}
                        <li style={{ marginBottom: '15px' }}>
                            <Link href="/contacts" onClick={handleMobileMenu} style={{
                                color: '#333',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Contact */}
                    <div className="mobile-contact" style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <div className="single-footer">
                            <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '15px' }}>Get in touch</h3>
                            <div className="footer-contact" style={{ marginBottom: '15px' }}>
                                <div className="single-contact" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <Link href="tel:1300731173" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>1300 73 11 73</Link>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <Link href="mailto:admin@metroguards.com.au" onClick={handleMobileMenu} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>admin@metroguards.com.au</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenu && (
                <div 
                    className="mobile-sidebar-overlay" 
                    onClick={handleMobileMenu}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 9998
                    }}
                />
            )}
        </>
    )
}