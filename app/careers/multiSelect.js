"use client";
import { useState, useRef, useEffect } from "react";

const MultiSelectDropdown = ({ options, name, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const displayText =
    selected.length > 0 ? selected.join(", ") : placeholder;

  return (
    <div ref={dropdownRef} className="position-relative w-100">
      {/* Toggle input */}
      <div
        className="form-control glassmorphism-input d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <span>{displayText}</span>
        <span>▼</span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="border rounded bg-white mt-1 position-absolute w-100 shadow-sm"
          style={{ zIndex: 1000, maxHeight: "220px", overflowY: "auto" }}
        >
          {options.map((opt) => {
            const isSelected = selected.includes(opt.value);
            return (
              <div
                key={opt.value}
                className="p-2"
                style={{
                  cursor: "pointer",
                  fontSize:"15px",
                  backgroundColor: isSelected ? "#fdc51a" : "transparent",
                  color: isSelected ? "#1E2247" : "#000",
                  fontWeight: isSelected ? "600" : "normal",
                }}
                onClick={() => toggleOption(opt.value)}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}

      {/* Hidden inputs for form submit */}
      {selected.map((val) => (
        <input key={val} type="hidden" name={name} value={val} />
      ))}
    </div>
  );
};

export default MultiSelectDropdown;
