import React from "react";
import sidepic from '../assets/03-2.JPG';

const VisionValues = () => {
  return (
    <section className="py-24 bg-stone-50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              To redefine the meaning of modern interiors by combining functionality,
              aesthetics, and emotional warmth. Our vision is to craft environments 
              where people feel inspired, connected, and at peace.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white border border-stone-200 rounded-xl">
                <h4 className="font-semibold text-stone-800">Timeless Aesthetics</h4>
                <p className="text-stone-600 text-sm mt-1">
                  Designs that hold beauty and relevance for years to come.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-xl">
                <h4 className="font-semibold text-stone-800">Human-Centric Approach</h4>
                <p className="text-stone-600 text-sm mt-1">
                  Comfort, usability, and personal identity at the core of every space.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-xl">
                <h4 className="font-semibold text-stone-800">Craftsmanship Excellence</h4>
                <p className="text-stone-600 text-sm mt-1">
                  Premium materials, expert artisans, and meticulous execution.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Image Block */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={sidepic}
              alt="Interior Vision"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionValues;
