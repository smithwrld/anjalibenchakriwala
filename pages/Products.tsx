import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Leaf, Truck, ChevronRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryModal from '../components/EnquiryModal';
import { seoProducts } from '../data/products';
import type { Product } from '../types';

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
    { name: 'Products', url: 'https://anjalibenchakriwala.com/products' }
  ];

  const handleEnquiryClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="Buy Gujarati Snacks Online | Chakri, Bhakharwadi, Namkeen | Anjaliben Chakriwala"
        description="Order authentic Gujarati snacks online - Chakri, Bhakharwadi, Sakarpara, Soya Sticks & more. Jain-friendly, preservative-free homemade namkeen with PAN India delivery. Fresh & delicious!"
        keywords="buy gujarati snacks online, chakri online india, bhakharwadi online, namkeen delivery, jain snacks online, kathiyawadi snacks, traditional farsan, indian snacks pan india"
        canonicalUrl="https://anjalibenchakriwala.com/products"
        ogImage="/images/Chakri.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-7xl mx-auto py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-brand-text-light mb-8" aria-label="Breadcrumb">
          <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-brand-text font-medium">All Products</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4">
            Authentic Gujarati Snacks - Order Online
          </h1>
          <p className="text-lg text-brand-text-light max-w-3xl mx-auto">
            Discover our range of handcrafted traditional snacks. Each piece is made with love using generations-old recipes.
            <strong> 100% vegetarian, Jain-friendly options available. PAN India delivery.</strong>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <Leaf className="w-4 h-4" /> 100% Vegetarian
          </span>
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            🌿 Jain Friendly Options
          </span>
          <span className="inline-flex items-center gap-2 bg-brand-secondary text-brand-text px-4 py-2 rounded-full text-sm font-medium">
            <Truck className="w-4 h-4" /> PAN India Delivery
          </span>
          <span className="inline-flex items-center gap-2 bg-brand-secondary text-brand-text px-4 py-2 rounded-full text-sm font-medium">
            ✨ No Preservatives
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {seoProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <NavLink to={`/products/${product.slug}`} className="block overflow-hidden relative">
                <img
                  src={product.imageSeed}
                  alt={`Buy ${product.name} online - ${product.description} from Anjaliben Chakriwala`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isJainFriendly && (
                    <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      <Leaf className="w-3 h-3" /> Jain Friendly
                    </span>
                  )}
                </div>
              </NavLink>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <NavLink to={`/products/${product.slug}`}>
                  <h2 className="text-2xl font-serif font-semibold text-brand-text mb-2 hover:text-brand-primary transition-colors">
                    {product.name}
                  </h2>
                </NavLink>
                <p className="text-brand-text-light text-sm mb-3">{product.description}</p>

                {product.specialNote && (
                  <p className="text-brand-primary text-xs italic mb-2">"{product.specialNote}"</p>
                )}

                {/* Weight Options */}
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

                {/* Ingredients */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-brand-text mb-1">Ingredients:</p>
                  <p className="text-xs text-brand-text-light italic capitalize">{product.ingredients}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <NavLink
                    to={`/products/${product.slug}`}
                    className="flex-1 text-center px-4 py-2 border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-colors text-sm"
                  >
                    View Details
                  </NavLink>
                  <button
                    onClick={() => handleEnquiryClick(product)}
                    className="inline-flex items-center justify-center px-4 py-2 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/30"
        >
          <h2 className="text-2xl font-serif font-semibold text-brand-text mb-4">
            Can't Decide? Contact Us!
          </h2>
          <p className="text-brand-text-light mb-6 max-w-2xl mx-auto">
            Not sure which snacks to try? Reach out via WhatsApp and we'll help you choose the perfect assortment for your taste.
            Bulk orders and gifting options also available!
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </NavLink>
        </motion.div>
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
