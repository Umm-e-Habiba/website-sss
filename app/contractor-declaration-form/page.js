"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContractorDeclarationPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contractor", { method: "POST", body: formData });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTRACTOR DECLARATION FORM">
                <div className="section-padding" style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="contractor-form p-5 glassmorphism-card-with-bg">
                                    <h2 className="mb-4 text-center" style={{ color: '#fff' }}>CONTRACTOR DECLARATION FORM</h2>
                                    <form onSubmit={handleSubmit} noValidate>
                                        {/* Company Information */}
                                        <div className="row mb-4">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="companyName" className="form-label font-weight-bold" style={{ color: "#fff" }}>Company Name</label>
                                                <input type="text" className="form-control p-3 glassmorphism-input" id="companyName" name="companyName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="abnAcn" className="form-label font-weight-bold" style={{ color: "#fff" }}>ABN / ACN Number</label>
                                                <input type="text" className="form-control p-3 glassmorphism-input" id="abnAcn" name="abnAcn" required />
                                            </div>
                                        </div>

                                        {/* Declaration Statement */}
                                        <div className="declaration-intro mb-4 p-3 glassmorphism-card">
                                            <div className="row">
                                                <div className="col-md-4 mb-2">
                                                    <label htmlFor="declarantName" className="form-label font-weight-bold" style={{ color: "#fff" }}>I,</label>
                                                    <input type="text" className="form-control p-3 glassmorphism-input" id="declarantName" name="declarantName" placeholder="Full Name" required />
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label htmlFor="position" className="form-label font-weight-bold" style={{ color: "#fff" }}>of the position,</label>
                                                    <select className="form-control p-3 glassmorphism-input" id="position" name="position" required>
                                                        <option value="">Select Position</option>
                                                        <option value="Director">Director</option>
                                                        <option value="Company Secretary">Company Secretary</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label htmlFor="declarationDate" className="form-label font-weight-bold" style={{ color: "#fff" }}>state that as of the</label>
                                                    <input type="date" className="form-control p-3 glassmorphism-input" id="declarationDate" name="declarationDate" required />
                                                </div>
                                            </div>
                                            <p className="mb-0 mt-3" style={{ color: "#fff" }}><strong>the following Compliance requirements have been met for the period 30 days from the current date.</strong></p>
                                        </div>

                                        {/* Compliance Questions */}
                                        <div className="compliance-questions mb-4">
                                            <h4 className="mb-3" style={{ color: '#fff' }}>Compliance Requirements</h4>
                                            
                                            {[
                                                { id: 1, text: "Company Registration is current (ACN/ABN)?" },
                                                { id: 2, text: "Has there been any changes to the directors or close associates of the Company?" },
                                                { id: 3, text: "Is the Director of the Company the actual beneficial owner and does not operate on behalf of another?" },
                                                { id: 4, text: "Is the Company financially sound and there have been no adverse findings against the Company or its Officers?" },
                                                { id: 5, text: "Is the Company Security Licence current?" },
                                                { id: 6, text: "Has the Master Licence authority level been exceeded (Number of persons – NSW only)?" },
                                                { id: 7, text: "Is your membership to an approved Security Association current?" },
                                                { id: 8, text: "Are all required Insurance Policies current?" },
                                                { id: 9, text: "Are all security personnel supplied by the Company paid in accordance with the relevant Award / Agreement?" },
                                                { id: 10, text: "Are all employee Superannuation contributions paid to date?" },
                                                { id: 11, text: "Has there been any change in your Payroll Tax obligations?" },
                                                { id: 12, text: "Are your Payroll Tax payment obligations up to date and paid?" },
                                                { id: 13, text: "Have you ever been investigated by the Fair Work Ombudsman?" },
                                                { id: 14, text: "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have the relevant Right to Work in Australia entitlements? (Visa restrictions have not been breached)" },
                                                { id: 15, text: "Are all security personnel employed and supplied by the Company and who have performed work for Metropolitan Guard Services have a current and applicable state security licence?" },
                                                { id: 16, text: "Have all Services been provided in accordance with the Client's Service / Site Brief?" },
                                                { id: 17, text: "Has any Director, Close Associate or employee of the Company been or is currently charged with a criminal offence?" },
                                                { id: 18, text: "Has any Director, Close Associate or employee of the Company breached or contravened any provisions of the Trade Practices Act?" },
                                                { id: 19, text: "Are there any pending legal or insurance claims against the Company that may affect MGS?" },
                                                { id: 20, text: "Has any Director, Close Associate employee or a relation of a Director or employee of the Company paid any monies or given gifts to a MGS employee or relation of an employee?" },
                                                { id: 21, text: "Does your Company employ, engage work for or work with any employee of Metropolitan Guard Services?" },
                                                { id: 22, text: "Does your Company have any related parties or undisclosed transactions with MGS or relations of Metropolitan Guard Services employees?" },
                                                { id: 23, text: "Has your Company provided a safe and hygienic working environment in accordance with OHS Laws?" },
                                                { id: 24, text: "Has your Company conducted its business in a manner that is compliant with Modern Slavery Laws and has done all things required or necessary to mitigate or reduce modern slavery risks in your operations or supply chains?" }
                                            ].map((question) => (
                                                <div key={question.id} className="compliance-item mb-3 p-3 glassmorphism-question-card">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-8 mb-2 mb-lg-0">
                                                            <label className="form-label mb-0" style={{ color: "#fff" }}>
                                                                <strong>{question.id}.</strong> {question.text}
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="d-flex justify-content-lg-end">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name={`question${question.id}`} id={`q${question.id}yes`} value="yes" required />
                                                                    <label className="form-check-label" style={{ color: "#fff" }} htmlFor={`q${question.id}yes`}>Yes</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name={`question${question.id}`} id={`q${question.id}no`} value="no" required />
                                                                    <label className="form-check-label" style={{ color: "#fff" }} htmlFor={`q${question.id}no`}>No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Declaration Text */}
                                        <div className="declaration-text mb-4 p-4 glassmorphism-card">
                                            <p className="mb-3" style={{ lineHeight: '1.6', color: "#fff" }}>
                                                <strong>I declare</strong> the above information is correct and that should any information supplied be misleading or incorrect may result in the termination of the Agreement with Metropolitan Guard Services.
                                            </p>
                                            <p className="mb-3" style={{ lineHeight: '1.6', color: "#fff" }}>
                                                I also agree that to ensure our Company is complying with the law Metropolitan Guard Services can do a compliance audit regularly or on a random basis.
                                            </p>
                                            <p className="mb-0" style={{ lineHeight: '1.6', color: "#fff" }}>
                                                I am aware the audit will consist of documentation and proof relating to our Company, employees and contractor payments, rate of pay, hours worked, superannuation payments, employee tax payments, GST payments, insurance policies and licenses...
                                                <a href="#" className="text-decoration-none" style={{ color: '#FDC51A' }}> read more...</a>
                                            </p>
                                        </div>

                                        {/* Signature Field */}
                                        <div className="row mb-4">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="signature" className="form-label font-weight-bold" style={{ color: "#fff" }}>Signature</label>
                                                <input type="text" className="form-control p-3 glassmorphism-input" id="signature" name="signature" placeholder="Type your full name as digital signature" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="signatureDate" className="form-label font-weight-bold" style={{ color: "#fff" }}>Date</label>
                                                <input type="date" className="form-control p-3 glassmorphism-input" id="signatureDate" name="signatureDate" required />
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

                    .glassmorphism-card {
                        background: rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(10px);
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                    }

                    .glassmorphism-question-card {
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(8px);
                        border-radius: 8px;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                        transition: all 0.3s ease;
                    }

                    .glassmorphism-question-card:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.2);
                        transform: translateY(-1px);
                    }

                    select.glassmorphism-input {
                        appearance: none;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1em;
                    }

                    select.glassmorphism-input option {
                        background: #1E2247;
                        color: #fff;
                        padding: 10px;
                    }

                    select.glassmorphism-input option:checked {
                        background: #FDC51A;
                        color: #1E2247;
                    }

                    select.glassmorphism-input option:checked,
                    select.glassmorphism-input option:hover {
                        background: #FDC51A !important;
                        color: #1E2247 !important;
                    }

                    /* Radio button styling */
                    .form-check-input {
                        background-color: rgba(255, 255, 255, 0.1);
                        border-color: rgba(255, 255, 255, 0.3);
                    }

                    .form-check-input:checked {
                        background-color: #FDC51A;
                        border-color: #FDC51A;
                    }

                    .form-check-input:focus {
                        border-color: rgba(253, 197, 26, 0.5);
                        box-shadow: 0 0 0 0.25rem rgba(253, 197, 26, 0.25);
                    }

                    /* Date input styling for webkit browsers */
                    input[type="date"].glassmorphism-input::-webkit-calendar-picker-indicator {
                        filter: invert(1);
                        cursor: pointer;
                    }
                `}</style>
            </Layout>
        </>
    )
}