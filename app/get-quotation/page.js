"use client";
import Layout from "@/components/layout/Layout";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./get-quotation.css";

// Enhanced MultiSelectDropdown component
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

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const industryOptions = [
    { value: "developer", label: "Developer" },
    { value: "real-estate", label: "Real Estate" },
    { value: "property-management", label: "Property Management" },
    { value: "individual", label: "Individual" },
    { value: "holding-company", label: "Holding Company" },
    { value: "maritime", label: "Maritime" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "government", label: "Government" },
    { value: "cultural", label: "Cultural" },
    { value: "cre", label: "CRE" },
    { value: "finance", label: "Finance" },
    { value: "aviation", label: "Aviation" },
    { value: "fm-partnership", label: "FM Partnership" },
    { value: "public-transport", label: "Public Transport" },
    { value: "custodial-court", label: "Custodial / Court" },
    { value: "critical-infrastructure", label: "Critical Infrastructure" },
    { value: "telecommunication", label: "Telecommunication" },
    { value: "it", label: "IT" },
    { value: "banking", label: "Banking" },
    { value: "commercial-real-estate", label: "Commercial Real Estate" },
    { value: "defense", label: "Defense" },
    { value: "health-welfare", label: "Health / Welfare" },
    { value: "manufacturing-petrochemical", label: "Manufacturing / Petrochemical" },
    { value: "mining-resources", label: "Mining / Resources" },
    { value: "overheads", label: "Overheads" },
    { value: "patrols", label: "Patrols" },
    { value: "retail", label: "Retail" },
    { value: "transport", label: "Transport" },
    { value: "utilities-telecommunication-media", label: "Utilities / Telecommunication / Media" },
    { value: "other", label: "Other" }
  ];

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
      const res = await fetch("/api/quotation", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      toast.success("Message sent successfully!");
      form.reset();
      setSelectedIndustries([]);
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get A Quotation">
        {/* Changed: Removed background from section, added white background and padding */}
        <div className="section-padding" style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10">
                {/* Changed: Added navy blue background with glassmorphism effect */}
                <div className="contact-form-wrapper p-5 glassmorphism-card-with-bg">
                  <div className="heading2 no-margin-heading text-center mb-5">
                    <small className="heading-top inner-heading-top">
                      <img src="/assets/img/icons/hands.svg" alt="" />Get In Touch Now!
                    </small>
                    <h2 style={{ color: "#fff" }}>Get A Quotation</h2>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    {/* honeypot (spam trap) */}
                    <input type="text" name="companyWebsite" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

                    {/* Your Name */}
                    <div className="row">
                      <div className="col-12 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Name</label>
                          <input name="name" type="text" className="form-control p-3 glassmorphism-input" placeholder="Enter your full name" required />
                        </div>
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Your Email</label>
                          <input name="email" type="email" className="form-control p-3 glassmorphism-input" placeholder="Enter your email address" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Phone Number</label>
                          <input name="phone" type="tel" className="form-control p-3 glassmorphism-input" placeholder="Enter your phone number" required />
                        </div>
                      </div>
                    </div>

                    {/* Service Date and Location */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Service Date</label>
                          <input name="serviceDate" type="date" className="form-control p-3 glassmorphism-input" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Location</label>
                          <input name="location" type="text" className="form-control p-3 glassmorphism-input" placeholder="Enter service location" />
                        </div>
                      </div>
                    </div>

                    {/* Number of Attendees */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Number of Attendees</label>
                          <input name="attendees" type="number" min="1" className="form-control p-3 glassmorphism-input" placeholder="Enter number of attendees" required />
                        </div>
                      </div>
                    </div>

                    {/* Industry Multi-Select Dropdown */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Industry</label>
                          <MultiSelectDropdown
                            options={industryOptions}
                            selectedValues={selectedIndustries}
                            onChange={setSelectedIndustries}
                            placeholder="Select industries..."
                            name="industry[]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Type of Service Required Multi-Select Dropdown */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Type of Service Required</label>
                          <MultiSelectDropdown
                            options={serviceOptions}
                            selectedValues={selectedServices}
                            onChange={setSelectedServices}
                            placeholder="Select services required..."
                            name="service[]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <div className="form-group">
                        <label className="form-label font-weight-bold" style={{ color: "#fff" }}>Message</label>
                        <textarea 
                          name="message" 
                          className="form-control p-3 glassmorphism-input" 
                          rows={5} 
                          placeholder="Tell us more about your security requirements..."
                          style={{ color: "#fff" }}
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
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
                        {loading ? "Sending..." : "Get Quotation"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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

          .glassmorphism-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          }

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
        `}</style>
      </Layout>
    </>
  );
}