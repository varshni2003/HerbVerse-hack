// Mock data for HerbVerse application

// Product data
export const PRODUCTS = [
  {
    id: '1',
    name: 'Organic Lavender Buds',
    description: 'Calming and aromatic, perfect for teas and sachets.',
    price: 5.00,
    image: { uri: 'https://placehold.co/400x300/2d6a4f/FFFFFF.png?text=Lavender' },
    category: 'Herbs',
    vendor: 'Nature\'s Touch Herbs',
    rating: 4.5,
    stock: 100,
  },
  {
    id: '2',
    name: 'Echinacea Root Tincture',
    description: 'Boost your immune system naturally.',
    price: 5.00,
    image: { uri: 'https://placehold.co/400x300/2d6a4f/FFFFFF.png?text=Echinacea' },
    category: 'Tinctures',
    vendor: 'Wellness Potions',
    rating: 4.8,
    stock: 50,
  },
  {
    id: '3',
    name: 'Chamomile Tea Blend',
    description: 'Soothing blend for a peaceful night\'s sleep.',
    price: 5.00,
    image: { uri: 'https://placehold.co/400x300/2d6a4f/FFFFFF.png?text=Chamomile' },
    category: 'Teas',
    vendor: 'Nature\'s Touch Herbs',
    rating: 4.7,
    stock: 75,
  },
  {
    id: '4',
    name: 'Peppermint Essential Oil',
    description: 'Refreshing and invigorating. 100% pure.',
    price: 5.00,
    image: { uri: 'https://placehold.co/400x300/2d6a4f/FFFFFF.png?text=Peppermint' },
    category: 'Essential Oils',
    vendor: 'Botanical Essences',
    rating: 4.9,
    stock: 60,
  },
  {
    id: '5',
    name: 'Winter Wellness Pack',
    description: 'Includes Echinacea Tincture, Elderberry Syrup, and a soothing Throat Coat Tea. Everything you need to support your immune system and well-being during the colder months.',
    price: 5.00,
    image: { uri: 'https://placehold.co/400x300/2d6a4f/FFFFFF.png?text=Wellness+Pack' },
    category: 'Packs',
    vendor: 'Wellness Potions',
    rating: 4.6,
    stock: 30,
  },
];

// Categories
export const CATEGORIES = [
  {
    id: '1',
    name: 'Herbs',
    icon: 'leaf',
  },
  {
    id: '2',
    name: 'Teas',
    icon: 'cup',
  },
  {
    id: '3',
    name: 'Tinctures',
    icon: 'flask',
  },
  {
    id: '4',
    name: 'Essential Oils',
    icon: 'drop',
  },
  {
    id: '5',
    name: 'Packs',
    icon: 'package',
  },
];

// Cart items
export const CART_ITEMS = [
  {
    id: '1',
    product: PRODUCTS[0],
    quantity: 2,
  },
  {
    id: '2',
    product: PRODUCTS[2],
    quantity: 1,
  },
];

// Orders
export const ORDERS = [
  {
    id: 'ORD001',
    date: '10/15/2023',
    items: [
      {
        product: PRODUCTS[1],
        quantity: 1,
      },
    ],
    total: 5.00,
    status: 'Delivered',
  },
  {
    id: 'ORD002',
    date: '11/1/2023',
    items: [
      {
        product: PRODUCTS[0],
        quantity: 1,
      },
      {
        product: PRODUCTS[3],
        quantity: 1,
      },
    ],
    total: 10.00,
    status: 'Shipped',
  },
];

// User profiles
export const CUSTOMER_PROFILE = {
  name: 'Alex Green',
  email: 'alex.green@example.com',
  address: '123 Wellness St, Nature City, NC 12345',
  preferences: {
    darkMode: false,
    language: 'English',
    notifications: true,
  },
};

export const VENDOR_PROFILE = {
  name: 'Sarah',
  storeName: 'Nature\'s Touch Herbs',
  email: 'sarah@naturestouch.com',
  products: [PRODUCTS[0], PRODUCTS[2]],
  earnings: 5.00,
  orders: [
    {
      id: 'RD001',
      customer: 'John Doe',
      items: [{product: PRODUCTS[0], quantity: 2}],
      status: 'New',
      total: 10.00,
    },
    {
      id: 'RD002',
      customer: 'Jane Smith',
      items: [{product: PRODUCTS[2], quantity: 1}],
      status: 'Confirmed',
      total: 5.00,
    },
  ],
  storePerformance: {
    profileCompletion: 80,
    customerRating: 4.5,
  },
}; 