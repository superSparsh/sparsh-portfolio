import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import FeaturedProjects from './sections/FeaturedProjects'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WebsiteGallery from './sections/WebsiteGallery'
import Workflow from './sections/Workflow'

export default function App() {
  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <FeaturedProjects />
        <WebsiteGallery />
        <Services />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
