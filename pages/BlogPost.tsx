
import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '../components/SchemaMarkup';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, ArrowLeft, Tag } from 'lucide-react';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = getBlogPostBySlug(slug || '');

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const breadcrumbs = [
        { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
        { name: 'Blog', url: 'https://anjalibenchakriwala.com/blog' },
        { name: post.title, url: `https://anjalibenchakriwala.com/blog/${post.slug}` }
    ];

    // Get related posts (exclude current one)
    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug)
        .slice(0, 3);

    return (
        <AnimatedPage>
            {/* SEO Head */}
            <SEOHead
                title={`${post.title} | Anjaliben Chakriwala Blog`}
                description={post.excerpt}
                keywords={post.keywords.join(', ')}
                canonicalUrl={`https://anjalibenchakriwala.com/blog/${post.slug}`}
                ogImage={`https://anjalibenchakriwala.com${post.image}`}
                ogType="article"
            />
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                image={`https://anjalibenchakriwala.com${post.image}`}
                publishedDate={post.date} // Note: Ideally should be ISO format
                authorName="Anjaliben Chakriwala"
                url={`https://anjalibenchakriwala.com/blog/${post.slug}`}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            {post.faqs && <FAQSchema faqs={post.faqs} />}

            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
                {/* Breadcrumb Navigation */}
                <nav className="flex items-center text-sm text-brand-text-light mb-6 overflow-x-auto whitespace-nowrap pb-2" aria-label="Breadcrumb">
                    <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
                    <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                    <NavLink to="/blog" className="hover:text-brand-primary transition-colors">Blog</NavLink>
                    <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                    <span className="text-brand-text font-medium truncate">{post.title}</span>
                </nav>

                {/* Article Header */}
                <header className="mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 text-sm text-brand-text-light mb-4"
                    >
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </span>
                        <span className="w-1 h-1 bg-brand-secondary rounded-full"></span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-brand-text mb-6 leading-tight"
                    >
                        {post.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </header>

                {/* Article Content */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-stone mx-auto max-w-none 
          prose-headings:font-serif prose-headings:text-brand-text 
          prose-p:text-brand-text-light prose-p:leading-relaxed
          prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-md
          prose-li:text-brand-text-light"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-6 border-t border-brand-secondary/30">
                    <div className="flex flex-wrap gap-2 items-center">
                        <Tag className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm font-medium text-brand-text mr-2">Tags:</span>
                        {post.keywords.slice(0, 4).map((keyword, idx) => (
                            <span key={idx} className="bg-brand-bg-dark text-brand-text-light text-xs px-3 py-1 rounded-full">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Engagement / Order CTA */}
                <div className="mt-12 bg-brand-bg-dark/50 rounded-2xl p-8 text-center border border-brand-secondary">
                    <h3 className="text-2xl font-serif font-semibold text-brand-text mb-3">Craving some authentic snacks now?</h3>
                    <p className="text-brand-text-light mb-6">Order fresh, homemade Gujarati snacks directly from our kitchen to your home.</p>
                    <WhatsAppOrderButton
                        productName={`Enquiry from blog: ${post.title}`}
                        className="inline-flex"
                    />
                </div>

                {/* Related Posts */}
                <div className="mt-16">
                    <h3 className="text-2xl font-serif font-bold text-brand-text mb-6 border-b border-brand-secondary/30 pb-2">
                        More to Read
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((related, idx) => (
                            <NavLink
                                key={related.slug}
                                to={`/blog/${related.slug}`}
                                className="group block"
                            >
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-serif font-semibold text-lg text-brand-text group-hover:text-brand-primary transition-colors line-clamp-2">
                                    {related.title}
                                </h4>
                                <p className="text-xs text-brand-text-light mt-1">{related.date}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <NavLink
                        to="/blog"
                        className="inline-flex items-center text-brand-primary font-medium hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
                    </NavLink>
                </div>

            </div>
        </AnimatedPage>
    );
};

export default BlogPost;
