import React from 'react';
import { Car } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16">Our Detailing Services</h1>
        
        {/* Interior Detailing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Interior Detailing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Interior */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Basic Interior Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$80–$120</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$100–$140</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Full vacuum (seats, carpets, trunk, floor mats)</li>
                  <li>• Wipe-down of all interior surfaces</li>
                  <li>• Interior windows & mirrors cleaned</li>
                  <li>• Light spot treatment</li>
                  <li>• Trash removal</li>
                  <li>• Air freshener spray</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Add-ons:</h4>
                <ul className="text-gray-300">
                  <li>• Pet Hair Removal: +$20–$40</li>
                  <li>• Fabric Protection: +$25</li>
                </ul>
              </div>
            </div>

            {/* Premium Interior */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Premium Interior Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$180–$250</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$220–$300</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes everything in Basic, plus:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Carpet & upholstery shampoo/extraction</li>
                  <li>• Cleaning of seats, mats, and high-touch areas</li>
                  <li>• Leather cleaning & conditioning (if applicable)</li>
                  <li>• Deep stain removal</li>
                  <li>• Detailed vent & crevice cleaning</li>
                  <li>• Headliner spot clean</li>
                  <li>• Deodorizing treatment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Add-ons:</h4>
                <ul className="text-gray-300">
                  <li>• Pet Hair Removal: +$20–$40</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exterior Detailing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Exterior Detailing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Exterior */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Basic Exterior Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$60–$90</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$80–$110</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Hand wash & rinse (foam cannon if available)</li>
                  <li>• Bug/tar removal (light)</li>
                  <li>• Wheel & tire clean</li>
                  <li>• Tire shine</li>
                  <li>• Streak-free hand-dry (microfiber towels)</li>
                  <li>• Exterior glass cleaned</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Add-ons:</h4>
                <ul className="text-gray-300">
                  <li>• Light polish (spot treatment): +$30–$50</li>
                  <li>• Spray wax upgrade: +$20</li>
                </ul>
              </div>
            </div>

            {/* Premium Exterior */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Premium Exterior Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$150–$220</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$180–$260</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes everything in Basic, plus:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Iron/fallout decontamination</li>
                  <li>• Clay bar treatment for smooth paint</li>
                  <li>• 1-stage polish (light swirl/scratch removal)</li>
                  <li>• Spray sealant or wax (3–6 month protection)</li>
                  <li>• Door jambs cleaned</li>
                  <li>• Exhaust tips cleaned</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Add-ons:</h4>
                <ul className="text-gray-300">
                  <li>• Ceramic spray sealant (6–12 month protection): +$40–$80</li>
                  <li>• Engine bay clean: +$40</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Full Detailing Packages */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Full Detailing Packages</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Full Detail */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Basic Full Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$130–$180</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$160–$210</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Basic Interior Detail</li>
                  <li>• Basic Exterior Detail</li>
                  <li>• Perfect for maintenance or pre-sale cleanups</li>
                </ul>
              </div>
            </div>

            {/* Premium Full Detail */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Premium Full Detail</h3>
              <div className="mb-4">
                <p className="text-xl mb-2">Cars: <span className="text-sky-400">$280–$370</span></p>
                <p className="text-xl mb-6">SUVs/Trucks: <span className="text-sky-400">$320–$420</span></p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Premium Interior Detail</li>
                  <li>• Premium Exterior Detail</li>
                  <li>• Our most comprehensive package</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="/quote" 
            className="inline-block bg-sky-400 hover:bg-sky-500 text-black font-semibold px-8 py-3 rounded-full transition"
          >
            Get Your Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
}