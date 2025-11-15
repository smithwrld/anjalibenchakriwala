import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import NoiseBackground from './components/NoiseBackground';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-brand-bg-light font-sans text-brand-text antialiased">
      <NoiseBackground />
      <Header />
      <main className="relative z-10 min-h-screen px-4 py-24 sm:px-6 md:px-8 lg:py-32">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);

export default AppWrapper;