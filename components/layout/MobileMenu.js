"use client"
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {

    const [isActive, setIsActive] = useState({status: false,key: ""});
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
            <div className="mobile-header mobile-header-4 d-lg-none" >
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements" style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/metroguards logo 2.png" alt="" style={{ width: "100px",height:"60px"}} /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu} style={{
                                position: 'absolute',
                                right: '20px',
                                cursor: 'pointer'
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
                right: isMobileMenu ? 0 : '-350px',
                width: '350px',
                height: '100vh',
                backgroundColor: '#fff',
                zIndex: 9999,
                transition: 'right 0.3s ease-in-out',
                boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
                overflow: 'auto'
            }}>
                <div className="menu-close" onClick={handleMobileMenu} style={{
                    position: 'absolute',
                    top: '15px',
                    right: '20px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    zIndex: 10000
                }}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav" style={{ paddingTop: '60px', padding: '60px 20px 20px' }}>
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="#" onClick={handleMobileMenu}>Home</Link>
                        </li>
                        <li><Link href="#" onClick={handleMobileMenu}>About Us</Link>
                            <span className={isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(2)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                <li><Link href="/our-values" onClick={handleMobileMenu}>Our Values</Link></li>
                                <li><Link href="/corporate-responsibility" onClick={handleMobileMenu}>Corporate Responsibility</Link></li>
                                <li><Link href="/corporate-social-responsibility" onClick={handleMobileMenu}>Corporate Social Responsibility</Link></li>
                                <li><Link href="/mission-statement" onClick={handleMobileMenu}>Mission Statement</Link></li>
                                <li><Link href="/our-commitments" onClick={handleMobileMenu}>Our Commitments</Link></li>
                                <li><Link href="/how-we-thrive" onClick={handleMobileMenu}>How we Thrive</Link></li>
                                <li><Link href="/faqs" onClick={handleMobileMenu}>FAQ</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#" onClick={handleMobileMenu}>Services</Link>
                        <span
                            className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"}
                            onClick={() => handleToggle(3)}
                        />
                        <ul className="theme-mega-menu" style={{ display: isActive.key == 3 ? "block" : "none" }}>
                            <li className="mega-menu">
                            {/* Column 1 */}
                            <div className="single-mega-menu" style={{ position: "relative", marginBottom: "20px" }}>
                                <h3 className="font-f-1-submenu" style={{ marginBottom: 0 }}>
                                Security Guard For Hire
                                </h3>
                                <span
                                className={openSections.hire ? "submenu-button submenu-opened" : "submenu-button"}
                                onClick={() => toggleSection("hire")}
                                style={{ height: 44 }}
                                />
                                <ul className="sub-menu" style={{ display: openSections.hire ? "block" : "none" }}>
                                <li><Link href="/adhoc-security-services" onClick={handleMobileMenu}>Adhoc Security Services</Link></li>
                                <li><Link href="/asset-protection" onClick={handleMobileMenu}>Asset Protection</Link></li>
                                <li><Link href="/private-security-guards" onClick={handleMobileMenu}>Private Security Guards</Link></li>
                                <li><Link href="/staff-escort-security" onClick={handleMobileMenu}>Staff Escort Security</Link></li>
                                <li><Link href="/mobile-patrol-security" onClick={handleMobileMenu}>Mobile Patrol Security</Link></li>
                                <li><Link href="/rapid-alarm-response-security" onClick={handleMobileMenu}>Rapid Alarm Response Security</Link></li>
                                <li><Link href="/hire-unarmed-security-guard" onClick={handleMobileMenu}>Hire Unarmed Security Guard</Link></li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="single-mega-menu" style={{ position: "relative", marginBottom: "20px" }}>
                                <h3 className="font-f-1-submenu" style={{ marginBottom: 0 }}>
                                Corporate Security Guards
                                </h3>
                                <span
                                className={openSections.corporate ? "submenu-button submenu-opened" : "submenu-button"}
                                onClick={() => toggleSection("corporate")}
                                style={{ height: 44 }}
                                />
                                <ul className="sub-menu" style={{ display: openSections.corporate ? "block" : "none" }}>
                                <li><Link href="/building-security-guards" onClick={handleMobileMenu}>Building Security Guard</Link></li>
                                <li><Link href="/construction-site-security-guard" onClick={handleMobileMenu}>Construction Site Security Guard</Link></li>
                                <li><Link href="/warehouse-security-system" onClick={handleMobileMenu}>Warehouse Security System</Link></li>
                                <li><Link href="/concierge-guards" onClick={handleMobileMenu}>Concierge Guards</Link></li>
                                <li><Link href="/gatehouse-security-guard" onClick={handleMobileMenu}>Gatehouse Security Guard</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div className="single-mega-menu" style={{ position: "relative", marginBottom: "20px" }}>
                                <h3 className="font-f-1-submenu" style={{ marginBottom: 0 }}>
                                Loss Prevention Security
                                </h3>
                                <span
                                className={openSections.loss ? "submenu-button submenu-opened" : "submenu-button"}
                                onClick={() => toggleSection("loss")}
                                style={{ height: 44 }}
                                />
                                <ul className="sub-menu" style={{ display: openSections.loss ? "block" : "none" }}>
                                <li><Link href="/retail-security-guard" onClick={handleMobileMenu}>Retail Security Guard</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 */}
                            <div className="single-mega-menu" style={{ position: "relative", marginBottom: "20px" }}>
                                <h3 className="font-f-1-submenu" style={{ marginBottom: 0 }}>
                                Event Security
                                </h3>
                                <span
                                className={openSections.event ? "submenu-button submenu-opened" : "submenu-button"}
                                onClick={() => toggleSection("event")}
                                style={{ height: 44 }}
                                />
                                <ul className="sub-menu" style={{ display: openSections.event ? "block" : "none" }}>
                                <li><Link href="/event-security-guards" onClick={handleMobileMenu}>Event Security Guards</Link></li>
                                </ul>
                            </div>
                            {/* Column 5 */}
                            <div className="single-mega-menu" style={{ position: "relative", marginBottom: "20px" }}>
                                <h3 className="font-f-1-submenu" style={{ marginBottom: 0 }}>
                                Canine (K9) Security
                                </h3>
                                <span
                                className={openSections.k9 ? "submenu-button submenu-opened" : "submenu-button"}
                                onClick={() => toggleSection("k9")}
                                style={{ height: 44 }}
                                />
                                <ul className="sub-menu" style={{ display: openSections.k9 ? "block" : "none" }}>
                                <li><Link href="/k9-security-guards-in-melbourne" onClick={handleMobileMenu}>Canine (K9) Security Services</Link></li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li><Link href="/blogs" onClick={handleMobileMenu}>Blog</Link></li>
                        <li><Link href="#" onClick={handleMobileMenu}>Service Area</Link>
                            <span className={isActive.key == 5 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(5)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                <li><Link href="security-guard-east-melbourne-vic-3002" onClick={handleMobileMenu}>Security Guard East Melbourne</Link></li>
                                <li><Link href="security-guard-west-melbourne-vic-3003" onClick={handleMobileMenu}>Security Guard West Melbourne</Link></li>
                                <li><Link href="security-guard-north-melbourne-vic-3051" onClick={handleMobileMenu}>Security Guard North Melbourne</Link></li>
                                <li><Link href="security-guard-south-melbourne-vic-3205" onClick={handleMobileMenu}>Security Guard South Melbourne</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contacts" onClick={handleMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" />
                                    </div>
                                    <Link href="#" onClick={handleMobileMenu}>1300 73 11 73</Link>
                                    {/* <Link href="#">UK: +61 02 2585 0556</Link> */}
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" />
                                    </div>
                                    <Link href="#" onClick={handleMobileMenu}>admin@metroguards.com.au</Link>
                                    {/* <Link href="#">Info@consultia.co</Link> */}
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