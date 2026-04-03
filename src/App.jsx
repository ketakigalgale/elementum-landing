import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Testimonial } from "./components/sections/Testimonial";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-black bg-white overflow-x-hidden">
  
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center border-b border-gray-50">
        <div className="font-display text-2xl font-black tracking-tighter border-2 border-black px-2">
          ELEMENTUM
        </div>
        <div className="hidden md:flex gap-12 font-medium text-sm uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Studio
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Contact
          </a>
        </div>
        <button className="md:hidden">MENU</button>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}

export default App;
