import React from "react";

const menu = [
  { category: "Wood-Fired Pizza", items: [
    { name: "Margherita", desc: "San Marzano, fior di latte, basil, olive oil", price: 14 },
    { name: "Pepperoni", desc: "Cup-and-char pepperoni, provolone, oregano", price: 16 },
    { name: "Funghi", desc: "Roasted mushrooms, taleggio, thyme, truffle oil", price: 18 },
  ]},
  { category: "Small Plates", items: [
    { name: "Charred Octopus", desc: "Chickpeas, chorizo, smoked paprika aioli", price: 17 },
    { name: "Burrata", desc: "Heirloom tomatoes, basil, balsamic", price: 15 },
    { name: "Crispy Cauliflower", desc: "Harissa honey, tahini, mint", price: 12 },
  ]},
  { category: "Cocktails", items: [
    { name: "Negroni Sbagliato", desc: "Campari, sweet vermouth, prosecco", price: 13 },
    { name: "Smoked Old Fashioned", desc: "Bourbon, demerara, bitters", price: 14 },
    { name: "Yuzu Spritz", desc: "Gin, yuzu, elderflower, soda", price: 12 },
  ]},
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Menu</h2>
          <p className="text-slate-300 mt-3">Seasonal ingredients, fire-kissed flavor.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menu.map((section) => (
            <div key={section.category} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 shadow">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                    <span className="text-amber-400 font-semibold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
