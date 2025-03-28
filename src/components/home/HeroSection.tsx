
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Summer Collection",
      description: "Up to 50% off on all summer essentials",
      buttonText: "Shop Now",
      link: "/products",
      color: "shopblue",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1655721530791-65e669fcd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Tech Gadgets",
      description: "Latest tech at incredible prices",
      buttonText: "Explore",
      link: "/categories/electronics",
      color: "gray",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1623000935090-4ae45487a9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Home Decor",
      description: "Transform your space with our collection",
      buttonText: "Discover",
      link: "/categories/home",
      color: "shopblue",
    },
  ];

  return (
    <section className="py-6 md:py-10 px-4 max-w-7xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8 md:p-16">
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-sm md:text-lg text-gray-100 mb-4 md:mb-8 max-w-md">
                    {banner.description}
                  </p>
                  <div>
                    <Link to={banner.link}>
                      <Button 
                        className={`bg-${banner.color === 'shopblue' ? 'shopblue-500 hover:bg-shopblue-600' : 'gray-800 hover:bg-gray-900'} text-white px-6 py-2 rounded-md`}
                      >
                        {banner.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="bg-shopblue-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-shopblue-800">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <img 
              src="https://img.icons8.com/fluency/48/delivery.png" 
              alt="Free Shipping" 
              className="w-12 h-12"
            />
          </div>
        </div>
        
        <div className="bg-shopblue-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-shopblue-800">Money Back</h3>
              <p className="text-sm text-gray-600">30 day guarantee</p>
            </div>
            <img 
              src="https://img.icons8.com/fluency/48/money-bag.png" 
              alt="Money Back" 
              className="w-12 h-12"
            />
          </div>
        </div>
        
        <div className="bg-shopblue-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-shopblue-800">Secure Payment</h3>
              <p className="text-sm text-gray-600">Protected checkout</p>
            </div>
            <img 
              src="https://img.icons8.com/fluency/48/secure.png" 
              alt="Secure Payment" 
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
