import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';

// Components (Assuming relative paths)
import Button from '../Components/ui/Button';
import Card from '../Components/ui/Card';
import Input from '../Components/ui/Input';


export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' or 'error'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Adjust this endpoint based on your backend API
      await api.post('/auth/forget-password', { email });
      
      setSubmitted(true);
      setStatus({
        type: 'success',
        message: 'Password reset link has been sent to your email.'
      });
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  // 1. Success State View
  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        <Card 
          title="Check your email" 
          subtitle={`We've sent a password reset link to ${email}`}
          headerIcon={<CheckCircle2 className="w-8 h-8 text-success" />}
          className="max-w-md"
        >
          <div className="text-center space-y-6">
            <p className="text-gray-600">
              Did not receive the email? Check your spam folder or try again with a different email address.
            </p>
            <Button 
              isBlock 
              color="ghost" 
              onClick={() => setSubmitted(false)}
            >
              Try another email
            </Button>
            <Link to="/login" className="flex items-center justify-center text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // 2. Initial Form View
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card
        title="Forgot Password?"
        subtitle="No worries, we'll send you reset instructions."
        headerIcon={<KeyRound className="w-8 h-8 text-primary" />}
        className="max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {status.type === 'error' && (
            <div className="alert alert-error text-sm py-2 shadow-sm">
              <span>{status.message}</span>
            </div>
          )}

          <Input
            label="Email Address"
            type="email"
            placeholder="enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon={<Mail className="w-5 h-5" />}
            disabled={loading}
          />

          <Button
            type="submit"
            isBlock
            isLoading={loading}
            color="primary"
          >
            Reset Password
          </Button>

          <div className="text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}