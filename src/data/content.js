export const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONTACT US', href: '#contact' },
];

export const statsData = [
  {
    icon: 'Utensils',
    number: 25,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    icon: 'Users',
    number: 150,
    suffix: '+',
    label: 'Professional Employees',
  },
  {
    icon: 'Sparkles',
    number: 10000,
    suffix: '+',
    label: 'Events Catered',
  },
  {
    icon: 'Handshake',
    number: 35,
    suffix: '+',
    label: 'Business Partners',
  },
];

export const servicesData = [
  {
    id: 'wedding',
    icon: 'Heart',
    title: 'Wedding Catering',
    description: 'Delicious menus and flawless service for your special day.',
    details: 'Customized lavish thalis, authentic regional spreads, live counters, and elegant buffet setups tailored for traditional and destination weddings.'
  },
  {
    id: 'reception',
    icon: 'Cloche',
    title: 'Wedding Reception Catering',
    description: 'Elegant dining experience for unforgettable receptions.',
    details: 'Grand multi-course banquets, international live stations, mocktail lounges, and royal dessert displays that mesmerize guests.'
  },
  {
    id: 'engagement',
    icon: 'Gem',
    title: 'Engagement Catering',
    description: 'Celebrate your engagement with mouth-watering delights.',
    details: 'Sophisticated finger foods, high-tea spreads, traditional meals, and intimate dining solutions for ring ceremonies.'
  },
  {
    id: 'baby-shower',
    icon: 'Baby',
    title: 'Baby Shower Catering',
    description: 'Thoughtfully prepared meals for your joyful occasion.',
    details: 'Hygienic, festive, and traditional Seemantham/Baby Shower menus prepared with love and organic wholesome ingredients.'
  },
  {
    id: 'house-warming',
    icon: 'Home',
    title: 'House Warming Catering',
    description: 'Traditional and hygienic food for your new beginnings.',
    details: 'Satvik morning breakfast spreads, authentic banana leaf lunches, and evening snacks for Gruhapravesam celebrations.'
  },
  {
    id: 'corporate',
    icon: 'Briefcase',
    title: 'Corporate Catering',
    description: 'Professional catering for meetings, conferences and corporate events.',
    details: 'Punctual, executive boxed meals, gala dinner setups, product launch buffets, and daily employee dining solutions.'
  },
  {
    id: 'cafeteria',
    icon: 'UtensilsCrossed',
    title: 'Cafeteria Services',
    description: 'Nutritious and hygienic meals for offices & institutions.',
    details: 'Scalable institutional cafeteria management, customized daily menus, and balanced nutrition for tech parks and colleges.'
  },
  {
    id: 'shamiyana',
    icon: 'Tent',
    title: 'Shamiyana & Event Arrangements',
    description: 'Complete event setups and management services.',
    details: 'Comprehensive event solutions including luxury Shamiyana tents, theme lighting, floral mandap decor, and seating arrangements.'
  }
];

export const galleryCategories = ['ALL', 'WEDDINGS', 'RECEPTIONS', 'CORPORATE EVENTS', 'DECORATIONS'];

export const galleryItems = [
  {
    id: 1,
    category: 'WEDDINGS',
    type: 'photo',
    image: '/assets/real_buffet_serving.jpg',
    title: 'Preethi Caterers Grand Wedding Banquet',
    subtitle: 'Live Serving & Buffet'
  },
  {
    id: 2,
    category: 'WEDDINGS',
    type: 'video',
    videoUrl: '/assets/video1.mp4',
    title: 'Floral Mandap Setup & Live Counters',
    subtitle: 'Wedding Decor Highlights'
  },
  {
    id: 3,
    category: 'RECEPTIONS',
    type: 'photo',
    image: '/assets/real_dessert_fountain.jpg',
    title: 'Preethi Caterers Chocolate Fountain & Desserts',
    subtitle: 'Mangalore & Uppala Dessert Bar'
  },
  {
    id: 4,
    category: 'RECEPTIONS',
    type: 'video',
    videoUrl: '/assets/video2.mp4',
    title: 'Chefs Live Plating & Gourmet Service',
    subtitle: 'Master Chef Showcase'
  },
  {
    id: 5,
    category: 'CORPORATE EVENTS',
    type: 'photo',
    image: '/assets/real_fish_fry.jpg',
    title: 'Preethi Caterers Specialty Fish Fry Spread',
    subtitle: 'Traditional Mangalorean Delicacy'
  },
  {
    id: 6,
    category: 'DECORATIONS',
    type: 'video',
    videoUrl: '/assets/video3.mp4',
    title: 'Traditional South Indian Decor & Flowers',
    subtitle: 'Mangalore Grand Setup'
  },
  {
    id: 7,
    category: 'WEDDINGS',
    type: 'photo',
    image: '/assets/real_hall_dining.jpg',
    title: 'Preethi Caterers Shashidar Poonja Kondevoor Hall',
    subtitle: 'Banana Leaf Dining Setup'
  }
];

export const menuShowcase = [
  {
    category: 'South Indian Sadya',
    items: [
      { name: 'Mangalorean Kori Rotti & Chicken Sukka', price: 'Specialty', tag: 'Chef Favorite' },
      { name: 'Authentic Banana Leaf Sadya (24 Dishes)', price: 'Traditional', tag: 'Bestseller' },
      { name: 'Ghee Rice with Mutton Sukka & Dal Fry', price: 'Royal', tag: 'Popular' },
      { name: 'Appam with Stew & Coconut Milk', price: 'Classic', tag: 'Breakfast Special' },
    ]
  },
  {
    category: 'North Indian Feast',
    items: [
      { name: 'Hyderabadi Dum Biryani (Chicken/Mutton)', price: 'Royal Dish', tag: 'Top Rated' },
      { name: 'Paneer Butter Masala & Garlic Naan', price: 'Vegetarian', tag: 'Classic' },
      { name: 'Dal Makhani & Jeera Rice', price: 'Creamy', tag: 'Comfort Food' },
      { name: 'Tandoori Mixed Platter & Chutneys', price: 'Live Tandoor', tag: 'Hot & Fresh' },
    ]
  },
  {
    category: 'Live Counters & Desserts',
    items: [
      { name: 'Live Chaat Corner (Pani Puri, Sev Puri, Raj Kachori)', price: 'Interactive', tag: 'Guest Hit' },
      { name: 'Live Dosa Station (12 Variations)', price: 'Customized', tag: 'Crispy' },
      { name: 'Saffron Elaneer Payasam & Shahi Tukda', price: 'Sweet Delight', tag: 'Signature' },
      { name: 'Kulfi Falooda & Hot Gulab Jamun with Ice Cream', price: 'Dessert Bar', tag: 'Kids Favorite' },
    ]
  }
];

export const contactDetails = {
  phone1: '098951 88402',
  phone2: '098951 88407',
  location1: 'Malemar, Kottara, Mangalore',
  location2: 'Panchami Plaza, Uppala',
  email: 'info@preethicaterers.com',
  whatsapp: '9895188402'
};
