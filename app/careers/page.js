"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'Careers - Join Our Security Team | Metropolitan Guard Services',
  description: 'Start your career in security with Metropolitan Guard Services. View current job openings and submit your application to join our professional security team.',
}

export default function CareersPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/career", { method: "POST", body: formData });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CAREERS">
                <div>
    

                    {/*===== Application Form Section =====*/}
                    <div id="application-form" className="application-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Start Your Application
                                        </small>
                                        <h2>JOB APPLICATION FORM</h2>
                                        <p>Complete the form below to apply for a position with our security team</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="application-form bg-white p-5 rounded shadow">
                                        <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="firstName" className="form-label text-dark">First Name *</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="lastName" className="form-label text-dark">Last Name *</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" required />
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="address" className="form-label text-dark">Address *</label>
                                            <input type="text" className="form-control" id="address" name="address" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="suburb" className="form-label text-dark">Suburb *</label>
                                            <input type="text" className="form-control" id="suburb" name="suburb" required />
                                            </div>

                                            <div className="col-md-3 mb-4">
                                            <label htmlFor="state" className="form-label text-dark">State *</label>
                                            <select className="form-select" id="state" name="state" required>
                                                <option value="">Select</option>
                                                <option value="VIC">VIC</option>
                                                <option value="NSW">NSW</option>
                                                <option value="QLD">QLD</option>
                                                <option value="SA">SA</option>
                                                <option value="WA">WA</option>
                                                <option value="TAS">TAS</option>
                                                <option value="NT">NT</option>
                                                <option value="ACT">ACT</option>
                                            </select>
                                            </div>

                                            <div className="col-md-3 mb-4">
                                            <label htmlFor="postCode" className="form-label text-dark">Post Code *</label>
                                            <input type="text" className="form-control" id="postCode" name="postCode" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="phone" className="form-label text-dark">Phone Number *</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="form-label text-dark">Email Address *</label>
                                            <input type="email" className="form-control" id="email" name="email" required />
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label className="form-label text-dark">Applying For: (Select all that apply) *</label>
                                            <div className="row">
                                                <div className="col-md-4">
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="alarmResponse" name="roles" value="Alarm Response Unit" />
                                                    <label className="form-check-label text-dark" htmlFor="alarmResponse">Alarm Response Unit</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="concierge" name="roles" value="Concierge Services" />
                                                    <label className="form-check-label text-dark" htmlFor="concierge">Concierge Services</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="crowdController" name="roles" value="Crowd Controller" />
                                                    <label className="form-check-label text-dark" htmlFor="crowdController">Crowd Controller</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="guardWithDog" name="roles" value="Guard with Dog" />
                                                    <label className="form-check-label text-dark" htmlFor="guardWithDog">Guard with Dog</label>
                                                </div>
                                                </div>

                                                <div className="col-md-4">
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="k9Response" name="roles" value="K9 Response Unit" />
                                                    <label className="form-check-label text-dark" htmlFor="k9Response">K9 Response Unit</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="securityOfficers" name="roles" value="Security Officers" />
                                                    <label className="form-check-label text-dark" htmlFor="securityOfficers">Security Officers</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="mobilePatrols" name="roles" value="Mobile Security Patrols" />
                                                    <label className="form-check-label text-dark" htmlFor="mobilePatrols">Mobile Security Patrols</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="uniformedGuards" name="roles" value="Uniformed Guards" />
                                                    <label className="form-check-label text-dark" htmlFor="uniformedGuards">Uniformed Guards</label>
                                                </div>
                                                </div>

                                                <div className="col-md-4">
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="constructionSite" name="roles" value="Construction Site Security" />
                                                    <label className="form-check-label text-dark" htmlFor="constructionSite">Construction Site Security</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="lossPrevention" name="roles" value="Loss Prevention Officer" />
                                                    <label className="form-check-label text-dark" htmlFor="lossPrevention">Loss Prevention Officer</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="partySecurity" name="roles" value="Party Security" />
                                                    <label className="form-check-label text-dark" htmlFor="partySecurity">Party Security</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="eventSecurity" name="roles" value="Event Security" />
                                                    <label className="form-check-label text-dark" htmlFor="eventSecurity">Event Security</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="covidMarshal" name="roles" value="COVID Marshal" />
                                                    <label className="form-check-label text-dark" htmlFor="covidMarshal">COVID Marshal</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="otherServices" name="roles" value="Other Services" />
                                                    <label className="form-check-label text-dark" htmlFor="otherServices">Other Services</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="fileUpload" className="form-label text-dark">File Upload (Resume/CV) *</label>
                                            <input className="form-control" type="file" id="fileUpload" name="resume" required />
                                            <small className="text-muted">Accepted file types: PDF, DOC, DOCX (Max 5MB)</small>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <label htmlFor="comments" className="form-label text-dark">Additional Information/Comments</label>
                                            <textarea className="form-control" id="comments" name="comments" rows="4"></textarea>
                                            </div>

                                            <div className="col-12 mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="terms" name="terms" required />
                                                <label className="form-check-label text-dark" htmlFor="terms">
                                                I have read the terms and conditions *
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="newsletter" name="newsletter" />
                                                <label className="form-check-label text-dark" htmlFor="newsletter">
                                                I would like to receive emails from Metropolitan Guard Services about important news
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-12 text-center">
                                            <button 
                                                type="submit" 
                                                className="btn px-4 py-3 text-white"
                                                disabled={loading}
                                                style={{
                                                backgroundColor: '#243D31',
                                                border: 'none',
                                                borderRadius: '5px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                
                                                }}
                                            >
                                                {loading ? 'SENDING…' : 'SEND REQUEST'}<span><i className="bi bi-send"></i></span>
                                            </button>
                                            </div>
                                        </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== Current Openings Section =====
                    <div className="openings-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Available Positions
                                        </small>
                                        <h2>CURRENT JOB OPENINGS</h2>
                                        <p>Browse our current security job opportunities</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Security Officers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                            <span className="badge bg-secondary me-2">Part-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">We're seeking licensed security officers for various sites across Melbourne and Sydney. Day, night and weekend shifts available.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>First Aid certificate</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Excellent communication skills</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Reliable transportation</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Mobile Patrol Officers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">Join our mobile patrol team conducting regular security checks for clients across multiple locations.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Clean driving record</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>First Aid certificate</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Night shift availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Event Security Staff</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-secondary me-2">Part-time</span>
                                            <span className="badge bg-success">Casual</span>
                                        </div>
                                        <p className="mb-3">Looking for experienced crowd controllers for concerts, festivals, and corporate events.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>1A Security License</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Previous event experience</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Physical fitness</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Weekend availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="job-card bg-white p-4 rounded shadow h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>K9 Security Handlers</h4>
                                        <div className="job-meta mb-3">
                                            <span className="badge bg-primary me-2">Full-time</span>
                                        </div>
                                        <p className="mb-3">Experienced dog handlers needed for our K9 security unit. Dogs provided for qualified candidates.</p>
                                        <div className="job-requirements mb-3">
                                            <h6 className="mb-2">Requirements:</h6>
                                            <ul className="list-unstyled ms-3">
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>Valid security license</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>K9 handling certification</li>
                                                <li className="mb-1"><i className="bi bi-check-circle me-2 text-success"></i>2+ years K9 experience</li>
                                                <li><i className="bi bi-check-circle me-2 text-success"></i>Flexible availability</li>
                                            </ul>
                                        </div>
                                        <a href="#application-form" className="btn btn-sm text-white mt-2" style={{backgroundColor: '#243D31'}}>Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </Layout>
        </>
    )
}