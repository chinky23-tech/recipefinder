/*import React, { useState } from 'react';
// ⭐ Import the Card component
import Card from "../Components/ui/Card"; 
import Input from "../Components/ui/Input"; 
import Button from "../Components/ui/Button";
import { useNavigate } from 'react-router-dom'; 
import reactLogo from "../assets/react.svg"; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Simple validation
    if (value.length < 5) {
      setEmailError('Email must be at least 5 characters.');
    } else {
      setEmailError('');
    }
  };

  // ⭐ ADDED: The core submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (emailError) return; // Prevent submission if validation failed

    setIsSubmitting(true);
    console.log('Attempting login for:', email);

    // --- REPLACE THIS WITH YOUR ACTUAL API CALL ---
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Example: If login is successful
      if (email === 'test@user.com' && password === 'password') {
        alert('Login Successful!');
        // ⭐ Redirect user to the dashboard or home page
        // navigate('/dashboard'); 
      } else {
        alert('Login failed: Invalid credentials.');
      }
      // ---------------------------------------------
      
    }, 2000); // Simulate network delay
  };


  return (
    // Daisy UI background and centering utilities
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-orange-50 via-white to-yellow-50 p-4">
      
      <img src={reactLogo} alt="RecipeFinder Logo" className="w-20 h-20 mx-auto mb-4" />
      
      {/* ⭐ Use the Card component as the form container *
      <Card title="Welcome to RecipeFinder" className="max-w-md shadow-2xl">
        
        {/* ⭐ ADDED: Assign the handleSubmit function to the form *
        <form className="space-y-4" onSubmit={handleSubmit}> 
          
          {/* Email Field *
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            required
          />

          {/* Password Field *
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Forgot Password Link *
          <div className="text-right">
            <a href="#" className="link link-hover text-primary text-sm">Forgot Password?</a>
          </div>

          {/* Submit Button *
          <div className="form-control mt-8">
            <Button 
              type="submit" 
              isBlock={true} 
              isLoading={isSubmitting}
              disabled={isSubmitting || emailError} // Disable if submitting OR if validation fails
            >
              {isSubmitting ? 'Authenticating...' : 'Login'}
            </Button>
          </div>
          
          <p className="text-center text-sm pt-4">
            Don't have an account? <a href="#" className="link link-hover text-primary">Sign Up</a>
          </p>
       
          
        </form>
      </Card>
    </div>
  );
}*/