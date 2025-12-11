// components/Input.jsx
import React from 'react';

export default function Input({
  label,              // Text for the label above the input
  type = 'text',      // Input type (e.g., 'text', 'email', 'password', 'number')
  placeholder,        // Placeholder text inside the input
  value,              // Current value of the input
  onChange,           // Change handler function
  error,              // Error message string (optional)
  required = false,   // Boolean to mark the input as required
  className = '',     // Additional classes for the form-control div
  ...props            // Any other native input attributes (like 'name', 'id')
}) {

  // Daisy UI input classes
  const inputClasses = `input input-bordered w-full ${error ? 'input-error' : ''}`;

  return (
    // 'form-control' is the Daisy UI wrapper for proper spacing
    <div className={`form-control ${className}`}>
      
      {/* Label above the input */}
      {label && (
        <label className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>
      )}

      {/* Actual Input Element */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
        {...props} // Spreads remaining props (e.g., name, id)
      />
      
      {/* Error Feedback */}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}