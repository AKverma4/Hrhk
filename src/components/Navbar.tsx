import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    
    if (id === 'home') {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        heroSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center relative">
              <img 
                src={logo} 
                alt="Hare Rama Hare Krishna Logistics Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-maroon-700 leading-tight">
                HARE RAMA
                <span className="text-yellow-500"> HARE KRISHNA</span>
              </h1>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-600">LOGISTICS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-maroon-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            <a
              href="#get-quote"
              onClick={(e) => handleNavClick(e, 'get-quote')}
              className="bg-gradient-to-r from-maroon-600 to-yellow-500 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-maroon-600 focus:outline-none"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md transition-colors duration-300"
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
          <a
            href="#get-quote"
            onClick={(e) => handleNavClick(e, 'get-quote')}
            className="w-full bg-gradient-to-r from-maroon-600 to-yellow-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 block text-center"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 