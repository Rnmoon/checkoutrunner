import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-shopblue-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${(product.discount ? product.price * (1 - product.discount / 100) : product.price).toFixed(2)}
          </span>
          {product.discount && (
            <span className="text-sm text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-yellow-400 ${
                index < Math.floor(product.rating)
                  ? "animate-bounce"
                  : "text-gray-300"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < Math.floor(product.rating) ? (
                <BsStarFill className="h-4 w-4" />
              ) : (
                <BsStar className="h-4 w-4" />
              )}
            </span>
          ))}
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-shopblue-500 hover:bg-shopblue-600 text-white transition-colors group-hover:animate-bounce"
          >
            <FaShoppingCart className="mr-2" />
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
            <FaHeart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
