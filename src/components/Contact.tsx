const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-orange-100">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Company Information */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent border-b border-orange-200 pb-3">
                  Hare Rama Hare Krishna Logistics
                </h3>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base sm:text-lg leading-relaxed text-gray-700 font-medium">
                    B-503, Balaji Complex,<br />
                    Plot No.12/13, Sector 8/E,<br />
                    Kalamboli, Navi Mumbai
                  </span>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent border-b border-orange-200 pb-3">
                  Our Services
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {['Fleet Owners', 'Commission Agent', 'Car Transporters', 'Packers & Movers'].map((service) => (
                    <li key={service} className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                      <span className="text-base sm:text-lg text-gray-700 font-medium hover:text-orange-600 transition-colors duration-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Details Footer */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-orange-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <a href="tel:+91976291499" 
                   className="flex items-center group text-gray-700 hover:text-orange-600 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-base sm:text-lg font-medium">+91 976291499 / 932171200</span>
                </a>
                <a href="mailto:hareramakrishnalogistic@gmail.com" 
                   className="flex items-center group text-gray-700 hover:text-orange-600 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base sm:text-lg font-medium break-all">hareramakrishnalogistic@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact