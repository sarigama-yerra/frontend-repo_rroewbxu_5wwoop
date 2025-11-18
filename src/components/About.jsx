import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1600&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Warm, welcoming, and a little bit fiery</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We started as a tiny pizza window and grew into a neighborhood staple. Our kitchen mixes wood-fire techniques with seasonal produce and a touch of spice. Everything we serve is made with attention to detail and a focus on comfort.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Whether it’s a date night or a gathering with friends, we’ve designed our space to feel like a second home—just with better lighting and better wine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
