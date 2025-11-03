
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const productList = [
  { name: 'Classic Spiral Chakri', description: 'The original, timeless recipe. Perfectly seasoned and irresistibly crunchy.', price: '₹150', imageSeed: 'classic' },
  { name: 'Spicy Masala Chakri', description: 'A fiery twist on the classic, infused with a blend of exotic Indian spices.', price: '₹160', imageSeed: 'spicy' },
  { name: 'Methi (Fenugreek) Chakri', description: 'Aromatic and flavorful, with the subtle bitterness of fenugreek leaves.', price: '₹160', imageSeed: 'methi' },
  { name: 'Garlic Chakri', description: 'A savory delight for garlic lovers, offering a pungent and delicious kick.', price: '₹160', imageSeed: 'garlic' },
  { name: 'Whole Wheat Chakri', description: 'A healthier option made with whole wheat flour, without compromising on taste.', price: '₹170', imageSeed: 'wheat' },
  { name: 'Butter Chakri', description: 'Rich and buttery, this variation melts in your mouth with its smooth flavor.', price: '₹180', imageSeed: 'butter' },
];

const Products: React.FC = () => {
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
          {productList.map((product, index) => (
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
                  src={`https://picsum.photos/seed/${product.imageSeed}/600/400`} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-semibold text-brand-text mb-2">{product.name}</h3>
                <p className="text-brand-text-light text-sm mb-4 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-semibold text-brand-primary">{product.price} <span className="text-sm font-normal text-brand-text-light">/ 250g</span></span>
                  <button className="px-5 py-2 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300 transform group-hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Products;
