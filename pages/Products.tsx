import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryModal from '../components/EnquiryModal';
import type { Product } from '../types';

const productList: Product[] = [
  { name: 'Classic Spiral Chakri', description: 'The original, timeless recipe. Perfectly seasoned and irresistibly crunchy.', price: '₹150', imageSeed: '/images/product_1.jpg' },
  { name: 'Spicy Masala Chakri', description: 'A fiery twist on the classic, infused with a blend of exotic Indian spices.', price: '₹160', imageSeed: '/images/product_2.jpg' },
  { name: 'Methi (Fenugreek) Chakri', description: 'Aromatic and flavorful, with the subtle bitterness of fenugreek leaves.', price: '₹160', imageSeed: '/images/product_3.jpg' },
  { name: 'Garlic Chakri', description: 'A savory delight for garlic lovers, offering a pungent and delicious kick.', price: '₹160', imageSeed: '/images/product_4.jpg' },
  { name: 'Whole Wheat Chakri', description: 'A healthier option made with whole wheat flour, without compromising on taste.', price: '₹170', imageSeed: '/images/product_5.jpg' },
  { name: 'Savory Golden Bites', description: 'Delightful golden bites with a perfect crunch and savory seasoning.', price: '₹140', imageSeed: '/images/product_6.jpg' },
  { name: 'Masala Roasted Peanuts', description: 'Premium roasted peanuts coated with a special blend of spices.', price: '₹120', imageSeed: '/images/product_7.jpg' },
  { name: 'Crispy Masala Sticks', description: 'Crunchy, spicy sticks perfect for tea-time snacking.', price: '₹130', imageSeed: '/images/product_8.jpg' },
];

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquiryClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Our Delicious Offerings</h1>
          <p className="mt-4 text-lg text-brand-text-light max-w-3xl mx-auto">
            Each piece is a testament to our commitment to quality and authentic taste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {productList.map((product, index) => {
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.imageSeed}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-semibold text-brand-text mb-2">{product.name}</h3>
                  <p className="text-brand-text-light text-sm mb-4 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-semibold text-brand-primary">{product.price} <span className="text-sm font-normal text-brand-text-light">/ 250g</span></span>
                    <button
                      onClick={() => handleEnquiryClick(product)}
                      className="inline-flex items-center justify-center px-4 py-2 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300 transform group-hover:scale-105 text-sm"
                    >
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      WhatsApp Enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </AnimatedPage>
  );
};

export default Products;
