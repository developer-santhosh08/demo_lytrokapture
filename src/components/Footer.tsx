import { motion } from 'framer-motion';
import { Camera, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const quickLinks = ['Home', 'Portfolio', 'About', 'Services', 'Contact'];
const serviceLinks = ['Wedding Photography', 'Pre-Wedding Shoots', 'Portrait Sessions', 'Commercial Photography', 'Drone Photography', 'Videography'];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-luxury-darker border-t border-luxury-border/40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-luxury-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center overflow-hidden">
                <img src="/images/lk-logo.jpeg" alt="LK Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-wide">
                  LYTRO <span className="text-luxury-gold">KAPTURE</span>
                </span>
                <p className="text-luxury-muted text-[9px] tracking-[0.2em] uppercase">Fotography Studio</p>
              </div>
            </div>
            <p className="text-luxury-muted text-sm leading-relaxed mb-6">
              Lytro Kapture — capturing life's most precious moments with cinematic artistry. Follow us on Instagram @lytrokapture_fotography
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/lytrokapture_fotography', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-luxury-border flex items-center justify-center text-luxury-muted hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-luxury-muted hover:text-luxury-gold text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(service => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-luxury-muted hover:text-luxury-gold text-sm transition-colors duration-200 text-left hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Contact Us</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="tel:+919514362836" className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold text-sm transition-colors duration-200 group">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-luxury-gold" />
                  +91 95143 62836
                </a>
              </li>
              <li>
                <a href="mailto:lytrokapture777@gmail.com" className="flex items-start gap-3 text-luxury-muted hover:text-luxury-gold text-sm transition-colors duration-200">
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-luxury-gold" />
                  lytrokapture777@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-luxury-muted text-sm">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-luxury-gold" />
                  Karuppur, Salem · Tamil Nadu
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-luxury-subtle text-xs font-semibold uppercase tracking-wider mb-3">Stay Inspired</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-luxury-card border border-luxury-border text-white text-sm placeholder-luxury-muted px-3 py-2.5 rounded-lg focus:outline-none focus:border-luxury-gold transition-colors"
                />
                <button className="px-4 py-2.5 bg-luxury-gold text-luxury-dark text-sm font-bold rounded-lg hover:bg-luxury-gold-light transition-colors">
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-luxury-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-luxury-muted text-sm">
            © 2024 Lytro Kapture. All rights reserved.
          </p>
          <p className="text-luxury-muted text-sm flex items-center gap-1.5">
            Crafted with <Heart size={13} className="text-luxury-gold fill-luxury-gold" /> by Lytro Kapture
          </p>
          <div className="flex items-center gap-4 text-luxury-muted text-xs">
            <button className="hover:text-luxury-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-luxury-gold transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-6 w-12 h-12 bg-luxury-gold text-luxury-dark rounded-full flex items-center justify-center shadow-xl shadow-luxury-gold/30 z-40 hover:bg-luxury-gold-light transition-colors duration-200"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
