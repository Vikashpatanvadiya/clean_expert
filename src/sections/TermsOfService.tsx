const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#10b981] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/90 text-lg">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Service Agreement</h2>
            <p className="text-[#64748b] leading-relaxed mb-6">
              By using our website or booking our services via phone or WhatsApp, you agree to the following terms:
            </p>
            
            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Service Provision</h3>
            <ul className="list-disc list-inside text-[#64748b] leading-relaxed mb-6 space-y-2">
              <li>All services are provided based on customer requirements and site conditions.</li>
              <li>Prices may vary depending on the size, condition, and type of service.</li>
              <li>Service availability depends on location and time slots.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Customer Responsibilities</h3>
            <ul className="list-disc list-inside text-[#64748b] leading-relaxed mb-6 space-y-2">
              <li>Customers are requested to provide accurate details while booking.</li>
              <li>Any damage claims must be reported on the same day of service.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Service Limitations</h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              We reserve the right to refuse or cancel services in case of unsafe working conditions.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Our Commitment</h3>
            <p className="text-[#64748b] leading-relaxed">
              We aim to provide high-quality, professional cleaning services and ensure customer satisfaction at all times.
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

export default TermsOfService;