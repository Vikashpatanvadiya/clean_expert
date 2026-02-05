import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const phoneNumber = '+919898857306';
  const whatsappNumber = '+919898857306';
  const whatsappMessage = encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.');

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                Professional Home
                <br />
                <span className="text-blue-600">Cleaning Services</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-sm mx-auto lg:mx-0 lg:max-w-lg lg:text-xl">
                Trusted by 1000+ customers in Vadodara. Same-day service with eco-friendly products.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 max-w-sm mx-auto lg:max-w-none lg:flex lg:space-y-0 lg:space-x-4">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block lg:inline-block">
                <Button 
                  size="lg" 
                  className="w-full lg:w-auto h-14 lg:px-8 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl shadow-sm transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Book on WhatsApp
                </Button>
              </a>
              
              <a href={`tel:${phoneNumber}`} className="block lg:inline-block">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full lg:w-auto h-14 lg:px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-2 lg:pt-4">
              <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 lg:flex-row lg:space-x-8 text-sm lg:text-base text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Same Day Service
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Eco-Friendly Products
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Fully Insured
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg lg:shadow-2xl mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <img 
                src="/hero-cleaning.jpg" 
                alt="Professional Cleaning Service"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card - Desktop Only */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
