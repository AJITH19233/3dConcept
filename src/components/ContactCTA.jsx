import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative bg-stone-900 text-white py-24 overflow-hidden" id="contact">
      
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Ready to Transform Your Space?
        </h2>

        <p className="text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Let’s turn your vision into a beautifully crafted interior.  
          Share your ideas with us, and we’ll create a space that truly feels like home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          
          <a
            href="tel:9886296811"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>

          <a
            href="mailto:concepts3d@yahoo.com"
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-lg font-medium hover:bg-stone-100 transition-all"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
        </div>
      </div>

    </section>
  );
};

export default ContactCTA;
