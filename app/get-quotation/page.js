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
        onClick={(e) => {
          e.stopPropagation(); // stop form bubbling
          setIsOpen(!isOpen);
          console.log("Dropdown open?", !isOpen);
        }}
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
  <input
    type="text"
    name="companyWebsite"
    tabIndex="-1"
    autoComplete="off"
    style={{ display: "none" }}
  />

  {/* Your Name */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Your Name
    </label>
    <input
      name="name"
      type="text"
      className="form-control p-3 glassmorphism-input"
      placeholder="Enter your full name"
      required
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Your Email
    </label>
    <input
      name="email"
      type="email"
      className="form-control p-3 glassmorphism-input"
      placeholder="Enter your email address"
      required
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Phone Number
    </label>
    <input
      name="phone"
      type="tel"
      className="form-control p-3 glassmorphism-input"
      placeholder="Enter your phone number"
      required
    />
  </div>

  {/* Service Date */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Service Date
    </label>
    <input
      name="serviceDate"
      type="date"
      className="form-control p-3 glassmorphism-input"
      required
    />
  </div>

  {/* Location */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Location
    </label>
    <input
      name="location"
      type="text"
      className="form-control p-3 glassmorphism-input"
      placeholder="Enter service location"
    />
  </div>

  {/* Industry Dropdown */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Industry
    </label>
    <select
      name="industry[]" 
      className="form-control p-3 glassmorphism-input"
      required
    >
      <option value="">Select Industry</option>
      <option value="developer">Developer</option>
      <option value="real-estate">Real Estate</option>
      <option value="property-management">Property Management</option>
      <option value="individual">Individual</option>
      <option value="holding-company">Holding Company</option>
      <option value="maritime">Maritime</option>
      <option value="education">Education</option>
      <option value="healthcare">Healthcare</option>
      <option value="government">Government</option>
      <option value="cultural">Cultural</option>
      <option value="cre">CRE</option>
      <option value="finance">Finance</option>
      <option value="aviation">Aviation</option>
      <option value="fm-partnership">FM Partnership</option>
      <option value="public-transport">Public Transport</option>
      <option value="custodial-court">Custodial / Court</option>
      <option value="critical-infrastructure">Critical Infrastructure</option>
      <option value="telecommunication">Telecommunication</option>
      <option value="it">IT</option>
      <option value="banking">Banking</option>
      <option value="commercial-real-estate">Commercial Real Estate</option>
      <option value="defense">Defense</option>
      <option value="health-welfare">Health / Welfare</option>
      <option value="manufacturing-petrochemical">
        Manufacturing / Petrochemical
      </option>
      <option value="mining-resources">Mining / Resources</option>
      <option value="overheads">Overheads</option>
      <option value="patrols">Patrols</option>
      <option value="retail">Retail</option>
      <option value="transport">Transport</option>
      <option value="utilities-telecommunication-media">
        Utilities / Telecommunication / Media
      </option>
      <option value="other">Other</option>
    </select>
  </div>

  {/* Service Dropdown */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Type of Service Required
    </label>
    <select
      name="service[]"
      className="form-control p-3 glassmorphism-input"
      required
    >
      <option value="">Select Service</option>
      <option value="alarm-response-unit">Alarm Response Unit</option>
      <option value="concierge-services">Concierge Services</option>
      <option value="crowd-controller">Crowd Controller</option>
      <option value="guard-with-dog">Guard with Dog</option>
      <option value="k9-response-unit">K9 Response Unit</option>
      <option value="security-officers">Security Officers</option>
      <option value="mobile-security-patrols">Mobile Security Patrols</option>
      <option value="uniformed-guards">Uniformed Guards</option>
      <option value="construction-site-security">
        Construction Site Security
      </option>
      <option value="loss-prevention-officer">
        Loss Prevention Officer
      </option>
      <option value="party-security">Party Security</option>
      <option value="event-security">Event Security</option>
      <option value="covid-marshal">COVID Marshal</option>
      <option value="other-services">Other Services</option>
    </select>
  </div>

  {/* Message */}
  <div className="mb-4">
    <label className="form-label font-weight-bold" style={{ color: "#fff" }}>
      Message
    </label>
    <textarea
      name="message"
      className="form-control p-3 glassmorphism-input"
      rows={5}
      placeholder="Tell us more about your security requirements..."
      style={{ color: "#fff" }}
    ></textarea>
  </div>

  {/* Submit */}
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
        color: "#1E2247",
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
                            .glassmorphism-card-with-bg {
                                background:linear-gradient(330deg, rgb(84, 84, 100) 0%, rgb(15,18,41)100%);
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
                                background: #fff;
                                color: #192533;
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
                        `}</style>
       
      </Layout>
    </>
  );
}