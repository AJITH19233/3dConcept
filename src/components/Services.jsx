import React from "react";
import { Paintbrush, Hammer, Home, Package } from "lucide-react";

const services = [
  {
    icon: <Home className="w-8 h-8 text-orange-500" />,
    title: "Interior Design",
    desc: "End-to-end interior design solutions tailored for homes, offices, and commercial spaces.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-orange-500" />,
    title: "Custom Furniture",
    desc: "We craft timeless furniture pieces that match your space and personality.",
  },
  {
    icon: <Hammer className="w-8 h-8 text-orange-500" />,
    title: "Renovation",
    desc: "Complete renovation services with premium finishes and seamless execution.",
  },
  {
    icon: <Package className="w-8 h-8 text-orange-500" />,
    title: "Turnkey Projects",
    desc: "From planning to execution — we deliver fully ready, beautifully finished spaces.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id='service'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900">
            Designing With Purpose
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We create meaningful, functional, and aesthetically rich spaces that elevate everyday living.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-stone-200 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-xl bg-white"
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-serif text-stone-900 mb-3">
                {service.title}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
