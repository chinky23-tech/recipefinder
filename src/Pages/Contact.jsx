/*export default function Lunch() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Lunch Recipes</h1>
      <h1 className="text-3xl font-bold">Lunch Recipes</h1>
    </div>
  );
}*/

import React, { useState } from 'react';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChefHat,
  Heart,
  Users,
  Sparkles
} from 'lucide-react';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For EmailJS integration (optional)
      // You'll need to sign up at https://www.emailjs.com/
      /*
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'RecipeFinder Team'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
      });
      reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["support@recipefinder.com", "hello@recipefinder.com"],
      color: "text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM EST"],
      color: "text-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Culinary Street", "Foodie City, FC 12345"],
      color: "text-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM", "Sun: Closed"],
      color: "text-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How do I save my favorite recipes?",
      answer: "Click the heart icon on any recipe to save it to your favorites. Access them anytime from your profile."
    },
    {
      question: "Can I submit my own recipes?",
      answer: "Yes! Use our 'Submit Recipe' feature. We review all submissions within 48 hours."
    },
    {
      question: "Is RecipeFinder available on mobile?",
      answer: "Absolutely! Download our app from the App Store or Google Play Store."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8" />
            <span className="text-2xl font-bold">RecipeFinder</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-orange-100 transition">Home</a>
            <a href="/recipes" className="hover:text-orange-100 transition">Recipes</a>
            <a href="/contact" className="font-semibold border-b-2">Contact</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Let's Connect!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, recipe suggestions, or partnership inquiries? 
            We're here to help make your culinary journey amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 ${item.color}`}>
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Our Culinary Journey</h3>
                <div className="flex space-x-4">
                  {['Instagram', 'Pinterest', 'YouTube', 'Facebook'].map((platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 hover:from-orange-100 hover:to-amber-100 transition-all duration-300 font-medium"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-orange-100">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Recipes</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-orange-100">
                <Users className="w-8 h-8 mx-auto text-orange-600 mb-2" />
                <div className="text-sm text-gray-600">Community</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <div className="flex items-center space-x-3 mb-2">
                <Send className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              <p className="text-gray-600 mb-8">We typically respond within 24 hours</p>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Full Name *</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Minimum 2 characters' }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address *</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject ? 'border-red-300' : 'border-gray-200'
                    } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Recipe Support">Recipe Support</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell us about your culinary experience or ask anything..."
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Minimum 20 characters' }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-300' : 'border-gray-200'
                    } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    {...register('newsletter')}
                    className="rounded text-orange-500 focus:ring-orange-300"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for weekly recipes and cooking tips
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Response Time Info */}
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6" />
                <h3 className="text-xl font-bold">Our Response Promise</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'General Inquiries', time: 'Within 24 hours' },
                  { label: 'Recipe Support', time: 'Within 12 hours' },
                  { label: 'Urgent Issues', time: 'Within 4 hours' },
                  { label: 'Partnerships', time: 'Within 48 hours' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-amber-400/30 last:border-0">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-bold bg-white/20 px-3 py-1 rounded-full">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <ChefHat className="w-8 h-8" />
              <span className="text-2xl font-bold">RecipeFinder</span>
            </div>
            <div className="flex items-center space-x-6">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-gray-300">Made with love for food lovers everywhere</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} RecipeFinder. All recipes are carefully curated with love.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;