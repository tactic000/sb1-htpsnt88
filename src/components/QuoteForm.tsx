import React, { useState, useEffect } from 'react';

interface Package {
  name: string;
  carPrice: [number, number];
  suvPrice: [number, number];
  includes: string[];
}

interface AddOn {
  name: string;
  price: number;
}

const packages: Record<string, Package> = {
  basicInterior: {
    name: "Basic Interior Detail",
    carPrice: [80, 120],
    suvPrice: [100, 140],
    includes: [
      "Full vacuum (seats, carpets, trunk, floor mats)",
      "Wipe-down of all interior surfaces",
      "Interior windows & mirrors cleaned",
      "Light spot treatment",
      "Trash removal",
      "Air freshener spray"
    ]
  },
  premiumInterior: {
    name: "Premium Interior Detail",
    carPrice: [180, 250],
    suvPrice: [220, 300],
    includes: [
      "Everything in Basic Interior, plus:",
      "Carpet & upholstery shampoo/extraction",
      "Cleaning of seats, mats, and high-touch areas",
      "Leather cleaning & conditioning (if applicable)",
      "Deep stain removal",
      "Detailed vent & crevice cleaning",
      "Headliner spot clean",
      "Deodorizing treatment"
    ]
  },
  basicExterior: {
    name: "Basic Exterior Detail",
    carPrice: [60, 90],
    suvPrice: [80, 110],
    includes: [
      "Hand wash & rinse (foam cannon if available)",
      "Bug/tar removal (light)",
      "Wheel & tire clean",
      "Tire shine",
      "Streak-free hand-dry (microfiber towels)",
      "Exterior glass cleaned"
    ]
  },
  premiumExterior: {
    name: "Premium Exterior Detail",
    carPrice: [150, 220],
    suvPrice: [180, 260],
    includes: [
      "Everything in Basic Exterior, plus:",
      "Iron/fallout decontamination",
      "Clay bar treatment for smooth paint",
      "1-stage polish (light swirl/scratch removal)",
      "Spray sealant or wax (3–6 month protection)",
      "Door jambs cleaned",
      "Exhaust tips cleaned"
    ]
  },
  basicFull: {
    name: "Basic Full Detail",
    carPrice: [130, 180],
    suvPrice: [160, 210],
    includes: [
      "Basic Interior Detail",
      "Basic Exterior Detail",
      "Perfect for maintenance or pre-sale cleanups"
    ]
  },
  premiumFull: {
    name: "Premium Full Detail",
    carPrice: [280, 370],
    suvPrice: [320, 420],
    includes: [
      "Premium Interior Detail",
      "Premium Exterior Detail"
    ]
  }
};

const addOns: AddOn[] = [
  { name: "Pet Hair Removal", price: 25 },
  { name: "Fabric Protection", price: 40 },
  { name: "Ceramic Spray Sealant", price: 60 },
  { name: "Engine Bay Cleaning", price: 40 },
  { name: "Ozone Odor Treatment", price: 50 }
];

export default function QuoteForm() {
  const [vehicleType, setVehicleType] = useState<'car' | 'suv' | ''>('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  useEffect(() => {
    calculateTotal();
  }, [vehicleType, selectedPackage, selectedAddOns]);

  const calculateTotal = () => {
    if (!vehicleType || !selectedPackage) {
      setEstimatedTotal(0);
      return;
    }

    const packagePrices = vehicleType === 'car' 
      ? packages[selectedPackage].carPrice 
      : packages[selectedPackage].suvPrice;

    const basePrice = packagePrices[0];

    const addOnTotal = selectedAddOns.reduce((total, addOn) => {
      const addon = addOns.find(a => a.name === addOn);
      return total + (addon?.price || 0);
    }, 0);

    setEstimatedTotal(basePrice + addOnTotal);
  };

  const handleAddOnToggle = (addOn: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOn)
        ? prev.filter(a => a !== addOn)
        : [...prev, addOn]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      vehicleType,
      selectedPackage,
      selectedAddOns,
      make,
      model,
      year,
      name,
      email,
      phone,
      contactMethod,
      notes,
      estimatedTotal
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Get Your Custom Quote</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Vehicle Type Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Vehicle Type</h3>
          <div className="grid grid-cols-2 gap-4">
            {['car', 'suv'].map((type) => (
              <label
                key={type}
                className={`
                  flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer
                  ${vehicleType === type 
                    ? 'border-sky-400 bg-sky-400/10' 
                    : 'border-gray-700 hover:border-gray-600'
                  }
                `}
              >
                <input
                  type="radio"
                  name="vehicleType"
                  value={type}
                  checked={vehicleType === type}
                  onChange={(e) => setVehicleType(e.target.value as 'car' | 'suv')}
                  className="sr-only"
                />
                <span className="capitalize">{type === 'suv' ? 'SUV/Truck' : type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Package Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Select Package</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(packages).map(([key, pkg]) => (
              <label
                key={key}
                className={`
                  p-4 rounded-lg border-2 cursor-pointer space-y-2
                  ${selectedPackage === key 
                    ? 'border-sky-400 bg-sky-400/10' 
                    : 'border-gray-700 hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    name="package"
                    value={key}
                    checked={selectedPackage === key}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mt-1 mr-2"
                  />
                  <div>
                    <div className="font-semibold">{pkg.name}</div>
                    <div className="text-sm text-gray-400">
                      {vehicleType === 'car' 
                        ? `$${pkg.carPrice[0]}–$${pkg.carPrice[1]}`
                        : vehicleType === 'suv'
                        ? `$${pkg.suvPrice[0]}–$${pkg.suvPrice[1]}`
                        : 'Select vehicle type'
                      }
                    </div>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 ml-6 list-disc">
                  {pkg.includes.slice(0, 3).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </label>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Add-on Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <label
                key={addon.name}
                className={`
                  flex items-center p-4 rounded-lg border-2 cursor-pointer
                  ${selectedAddOns.includes(addon.name)
                    ? 'border-sky-400 bg-sky-400/10'
                    : 'border-gray-700 hover:border-gray-600'
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addon.name)}
                  onChange={() => handleAddOnToggle(addon.name)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">{addon.name}</div>
                  <div className="text-sm text-gray-400">
                    +${addon.price}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          />
          <select
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            className="bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
          >
            <option value="">Preferred Contact Method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
          </select>
        </div>

        {/* Additional Notes */}
        <textarea
          placeholder="Additional Notes or Special Requests"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-400"
        />

        {/* Estimated Total */}
        <div className="bg-sky-400/10 border border-sky-400 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Estimated Total</h3>
          <p className="text-3xl font-bold">
            {estimatedTotal === 0 
              ? 'Select package and vehicle type'
              : `$${estimatedTotal}`
            }
          </p>
          <p className="text-sm text-gray-400 mt-2">*Final price may vary based on vehicle condition</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-400 hover:bg-sky-500 text-black font-semibold py-3 rounded-lg transition"
        >
          Get a Quote Now
        </button>
      </form>
    </div>
  );
}