
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Heart, ChefHat, Wheat, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-gradient-to-r min-h-screen">
        {/* Meet Anjali Section - First Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              <img 
                src="/anjumemlogo2.png" 
                alt="Anjali Benchakriwala" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="order-1 md:order-2 space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-text leading-tight">
                Meet Anjali
              </h1>
              <p className="text-base sm:text-lg text-brand-text-light leading-relaxed">
                Anjali's passion for cooking began at a young age, learning the art of making traditional Indian snacks from her mother and grandmother. The star of her culinary repertoire has always been the 'chakri' – a snack that's simple in its ingredients but complex in its perfection.
              </p>
              <p className="text-base sm:text-lg text-brand-text-light leading-relaxed">
                What started as a cherished family recipe, shared during festivals and special occasions, soon became a local sensation. Friends and neighbors couldn't get enough of her perfectly crisp and flavorful chakris. Encouraged by their love and support, Anjali decided to share her gift with the world, and thus, Anjali's Chakriwala was born.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-text mb-3">Our Journey</h2>
            <p className="text-base sm:text-lg text-brand-text-light max-w-2xl mx-auto">
              From humble beginnings to becoming a beloved brand
            </p>
          </motion.div>

          <div className="relative">
            {/* Minimalist dashed connecting line */}
            <div className="absolute left-3 top-8 bottom-0 w-px border-l border-dashed border-brand-secondary"></div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-12"
              >
                {/* Connected dot on line */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-primary rounded-full shadow-md"></div>
                
                <div className="rounded-2xl p-5 border border-brand-secondary/30">
                  <h3 className="text-base font-serif font-semibold text-brand-text mb-2">The Beginning</h3>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    Every great story starts with a dream! Anjali's journey began in her family's kitchen, where generations of culinary wisdom were passed down through recipes, techniques, and most importantly, love.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-12"
              >
                {/* Connected dot on line */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-primary rounded-full shadow-md"></div>
                
                <div className="rounded-2xl p-5 border border-brand-secondary/30">
                  <h3 className="text-base font-serif font-semibold text-brand-text mb-2">Growing Recognition</h3>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    Word spread quickly through the community about Anjali's exceptional chakris. What began as sharing with close friends and family soon turned into requests from neighbors and colleagues.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-12"
              >
                {/* Connected dot on line */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-primary rounded-full shadow-md"></div>
                
                <div className="rounded-2xl p-5 border border-brand-secondary/30">
                  <h3 className="text-base font-serif font-semibold text-brand-text mb-2">Today</h3>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    Today, Anjali's Chakriwala stands as a testament to tradition, quality, and passion. Every product is handcrafted with the same care and attention to detail.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-text mb-3">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <Heart className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Authenticity</h3>
              <p className="text-sm text-brand-text-light leading-relaxed">
                We stay true to our roots, using timeless recipes passed down through generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <Wheat className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Quality Ingredients</h3>
              <p className="text-sm text-brand-text-light leading-relaxed">
                We handpick the finest, all-natural ingredients to ensure exceptional taste and freshness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <ChefHat className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Handcrafted with Love</h3>
              <p className="text-sm text-brand-text-light leading-relaxed">
                Every batch is made by hand with utmost care and attention to detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text mb-4">Why Choose Us</h2>
            <p className="text-base text-brand-text-light max-w-2xl mx-auto">
              What makes Anjali's Chakriwala different
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-secondary">
                  <Sparkles className="text-brand-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">Traditional Recipes</h3>
                <p className="text-sm text-brand-text-light">Recipes perfected over decades, maintaining the authentic taste that defines our brand.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-secondary">
                  <Sparkles className="text-brand-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">No Preservatives</h3>
                <p className="text-sm text-brand-text-light">Fresh, natural ingredients with no artificial additives or preservatives. Pure goodness in every bite.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-secondary">
                  <Sparkles className="text-brand-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">Small Batch Production</h3>
                <p className="text-sm text-brand-text-light">We produce in small batches to ensure quality control and freshness in every package.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-secondary">
                  <Sparkles className="text-brand-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">Customer Passion</h3>
                <p className="text-sm text-brand-text-light">We genuinely care about our customers and their satisfaction is our greatest reward.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-brand-secondary bg-white p-12 text-center shadow-sm"
          >
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-4">Experience the Difference</h2>
            <p className="text-base text-brand-text-light mb-8 max-w-2xl mx-auto">
              Taste the tradition, quality, and love that goes into every product. Join our growing family of satisfied customers who believe in authentic, handcrafted goodness.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
