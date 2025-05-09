// Define fallback colors for products that don't have images
const PRODUCT_COLORS = {
  'lavender': '#8a56e2',
  'echinacea': '#b94e9c',
  'chamomile': '#ffdd55',
  'peppermint': '#4eba77',
};

// Product data with placeholder colors instead of images
export const PRODUCTS = [
  {
    id: '1',
    name: 'Organic Lavender Buds',
    description: 'Our organic lavender buds are sourced from the finest fields, hand-picked and naturally dried to preserve their potent aroma and therapeutic properties. Ideal for relaxation, sleep aids, and culinary uses.',
    price: 5.99,
    category: 'Herbs',
    color: PRODUCT_COLORS.lavender,
    vendor: "Nature's Touch Herbs",
    stock: 100
  },
  {
    id: '2',
    name: 'Echinacea Root Tincture',
    description: 'Boost your immune system naturally with our premium Echinacea Root Tincture. Made from organically grown echinacea plants, this tincture helps support your body\'s natural defense mechanisms. Contains no artificial additives or preservatives.',
    price: 12.99,
    category: 'Tinctures',
    color: PRODUCT_COLORS.echinacea,
    vendor: "Herbal Remedies",
    stock: 45
  },
  {
    id: '3',
    name: 'Chamomile Tea Blend',
    description: 'Soothing blend for a peaceful night\'s sleep. Our chamomile tea blend combines Egyptian chamomile flowers with lemon balm and a hint of lavender for a calming experience. Each tea bag is biodegradable and contains only organic ingredients.',
    price: 6.99,
    category: 'Teas',
    color: PRODUCT_COLORS.chamomile,
    vendor: "Mountain Tea Co.",
    stock: 78
  },
  {
    id: '4',
    name: 'Peppermint Essential Oil',
    description: 'Refreshing and invigorating. 100% pure peppermint essential oil steam-distilled from organic peppermint leaves. Perfect for aromatherapy, massage (when diluted), or adding to homemade cleaning products. Comes in a dark glass bottle to preserve potency.',
    price: 9.99,
    category: 'Essential Oils',
    color: PRODUCT_COLORS.peppermint,
    vendor: "Pure Essentials",
    stock: 32
  },
];

// Categories
export const CATEGORIES = [
  { id: '1', name: 'Herbs', icon: '🌿' },
  { id: '2', name: 'Teas', icon: '🍵' },
  { id: '3', name: 'Tinctures', icon: '💧' },
  { id: '4', name: 'Essential Oils', icon: '🧴' },
  { id: '5', name: 'Packs', icon: '📦' },
]; 