
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';
import { TestimonialsColumn, testimonials } from '../components/ui/testimonials-columns';
import DatabaseWithRestApi from '../components/ui/database-with-rest-api';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' }
  ];

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="Buy Gujarati Snacks Online | Chakri, Bhakharwadi, Namkeen | Anjaliben Chakriwala"
        description="Order authentic homemade Gujarati snacks online. Traditional Chakri, Bhakharwadi, Namkeen & Jain-friendly snacks with PAN India delivery. Fresh, preservative-free & delicious!"
        keywords="gujarati snacks online, buy chakri online, bhakharwadi online, namkeen online india, jain snacks, traditional indian snacks, homemade gujarati farsan, kathiyawadi snacks delivery"
        canonicalUrl="https://anjalibenchakriwala.com/"
        ogImage="/images/Chakri.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

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
                Handcrafted with Love | PAN India Delivery
              </motion.span>

              {/* Main heading - H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brand-text leading-tight mb-6">
                Buy Authentic Gujarati Snacks Online
                <span className="block mt-2 font-medium text-brand-primary">Traditional Chakri & Namkeen</span>
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
                <strong> 100% vegetarian & Jain-friendly options available.</strong>
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
                  Order Online Now
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
                    alt="Authentic Gujarati Chakri - Traditional spiral snack from Anjaliben Chakriwala"
                    className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-8">
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
              className="text-3xl md:text-4xl font-serif font-light text-brand-text mb-3"
            >
              Our Signature Gujarati Snacks
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Chakri',
                slug: 'chakri',
                description: 'Traditional spiral snack with perfect seasoning and irresistible crunch. Jain-friendly.',
                weightOptions: [
                  { weight: '200gm', price: '₹70' },
                  { weight: '400gm', price: '₹140' }
                ],
                ingredients: 'wheat flour, salt, chilly powder, ajwain, til, edible oil',
                image: '/images/Chakri.jpg',
                isJain: true
              },
              {
                name: 'Bhakharwadi',
                slug: 'bhakharwadi',
                description: 'Classic Gujarati snack with sweet and spicy filling. Traditional recipe.',
                weightOptions: [
                  { weight: '250gm', price: '₹80' },
                  { weight: '500gm', price: '₹150' }
                ],
                ingredients: 'maida, salt, haldi, dhana, mirch powder, garam masala, varyali, imily, jaggery, edible oil',
                image: '/images/Bhakharwadi.jpg',
                isJain: true
              },
              {
                name: 'Sakarpara',
                slug: 'sakarpara',
                description: 'Sweet and crispy diamond-shaped treats with authentic Kathiyawadi taste.',
                weightOptions: [
                  { weight: '200gm', price: '₹80' },
                  { weight: '400gm', price: '₹150' }
                ],
                ingredients: 'wheat flour, maida, sugar, edible oil',
                image: '/images/Sakarpara.jpg',
                badge: '⭐ Kathiyawadi Special',
                isJain: true
              }
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 * i }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  {/* Product Image Container */}
                  <div className="relative mb-3 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={`${product.name} - Buy authentic Gujarati ${product.name} online at Anjaliben Chakriwala`}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Badges */}
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-brand-primary/90 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-medium">
                        {product.badge}
                      </div>
                    )}
                    {product.isJain && (
                      <div className="absolute top-2 left-2 bg-green-600/90 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-medium">
                        🌿 Jain Friendly
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-brand-text mb-1 text-center">
                      {product.name}
                    </h3>

                    <p className="text-brand-text-light text-xs leading-relaxed mb-3 text-center">
                      {product.description}
                    </p>

                    {/* Weight Options - Simplified */}
                    <div className="flex gap-2 justify-center mb-3">
                      {product.weightOptions.map((option, idx) => (
                        <span key={idx} className="text-xs text-brand-primary font-medium">
                          {option.weight}: {option.price}
                        </span>
                      ))}
                    </div>

                    {/* Ingredients - Minimalistic */}
                    <div className="mb-3 text-center">
                      <p className="text-xs text-brand-text-light italic">
                        {product.ingredients}
                      </p>
                    </div>

                    {/* View Details Button - Clean */}
                    <NavLink
                      to={`/products/${product.slug}`}
                      className="block w-full text-center px-4 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm"
                    >
                      View Details & Order
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="text-center mt-10">
            <NavLink
              to="/products"
              className="inline-flex items-center text-brand-primary font-medium hover:underline"
            >
              View All 9 Products <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
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
