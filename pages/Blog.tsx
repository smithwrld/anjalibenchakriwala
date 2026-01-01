
import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
    { name: 'Blog', url: 'https://anjalibenchakriwala.com/blog' }
  ];

  return (
    <AnimatedPage>
      {/* SEO Head */}
      <SEOHead
        title="Gujarati Snacks Blog | Recipes, Tips & Traditions | Anjaliben Chakriwala"
        description="Explore our blog for insights on Gujarati snacks, traditional recipes, Jain-friendly options, and the rich heritage of Indian namkeen. Learn about chakri, bhakharwadi & more."
        keywords="gujarati snacks blog, indian snack recipes, namkeen tips, chakri guide, jain snack blog, traditional food articles"
        canonicalUrl="https://anjalibenchakriwala.com/blog"
        ogImage="/images/Chakri.jpg"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="max-w-7xl mx-auto py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-brand-text-light mb-8" aria-label="Breadcrumb">
          <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-brand-text font-medium">Blog</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4">
            From Our Kitchen Journal
          </h1>
          <p className="text-lg text-brand-text-light max-w-3xl mx-auto">
            Stories, tips, and insights about the world of authentic Gujarati snacks. Discover recipes, traditions, and the art of making perfect namkeen.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <NavLink
            to={`/blog/${blogPosts[0].slug}`}
            className="group grid md:grid-cols-2 gap-6 bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-block bg-brand-primary text-white text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-text mb-4 group-hover:text-brand-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-brand-text-light mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-brand-text-light">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {blogPosts[0].readTime}
                </span>
              </div>
            </div>
          </NavLink>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavLink
                to={`/blog/${post.slug}`}
                className="group bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-brand-text-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-text mb-3 flex-grow group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-brand-text-light text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center font-semibold text-brand-primary group-hover:text-opacity-80 transition-colors text-sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/30"
        >
          <h2 className="text-2xl font-serif font-semibold text-brand-text mb-4">
            Want More Snacking Tips?
          </h2>
          <p className="text-brand-text-light mb-6 max-w-2xl mx-auto">
            Follow us for more recipes, snacking ideas, and updates about new products.
            Order our authentic Gujarati snacks delivered fresh to your doorstep!
          </p>
          <NavLink
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            Order Snacks Now
          </NavLink>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
