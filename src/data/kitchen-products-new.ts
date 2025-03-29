import { Product } from './products';

export const kitchenProducts: Product[] = [
  {
    id: "30",
    name: "Professional Blender",
    description: "High-performance blender for smoothies and food processing.",
    price: 159.99,
    category: "kitchen",
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    specifications: {
      "Power": "1200W",
      "Capacity": "64 oz",
      "Speed Settings": "6",
      "Color": "Silver"
    },
    inStock: true,
    brand: "KitchenPro"
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
  }
]; 