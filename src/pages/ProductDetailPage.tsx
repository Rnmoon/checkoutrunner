import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { products, Product } from "@/data/products";

// Sample reviews data
const reviewList = [
  {
    id: 1,
    user: "John D.",
    rating: 5,
    date: "2023-08-15",
    title: "Amazing product!",
    comment: "This product exceeded my expectations. The quality is top-notch and I would definitely recommend it.",
  },
  {
    id: 2,
    user: "Sarah M.",
    rating: 4,
    date: "2023-07-22",
    title: "Great but could be better",
    comment: "Overall I'm satisfied with this purchase. It works as described, but there are a few minor issues.",
  },
  {
    id: 3,
    user: "Mike R.",
    rating: 5,
    date: "2023-06-30",
    title: "Best purchase I've made",
    comment: "This is by far the best product I've bought this year. It's worth every penny!",
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  // Fetch product data
  useEffect(() => {
    setLoading(true);
    // Find product by ID
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0] || foundProduct.image);
      
      // Set related products (same category, different id)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
      
      // Set default color if product has colors property
      if (foundProduct.colors) {
        setSelectedColor(foundProduct.colors[0]);
      }
    } else {
      // Product not found, redirect to products page
      toast.error("Product not found");
      navigate("/products");
    }
    
    setLoading(false);
  }, [productId, navigate]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${product.name} (${quantity}) added to cart`);
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (loading || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Loading product...</h2>
            <p className="text-gray-500">Please wait while we fetch the product details</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-shopblue-500">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-shopblue-500">Products</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      mainImage === image
                        ? "border-shopblue-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={`${
                        index < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.discount ? (
                  <>
                    <div className="text-3xl font-bold text-gray-900">
                      ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </div>
                  </>
                ) : (
                  <div className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection - only show if product has colors */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Color
                  </h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-md border ${
                          selectedColor === color
                            ? "border-shopblue-500 bg-shopblue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
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
                  variant="ghost"
                  size="icon"
                  onClick={handleWishlistToggle}
                  className={`ml-2 ${
                    isInWishlist(product.id)
                      ? "text-red-500 animate-pulse"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Stock and SKU */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center text-gray-600">
                  <div className="w-24 font-medium">Availability:</div>
                  <div className={product.inStock ? "text-green-500" : "text-red-500"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-24 font-medium">Brand:</div>
                  <div>{product.brand}</div>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-24 font-medium">Category:</div>
                  <div className="capitalize">{product.category}</div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1.5 bg-gray-100 rounded-full text-gray-500">
                    <Truck size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-500">Free shipping on orders over $50</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1.5 bg-gray-100 rounded-full text-gray-500">
                    <RotateCcw size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Easy Returns</div>
                    <div className="text-sm text-gray-500">30-day return policy</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1.5 bg-gray-100 rounded-full text-gray-500">
                    <Shield size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Secure Checkout</div>
                    <div className="text-sm text-gray-500">SSL encrypted payment processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full border-b border-gray-200 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="px-1">
                <div className="space-y-6">
                  <p className="text-gray-600">{product.description}</p>

                  {product.features && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check
                              size={18}
                              className="text-shopblue-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="px-1">
                <div className="border-t border-gray-200">
                  {Object.entries(product.specifications).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className={`py-3 flex ${
                          index !==
                            Object.entries(product.specifications).length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                      >
                        <div className="w-1/3 font-medium text-gray-900">
                          {key}
                        </div>
                        <div className="w-2/3 text-gray-600">{value}</div>
                      </div>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="px-1">
                <div className="space-y-6">
                  {reviewList.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              size={16}
                              className={`${
                                index < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {review.date}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {review.title}
                      </h4>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
