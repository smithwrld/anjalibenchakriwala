import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SEOHead from '../components/SEOHead';
import { ProductSchema, BreadcrumbSchema, FAQSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { ChevronRight, Leaf, Clock, Package, Truck, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryModal from '../components/EnquiryModal';
import { getProductBySlug, seoProducts } from '../data/products';

const ProductDetail: React.FC = () => {
    const { productSlug } = useParams<{ productSlug: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const product = productSlug ? getProductBySlug(productSlug) : undefined;

    if (!product) {
        return (
            <AnimatedPage>
                <div className="max-w-4xl mx-auto py-16 text-center">
                    <h1 className="text-3xl font-serif text-brand-text mb-4">Product Not Found</h1>
                    <p className="text-brand-text-light mb-8">The product you're looking for doesn't exist.</p>
                    <NavLink to="/products" className="text-brand-primary hover:underline">
                        ← Back to All Products
                    </NavLink>
                </div>
            </AnimatedPage>
        );
    }

    // Get related products (exclude current)
    const relatedProducts = seoProducts.filter(p => p.slug !== product.slug).slice(0, 3);

    const breadcrumbs = [
        { name: 'Home', url: 'https://anjalibenchakriwala.com/' },
        { name: 'Products', url: 'https://anjalibenchakriwala.com/products' },
        { name: product.name, url: `https://anjalibenchakriwala.com/products/${product.slug}` }
    ];

    return (
        <AnimatedPage>
            {/* SEO Head */}
            <SEOHead
                title={product.seoTitle}
                description={product.seoDescription}
                keywords={product.keywords.join(', ')}
                canonicalUrl={`https://anjalibenchakriwala.com/products/${product.slug}`}
                ogImage={product.imageSeed}
                ogType="product"
                productPrice={product.weightOptions[0].price.replace('₹', '')}
            />

            {/* Schema Markup */}
            <ProductSchema
                name={product.name}
                description={product.seoDescription}
                image={product.imageSeed}
                price={product.weightOptions[0].price}
                weight={product.weightOptions[0].weight}
                ingredients={product.ingredients}
                isJainFriendly={product.isJainFriendly}
                slug={product.slug}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema faqs={product.faqs} />

            <div className="max-w-6xl mx-auto py-8">
                {/* Breadcrumb Navigation */}
                <nav className="flex items-center text-sm text-brand-text-light mb-8" aria-label="Breadcrumb">
                    <NavLink to="/" className="hover:text-brand-primary transition-colors">Home</NavLink>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <NavLink to="/products" className="hover:text-brand-primary transition-colors">Products</NavLink>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-brand-text font-medium">{product.name}</span>
                </nav>

                {/* Product Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                            <img
                                src={product.imageSeed}
                                alt={`${product.name} - Authentic Gujarati Snack from Anjaliben Chakriwala`}
                                className="w-full aspect-square object-cover"
                                loading="eager"
                            />
                        </div>
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isJainFriendly && (
                                <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    <Leaf className="w-3 h-3" /> Jain Friendly
                                </span>
                            )}
                            <span className="inline-flex items-center gap-1 bg-brand-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                                <Truck className="w-3 h-3" /> PAN India Delivery
                            </span>
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col"
                    >
                        {/* H1 - Product Name + USP */}
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-text mb-3">
                            {product.name} - Authentic Gujarati Snack
                        </h1>

                        <p className="text-lg text-brand-text-light mb-6">{product.description}</p>

                        {/* H2 - Weight Options */}
                        <h2 className="text-xl font-serif font-semibold text-brand-text mb-3">Available Sizes & Pricing</h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {product.weightOptions.map((option, idx) => (
                                <div key={idx} className="bg-brand-secondary/30 border border-brand-secondary rounded-xl px-4 py-3 text-center">
                                    <div className="text-lg font-semibold text-brand-text">{option.price}</div>
                                    <div className="text-sm text-brand-text-light">{option.weight}</div>
                                </div>
                            ))}
                        </div>

                        {/* H2 - Ingredients */}
                        <h2 className="text-xl font-serif font-semibold text-brand-text mb-2">Ingredients</h2>
                        <p className="text-brand-text-light mb-6 capitalize">{product.ingredients}</p>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm text-brand-text-light">
                                <Clock className="w-4 h-4 text-brand-primary" />
                                <span>Shelf Life: {product.shelfLife.split(' ')[0]} days</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-brand-text-light">
                                <Package className="w-4 h-4 text-brand-primary" />
                                <span>Fresh & Hygienic Packing</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-brand-text-light">
                                <Shield className="w-4 h-4 text-brand-primary" />
                                <span>100% Vegetarian</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-brand-text-light">
                                <Truck className="w-4 h-4 text-brand-primary" />
                                <span>All India Shipping</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
                        >
                            <WhatsAppIcon className="w-6 h-6 mr-3" />
                            Order via WhatsApp
                        </button>

                        {product.specialNote && (
                            <p className="mt-4 text-brand-primary text-sm italic">"{product.specialNote}"</p>
                        )}
                    </motion.div>
                </div>

                {/* H3 - Why Buy From Us */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-serif font-semibold text-brand-text mb-6 text-center">
                        Why Buy {product.name} from Anjaliben Chakriwala?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary/30 text-center">
                            <div className="text-3xl mb-3">🏠</div>
                            <h4 className="font-semibold text-brand-text mb-2">Homemade Quality</h4>
                            <p className="text-sm text-brand-text-light">Made with love using traditional family recipes passed down through generations.</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary/30 text-center">
                            <div className="text-3xl mb-3">🌿</div>
                            <h4 className="font-semibold text-brand-text mb-2">No Preservatives</h4>
                            <p className="text-sm text-brand-text-light">100% natural ingredients with no artificial preservatives or additives.</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary/30 text-center">
                            <div className="text-3xl mb-3">🚚</div>
                            <h4 className="font-semibold text-brand-text mb-2">PAN India Delivery</h4>
                            <p className="text-sm text-brand-text-light">Fresh delivery to all Indian states - Mumbai, Delhi, Bangalore, Chennai & more.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Long SEO Description */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-serif font-semibold text-brand-text mb-6">
                        About {product.name}
                    </h2>
                    <div className="prose prose-lg max-w-none text-brand-text-light">
                        {product.longDescription.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                </motion.section>

                {/* FAQ Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-serif font-semibold text-brand-text mb-6">
                        Frequently Asked Questions about {product.name}
                    </h2>
                    <div className="space-y-3">
                        {product.faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white/50 backdrop-blur-sm rounded-xl border border-brand-secondary/30 overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-4 text-left"
                                >
                                    <span className="font-medium text-brand-text pr-4">{faq.question}</span>
                                    {expandedFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    )}
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-4 pb-4 text-brand-text-light">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Related Products */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-serif font-semibold text-brand-text mb-6">
                        You May Also Like
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <NavLink
                                key={relatedProduct.slug}
                                to={`/products/${relatedProduct.slug}`}
                                className="group bg-white/50 backdrop-blur-sm rounded-xl border border-brand-secondary/30 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={relatedProduct.imageSeed}
                                        alt={`${relatedProduct.name} - Gujarati Snack`}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-serif font-semibold text-brand-text mb-1">{relatedProduct.name}</h3>
                                    <p className="text-sm text-brand-text-light line-clamp-2">{relatedProduct.description}</p>
                                    <div className="mt-2 text-brand-primary font-medium text-sm">
                                        From {relatedProduct.weightOptions[0].price}
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </motion.section>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
            />
        </AnimatedPage>
    );
};

export default ProductDetail;
