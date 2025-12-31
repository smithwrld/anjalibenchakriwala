import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryModal from '../components/EnquiryModal';
import type { Product } from '../types';

const productList: Product[] = [
  {
    name: 'Chakri',
    description: 'Traditional spiral snack with perfect seasoning and irresistible crunch.',
    weightOptions: [
      { weight: '200gm', price: '₹70' },
      { weight: '400gm', price: '₹140' }
    ],
    ingredients: 'wheat flour, salt, chilly powder, ajwain, til, edible oil',
    imageSeed: '/images/Chakri.jpg'
  },
  {
    name: 'Joy Stick',
    description: 'Crunchy wheat sticks with a perfect blend of spices.',
    weightOptions: [
      { weight: '250gm', price: '₹80' },
      { weight: '500gm', price: '₹150' }
    ],
    ingredients: 'wheat flour, chilly powder, haldi, salt, aamchur powder, edible oil',
    imageSeed: '/images/Joy stick.jpg'
  },
  {
    name: 'Kathol Stick',
    description: 'Protein-rich dal sticks with a savory and tangy flavor.',
    weightOptions: [
      { weight: '250gm', price: '₹80' },
      { weight: '500gm', price: '₹150' }
    ],
    ingredients: 'udad dal, soyabean, dal, tropicano, mung, black pepper, salt, aamchuran, edible oil',
    imageSeed: '/images/Kathol stick.jpg'
  },
  {
    name: 'Bhakharwadi',
    description: 'Classic Gujarati snack with sweet and spicy filling.',
    weightOptions: [
      { weight: '250gm', price: '₹80' },
      { weight: '500gm', price: '₹150' }
    ],
    ingredients: 'maida, salt, haldi, dhana, mirch powder, garam masala, varyali, imily, jaggery, edible oil',
    imageSeed: '/images/Bhakharwadi.jpg'
  },
  {
    name: 'Sakarpara',
    description: 'Sweet and crispy diamond-shaped treats.',
    weightOptions: [
      { weight: '200gm', price: '₹80' },
      { weight: '400gm', price: '₹150' }
    ],
    ingredients: 'wheat flour, maida, sugar, edible oil',
    imageSeed: '/images/Sakarpara.jpg',
    specialNote: 'Kathiyawadi authentic taste'
  },
  {
    name: 'Soya Stick',
    description: 'Healthy soya-based sticks with Manchurian flavor.',
    weightOptions: [
      { weight: '250gm', price: '₹80' },
      { weight: '500gm', price: '₹150' }
    ],
    ingredients: 'soyabean, tropicano, salt, mirch powder, black pepper, aamchuran, manchurian masala, edible oil',
    imageSeed: '/images/Jain Soya stick.jpg'
  },
  {
    name: 'Sing Bhujiya',
    description: 'Crunchy peanut bhujiya with aromatic spices.',
    weightOptions: [
      { weight: '250gm', price: '₹80' },
      { weight: '500gm', price: '₹150' }
    ],
    ingredients: 'peanuts, besan, black pepper, salt, aamchuran, edible oil',
    imageSeed: '/images/Sing bhujiya.jpg'
  },
  {
    name: 'Maggie Chips',
    description: 'Crispy chips with popular Maggie flavor.',
    weightOptions: [
      { weight: '180gm', price: '₹100' }
    ],
    ingredients: 'soyabean, tropicano, maggie masala, salt, 0.01% edible oil',
    imageSeed: '/images/Roasted Maggie chips.jpg'
  },
  {
    name: 'Pudina Chips',
    description: 'Refreshing mint-flavored crispy chips.',
    weightOptions: [
      { weight: '180gm', price: '₹100' }
    ],
    ingredients: 'soyabean, tropicano, pudina masala, black pepper, salt, 0.01% edible oil',
    imageSeed: '/images/Roasted Maggie chips.jpg'
  }
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
                  <p className="text-brand-text-light text-sm mb-3">{product.description}</p>
                  {product.specialNote && (
                    <p className="text-brand-primary text-xs italic mb-2">"{product.specialNote}"</p>
                  )}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-brand-text mb-1">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.weightOptions.map((option, idx) => (
                        <span key={idx} className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">
                          {option.weight} - {option.price}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-brand-text mb-1">Ingredients:</p>
                    <p className="text-xs text-brand-text-light italic">{product.ingredients}</p>
                  </div>
                  <div className="flex justify-end items-center mt-auto">
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
