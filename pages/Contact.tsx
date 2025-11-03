
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Get in Touch</h1>
          <p className="mt-4 text-lg text-brand-text-light max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or a large order query, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/40 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-brand-text mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-light">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full bg-white/50 border-brand-secondary/50 rounded-md shadow-sm py-3 px-4 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-light">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full bg-white/50 border-brand-secondary/50 rounded-md shadow-sm py-3 px-4 focus:border-brand-primary focus:ring-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text-light">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full bg-white/50 border-brand-secondary/50 rounded-md shadow-sm py-3 px-4 focus:border-brand-primary focus:ring-brand-primary"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-lg flex items-start space-x-4">
              <div className="flex-shrink-0 bg-brand-secondary/50 p-4 rounded-full">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text">Email</h3>
                <p className="text-brand-text-light">For inquiries, support, and feedback.</p>
                <a href="mailto:hello@anjalibenchakriwala.com" className="text-brand-primary hover:underline">hello@anjalibenchakriwala.com</a>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-lg flex items-start space-x-4">
              <div className="flex-shrink-0 bg-brand-secondary/50 p-4 rounded-full">
                <Phone className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text">Phone</h3>
                <p className="text-brand-text-light">For bulk orders and direct contact.</p>
                <a href="tel:+911234567890" className="text-brand-primary hover:underline">+91 12345 67890</a>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-lg flex items-start space-x-4">
              <div className="flex-shrink-0 bg-brand-secondary/50 p-4 rounded-full">
                <MapPin className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text">Our Kitchen</h3>
                <p className="text-brand-text-light">123 Savory Lane, Namkeen Nagar,<br />Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
