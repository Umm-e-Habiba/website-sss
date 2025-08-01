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
    })
    return (
        <>

            <ul className="menu_list scroll">
                <li className="dropdown-parrent">
                    <Link href="/">Home</Link>
                    {/* <ul className="theme-dropdown">
                        <li className="multi-dropdown-parrent">
                            <Link href="/">Multipage
                                <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" /> </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/">Tax Consulting 1</Link></li>
                                <li><Link href="/index-6">Tax Consulting 2</Link></li>
                                <li>
                                    <Link href="/index-2">Financial Advisor</Link>
                                </li>
                                <li><Link href="/index-3">Low Consulting</Link></li>
                                <li>
                                    <Link href="/index-4">Business Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/index-5">Insurance Consulting</Link>
                                </li>
                                <li><Link href="/index-rtl-1">RTL</Link></li>
                            </ul>
                        </li>
                        <li className="multi-dropdown-parrent">
                            <Link href="/index-2">Landing Page
                                <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" /> </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li>
                                    <Link href="/single-index-1">Tax Consulting 1</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-6">Tax Consulting 2</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-2">Financial Advisor</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-3">Low Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-4">Business Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-5">Insurance Consulting</Link>
                                </li>
                                <li><Link href="/single-index-rtl-1">RTL</Link></li>
                            </ul>
                        </li>
                    </ul> */}
                </li>
                <li className="dropdown-parrent"><Link href="/about-1">About Us</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/about-1">Our Values</Link></li>
                        <li><Link href="/about-2">Corporate Responsibilty</Link></li>
                        <li><Link href="/about-1">Corporate Social Responsibilty</Link></li>
                        <li><Link href="/about-1">Mission Statement</Link></li>
                        <li><Link href="/about-1">Our Commitments</Link></li>
                        <li><Link href="/about-1">How we Thrive</Link></li>
                        <li><Link href="/about-1">FAQ</Link></li>



                    </ul>
                </li>
                <li className="mega-menu-parrent"><Link href="#">Services</Link>
                    <ul className="theme-mega-menu">
                        <li className="mega-menu">
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Security Gaurd For Hire</h3>
                                <ul>
                                    <li><Link href="/case-study-1">Adhoc Security Services</Link></li>
                                    <li><Link href="/case-study-2">Asset Protection</Link></li>
                                    <li><Link href="/single-case-study-1">Private Security Gaurds</Link></li>
                                    <li><Link href="/service-1">Staff Escort Security</Link></li>
                                    <li><Link href="/service-2">Mobile Patrol Security</Link></li>
                                    <li><Link href="/service-3">Rapid Alarm Response Security</Link></li>
                                    <li><Link href="/single-service-1">Hire Unarmed Security Gaurd </Link>
                                    </li>
                                    {/* <li><Link href="/single-service-2">Details Right</Link></li> */}
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Corporate Security Gaurds</h3>
                                <ul>
                                    <li><Link href="/blog-1">Building Security Gaurd</Link></li>
                                    <li><Link href="/blog-mesonry-1">Construction Side Security Gaurd</Link></li>
                                    <li><Link href="/blog-mesonry-2">Warehouse Security System</Link></li>
                                    <li><Link href="/blog-mesonry-3">Concierge Gaurds</Link></li>
                                    <li><Link href="/single-1">Gatehouse Security Gaurd</Link></li>
                                    {/* <li><Link href="/single-2">Single Default</Link></li>
                                    <li><Link href="/single-3">Single Left</Link></li> */}
                                    {/* <li><Link href="/single-4">Single Fuild</Link></li> */}
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Loss Prevention Security</h3>
                                <ul>
                                    <li><Link href="/shop-1">Retail Security Gaurd</Link></li>
                                    {/* <li><Link href="/shop-2">Shop 2</Link></li>
                                    <li><Link href="/shop-3">Shop 3</Link></li>
                                    <li><Link href="/shop-inner-1">Shop Single</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/cart-empty">Cart Empty</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/singup">Sign Up</Link></li> */}
                                </ul>
                            </div>
                            {/* <div className="single-mega-menu">
                                <h3 className="font-f-1">Services</h3>
                                <ul>
                                    <li><Link href="/about-1">About 1</Link></li>
                                    <li><Link href="/about-2">About 2</Link></li>
                                    <li><Link href="/testimonial-1">Testimonial</Link></li>
                                    <li><Link href="/faq-1">FAQ</Link></li>
                                    <li><Link href="/team-1">Team</Link></li>
                                    <li><Link href="/career-1">Carrer 1</Link></li>
                                    <li><Link href="/404">404 Error</Link></li>
                                    <li><Link href="/signin">Sign In</Link></li>
                                </ul>
                            </div> */}
                            {/* <div className="single-mega-menu">
                                <h3 className="font-f-1">Others</h3>
                                <ul>
                                    <li><Link href="/price-1">Pricing 1</Link></li>
                                    <li><Link href="/price-2">Pricing 2</Link></li>
                                    <li><Link href="/contact-1">Contact 1</Link></li>
                                    <li><Link href="/contact-2">Contact 2</Link></li>
                                    <li><Link href="/service-4">Service Left</Link></li>
                                    <li><Link href="/case-study-3">Case Study Right</Link></li>
                                    <li><Link href="/case-study-4">Case Study Left</Link></li>
                                    <li><Link href="/forgot">Forgot</Link></li>
                                </ul>
                            </div> */}
                        </li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="#">Blog</Link>
                    {/* <ul className="theme-dropdown"> */}
                        {/* <li className="multi-dropdown-parrent"><Link href="#">Blog <span className="multi-drop-icon"> */}
                            {/* <i className="fa-solid fa-angle-right" /> */}
                        {/* </span></Link> */}
                            {/* <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/blog-1">Classic</Link></li>
                                <li><Link href="/blog-2">Blog Right</Link></li>
                                <li><Link href="/blog-3">Blog Left</Link></li>
                                <li><Link href="/blog-mesonry-1">Mesonry 1</Link></li>
                                <li><Link href="/blog-mesonry-2">Mesonry 2</Link></li>
                                <li><Link href="/blog-mesonry-3">Mesonry 3</Link></li>
                            </ul> */}
                        </li>
                        {/* <li className="multi-dropdown-parrent"><Link href="#">Blog Detail <span className="multi-drop-icon"> */}
                            {/* <i className="fa-solid fa-angle-right" /> */}
                        {/* </span></Link> */}
                            {/* <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/single-2">Single Default</Link></li>
                                <li><Link href="/single-1">Right Sidebar</Link></li>
                                <li><Link href="/single-3">Left Sidebar</Link></li>
                                <li><Link href="/single-4">Single Fuild</Link></li>
                            </ul> */}
                        {/* </li> */}
                    {/* </ul> */}
                {/* </li> */}
                <li className="dropdown-parrent"><Link href="#">Service Area</Link>
                    <ul className="theme-dropdown">
                        <li className="multi-dropdown-parrent"><Link href="#">Security  Gaurd East Melbourne <span className="multi-drop-icon">
                            {/* <i className="fa-solid fa-angle-right" /> */}
                        </span>
                        </Link>
                            {/* <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/shop-1">Shop Default</Link></li>
                                <li><Link href="/shop-2">Right Sidebar</Link></li>
                                <li><Link href="/shop-3">Left Sidebar</Link></li>
                            </ul> */}
                        </li>
                        <li className="multi-dropdown-parrent"><Link href="#">Security  Gaurd West Melbourne <span className="multi-drop-icon">
                            {/* <i className="fa-solid fa-angle-right" /> */}
                        </span>
                        </Link>
                            {/* <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/cart-empty">Cart Empty</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/signup">SignUp</Link></li>
                                <li><Link href="/signin">SignIn</Link></li>
                                <li><Link href="/forgot">Forgot</Link></li>
                            </ul> */}
                        </li>
                        <li><Link href="/shop-inner-1">Security  Gaurd North Melbourne</Link></li>
                        <li><Link href="/shop-inner-1">Security  Gaurd South Melbourne</Link></li>

                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="/about-1">Contact</Link>
                    {/* <ul className="theme-dropdown"> */}
                        {/* <li><Link href="/contact-1">Contact 1</Link></li>
                        <li><Link href="/contact-2">Contact 2</Link></li> */}
                    {/* </ul> */}
                </li>
            </ul>
        </>
    )
}
