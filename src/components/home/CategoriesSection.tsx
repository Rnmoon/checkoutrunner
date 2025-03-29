import { Link } from "react-router-dom";
import { 
  MdDevices, 
  MdPhoneIphone, 
  MdChair, 
  MdWatch, 
  MdShoppingBag, 
  MdKitchen, 
  MdChildCare,
  MdStorefront
} from "react-icons/md";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <MdDevices className="h-8 w-8" />,
    path: "/categories/electronics",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Smartphones",
    icon: <MdPhoneIphone className="h-8 w-8" />,
    path: "/categories/smartphones",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    name: "Furniture",
    icon: <MdChair className="h-8 w-8" />,
    path: "/categories/furniture",
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    name: "Watches",
    icon: <MdWatch className="h-8 w-8" />,
    path: "/categories/watches",
    color: "from-red-500 to-red-600"
  },
  {
    id: 5,
    name: "Fashion",
    icon: <MdShoppingBag className="h-8 w-8" />,
    path: "/categories/fashion",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 6,
    name: "Kitchen",
    icon: <MdKitchen className="h-8 w-8" />,
    path: "/categories/kitchen",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 7,
    name: "Kids",
    icon: <MdChildCare className="h-8 w-8" />,
    path: "/categories/kids",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 8,
    name: "All Products",
    icon: <MdStorefront className="h-8 w-8" />,
    path: "/products",
    color: "from-indigo-500 to-indigo-600"
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collection of products across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${category.color}`}>
              </div>
              
              <div className="relative p-8 flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-gray-50 group-hover:bg-white/20 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <span className="text-base font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
