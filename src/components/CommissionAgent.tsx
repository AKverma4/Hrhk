const CommissionAgent = () => {
  return (
    <div id="commission-agent" className="min-h-screen pt-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Commission Agent Services
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Professional Logistics Commission Solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Load Matching',
              description: 'Connect transporters with reliable cargo opportunities',
              icon: '🔄'
            },
            {
              title: 'Rate Negotiation',
              description: 'Get the best rates for both parties',
              icon: '💰'
            },
            {
              title: 'Documentation',
              description: 'Complete paperwork and legal compliance handling',
              icon: '📋'
            },
            {
              title: 'Payment Security',
              description: 'Secure payment processing and escrow services',
              icon: '🔒'
            },
            {
              title: 'Market Analysis',
              description: 'Regular updates on market rates and trends',
              icon: '📊'
            },
            {
              title: 'Support Services',
              description: '24/7 support for all transportation needs',
              icon: '🤝'
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-orange-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Commission Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-orange-500 text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clear commission structures with no hidden charges</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-orange-500 text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-2">Quick Settlements</h3>
                <p className="text-gray-600">Timely payment processing and settlements</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Start Your Commission Partnership</h2>
          <p className="mb-6">
            Join our network of successful logistics partners
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionAgent; 