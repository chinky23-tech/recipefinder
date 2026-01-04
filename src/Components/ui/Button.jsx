// components/Button.jsx
import React from 'react';

/**
 * A reusable Button component using Daisy UI classes.
 * * @param {object} props
 * @param {React.ReactNode} props.children - The content inside the button (e.g., text, icon).
 * @param {'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'info' | 'success' | 'warning' | 'error'} [props.color='primary'] - The Daisy UI color scheme.
 * @param {'lg' | 'md' | 'sm' | 'xs'} [props.size='md'] - The size of the button.
 * @param {boolean} [props.isOutline=false] - If true, applies btn-outline style.
 * @param {boolean} [props.isBlock=false] - If true, makes the button full width (btn-block).
 * @param {boolean} [props.isLoading=false] - If true, shows a spinner and disables the button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {object} props... - Other native button props (e.g., onClick, type).
 */
export default function Button({ 
  children, 
  color = 'primary', 
  size = 'md',     
  isOutline = false,
  isBlock = false,
  isLoading = false,
  className = '',
  ...props 
}) {
  
  // Construct the main Daisy UI class string
  const classes = [
    'btn', 
    `btn-${color}`,
    `btn-${size}`,
    isOutline ? 'btn-outline' : '',
    isBlock ? 'btn-block' : '',
    className
  ].filter(Boolean).join(' '); // Filter(Boolean) removes empty strings

  return (
    <button 
      className={classes} 
      
      disabled={isLoading || props.disabled} // Disable if loading or explicitly disabled
      {...props}
    >
      {/* Daisy UI Loading Spinner */}
      {isLoading && <span className="loading loading-spinner mr-2"></span>}
            
      
      {children}
    </button>
  
  );
}