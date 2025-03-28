
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, CreditCard, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Sample order summary data
const orderSummary = {
  subtotal: 1449.98,
  shipping: 0,
  discount: 144.99,
  total: 1304.99,
  items: [
    {
      id: 1,
      name: "Wireless Noise Cancelling Headphones",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 9,
      name: "Ultra-thin Laptop",
      price: 1299.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
  ],
};

// Order confirmation steps
enum CheckoutStep {
  SHIPPING = "shipping",
  PAYMENT = "payment",
  REVIEW = "review",
  CONFIRMATION = "confirmation",
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.SHIPPING);
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    saveInfo: false,
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    sameAsShipping: true,
  });
  
  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };
  
  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleContinueToPayment = () => {
    // Validate shipping form
    if (
      !shippingInfo.firstName ||
      !shippingInfo.lastName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.state ||
      !shippingInfo.zipCode
    ) {
      toast.error("Please fill in all required shipping fields");
      return;
    }
    
    setCurrentStep(CheckoutStep.PAYMENT);
  };
  
  const handleContinueToReview = () => {
    // Validate payment form
    if (
      !paymentInfo.cardName ||
      !paymentInfo.cardNumber ||
      !paymentInfo.expMonth ||
      !paymentInfo.expYear ||
      !paymentInfo.cvv
    ) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    setCurrentStep(CheckoutStep.REVIEW);
  };
  
  const handlePlaceOrder = () => {
    setLoading(true);
    
    // Simulate API call for order placement
    setTimeout(() => {
      setLoading(false);
      setCurrentStep(CheckoutStep.CONFIRMATION);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-shopblue-500">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/cart" className="hover:text-shopblue-500">Cart</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-800">Checkout</span>
          </nav>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Checkout
          </h1>
          
          {/* Checkout Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === CheckoutStep.SHIPPING || 
                  currentStep === CheckoutStep.PAYMENT ||
                  currentStep === CheckoutStep.REVIEW ||
                  currentStep === CheckoutStep.CONFIRMATION
                    ? "bg-shopblue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  1
                </div>
                <span className="text-xs mt-1">Shipping</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                currentStep === CheckoutStep.PAYMENT ||
                currentStep === CheckoutStep.REVIEW ||
                currentStep === CheckoutStep.CONFIRMATION
                  ? "bg-shopblue-500"
                  : "bg-gray-200"
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === CheckoutStep.PAYMENT ||
                  currentStep === CheckoutStep.REVIEW ||
                  currentStep === CheckoutStep.CONFIRMATION
                    ? "bg-shopblue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  2
                </div>
                <span className="text-xs mt-1">Payment</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                currentStep === CheckoutStep.REVIEW ||
                currentStep === CheckoutStep.CONFIRMATION
                  ? "bg-shopblue-500"
                  : "bg-gray-200"
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === CheckoutStep.REVIEW ||
                  currentStep === CheckoutStep.CONFIRMATION
                    ? "bg-shopblue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  3
                </div>
                <span className="text-xs mt-1">Review</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                currentStep === CheckoutStep.CONFIRMATION
                  ? "bg-shopblue-500"
                  : "bg-gray-200"
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === CheckoutStep.CONFIRMATION
                    ? "bg-shopblue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  4
                </div>
                <span className="text-xs mt-1">Confirmation</span>
              </div>
            </div>
          </div>
          
          {/* Order Confirmation */}
          {currentStep === CheckoutStep.CONFIRMATION ? (
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Thank You for Your Order!
              </h2>
              <p className="text-gray-600 mb-6">
                Your order has been placed successfully. We've sent a confirmation email to {shippingInfo.email}.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Order Number</h3>
                <p className="text-lg text-shopblue-500 font-mono">#ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
              <p className="text-gray-600 mb-8">
                You can track your order status in your account dashboard.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/products">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="bg-shopblue-500 hover:bg-shopblue-600">
                    Track Your Order
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Checkout Form */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  {/* Shipping Information */}
                  <div className={currentStep !== CheckoutStep.SHIPPING ? "hidden" : ""}>
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                      Shipping Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address *
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={shippingInfo.address}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                          Apartment, Suite, etc. (optional)
                        </label>
                        <Input
                          id="apartment"
                          name="apartment"
                          value={shippingInfo.apartment}
                          onChange={handleShippingInfoChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State/Province *
                        </label>
                        <Select 
                          value={shippingInfo.state} 
                          onValueChange={(value) => handleSelectChange("state", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="CO">Colorado</SelectItem>
                            <SelectItem value="CT">Connecticut</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            <SelectItem value="GA">Georgia</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="WA">Washington</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code *
                        </label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={handleShippingInfoChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <Select 
                          value={shippingInfo.country} 
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="CA">Canada</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="AU">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <Checkbox
                        id="saveInfo"
                        name="saveInfo"
                        checked={shippingInfo.saveInfo}
                        onCheckedChange={() => 
                          setShippingInfo({
                            ...shippingInfo,
                            saveInfo: !shippingInfo.saveInfo,
                          })
                        }
                      />
                      <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
                        Save this information for next time
                      </label>
                    </div>
                    
                    <Button 
                      onClick={handleContinueToPayment}
                      className="w-full bg-shopblue-500 hover:bg-shopblue-600"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                  
                  {/* Payment Information */}
                  <div className={currentStep !== CheckoutStep.PAYMENT ? "hidden" : ""}>
                    <div className="flex items-center mb-6">
                      <Button 
                        variant="ghost" 
                        className="text-gray-500 p-0 mr-2"
                        onClick={() => setCurrentStep(CheckoutStep.SHIPPING)}
                      >
                        <ChevronRight className="rotate-180" size={16} />
                      </Button>
                      <h2 className="text-xl font-bold text-gray-800">
                        Payment Method
                      </h2>
                    </div>
                    
                    <div className="mb-6">
                      <div className="border rounded-lg p-4 mb-4 flex items-center bg-gray-50">
                        <div className="w-10 h-10 rounded-full bg-shopblue-100 flex items-center justify-center mr-3">
                          <CreditCard size={20} className="text-shopblue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Credit/Debit Card</h3>
                          <p className="text-xs text-gray-500">
                            We accept Visa, Mastercard, American Express, and Discover
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="md:col-span-2">
                          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                            Name on Card *
                          </label>
                          <Input
                            id="cardName"
                            name="cardName"
                            value={paymentInfo.cardName}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number *
                          </label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentInfoChange}
                            placeholder="•••• •••• •••• ••••"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Month *
                          </label>
                          <Select 
                            value={paymentInfo.expMonth} 
                            onValueChange={(value) => setPaymentInfo({...paymentInfo, expMonth: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="MM" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => {
                                const month = i + 1;
                                const formattedMonth = month.toString().padStart(2, '0');
                                return (
                                  <SelectItem key={month} value={formattedMonth}>
                                    {formattedMonth}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Year *
                          </label>
                          <Select 
                            value={paymentInfo.expYear} 
                            onValueChange={(value) => setPaymentInfo({...paymentInfo, expYear: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="YYYY" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 10 }, (_, i) => {
                                const year = new Date().getFullYear() + i;
                                return (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV *
                          </label>
                          <Input
                            id="cvv"
                            name="cvv"
                            type="password"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentInfoChange}
                            placeholder="•••"
                            required
                            maxLength={4}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <Checkbox
                          id="sameAsShipping"
                          name="sameAsShipping"
                          checked={paymentInfo.sameAsShipping}
                          onCheckedChange={() => 
                            setPaymentInfo({
                              ...paymentInfo,
                              sameAsShipping: !paymentInfo.sameAsShipping,
                            })
                          }
                        />
                        <label htmlFor="sameAsShipping" className="ml-2 text-sm text-gray-600">
                          Billing address is the same as shipping address
                        </label>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleContinueToReview}
                      className="w-full bg-shopblue-500 hover:bg-shopblue-600"
                    >
                      Continue to Review
                    </Button>
                  </div>
                  
                  {/* Order Review */}
                  <div className={currentStep !== CheckoutStep.REVIEW ? "hidden" : ""}>
                    <div className="flex items-center mb-6">
                      <Button 
                        variant="ghost" 
                        className="text-gray-500 p-0 mr-2"
                        onClick={() => setCurrentStep(CheckoutStep.PAYMENT)}
                      >
                        <ChevronRight className="rotate-180" size={16} />
                      </Button>
                      <h2 className="text-xl font-bold text-gray-800">
                        Review Your Order
                      </h2>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      {/* Shipping Information Summary */}
                      <Accordion type="single" collapsible defaultValue="shipping" className="border rounded-lg overflow-hidden">
                        <AccordionItem value="shipping" className="border-none">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-800">Shipping Information</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="text-sm text-gray-600">
                              <p className="font-medium text-gray-800">
                                {shippingInfo.firstName} {shippingInfo.lastName}
                              </p>
                              <p>{shippingInfo.address}</p>
                              {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
                              <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                              <p>{shippingInfo.email}</p>
                              <p>{shippingInfo.phone}</p>
                            </div>
                            <Button 
                              variant="link" 
                              onClick={() => setCurrentStep(CheckoutStep.SHIPPING)}
                              className="p-0 mt-2 text-shopblue-500 hover:text-shopblue-600"
                            >
                              Edit
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
                      {/* Payment Method Summary */}
                      <Accordion type="single" collapsible defaultValue="payment" className="border rounded-lg overflow-hidden">
                        <AccordionItem value="payment" className="border-none">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-800">Payment Method</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="text-sm text-gray-600">
                              <div className="flex items-center">
                                <CreditCard size={16} className="text-gray-500 mr-2" />
                                <span className="font-medium text-gray-800">
                                  Credit Card ending in {paymentInfo.cardNumber.slice(-4)}
                                </span>
                              </div>
                              <p className="mt-1">
                                Expires: {paymentInfo.expMonth}/{paymentInfo.expYear}
                              </p>
                              <p>{paymentInfo.cardName}</p>
                            </div>
                            <Button 
                              variant="link" 
                              onClick={() => setCurrentStep(CheckoutStep.PAYMENT)}
                              className="p-0 mt-2 text-shopblue-500 hover:text-shopblue-600"
                            >
                              Edit
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
                      {/* Order Items */}
                      <div className="border rounded-lg overflow-hidden">
                        <div className="px-4 py-3 bg-gray-50 font-medium text-gray-800">
                          Order Items
                        </div>
                        <div className="p-4">
                          {orderSummary.items.map((item) => (
                            <div key={item.id} className="flex py-2">
                              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="ml-4 flex-grow">
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-gray-800">
                                  ${item.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handlePlaceOrder}
                      disabled={loading}
                      className="w-full bg-shopblue-500 hover:bg-shopblue-600"
                    >
                      {loading ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${orderSummary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>
                        {orderSummary.shipping === 0 ? "Free" : `$${orderSummary.shipping.toFixed(2)}`}
                      </span>
                    </div>
                    {orderSummary.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${orderSummary.discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-b py-3 mb-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${orderSummary.total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Order Items Summary */}
                  <div className="space-y-3">
                    {orderSummary.items.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="ml-3 overflow-hidden">
                          <p className="text-sm text-gray-800 truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
