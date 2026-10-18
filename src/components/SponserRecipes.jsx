const sponsored = [
  {
    title: "Golden hour shakshuka",
    brand: "Sunrise Pantry",
    detail: "A bright, one-pan brunch",
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Lemon pepper prawns",
    brand: "Coastal Kitchen",
    detail: "Fast, fresh, and zesty",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Chocolate olive oil cake",
    brand: "Morrow & Co.",
    detail: "Rich with a silky crumb",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=85",
  },
];

const SponserRecipes = () => {
  return (
    <section className="relative mx-6 mt-15.5 mb-16 rounded-[14px] bg-[#dce6d4] px-9.5 py-7.5 pb-8.5 lg:mx-12">
      <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#526a51]">
        A little help from our friends
      </p>

      <h2 className="mt-1.75 font-serif text-3xl font-bold text-[#1e2521]">
        Sponsored recipes
      </h2>

      <p className="mt-2 text-sm text-[#727a73]">
        Good ingredients make great beginnings.
      </p>

      <div className="mt-5.75 grid grid-cols-3 gap-4.5">
        {sponsored.map((item) => (
          <article
            key={item.title}
            className="flex items-center gap-3.75 rounded-[10px] bg-white/75 p-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-23.5 w-24 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#526a51]">
                {item.brand}
              </p>

              <h3 className="mt-1.5 font-serif text-lg font-bold leading-tight text-[#1e2521]">
                {item.title}
              </h3>

              <p className="mt-2 text-[11px] text-[#727a73]">{item.detail} ↗</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SponserRecipes;
