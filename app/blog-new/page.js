import Layout from "@/components/layout/Layout"

export default function Page() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Reasons Why Residential Security Services Are Essential for Your Home",
            author: "Admin",
            date: "June 22, 2025",
            excerpt: "Homeowners in Melbourne face growing concerns about break-ins, package theft, and property vandalism, especially in areas experiencing rapid growth and limited police presence. These everyday risks are more than just statistics; they impact your sense of safety and your family's well-being.",
            category: "Residential Security",
            featured: true
        },
        {
            id: 2,
            title: "Why Hiring Professional Security Guards In Melbourne Is Essential For Maximum Safety?",
            author: "Admin",
            date: "June 19, 2025",
            excerpt: "Are you concerned about the safety of your home or business? Melbourne is a bustling city, and it's important to ensure that you're doing everything possible to protect yourself and your family.",
            category: "Professional Security"
        },
        {
            id: 3,
            title: "Why A Casual Security Guard Hired Outside The Premises Is Necessary For Any Business?",
            author: "Admin",
            date: "June 16, 2025",
            excerpt: "In Melbourne's bustling business landscape—from the CBD to outer suburbs like Melton, Burnside, Truganina, Sunshine, Melbourne. Security threats don't just come from inside your building.",
            category: "Business Security"
        },
        {
            id: 4,
            title: "Warehouses and Distribution Centers Security Guard Services in Melbourne",
            author: "Admin",
            date: "June 16, 2025",
            excerpt: "Warehouses and Distribution Centers Security Guard Services",
            category: "Industrial Security"
        },
        {
            id: 5,
            title: "10 Important Things to Consider When Hiring a Security Guard in Melbourne",
            author: "Admin",
            date: "June 12, 2025",
            excerpt: "When it comes to protecting your property, assets, or people, hiring the right security guard can make all the difference. Whether you're a Melbourne business owner, event organiser, or homeowner.",
            category: "Hiring Guide"
        },
        {
            id: 6,
            title: "Importance of Security in Real Estate Companies in Melbourne",
            author: "Admin",
            date: "June 10, 2025",
            excerpt: "Real Estate Companies security guard Services",
            category: "Real Estate Security"
        },
        {
            id: 7,
            title: "Embassy Security Officer",
            author: "Admin",
            date: "June 4, 2025",
            excerpt: "Embassy Security Officer",
            category: "Specialized Security"
        },
        {
            id: 8,
            title: "Incident Reporting: Why It Matters and How It Protects Your Business",
            author: "Admin",
            date: "May 23, 2025",
            excerpt: "Staying Safe Starts with Staying Informed. The biggest issue we face today is to compromise on the safety and security of our business or in person in the fast-paced business world of today.",
            category: "Business Protection"
        },
        {
            id: 9,
            title: "The Importance of Emergency Response in Security Services",
            author: "Admin",
            date: "May 14, 2025",
            excerpt: "In a bustling city like Melbourne, where businesses, construction projects, residential complexes, and public events are constantly evolving, security services play a vital role in keeping people and property safe.",
            category: "Emergency Response"
        },
        {
            id: 10,
            title: "The Role of Mobile Patrol Services in Site Security",
            author: "Admin",
            date: "May 14, 2025",
            excerpt: "Mobile patrol security involves trained security officers who carry out routine checks using marked vehicles. These patrols are conducted across various locations.",
            category: "Mobile Patrol"
        },
        {
            id: 11,
            title: "Concierge Security Melbourne… the Perfect Combination of Hospitality and Protection",
            author: "Admin",
            date: "May 14, 2025",
            excerpt: "For some Melbourne residents, especially those living in high rise apartment blocks, office block towers, luxurious hotel corridors and corporate headquarters, security is no longer just an external-looking uniformed security guard.",
            category: "Concierge Security"
        },
        {
            id: 12,
            title: "Warehouse Security Melbourne: Protecting Inventory",
            author: "Admin",
            date: "April 21, 2025",
            excerpt: "Melbourne is a bustling hub for logistics, manufacturing, and distribution. With so much inventory moving through local warehouses every day, security becomes not just an option but a necessity.",
            category: "Warehouse Security"
        }
    ];

    const categories = [
        "All Categories",
        "Residential Security",
        "Professional Security", 
        "Business Security",
        "Industrial Security",
        "Emergency Response",
        "Mobile Patrol",
        "Concierge Security"
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOGS">
                <div>
                    {/*===== Blog Header Section =====*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading">
                                        <h2>Our Blogs</h2>
                                        <h3>Security News and Tips</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            Stay informed with the latest security insights, industry trends, and expert advice from Metro Guards. Our blog covers everything from residential protection to commercial security solutions, helping you make informed decisions about your safety needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Categories Filter Section =====*/}
                    <div className="about-inner bg-29">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Browse by Category
                                        </small>
                                        <h2>Explore Our Security Topics</h2>
                                    </div>
                                    
                                    <div className="category-filter d-flex flex-wrap justify-content-center">
                                        {categories.map((category, index) => (
                                            <button 
                                                key={index}
                                                className={`btn m-2 px-4 py-2 ${index === 0 ? 'btn-primary' : 'btn-outline-primary'}`}
                                                style={{borderRadius: '25px', fontWeight: '500'}}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Featured Blog Post =====*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Latest Article
                                        </small>
                                        <h2>Featured Blog Post</h2>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Featured Post */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <div className="featured-blog-card p-5" style={{backgroundColor: '#f8f9fa', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '3px solid #007bff'}}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="featured-blog-image">
                                                    <img src="/assets/img/about/about22.png" alt="" className="img-fluid" style={{borderRadius: '15px'}} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="featured-blog-content ml30">
                                                    <div className="blog-meta mb-3">
                                                        <span className="badge badge-primary px-3 py-2 mr-3" style={{borderRadius: '15px'}}>Residential Security</span>
                                                        <span className="text-muted">June 22, 2025</span>
                                                    </div>
                                                    <h3 className="mb-3">10 Reasons Why Residential Security Services Are Essential for Your Home</h3>
                                                    <p className="mb-4">
                                                        Homeowners in Melbourne face growing concerns about break-ins, package theft, and property vandalism, especially in areas experiencing rapid growth and limited police presence. These everyday risks are more than just statistics; they impact your sense of safety and your family's well-being.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="author-info d-flex align-items-center">
                                                            <img src="/assets/img/icons/service-9.png" alt="" style={{width: '30px', height: '30px'}} className="mr-2" />
                                                            <span>By Admin</span>
                                                        </div>
                                                        <button className="btn btn-primary px-4 py-2" style={{borderRadius: '10px'}}>
                                                            Read More →
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Blog Posts Grid =====*/}
                    <div className="testimonial-3 bg-19 section-padding2 inner-font-1 inner-testimonial-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Recent Articles
                                        </small>
                                        <h2>Latest Security Insights</h2>
                                        <p>Discover expert advice and industry insights to help you make informed security decisions</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                {blogPosts.slice(1, 13).map((post, index) => (
                                    <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                                        <div className="blog-card h-100 p-4" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'}}>
                                            <div className="blog-image mb-3">
                                                <img 
                                                    src="/assets/img/about/about22.png" 
                                                    alt="" 
                                                    className="img-fluid w-100" 
                                                    style={{borderRadius: '10px', height: '200px', objectFit: 'cover'}} 
                                                />
                                            </div>
                                            
                                            <div className="blog-content">
                                                <div className="blog-meta mb-3">
                                                    <span className="badge badge-outline-primary px-3 py-1 mr-2" style={{borderRadius: '12px', fontSize: '12px'}}>
                                                        {post.category}
                                                    </span>
                                                    <small className="text-muted">{post.date}</small>
                                                </div>
                                                
                                                <h5 className="blog-title mb-3" style={{lineHeight: '1.4', minHeight: '60px'}}>
                                                    {post.title}
                                                </h5>
                                                
                                                <p className="blog-excerpt text-muted mb-4" style={{fontSize: '14px', lineHeight: '1.5'}}>
                                                    {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
                                                </p>
                                                
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="author-info d-flex align-items-center">
                                                        <img src="/assets/img/icons/service-16.png" alt="" style={{width: '24px', height: '24px'}} className="mr-2" />
                                                        <small>By {post.author}</small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary" style={{borderRadius: '8px'}}>
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary btn-lg px-5 py-3" style={{borderRadius: '12px'}}>
                                        Load More Articles
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>

                    {/*===== Newsletter Subscription =====*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="newsletter-section text-center p-5" style={{backgroundColor: '#007bff', borderRadius: '20px', color: 'white'}}>
                                        <div className="newsletter-icon mb-4">
                                            <img src="/assets/img/icons/service-12.png" alt="" style={{width: '60px', height: '60px', filter: 'brightness(0) invert(1)'}} />
                                        </div>
                                        <h3 className="mb-3">Stay Updated with Security Tips</h3>
                                        <p className="mb-4">
                                            Subscribe to our newsletter and receive the latest security insights, industry news, and expert advice directly in your inbox.
                                        </p>
                                        <div className="newsletter-form">
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <input 
                                                        type="email" 
                                                        className="form-control form-control-lg" 
                                                        placeholder="Enter your email address"
                                                        style={{borderRadius: '12px', border: 'none', padding: '15px 20px'}}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="btn btn-light btn-lg w-100" style={{borderRadius: '12px', color: '#007bff', fontWeight: 'bold'}}>
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <small className="mt-3 d-block opacity-75">
                                            We respect your privacy. Unsubscribe at any time.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Popular Topics =====*/}
                    <div className="about-inner bg-29">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Popular Topics
                                        </small>
                                        <h2>Trending Security Topics</h2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="topic-card p-4 text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                                        <div className="topic-icon mb-3">
                                            <img src="/assets/img/icons/service-9.png" alt="" style={{width: '50px', height: '50px'}} />
                                        </div>
                                        <h5>Residential Security</h5>
                                        <p className="small text-muted mb-3">Home protection strategies and tips</p>
                                        <span className="badge badge-primary">12 Articles</span>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="topic-card p-4 text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                                        <div className="topic-icon mb-3">
                                            <img src="/assets/img/icons/service-12.png" alt="" style={{width: '50px', height: '50px'}} />
                                        </div>
                                        <h5>Business Security</h5>
                                        <p className="small text-muted mb-3">Commercial protection solutions</p>
                                        <span className="badge badge-primary">18 Articles</span>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="topic-card p-4 text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                                        <div className="topic-icon mb-3">
                                            <img src="/assets/img/icons/service-14.png" alt="" style={{width: '50px', height: '50px'}} />
                                        </div>
                                        <h5>Emergency Response</h5>
                                        <p className="small text-muted mb-3">Crisis management and response</p>
                                        <span className="badge badge-primary">8 Articles</span>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="topic-card p-4 text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                                        <div className="topic-icon mb-3">
                                            <img src="/assets/img/icons/service-16.png" alt="" style={{width: '50px', height: '50px'}} />
                                        </div>
                                        <h5>Security Tips</h5>
                                        <p className="small text-muted mb-3">Expert advice and best practices</p>
                                        <span className="badge badge-primary">25 Articles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Contact CTA =====*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Need Security Advice?
                                        </small>
                                        <h2>Have Questions About Security?</h2>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            Our security experts are here to help. Whether you need advice on implementing security measures or want to discuss your specific requirements, we're ready to assist.
                                        </p>
                                        <div className="mt-5 p-4" style={{backgroundColor: '#f8f9fa', borderRadius: '15px'}}>
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <h4 className="mb-2">📞 Get Expert Security Consultation</h4>
                                                    <p className="mb-0">Contact our security professionals for personalized advice</p>
                                                </div>
                                                <div className="col-md-4 text-md-right">
                                                    <button className="btn btn-primary btn-lg px-4 py-3 font-weight-bold" style={{borderRadius: '10px'}}>
                                                        1300 73 11 73
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}