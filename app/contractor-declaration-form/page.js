"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'Contractor Declaration Form - Metropolitan Security Services',
  description: 'Contractor compliance declaration form for Metropolitan Guard Services partners.',
}

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
                <div className="contractor-form-section bg-28 section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="contractor-form bg-white p-5 rounded shadow">
                                    <h2 className="mb-4 text-center" style={{color: '#243D31'}}>CONTRACTOR DECLARATION FORM</h2>
                                    <form onSubmit={handleSubmit} noValidate>
                                        {/* Company Information */}
                                         <div className="row mb-4">
                                            <div className="col-md-6 mb-3">
                                            <label htmlFor="companyName" className="form-label text-dark">Company Name</label>
                                            <input type="text" className="form-control" id="companyName" name="companyName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                            <label htmlFor="abnAcn" className="form-label text-dark">ABN / ACN Number</label>
                                            <input type="text" className="form-control" id="abnAcn" name="abnAcn" required />
                                            </div>
                                        </div>

                                        {/* Declaration Statement */}
                                        <div className="declaration-intro mb-4 p-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                                            <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="declarantName" className="form-label text-dark">I,</label>
                                                <input type="text" className="form-control" id="declarantName" name="declarantName" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="position" className="form-label text-dark">of the position,</label>
                                                <select className="form-select" id="position" name="position" required>
                                                <option value="">Select Position</option>
                                                <option value="Director">Director</option>
                                                <option value="Company Secretary">Company Secretary</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="declarationDate" className="form-label text-dark">state that as of the</label>
                                                <input type="date" className="form-control" id="declarationDate" name="declarationDate" required />
                                            </div>
                                            </div>
                                            <p className="mb-0 mt-3 text-dark"><strong>the following Compliance requirements have been met for the period 30 days from the current date.</strong></p>
                                        </div>

                                        {/* Compliance Questions */}
                                        <div className="compliance-questions mb-4">
                                            <h4 className="mb-3" style={{color: '#243D31'}}>Compliance Requirements</h4>
                                            
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
                                                <div key={question.id} className="compliance-item mb-3 p-3 rounded" style={{backgroundColor: '#f8f9fa', border: '1px solid #e9ecef'}}>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-8 mb-2 mb-lg-0">
                                                            <label className="form-label text-dark mb-0">
                                                                <strong>{question.id}.</strong> {question.text}
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="d-flex justify-content-lg-end">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name={`question${question.id}`} id={`q${question.id}yes`} value="yes" required />
                                                                <label className="form-check-label text-dark" htmlFor={`q${question.id}yes`}>Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name={`question${question.id}`} id={`q${question.id}no`} value="no" required />
                                                                <label className="form-check-label text-dark" htmlFor={`q${question.id}no`}>No</label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>

                                        {/* Declaration Text */}
                                        <div className="declaration-text mb-4 p-4 rounded" style={{backgroundColor: '#f8f9fa', border: '2px solid #243D31'}}>
                                            <p className="mb-3 text-dark" style={{lineHeight: '1.6'}}>
                                                <strong>I declare</strong> the above information is correct and that should any information supplied be misleading or incorrect may result in the termination of the Agreement with Metropolitan Guard Services.
                                            </p>
                                            <p className="mb-3 text-dark" style={{lineHeight: '1.6'}}>
                                                I also agree that to ensure our Company is complying with the law Metropolitan Guard Services can do a compliance audit regularly or on a random basis.
                                            </p>
                                            <p className="mb-0 text-dark" style={{lineHeight: '1.6'}}>
                                                I am aware the audit will consist of documentation and proof relating to our Company, employees and contractor payments, rate of pay, hours worked, superannuation payments, employee tax payments, GST payments, insurance policies and licenses...
                                                <a href="#" className="text-decoration-none" style={{color: '#243D31'}}> read more...</a>
                                            </p>
                                        </div>

                                        {/* Signature Field */}
                                        <div className="row mb-4">
                                        <div className="col-md-6">
                                        <label htmlFor="signature" className="form-label text-dark">Signature</label>
                                        <input type="text" className="form-control" id="signature" name="signature" placeholder="Type your full name as digital signature" required />
                                        </div>
                                        <div className="col-md-6">
                                        <label htmlFor="signatureDate" className="form-label text-dark">Date</label>
                                        <input type="date" className="form-control" id="signatureDate" name="signatureDate" required />
                                        </div>
                                    </div>

                                    <div className="col-12 text-center">
                                        <button type="submit" disabled={loading} className="btn px-5 py-3 text-white" style={{backgroundColor:'#243D31', border:'none', borderRadius:'5px', fontWeight:'600', textTransform:'uppercase'}}>
                                        {loading ? "Sending..." : "Send "} <span><i className="bi bi-send"></i></span>
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}