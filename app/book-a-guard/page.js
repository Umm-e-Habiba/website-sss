"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookGuardPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/book-a-guard", { method: "POST", body: formData });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.success) {
                throw new Error(data?.error || `Request failed: ${res.status}`);
            }

            toast.success("Message sent successfully!");
            form.reset();
        } catch (err) {
            toast.error(err.message || "Network error. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BOOK A GUARD">
                <div className="section-padding" style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-10">
                                <div className="contact-form-wrapper p-5 glassmorphism-card-with-bg">
                                    <div className="heading2 no-margin-heading text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Get Security Now!
                                        </small>
                                        <h2 style={{ color: "#fff" }}>BOOK A GUARD</h2>
                                    </div>

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>I want to:</label>
                                                    <select className="form-control p-3 glassmorphism-input" id="purpose" name="purpose" required>
                                                        <option value="">Select Purpose</option>
                                                        <option value="consultation">Request consultation</option>
                                                        <option value="obtain-code">Obtain code</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Service Required:</label>
                                                    <select className="form-control p-3 glassmorphism-input" id="service" name="service" required>
                                                        <option value="">Select Service</option>
                                                        <option value="loss-prevention">Loss Prevention Office</option>
                                                        <option value="event-security">Event Security</option>
                                                        <option value="mobile-patrol">Mobile Patrol Security</option>
                                                        <option value="uniform-guards">Uniform Guards</option>
                                                        <option value="construction-site">Construction Site Security</option>
                                                        <option value="k9-response">K9 Response Unit</option>
                                                        <option value="crowd-controller">Crowd Controller</option>
                                                        <option value="concierge">Concierge Security</option>
                                                        <option value="alarm-response">Alarm Response Unit Security Officer</option>
                                                        <option value="other">Other Services</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Name:</label>
                                                    <input type="text" className="form-control p-3 glassmorphism-input" id="name" name="name" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Phone:</label>
                                                    <input type="tel" className="form-control p-3 glassmorphism-input" id="phone" name="phone" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Email:</label>
                                                    <input type="email" className="form-control p-3 glassmorphism-input" id="email" name="email" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Location:</label>
                                                    <input type="text" className="form-control p-3 glassmorphism-input" id="location" name="location" required />
                                                </div>
                                            </div>

                                            <div className="col-12 mb-4">
                                                <div className="form-group">
                                                    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Message / Details:</label>
                                                    <textarea 
                                                        className="form-control p-3 glassmorphism-input" 
                                                        id="message" 
                                                        name="message" 
                                                        rows="4" 
                                                        required
                                                        style={{ color: "#fff" }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg px-5 py-3"
                                                    style={{ 
                                                        borderRadius: "10px", 
                                                        fontSize: "18px", 
                                                        fontWeight: "bold",
                                                        backgroundColor: "#FDC51A",
                                                        border: "none",
                                                        color: "#1E2247"
                                                    }}
                                                    disabled={loading}
                                                    aria-busy={loading}
                                                >
                                                    {loading ? "SENDING..." : "SEND REQUEST"} <span><i className="bi bi-send" /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .glassmorphism-card-with-bg {
                        background: linear-gradient(135deg, rgba(30, 34, 71, 0.9) 0%, rgba(15, 18, 41, 0.95) 100%);
                        backdrop-filter: blur(20px);
                        border-radius: 15px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    }
                    
                    .glassmorphism-input {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: #fff;
                        border-radius: 8px;
                    }
                    
                    .glassmorphism-input::placeholder {
                        color: rgba(255, 255, 255, 0.6);
                    }
                    
                    .glassmorphism-input:focus {
                        background: rgba(255, 255, 255, 0.15);
                        border-color: rgba(255, 255, 255, 0.4);
                        box-shadow: 0 0 0 0.2rem rgba(253, 197, 26, 0.25);
                        color: #fff;
                    }

                    select.glassmorphism-input {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    /* Fix for dropdown options text color */
                    select.glassmorphism-input option {
                        background: #1E2247;
                        color: #fff;
                        padding: 10px;
                    }

                    /* For Firefox */
                    select.glassmorphism-input option:checked {
                        background: #FDC51A;
                        color: #1E2247;
                    }

                    /* For Webkit browsers (Chrome, Safari) */
                    select.glassmorphism-input option:checked,
                    select.glassmorphism-input option:hover {
                        background: #FDC51A !important;
                        color: #1E2247 !important;
                    }

                    /* For IE */
                    select.glassmorphism-input::-ms-value {
                        background: #1E2247;
                        color: #fff;
                    }

                    /* For dropdown list */
                    select.glassmorphism-input::-ms-expand {
                        display: none;
                    }

                    /* For the dropdown list in IE */
                    select.glassmorphism-input::-ms-list {
                        background: #1E2247;
                        color: #fff;
                    }
                `}</style>
            </Layout>
        </>
    )
}