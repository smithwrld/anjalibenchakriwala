
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';
import { TestimonialsColumn, testimonials } from '../components/ui/testimonials-columns';
import DatabaseWithRestApi from '../components/ui/database-with-rest-api';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[65vh] py-12 md:py-20 flex items-center overflow-hidden">
          <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-lg mx-auto text-center md:text-left md:mx-0"
            >
              {/* Small tagline */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-sm font-medium tracking-wider text-brand-primary uppercase mb-6"
              >
                Handcrafted with Love
              </motion.span>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brand-text leading-tight mb-6">
                The Authentic Taste of
                <span className="block mt-2 font-medium text-brand-primary">Traditional Chakri</span>
              </h1>

              {/* Divider line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[2px] bg-brand-primary md:mx-0 mx-auto mb-8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-brand-text-light font-light leading-relaxed max-w-xl mx-auto md:mx-0"
              >
                Experience the crispy, savory delight of traditional namkeen,
                made from generations-old recipes with the finest ingredients.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-12 flex flex-wrap justify-center md:justify-start gap-4"
              >
                <NavLink
                  to="/products"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
                <NavLink
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-brand-text font-medium rounded-lg border-2 border-brand-text/20 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                >
                  Our Story
                </NavLink>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative max-w-sm mx-auto">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-full bg-brand-primary/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-full bg-black/10 shadow-2xl">
                  <img
                    src="/chakri-image-2.png"
                    alt="Golden spiral chakri snack on black background"
                    className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wider text-brand-primary uppercase mb-3"
            >
              Premium Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-light text-brand-text mb-4"
            >
              Our Signature Snacks
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Classic Spiral Chakri',
                description: 'Traditional recipe with perfect spiral texture and authentic taste',
                price: '₹180',
                weight: '250g',
                image: '/chakri-image-removebg-preview.png'
              },
              {
                name: 'Spicy Masala Chakri',
                description: 'Bold flavors with aromatic spices for the adventurous palate',
                price: '₹200',
                weight: '250g',
                image: '/chakri-image-removebg-preview.png'
              },
              {
                name: 'Methi Chakri',
                description: 'Nutritious fenugreek leaves blended with traditional craftsmanship',
                price: '₹220',
                weight: '250g',
                image: '/chakri-image-removebg-preview.png'
              }
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 * i }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-brand-bg-light/80 backdrop-blur-lg rounded-2xl p-6 border border-black/20 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-bg-light/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Product Image Container */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 p-4 mb-4 overflow-hidden border border-black/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Price Badge */}
                    <div className="absolute -top-1 -right-1 bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-black/10">
                      {product.price}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg md:text-xl font-serif font-medium text-brand-text mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-brand-text-light text-xs leading-relaxed mb-3 max-w-xs mx-auto">
                      {product.description}
                    </p>

                    {/* Weight and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full border border-black/5">
                        {product.weight}
                      </span>
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="currentColor" size={12} className="mr-0.5" />
                        ))}
                        <span className="text-xs text-brand-text-light ml-1">5.0</span>
                      </div>
                    </div>

                    {/* WhatsApp Order Button */}
                    <WhatsAppOrderButton
                      productName={product.name}
                      price={product.price}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Order Management System */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wider text-brand-primary uppercase mb-3"
            >
              Seamless Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-light text-brand-text mb-4"
            >
              From Kitchen to Your Doorstep
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <DatabaseWithRestApi
              className="mx-auto"
              circleText="API"
              badgeTexts={{
                first: "Browse",
                second: "Order",
                third: "Prepare",
                fourth: "Deliver"
              }}
              buttonTexts={{
                first: "Anjali's Chakriwala",
                second: "Fresh_Daily"
              }}
              title="Handcrafted chakri from our kitchen to your home - tracked in real-time"
              lightColor="#B98B73"
            />
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wider text-brand-primary uppercase mb-3"
            >
              Customer Reviews
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-light text-brand-text mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto"
            />
          </div>

          <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn
              testimonials={testimonials.slice(0, 3)}
              duration={20}
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(3, 6)}
              className="hidden md:block"
              duration={25}
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(6, 9)}
              className="hidden lg:block"
              duration={22}
            />
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
