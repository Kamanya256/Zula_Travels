import React from 'react';
import { Truck, Package, Clock, ShieldCheck } from 'lucide-react'; // Optional: install lucide-react for icons

export default function Our_Courier_services() {
  const services = [
    {
      title: "Same Day Delivery",
      desc: "Urgent documents and small parcels delivered across Kampala within hours.",
      icon: <Clock className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Upcountry Logistics",
      desc: "Reliable delivery to all major towns in Uganda and East Africa.",
      icon: <Truck className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Secure Packaging",
      desc: "We ensure your items are packed safely to prevent any damage during transit.",
      icon: <Package className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Insured Transit",
      desc: "Peace of mind with insurance coverage for high-value items.",
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="p-12 text-center bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-green-700">Zula Courier Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Fast, secure, and reliable logistics solutions. We bridge the gap between
          your business and your customers across East Africa.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-green-700 p-10 text-center text-white">
        <h2 className="text-2xl font-bold">Need a quote for a delivery?</h2>
        <p className="mt-2 opacity-90">Contact our logistics team today for bulk rates and corporate partnerships.</p>
        <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}