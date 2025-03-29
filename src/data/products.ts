import { kitchenProducts } from './kitchen-products-new';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  brand: string;
  discount?: number;
  colors?: string[];
  features?: string[];
}

export const products: Product[] = [
  // Electronics Category
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 299.99,
    category: "electronics",
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Bluetooth Version": "5.0",
      "Weight": "250g",
      "Color": "Black"
    },
    inStock: true,
    brand: "SoundMaster",
    discount: 15,
    colors: ["Black", "White", "Blue"],
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Memory Foam Ear Cushions",
      "Voice Assistant Compatible",
      "Foldable Design"
    ]
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking and cellular connectivity.",
    price: 399.99,
    category: "electronics",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "5 days",
      "Water Resistance": "5 ATM",
      "Color": "Silver"
    },
    inStock: true,
    brand: "TechFit",
    colors: ["Silver", "Black", "Rose Gold"],
    features: [
      "Heart Rate Monitoring",
      "ECG App",
      "GPS Tracking",
      "Water Resistant",
      "Sleep Tracking",
      "Cellular Connectivity"
    ]
  },
  {
    id: "3",
    name: "4K Smart TV",
    description: "55-inch 4K Ultra HD Smart TV with built-in streaming apps.",
    price: 799.99,
    category: "electronics",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Screen Size": "55 inch",
      "Resolution": "4K Ultra HD",
      "Smart Features": "Yes",
      "Color": "Black"
    },
    inStock: true,
    brand: "TechVision",
    discount: 20
  },
  {
    id: "4",
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX 3080 graphics card.",
    price: 2499.99,
    category: "electronics",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Processor": "Intel i9-12900H",
      "Graphics": "RTX 3080",
      "RAM": "32GB",
      "Storage": "1TB SSD"
    },
    inStock: true,
    brand: "GamePro"
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    description: "True wireless earbuds with active noise cancellation.",
    price: 199.99,
    category: "electronics",
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Battery Life": "24 hours",
      "Bluetooth Version": "5.0",
      "Weight": "50g",
      "Color": "White"
    },
    inStock: true,
    brand: "SoundMaster",
    discount: 10
  },
  {
    id: "21",
    name: "Professional Camera",
    description: "Mirrorless camera with 4K video capability and advanced autofocus.",
    price: 1499.99,
    category: "electronics",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1599664223843-9349c75196bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1613483187433-8c40c50ed660?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613483187285-e84c582608f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    specifications: {
      "Sensor": "24.2MP Full-Frame",
      "Video": "4K 60fps",
      "Lens Mount": "E-mount",
      "Color": "Black"
    },
    inStock: true,
    brand: "PhotoPro"
  },
  {
    id: "22",
    name: "Gaming Console",
    description: "Next-gen gaming console with 4K graphics and ray tracing.",
    price: 499.99,
    category: "electronics",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Storage": "1TB SSD",
      "Graphics": "4K Ray Tracing",
      "Controller": "Included",
      "Color": "White"
    },
    inStock: true,
    brand: "GameStation",
    discount: 5
  },
  // Fashion Category
  {
    id: "6",
    name: "Classic Denim Jacket",
    description: "Timeless denim jacket with modern fit and premium quality.",
    price: 89.99,
    category: "fashion",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1614693348454-1e0710d21c60?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1551537482-f20739a6a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Material": "100% Cotton Denim",
      "Fit": "Regular",
      "Color": "Classic Blue",
      "Sizes": "XS-XXL"
    },
    inStock: true,
    brand: "DenimCo",
    discount: 20,
    colors: ["Blue", "Black", "Light Wash"],
    features: [
      "Premium Cotton Denim",
      "Button Closure",
      "Multiple Pockets",
      "Adjustable Waist Tabs",
      "Durable Stitching"
    ]
  },
  {
    id: "7",
    name: "Designer Sunglasses",
    description: "Stylish sunglasses with UV protection and polarized lenses.",
    price: 199.99,
    category: "fashion",
    rating: 4.4,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Lens Type": "Polarized",
      "UV Protection": "100%",
      "Frame Material": "Metal",
      "Color": "Black/Gold"
    },
    inStock: true,
    brand: "StyleVision"
  },
  {
    id: "8",
    name: "Running Shoes",
    description: "Comfortable running shoes with cushioning technology.",
    price: 129.99,
    category: "fashion",
    rating: 4.7,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Type": "Running",
      "Cushioning": "Air",
      "Sizes": "7-12",
      "Color": "Red/Black"
    },
    inStock: true,
    brand: "SpeedRunner",
    discount: 15
  },
  {
    id: "23",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and RFID protection.",
    price: 49.99,
    category: "fashion",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Card Slots": "6",
      "RFID Protection": "Yes",
      "Color": "Brown"
    },
    inStock: true,
    brand: "LeatherCraft"
  },
  {
    id: "24",
    name: "Designer Backpack",
    description: "Stylish and functional backpack with laptop compartment.",
    price: 79.99,
    category: "fashion",
    rating: 4.5,
    reviews: 112,
    image: "https://plus.unsplash.com/premium_photo-1723649902616-0dce94980e06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    images: [
      "https://plus.unsplash.com/premium_photo-1723649902593-471185415b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1723649902671-5c7fe98e1def?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    specifications: {
      "Capacity": "25L",
      "Material": "Polyester",
      "Laptop Sleeve": "15.6\"",
      "Color": "Black"
    },
    inStock: true,
    brand: "UrbanGear",
    discount: 10
  },
  // Home & Living Category
  {
    id: "25",
    name: "Modern Leather Sofa",
    description: "Elegant leather sofa with premium comfort and durability.",
    price: 1299.99,
    category: "home",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Color": "Brown",
      "Dimensions": "84\" x 36\" x 34\"",
      "Seating Capacity": "3"
    },
    inStock: true,
    brand: "LuxHome"
  },
  {
    id: "26",
    name: "Smart LED TV Stand",
    description: "Modern TV stand with built-in LED lighting and storage.",
    price: 299.99,
    category: "home",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Material": "Wood & Glass",
      "Color": "Black",
      "Dimensions": "60\" x 20\" x 24\"",
      "LED Lighting": "Yes"
    },
    inStock: true,
    brand: "ModernHome",
    discount: 15
  },
  {
    id: "27",
    name: "Area Rug",
    description: "Modern geometric pattern area rug for living room.",
    price: 249.99,
    category: "home",
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Size": "8' x 10'",
      "Material": "Wool",
      "Pattern": "Geometric",
      "Color": "Gray/White"
    },
    inStock: true,
    brand: "RugArt",
    discount: 25
  },
  {
    id: "28",
    name: "Smart Thermostat",
    description: "WiFi-enabled smart thermostat with energy saving features.",
    price: 199.99,
    category: "home",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "WiFi": "Yes",
      "Compatibility": "iOS/Android",
      "Display": "Color Touchscreen",
      "Color": "White"
    },
    inStock: true,
    brand: "SmartHome",
    discount: 10
  },
  {
    id: "29",
    name: "Smart LED Bulbs",
    description: "Color-changing smart LED bulbs with voice control.",
    price: 49.99,
    category: "home",
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Wattage": "9W",
      "Color Range": "16M colors",
      "Voice Control": "Yes",
      "Pack Size": "2 bulbs"
    },
    inStock: true,
    brand: "SmartLight",
    discount: 20
  },
  // Kitchen Category
  {
    id: "30",
    name: "Professional Blender",
    description: "High-performance blender for smoothies and food processing.",
    price: 159.99,
    category: "kitchen",
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Power": "1200W",
      "Capacity": "64 oz",
      "Speed Settings": "6",
      "Color": "Silver"
    },
    inStock: true,
    brand: "KitchenPro",
    colors: ["Silver", "Black", "Red"],
    features: [
      "Variable Speed Control",
      "Pulse Function",
      "BPA-Free Pitcher",
      "Dishwasher Safe Parts",
      "Hardened Stainless-Steel Blades",
      "Recipe Book Included"
    ]
  },
  {
    id: "31",
    name: "Smart Coffee Maker",
    description: "WiFi-enabled coffee maker with app control and scheduling.",
    price: 129.99,
    category: "kitchen",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1517663154410-3a2a2a2f1c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1517663154410-3a2a2a2f1c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1517663154410-3a2a2a2f1c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "12 cups",
      "WiFi": "Yes",
      "App Control": "Yes",
      "Color": "Black"
    },
    inStock: true,
    brand: "CoffeePro",
    discount: 15
  },
  {
    id: "32",
    name: "Air Fryer",
    description: "Digital air fryer with multiple cooking presets.",
    price: 89.99,
    category: "kitchen",
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "5.8L",
      "Power": "1700W",
      "Presets": "8",
      "Color": "Black"
    },
    inStock: true,
    brand: "KitchenPro",
    discount: 20
  },
  {
    id: "33",
    name: "Smart Refrigerator",
    description: "Smart fridge with touchscreen and internal cameras.",
    price: 2499.99,
    category: "kitchen",
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "28 cu ft",
      "Touchscreen": "Yes",
      "Internal Cameras": "Yes",
      "Color": "Stainless Steel"
    },
    inStock: true,
    brand: "SmartKitchen"
  },
  {
    id: "34",
    name: "Smart Dishwasher",
    description: "Energy-efficient dishwasher with WiFi connectivity.",
    price: 799.99,
    category: "kitchen",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "14 place settings",
      "WiFi": "Yes",
      "Energy Rating": "A+++",
      "Color": "Stainless Steel"
    },
    inStock: true,
    brand: "SmartKitchen",
    discount: 10
  },
  {
    id: "35",
    name: "Smart Microwave",
    description: "Smart microwave with voice control and recipe presets.",
    price: 199.99,
    category: "kitchen",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Power": "1000W",
      "Voice Control": "Yes",
      "Presets": "12",
      "Color": "Black"
    },
    inStock: true,
    brand: "SmartKitchen"
  },
  {
    id: "36",
    name: "Smart Toaster",
    description: "Smart toaster with app control and multiple browning levels.",
    price: 79.99,
    category: "kitchen",
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Slots": "2",
      "WiFi": "Yes",
      "Browning Levels": "7",
      "Color": "Silver"
    },
    inStock: true,
    brand: "SmartKitchen",
    discount: 15
  },
  {
    id: "37",
    name: "Smart Food Processor",
    description: "Smart food processor with multiple attachments and presets.",
    price: 199.99,
    category: "kitchen",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Power": "1000W",
      "Attachments": "8",
      "Presets": "12",
      "Color": "White"
    },
    inStock: true,
    brand: "KitchenPro"
  },
  {
    id: "38",
    name: "Smart Rice Cooker",
    description: "Smart rice cooker with multiple cooking modes and keep warm function.",
    price: 129.99,
    category: "kitchen",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "10 cups",
      "Cooking Modes": "8",
      "Keep Warm": "Yes",
      "Color": "Black"
    },
    inStock: true,
    brand: "KitchenPro",
    discount: 10
  },
  {
    id: "39",
    name: "Smart Slow Cooker",
    description: "Smart slow cooker with app control and temperature monitoring.",
    price: 149.99,
    category: "kitchen",
    rating: 4.7,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "6 quarts",
      "WiFi": "Yes",
      "Temperature Control": "Yes",
      "Color": "Silver"
    },
    inStock: true,
    brand: "KitchenPro"
  },
  {
    id: "40",
    name: "Smart Ice Maker",
    description: "Smart ice maker with WiFi connectivity and multiple ice types.",
    price: 299.99,
    category: "kitchen",
    rating: 4.6,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Ice Types": "3",
      "WiFi": "Yes",
      "Storage": "2.2 lbs",
      "Color": "Stainless Steel"
    },
    inStock: true,
    brand: "SmartKitchen",
    discount: 15
  },
  {
    id: "41",
    name: "Smart Wine Cooler",
    description: "Smart wine cooler with temperature zones and humidity control.",
    price: 399.99,
    category: "kitchen",
    rating: 4.8,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "24 bottles",
      "Temperature Zones": "2",
      "Humidity Control": "Yes",
      "Color": "Black"
    },
    inStock: true,
    brand: "SmartKitchen"
  },
  {
    id: "42",
    name: "Smart Coffee Grinder",
    description: "Smart coffee grinder with multiple grind settings and app control.",
    price: 129.99,
    category: "kitchen",
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Grind Settings": "40",
      "WiFi": "Yes",
      "Timer": "Yes",
      "Color": "Silver"
    },
    inStock: true,
    brand: "CoffeePro",
    discount: 10
  },
  {
    id: "43",
    name: "Smart Food Scale",
    description: "Smart food scale with nutritional tracking and app integration.",
    price: 49.99,
    category: "kitchen",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Max Weight": "11 lbs",
      "Units": "g, oz, lb",
      "App Integration": "Yes",
      "Color": "White"
    },
    inStock: true,
    brand: "SmartKitchen"
  },
  {
    id: "44",
    name: "Smart Pressure Cooker",
    description: "Smart pressure cooker with multiple cooking modes and safety features.",
    price: 199.99,
    category: "kitchen",
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Capacity": "6 quarts",
      "Cooking Modes": "10",
      "Safety Features": "Yes",
      "Color": "Silver"
    },
    inStock: true,
    brand: "KitchenPro",
    discount: 15
  },
  ...kitchenProducts
]; 