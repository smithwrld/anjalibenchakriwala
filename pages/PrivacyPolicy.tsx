import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Anjaliben Chakriwala</title>
                <meta name="description" content="Privacy Policy for Anjaliben Chakriwala. Learn how we collect, use, and protect your personal information." />
            </Helmet>

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-8 text-center">Privacy Policy</h1>

                    <div className="prose prose-lg prose-brand max-w-none text-brand-text-light">
                        <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Anjaliben Chakriwala. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">2. Information We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">3. How We Use Your Personal Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                                Email: anjalibenchakriwala@gmail.com
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
