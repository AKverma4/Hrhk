import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="px-4 md:px-6 lg:px-8">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App;
