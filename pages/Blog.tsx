
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Secret to the Perfect Chakri Crunch',
    excerpt: 'Discover the traditional techniques we use to achieve that signature snap in every bite.',
    date: 'October 26, 2023',
    image: '/images/claymorphism_chakri_classic_1765464065428.png'
  },
  {
    title: 'Pairing Namkeen: Beyond Chai Time',
    excerpt: 'Explore creative and delicious ways to pair our savory snacks with drinks, dips, and more.',
    date: 'October 15, 2023',
    image: '/images/claymorphism_blog_teatime_1765464405529.png'
  },
  {
    title: 'A Journey Through India\'s Favorite Savory Snacks',
    excerpt: 'From chakri to sev, we delve into the rich history and cultural significance of namkeen.',
    date: 'September 30, 2023',
    image: '/images/claymorphism_blog_ingredients_1765464347087.png'
  },
];

const Blog: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">From Our Kitchen Journal</h1>
          <p className="mt-4 text-lg text-brand-text-light max-w-3xl mx-auto">
            Stories, tips, and musings about the world of authentic Indian snacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 drop-shadow-lg" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-brand-text-light mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-brand-text mb-3 flex-grow">{post.title}</h3>
                <p className="text-brand-text-light text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="mt-auto inline-flex items-center font-semibold text-brand-primary group-hover:text-opacity-80 transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
