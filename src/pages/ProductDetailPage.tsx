
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Truck, 
  RotateCcw, 
  Shield, 
  Minus, 
  Plus,
  Check,
  ChevronRight 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { toast } from "sonner";

// Sample product data (would come from an API in real app)
const product = {
  id: 1,
  name: "Wireless Noise Cancelling Headphones",
  price: 199.99,
  discountPrice: 149.99,
  description: "Experience premium sound quality with our wireless noise-cancelling headphones. These over-ear headphones feature advanced noise cancellation technology, up to 30 hours of battery life, and comfortable memory foam ear cups for extended listening sessions.",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ],
  rating: 4.5,
  reviews: 127,
  category: "Electronics",
  brand: "SoundMaster",
  sku: "SM-WH-100",
  availability: "In Stock",
  colors: ["Black", "Silver", "Blue"],
  features: [
    "Active Noise Cancellation",
    "30-hour Battery Life",
    "Bluetooth 5.0",
    "Memory Foam Ear Cushions",
    "Voice Assistant Compatible",
    "Foldable Design",
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Impedance": "32 Ohm",
    "Battery Type": "Lithium-ion",
    "Charging Time": "2 hours",
    "Weight": "250g",
    "Wireless Range": "10m (33ft)",
    "Connectivity": "Bluetooth 5.0, 3.5mm jack",
  },
  reviews: [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2023-08-15",
      title: "Amazing sound quality!",
      comment: "These headphones are incredible. The noise cancellation works perfectly, and the sound quality is top-notch. Battery life is as advertised.",
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2023-07-22",
      title: "Great but a bit heavy",
      comment: "Sound quality is excellent, and I love the noise cancellation. My only complaint is they get a bit heavy after a few hours of wear.",
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      date: "2023-06-30",
      title: "Best headphones I've owned",
      comment: "These are by far the best headphones I've ever owned. The sound quality is amazing, they're comfortable, and the battery lasts forever.",
    },
  ],
  relatedProducts: [2, 5, 9, 12],
};

// Related products data
const relatedProducts = [
  {
    id: 2,
    name: "Premium Smart Watch",
    price: 299.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviews: 95,
    category: "Electronics",
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 1299.99,
    discountPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    rating: 4.9,
    reviews: 203,
    category: "Electronics",
    isNew: false,
    isSale: true,
  },
  {
    id: 9,
    name: "Ultra-thin Laptop",
    price: 1499.99,
    discountPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.7,
    reviews: 156,
    category: "Electronics",
    isNew: true,
    isSale: true,
  },
  {
    id: 12,
    name: "Wireless Bluetooth Speaker",
    price: 89.99,
    discountPrice: 69.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    rating: 4.3,
    reviews: 85,
    category: "Electronics",
    isNew: false,
    isSale: true,
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);
  
  const handleAddToCart = () => {
    toast.success(`${product.name} (${quantity}) added to cart`);
  };
  
  const handleAddToWishlist = () => {
    setInWishlist(!inWishlist);
    if (!inWishlist) {
      toast.success("Added to wishlist");
    } else {
      toast.info("Removed from wishlist");
    }
  };
  
  const handleRelatedProductAdd = (productId: number) => {
    const relatedProduct = relatedProducts.find(p => p.id === productId);
    toast.success(`${relatedProduct?.name} added to cart`);
  };
  
  const handleRelatedProductWishlist = (productId: number) => {
    toast.success("Added to wishlist");
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-shopblue-500">Home</Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to="/products" className="hover:text-shopblue-500">Products</Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to={`/categories/${product.category.toLowerCase()}`} className="hover:text-shopblue-500">
                {product.category}
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-800">{product.name}</span>
            </nav>
          </div>
          
          {/* Product Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                      mainImage === image ? "border-shopblue-500" : "border-transparent"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-shopblue-600 mr-2">
                      ${product.discountPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.price}
                    </span>
                    <Badge className="ml-2 bg-red-500 hover:bg-red-600">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </Badge>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-shopblue-600">
                    ${product.price}
                  </span>
                )}
              </div>
              
              {/* Short Description */}
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 rounded-full border ${
                        selectedColor === color
                          ? "border-shopblue-500 bg-shopblue-50 text-shopblue-600"
                          : "border-gray-300 text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-l-md"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-x border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-r-md"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="flex-grow bg-shopblue-500 hover:bg-shopblue-600"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleAddToWishlist}
                  className={`px-4 ${
                    inWishlist
                      ? "text-red-500 border-red-300 hover:bg-red-50"
                      : "text-gray-600 hover:text-shopblue-500"
                  }`}
                >
                  <Heart size={18} className={inWishlist ? "fill-red-500" : ""} />
                </Button>
              </div>
              
              {/* SKU & Availability */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <div className="sm:mr-8 mb-2 sm:mb-0">
                  <span className="text-sm text-gray-500">SKU: </span>
                  <span className="text-sm font-medium">{product.sku}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Availability: </span>
                  <span className="text-sm font-medium text-green-600">
                    {product.availability}
                  </span>
                </div>
              </div>
              
              {/* Shipping Info */}
              <div className="border-t border-b border-gray-200 py-6 space-y-4">
                <div className="flex items-start">
                  <Truck size={20} className="text-shopblue-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Free Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Free standard shipping on orders over $50
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RotateCcw size={20} className="text-shopblue-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Easy Returns</h4>
                    <p className="text-sm text-gray-600">
                      30-day return policy for eligible items
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield size={20} className="text-shopblue-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Warranty</h4>
                    <p className="text-sm text-gray-600">
                      2-year manufacturer warranty included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="mb-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full border-b border-gray-200 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="px-1">
                <div className="space-y-6">
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-800">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-shopblue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="px-1">
                <div className="border-t border-gray-200">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div 
                      key={index}
                      className={`py-3 flex ${
                        index !== Object.entries(product.specifications).length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="font-medium text-gray-700 w-1/3">{key}</span>
                      <span className="text-gray-600 w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="px-1">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < product.rating
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 ml-2 text-lg font-medium">
                      {product.rating} out of 5
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-800">{review.title}</h4>
                            <div className="flex items-center">
                              <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className={`${
                                      i < review.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-2">
                                by {review.user} on {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline">Write a Review</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleRelatedProductAdd}
                  onAddToWishlist={handleRelatedProductWishlist}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
