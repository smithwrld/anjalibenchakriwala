import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TermsOfService: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Anjaliben Chakriwala</title>
                <meta name="description" content="Terms of Service for Anjaliben Chakriwala. Read our terms and conditions for using our website and purchasing our products." />
            </Helmet>

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-8 text-center">Terms of Service</h1>

                    <div className="prose prose-lg prose-brand max-w-none text-brand-text-light">
                        <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">2. Product Information</h2>
                            <p>
                                We attempt to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. if a product offered by us itself is not as described, your sole remedy is to return it in unused condition.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">3. Pricing</h2>
                            <p>
                                All prices are shown in INR (Indian Rupees) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change prices at any time without notice.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">4. Shipping and Delivery</h2>
                            <p>
                                We aim to ship all orders within 2-3 business days. Delivery times may vary depending on your location. We are not responsible for delays caused by the courier service or unforeseen circumstances.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">5. Intellectual Property</h2>
                            <p>
                                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Anjaliben Chakriwala or its content suppliers and protected by international copyright laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">7. Contact Information</h2>
                            <p>
                                Questions about the Terms of Service should be sent to us at anjalibenchakriwala@gmail.com.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default TermsOfService;
