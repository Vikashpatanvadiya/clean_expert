import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  const phoneNumber = '+919898857306';
  const whatsappNumber = '+919898857306';
  const whatsappMessage = encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.');

  return (
    <>
      {/* Main CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready for a Cleaner Home?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Book your cleaning service today and experience the difference. 
                Our team is ready to make your space sparkle!
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span>Serving Vadodara</span>
                </div>
              </div>

            </div>

            {/* Right - Quick Contact Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0ea5e9]" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm opacity-80">Call Us</div>
                    <div className="text-lg font-semibold">+91 98988 57306</div>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm opacity-80">WhatsApp</div>
                    <div className="text-lg font-semibold">+91 98988 57306</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 z-50 lg:hidden">
        <div className="flex gap-3">
          <a href={`tel:${phoneNumber}`} className="flex-1">
            <Button 
              className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-3 rounded-xl font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white py-3 rounded-xl font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </>
  );
};

export default CTABanner;
