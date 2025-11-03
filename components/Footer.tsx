
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Wind } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-transparent text-brand-text-light mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-serif font-bold text-brand-primary mb-4">
                <Wind className="h-6 w-6" />
                <span>Anjali's Chakriwala</span>
            </NavLink>
            <p className="text-sm">Authentic namkeen, handcrafted with love and tradition.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-brand-text mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-brand-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/products" className="hover:text-brand-primary transition-colors">Our Products</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-brand-primary transition-colors">Gallery</NavLink></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-brand-text mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/blog" className="hover:text-brand-primary transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-primary transition-colors">Contact Us</NavLink></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-brand-text mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Get the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm rounded-l-md border border-brand-secondary/50 focus:ring-brand-primary focus:border-brand-primary bg-white/50" />
              <button className="bg-brand-primary text-white px-4 rounded-r-md hover:bg-opacity-90 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-secondary/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Anjali's Chakriwala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
