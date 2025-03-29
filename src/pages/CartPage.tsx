import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, totalPrice, setCheckoutComplete } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  // Fixed shipping rate
  const shipping = totalPrice > 100 ? 0 : 10;
  
  // Total with shipping and promo
  const total = totalPrice + shipping - promoDiscount;
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success("Item removed from cart");
  };
  
  const handleApplyPromo = () => {
    if (!promoCode) {
      toast.error("Please enter a promo code");
      return;
    }
    
    if (promoCode.toUpperCase() === "SAVE10") {
      setPromoDiscount(totalPrice * 0.1);
      setIsPromoApplied(true);
      toast.success("Promo code applied successfully!");
    } else {
      toast.error("Invalid promo code");
    }
  };
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    // Store the current cart state before navigating
    localStorage.setItem('checkout-cart', JSON.stringify({
      items,
      totalPrice,
      shipping,
      promoDiscount,
      total
    }));
    navigate("/checkout");
  };
  
  // Empty Cart View
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag size={80} className="text-gray-300" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-shopblue-500 hover:bg-shopblue-600">
                Start Shopping
              </Button>
            </Link>
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
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-shopblue-500">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-800">Shopping Cart</span>
          </nav>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Shopping Cart
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="hidden md:grid grid-cols-12 text-gray-600 font-medium border-b pb-4 mb-4">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                
                {items.map((item) => (
                  <div 
                    key={item.product.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-gray-100"
                  >
                    {/* Product Info */}
                    <div className="col-span-6">
                      <div className="flex">
                        <div className="w-20 h-20 flex-shrink-0">
                          <Link to={`/products/${item.product.id}`}>
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover rounded-md"
                            />
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link to={`/products/${item.product.id}`}>
                            <h3 className="font-medium hover:text-shopblue-500">
                              {item.product.name}
                            </h3>
                          </Link>
                          
                          {/* Mobile Price */}
                          <div className="md:hidden flex items-center mt-2">
                            <span className="text-gray-600 mr-2">Price:</span>
                            {item.product.discount ? (
                              <div>
                                <span className="font-semibold text-gray-800">
                                  ${(item.product.price * (1 - item.product.discount / 100)).toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${item.product.price.toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-semibold text-gray-800">
                                ${item.product.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          {/* Mobile Quantity */}
                          <div className="md:hidden flex items-center mt-2">
                            <span className="text-gray-600 mr-2">Quantity:</span>
                            <div className="flex border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 bg-gray-100"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                                className="w-10 text-center border-x border-gray-300"
                              />
                              <button
                                onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          
                          {/* Mobile Total */}
                          <div className="md:hidden flex items-center mt-2">
                            <span className="text-gray-600 mr-2">Total:</span>
                            <span className="font-semibold text-gray-800">
                              ${(item.product.price * item.quantity * (1 - (item.product.discount || 0) / 100)).toFixed(2)}
                            </span>
                          </div>
                          
                          {/* Remove Mobile Remove Button */}
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Price */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      {item.product.discount ? (
                        <div className="text-center">
                          <div className="font-semibold text-gray-800">
                            ${(item.product.price * (1 - item.product.discount / 100)).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-500 line-through">
                            ${item.product.price.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <span className="font-semibold text-gray-800">
                          ${item.product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {/* Desktop Quantity */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      <div className="flex border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                          className="w-10 text-center border-x border-gray-300"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Desktop Total & Remove */}
                    <div className="hidden md:block md:col-span-2 text-right">
                      <div className="font-semibold text-gray-800 mb-1">
                        ${(item.product.price * item.quantity * (1 - (item.product.discount || 0) / 100)).toFixed(2)}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-red-500 text-sm flex items-center ml-auto hover:text-red-600"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6">
                  <Link to="/products" className="text-shopblue-500 hover:text-shopblue-600 flex items-center">
                    <ChevronRight size={16} className="mr-1 rotate-180" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Promo Code */}
                {!isPromoApplied && (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={handleApplyPromo}
                        className="whitespace-nowrap"
                      >
                        Apply
                      </Button>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Try "SAVE10" for 10% off
                    </p>
                  </div>
                )}
                
                <Button 
                  className="w-full mt-6 bg-shopblue-500 hover:bg-shopblue-600"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                
                {/* Secure Checkout */}
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
