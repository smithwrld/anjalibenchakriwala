
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/images/Chakri.jpg', alt: 'Traditional Chakri - Spiral snack with perfect seasoning', w: 4, h: 3 },
  { id: 2, src: '/images/Joy stick.jpg', alt: 'Joy Stick - Crunchy wheat sticks with spices', w: 3, h: 4 },
  { id: 3, src: '/images/Kathol stick.jpg', alt: 'Kathol Stick - Protein-rich dal sticks', w: 4, h: 3 },
  { id: 4, src: '/images/Bhakharwadi.jpg', alt: 'Bhakharwadi - Classic Gujarati sweet and spicy snack', w: 3, h: 4 },
  { id: 5, src: '/images/Sakarpara.jpg', alt: 'Sakarpara - Sweet and crispy diamond-shaped treats', w: 4, h: 3 },
  { id: 6, src: '/images/Jain Soya stick.jpg', alt: 'Soya Stick - Healthy soya sticks with Manchurian flavor', w: 3, h: 4 },
  { id: 7, src: '/images/Sing bhujiya.jpg', alt: 'Sing Bhujiya - Crunchy peanut bhujiya with aromatic spices', w: 4, h: 3 },
  { id: 8, src: '/images/Roasted Maggie chips.jpg', alt: 'Roasted Maggie Chips - Crispy chips with popular Maggie flavor', w: 3, h: 4 },
];

const Gallery: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">A Feast for the Eyes</h1>
          <p className="mt-4 text-lg text-brand-text-light max-w-3xl mx-auto">
            Explore the craft, the ingredients, and the joy behind our creations.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Gallery;
