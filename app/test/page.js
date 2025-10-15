"use client";
import React from "react";
import { Phone, Zap, MapPin, Award, Bell, CheckCircle, Clock, Shield, Eye, Target, Users, UserCheck, Footprints, HelpCircle, Flame, Key, Video } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhyChooseUs from "@/components/ui/why-choose-us";
import Accreditation from "@/components/accrediation10";
import Subscribe from "@/components/homepages/home1/Subscribe";

export default function BuildingSecurityPage() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="BUILDING SECURITY GUARDS"
      mainTitle="Building Security Guards in Melbourne"
    >
      <div>
        {/* Hero */}
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="badge" style={{ background: "#fdc51a", color: "#1e2247", fontWeight: 700 }}>
                  PROFESSIONAL PROTECTION
                </span>
                <h1 style={{ color: "#1e2247", marginTop: 20 }}>Building Security Guards in Melbourne</h1>
                <p style={{ color: "#6c757d", maxWidth: 620 }}>
                  When your building sleeps, we protect it. Metro Guards provides licensed building security guards
                  across Melbourne who stay awake, responsive, and compliant with your site’s standard operating
                  procedures. Our guards secure lobbies, manage access, patrol common areas, and respond to alarms so
                  your property and people stay safe.
                </p>

                <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                  <a
                    href="/get-quotation"
                    className="btn btn-primary"
                    style={{ background: "#fdc51a", color: "#1e2247", fontWeight: 700, padding: "12px 20px", borderRadius: 8 }}
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="tel:1300731173"
                    className="btn btn-outline-dark d-flex align-items-center"
                    style={{ borderColor: "#1e2247", color: "#1e2247", padding: "12px 20px", borderRadius: 8 }}
                  >
                    <Phone size={16} style={{ marginRight: 8 }} />
                    1300 73 11 73
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/img/blog/building-guard.jpg"
                  alt="Building Security"
                  style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 12 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Reliable Building Security Matters */}
        <section style={{ background: "#f8f9fa", padding: "70px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src="/assets/img/blog/building-guard.jpg"
                  alt="Building Security Guard"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                />
              </div>
              <div className="col-lg-6">
                <div style={{ paddingLeft: "40px" }}>
                  <span className="badge" style={{ background: "#fdc51a", color: "#1e2247", fontWeight: 700 }}>
                    RELIABILITY MATTERS
                  </span>
                  <h2 style={{ color: "#1e2247", marginTop: 12, marginBottom: 20 }}>
                    Why Reliable Building Security Matters
                  </h2>
                  
                  <p style={{ color: "#6c757d", fontSize: "1.1rem", marginBottom: 25, lineHeight: 1.6 }}>
                    A quiet lobby at 2 AM is peaceful—until something goes wrong. Tenants expect protection,
                    not excuses. When guards fail to show up or skip patrols, managers face complaints, theft,
                    and loss of trust.
                  </p>

                  <div 
                    style={{ 
                      background: "#1e2247", 
                      color: "#fff", 
                      padding: "20px 25px", 
                      borderRadius: 12,
                      marginBottom: 25,
                      borderLeft: "5px solid #fdc51a"
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: 500 }}>
                      At Metro Guards, reliability is not a slogan. It's verified.
                    </p>
                  </div>

                  <div style={{ background: "#fff", padding: "25px", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    {[
                      "Guards arrive on time and stay until the shift ends.",
                      "Every patrol and checkpoint is tracked through GPS.",
                      "Reports are logged in real time and reviewed by supervisors."
                    ].map((point, index) => (
                      <div 
                        key={index} 
                        style={{ 
                          display: "flex", 
                          alignItems: "center",
                          marginBottom: index !== 2 ? "15px" : 0
                        }}
                      >
                        <div 
                          style={{ 
                            minWidth: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: "#fdc51a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px"
                          }}
                        >
                          <CheckCircle size={14} style={{ color: "#1e2247" }} />
                        </div>
                        <p style={{ margin: 0, color: "#1e2247" }}>{point}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ 
                    color: "#6c757d", 
                    fontSize: "1.1rem", 
                    marginTop: 25,
                    fontStyle: "italic",
                    borderLeft: "3px solid #fdc51a",
                    paddingLeft: 15
                  }}>
                    You don't have to "hope" the guard is doing the job. You can see it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services lists */}
        <section style={{ background: "#fff", padding: "60px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="/assets/img/blog/building-guard.jpg"
                  alt="Services"
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 12 }}
                />
              </div>
              <div className="col-lg-6">
                <span className="badge" style={{ background: "#fdc51a", color: "#1e2247", fontWeight: 700 }}>
                  OUR SERVICES
                </span>
                <h2 style={{ color: "#1e2247", marginTop: 12, marginBottom: 20 }}>
                  Our Building Security Services
                </h2>

                <h4>Residential Buildings</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Clock size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>24/7 lobby and reception presence</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <UserCheck size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Visitor and contractor verification</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Footprints size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Patrols through parking areas, rooftops, and common spaces</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <HelpCircle size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Noise control and resident assistance</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <Flame size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Fire and emergency coordination</span>
                  </li>
                </ul>

                <h4 style={{ marginTop: 12 }}>Commercial Buildings</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Key size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Access control for offices and restricted areas</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Video size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>CCTV monitoring and alarm response</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Shield size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Protection of assets, documents, and machinery</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Users size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Customer service for staff and tenants</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <Zap size={20} style={{ marginRight: 10, color: '#fdc51a' }} />
                    <span>Immediate first response during incidents</span>
                  </li>
                </ul>

                <p style={{ marginTop: 12 }}>
                  Each guard follows your building’s exact SOPs. Every task is logged, verified, and visible to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Supervision - Classic New Design */}
        <section className="Technology & Supervision" style={{ 
          background: "linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)", 
          padding: "100px 0",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background Pattern */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)`,
            zIndex: 1
          }}></div>

          {/* Floating Elements */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "100px",
            height: "100px",
            background: "rgba(253, 197, 26, 0.1)",
            borderRadius: "50%",
            zIndex: 1
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "150px",
            height: "150px",
            background: "rgba(253, 197, 26, 0.05)",
            borderRadius: "50%",
            zIndex: 1
          }}></div>

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            {/* Header Section */}
            <div className="text-center mb-5">
              <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "15px", 
                marginBottom: "25px" 
              }}>
                <div style={{
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #fdc51a)",
                  borderRadius: "1px"
                }}></div>
                <span className="badge px-4 py-2" style={{ 
                  background: "rgba(253, 197, 26, 0.2)", 
                  color: "#fdc51a", 
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  border: "1px solid rgba(253, 197, 26, 0.3)"
                }}>
                  Our Technology & Supervision
                </span>
                <div style={{
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #fdc51a, transparent)",
                  borderRadius: "1px"
                }}></div>
              </div>
              
              <h2 style={{ 
                color: "#ffffff", 
                fontSize: "2.8rem",
                fontWeight: "800",
                marginBottom: "20px",
                lineHeight: "1.2",
                textShadow: "0 4px 8px rgba(0,0,0,0.3)"
              }}>
                Advanced <span style={{ color: "#fdc51a" }}>Technology</span> & Supervision
              </h2>
              
              <p style={{ 
                color: "rgba(255, 255, 255, 0.8)", 
                maxWidth: "650px", 
                margin: "0 auto",
                fontSize: "1.2rem",
                lineHeight: "1.6"
              }}>
                Cutting-edge technology meets human expertise for unparalleled security oversight
              </p>
            </div>

            {/* Enhanced Tiles Grid */}
            <div className="row g-5">
              {[
                {
                  icon: <MapPin size={36} />,
                  title: "Live Guard Tracking",
                  text: "Know where your guards are in real-time via GPS-tracked patrols and check-ins.",
                  color: "#e74c3c",
                  bgPattern: "linear-gradient(135deg, #e74c3c15, #e74c3c05)"
                },
                {
                  icon: <Zap size={36} />,
                  title: "Real-Time Reporting",
                  text: "Instant incident reports and photos delivered to your dashboard and management team.",
                  color: "#f39c12",
                  bgPattern: "linear-gradient(135deg, #f39c1215, #f39c1205)"
                },
                {
                  icon: <Award size={36} />,
                  title: "Supervisor Inspections",
                  text: "Regular supervisor site inspections ensure SOP compliance and continuous improvement.",
                  color: "#27ae60",
                  bgPattern: "linear-gradient(135deg, #27ae6015, #27ae6005)"
                },
                {
                  icon: <Bell size={36} />,
                  title: "Incident Alerts",
                  text: "Immediate alerts for alarms, breaches, or health-and-safety incidents.",
                  color: "#9b59b6",
                  bgPattern: "linear-gradient(135deg, #9b59b615, #9b59b605)"
                },
              ].map((c, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      padding: "35px 25px",
                      borderRadius: "25px",
                      height: "100%",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-20px) rotateY(5deg)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.2)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) rotateY(0deg)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                    }}
                  >
                    {/* Background Pattern */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: c.bgPattern,
                      zIndex: 1
                    }}></div>

                    {/* Decorative Corner */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "60px",
                      height: "60px",
                      background: `linear-gradient(135deg, ${c.color}20, transparent)`,
                      borderRadius: "0 25px 0 60px"
                    }}></div>

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                      {/* Icon Container */}
                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 25px",
                          background: `linear-gradient(135deg, ${c.color}, ${c.color}dd)`,
                          color: "#ffffff",
                          boxShadow: `0 15px 30px ${c.color}40`,
                          position: "relative"
                        }}
                      >
                        {/* Inner glow */}
                        <div style={{
                          position: "absolute",
                          inset: "8px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, rgba(255,255,255,0.2), transparent)`,
                          zIndex: 1
                        }}></div>
                        <div style={{ position: "relative", zIndex: 2 }}>
                          {c.icon}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h5 style={{ 
                        color: "#1e2247", 
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        marginBottom: "15px",
                        lineHeight: "1.3"
                      }}>
                        {c.title}
                      </h5>
                      
                      {/* Description */}
                      <p style={{ 
                        color: "#6c757d", 
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        margin: 0
                      }}>
                        {c.text}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: "20%",
                      right: "20%",
                      height: "3px",
                      background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
                      borderRadius: "3px 3px 0 0"
                    }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats Section */}
            <div className="row mt-5 pt-4">
              <div className="col-12">
                <div style={{
                  background: "rgba(253, 197, 26, 0.1)",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "1px solid rgba(253, 197, 26, 0.2)",
                  textAlign: "center"
                }}>
                  <div className="row">
                    <div className="col-md-4">
                      <h3 style={{ color: "#fdc51a", fontSize: "2.5rem", fontWeight: "800", marginBottom: "5px" }}>
                        99.9%
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>System Uptime</p>
                    </div>
                    <div className="col-md-4">
                      <h3 style={{ color: "#fdc51a", fontSize: "2.5rem", fontWeight: "800", marginBottom: "5px" }}>
                        24/7
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>Live Monitoring</p>
                    </div>
                    <div className="col-md-4">
                      <h3 style={{ color: "#fdc51a", fontSize: "2.5rem", fontWeight: "800", marginBottom: "5px" }}>
                        &lt;2min
                      </h3>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>Response Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Metro Guards - Classic New Design */}
        <section className="why-choose-section" style={{ 
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", 
          padding: "100px 0",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background Pattern */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(30, 34, 71, 0.1) 0%, transparent 50%)`,
            zIndex: 1
          }}></div>

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            {/* Header Section */}
            <div className="text-center mb-5">
              <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "12px", 
                marginBottom: "20px" 
              }}>
                <div style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                  borderRadius: "2px"
                }}></div>
                <span className="badge px-4 py-2" style={{ 
                  background: "#1e2247", 
                  color: "#fdc51a", 
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "25px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Why Choose Us
                </span>
                <div style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
                  borderRadius: "2px"
                }}></div>
              </div>
              
              <h2 style={{ 
                color: "#1e2247", 
                fontSize: "3rem",
                fontWeight: "800",
                marginBottom: "24px",
                lineHeight: "1.2",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                Why Choose <span style={{ color: "#fdc51a" }}>Metro Guards</span>
              </h2>
              
              <p className="lead" style={{ 
                color: "#495057", 
                maxWidth: "600px", 
                margin: "0 auto",
                fontSize: "1.3rem",
                fontWeight: "400",
                lineHeight: "1.6"
              }}>
                When others promise, we deliver <strong style={{ color: "#1e2247" }}>measurable proof</strong>.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="row g-5">
              {[
                {
                  title: "15+ Years Experience",
                  text: "Securing Melbourne's buildings with proven expertise and local knowledge",
                  icon: <Award size={32} />,
                  highlight: "15+",
                  color: "#e74c3c"
                },
                {
                  title: "Victorian Licensed",
                  text: "Fully compliant and licensed under Victorian security regulations",
                  icon: <Shield size={32} />,
                  highlight: "100%",
                  color: "#27ae60"
                },
                {
                  title: "ISO Certified",
                  text: "Triple ISO certification for quality, safety, and environmental standards",
                  icon: <CheckCircle size={32} />,
                  highlight: "ISO",
                  color: "#3498db"
                },
                {
                  title: "Industry Verified",
                  text: "CM3 prequalified and proud member of ASIAL",
                  icon: <Award size={32} />,
                  highlight: "CM3",
                  color: "#9b59b6"
                },
                {
                  title: "Award-Winning Support",
                  text: "Dedicated customer service team available 24/7",
                  icon: <Users size={32} />,
                  highlight: "24/7",
                  color: "#f39c12"
                },
                {
                  title: "Fast Response",
                  text: "Active local management that responds quickly to client needs",
                  icon: <Zap size={32} />,
                  highlight: "Fast",
                  color: "#e67e22"
                }
              ].map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div
                    style={{
                      background: "#ffffff",
                      padding: "40px 30px",
                      borderRadius: "20px",
                      height: "100%",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.8)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
                      e.currentTarget.style.borderColor = item.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                    }}
                  >
                    {/* Background Decoration */}
                    <div style={{ 
                      position: "absolute", 
                      top: "-50px", 
                      right: "-50px", 
                      width: "120px",
                      height: "120px",
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                      borderRadius: "50%",
                      zIndex: 1
                    }}></div>
                    
                    {/* Highlight Number */}
                    <div style={{ 
                      position: "absolute", 
                      top: "25px", 
                      right: "25px", 
                      opacity: 0.1, 
                      fontSize: "4rem", 
                      fontWeight: 900,
                      color: item.color,
                      lineHeight: 1,
                      zIndex: 1
                    }}>
                      {item.highlight}
                    </div>
                    
                    {/* Icon Container */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                        marginBottom: "25px",
                        color: "#ffffff",
                        position: "relative",
                        zIndex: 2,
                        boxShadow: `0 8px 25px ${item.color}40`
                      }}
                    >
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 2 }}>
                      <h4 style={{ 
                        color: "#1e2247", 
                        fontSize: "1.4rem", 
                        marginBottom: "15px",
                        fontWeight: "700",
                        lineHeight: "1.3"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        color: "#6c757d", 
                        margin: 0,
                        fontSize: "1rem",
                        lineHeight: "1.6"
                      }}>
                        {item.text}
                      </p>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                      borderRadius: "0 0 20px 20px"
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-5 pt-4">
              <div style={{
                background: "#1e2247",
                borderRadius: "20px",
                padding: "40px",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(253, 197, 26, 0.1) 0%, transparent 50%)",
                  zIndex: 1
                }}></div>
                
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3 style={{ 
                    color: "#ffffff", 
                    marginBottom: "15px",
                    fontSize: "1.8rem",
                    fontWeight: "700"
                  }}>
                    Ready to Experience the Metro Guards Difference?
                  </h3>
                  <p style={{ 
                    color: "#fdc51a", 
                    marginBottom: "25px",
                    fontSize: "1.1rem"
                  }}>
                    Join hundreds of satisfied clients who trust us with their security needs.
                  </p>
                  <button style={{
                    background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                    color: "#1e2247",
                    border: "none",
                    padding: "15px 35px",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(253, 197, 26, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    Get Your Free Quote Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results You Can Measure - Classic New Design */}
        <section className="Results You Can Measure" style={{ 
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)", 
          padding: "120px 0", 
          overflow: "hidden",
          position: "relative"
        }}>
          {/* Background Pattern */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(30, 34, 71, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(253, 197, 26, 0.05) 0%, transparent 50%)
            `,
            zIndex: 1
          }}></div>

          {/* Decorative Elements */}
          <div style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "200px",
            height: "200px",
            background: "linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)",
            borderRadius: "50%",
            zIndex: 1
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "10%",
            left: "8%",
            width: "150px",
            height: "150px",
            background: "linear-gradient(135deg, rgba(30, 34, 71, 0.05), transparent)",
            borderRadius: "50%",
            zIndex: 1
          }}></div>

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="row align-items-center">
              {/* Left Content Section */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div style={{ position: "relative" }}>
                  {/* Decorative Line */}
                  <div style={{
                    position: "absolute",
                    top: "-20px",
                    left: "0",
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                    borderRadius: "2px"
                  }}></div>

                  <div style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "12px", 
                    marginBottom: "25px" 
                  }}>
                    <span className="badge px-4 py-2" style={{ 
                      background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                      color: "#fdc51a", 
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      borderRadius: "25px",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      boxShadow: "0 4px 15px rgba(30, 34, 71, 0.3)"
                    }}>
                      <i className="fas fa-chart-line me-2"></i>
                      Proven Track Record
                    </span>
                  </div>
                  
                  <h2 style={{ 
                    color: "#1e2247", 
                    fontSize: "3.2rem",
                    fontWeight: "800",
                    marginBottom: "25px",
                    lineHeight: "1.1",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}>
                    Results You Can <span style={{ 
                      color: "#fdc51a",
                      position: "relative"
                    }}>
                      Measure
                      <div style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, transparent, #fdc51a, transparent)",
                        borderRadius: "2px"
                      }}></div>
                    </span>
                  </h2>
                  
                  <p style={{ 
                    color: "#495057", 
                    fontSize: "1.25rem", 
                    marginBottom: "35px",
                    lineHeight: "1.7",
                    fontWeight: "400"
                  }}>
                    Safe buildings protect reputations. We make sure yours stays <strong style={{ color: "#1e2247" }}>strong</strong>.
                  </p>

                  {/* Call to Action */}
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <button style={{
                      background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                      color: "#1e2247",
                      border: "none",
                      padding: "12px 30px",
                      borderRadius: "30px",
                      fontSize: "1rem",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(253, 197, 26, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      View Full Report
                    </button>
                    <span style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                      Updated monthly
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Stats Grid */}
              <div className="col-lg-7">
                <div className="row g-4">
                  {[
                    {
                      stat: "98%",
                      label: "On-Time Attendance Rate",
                      description: "Reliable security presence when and where you need it",
                      icon: "fas fa-clock",
                      color: "#27ae60",
                      bgGradient: "linear-gradient(135deg, #27ae60, #2ecc71)"
                    },
                    {
                      stat: "40%",
                      label: "Lower Incident Reports",
                      description: "Reduction in incidents at monitored sites",
                      icon: "fas fa-shield-alt",
                      color: "#e74c3c",
                      bgGradient: "linear-gradient(135deg, #e74c3c, #c0392b)"
                    },
                    {
                      stat: "100%",
                      label: "Portal Transparency",
                      description: "Complete visibility into security operations",
                      icon: "fas fa-eye",
                      color: "#3498db",
                      bgGradient: "linear-gradient(135deg, #3498db, #2980b9)"
                    },
                    {
                      stat: "24/7",
                      label: "Melbourne Support",
                      description: "Round-the-clock operations center support",
                      icon: "fas fa-headset",
                      color: "#9b59b6",
                      bgGradient: "linear-gradient(135deg, #9b59b6, #8e44ad)"
                    }
                  ].map((item, i) => (
                    <div key={i} className="col-md-6">
                      <div
                        style={{
                          background: "#ffffff",
                          padding: "35px 30px",
                          borderRadius: "25px",
                          position: "relative",
                          height: "100%",
                          transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                          overflow: "hidden",
                          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                          cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                          e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
                          e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
                        }}
                      >
                        {/* Background Pattern */}
                        <div style={{
                          position: "absolute",
                          top: "-30px",
                          right: "-30px",
                          width: "100px",
                          height: "100px",
                          background: `${item.color}10`,
                          borderRadius: "50%",
                          zIndex: 1
                        }}></div>

                        {/* Icon Badge */}
                        <div style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: item.bgGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 8px 20px ${item.color}40`,
                          zIndex: 2
                        }}>
                          <i className={item.icon} style={{ color: "#ffffff", fontSize: "18px" }}></i>
                        </div>
                        
                        {/* Content */}
                        <div style={{ position: "relative", zIndex: 2 }}>
                          <h3 
                            style={{ 
                              fontSize: "3.5rem", 
                              fontWeight: "900", 
                              color: item.color,
                              marginBottom: "12px",
                              textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              lineHeight: "1"
                            }}
                          >
                            {item.stat}
                          </h3>
                          <h4 
                            style={{ 
                              fontSize: "1.2rem", 
                              color: "#1e2247",
                              marginBottom: "12px",
                              fontWeight: "700",
                              lineHeight: "1.3"
                            }}
                          >
                            {item.label}
                          </h4>
                          <p style={{ 
                            color: "#6c757d", 
                            margin: 0, 
                            fontSize: "0.95rem",
                            lineHeight: "1.6"
                          }}>
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Accent */}
                        <div style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: item.bgGradient,
                          borderRadius: "0 0 25px 25px"
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-4">
                  <div style={{
                    background: "linear-gradient(135deg, rgba(30, 34, 71, 0.05), rgba(253, 197, 26, 0.05))",
                    borderRadius: "20px",
                    padding: "25px",
                    textAlign: "center",
                    border: "1px solid rgba(253, 197, 26, 0.2)"
                  }}>
                    <div className="row">
                      <div className="col-4">
                        <h5 style={{ color: "#1e2247", fontSize: "1.5rem", fontWeight: "800", marginBottom: "5px" }}>
                          15+
                        </h5>
                        <p style={{ color: "#6c757d", margin: 0, fontSize: "0.85rem" }}>Years Experience</p>
                      </div>
                      <div className="col-4">
                        <h5 style={{ color: "#1e2247", fontSize: "1.5rem", fontWeight: "800", marginBottom: "5px" }}>
                          500+
                        </h5>
                        <p style={{ color: "#6c757d", margin: 0, fontSize: "0.85rem" }}>Sites Protected</p>
                      </div>
                      <div className="col-4">
                        <h5 style={{ color: "#1e2247", fontSize: "1.5rem", fontWeight: "800", marginBottom: "5px" }}>
                          ISO
                        </h5>
                        <p style={{ color: "#6c757d", margin: 0, fontSize: "0.85rem" }}>Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Accreditation />
        <Subscribe />
      </div>
    </Layout>
  );
}