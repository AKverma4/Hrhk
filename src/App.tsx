import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FleetOwners from './components/FleetOwners'
import CarTransport from './components/CarTransport'
import CommissionAgent from './components/CommissionAgent'
import PackersMovers from './components/PackersMovers'
import Gallery from './components/Gallery'
import ScrollButton from './components/ScrollButton'
import GetQuote from './components/GetQuote'
import CustomerRatings from './components/CustomerRatings'

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="px-4 md:px-6 lg:px-8">
        <Hero />
        <div id="services">
          <Services />
        </div>
        <About />
        <Gallery />
        <CustomerRatings />
        <FleetOwners />
        <CarTransport />
        <CommissionAgent />
        <PackersMovers />
        <GetQuote />
        <Contact />
      </main>
      <Footer />
      {showScrollUp && <ScrollButton direction="up" />}
    </div>
  )
}
export default App;
