import React from "react";
import { BadgeCheck, Gem, Home, Palette } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
          Why Clients Trust Us
        </h2>

        <p className="mt-4 text-lg text-stone-600">
          We transform simple spaces into meaningful experiences.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <Home className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-stone-800">Custom Interiors</h3>
            <p className="text-sm text-stone-600 mt-2">
              Tailor-made solutions for homes, offices & commercial spaces.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <Gem className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-stone-800">Premium Quality</h3>
            <p className="text-sm text-stone-600 mt-2">
              High-grade materials and durable craftsmanship.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <Palette className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-stone-800">Aesthetic Expertise</h3>
            <p className="text-sm text-stone-600 mt-2">
              Trend-aligned, minimalist, and timeless designs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <BadgeCheck className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-stone-800">End-to-End Service</h3>
            <p className="text-sm text-stone-600 mt-2">
              From concept to execution — we take care of everything.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
