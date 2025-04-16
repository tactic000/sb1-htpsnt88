import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Car, Star, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Services from './pages/Services';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold">Shine Works</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-sky-400 transition">Home</Link>
              <Link to="/services" className="hover:text-sky-400 transition">Services</Link>
              <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
            </nav>
            <Link 
              to="/quote" 
              className="bg-sky-400 hover:bg-sky-500 text-black font-semibold px-6 py-2 rounded-full transition"
            >
              Get a Quote
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <Car className="h-6 w-6 text-sky-400" />
                  <span className="text-xl font-bold">Shine Works</span>
                </Link>
                <p className="text-gray-400">
                  Professional mobile detailing services at your convenience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/" className="block text-gray-400 hover:text-sky-400">Home</Link>
                  <Link to="/services" className="block text-gray-400 hover:text-sky-400">Services</Link>
                  <Link to="/contact" className="block text-gray-400 hover:text-sky-400">Contact</Link>
                  <Link to="/quote" className="block text-gray-400 hover:text-sky-400">Get Quote</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <div className="space-y-2">
                  <Link to="/privacy-policy" className="block text-gray-400 hover:text-sky-400">Privacy Policy</Link>
                  <Link to="/terms-of-service" className="block text-gray-400 hover:text-sky-400">Terms of Service</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-sky-400">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-sky-400">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-sky-400">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Shine Works. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            Shine Works – Mobile Detailing at Your Doorstep
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Calgary's Premier Mobile Auto Detailing Service
          </p>
          <Link 
            to="/quote" 
            className="inline-block bg-sky-400 hover:bg-sky-500 text-black text-lg font-semibold px-8 py-3 rounded-full transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Shine Works?</h2>
          <p className="text-lg text-gray-300">
            At Shine Works, we understand your vehicle is more than just transportation – it's an investment. 
            Our professional mobile detailing service brings convenience and quality right to your doorstep. 
            With years of experience and a commitment to excellence, we ensure every vehicle receives the 
            premium care it deserves.
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="text-center mb-8">
            <Link 
              to="/services" 
              className="inline-block bg-sky-400 hover:bg-sky-500 text-black font-semibold px-8 py-3 rounded-full transition"
            >
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Detailing",
                description: "Complete interior transformation with deep cleaning, sanitization, and protection.",
                image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Exterior Detailing",
                description: "Professional wash, polish, and protection for a showroom-worthy shine.",
                image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Full Detailing Packages",
                description: "Comprehensive care packages for the ultimate vehicle restoration experience.",
                image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-block mt-4 text-sky-400 hover:text-sky-500 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                rating: 5,
                text: "Best mobile detailing service I've ever used. They transformed my car completely!"
              },
              {
                name: "Sarah M.",
                rating: 5,
                text: "Incredibly professional and convenient. The results exceeded my expectations."
              },
              {
                name: "Mike R.",
                rating: 5,
                text: "Outstanding service and attention to detail. My car looks better than when it was new!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-sky-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to give your car the shine it deserves?
          </h2>
          <Link 
            to="/quote" 
            className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;