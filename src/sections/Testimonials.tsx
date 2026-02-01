import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Meera Shah',
    location: 'Vadodara',
    rating: 5,
    text: 'Outstanding sofa cleaning service! They removed years of stains and made my old sofa look completely new. The staff was punctual and very professional.',
    service: 'Sofa Cleaning'
  },
  {
    id: 2,
    name: 'Kiran Patel',
    location: 'Vadodara',
    rating: 5,
    text: 'Excellent deep cleaning for my entire house. They cleaned every corner thoroughly and used safe products. My family is very happy with the results.',
    service: 'Home Deep Cleaning'
  },
  {
    id: 3,
    name: 'Ravi Desai',
    location: 'Vadodara',
    rating: 5,
    text: 'Best car cleaning service in Vadodara! My car interior and exterior both look brand new. They pay attention to every detail. Highly recommended!',
    service: 'Car Cleaning'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#ecfdf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-medium rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#0ea5e9]/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#475569] mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-xs font-medium rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#e2e8f0]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#10b981] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">{testimonial.name}</div>
                    <div className="text-sm text-[#64748b]">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
