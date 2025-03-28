import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal, ArrowUpDown, Grid3X3, LayoutGrid } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    discountPrice: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.5,
    reviews: 127,
    category: "Electronics",
    isNew: true,
    isSale: true,
    brand: "SoundMaster",
    tags: ["headphones", "wireless", "audio"]
  },
  {
    id: 2,
    name: "Premium Smart Watch",
    price: 299.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviews: 95,
    category: "Electronics",
    isNew: true,
    isSale: false,
    brand: "TechFit",
    tags: ["smartwatch", "fitness", "wearable"]
  },
  {
    id: 3,
    name: "Designer Coffee Table",
    price: 349.99,
    discountPrice: 299.99,
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.2,
    reviews: 48,
    category: "Furniture",
    isNew: false,
    isSale: true,
    brand: "HomeElegance",
    tags: ["furniture", "living room", "wood"]
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    rating: 4.0,
    reviews: 75,
    category: "Fashion",
    isNew: false,
    isSale: false,
    brand: "EcoWear",
    tags: ["clothing", "sustainable", "casual"]
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 1299.99,
    discountPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    rating: 4.9,
    reviews: 203,
    category: "Electronics",
    isNew: false,
    isSale: true,
    brand: "PhotoPro",
    tags: ["camera", "photography", "professional"]
  },
  {
    id: 6,
    name: "Modern Desk Lamp",
    price: 79.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    rating: 4.3,
    reviews: 31,
    category: "Home",
    isNew: true,
    isSale: false,
    brand: "LightLife",
    tags: ["lighting", "desk", "home office"]
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 49.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    rating: 4.1,
    reviews: 67,
    category: "Accessories",
    isNew: false,
    isSale: true,
    brand: "LeatherCraft",
    tags: ["wallet", "accessories", "leather"]
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 4.4,
    reviews: 89,
    category: "Kitchen",
    isNew: false,
    isSale: false,
    brand: "HydroLife",
    tags: ["water bottle", "eco-friendly", "kitchen"]
  },
  {
    id: 9,
    name: "Ultra-thin Laptop",
    price: 1499.99,
    discountPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.7,
    reviews: 156,
    category: "Electronics",
    isNew: true,
    isSale: true,
    brand: "TechPro",
    tags: ["laptop", "computer", "ultrabook"]
  },
  {
    id: 10,
    name: "Ergonomic Office Chair",
    price: 249.99,
    discountPrice: 199.99,
    image: "https://images.unsplash.com/photo-1589384376604-e198d071b4f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    reviews: 72,
    category: "Furniture",
    isNew: false,
    isSale: true,
    brand: "ComfortSeating",
    tags: ["chair", "office", "ergonomic"]
  },
  {
    id: 11,
    name: "Smart Home Security Camera",
    price: 129.99,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1558002038-1055e2e28fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.4,
    reviews: 103,
    category: "Electronics",
    isNew: true,
    isSale: false,
    brand: "SecureHome",
    tags: ["security", "camera", "smart home"]
  },
  {
    id: 12,
    name: "Wireless Bluetooth Speaker",
    price: 89.99,
    discountPrice: 69.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    rating: 4.3,
    reviews: 85,
    category: "Electronics",
    isNew: false,
    isSale: true,
    brand: "SoundMaster",
    tags: ["speaker", "bluetooth", "wireless"]
  },
];

// Extract unique categories, brands
const categories = Array.from(new Set(allProducts.map(product => product.category)));
const brands = Array.from(new Set(allProducts.map(product => product.brand)));

const ProductsPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [gridView, setGridView] = useState('grid'); // 'grid' or 'list'
  const [sortOption, setSortOption] = useState('featured');
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    category ? [category] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [showOnSale, setShowOnSale] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  
  // Search query from URL
  const searchQuery = searchParams.get('q') || '';

  // Filter products based on filters
  useEffect(() => {
    let result = [...allProducts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => {
        const price = product.discountPrice || product.price;
        return price >= priceRange[0] && price <= priceRange[1];
      }
    );
    
    // Filter by rating
    if (selectedRatings.length > 0) {
      result = result.filter(product => 
        selectedRatings.includes(Math.floor(product.rating))
      );
    }
    
    // Filter by sale status
    if (showOnSale) {
      result = result.filter(product => product.isSale);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // 'featured'
        // Keep default order
        break;
    }
    
    setFilteredProducts(result);
  }, [
    searchQuery,
    selectedCategories,
    selectedBrands,
    priceRange,
    selectedRatings,
    showOnSale,
    showInStock,
    sortOption,
  ]);

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId]);
    const product = products.find((p) => p.id === productId);
    toast.success(`${product?.name} added to cart`);
  };

  const handleAddToWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      toast.info("Removed from wishlist");
    } else {
      setWishlist([...wishlist, productId]);
      toast.success("Added to wishlist");
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand)
        ? selectedBrands.filter(b => b !== brand)
        : [...selectedBrands, brand]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(
      selectedRatings.includes(rating)
        ? selectedRatings.filter(r => r !== rating)
        : [...selectedRatings, rating]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setPriceRange([0, 1500]);
    setShowOnSale(false);
    setShowInStock(false);
    setSortOption('featured');
  };

  // Filter sidebar component for mobile
  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium text-lg mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label 
                htmlFor={`category-${category}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div>
        <h3 className="font-medium text-lg mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 1500]}
            max={1500}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mb-6"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      {/* Brands */}
      <div>
        <h3 className="font-medium text-lg mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox 
                id={`brand-${brand}`} 
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label 
                htmlFor={`brand-${brand}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ratings */}
      <div>
        <h3 className="font-medium text-lg mb-3">Ratings</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox 
                id={`rating-${rating}`} 
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => toggleRating(rating)}
              />
              <label 
                htmlFor={`rating-${rating}`}
                className="text-sm text-gray-700 cursor-pointer flex items-center"
              >
                {Array(5).fill(0).map((_, index) => (
                  <Star 
                    key={index} 
                    size={16} 
                    className={`${
                      index < rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`} 
                  />
                ))}
                <span className="ml-1">& Up</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Other Filters */}
      <div>
        <h3 className="font-medium text-lg mb-3">Other Filters</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="sale" 
              checked={showOnSale}
              onCheckedChange={() => setShowOnSale(!showOnSale)}
            />
            <label 
              htmlFor="sale"
              className="text-sm text-gray-700 cursor-pointer"
            >
              On Sale
            </label>
          </div>
        </div>
      </div>
      
      {/* Clear Filters */}
      <Button 
        variant="outline" 
        onClick={clearAllFilters}
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {category ? category : searchQuery ? `Search: ${searchQuery}` : "All Products"}
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <FilterSidebar />
            </div>
            
            {/* Product Grid */}
            <div className="flex-grow">
              {/* Top Bar - Mobile Filter Button, Sort, and View Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                      <Filter size={18} className="mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="overflow-y-auto">
                    <SheetHeader className="mb-4">
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Refine your product search
                      </SheetDescription>
                    </SheetHeader>
                    <FilterSidebar />
                  </SheetContent>
                </Sheet>
                
                {/* Sort Dropdown */}
                <div className="flex items-center">
                  <ArrowUpDown size={18} className="mr-2 text-gray-500" />
                  <Select 
                    value={sortOption} 
                    onValueChange={setSortOption}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant={gridView === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setGridView('grid')}
                    className="h-9 w-9"
                  >
                    <Grid3X3 size={18} />
                  </Button>
                  <Button
                    variant={gridView === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setGridView('list')}
                    className="h-9 w-9"
                  >
                    <LayoutGrid size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Product Grid Display */}
              {filteredProducts.length > 0 ? (
                <div className={`grid ${
                  gridView === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                    : 'grid-cols-1 gap-4'
                }`}>
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onAddToWishlist={handleAddToWishlist}
                      inWishlist={wishlist.includes(product.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">
                    No products match your filters. Try adjusting your search criteria.
                  </p>
                  <Button 
                    onClick={clearAllFilters}
                    className="mt-4"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
