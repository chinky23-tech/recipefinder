
import React, { useState } from 'react';
import Card from "../Components/ui/Card"; 
import Input from "../Components/ui/Input"; 
import Button from "../Components/ui/Button";
import { useNavigate } from 'react-router-dom'; 
import reactLogo from "../assets/react.svg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaApple } from 'react-icons/fa';

export default function LoginPage() {
  // --- State Management ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();

  // --- Handlers ---
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(''); // Clear error on type
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(''); // Clear error on type
  };

  const handleSocialLogin = (provider) => {
    console.log(`Authenticating with ${provider}...`);
    // Logic for Firebase/Auth0/Supabase social login would go here
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API Call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Login Successful", { email, rememberMe });
      
      // Navigate to dashboard on success
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /*<div className="min-h-screen  bg-[#f9f9f9] flex items-center justify-center p-4 relative overflow-hidden font-sans">*/
    <div className="min-h-screen  bg-linear-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* 1. VIBRANT BACKGROUND ELEMENTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-300 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-300 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-300 rounded-full blur-[100px] opacity-30"></div>

      <div className="w-full max-w-md z-10 animate-fade-in">
        <Card
          title="Recipe Hub"
          subtitle="Sign in to discover delicious recipes"

          className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-3">
              {['google', 'github', 'apple'].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  onClick={() => handleSocialLogin(provider)}
                  className="flex items-center justify-center p-3 rounded-xl border border-white/50 bg-white/40 hover:bg-white/60 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  {provider === 'google' && <FaGoogle className="w-5 h-5 text-red-500" />}
                  {provider === 'github' && <FaGithub className="w-5 h-5 text-gray-900" />}
                  {provider === 'apple' && <FaApple className="w-5 h-5 text-gray-900" />}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="grow border-t border-white/40"></div>
              <span className="shrink mx-4 text-gray-600 text-xs font-medium uppercase tracking-wider">or continue with email</span>
              <div className="grow border-t border-white/40"></div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                className="bg-white/40 border-white/50 focus:bg-white/60 transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                className="bg-white/40 border-white/50 focus:bg-white/60 transition-all"
                icon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-gray-800 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                }
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs border-white/60 bg-white/20 mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-sm text-gray-700 group-hover:text-black">Remember me</span>
              </label>
              <a href="#" className="text-orange-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              isBlock={true} 
              isLoading={isSubmitting}
              className="w-full bg-linear-to-r from-orange-500/90 to-yellow-500/90 hover:from-orange-500 hover:to-yellow-500 text-white shadow-lg border-none py-3 rounded-xl font-bold transition-all transform active:scale-[0.98]"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm pt-6 border-t border-white/30">
              Don't have an account?{' '}
              <a href="#" className="text-orange-600 font-bold hover:underline">
                Create account
              </a>
            </p>
          </form>
        </Card>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
}