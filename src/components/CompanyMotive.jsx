import React from "react";
import { Sparkles, Leaf, Ruler, Heart } from "lucide-react";

const CompanyMotive = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
          Designing Spaces That Feel Like Home
        </h2>
        
        <p className="mt-6 text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Our motive is simple — to create timeless, functional, and emotionally
          resonant interiors. We believe every space tells a story, and our job 
          is to bring that story to life with craftsmanship, innovation, and soul.
        </p>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl hover:-translate-y-2 transition-all shadow-sm">
            <Sparkles className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-800">Creative Vision</h3>
            <p className="text-stone-600 mt-2 text-sm">
              Unique concepts that blend aesthetics with purpose.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl hover:-translate-y-2 transition-all shadow-sm">
            <Ruler className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-800">Precision & Detail</h3>
            <p className="text-stone-600 mt-2 text-sm">
              Every element is carefully planned and flawlessly executed.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl hover:-translate-y-2 transition-all shadow-sm">
            <Leaf className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-800">Sustainable Design</h3>
            <p className="text-stone-600 mt-2 text-sm">
              Eco-friendly materials and mindful design choices.
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl hover:-translate-y-2 transition-all shadow-sm">
            <Heart className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-800">Client-Focused</h3>
            <p className="text-stone-600 mt-2 text-sm">
              Spaces built around your lifestyle, comfort, and personality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyMotive;
