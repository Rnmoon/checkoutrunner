import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

const DealsPage = () => {
  const { addToCart } = useCart();
  // Filter products that have discounts
  const deals = products.filter(product => product.discount);

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart`);
    }
  };

  const handleAddToWishlist = (productId: string) => {
    toast.info("Wishlist feature coming soon!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Special Deals</h1>
            <p className="text-gray-600">
              {deals.length} products on sale
            </p>
          </div>

          {/* Deals Grid */}
          {deals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deals.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No deals available at the moment. Check back later!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage; 