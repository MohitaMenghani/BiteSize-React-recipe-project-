import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import recipes from "../data/Recipes";
import RecipeCard from "./RecipeCard";

const CravingSection = () => {
  const swiperRef = useRef(null);
  const [category, setCategory] = useState("All recipes");
  const categories = [
    "All recipes",
    "Breakfast",
    "Dinner",
    "Healthy",
    "Dessert",
  ];
const filteredRecipes = recipes.filter((recipe) => {
  return category === "All recipes" || recipe.category === category;
}); 

  return (
    <section className="mb-8 px-2 py-16 lg:px-12">
      {/* Heading and arrows */}
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1e2521]">
            What are you craving?
          </h2>

          <p className="mt-3 text-base text-[#727a73]">
            Handpicked recipes for every kind of day.
          </p>
        </div>

        <div className="flex gap-2 mb-8">
          <button
            type="button"
            aria-label="Previous recipes"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfd4cb] transition hover:bg-[#dce6d4]"
          >
            <i className="ri-arrow-left-line" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            aria-label="Next recipes"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfd4cb] transition hover:bg-[#dce6d4]"
          >
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Recipe slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4.5}
        spaceBetween={18}
        speed={500}
        className="recipe-slider"
      >
        {filteredRecipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Category filters */}
      <div className="mt-5 flex flex-wrap gap-4">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "border-[#1e2521] bg-[#1e2521] text-white"
                : "border-[#d5d9d0] bg-transparent text-[#59615a] hover:bg-[#e9ede5]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CravingSection;
