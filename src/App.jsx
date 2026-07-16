import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Programs from './components/Programs'
import Curriculum from './components/Curriculum'
import Gallery from './components/Gallery'
import Partnerships from './components/Partnerships'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Programs />
        <Curriculum />
        <Gallery />
        <Partnerships />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
