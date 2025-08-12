"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function IncidentReportPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/incident", { method: "POST", body: formData });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="INCIDENT REPORT & FEEDBACK FORM">
                <div className="incident-form-section bg-28 section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="incident-form bg-white p-5 rounded shadow">
                                    <h2 className="mb-4 text-center" style={{color: '#243D31'}}>INCIDENT REPORT & FEEDBACK FORM</h2>
                                    <p className="mb-4 text-center">This form is designed for Security Guards / Fire Support Offices (FSO) / COVID Marshalls or Patrol Cars, to record and report any issues or incidents they find during their shift, pertaining to:</p>
                                    
                                    <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                                        {/* Event Type Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#243D31'}}>Event Type</h4>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>HR related; Staff Sick; Staff Late; Shift Swaps; Extra Guard Requests; Overtime</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="hrRelated" name="eventTypes" value="HR related / staffing / overtime" />
                                                    <label className="form-check-label" htmlFor="hrRelated">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>OH&S matters; including "near misses"; onsite injuries; First Aid; Inclimate Weather</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="ohsMatters" name="eventTypes" value="OH&S / near misses / first aid / weather" />
                                                    <label className="form-check-label" htmlFor="ohsMatters">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Security Breaches; Physical Break in's; Lock & Access issues; Patrol KPI Issues; Arrest</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="securityBreaches" name="eventTypes" value="Security breaches / break-ins / access / patrol KPI / arrest" />
                                                    <label className="form-check-label" htmlFor="securityBreaches">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Equipment damage or loss; Missing Items; Uniform Request</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="equipmentDamage" name="eventTypes" value="Equipment damage/loss / missing items / uniform" />
                                                    <label className="form-check-label" htmlFor="equipmentDamage">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>CCTV related OR Thermal Temperature Variations (mention the dropbox *.jpg file names)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="cctvRelated" name="eventTypes" value="CCTV / thermal temperature variations" />
                                                    <label className="form-check-label" htmlFor="cctvRelated">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Emergency Services on Site; Fire Fighting Responses</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="emergencyServices" name="eventTypes" value="Emergency services / fire response" />
                                                    <label className="form-check-label" htmlFor="emergencyServices">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Alarm is Active (Security Alarm Panel, Fire Panel, VESDA, or other equipment)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="alarmActive" name="eventTypes" value="Alarm active (security/fire/VESDA/other)" />
                                                    <label className="form-check-label" htmlFor="alarmActive">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Alarm is Disabled (Late to Close / site not sealed)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="alarmDisabled" name="eventTypes" value="Alarm disabled (late to close / site not sealed)" />
                                                    <label className="form-check-label" htmlFor="alarmDisabled">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Client or Authorised person was still onsite (ie: not an intruder)</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="clientOnsite" name="eventTypes" value="Client/authorised person onsite" />
                                                    <label className="form-check-label" htmlFor="clientOnsite">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <span>Other Categories / Feedback and Suggestions</span>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="otherCategories" name="eventTypes" value="Other categories / feedback / suggestions" />
                                                    <label className="form-check-label" htmlFor="otherCategories">Yes</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        {/* Smart Roaster Section */}
                                        {/* Smart Roaster Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#243D31'}}>Smart ROASTER Scanned?</h4>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label text-dark">Was Roaster scanned?</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="roasterScanned" id="roasterYes" value="yes" />
                                                <label className="form-check-label text-dark" htmlFor="roasterYes">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="roasterScanned" id="roasterNo" value="no" />
                                                <label className="form-check-label text-dark" htmlFor="roasterNo">No (n/a)</label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        {/* Officer Details Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#243D31'}}>Officer Details</h4>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="firstName" className="form-label text-dark">First Name</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="phone" className="form-label text-dark">Mobile or Landline No.</label>
                                                <input type="tel" className="form-control" id="phone" name="phone" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Gender</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                                <label className="form-check-label text-dark" htmlFor="male">Male</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                                <label className="form-check-label text-dark" htmlFor="female">Female</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="otherGender" value="other" />
                                                <label className="form-check-label text-dark" htmlFor="otherGender">Other</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Position</label>
                                                <select className="form-select" id="position" name="officerPosition" required>
                                                <option value="">Select Position</option>
                                                <option value="COVID Marshall">COVID Marshall</option>
                                                <option value="Security - Armed (CIT)">Security - Armed (CIT)</option>
                                                <option value="Security - Crowd Controller">Security - Crowd Controller</option>
                                                <option value="K9 Security">K9 Security</option>
                                                <option value="Security - Static / Site Guard">Security - Static / Site Guard</option>
                                                <option value="Security - Gatehouse Guard">Security - Gatehouse Guard</option>
                                                <option value="Security - Mobile Patrols (Car) M1">Security - Mobile Patrols (Car) M1</option>
                                                <option value="Security - Mobile Patrols (Car)">Security - Mobile Patrols (Car)</option>
                                                <option value="Security - Shift Supervisor">Security - Shift Supervisor</option>
                                                <option value="Security - Site Supervisor">Security - Site Supervisor</option>
                                                <option value="Metro Guards Director">Metro Guards Director</option>
                                                <option value="Metro Guards Project Manager">Metro Guards Project Manager</option>
                                                <option value="Investigator / Auditor">Investigator / Auditor</option>
                                                <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="email" className="form-label text-dark">Email Address</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="licenseNo" className="form-label text-dark">Security License No.</label>
                                                <input type="text" className="form-control" id="licenseNo" name="licenseNo" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">License State</label>
                                                <select className="form-select" id="licenseState" name="licenseState" required>
                                                <option value="">Select State</option>
                                                <option value="QLD">QLD</option><option value="NSW">NSW</option><option value="ACT">ACT</option>
                                                <option value="VIC">VIC</option><option value="TAS">TAS</option><option value="NT">NT</option>
                                                <option value="SA">SA</option><option value="WA">WA</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="callsign" className="form-label text-dark">Your Callsign</label>
                                                <input type="text" className="form-control" id="callsign" name="callsign" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="notifiedBy" className="form-label text-dark">Notified By</label>
                                                <input type="text" className="form-control" id="notifiedBy" name="notifiedBy" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="billing" className="form-label text-dark">Billing</label>
                                                <input type="text" className="form-control" id="billing" name="billing" />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Incident Date/Location Section */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color: '#243D31'}}>Incident Date / Location</h4>
                                            <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="incidentDate" className="form-label text-dark">Date</label>
                                                <input type="date" className="form-control" id="incidentDate" name="incidentDate" required />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="incidentTime" className="form-label text-dark">Time</label>
                                                <input type="time" className="form-control" id="incidentTime" name="incidentTime" required />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="toDate" className="form-label text-dark">To Date</label>
                                                <input type="date" className="form-control" id="toDate" name="toDate" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="toTime" className="form-label text-dark">To Time</label>
                                                <input type="time" className="form-control" id="toTime" name="toTime" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="jobNo" className="form-label text-dark">JOB No.</label>
                                                <input type="text" className="form-control" id="jobNo" name="jobNo" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="jobTime" className="form-label text-dark">JOB Time:</label>
                                                <input type="time" className="form-control" id="jobTime" name="jobTime" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="form-label text-dark">Patrol:</label>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="patrol" id="external" value="external" />
                                                <label className="form-check-label text-dark" htmlFor="external">External</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="patrol" id="internal" value="internal" />
                                                <label className="form-check-label text-dark" htmlFor="internal">Internal</label>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="form-label text-dark">License State</label>
                                                <select className="form-select" id="incidentLicenseState" name="incidentLicenseState">
                                                <option value="N/A">N/A</option>
                                                <option value="QLD">QLD</option><option value="NSW">NSW</option><option value="ACT">ACT</option>
                                                <option value="VIC">VIC</option><option value="TAS">TAS</option><option value="NT">NT</option>
                                                <option value="SA">SA</option><option value="WA">WA</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label text-dark">Client Type</label>
                                                <select className="form-select" id="clientType" name="clientType">
                                                <option value="">Select Client Type</option>
                                                <option value="Automotive">Automotive</option>
                                                <option value="Health & Hospitals">Health & Hospitals</option>
                                                <option value="Hotels & Accomodation">Hotels & Accomodation</option>
                                                <option value="Industrial Sites">Industrial Sites</option>
                                                <option value="Local Council & Leisure Centre">Local Council & Leisure Centre</option>
                                                <option value="Major Events & Concerts">Major Events & Concerts</option>
                                                <option value="Mobile Patrol Car (Adhoc)">Mobile Patrol Car (Adhoc)</option>
                                                <option value="Pubs & Nightclubs">Pubs & Nightclubs</option>
                                                <option value="Retail, Jewellery & Fashion Store">Retail, Jewellery & Fashion Store</option>
                                                <option value="Shopping Centres & Markets">Shopping Centres & Markets</option>
                                                <option value="Schools, Library, & Educational">Schools, Library, & Educational</option>
                                                <option value="Transport Company">Transport Company</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="clientSite" className="form-label text-dark">Client Site</label>
                                                <input type="text" className="form-control" id="clientSite" name="clientSite" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="supervisor" className="form-label text-dark">Supervisor or person you reported this to:</label>
                                                <input type="text" className="form-control" id="supervisor" name="supervisor" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="incidentReport" className="form-label text-dark">Situation / Incident Report or Feedback: for alarm responses ensure Area /Zone /Alarm Description entered</label>
                                                <textarea className="form-control" id="incidentReport" name="incidentReport" rows="5" required></textarea>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="fileAttachments" className="form-label text-dark">File Attachments</label>
                                                <input type="file" className="form-control" id="fileAttachments" name="attachments" multiple />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="text-center">
                                            <button type="submit" disabled={loading} className="btn px-4 py-3 text-white" style={{backgroundColor: '#243D31', border: 'none', borderRadius: '5px', fontWeight: '600', textTransform: 'uppercase'}}>
                                            {loading ? "Sending..." : "Submit Report"} <span><i className="bi bi-send"></i></span>
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