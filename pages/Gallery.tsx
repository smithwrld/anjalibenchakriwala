
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, seed: 'chakri-close-up', w: 4, h: 3 },
  { id: 2, seed: 'making-dough', w: 3, h: 4 },
  { id: 3, seed: 'frying-process', w: 3, h: 4 },
  { id: 4, seed: 'spices-array', w: 4, h: 3 },
  { id: 5, seed: 'packaging', w: 4, h: 3 },
  { id: 6, seed: 'happy-customer', w: 3, h: 4 },
  { id: 7, seed: 'chakri-bowl', w: 3, h: 4 },
  { id: 8, seed: 'ingredients-flatlay', w: 4, h: 3 },
  { id: 9, seed: 'tea-time-snack', w: 4, h: 3 },
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
                src={`https://picsum.photos/seed/${image.seed}/${image.w * 150}/${image.h * 150}`}
                alt={`Gallery image ${image.id}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Gallery;
