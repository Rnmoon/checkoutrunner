
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    discountPrice: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    quantity: 1,
    color: "Black",
  },
  {
    id: 9,
    name: "Ultra-thin Laptop",
    price: 1499.99,
    discountPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    quantity: 1,
    color: "Silver",
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + (item.discountPrice || item.price) * item.quantity,
    0
  );
  
  // Fixed shipping rate
  const shipping = subtotal > 100 ? 0 : 10;
  
  // Total
  const total = subtotal + shipping - promoDiscount;
  
  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const handleRemoveItem = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    toast.success("Item removed from cart");
  };
  
  const handleApplyPromo = () => {
    if (!promoCode) {
      toast.error("Please enter a promo code");
      return;
    }
    
    if (promoCode.toUpperCase() === "SAVE10") {
      setPromoDiscount(subtotal * 0.1);
      setIsPromoApplied(true);
      toast.success("Promo code applied successfully!");
    } else {
      toast.error("Invalid promo code");
    }
  };
  
  // Empty Cart View
  if (cartItems.length === 0) {
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
                
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-gray-100"
                  >
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-6">
                      <div className="flex">
                        <div className="w-20 h-20 flex-shrink-0">
                          <Link to={`/products/${item.id}`}>
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded-md"
                            />
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link to={`/products/${item.id}`}>
                            <h3 className="font-medium hover:text-shopblue-500">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-500">Color: {item.color}</p>
                          
                          {/* Mobile Price */}
                          <div className="md:hidden flex items-center mt-2">
                            <span className="text-gray-600 mr-2">Price:</span>
                            {item.discountPrice ? (
                              <div>
                                <span className="font-semibold text-gray-800">
                                  ${item.discountPrice.toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-semibold text-gray-800">
                                ${item.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          {/* Mobile Quantity */}
                          <div className="md:hidden flex items-center mt-2">
                            <span className="text-gray-600 mr-2">Quantity:</span>
                            <div className="flex border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="px-2 py-1 bg-gray-100"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                className="w-10 text-center border-x border-gray-300"
                              />
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
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
                              ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                            </span>
                          </div>
                          
                          {/* Mobile Remove Button */}
                          <div className="md:hidden mt-2">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 text-sm flex items-center hover:text-red-600"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Price */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      {item.discountPrice ? (
                        <div className="text-center">
                          <div className="font-semibold text-gray-800">
                            ${item.discountPrice.toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-500 line-through">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <span className="font-semibold text-gray-800">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {/* Desktop Quantity */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      <div className="flex border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-10 text-center border-x border-gray-300"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Desktop Total & Remove */}
                    <div className="hidden md:block md:col-span-2 text-right">
                      <div className="font-semibold text-gray-800 mb-1">
                        ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 text-sm flex items-center ml-auto hover:text-red-600"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between items-center mt-6">
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
                    <span>${subtotal.toFixed(2)}</span>
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
                <div className="mb-6">
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={isPromoApplied}
                      className="flex-grow"
                    />
                    <Button 
                      onClick={handleApplyPromo}
                      variant="outline"
                      disabled={isPromoApplied}
                    >
                      Apply
                    </Button>
                  </div>
                  {isPromoApplied && (
                    <p className="text-green-600 text-sm mt-2">
                      Promo code "SAVE10" applied!
                    </p>
                  )}
                  {!isPromoApplied && (
                    <p className="text-gray-500 text-sm mt-2">
                      Try "SAVE10" for 10% off
                    </p>
                  )}
                </div>
                
                {/* Checkout Button */}
                <Link to="/checkout">
                  <Button className="w-full bg-shopblue-500 hover:bg-shopblue-600">
                    Proceed to Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                
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
