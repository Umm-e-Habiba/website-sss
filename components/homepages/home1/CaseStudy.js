
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function CaseStudy() {
    return (
        <>
            <div className="case-study-1 section-padding bg6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Licensed security guards.</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">How</span> we raise awareness and serve our community</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper {...swiperOptions} className="case-studes owl-carousel" data-aos="fade-up" data-aos-duration={1200}>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/s1.webp" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Licensed security guards</h4>
                                        <p>Our team consists of fully licensed and professionally trained security guards, ensuring reliable protection and compliance with all industry standards across Melbourne.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/s6.webp" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Highly trained to respond to emergencies</h4>
                                        <p>Our security personnel undergo rigorous training to handle emergencies with speed, confidence, and professionalism—minimizing risks and ensuring safety.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/s3.webp" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Cost-Effective Security Guard Solution</h4>
                                        <p>We provide top-tier security services at competitive rates, offering exceptional value without compromising on quality or reliability.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/s5.webp" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Always There, Always Ready</h4>
                                        <p>Protect your property and loved ones by delivering reliable on-call security services 24/7 
</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
