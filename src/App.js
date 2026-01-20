import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Services from './Componets/Services';
import Portfolio from './Componets/prorfolio';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <main className="pt-16"> {/* Add padding for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Optional Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Poorna Malinhara. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;