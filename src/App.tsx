import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* <LoadingOverlay /> */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App;
