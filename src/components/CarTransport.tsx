const CarTransport = () => {
  return (
    <div id="car-transport" className="min-h-screen pt-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Car Transport Services
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Safe and Reliable Vehicle Transportation</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Open Transport',
              description: 'Cost-effective solution for standard vehicle shipping',
              icon: '🚗'
            },
            {
              title: 'Enclosed Transport',
              description: 'Premium protection for luxury and classic cars',
              icon: '🏎️'
            },
            {
              title: 'Door-to-Door',
              description: 'Convenient pickup and delivery at your location',
              icon: '🏠'
            },
            {
              title: 'Interstate Transport',
              description: 'Nationwide vehicle transportation services',
              icon: '🗺️'
            },
            {
              title: 'Real-time Tracking',
              description: 'Monitor your vehicle throughout the journey',
              icon: '📍'
            },
            {
              title: 'Insurance Coverage',
              description: 'Full coverage for peace of mind',
              icon: '🛡️'
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

        {/* CTA Section */}
        <div className="text-center bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="mb-6 text-gray-600">
            Get a quote for your car transportation needs
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarTransport; 