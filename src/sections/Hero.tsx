import { Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const phoneNumber = '+919898857306';
  const whatsappNumber = '+919898857306';
  const whatsappMessage = encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#ecfdf5] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight">
                Professional{' '}
                <span className="text-gradient">Sofa & Home</span>{' '}
                Cleaning Services at Your Doorstep
              </h1>
              <p className="text-lg sm:text-xl text-[#64748b] max-w-xl mx-auto lg:mx-0">
                Experience premium cleaning with eco-friendly products, trained professionals, 
                and guaranteed satisfaction. Book now for a sparkling clean home!
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {['Same-Day Service', 'Eco-Friendly Products', 'Affordable Pricing'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-[#475569]">
                  <CheckCircle className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={`tel:${phoneNumber}`}>
                <Button 
                  size="lg" 
                  className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0ea5e9]/25 transition-all hover:shadow-xl hover:shadow-[#0ea5e9]/30 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white px-8 py-6 text-lg rounded-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book on WhatsApp
                </Button>
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0ea5e9]/20">
              <img 
                src="/hero-cleaning.jpg" 
                alt="Professional Cleaning Service"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 glass-effect rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">100% Satisfaction</div>
                    <div className="text-sm text-[#64748b]">Guaranteed Quality Service</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#10b981] border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-[#1e293b]">50+</span>
                  <span className="text-[#64748b]"> Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
