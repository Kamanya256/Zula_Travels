import React from 'react';
import { Car, Fuel, Users, Shield } from 'lucide-react';

export default function Car_Hire() {
  const fleet = [
    {
      name: "Toyota Land Cruiser (4x4)",
      type: "Safari Special",
      price: "150,000 UGX",
      features: ["7 Seats", "Pop-up Roof", "Diesel"],
      image: "https://via.placeholder.com/300x200?text=Safari+Land+Cruiser" // Replace with your local image path
    },
    {
      name: "Toyota Rav4",
      type: "Compact SUV",
      price: "100,000 UGX",
      features: ["5 Seats", "Air Conditioned", "Petrol"],
      image: "https://via.placeholder.com/300x200?text=Toyota+Rav4"
    },
    {
      name: "Executive Coaster",
      type: "Group Travel",
      price: "350,000 UGX",
      features: ["28 Seats", "Luggage Space", "Diesel"],
      image: "https://via.placeholder.com/300x200?text=Group+Coaster"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="py-16 bg-green-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Premium Car Hire</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
          Navigate Uganda with ease. Whether it's a rugged safari in Bwindi or a business trip in Kampala,
          we have the perfect ride for you.
        </p>
      </header>

      {/* Fleet Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-green-600 pl-4">Available Fleet</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((car, index) => (
            <div key={index} className="border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase text-green-600 tracking-wider">{car.type}</span>
                <h3 className="text-xl font-bold mt-1 text-gray-900">{car.name}</h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {car.features.map((feat, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <div>
                    <span className="text-lg font-bold text-green-700">{car.price}</span>
                    <span className="text-sm text-gray-500"> / day</span>
                  </div>
                  <button className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-green-600 mb-3" />
            <h4 className="font-bold">Fully Insured</h4>
            <p className="text-sm text-gray-600">All rentals include comprehensive insurance.</p>
          </div>
          <div className="flex flex-col items-center">
            <Fuel className="w-12 h-12 text-green-600 mb-3" />
            <h4 className="font-bold">Full-to-Full Fuel</h4>
            <p className="text-sm text-gray-600">Pick up full, return full. No hidden fees.</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-green-600 mb-3" />
            <h4 className="font-bold">Driver Option</h4>
            <p className="text-sm text-gray-600">Self-drive or hire an experienced local guide.</p>
          </div>
        </div>
      </section>
    </div>
  );
}