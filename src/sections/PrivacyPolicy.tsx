const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#10b981] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/90 text-lg">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Our Commitment to Your Privacy</h2>
            <p className="text-[#64748b] leading-relaxed mb-6">
              We respect your privacy and are committed to protecting your personal information.
            </p>
            
            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Information We Collect</h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              When you contact us through phone calls or WhatsApp, we may collect basic details such as your name, phone number, address, and service requirements. This information is used only to provide cleaning services, schedule appointments, and communicate with you.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">How We Use Your Information</h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              We do not sell, share, or rent your personal information to third parties.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Data Security</h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              Your data is kept secure and is used strictly for business purposes. By using our website and services, you agree to this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Contact Us</h3>
            <p className="text-[#64748b] leading-relaxed">
              If you have any questions about your data, you can contact us directly.
            </p>
          </div>

          <div className="text-center">
            <p className="text-[#64748b] text-sm">
              Use the X button above to close this window.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;