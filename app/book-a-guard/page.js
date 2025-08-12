"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'Book a Guard - Metropolitan Security Services',
  description: 'Book professional security guard services from Metropolitan Guard Services.',
}

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
                <div className="book-guard-section bg-28 section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="book-guard-form bg-white p-5 rounded shadow">
                                    <h2 className="mb-4 text-center" style={{color: '#243D31'}}>BOOK A GUARD</h2>
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="purpose" className="form-label text-dark">I want to:</label>
                                            <select className="form-select" id="purpose" name="purpose" required>
                                                <option value="">Select Purpose</option>
                                                <option value="consultation">Request consultation</option>
                                                <option value="obtain-code">Obtain code</option>
                                            </select>
                                            </div>

                                            {/* repeat: add name=... */}
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="service" className="form-label text-dark">Service Required:</label>
                                            <select className="form-select" id="service" name="service" required>
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

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="name" className="form-label text-dark">Your Name:</label>
                                            <input type="text" className="form-control" id="name" name="name" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="phone" className="form-label text-dark">Phone:</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="form-label text-dark">Your Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="location" className="form-label text-dark">Location:</label>
                                            <input type="text" className="form-control" id="location" name="location" required />
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="message" className="form-label text-dark">Message / Details:</label>
                                            <textarea className="form-control" id="message" name="message" rows="4" required />
                                            </div>

                                            <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn px-4 py-3 text-white"
                                                style={{ backgroundColor:'#243D31', border:'none', borderRadius:'5px', fontWeight:600, textTransform:'uppercase' }}
                                            >
                                                {loading ? 'SENDING…' : 'SEND REQUEST'} <span><i className="bi bi-send" /></span>
                                            </button>
                                            </div>
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