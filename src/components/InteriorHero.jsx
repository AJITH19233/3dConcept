import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import herojpg from '../assets/herojpg.jpg'
const InteriorHero = () => {
  return (
    <section className="relative w-full bg-stone-50 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      
      {/* FIXED: 
        Changed 'py-20 lg:py-32' (padding top/bottom) 
        to 'pt-12 pb-20 lg:pt-16 lg:pb-32' (less top padding, same bottom padding)
        This pulls the content up closer to your header.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Left Side */}
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase text-stone-600">Now Booking 2025</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              Curating spaces <br />
              <span className="italic text-stone-500">that inspire</span> living.
            </h1>

            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              We blend architectural precision with human-centric design to create interiors that feel as good as they look. Minimalist, sustainable, and timeless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <a
    href="#contact"
    className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-medium tracking-wide transition-transform hover:-translate-y-1 hover:shadow-lg"
  >
    Start Your Project
    <ArrowRight className="w-4 h-4" />
  </a>

  <a
    href="#portfolio"
    className="inline-flex items-center justify-center gap-2 bg-white border border-stone-300 text-stone-900 px-8 py-4 text-sm font-medium tracking-wide hover:bg-stone-50 transition-colors"
  >
    View Portfolio
  </a>
</div>


            {/* Trust Indicators */}
            <div className="pt-8 border-t border-stone-200 flex gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-stone-600">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-stone-600">Eco-Friendly Materials</span>
              </div>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="relative lg:h-[700px] flex items-center">
            {/* Main Image */}
            <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
              <img 
  src={herojpg}
  alt="Modern Minimalist Living Room" 
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
/>

              
              {/* Floating Badge */}
              <div className="absolute bottom-8 -left-8 md:-left-0 bg-white p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-orange-500">
                <p className="font-serif text-2xl text-stone-900 mb-1">15+</p>
                <p className="text-sm text-stone-500 uppercase tracking-wider">Years of Design Excellence</p>
              </div>
            </div>

            {/* Decorative Pattern/Shape behind image */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-stone-200 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteriorHero;