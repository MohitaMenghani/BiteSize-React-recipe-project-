import React, { useState } from "react";
import { useState } from "react";
const RecipeCard = ({ recipe }) => {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e4e6df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={recipe?.image}
          alt={recipe?.title}
        />

        <button
          type="button"
          onClick={() => setSaved((previous) => !previous)}
          aria-label={saved ? "Remove from favourites" : "Save to favourites"}
          aria-pressed={saved}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-sm transition ${
            saved ? "text-[#ef6d50]" : "text-[#1e2521] hover:text-[#ef6d50]"
          }`}
        >
          {saved ? "♥" : "♡"}
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1e2521]">
          {recipe.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="tracking-wide text-[#f4c95d]">★★★★★</span>
          <span className="text-[#727a73]">
            {recipe.rating} ({recipe.reviews})
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-[#1e2521] transition group-hover:text-[#ef6d50]">
          {recipe.title}
        </h3>

        <div className="flex min-w-0 items-center gap-2">
          <img
            className="h-9 w-9 shrink-0 rounded-full object-cover"
            src={recipe.avatar}
            alt=""
          />
          <span className="truncate text-sm font-medium text-[#1e2521]">
            {recipe.chef}
          </span>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/recipes/${recipe.id}`)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#ef6d50] px-4 py-2.5 font-semibold text-white transition hover:bg-[#cf5039]"
        >
          View Recipe <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;
