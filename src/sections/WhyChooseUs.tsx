import { Users, Leaf, Wallet, Clock, ShieldCheck, Award } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Trained Professionals',
    description: 'Our cleaning experts are background-verified and professionally trained for the best results.',
    color: 'from-[#0ea5e9] to-[#0284c7]'
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Eco-Friendly Products',
    description: 'We use safe, non-toxic, and eco-friendly cleaning products that are gentle on your family and pets.',
    color: 'from-[#10b981] to-[#059669]'
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: 'Affordable Pricing',
    description: 'Get premium cleaning services at competitive prices with no hidden charges.',
    color: 'from-[#f59e0b] to-[#d97706]'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Same-Day Service',
    description: 'Book now and get your cleaning done today. We value your time and convenience.',
    color: 'from-[#8b5cf6] to-[#7c3aed]'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: '100% Satisfaction Guarantee',
    description: 'Not satisfied? We will re-clean for free. Your happiness is our priority.',
    color: 'from-[#ec4899] to-[#db2777]'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality Equipment',
    description: 'We use industrial-grade cleaning equipment for deep and effective cleaning.',
    color: 'from-[#06b6d4] to-[#0891b2]'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#10b981]/10 text-[#10b981] text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            The CleanPro Difference
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            We go above and beyond to deliver exceptional cleaning services that exceed your expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust CleanPro for their cleaning needs
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="w-px bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-white/80">Expert Cleaners</div>
            </div>
            <div className="w-px bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl font-bold">7+</div>
              <div className="text-white/80">Services</div>
            </div>
            <div className="w-px bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
