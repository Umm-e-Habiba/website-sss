// components/layout/HeaderStrip.jsx
"use client";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="topbar  text-white py-2 d-none d-lg-block">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        {/* Left side: email + hours */}
        <div className="d-flex align-items-center flex-wrap gap-3">
          <a href="mailto:info@finbiz.com" className="text-white text-decoration-none d-flex align-items-center gap-2">
            <i className="fa-regular fa-envelope"></i>
            <span>admin@metroguards.com.au</span>
          </a>

          <span className="topbar-divider"></span>

          <div className="d-flex align-items-center gap-2">
            <i className="fa-regular fa-location"></i>
            <span>CS Hub, 5, Level 1/34 Commercial Rd, Caroline Springs VIC 3023</span>
          </div>
        </div>

        {/* Right side: small links + socials */}
        <div className="d-flex align-items-center flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3 small-links">
            <Link href="/about" className="text-white text-decoration-none">About</Link>
            <Link href="/news" className="text-white text-decoration-none">News</Link>
            <Link href="/contact" className="text-white text-decoration-none">Contact</Link>
          </div>

          <span className="topbar-divider d-none d-md-inline"></span>

          <div className="d-flex align-items-center gap-3">
            <a href="https://www.facebook.com/metroguards?_rdc=1&_rdr#" aria-label="Facebook" className="text-white text-decoration-none">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com/metroguards" aria-label="Twitter/X" className="text-white text-decoration-none">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/metropolitanguard/" aria-label="Instagram" className="text-white text-decoration-none">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=61422039505" aria-label="Whatsapp" className="text-white text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
