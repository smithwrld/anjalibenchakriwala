import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const CookiePolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Cookie Policy | Anjaliben Chakriwala</title>
                <meta name="description" content="Cookie Policy for Anjaliben Chakriwala. Understand how we use cookies to improve your experience on our website." />
            </Helmet>

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-8 text-center">Cookie Policy</h1>

                    <div className="prose prose-lg prose-brand max-w-none text-brand-text-light">
                        <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">1. What Are Cookies</h2>
                            <p>
                                As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">2. How We Use Cookies</h2>
                            <p>
                                We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">3. Disabling Cookies</h2>
                            <p>
                                You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">4. The Cookies We Set</h2>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
                                <li><strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</li>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
                                </ul>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-serif text-brand-text mb-4">5. More Information</h2>
                            <p>
                                Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                            </p>
                            <p className="mt-4">
                                For more information, please contact us at: anjalibenchakriwala@gmail.com
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default CookiePolicy;
