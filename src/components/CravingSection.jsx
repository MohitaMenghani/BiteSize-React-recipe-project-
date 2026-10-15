import React from "react";

const CravingSection = () => {
  return (
    <section className="px-6 py-16 lg:px-12 mb-8 flex items-end justify-between gap-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#1e2521] md:text-4xl">
          What are you craving?
        </h2>

        <p className="mt-3 text-base text-[#727a73]">
          Handpicked recipes for every kind of day.
        </p>
      </div>

      {/* arrows */}
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous Recipes"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfd4cb] bg-transparent"
        >
          <i className="ri-arrow-left-line"></i>
        </button>
        <button
          type="button"
          aria-label="Next recipes"
          className="flex h-10 w-10 items-center justify-center rounded-full  border border-[#cfd4cb] bg-transparent"
        >
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* recipe cards */}
      {/* <div className="grid grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div> */}
      {/* animation / slider */}
    </section>
  );
};

export default CravingSection;
