


export default function Input({
  label,              // Text for the label above the input
  type = 'text',      // Input type (e.g., 'text', 'email', 'password', 'number')
  placeholder,        // Placeholder text inside the input
  value,              // Current value of the input
  onChange,           // Change handler function
  error,              // Error message string (optional)
  required = false,   // Boolean to mark the input as required
  className = '',     // Additional classes for the form-control div
  icon,               // Optional icon node to render inside the input (absolute)
  ...props            // Any other native input attributes (like 'name', 'id')
}) {

  // Improved input classes with nicer placeholder styling and spacing
  const baseInput = `input input-bordered w-full border border-base-content rounded-lg
    px-4 py-3 focus:border-primary focus:outline-none placeholder-gray-400 placeholder-opacity-80`;

  const inputClasses = `${baseInput} ${icon ? 'pr-12' : ''} ${error ? 'input-error' : ''}`;

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

      <div className="relative">
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

        {/* Optional icon positioned inside the input */}
        {icon && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
      </div>

      {/* Error Feedback */}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}