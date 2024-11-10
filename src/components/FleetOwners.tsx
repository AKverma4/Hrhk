const FleetOwners = () => {
  return (
    <div id="fleet-owners" className="min-h-screen pt-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Fleet Services
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Professional Fleet Management Solutions</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Modern Fleet',
              description: 'Access to our extensive range of modern vehicles',
              icon: '🚛'
            },
            {
              title: 'GPS Tracking',
              description: 'Real-time tracking and monitoring systems',
              icon: '📍'
            },
            {
              title: 'Maintenance',
              description: 'Regular maintenance and service support',
              icon: '🔧'
            },
            {
              title: 'Documentation',
              description: 'Complete paperwork and compliance handling',
              icon: '📄'
            },
            {
              title: '24/7 Support',
              description: 'Round-the-clock customer service',
              icon: '🔔'
            },
            {
              title: 'Insurance',
              description: 'Comprehensive insurance coverage',
              icon: '🛡️'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Join Our Fleet Network</h2>
          <p className="mb-6 text-gray-600">
            Become a part of our growing fleet owner community
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetOwners; 