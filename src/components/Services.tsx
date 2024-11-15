const Services = () => {
  const servicesList = [
    {
      title: "Fleet Owners",
      description: "Managing a comprehensive fleet of vehicles for efficient transportation solutions across India.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Car Transporters",
      description: "Specialized vehicle transportation services ensuring safe and timely delivery of automobiles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Commission Agent",
      description: "Professional intermediary services facilitating smooth transactions between transporters and clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Packers & Movers",
      description: "Complete relocation services with professional packing, moving, and unpacking solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 mt-10 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive logistics solutions tailored to meet your transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-orange-600 mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services 