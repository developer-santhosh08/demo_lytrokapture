import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CatalogList from './components/CatalogList';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload hero images while loader plays
    const urls = [
      '/images/hero-1.png',
      '/images/hero-2.png',
      '/images/hero-3.png',
      '/images/hero-4.png',
    ];
    urls.forEach(url => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.src = url;
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-luxury-dark text-white overflow-x-hidden">
          <Navigation />
          <main>
            <Hero />
            <Portfolio />
            <About />
            <CatalogList />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
