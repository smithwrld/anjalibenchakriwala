
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Heart, ChefHat, Wheat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-5xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Our Story</h1>
          <p className="mt-4 text-lg text-brand-text-light max-w-3xl mx-auto">
            From our family kitchen to yours, a tradition of taste and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://picsum.photos/seed/founder/800/1000" 
              alt="Anjali Benchakriwala" 
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif font-semibold text-brand-primary mb-4">Meet Anjali</h2>
            <p className="text-brand-text-light mb-4 leading-relaxed">
              Anjali's passion for cooking began at a young age, learning the art of making traditional Indian snacks from her mother and grandmother. The star of her culinary repertoire has always been the 'chakri' – a snack that's simple in its ingredients but complex in its perfection.
            </p>
            <p className="text-brand-text-light leading-relaxed">
              What started as a cherished family recipe, shared during festivals and special occasions, soon became a local sensation. Friends and neighbors couldn't get enough of her perfectly crisp and flavorful chakris. Encouraged by their love and support, Anjali decided to share her gift with the world, and thus, Anjali's Chakriwala was born.
            </p>
          </motion.div>
        </div>

        <div className="py-24">
          <h2 className="text-3xl font-serif font-bold text-center text-brand-text mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-secondary/50 p-4 rounded-full">
                  <Heart className="text-brand-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Authenticity</h3>
              <p className="text-brand-text-light text-sm">We stay true to our roots, using timeless recipes passed down through generations.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-sm">
              <div className="flex justify-center mb-4">
                 <div className="bg-brand-secondary/50 p-4 rounded-full">
                   <Wheat className="text-brand-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Quality Ingredients</h3>
              <p className="text-brand-text-light text-sm">We handpick the finest, all-natural ingredients to ensure exceptional taste and freshness.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-sm">
              <div className="flex justify-center mb-4">
                 <div className="bg-brand-secondary/50 p-4 rounded-full">
                   <ChefHat className="text-brand-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Handcrafted with Love</h3>
              <p className="text-brand-text-light text-sm">Every batch is made by hand with the utmost care, ensuring perfection in every bite.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
