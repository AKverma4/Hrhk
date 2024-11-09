const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Hare Rama Krishna Logistics
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              B-503, Balaji Complex,<br />
              Plot No.12/13, Sector 8/E,<br />
              Kalamboli, Navi Mumbai
            </p>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-2">
              {['Fleet Owners', 'Car Transporters', 'Commission Agent', 'Packers & Movers'].map((service) => (
                <li key={service} className="hover:text-yellow-500 transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="text-sm sm:text-base text-gray-300 space-y-2">
              <li className="flex items-center justify-center sm:justify-start space-x-2 hover:text-yellow-500 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>976291499 / 932171200</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 hover:text-yellow-500 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">hareramakrishnalogistic@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-700">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hare Rama Krishna Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 