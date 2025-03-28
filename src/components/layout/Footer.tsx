
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shopblue-600">CheckoutRunner</h3>
            <p className="text-gray-600 mb-4">
              Your one-stop destination for high-quality products at competitive prices.
              We deliver exceptional shopping experiences with fast shipping and 
              excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-shopblue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shopblue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shopblue-500">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shopblue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-shopblue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-shopblue-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-shopblue-500">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-600 hover:text-shopblue-500">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-shopblue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-shopblue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shopblue-600">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-gray-600 hover:text-shopblue-500">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-shopblue-500">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-600 hover:text-shopblue-500">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-shopblue-500">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-shopblue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shopblue-600">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-shopblue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Commerce Street, Shopping District, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-shopblue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-shopblue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">support@checkoutrunner.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CheckoutRunner. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-shopblue-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-shopblue-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
