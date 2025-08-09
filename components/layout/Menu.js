'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

export default function Menu() {
    const routerPath = usePathname()
    useEffect(() => {
        if (routerPath == "/index-rtl-1") {
            document.documentElement.lang = "ar"
            document.documentElement.dir = "rtl"
            document.body.classList.add("rtl-version")
        } else {
            document.documentElement.lang = "en"
            document.documentElement.dir = ""
            document.body.classList.remove("rtl-version")
        }
    }, [routerPath])

    return (
        <ul className="menu_list scroll">
            <li className="dropdown-parrent">
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown-parrent">
                <Link href="">About Us</Link>
                <ul className="theme-dropdown">
                    <li><Link href="/our-values">Our Values</Link></li>
                    <li><Link href="/corporate-responsibility">Corporate Responsibility</Link></li>
                    <li><Link href="/corporate-social-responsibility">Corporate Social Responsibility</Link></li>
                    <li><Link href="/mission-statement">Mission Statement</Link></li>
                    <li><Link href="/our-commitments">Our Commitments</Link></li>
                    <li><Link href="/how-we-thrive">How we Thrive</Link></li>
                    <li><Link href="/FAQ">FAQ</Link></li>
                </ul>
            </li>
            <li className="mega-menu-parrent">
                <Link href="#">Services</Link>
                <ul className="theme-mega-menu">
                    <li className="mega-menu">
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Security Guard For Hire</h3>
                            <ul>
                                <li><Link href="/adhoc-security-services">Adhoc Security Services</Link></li>
                                <li><Link href="/asset-protection">Asset Protection</Link></li>
                                <li><Link href="/private-security-guard">Private Security Guards</Link></li>
                                <li><Link href="/staff-escort-security">Staff Escort Security</Link></li>
                                <li><Link href="/mobile-patrol-security">Mobile Patrol Security</Link></li>
                                <li><Link href="/rapid-alarm-response-security">Rapid Alarm Response Security</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Hire Unarmed Security Guard</Link></li>
                            </ul>
                        </div>
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Corporate Security Guards</h3>
                            <ul>
                                <li><Link href="/building-security-guard">Building Security Guard</Link></li>
                                <li><Link href="/construction-site-security-guard">Construction Site Security Guard</Link></li>
                                <li><Link href="/warehouse-security-system">Warehouse Security System</Link></li>
                                <li><Link href="/concierge-guards">Concierge Guards</Link></li>
                                <li><Link href="/gatehouse-security-guard">Gatehouse Security Guard</Link></li>
                            </ul>
                        </div>
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Loss Prevention Security</h3>
                            <ul>
                                <li><Link href="/retail-security-guard">Retail Security Guard</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
            <li className="dropdown-parrent">
                <Link href="/blog-new">Blog</Link>
            </li>
            <li className="dropdown-parrent">
                <Link href="#">Service Area</Link>
                <ul className="theme-dropdown">
                    <li><Link href="security-area-1">Security Guard East Melbourne</Link></li>
                    <li><Link href="security-area-2">Security Guard West Melbourne</Link></li>
                    <li><Link href="/security-area-3">Security Guard North Melbourne</Link></li>
                    <li><Link href="/security-area-4">Security Guard South Melbourne</Link></li>
                </ul>
            </li>
            <li className="dropdown-parrent">
                <Link href="/contact-us">Contact</Link>
            </li>
        </ul>
    );
}
