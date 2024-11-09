const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-6 sm:mt-10 mb-3 sm:mb-4">
            About Hare Rama Logistics
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Your Trusted Partner in Transportation and Logistics Solutions Since 2009
          </p>
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed">
            To be India's most reliable and innovative logistics partner, delivering excellence 
            through our comprehensive fleet solutions and customer-centric approach.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-orange-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Our Expertise</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              With years of experience in the logistics industry, we've built a robust 
              network across India. Our fleet management expertise and dedicated team 
              ensure reliable transportation solutions for businesses of all sizes.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-orange-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Our Approach</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We prioritize efficiency, safety, and reliability in every operation. 
              Our commitment to transparent communication and customer satisfaction 
              has made us a preferred logistics partner across the industry.
            </p>
          </div>
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Reliability",
              description: "Consistent and dependable service delivery across all operations",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
              title: "Excellence",
              description: "Maintaining highest standards in transportation and logistics",
              icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            },
            {
              title: "Trust",
              description: "Building lasting relationships through transparent practices",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{value.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About