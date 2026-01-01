
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ChevronRight, MessageCircle, Truck, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
    { name: 'Contact', url: 'https://anjalibenchakriwala.com/contact' }
  ];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const message = `Hello! I have a new contact form enquiry:\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Message:* ${data.message}`;
    const whatsappUrl = `https://wa.me/918460078518?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="Contact Anjaliben Chakriwala | Order Gujarati Snacks | PAN India Delivery"
        description="Contact us for orders, bulk enquiries, or questions about our authentic Gujarati snacks. WhatsApp ordering available. PAN India delivery for chakri, bhakharwadi & more."
        keywords="contact anjaliben chakriwala, order gujarati snacks, bulk snack orders india, whatsapp snack order, namkeen delivery contact"
        canonicalUrl="https://anjalibenchakriwala.com/contact"
        ogImage="/logo.png"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm text-brand-text-light mb-8" aria-label="Breadcrumb">
            <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-text font-medium">Contact Us</span>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4">
              Contact Us - Order Gujarati Snacks
            </h1>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto">
              Ready to taste authentic homemade snacks? Reach out via WhatsApp for quick ordering or fill the form below.
              <strong> We deliver fresh across India!</strong>
            </p>
          </div>

          {/* Quick Order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-6 text-center"
          >
            <h2 className="text-xl font-semibold text-brand-text mb-2">Quick Order via WhatsApp</h2>
            <p className="text-brand-text-light mb-4">The fastest way to order our snacks - direct WhatsApp chat!</p>
            <a
              href="https://wa.me/918460078518?text=Hi! I would like to order Gujarati snacks."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp Now
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl border border-brand-secondary bg-brand-bg-light shadow-lg">
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="mb-5 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-3 text-brand-text tracking-tight">
                      Send us a message
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-text-light font-light">
                      Fill out the form below for enquiries, bulk orders, or custom requirements. We respond within 24 hours.
                    </p>
                  </div>

                  <AnimatePresence>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-brand-text mb-2">Message Sent!</h3>
                        <p className="text-brand-text-light">Thank you for reaching out. We'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="text-xs font-medium text-brand-text mb-1.5 block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            className="flex w-full border px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white border-brand-secondary focus:border-brand-primary focus:ring-brand-primary/20 h-12 rounded-full"
                            placeholder="Your Good Name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="text-xs font-medium text-brand-text mb-1.5 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                            className="flex w-full border px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white border-brand-secondary focus:border-brand-primary focus:ring-brand-primary/20 h-12 rounded-full"
                            placeholder="yourmail@gmail.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
                          )}
                        </div>

                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="text-xs font-medium text-brand-text mb-1.5 block">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            {...register('message', { required: 'Message is required' })}
                            className="flex min-h-[80px] w-full border px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white border-brand-secondary focus:border-brand-primary focus:ring-brand-primary/20 resize-none rounded-3xl"
                            placeholder="Tell us about your order or inquiry..."
                          />
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-primary hover:bg-brand-primary/90 disabled:bg-gray-400 text-white px-6 py-3 w-full h-12 justify-center font-medium rounded-full border-0 transition-colors"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                Send Message
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Email</h3>
                  <a href="mailto:anjalibenchakriwala@gmail.com" className="text-sm text-brand-text-light hover:text-brand-primary transition-colors">
                    anjalibenchakriwala@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Phone / WhatsApp</h3>
                  <a href="tel:+918460078518" className="text-sm text-brand-text-light hover:text-brand-primary transition-colors">
                    +91 84600 78518
                  </a>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Delivery</h3>
                  <p className="text-sm text-brand-text-light">
                    PAN India delivery available<br />
                    3-7 business days
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-3xl border border-brand-secondary bg-brand-bg-light p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-brand-primary" />
                  <h3 className="font-semibold text-brand-text text-sm">Business Hours</h3>
                </div>
                <div className="space-y-2 text-xs text-brand-text-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-brand-text">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-brand-text">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-brand-text">Closed</span>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="rounded-3xl border border-brand-secondary bg-brand-bg-light p-4 shadow-sm">
                <h3 className="font-semibold text-brand-text text-sm mb-3">Why Order From Us?</h3>
                <ul className="space-y-2 text-xs text-brand-text-light">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> 100% Vegetarian & Jain Options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> No Preservatives Added
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Fresh Handmade Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Secure Packaging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Bulk Orders Available
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
