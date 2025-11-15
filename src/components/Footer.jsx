import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif text-white mb-4">
            3D<span className="text-orange-500">CONCEPT</span>
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
            Crafting elegant, functional, and human-centered interior spaces
            designed to elevate your everyday living.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#service" className="hover:text-orange-500 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 transition">Interior Design</li>
            <li className="hover:text-orange-500 transition">Custom Furniture</li>
            <li className="hover:text-orange-500 transition">Renovation</li>
            <li className="hover:text-orange-500 transition">Modular Kitchen</li>
            <li className="hover:text-orange-500 transition">Turnkey Projects</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
              <span>BANGLORE/MYSORE/KERALA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+91 9886296811/8660496811</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>concepts3d@yahoo.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-stone-700 pt-6 text-center text-sm text-stone-500">
        © 2025 3DConcept — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
