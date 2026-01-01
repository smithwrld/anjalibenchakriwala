
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Heart, ChefHat, Wheat, Sparkles, Leaf, Truck, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const About: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
    { name: 'About Us', url: 'https://anjalibenchakriwala.com/about' }
  ];

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="About Anjaliben Chakriwala | Traditional Gujarati Snacks Story | Homemade Quality"
        description="Discover the story of Anjaliben Chakriwala - a family legacy of handcrafting authentic Gujarati snacks. Learn about our traditional recipes, quality ingredients, and commitment to preservative-free homemade namkeen."
        keywords="about anjaliben chakriwala, gujarati snacks story, homemade snacks brand, traditional snack makers india, authentic namkeen brand, family snack business"
        canonicalUrl="https://anjalibenchakriwala.com/about"
        ogImage="/anjumemlogo2.png"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-gradient-to-r min-h-screen">
        {/* Breadcrumb */}
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-4 text-sm text-brand-text-light">
          <NavLink to="/" className="hover:text-brand-primary">Home</NavLink>
          <span className="mx-2">/</span>
          <span className="text-brand-text">About Us</span>
        </nav>

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
                src="/anjalibenchakriwalaa.jpeg"
                alt="Anjali Benchakriwala - Founder of Anjaliben Chakriwala traditional Gujarati snacks brand"
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
                Meet Anjali - The Heart Behind Our Snacks
              </h1>
              <p className="text-base sm:text-lg text-brand-text-light leading-relaxed">
                Anjali's passion for cooking began at a young age, learning the art of making traditional Indian snacks from her mother and grandmother. The star of her culinary repertoire has always been the 'chakri' – a snack that's simple in its ingredients but complex in its perfection.
              </p>
              <p className="text-base sm:text-lg text-brand-text-light leading-relaxed">
                What started as a cherished family recipe, shared during festivals and special occasions, soon became a local sensation. Friends and neighbors couldn't get enough of her perfectly crisp and flavorful chakris. Encouraged by their love and support, Anjali decided to share her gift with the world, and thus, <strong>Anjaliben Chakriwala</strong> was born.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-brand-secondary/30">
              <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-brand-text">100% Vegetarian</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-brand-secondary/30">
              <Shield className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-brand-text">No Preservatives</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-brand-secondary/30">
              <Truck className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-brand-text">PAN India Delivery</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-brand-secondary/30">
              <Sparkles className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-brand-text">Jain Friendly Options</p>
            </div>
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
              From humble beginnings to becoming a beloved Gujarati snacks brand
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
                  <h3 className="text-base font-serif font-semibold text-brand-text mb-2">Today - PAN India Delivery</h3>
                  <p className="text-sm text-brand-text-light leading-relaxed">
                    Today, Anjaliben Chakriwala stands as a testament to tradition, quality, and passion. We deliver our authentic Gujarati snacks to customers across India - from Mumbai to Delhi, Bangalore to Chennai, and everywhere in between.
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
                We stay true to our roots, using timeless recipes passed down through generations of Gujarati families.
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
                We handpick the finest, all-natural ingredients to ensure exceptional taste and freshness in every batch.
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
                Every batch is made by hand with utmost care and attention to detail, just like homemade.
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text mb-4">Why Choose Anjaliben Chakriwala?</h2>
            <p className="text-base text-brand-text-light max-w-2xl mx-auto">
              What makes our Gujarati snacks different from store-bought alternatives
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
                <p className="text-sm text-brand-text-light">Recipes perfected over decades, maintaining the authentic Kathiyawadi and Gujarati taste.</p>
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
                <p className="text-sm text-brand-text-light">Fresh, natural ingredients with no artificial additives. Pure, preservative-free goodness.</p>
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
                <p className="text-sm text-brand-text-light">We produce in small batches to ensure quality control and freshness in every order.</p>
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
                <h3 className="text-lg font-semibold text-brand-text mb-2">Jain & Vegetarian Friendly</h3>
                <p className="text-sm text-brand-text-light">Most of our snacks are Jain-friendly with no onion, garlic, or root vegetables.</p>
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
              Taste the tradition, quality, and love that goes into every product. Order our authentic Gujarati snacks today with PAN India delivery.
            </p>
            <NavLink
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Order Online Now
            </NavLink>
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
