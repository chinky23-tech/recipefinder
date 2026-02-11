
/*import React, { useState } from 'react';
import Card from "../Components/ui/Card"; 
import Input from "../Components/ui/Input"; 
import Button from "../Components/ui/Button";
import { useNavigate } from 'react-router-dom'; 
import reactLogo from "../assets/react.svg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaApple } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!re.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    
    if (emailValidation || passwordValidation) return;

    setIsSubmitting(true);
    console.log('Attempting login for:', email);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (email === 'test@user.com' && password === 'password') {
        // Success animation before navigation
        const button = e.target.querySelector('button[type="submit"]');
        if (button) {
          button.classList.add('success');
          setTimeout(() => {
            navigate('/dashboard');
          }, 800);
        }
      } else {
        // Shake animation for error
        const form = e.target;
        form.classList.add('shake-animation');
        setTimeout(() => form.classList.remove('shake-animation'), 500);
        setPasswordError('Invalid email or password');
      }
    } catch (error) {
      setPasswordError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */
      /*<div className="absolute top-0 left-0 w-72 h-72 bg-linear-to-br from-orange-100 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tr from-yellow-100 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50"></div>
      
      <div className="w-full max-w-md z-10 animate-fade-in">
        <Card
          title="Welcome Back 👋"
          subtitle="Sign in to discover delicious recipes"
          headerIcon={<img src={reactLogo} alt="Logo" className="w-10 h-10 object-contain" />}
          className="shadow-2xl border border-gray-100/50 backdrop-blur-sm bg-white/80"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Social Login Buttons */
            /*<div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <FaGoogle className="w-5 h-5 text-red-500" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('github')}
                className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <FaGithub className="w-5 h-5 text-gray-900" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('apple')}
                className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <FaApple className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            {/* Divider */
            /*<div className="relative flex items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink mx-4 text-gray-500 text-sm">or continue with email</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* Email Field */
            /*<div className="space-y-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                required
                icon={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>

            {/* Password Field */
            /*<div className="space-y-2">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                required
                icon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                }
              />
            </div>

            {/* Remember Me & Forgot Password */
            /*<div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a 
                href="#" 
                className="link link-hover text-primary text-sm font-medium hover:text-primary/80 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */
            /*<Button 
              type="submit" 
              isBlock={true} 
              isLoading={isSubmitting}
              disabled={isSubmitting || emailError || passwordError}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-orange-500 to-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </Button>

            {/* Sign Up Link */
            /*<p className="text-center text-sm pt-6 border-t border-gray-200">
              Don't have an account?{' '}
              <a 
                href="#" 
                className="link link-hover text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Create account
              </a>
            </p>
          </form>
        </Card>

        {/* Footer */
        /*<p className="text-center text-xs text-gray-500 mt-8">
          By signing in, you agree to our{' '}
          <a href="#" className="link link-hover">Terms</a> and{' '}
          <a href="#" className="link link-hover">Privacy Policy</a>
        </p>
      </div>

      {/* Add custom styles */
      /*<style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }
        
        .success {
          animation: successPulse 0.8s ease-in-out;
        }
        
        @keyframes successPulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}*/