import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WorkVisuals = () => {
  return (
    <section id="work-visuals" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#10b981]/10 text-[#10b981] text-sm font-medium rounded-full mb-4">
            See Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Watch Us in Action
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Experience the quality of our cleaning services through our work videos and before/after photos
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
              Our Cleaning Process
            </h3>
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/hero-cleaning.jpg"
              >
                <source src="/cleaning-process.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">
            Before & After Gallery
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo Card 1 - Sofa */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-1.jpg" 
                  alt="Sofa cleaning before and after"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#10b981] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sofa Cleaning
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Deep Sofa Restoration</h4>
                <p className="text-sm text-[#64748b]">Complete transformation of a 5-year-old sofa</p>
              </CardContent>
            </Card>

            {/* Photo Card 2 - Washroom */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-2.jpg" 
                  alt="Washroom cleaning before and after"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#0ea5e9] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Washroom
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Washroom Deep Clean</h4>
                <p className="text-sm text-[#64748b]">Sparkling clean tiles and fixtures</p>
              </CardContent>
            </Card>

            {/* Photo Card 3 - Oven */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-3.jpg" 
                  alt="Oven cleaning before and after"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Oven Cleaning
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Oven Deep Clean</h4>
                <p className="text-sm text-[#64748b]">Remove food residue and bacteria completely</p>
              </CardContent>
            </Card>

            {/* Photo Card 4 - Chimney */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-4.jpg" 
                  alt="Chimney cleaning before and after"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#8b5cf6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Chimney
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Chimney Deep Clean</h4>
                <p className="text-sm text-[#64748b]">Remove grease and oil buildup completely</p>
              </CardContent>
            </Card>

            {/* Photo Card 5 - Car */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-5.jpg" 
                  alt="Car cleaning before and after"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#ec4899] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Car Detailing
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Complete Car Detail</h4>
                <p className="text-sm text-[#64748b]">Interior and exterior transformation</p>
              </CardContent>
            </Card>

            {/* Photo Card 6 - Full Service */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/work-photo-6.jpg" 
                  alt="Complete cleaning service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-[#06b6d4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Full Service
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1e293b] mb-2">Complete Cleaning</h4>
                <p className="text-sm text-[#64748b]">Professional cleaning for all your needs</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0ea5e9] to-[#10b981] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to See These Results in Your Home?
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Book your cleaning service today and experience the same amazing transformation
            </p>
            <Button 
              className="bg-white text-[#0ea5e9] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg"
              onClick={() => {
                const whatsappNumber = '+919898857306';
                const message = encodeURIComponent('Hi! I saw your work gallery and want to book a cleaning service. Please share more details.');
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkVisuals;