
import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/Chakri.jpg', alt: 'Chakri - Traditional Gujarati spiral snack with perfect crunch', title: 'Chakri' },
  { src: '/images/Bhakharwadi.jpg', alt: 'Bhakharwadi - Classic Gujarati snack with sweet and spicy filling', title: 'Bhakharwadi' },
  { src: '/images/Sakarpara.jpg', alt: 'Sakarpara - Sweet crispy diamond-shaped Kathiyawadi treat', title: 'Sakarpara' },
  { src: '/images/Joy stick.jpg', alt: 'Joy Stick - Crunchy wheat sticks with aromatic spices', title: 'Joy Stick' },
  { src: '/images/Kathol stick.jpg', alt: 'Kathol Stick - Protein-rich dal sticks with tangy flavor', title: 'Kathol Stick' },
  { src: '/images/Jain Soya stick.jpg', alt: 'Jain Soya Stick - Healthy soya-based snack with Manchurian flavor', title: 'Soya Stick' },
  { src: '/images/Sing bhujiya.jpg', alt: 'Sing Bhujiya - Crunchy peanut namkeen with aromatic spices', title: 'Sing Bhujiya' },
  { src: '/images/Roasted Maggie chips.jpg', alt: 'Roasted Maggie Chips - Low oil crispy chips with Maggie flavor', title: 'Maggie Chips' },
];

const Gallery: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
    { name: 'Gallery', url: 'https://anjalibenchakriwala.com/gallery' }
  ];

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="Gujarati Snacks Gallery | Product Photos | Anjaliben Chakriwala"
        description="View our gallery of authentic Gujarati snacks - Chakri, Bhakharwadi, Sakarpara, Namkeen & more. See the quality and freshness of our handcrafted traditional snacks."
        keywords="gujarati snacks photos, chakri images, bhakharwadi pictures, namkeen gallery, indian snacks photos, traditional snacks images"
        canonicalUrl="https://anjalibenchakriwala.com/gallery"
        ogImage="/images/Chakri.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-7xl mx-auto py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-brand-text-light mb-8" aria-label="Breadcrumb">
          <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-brand-text font-medium">Gallery</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4">
            Our Snacks Gallery
          </h1>
          <p className="text-lg text-brand-text-light max-w-3xl mx-auto">
            Feast your eyes on our collection of handcrafted Gujarati snacks. Each product is made fresh with premium ingredients and traditional recipes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-serif font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">Authentic Gujarati Snack</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/30"
        >
          <h2 className="text-2xl font-serif font-semibold text-brand-text mb-4">
            Ready to Taste the Tradition?
          </h2>
          <p className="text-brand-text-light mb-6 max-w-2xl mx-auto">
            Order our authentic Gujarati snacks today and experience the homemade goodness delivered to your doorstep across India.
          </p>
          <NavLink
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            View All Products & Order
          </NavLink>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Gallery;
