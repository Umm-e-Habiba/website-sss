"use client"
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: 'Booking Form - Metropolitan Security Services',
  description: 'Book security services with Metropolitan Guard Services in Australia.',
}

export default function BookingFormPage() {
    const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/booking", { method: "POST", body: formData });
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BOOKING FORM">
                <div className="booking-form-section bg-28 section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="booking-form bg-white p-5 rounded shadow">
                                    <h2 className="mb-4 text-center" style={{color: '#243D31'}}>Booking Form – Security Services, Australia</h2>
                                    <form onSubmit={handleSubmit} noValidate>
                                        {/* Client Details */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>Client Details</h4>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="quoteNo" className="form-label text-dark">Quote No.</label>
                                                <input type="text" className="form-control" id="quoteNo" name="quoteNo" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="commencementDate" className="form-label text-dark">Commencement Date</label>
                                                <input type="date" className="form-control" id="commencementDate" name="commencementDate" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="clientName" className="form-label text-dark">Client Name</label>
                                                <input type="text" className="form-control" id="clientName" name="clientName" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="abn" className="form-label text-dark">ABN</label>
                                                <input type="text" className="form-control" id="abn" name="abn" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="siteName" className="form-label text-dark">Site Name</label>
                                                <input type="text" className="form-control" id="siteName" name="siteName" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="onsiteContact" className="form-label text-dark">Onsite Contact</label>
                                                <input type="text" className="form-control" id="onsiteContact" name="onsiteContact" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="address" className="form-label text-dark">Address</label>
                                                <input type="text" className="form-control" id="address" name="address" required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="suburb" className="form-label text-dark">Suburb</label>
                                                <input type="text" className="form-control" id="suburb" name="suburb" required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="state" className="form-label text-dark">State</label>
                                                <select className="form-select" id="state" name="state" required>
                                                <option value="">Select</option>
                                                <option value="VIC">VIC</option><option value="NSW">NSW</option>
                                                <option value="QLD">QLD</option><option value="SA">SA</option>
                                                <option value="WA">WA</option><option value="TAS">TAS</option>
                                                <option value="NT">NT</option><option value="ACT">ACT</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="postCode" className="form-label text-dark">Post Code</label>
                                                <input type="text" className="form-control" id="postCode" name="postCode" required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="premisePhone" className="form-label text-dark">Premise Phone Number</label>
                                                <input type="tel" className="form-control" id="premisePhone" name="premisePhone" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="fax" className="form-label text-dark">Fax Number</label>
                                                <input type="tel" className="form-control" id="fax" name="fax" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="clientEmail" className="form-label text-dark">Email Address</label>
                                                <input type="email" className="form-control" id="clientEmail" name="clientEmail" required />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Invoicing Details */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>INVOICING DETAILS</h4>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="invoiceClientName" className="form-label text-dark">Client Name</label>
                                                <input type="text" className="form-control" id="invoiceClientName" name="invoiceClientName" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="keys" className="form-label text-dark">Keys</label>
                                                <input type="text" className="form-control" id="keys" name="keys" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="accountsContact" className="form-label text-dark">Accounts Contact</label>
                                                <input type="text" className="form-control" id="accountsContact" name="accountsContact" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="invoiceABN" className="form-label text-dark">ABN</label>
                                                <input type="text" className="form-control" id="invoiceABN" name="invoiceABN" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="invoicePhone" className="form-label text-dark">Phone</label>
                                                <input type="tel" className="form-control" id="invoicePhone" name="invoicePhone" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="invoiceAddress" className="form-label text-dark">Address</label>
                                                <input type="text" className="form-control" id="invoiceAddress" name="invoiceAddress" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="invoiceSuburb" className="form-label text-dark">Suburb</label>
                                                <input type="text" className="form-control" id="invoiceSuburb" name="invoiceSuburb" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="invoiceState" className="form-label text-dark">State</label>
                                                <select className="form-select" id="invoiceState" name="invoiceState">
                                                <option value="">Select</option>
                                                <option value="VIC">VIC</option><option value="NSW">NSW</option>
                                                <option value="QLD">QLD</option><option value="SA">SA</option>
                                                <option value="WA">WA</option><option value="TAS">TAS</option>
                                                <option value="NT">NT</option><option value="ACT">ACT</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="invoicePostCode" className="form-label text-dark">Post Code</label>
                                                <input type="text" className="form-control" id="invoicePostCode" name="invoicePostCode" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="invoiceEmail" className="form-label text-dark">Email Address</label>
                                                <input type="email" className="form-control" id="invoiceEmail" name="invoiceEmail" />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Services Required */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>Services Required Details</h4>
                                            <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label text-dark">Type of Service Required</label>
                                                <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="alarmResponse" name="serviceType" value="Alarm Response Unit" />
                                                    <label className="form-check-label text-dark" htmlFor="alarmResponse">Alarm Response Unit</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="concierge" name="serviceType" value="Concierge Services" />
                                                    <label className="form-check-label text-dark" htmlFor="concierge">Concierge Services</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="crowdController" name="serviceType" value="Crowd Controller" />
                                                    <label className="form-check-label text-dark" htmlFor="crowdController">Crowd Controller</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="guardWithDog" name="serviceType" value="Guard with Dog" />
                                                    <label className="form-check-label text-dark" htmlFor="guardWithDog">Guard with Dog</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="k9Response" name="serviceType" value="K9 Response Unit" />
                                                    <label className="form-check-label text-dark" htmlFor="k9Response">K9 Response unit</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="securityOfficers" name="serviceType" value="Security Officers" />
                                                    <label className="form-check-label text-dark" htmlFor="securityOfficers">Security Officers</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="mobilePatrols" name="serviceType" value="Mobile Security Patrols" />
                                                    <label className="form-check-label text-dark" htmlFor="mobilePatrols">Mobile Security Patrols</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="uniformedGuards" name="serviceType" value="Uniformed Guards" />
                                                    <label className="form-check-label text-dark" htmlFor="uniformedGuards">Uniformed Guards</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="constructionSite" name="serviceType" value="Construction Site Security" />
                                                    <label className="form-check-label text-dark" htmlFor="constructionSite">Construction Site Security</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="lossPrevention" name="serviceType" value="Loss Prevention Officer" />
                                                    <label className="form-check-label text-dark" htmlFor="lossPrevention">Loss Prevention Officer</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="partySecurity" name="serviceType" value="Party Security" />
                                                    <label className="form-check-label text-dark" htmlFor="partySecurity">Party Security</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="eventSecurity" name="serviceType" value="Event Security" />
                                                    <label className="form-check-label text-dark" htmlFor="eventSecurity">Event Security</label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" id="covidMarshal" name="serviceType" value="COVID Marshal" />
                                                    <label className="form-check-label text-dark" htmlFor="covidMarshal">COVID Marshal</label>
                                                    </div>
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="otherServices" name="serviceType" value="Other Services" />
                                                    <label className="form-check-label text-dark" htmlFor="otherServices">Other Services</label>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="fromDate" className="form-label text-dark">From Date</label>
                                                <input type="date" className="form-control" id="fromDate" name="fromDate" />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="fromTime" className="form-label text-dark">From Time</label>
                                                <input type="time" className="form-control" id="fromTime" name="fromTime" />
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
                                                <label htmlFor="guardRequired" className="form-label text-dark">Guard Required</label>
                                                <input type="number" className="form-control" id="guardRequired" name="guardRequired" min="1" defaultValue="1" />
                                            </div>
                                            </div>
                                        </div>

                                        {/* Site Brief/Instructions */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>SITE BRIEF/SITE INSTRUCTIONS</h4>
                                            <div className="mb-3">
                                            <textarea className="form-control" rows="5" id="siteBrief" name="siteBrief"></textarea>
                                            </div>
                                        </div>

                                        {/* Payment */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>Pay Via:</h4>
                                            <p className="text-muted mb-4">To be completed by the customer...</p>
                                            <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" value="creditCard" />
                                                <label className="form-check-label text-dark" htmlFor="creditCard">Credit Card</label>
                                                </div>
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paymentMethod" id="eft" value="eft" />
                                                <label className="form-check-label text-dark" htmlFor="eft">EFT</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="credit-card-details">
                                                <div className="mb-3">
                                                    <label htmlFor="customerName" className="form-label text-dark">Customer</label>
                                                    <input type="text" className="form-control" id="customerName" name="customerName" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="tradingName" className="form-label text-dark">Trading Name</label>
                                                    <input type="text" className="form-control" id="tradingName" name="tradingName" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cardholderName" className="form-label text-dark">Cardholder Name</label>
                                                    <input type="text" className="form-control" id="cardholderName" name="cardholderName" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label text-dark">Card Type</label>
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="cardType" id="masterCard" value="MasterCard" />
                                                    <label className="form-check-label text-dark" htmlFor="masterCard">Master Card</label>
                                                    </div>
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="cardType" id="visa" value="Visa" />
                                                    <label className="form-check-label text-dark" htmlFor="visa">Visa</label>
                                                    </div>
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="cardType" id="amex" value="Amex" />
                                                    <label className="form-check-label text-dark" htmlFor="amex">Amex</label>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cardNumber" className="form-label text-dark">Card Number</label>
                                                    <input type="text" className="form-control" id="cardNumber" name="cardNumber" inputMode="numeric" autoComplete="cc-number" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                    <label htmlFor="cvv" className="form-label text-dark">CVV Number</label>
                                                    <input type="text" className="form-control" id="cvv" name="cvv" inputMode="numeric" autoComplete="cc-csc" />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                    <label htmlFor="expiry" className="form-label text-dark">Month / Year</label>
                                                    <input type="text" className="form-control" id="expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="signature" className="form-label text-dark">Signature</label>
                                                    <input type="text" className="form-control" id="signature" name="signature" />
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" id="authorization" name="authorization" />
                                                    <label className="form-check-label text-dark" htmlFor="authorization">
                                                    I, the undersigned, confirm that I authorise Metropolitan Guard Services...
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <h4 className="mb-4" style={{color:'#243D31'}}>Additional Information/Comments</h4>
                                            <div className="mb-3">
                                            <textarea className="form-control" rows="5" id="additionalInfo" name="additionalInfo"></textarea>
                                            </div>
                                        </div>

                                        {/* Terms & Submit */}
                                        <div className="section-box mb-5 p-4 border rounded">
                                            <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="signature1" className="form-label text-dark">Signature</label>
                                                <input type="text" className="form-control" id="signature1" name="signature1" required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="date1" className="form-label text-dark">Date</label>
                                                <input type="date" className="form-control" id="date1" name="date1" required />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" disabled={loading} className="btn px-4 py-3 text-white" style={{backgroundColor:'#243D31',border:'none',borderRadius:'5px',fontWeight:'600',textTransform:'uppercase'}}>
                                            {loading ? 'SENDING…' : 'SEND REQUEST'} <span><i className="bi bi-send"></i></span>
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