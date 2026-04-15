import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Entrées",
    items: [
      { name: "Bricks (thon, oeuf ou viande)", price: "7,00" },
      { name: "Cigares de Djerba", price: "7,00" },
      { name: "Melon Jambon", price: "7,00" },
    ],
  },
  {
    title: "Salades",
    items: [
      { name: "Niçoise", price: "14,00" },
      { name: "Chèvre Chaud", price: "14,00" },
      { name: "César", price: "14,00" },
      { name: "Saumon Fumé", price: "14,00" },
      { name: "Burrata", price: "15,00" },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Marguerite", price: "12,00" },
      { name: "Napolitaine", price: "14,00" },
      { name: "Reine", price: "14,00" },
      { name: "3 Fromages", price: "14,00" },
      { name: "Aubergine", price: "14,00" },
      { name: "Cannibale", price: "14,00" },
      { name: "Orientale", price: "14,00" },
      { name: "Poulet", price: "14,00" },
      { name: "Saumon", price: "14,00" },
      { name: "Neptune", price: "14,00" },
      { name: "Fruit de Mer", price: "16,00" },
      { name: "4 Saisons", price: "14,00" },
      { name: "Chèvre", price: "14,00" },
      { name: "Chèvre Miel", price: "14,00" },
      { name: "Du Chef", price: "14,00" },
      { name: "Burrata", price: "16,00" },
    ],
  },
  {
    title: "Pâtes",
    items: [
      { name: "Bolognaise", price: "14,00" },
      { name: "Carbonara", price: "14,00" },
      { name: "Pesto", price: "14,00" },
      { name: "Saumon", price: "16,00" },
    ],
  },
  {
    title: "Omelettes",
    items: [
      { name: "Nature", price: "14,00" },
      { name: "Champignons", price: "15,00" },
      { name: "Jambon Fromage", price: "15,00" },
    ],
  },
  {
    title: "Grillades",
    items: [
      { name: "Brochette Poulet", price: "15,00" },
      { name: "Entrecôte", price: "21,00" },
      { name: "Brochette Agneau", price: "19,00" },
      { name: "Côtelettes Agneau", price: "19,00" },
    ],
  },
  {
    title: "Plats",
    items: [
      { name: "Escalope Milanaise", price: "16,00" },
      { name: "Escalope à la Crème", price: "16,00" },
      { name: "Escalope Grillée", price: "16,00" },
      { name: "Burger", price: "16,00" },
      { name: "Assiette Kebab", price: "16,00" },
      { name: "Assiette Tunisienne", price: "18,00" },
      { name: "Dorade Grillée (Frite et Salade)", price: "21,00" },
      { name: "Fish and Chips (Frite et Salade)", price: "15,00" },
      { name: "Croque Madame + Salade", price: "14,00" },
    ],
  },
  {
    title: "Couscous",
    items: [
      { name: "Couscous Poulet", price: "17,00" },
      { name: "Couscous Kefta", price: "17,00" },
      { name: "Couscous Merguez", price: "17,00" },
      { name: "Couscous Agneau", price: "19,00" },
      { name: "Couscous Royal", price: "25,00" },
    ],
  },
  {
    title: "Boissons",
    items: [
      { name: "Mojito", price: "9,00" },
      { name: "Virgin Mojito", price: "9,00" },
      { name: "Apérol Spritz", price: "9,00" },
      { name: "Citronnade Maison", price: "5,00" },
      { name: "Jus d'Orange Pressé", price: "7,00" },
      { name: "Oriental Cake", price: "13,00" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Tarte au Citron", price: "6,00" },
      { name: "Tarte aux Pommes", price: "6,00" },
    ],
  },
  {
    title: "Menu Enfants",
    items: [
      { name: "Steak ou Escalope + Frites ou Pâtes / Pizza Marguerite", price: "13,00" },
    ],
  },
  {
    title: "Formule",
    items: [
      { name: "Entrée + Plat + Dessert + Café ou Thé à la Menthe", price: "26,00" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine maghrébine · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
