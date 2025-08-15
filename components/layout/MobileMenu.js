"use client"
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {

    const [isActive, setIsActive] = useState({status: false,key: ""});
    const [openSections, setOpenSections] = useState({
    hire: false,
    corporate: false,
    loss: false,
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
                        <div className="mobile-header-elements">
                            <div className="mobile-logo" >
                                <Link href="/"><img src="/assets/img/logo/metroguards logo 2.png" alt="" style={{ width: "60px",height:"60px"}} /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li><Link href="#">About Us</Link>
                            <span className={isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(2)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                <li><Link href="/our-values">Our Values</Link></li>
                                <li><Link href="/corporate-responsibility">Corporate Responsibility</Link></li>
                                <li><Link href="/corporate-social-responsibility">Corporate Social Responsibility</Link></li>
                                <li><Link href="/mission-statement">Mission Statement</Link></li>
                                <li><Link href="/our-commitments">Our Commitments</Link></li>
                                <li><Link href="/how-we-thrive">How we Thrive</Link></li>
                                <li><Link href="/faqs">FAQ</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Services</Link>
                        <span
                            className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"}
                            onClick={() => handleToggle(3)}
                        />
                        <ul className="theme-mega-menu" style={{ display: isActive.key == 3 ? "block" : "none" }}>
                            <li className="mega-menu">
                            {/* Column 1 */}
                            <div className="single-mega-menu" style={{ position: "relative", paddingRight: 30 ,width: "300px"}}>
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
                            <div className="single-mega-menu" style={{ position: "relative", paddingRight: 30 ,width: "300px"}}>
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
                            <div className="single-mega-menu" style={{ position: "relative", paddingRight: 30 ,width: "300px"}}>
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
                            <div className="single-mega-menu" style={{ position: "relative", paddingRight: 30 ,width: "300px"}}>
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
                            <div className="single-mega-menu" style={{ position: "relative", paddingRight: 30 ,width: "300px"}}>
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
                        <li><Link href="/blogs">Blog</Link></li>
                        <li><Link href="#">Service Area</Link>
                            <span className={isActive.key == 5 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(5)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                <li><Link href="security-guard-east-melbourne-vic-3002">Security Guard East Melbourne</Link></li>
                                <li><Link href="security-guard-west-melbourne-vic-3003">Security Guard West Melbourne</Link></li>
                                <li><Link href="security-guard-north-melbourne-vic-3051">Security Guard North Melbourne</Link></li>
                                <li><Link href="security-guard-south-melbourne-vic-3205">Security Guard South Melbourne</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contacts">Contact</Link>
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
                                    <Link href="#">1300 73 11 73</Link>
                                    {/* <Link href="#">UK: +61 02 2585 0556</Link> */}
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" />
                                    </div>
                                    <Link href="#">admin@metroguards.com.au</Link>
                                    {/* <Link href="#">Info@consultia.co</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
