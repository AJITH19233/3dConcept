import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/herojpg.jpg";
import img1 from '../assets/Apartments/img1.jpg'
import img2 from '../assets/Apartments/img2.jpg'
import img3 from '../assets/Apartments/img3.jpg'
import img4 from '../assets/Apartments/img4.jpg'
import img5 from '../assets/Apartments/img5.jpg'
import img6 from '../assets/Apartments/img6.jpg'
import res1 from '../assets/Residential/res1.jpg'
import res2 from '../assets/Residential/res2.jpg'
import res3 from '../assets/Residential/res3.jpg'
import res4 from '../assets/Residential/res4.jpg'
import res5 from '../assets/Residential/res5.jpg'
import res6 from '../assets/Residential/res6.jpg'
import comm1 from '../assets/Commercial/comm1.jpg'
import comm2 from '../assets/Commercial/comm2.jpg'
import comm3 from '../assets/Commercial/comm3.jpg'
import comm4 from '../assets/Commercial/comm4.jpg'
import comm5 from '../assets/Commercial/comm5.jpg'
import comm6 from '../assets/Commercial/comm6.jpg'
import int1 from '../assets/Interiors/int1.jpg'
import int2 from '../assets/Interiors/int2.jpg'
import int3 from '../assets/Interiors/int3.jpg'
import int4 from '../assets/Interiors/int4.jpg'
import int5 from '../assets/Interiors/int5.jpg'
import int6 from '../assets/Interiors/int6.jpg'

// Example portfolio items
const projects = [
  {
    id: 1,
    title: "",
    category: "Residential",
    image: img1,
  },
  {
    id: 2,
    title: "",
    category: "Residential",
    image: img2,
  },
  {
   id: 3,
    title: "",
    category: "Residential",
    image: img3,
  },
  {
    id: 4,
    title: "",
    category: "Residential",
    image: img4,
  },
  {
    id: 5,
    title: "",
    category: "Residential",
    image: img5,
  },
  {
    id: 6,
    title: "",
    category: "Residential",
    image: img6,
  },
  {
    id: 7,
    title: "",
    category: "Appartment",
    image: res1,
  },
  {
    id: 8,
    title: "",
    category: "Appartment",
    image: res2,
  },
  {
    id: 9,
    title: "",
    category: "Appartment",
    image: res3,
  },
  {
    id: 10,
    title: "",
    category: "Appartment",
    image: res4,
  },
  {
    id: 11,
    title: "",
    category: "Appartment",
    image: res5,
  },
  {
    id: 12,
    title: "",
    category: "Appartment",
    image: res6,
  },
  {
    id: 13,
    title: "",
    category: "Commercial",
    image: comm1,
  },
  {
    id: 14,
    title: "",
    category: "Commercial",
    image: comm2,
  },
  {
    id: 15,
    title: "",
    category: "Commercial",
    image: comm3,
  },
  {
    id: 16,
    title: "",
    category: "Commercial",
    image: comm4,
  },
  {
    id: 17,
    title: "",
    category: "Commercial",
    image: comm5,
  },
  {
    id: 18,
    title: "",
    category: "Commercial",
    image: comm6,
  },
  {
    id: 19,
    title: "",
    category: "Interior",
    image: int6,
  },
  {
    id: 20,
    title: "",
    category: "Interior",
    image: int1,
  },
  {
    id: 21,
    title: "",
    category: "Interior",
    image: int2,
  },
  {
    id: 22,
    title: "",
    category: "Interior",
    image: int3,
  },
  {
    id: 23,
    title: "",
    category: "Interior",
    image: int4,
  },
  {
    id: 24,
    title: "",
    category: "Interior",
    image: int5,
  },
];

const categories = ["All", "Appartment", "Commercial", "Interior","Residential"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-stone-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 text-center mb-8">
          Our Portfolio
        </h2>

        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
          Explore our finest interior works curated across styles, moods, and spaces.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm transition-all
              ${
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white font-medium text-lg tracking-wide">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
