
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-shopblue-600">
            CheckoutRunner
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-shopblue-500">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-shopblue-500">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-shopblue-500">
              Categories
            </Link>
            <Link to="/deals" className="text-gray-600 hover:text-shopblue-500">
              Deals
            </Link>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden md:flex relative w-1/3">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-shopblue-500">
              <Heart size={20} />
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-shopblue-500">
                <ShoppingCart size={20} />
              </Button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-shopblue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-shopblue-500">
                <User size={20} />
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden relative">
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-shopblue-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-shopblue-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-600 hover:text-shopblue-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/deals" 
                className="text-gray-600 hover:text-shopblue-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <div className="flex space-x-4 py-2">
                <Link to="/wishlist" className="flex items-center text-gray-600 hover:text-shopblue-500">
                  <Heart size={20} className="mr-2" />
                  <span>Wishlist</span>
                </Link>
              </div>
              <div className="flex space-x-4 py-2">
                <Link to="/cart" className="flex items-center text-gray-600 hover:text-shopblue-500">
                  <ShoppingCart size={20} className="mr-2" />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-2 bg-shopblue-500 text-white text-xs px-2 py-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
              <div className="flex space-x-4 py-2">
                <Link to="/login" className="flex items-center text-gray-600 hover:text-shopblue-500">
                  <LogIn size={20} className="mr-2" />
                  <span>Sign In</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
