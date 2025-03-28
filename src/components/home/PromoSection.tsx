
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fashion Promo */}
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Fashion Sale" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/70 to-transparent">
            <span className="text-white text-sm font-medium mb-2">Limited Time Offer</span>
            <h3 className="text-2xl font-bold text-white mb-2">Fashion Sale</h3>
            <p className="text-gray-200 mb-4">Up to 40% off on new arrivals</p>
            <div>
              <Link to="/categories/fashion">
                <Button className="bg-white text-gray-800 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tech Promo */}
        <div className="relative h-80 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
            alt="Tech Gadgets" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/70 to-transparent">
            <span className="text-white text-sm font-medium mb-2">New Collection</span>
            <h3 className="text-2xl font-bold text-white mb-2">Tech Gadgets</h3>
            <p className="text-gray-200 mb-4">Latest innovations at great prices</p>
            <div>
              <Link to="/categories/electronics">
                <Button className="bg-shopblue-500 text-white hover:bg-shopblue-600">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
