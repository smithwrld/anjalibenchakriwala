
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart, Award, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { HoverPeek } from './ui/link-preview';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Products', path: '/products' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Blog', path: '/blog' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '#' },
      { name: 'Shipping Info', path: '#' },
      { name: 'Returns', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative z-10 mt-20 pb-28">
      {/* No background - inherit from parent */}

      <div className="relative">
        {/* Elegant Top Border */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">

              {/* Brand Section - Spans 4 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <NavLink to="/" className="inline-block mb-4">
                  <img
                    src="/logo.png"
                    alt="Anjaliben Chakriwala"
                    className="h-14 w-auto object-contain"
                  />
                </NavLink>

                <h3 className="text-lg font-serif font-light text-brand-text mb-3">
                  Crafting Tradition, One Chakri at a Time
                </h3>

                <p className="text-brand-text-light leading-relaxed mb-6 max-w-sm text-sm">
                  Experience the authentic taste of traditional namkeen, handcrafted with love using
                  generations-old recipes and the finest ingredients.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white/20 backdrop-blur-lg border border-black/10 rounded-lg px-3 py-2 min-w-[140px]"
                  >
                    <Award className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                    <span className="text-xs text-brand-text-light whitespace-nowrap">Premium Quality</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white/20 backdrop-blur-lg border border-black/10 rounded-lg px-3 py-2 min-w-[140px]"
                  >
                    <Shield className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                    <span className="text-xs text-brand-text-light whitespace-nowrap">100% Natural</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white/20 backdrop-blur-lg border border-black/10 rounded-lg px-3 py-2 min-w-[140px]"
                  >
                    <Truck className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                    <span className="text-xs text-brand-text-light whitespace-nowrap">Fast Delivery</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white/20 backdrop-blur-lg border border-black/10 rounded-lg px-3 py-2 min-w-[140px]"
                  >
                    <Heart className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                    <span className="text-xs text-brand-text-light whitespace-nowrap">Handcrafted</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Navigation Links - Spans 6 columns */}
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Explore */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="relative">
                    <h4 className="font-serif font-medium text-brand-text mb-3 text-base relative">
                      Explore
                      <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-primary to-transparent"></div>
                    </h4>
                    <ul className="space-y-2">
                      {footerLinks.explore.map((link, index) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavLink
                            to={link.path}
                            className="text-brand-text-light hover:text-brand-primary transition-all duration-300 text-sm group flex items-center relative overflow-hidden"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                              {link.name}
                            </span>
                            <div className="absolute inset-0 bg-brand-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
                          </NavLink>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative">
                    <h4 className="font-serif font-medium text-brand-text mb-3 text-base relative">
                      Support
                      <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-primary to-transparent"></div>
                    </h4>
                    <ul className="space-y-2">
                      {footerLinks.support.map((link, index) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavLink
                            to={link.path}
                            className="text-brand-text-light hover:text-brand-primary transition-all duration-300 text-sm group flex items-center relative overflow-hidden"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                              {link.name}
                            </span>
                            <div className="absolute inset-0 bg-brand-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
                          </NavLink>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative">
                    <h4 className="font-serif font-medium text-brand-text mb-3 text-base relative">
                      Get in Touch
                      <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-primary to-transparent"></div>
                    </h4>

                    {/* Contact Details */}
                    <div className="space-y-3 mb-6">
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center text-brand-text-light group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-full bg-white/50 backdrop-blur-lg border border-black/10 shadow-sm flex items-center justify-center mr-3 shrink-0 transition-colors duration-300 group-hover:bg-white/70">
                          <Phone className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="text-sm group-hover:text-brand-primary transition-colors duration-300">+91 84600 78518</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center text-brand-text-light group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-full bg-white/50 backdrop-blur-lg border border-black/10 shadow-sm flex items-center justify-center mr-3 shrink-0 transition-colors duration-300 group-hover:bg-white/70">
                          <Mail className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="text-sm group-hover:text-brand-primary transition-colors duration-300">anjalibenchakriwala@gmail.com</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center text-brand-text-light group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-full bg-white/50 backdrop-blur-lg border border-black/10 shadow-sm flex items-center justify-center mr-3 shrink-0 transition-colors duration-300 group-hover:bg-white/70">
                          <MapPin className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="text-sm group-hover:text-brand-primary transition-colors duration-300">Traditional Kitchen, Gujarat, India</span>
                      </motion.div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <p className="text-xs text-brand-text-light mb-3 font-medium">Follow Us</p>
                      <div className="flex space-x-3">
                        {socialLinks.map(({ icon: Icon, href, label }, index) => (
                          <motion.a
                            key={label}
                            href={href}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg border border-black/10 rounded-full flex items-center justify-center text-brand-text-light hover:text-white hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
                            aria-label={label}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary/80 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                            <Icon size={16} className="relative z-10" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          {/* Bottom Section */}
          <div className="border-t border-brand-text-light/10 pt-8 pb-8">
            <div className="flex flex-col gap-6">

              {/* Row 1: Copyright & Legal */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-brand-text-light text-sm"
                >
                  &copy; {currentYear} Anjaliben Chakriwala. All rights reserved.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap justify-center md:justify-end gap-6"
                >
                  {footerLinks.legal.map((link, index) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className="text-brand-text-light hover:text-brand-primary transition-colors text-sm relative group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Credits (Origin & Agency) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm text-brand-text-light/80"
              >
                <div className="flex items-center">
                </div>

                <span className="hidden md:block w-1 h-1 rounded-full bg-brand-secondary"></span>

                <div className="flex items-center gap-1.5">
                  <span className="opacity-80">Made With 💗 By </span>
                  <HoverPeek
                    url="https://www.somethingmedia.in/"
                    isStatic
                    imageSrc="/somethingmedia.png"
                    className="font-medium text-brand-text hover:text-brand-primary transition-colors cursor-pointer border-b border-brand-primary/20 hover:border-brand-primary"
                  >
                    Something Media
                  </HoverPeek>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
