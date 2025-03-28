
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="bg-shopblue-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and get 10% off your first purchase plus
            updates on our latest products and promotions.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button 
              type="submit" 
              className="bg-shopblue-500 text-white hover:bg-shopblue-600"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive
            updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
