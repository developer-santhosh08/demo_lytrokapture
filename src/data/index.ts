import type { PortfolioItem, InstagramPost } from '../types';

// ─── Catalog (actual Lytro Kapture services) ───────────────────────────
export const catalogItems = [
  {
    id: 'collage',
    title: 'Collage Designs',
    subtitle: 'Types of Photo Designs',
    description: 'Beautiful multi-photo collage designs that combine your precious memories into a single stunning visual story. Perfect for gifts, wall frames, and keepsakes.',
    imageUrl: '/images/premium-wedding.png',
    icon: 'LayoutGrid',
    badge: '',
  },
  {
    id: 'maternity',
    title: 'Maternity',
    subtitle: 'Celebrating New Beginnings',
    description: 'Tender, glowing maternity sessions that celebrate the beauty of motherhood. We capture the bond, the glow, and the anticipation — indoors or outdoors, on your terms.',
    imageUrl: '/images/premium-portrait.png',
    icon: 'Heart',
    badge: '',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Full Wedding Day Coverage',
    description: 'From the sacred rituals to the candid dancing — every emotion of your wedding day documented with cinematic precision. Captured on premium equipment for breathtaking quality.',
    imageUrl: '/images/premium-maternity.png',
    icon: 'Gem',
    badge: 'Popular',
  },
  {
    id: 'pre-wedding',
    title: 'Pre / Post Wedding Shoot',
    subtitle: 'Tailored to your needs',
    description: 'Romantic editorial-style pre or post wedding sessions across Tamil Nadu and beyond. Locations like Pondicherry, Yercaud Hills, and Vaiyappamalai. Personalised for your duration.',
    imageUrl: '/images/premium-prewedding.png',
    icon: 'Camera',
    badge: '',
  },
  {
    id: 'baby',
    title: 'Baby Shoot',
    subtitle: 'Tailored to your needs',
    description: 'Adorable, milestone baby sessions that capture every smile, giggle, and tiny detail. Props, themes, and setups customised for your little one.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    icon: 'Baby',
    badge: '',
  },
  {
    id: 'frame',
    title: 'Premium Frame Designs',
    subtitle: 'Tailored to frame size & design',
    description: 'Premium wall frames and photo prints in multiple sizes and finishes — canvas, acrylic, wooden frames, and more. Enquire for a custom quote tailored to your needs.',
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
    icon: 'Frame',
    badge: '',
  },
  {
    id: 'birthday',
    title: 'Birthday Frame Designs',
    subtitle: 'Custom birthday frame designs',
    description: 'Personalised birthday frame designs that transform your photos into celebration-ready artwork. Perfect for decoration, gifts, and keepsake wall art.',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80',
    icon: 'Gift',
    badge: '',
  },
];

// ─── Portfolio (real Instagram photos) ────────────────────────────────
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p0',
    category: 'wedding',
    title: 'A Timeless Union',
    location: 'Tamil Nadu',
    imageUrl: '/images/hero-1.png',
    featured: true,
  },
  {
    id: 'p1',
    category: 'pre-wedding',
    title: 'The Best Thing to Hold Onto',
    location: 'Vaiyappamalai, Tamil Nadu',
    imageUrl: '/images/port-couple1.png',
    featured: true,
  },
  {
    id: 'p2',
    category: 'pre-wedding',
    title: 'Two Hearts, One Rhythm',
    location: 'Pondicherry, India',
    imageUrl: '/images/port-couple2.png',
    featured: true,
  },
  {
    id: 'p3',
    category: 'pre-wedding',
    title: 'Vaisakh & Shruthi — Love of Combine',
    location: 'Tamil Nadu',
    imageUrl: '/images/port-couple3.png',
  },
  {
    id: 'p4',
    category: 'pre-wedding',
    title: 'Whatever Our Souls Are Made Of',
    location: 'Tamil Nadu',
    imageUrl: '/images/port-couple4.png',
  },
  {
    id: 'p5',
    category: 'portrait',
    title: 'Grace is the Only Beauty That Never Fades',
    location: 'Tamil Nadu',
    imageUrl: '/images/port-bride.png',
    featured: true,
  },
  {
    id: 'p6',
    category: 'pre-wedding',
    title: 'Navin & Kavya — Relationship is an Art',
    location: 'Tamil Nadu',
    imageUrl: '/images/port-couple5.png',
  },
  {
    id: 'p7',
    category: 'pre-wedding',
    title: 'Love Begins',
    location: 'Tamil Nadu',
    imageUrl: '/images/premium-prewedding.png',
  },
  {
    id: 'p8',
    category: 'pre-wedding',
    title: 'Navin & Kavya — Infinite Love',
    location: 'Yercaud Hills, Tamil Nadu',
    imageUrl: '/images/premium-wedding.png',
    featured: true,
  },
  {
    id: 'p9',
    category: 'traditional',
    title: 'Rollin Up My Sleeves',
    location: 'Karuppur, Salem',
    imageUrl: '/images/port-traditional.png',
  },
  {
    id: 'p10',
    category: 'lifestyle',
    title: 'With Every Mile — Harley Davidson X440',
    location: 'Salem, Tamil Nadu',
    imageUrl: '/images/port-lifestyle.png',
  },
  {
    id: 'p11',
    category: 'wedding',
    title: 'The Stylish Groom',
    location: 'Salem, Tamil Nadu',
    imageUrl: '/images/port-groom.png',
  },
  {
    id: 'p12',
    category: 'wedding',
    title: 'Bride',
    location: 'Salem, Tamil Nadu',
    imageUrl: '/images/premium-portrait.png',
  },
];

