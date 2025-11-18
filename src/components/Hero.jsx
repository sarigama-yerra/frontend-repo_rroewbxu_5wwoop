import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-emerald-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-xs tracking-widest uppercase text-amber-500 font-semibold mb-3">Since 1998</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Saffron & Flame
            </h1>
            <p className="mt-4 text-slate-200/90 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              A cozy neighborhood restaurant serving seasonal dishes, wood-fired pizzas,
              and handcrafted cocktails. Simple ingredients, bold flavors, warm vibes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a href="#menu" className="px-6 py-3 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors shadow">
                View Menu
              </a>
              <a href="#about" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                About Us
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
