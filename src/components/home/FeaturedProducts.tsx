
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Sample featured product data
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    discountPrice: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.5,
    reviews: 127,
    category: "Electronics",
    isNew: true,
    isSale: true,
  },
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
    id: 3,
    name: "Designer Coffee Table",
    price: 349.99,
    discountPrice: 299.99,
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.2,
    reviews: 48,
    category: "Furniture",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    rating: 4.0,
    reviews: 75,
    category: "Fashion",
    isNew: false,
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
    id: 6,
    name: "Modern Desk Lamp",
    price: 79.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    rating: 4.3,
    reviews: 31,
    category: "Home",
    isNew: true,
    isSale: false,
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 49.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    rating: 4.1,
    reviews: 67,
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 4.4,
    reviews: 89,
    category: "Kitchen",
    isNew: false,
    isSale: false,
  },
];

interface ProductCardProps {
  product: typeof featuredProducts[0];
  onAddToCart: (productId: number) => void;
  onAddToWishlist: (productId: number) => void;
}

const ProductCard = ({ product, onAddToCart, onAddToWishlist }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-2 right-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white hover:bg-shopblue-50 text-shopblue-500"
            onClick={() => onAddToWishlist(product.id)}
          >
            <Heart size={18} />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/categories/${product.category.toLowerCase()}`}>
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        </Link>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-800 mb-2 hover:text-shopblue-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
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
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {product.discountPrice ? (
              <>
                <span className="font-semibold text-lg text-shopblue-600">
                  ${product.discountPrice}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="font-semibold text-lg text-shopblue-600">
                ${product.price}
              </span>
            )}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-shopblue-500 hover:bg-shopblue-50"
            onClick={() => onAddToCart(product.id)}
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId]);
    const product = featuredProducts.find((p) => p.id === productId);
    toast.success(`${product?.name} added to cart`);
  };

  const handleAddToWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      toast.info("Removed from wishlist");
    } else {
      setWishlist([...wishlist, productId]);
      toast.success("Added to wishlist");
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Featured Products
        </h2>
        <Link
          to="/products"
          className="text-shopblue-500 font-medium hover:text-shopblue-600"
        >
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