// ─── Hero slideshow ────────────────────────────────────────────────────
export const heroImages = [
  { url: '/images/hero-2.png', label: 'Pre-Wedding · Yercaud Hills' },
  { url: '/images/hero-3.png', label: 'Portrait · Salem' },
  { url: '/images/hero-4.png', label: 'Pre-Wedding · Vaiyappamalai' },
];

export const stats = [
  { value: 3, label: 'Years Experience', suffix: '+' },
  { value: 120, label: 'Shoots Completed', suffix: '+' },
  { value: 500, label: 'Happy Clients', suffix: '+' },
  { value: 12, label: 'Locations Covered', suffix: '+' },
];

// ─── Instagram posts ───────────────────────────────────────────────────
export const instagramPosts: InstagramPost[] = [
  { id: 'i1', imageUrl: '/images/premium-prewedding.png', likes: 30, comments: 0, caption: 'The best thing to hold onto 🦋 #LytroKapture' },
  { id: 'i2', imageUrl: '/images/premium-wedding.png', likes: 83, comments: 4, caption: 'Two hearts, one rhythm ✨ #prewedding' },
  { id: 'i3', imageUrl: '/images/premium-portrait.png', likes: 72, comments: 1, caption: 'Vaisakh ✨ Shruthi #LytroKapture' },
  { id: 'i4', imageUrl: '/images/premium-maternity.png', likes: 57, comments: 0, caption: 'Whatever our souls are made of 🦋' },
  { id: 'i5', imageUrl: '/images/premium-prewedding.png', likes: 23, comments: 0, caption: 'Grace is the only beauty that never fades 🤍' },
  { id: 'i6', imageUrl: '/images/premium-wedding.png', likes: 30, comments: 0, caption: 'Relationship is an art ❤️ Navin & Kavya' },
  { id: 'i7', imageUrl: '/images/premium-portrait.png', likes: 37, comments: 0, caption: 'Love Begins ❤️ #LytroKapture' },
  { id: 'i8', imageUrl: '/images/premium-maternity.png', likes: 50, comments: 0, caption: 'Infinite love — Yercaud Hills 🌿' },
  { id: 'i9', imageUrl: '/images/premium-prewedding.png', likes: 236, comments: 32, caption: 'Rollin up my sleeves 🔥 #traditionalphotography' },
];

// ─── Services (Lucide Icons) ─────────────────────────────────────────
export const services = [
  {
    id: 'wedding',
    icon: 'Ring',
    title: 'Wedding Photography',
    description: 'Full day coverage from preparations to the final send-off.',
    startingPrice: '₹40,000',
    features: ['Pre-wedding consultation', '2 Photographers', 'High-res edited photos']
  },
  {
    id: 'pre-wedding',
    icon: 'Heart',
    title: 'Pre-Wedding Shoots',
    description: 'Romantic outdoor sessions before your big day.',
    startingPrice: '₹15,000',
    features: ['Multiple locations', 'Outfit changes', 'Cinematic video teaser']
  },
  {
    id: 'portrait',
    icon: 'User',
    title: 'Portrait Sessions',
    description: 'Professional portraits for individuals and families.',
    startingPrice: '₹8,000',
    features: ['Studio or location', 'Retouched photos', 'Online gallery']
  },
  {
    id: 'event',
    icon: 'PartyPopper',
    title: 'Event Coverage',
    description: 'Birthdays, corporate events, and parties.',
    startingPrice: '₹10,000',
    features: ['Candid moments', 'Quick delivery', 'Digital album']
  }
];

export const pricingPackages = [
  {
    id: 'basic',
    name: 'Basic Collection',
    price: '₹25,000',
    duration: '4 Hours',
    popular: false,
    features: ['1 Photographer', '100 Edited Photos', 'Online Gallery'],
    cta: 'Book Basic'
  },
  {
    id: 'standard',
    name: 'Standard Collection',
    price: '₹45,000',
    duration: '8 Hours',
    popular: true,
    features: ['2 Photographers', '250 Edited Photos', 'Printed Album', 'Highlight Video'],
    cta: 'Book Standard'
  }
];

export const faqItems = [
  {
    id: 'faq1',
    question: 'How long does it take to get our photos?',
    answer: 'You will receive a sneak peek within 48 hours, and the full edited gallery within 2-3 weeks.'
  },
  {
    id: 'faq2',
    question: 'Do you travel for weddings?',
    answer: 'Yes! We love destination weddings. Travel and accommodation fees apply outside Tamil Nadu.'
  }
];

export const processSteps = [
  {
    id: 'step1',
    number: '01',
    title: 'Consultation',
    description: 'We meet to discuss your vision, style, and timeline.',
    icon: 'MessageCircle'
  },
  {
    id: 'step2',
    number: '02',
    title: 'The Shoot',
    description: 'We capture your special moments with cinematic precision.',
    icon: 'Camera'
  }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Shruthi & Vaisakh',
    role: 'Bride & Groom',
    location: 'Tamil Nadu',
    rating: 5,
    text: 'Lytro Kapture made our wedding day unforgettable! The photos are absolutely stunning.',
    avatarUrl: '/images/premium-wedding.png',
    eventType: 'Wedding'
  }
];
