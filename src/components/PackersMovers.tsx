const PackersMovers = () => {
  return (
    <div id="packers-movers" className="min-h-screen pt-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Packers & Movers Services
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Professional Packing & Moving Solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Home Relocation',
              description: 'Complete household shifting services',
              icon: '🏠'
            },
            {
              title: 'Office Shifting',
              description: 'Corporate and office relocation services',
              icon: '🏢'
            },
            {
              title: 'Professional Packing',
              description: 'Expert packing with quality materials',
              icon: '📦'
            },
            {
              title: 'Safe Transport',
              description: 'Secure transportation of your belongings',
              icon: '🚛'
            },
            {
              title: 'Unpacking Services',
              description: 'Systematic unpacking and arrangement',
              icon: '📭'
            },
            {
              title: 'Storage Solutions',
              description: 'Temporary storage facilities available',
              icon: '🔐'
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

        {/* Process Section */}
        <div className="bg-orange-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Moving Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Survey', desc: 'Initial visit and cost estimation' },
              { step: '2', title: 'Packing', desc: 'Professional packing of items' },
              { step: '3', title: 'Transport', desc: 'Safe transportation' },
              { step: '4', title: 'Delivery', desc: 'Unpacking and arrangement' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Move?</h2>
          <p className="mb-6">
            Get a free quote for your moving needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
              Get Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackersMovers; 