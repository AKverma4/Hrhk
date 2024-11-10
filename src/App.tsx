import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FleetOwners from './components/FleetOwners'
import CarTransport from './components/CarTransport'
import CommissionAgent from './components/CommissionAgent'
import PackersMovers from './components/PackersMovers'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="px-4 md:px-6 lg:px-8">
        <Hero />
        <Services />
        <About />
        <FleetOwners />
        <CarTransport />
        <CommissionAgent />
        <PackersMovers />
        <Contact />

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App;
