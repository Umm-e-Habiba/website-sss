"use client"
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Enhanced MultiSelectDropdown component (same as in Get Quotation page)
const MultiSelectDropdown = ({ options, selectedValues, onChange, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    
    onChange(newSelectedValues);
  };

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabels = options
    .filter(option => selectedValues.includes(option.value))
    .map(option => option.label)
    .join(", ");

  const displayText = selectedValues.length > 0 
    ? `${selectedValues.length} selected`
    : placeholder;

  return (
    <div className="multi-select-dropdown" ref={dropdownRef}>
      <div 
        className={`dropdown-toggle glassmorphism-input ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="selected-text" title={selectedLabels}>
          {displayText}
        </span>
        <span className="dropdown-arrow">▼</span>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <label key={option.value} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                  />
                  <span className="checkbox-label">{option.label}</span>
                </label>
              ))
            ) : (
              <div className="no-options">No options found</div>
            )}
          </div>
          
          {selectedValues.length > 0 && (
            <div className="dropdown-footer">
              <button 
                type="button"
                className="clear-all-btn"
                onClick={() => onChange([])}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Hidden inputs for form submission */}
      {selectedValues.map(value => (
        <input
          key={value}
          type="hidden"
          name={name}
          value={value}
        />
      ))}
    </div>
  );
};

export default function BookingFormPage() {
    const [loading, setLoading] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

    const serviceOptions = [
      { value: "alarm-response-unit", label: "Alarm Response Unit" },
      { value: "concierge-services", label: "Concierge Services" },
      { value: "crowd-controller", label: "Crowd Controller" },
      { value: "guard-with-dog", label: "Guard with Dog" },
      { value: "k9-response-unit", label: "K9 Response Unit" },
      { value: "security-officers", label: "Security Officers" },
      { value: "mobile-security-patrols", label: "Mobile Security Patrols" },
      { value: "uniformed-guards", label: "Uniformed Guards" },
      { value: "construction-site-security", label: "Construction Site Security" },
      { value: "loss-prevention-officer", label: "Loss Prevention Officer" },
      { value: "party-security", label: "Party Security" },
      { value: "event-security", label: "Event Security" },
      { value: "covid-marshal", label: "COVID Marshal" },
      { value: "other-services", label: "Other Services" }
    ];

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
            setSelectedServices([]);
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
                <div className="section-padding" style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-12">
                                <div className="contact-form-wrapper p-5 glassmorphism-card-with-bg">
                                    <div className="heading2 no-margin-heading text-center mb-5">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Secure Your Service Now!
                                        </small>
                                        <h2 style={{ color: "#fff" }}>Booking Form – Security Services, Australia</h2>
                                    </div>

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        {/* honeypot (spam trap) */}
                                        <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                                        {/* Client Details */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Client Details</h4>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Quote No.</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="quoteNo" name="quoteNo" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Commencement Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="commencementDate" name="commencementDate" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Client Name</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="clientName" name="clientName" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>ABN</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="abn" name="abn" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Site Name</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="siteName" name="siteName" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Onsite Contact</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="onsiteContact" name="onsiteContact" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Address</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="address" name="address" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Suburb</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="suburb" name="suburb" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>State</label>
                                                        <select className="form-control p-3 glassmorphism-input" id="state" name="state" required>
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
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Post Code</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="postCode" name="postCode" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Premise Phone Number</label>
                                                        <input type="tel" className="form-control p-3 glassmorphism-input" id="premisePhone" name="premisePhone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Fax Number</label>
                                                        <input type="tel" className="form-control p-3 glassmorphism-input" id="fax" name="fax" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Email Address</label>
                                                        <input type="email" className="form-control p-3 glassmorphism-input" id="clientEmail" name="clientEmail" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Invoicing Details */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>INVOICING DETAILS</h4>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Client Name</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceClientName" name="invoiceClientName" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Keys</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="keys" name="keys" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Accounts Contact</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="accountsContact" name="accountsContact" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>ABN</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceABN" name="invoiceABN" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Phone</label>
                                                        <input type="tel" className="form-control p-3 glassmorphism-input" id="invoicePhone" name="invoicePhone" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Address</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceAddress" name="invoiceAddress" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Suburb</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoiceSuburb" name="invoiceSuburb" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>State</label>
                                                        <select className="form-control p-3 glassmorphism-input" id="invoiceState" name="invoiceState">
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
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Post Code</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="invoicePostCode" name="invoicePostCode" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Email Address</label>
                                                        <input type="email" className="form-control p-3 glassmorphism-input" id="invoiceEmail" name="invoiceEmail" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Services Required - Now using MultiSelectDropdown */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Services Required Details</h4>
                                            <div className="row">
                                                <div className="col-12 mb-4">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Type of Service Required</label>
                                                        <MultiSelectDropdown
                                                            options={serviceOptions}
                                                            selectedValues={selectedServices}
                                                            onChange={setSelectedServices}
                                                            placeholder="Select services required..."
                                                            name="serviceType[]"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>From Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="fromDate" name="fromDate" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>From Time</label>
                                                        <input type="time" className="form-control p-3 glassmorphism-input" id="fromTime" name="fromTime" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>To Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="toDate" name="toDate" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>To Time</label>
                                                        <input type="time" className="form-control p-3 glassmorphism-input" id="toTime" name="toTime" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Guard Required</label>
                                                        <input type="number" className="form-control p-3 glassmorphism-input" id="guardRequired" name="guardRequired" min="1" defaultValue="1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Site Brief/Instructions */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>SITE BRIEF/SITE INSTRUCTIONS</h4>
                                            <div className="form-group">
                                                <textarea className="form-control p-3 glassmorphism-input" rows="5" id="siteBrief" name="siteBrief" style={{ color: "#fff" }}></textarea>
                                            </div>
                                        </div>

                                        {/* Payment */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Pay Via:</h4>
                                            <p className="mb-4" style={{color: 'rgba(255,255,255,0.7)'}}>To be completed by the customer...</p>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="form-check d-flex align-items-center mb-3">
                                                        <input className="form-check-input me-2" type="radio" name="paymentMethod" id="creditCard" value="creditCard" style={{width: '18px', height: '18px'}} />
                                                        <label className="form-check-label" style={{ color: "#fff" }} htmlFor="creditCard">Credit Card</label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input className="form-check-input me-2" type="radio" name="paymentMethod" id="eft" value="eft" style={{width: '18px', height: '18px'}} />
                                                        <label className="form-check-label" style={{ color: "#fff" }} htmlFor="eft">EFT</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="credit-card-details">
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Customer</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="customerName" name="customerName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Trading Name</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="tradingName" name="tradingName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Cardholder Name</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="cardholderName" name="cardholderName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Card Type</label>
                                                            <div className="form-check d-flex align-items-center mb-2">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="masterCard" value="MasterCard" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="masterCard">Master Card</label>
                                                            </div>
                                                            <div className="form-check d-flex align-items-center mb-2">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="visa" value="Visa" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="visa">Visa</label>
                                                            </div>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-2" type="radio" name="cardType" id="amex" value="Amex" style={{width: '18px', height: '18px'}} />
                                                                <label className="form-check-label" style={{ color: "#fff" }} htmlFor="amex">Amex</label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Card Number</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="cardNumber" name="cardNumber" inputMode="numeric" autoComplete="cc-number" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>CVV Number</label>
                                                                <input type="text" className="form-control p-3 glassmorphism-input" id="cvv" name="cvv" inputMode="numeric" autoComplete="cc-csc" />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Month / Year</label>
                                                                <input type="text" className="form-control p-3 glassmorphism-input" id="expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Signature</label>
                                                            <input type="text" className="form-control p-3 glassmorphism-input" id="signature" name="signature" />
                                                        </div>
                                                        <div className="form-check d-flex align-items-start mb-3">
                                                            <input className="form-check-input me-2 mt-1" type="checkbox" id="authorization" name="authorization" style={{width: '18px', height: '18px'}} />
                                                            <label className="form-check-label" style={{ color: "#fff", textAlign: 'left' }} htmlFor="authorization">
                                                                I, the undersigned, confirm that I authorise Metropolitan Guard Services...
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <h4 className="mb-4" style={{color: '#fff'}}>Additional Information/Comments</h4>
                                            <div className="form-group">
                                                <textarea className="form-control p-3 glassmorphism-input" rows="5" id="additionalInfo" name="additionalInfo" style={{ color: "#fff" }}></textarea>
                                            </div>
                                        </div>

                                        {/* Terms & Submit */}
                                        <div className="section-box mb-5 p-4 border-0 rounded glassmorphism-card">
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Signature</label>
                                                        <input type="text" className="form-control p-3 glassmorphism-input" id="signature1" name="signature1" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="form-group">
                                                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Date</label>
                                                        <input type="date" className="form-control p-3 glassmorphism-input" id="date1" name="date1" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
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
                    
                    .glassmorphism-card {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border-radius: 15px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
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

                    /* For the dropdown list in IE */
                    select.glassmorphism-input::-ms-list {
                        background: #1E2247;
                        color: #fff;
                    }

                    .form-check-input {
                        width: 18px;
                        height: 18px;
                        border-radius: 4px;
                        border: 2px solid rgba(255, 255, 255, 0.5);
                        background-color: transparent;
                    }

                    .form-check-input:checked {
                        background-color: #FDC51A;
                        border-color: #FDC51A;
                    }

                    .form-check-input:focus {
                        border-color: #FDC51A;
                        box-shadow: 0 0 0 0.25rem rgba(253, 197, 26, 0.25);
                    }

                    .form-check {
                        display: flex;
                        align-items: center;
                    }

                    .form-check-label {
                        margin-left: 8px;
                    }

                    /* Multi-select dropdown styles */
                    .multi-select-dropdown {
                        position: relative;
                        width: 100%;
                    }

                    .dropdown-toggle {
                        padding: 12px 15px;
                        border-radius: 8px;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(5px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: #fff;
                        transition: all 0.3s ease;
                        min-height: 50px;
                    }

                    .dropdown-toggle:hover {
                        background: rgba(255, 255, 255, 0.15);
                        border-color: rgba(255, 255, 255, 0.3);
                    }

                    .dropdown-toggle:focus,
                    .dropdown-toggle.open {
                        background: rgba(255, 255, 255, 0.15);
                        border-color: rgba(253, 197, 26, 0.5);
                        box-shadow: 0 0 0 0.2rem rgba(253, 197, 26, 0.25);
                    }

                    .selected-text {
                        flex: 1;
                        text-align: left;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #fff;
                    }

                    .dropdown-arrow {
                        font-size: 12px;
                        transition: transform 0.3s ease;
                        margin-left: 10px;
                        color: #fff;
                    }

                    .dropdown-toggle.open .dropdown-arrow {
                        transform: rotate(180deg);
                    }

                    .dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #1E2247;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 8px;
                        margin-top: 5px;
                        max-height: 350px;
                        overflow: hidden;
                        z-index: 1000;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                        backdrop-filter: blur(10px);
                    }

                    .dropdown-search {
                        padding: 10px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    .search-input {
                        width: 100%;
                        padding: 8px 12px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 6px;
                        background: rgba(255, 255, 255, 0.1);
                        color: #fff;
                        font-size: 14px;
                        outline: none;
                    }

                    .search-input::placeholder {
                        color: rgba(255, 255, 255, 0.6);
                    }

                    .search-input:focus {
                        border-color: rgba(253, 197, 26, 0.5);
                        box-shadow: 0 0 0 2px rgba(253, 197, 26, 0.2);
                    }

                    .dropdown-options {
                        max-height: 250px;
                        overflow-y: auto;
                    }

                    .dropdown-item {
                        display: flex;
                        align-items: center;
                        padding: 12px 15px;
                        cursor: pointer;
                        color: #fff;
                        transition: background 0.2s ease;
                        margin: 0;
                        border: none;
                    }

                    .dropdown-item:hover {
                        background: rgba(253, 197, 26, 0.15);
                    }

                    .dropdown-item input[type="checkbox"] {
                        margin-right: 12px;
                        accent-color: #FDC51A;
                        width: 16px;
                        height: 16px;
                    }

                    .checkbox-label {
                        flex: 1;
                        font-size: 14px;
                    }

                    .no-options {
                        padding: 20px 15px;
                        text-align: center;
                        color: rgba(255, 255, 255, 0.6);
                        font-style: italic;
                    }

                    .dropdown-footer {
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        padding: 10px 15px;
                    }

                    .clear-all-btn {
                        background: rgba(253, 197, 26, 0.2);
                        border: 1px solid rgba(253, 197, 26, 0.3);
                        color: #FDC51A;
                        padding: 6px 12px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        transition: all 0.2s ease;
                        width: 100%;
                    }

                    .clear-all-btn:hover {
                        background: rgba(253, 197, 26, 0.3);
                        border-color: rgba(253, 197, 26, 0.5);
                    }

                    /* Custom scrollbar */
                    .dropdown-options::-webkit-scrollbar {
                        width: 6px;
                    }

                    .dropdown-options::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.1);
                    }

                    .dropdown-options::-webkit-scrollbar-thumb {
                        background: rgba(253, 197, 26, 0.5);
                        border-radius: 3px;
                    }

                    .dropdown-options::-webkit-scrollbar-thumb:hover {
                        background: rgba(253, 197, 26, 0.7);
                    }
                `}</style>
            </Layout>
        </>
    )
}