import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Shine Works' services, you accept and agree to be bound by the terms and 
              provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-300">
              Shine Works provides mobile auto detailing services. We reserve the right to refuse service to 
              anyone for any reason at any time. Prices and services are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Booking and Cancellation</h2>
            <p className="text-gray-300">
              Appointments must be cancelled at least 24 hours in advance to avoid cancellation fees. We reserve 
              the right to charge a fee for no-shows or late cancellations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-gray-300">
              Payment is due upon completion of service. We accept major credit cards and cash. Prices may vary 
              based on vehicle condition and size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Guarantee</h2>
            <p className="text-gray-300">
              We strive to provide the highest quality service. If you are not satisfied with our service, please 
              contact us within 24 hours of service completion, and we will make it right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
            <p className="text-gray-300">
              While we take utmost care with your vehicle, we are not responsible for any pre-existing damage or 
              conditions. Any concerns should be reported before service begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: contact@shineworksyyc.com
              <br />
              Phone: (587) 890-8460
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}