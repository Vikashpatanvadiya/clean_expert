import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Sofa Cleaning',
    description: 'Deep steam cleaning for all types of sofas. Removes stains, dust mites, and odors.',
    image: '/service-sofa.jpg',
    price: '₹120 per seat'
  },
  {
    id: 2,
    title: 'Curtain Cleaning',
    description: 'Professional curtain cleaning without removing them. Fresh and dust-free results.',
    image: '/service-curtain.jpg',
    price: ''
  },
  {
    id: 3,
    title: 'Bathroom Cleaning',
    description: 'Complete bathroom sanitization with eco-friendly products. Sparkling clean tiles.',
    image: '/service-bathroom.jpg',
    price: ''
  },
  {
    id: 4,
    title: 'Full Home Deep Cleaning',
    description: 'Comprehensive cleaning for your entire home. Every corner cleaned thoroughly.',
    image: '/service-home.jpg',
    price: ''
  },
  {
    id: 5,
    title: 'Kitchen Chimney Cleaning',
    description: 'Remove grease and oil buildup. Improve chimney efficiency and safety.',
    image: '/service-chimney.jpg',
    price: ''
  },
  {
    id: 6,
    title: 'Oven & Microwave Cleaning',
    description: 'Deep cleaning of kitchen appliances. Remove food residue and bacteria.',
    image: '/service-oven.jpg',
    price: ''
  },
  {
    id: 7,
    title: 'Car Interior & Exterior',
    description: 'Complete car detailing service. Interior deep clean and exterior wash.',
    image: '/service-car.jpg',
    price: ''
  }
];

const Services = () => {
  const whatsappNumber = '+919898857306';

  const handleBookNow = (serviceTitle: string) => {
    const message = encodeURIComponent(`Hi! I want to book ${serviceTitle}. Please share more details and availability.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Premium Cleaning Services
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Choose from our wide range of professional cleaning services designed to keep your home and car spotless
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {service.price && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-[#0ea5e9]">{service.price}</span>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#64748b] mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Button 
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white rounded-xl transition-all"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
