import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-sky-400" />
                  <span>(587) 890-8460</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-sky-400" />
                  <span>contact@shineworksyyc.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-sky-400" />
                  <span>Serving Calgary, Alberta</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-sky-400" />
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:border-sky-400 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:border-sky-400 focus:outline-none"
                ></textarea>
                <button className="w-full bg-sky-400 text-black font-semibold py-2 rounded-lg hover:bg-sky-500 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}