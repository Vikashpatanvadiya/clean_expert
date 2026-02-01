import { ClipboardList, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Choose Your Service',
    description: 'Browse our wide range of cleaning services and select the one that fits your needs.'
  },
  {
    number: '02',
    icon: <PhoneCall className="w-8 h-8" />,
    title: 'Call or WhatsApp Us',
    description: 'Reach out to us via call or WhatsApp. Our team is available 7 days a week.'
  },
  {
    number: '03',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'We Clean & You Relax',
    description: 'Sit back and relax while our professionals make your space sparkle and shine.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Book in 3 Easy Steps
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Getting your home or car cleaned has never been easier. Follow these simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#0ea5e9] via-[#10b981] to-[#8b5cf6]" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 border border-[#e2e8f0] hover:border-[#0ea5e9]/30 hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-white text-sm font-bold px-4 py-1 rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0ea5e9]/10 to-[#10b981]/10 flex items-center justify-center text-[#0ea5e9] mb-6 mt-4 group-hover:scale-110 group-hover:from-[#0ea5e9] group-hover:to-[#10b981] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-6 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-[#0ea5e9] animate-bounce" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#64748b] mb-4">
            Have questions? We are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919898857306"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0ea5e9] text-white rounded-xl font-medium hover:bg-[#0284c7] transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
