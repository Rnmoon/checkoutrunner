
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  onAddToWishlist: (productId: number) => void;
  inWishlist?: boolean;
}

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onAddToWishlist,
  inWishlist = false
}: ProductCardProps) => {
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
            className={`rounded-full bg-white ${
              inWishlist 
                ? "text-red-500 hover:bg-red-50" 
                : "text-shopblue-500 hover:bg-shopblue-50"
            }`}
            onClick={() => onAddToWishlist(product.id)}
          >
            <Heart size={18} className={inWishlist ? "fill-red-500" : ""} />
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

export default ProductCard;
