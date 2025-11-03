
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center flex flex-col items-center justify-center min-h-[60vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-text leading-tight"
          >
            The Authentic Taste of<br/>
            <span className="text-brand-primary">Handcrafted Chakri</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-brand-text-light"
          >
            Experience the crispy, savory delight of traditional namkeen, made from generations-old recipes with the finest ingredients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <NavLink to="/products" className="group inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Explore Products <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
            <NavLink to="/about" className="group inline-flex items-center justify-center px-8 py-3 bg-white/60 text-brand-text font-semibold rounded-full shadow-lg backdrop-blur-sm hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
              Our Story
            </NavLink>
          </motion.div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Signature Snacks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Classic Spiral Chakri', 'Spicy Masala Chakri', 'Methi (Fenugreek) Chakri'].map((product, i) => (
              <motion.div
                key={product}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img src={`https://picsum.photos/seed/${product}/400/300`} alt={product} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-semibold text-brand-text mb-2">{product}</h3>
                <p className="text-brand-text-light text-sm mb-4">Crispy, flavorful, and irresistibly delicious.</p>
                <div className="flex justify-center text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
           <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Priya S.', quote: "Absolutely the best chakri I've had outside of my grandmother's kitchen! The texture and taste are perfect." },
                { name: 'Rohan M.', quote: "The spicy masala chakri is addictive. Perfect snack for any time of the day. Highly recommended!" }
              ].map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-sm"
                  >
                    <Quote className="text-brand-primary mb-4" size={32} />
                    <p className="text-brand-text-light mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold text-brand-text">{testimonial.name}</p>
                  </motion.div>
              ))}
           </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
