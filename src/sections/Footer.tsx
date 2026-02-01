import { Phone, MessageCircle, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  
  const phoneNumber = '+919898857306';
  const whatsappNumber = '+919898857306';
  const whatsappMessage = encodeURIComponent('Hi! I want to book a cleaning service. Please share more details.');

  const openPrivacyPolicy = () => {
    setModalContent(<PrivacyPolicy />);
    setIsModalOpen(true);
  };

  const openTermsOfService = () => {
    setModalContent(<TermsOfService />);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const services = [
    'Sofa Cleaning',
    'Curtain Cleaning',
    'Bathroom Cleaning',
    'Home Deep Cleaning',
    'Kitchen Chimney Cleaning',
    'Oven & Microwave Cleaning',
    'Car Interior & Exterior'
  ];

  const cities = [
    'Vadodara'
  ];

  return (
    <>
      <footer className="bg-[#1e293b] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Clean Expert Logo" 
                  className="h-14 w-auto object-contain"
                />
                <h3 className="text-2xl font-bold text-white">Clean Expert</h3>
              </div>
              <p className="text-[#94a3b8]">
                Professional cleaning services for your home and car. Trusted by 1000+ happy customers.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/17w3RSp4aq/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] rounded-full flex items-center justify-center hover:bg-[#0ea5e9] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/hitendrakumarjoshi?igsh=MWN0ODg3c2w3cjl5OA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] rounded-full flex items-center justify-center hover:bg-[#ec4899] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {cities.map((city, index) => (
                <li key={index} className="flex items-center gap-2 text-[#94a3b8]">
                  <MapPin className="w-4 h-4 text-[#10b981]" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#0ea5e9] transition-colors"
              >
                <div className="w-10 h-10 bg-[#334155] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm">Call Us</div>
                  <div className="font-semibold text-white">+91 98988 57306</div>
                </div>
              </a>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#25d366] transition-colors"
              >
                <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm">WhatsApp</div>
                  <div className="font-semibold text-white">+91 98988 57306</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-[#94a3b8]">
                <div className="w-10 h-10 bg-[#334155] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm">Email</div>
                  <div className="font-semibold text-white">hkjoshi1779@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-sm text-center sm:text-left">
              © 2024 Clean Expert. All rights reserved. Professional Cleaning Services.
            </p>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={openPrivacyPolicy}
                className="text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={openTermsOfService}
                className="text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Modal */}
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {modalContent}
    </Modal>
  </>
  );
};

export default Footer;
