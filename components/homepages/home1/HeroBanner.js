"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({
  titleLines = ["Security", "Company", "Melbourne"],
  kicker = "Integrated Business Solutions",
  cta = { label: "Contact Us", href: "/contacts" },
  social = {
    youtube: "#",
    instagram: "#",
    linkedin: "#",
  },
  image = "/assets/img/banner/metro-2.jpg",
}) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ marginBottom: "0px" }}
    >
      {/* Background container */}
      <div className="absolute inset-0 -z-10" >
        <Image
          src={image}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: -1 }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* LEFT: Text */}
          <div style={{ textAlign: "right",marginRight:"50px" ,marginTop:"200px"}}>
            

            <h1
              style={{
                color: "#fdc51a",
                fontWeight: "bold",
                lineHeight: 1.2,
                fontSize: "60px",
                margin: "0 0 20px",
              }}
            >
              {titleLines.map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </h1>
              <span
              style={{
                display: "inline-block",
                fontWeight: "bold",
                color: "#0b0a0aff",
                borderRadius: "7px",
                padding: "8px 16px",
                
                marginBottom: "16px",
              }}
            >
              {kicker}
            </span>
            <div style={{ marginTop: "28px" }}>
              <Link
                href={cta.href}
                style={{
                  backgroundColor: "#FDC51A",
                  color: "#000",
                  padding: "14px 28px",
                  borderRadius: "7px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e2247';
                    e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FDC51A';
                    e.currentTarget.style.color = '#000';
                }}
              >
                {cta.label}
              </Link>
            </div>
          </div>

          
        </div>
      </div>

     
    </section>
  );
}
