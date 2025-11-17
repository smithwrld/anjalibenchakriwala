
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wind } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#B98B73',
    fontWeight: 600
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative flex items-center justify-between h-16 rounded-2xl bg-white/40 backdrop-blur-lg px-6 border border-black/0 shadow-md">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Anjaliben Chakriwala" 
              className="h-14 w-auto object-contain"
            />
          </NavLink>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-brand-text-light hover:text-brand-primary transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text hover:text-brand-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-24 left-4 right-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-lg font-medium text-brand-text-light hover:text-brand-primary transition-colors duration-300"
                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
