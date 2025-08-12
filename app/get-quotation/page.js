"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./get-quotation.css";

export default function Page() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/quotation", { method: "POST", body: formData });
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get A Quotation">
        <div className="section-padding">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10">
                <div
                  className="contact-form-wrapper p-5"
                  style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="heading2 no-margin-heading text-center mb-5">
                    <small className="heading-top inner-heading-top">
                      <img src="/assets/img/icons/hands.svg" alt="" />Get In Touch Now!
                    </small>
                    <h2>Get A Quotation</h2>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    {/* honeypot (spam trap) */}
                    <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">First Name *</label>
                          <input name="firstName" type="text" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Enter your first name" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Last Name *</label>
                          <input name="lastName" type="text" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Enter your last name" required />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Email Address *</label>
                          <input name="email" type="email" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Enter your email" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Phone Number *</label>
                          <input name="phone" type="tel" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Enter your phone number" required />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Service Date *</label>
                          <input name="serviceDate" type="date" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Location/Suburb</label>
                          <input name="location" type="text" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Where do you need security services?" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold">Number of Attendees *</label>
                          <input name="attendees" type="number" min="1" className="form-control p-3" style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Enter Number of Attendees" required />
                        </div>
                      </div>
                    </div>

                    {/* Industry */}
                    <div className="row">
                      <fieldset className="text-start">
                        <legend>Industry</legend>
                        <ul className="checkbox-grid">
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="developer" /> <span>Developer</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="real-estate" /> <span>Real Estate</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="property-management" /> <span>Property Management</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="individual" /> <span>Individual</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="holding-company" /> <span>Holding Company</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="maritime" /> <span>Maritime</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="education" /> <span>Education</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="healthcare" /> <span>Healthcare</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="government" /> <span>Government</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="cultural" /> <span>Cultural</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="cre" /> <span>CRE</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="finance" /> <span>Finance</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="aviation" /> <span>Aviation</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="fm-partnership" /> <span>FM Partnership</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="public-transport" /> <span>Public Transport</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="custodial-court" /> <span>Custodial / Court</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="critical-infrastructure" /> <span>Critical Infrastructure</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="telecommunication" /> <span>Telecommunication</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="it" /> <span>IT</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="banking" /> <span>Banking</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="commercial-real-estate" /> <span>Commercial Real Estate</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="defense" /> <span>Defense</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="health-welfare" /> <span>Health / Welfare</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="manufacturing-petrochemical" /> <span>Manufacturing / Petrochemical</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="mining-resources" /> <span>Mining / Resources</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="overheads" /> <span>Overheads</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="patrols" /> <span>Patrols</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="retail" /> <span>Retail</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="transport" /> <span>Transport</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="utilities-telecommunication-media" /> <span>Utilities / Telecommunication / Media</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="industry[]" value="other" /> <span>Other</span></label></li>
                        </ul>
                      </fieldset>
                    </div>

                    {/* Type of Service */}
                    <div className="row">
                      <fieldset className="text-start">
                        <legend>Type of Service Required</legend>
                        <ul className="checkbox-grid">
                          <li><label className="cb"><input type="checkbox" name="service[]" value="alarm-response-unit" /> <span>Alarm Response Unit</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="concierge-services" /> <span>Concierge Services</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="crowd-controller" /> <span>Crowd Controller</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="guard-with-dog" /> <span>Guard with Dog</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="k9-response-unit" /> <span>K9 Response Unit</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="security-officers" /> <span>Security Officers</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="mobile-security-patrols" /> <span>Mobile Security Patrols</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="uniformed-guards" /> <span>Uniformed Guards</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="construction-site-security" /> <span>Construction Site Security</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="loss-prevention-officer" /> <span>Loss Prevention Officer</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="party-security" /> <span>Party Security</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="event-security" /> <span>Event Security</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="covid-marshal" /> <span>COVID Marshal</span></label></li>
                          <li><label className="cb"><input type="checkbox" name="service[]" value="other-services" /> <span>Other Services</span></label></li>
                        </ul>
                      </fieldset>
                    </div>

                    <div className="mb-4">
                      <div className="form-group">
                        <label className="form-label font-weight-bold">Message/Additional Details</label>
                        <textarea name="message" className="form-control p-3" rows={5} style={{ borderRadius: "8px", border: "2px solid #e9ecef" }} placeholder="Tell us more about your security requirements..."></textarea>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5 py-3"
                        style={{ borderRadius: "10px", fontSize: "18px", fontWeight: "bold" }}
                        disabled={loading}
                        aria-busy={loading}
                      >
                        {loading ? "Sending..." : "Send Quotation"}
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
  );
}
