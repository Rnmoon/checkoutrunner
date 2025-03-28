
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Monitor, 
  Smartphone, 
  Sofa, 
  Watch, 
  Shirt, 
  Utensils, 
  Baby 
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <Monitor className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/electronics",
  },
  {
    id: 2,
    name: "Smartphones",
    icon: <Smartphone className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/smartphones",
  },
  {
    id: 3,
    name: "Furniture",
    icon: <Sofa className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/furniture",
  },
  {
    id: 4,
    name: "Watches",
    icon: <Watch className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/watches",
  },
  {
    id: 5,
    name: "Fashion",
    icon: <Shirt className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/fashion",
  },
  {
    id: 6,
    name: "Kitchen",
    icon: <Utensils className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/kitchen",
  },
  {
    id: 7,
    name: "Kids",
    icon: <Baby className="h-8 w-8 text-shopblue-500" />,
    path: "/categories/kids",
  },
  {
    id: 8,
    name: "All Products",
    icon: <ShoppingBag className="h-8 w-8 text-shopblue-500" />,
    path: "/products",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Shop by Category
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.path}
            className="category-card group"
          >
            <div className="p-4 bg-shopblue-50 rounded-full mb-3 group-hover:bg-shopblue-100 transition-colors">
              {category.icon}
            </div>
            <h3 className="text-gray-700 font-medium text-center">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
