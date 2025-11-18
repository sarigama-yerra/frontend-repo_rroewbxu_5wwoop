import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Visit Us</h2>
          <p className="text-slate-300 mt-2">Open Tuesday–Sunday • 5pm – 11pm</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <h3 className="text-white font-semibold">Location</h3>
            <p className="text-slate-300 mt-2">123 Ember Street, Suite 7<br/>Rivertown, NY 10001</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <h3 className="text-white font-semibold">Contact</h3>
            <p className="text-slate-300 mt-2">(555) 123-9876<br/>hello@saffronandflame.com</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <h3 className="text-white font-semibold">Reservations</h3>
            <p className="text-slate-300 mt-2">Walk-ins welcome. For parties of 6+,
              please email us. Limited patio seating available when weather permits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
