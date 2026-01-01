import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Product } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, product }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const phoneNumber = '918460078518'; // Target WhatsApp number

  useEffect(() => {
    if (isOpen && product) {
      setName('');
      setNumber('');
      // Set default weight to first option
      setSelectedWeight(product.weightOptions[0]?.weight || '');
    }
  }, [isOpen, product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !name || !number || !selectedWeight) return;

    const selectedOption = product.weightOptions.find(opt => opt.weight === selectedWeight);
    const price = selectedOption?.price || '';

    const message = `Hello! I'm interested in your product: *${product.name}*

📦 *Selected Size:* ${selectedWeight} - ${price}
📋 *Ingredients:* ${product.ingredients}
${product.specialNote ? `✨ *Special:* ${product.specialNote}\n` : ''}
👤 *My Details:*
Name: ${name}
Number: ${number}

Please get in touch with me.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: -50, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-brand-bg-light rounded-2xl shadow-xl p-8 border border-white/20"
            variants={modalVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text-light hover:text-brand-primary transition-colors"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-serif font-bold text-brand-text mb-2">Enquiry for</h2>
            <p className="text-lg font-semibold text-brand-primary mb-6">{product.name}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="enquiry-name" className="block text-sm font-medium text-brand-text-light">Your Name</label>
                <input
                  type="text"
                  id="enquiry-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full bg-white/50 border-brand-secondary/50 rounded-md shadow-sm py-3 px-4 focus:border-brand-primary focus:ring-brand-primary"
                  placeholder="e.g., Priya Patel"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-brand-text-light mb-2">Select Size</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => document.getElementById('weight-dropdown')?.classList.toggle('hidden')}
                    onBlur={() => setTimeout(() => document.getElementById('weight-dropdown')?.classList.add('hidden'), 200)}
                    className="flex items-center justify-between w-full bg-white/70 border border-brand-secondary/30 rounded-2xl shadow-sm py-3.5 px-5 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 text-brand-text font-medium cursor-pointer hover:border-brand-primary/50 text-left"
                  >
                    <span>
                      {product?.weightOptions.find(opt => opt.weight === selectedWeight)
                        ? `${product.weightOptions.find(opt => opt.weight === selectedWeight)?.weight} - ${product.weightOptions.find(opt => opt.weight === selectedWeight)?.price}`
                        : 'Select a size'}
                    </span>
                    <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Custom Dropdown Options */}
                  <div
                    id="weight-dropdown"
                    className="hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-brand-secondary/20 overflow-hidden z-20 origin-top"
                  >
                    {product?.weightOptions.map((option, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedWeight(option.weight);
                          document.getElementById('weight-dropdown')?.classList.add('hidden');
                        }}
                        className={`px-5 py-3 cursor-pointer transition-colors duration-150 flex justify-between items-center ${selectedWeight === option.weight
                          ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                          : 'text-brand-text hover:bg-gray-50'
                          }`}
                      >
                        <span>{option.weight}</span>
                        <span className={`${selectedWeight === option.weight ? 'text-brand-primary' : 'text-brand-text-light'}`}>
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="enquiry-number" className="block text-sm font-medium text-brand-text-light">Your Phone Number</label>
                <input
                  type="tel"
                  id="enquiry-number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className="mt-1 block w-full bg-white/50 border-brand-secondary/50 rounded-md shadow-sm py-3 px-4 focus:border-brand-primary focus:ring-brand-primary"
                  placeholder="e.g., 9876543210"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors disabled:bg-gray-400"
                  disabled={!name || !number}
                >
                  Send Enquiry on WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
