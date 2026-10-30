import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes";
import { useFavourites } from "../hooks/useFavourite.js";

const Favourite = () => {
  const { favouriteIds } = useFavourites();
  const favouriteRecipes = recipes.filter((recipe) =>
    favouriteIds.includes(recipe.id),
  );

  return (
    <div>
      <Navbar />

      <main className="overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <section className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f8d9ca] opacity-70 blur-3xl" />
          <p className="favourite-reveal text-sm font-bold uppercase tracking-[0.22em] text-[#ef6d50]">
            Your personal cookbook
          </p>
          <div className="relative mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="favourite-reveal text-5xl font-bold tracking-tight text-[#1e2521] [animation-delay:100ms] sm:text-6xl">
                Favourites<span className="text-[#ef6d50]">.</span>
              </h1>
              <p className="favourite-reveal mt-4 max-w-xl text-base leading-7 text-[#727a73] [animation-delay:200ms]">
                The recipes you want to come back to, all in one delicious
                place.
              </p>
            </div>
            <div className="favourite-reveal flex w-fit items-center gap-2 rounded-full bg-[#dce6d4] px-4 py-2 text-sm font-semibold text-[#526a51] [animation-delay:300ms]">
              <span className="text-lg" aria-hidden="true">
                ♥
              </span>
              {favouriteRecipes.length}{" "}
              {favouriteRecipes.length === 1 ? "recipe" : "recipes"} saved
            </div>
          </div>
        </section>

        {favouriteRecipes.length > 0 ? (
          <section
            aria-label="Favourite recipes"
            className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {favouriteRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="favourite-card"
                style={{ animationDelay: `${index * 90 + 350}ms` }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </section>
        ) : (
          <section className="favourite-reveal mx-auto mt-14 max-w-xl rounded-3xl border border-dashed border-[#cfd4cb] bg-white/70 px-6 py-14 text-center [animation-delay:350ms]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f8d9ca] text-3xl text-[#ef6d50]">
              ♡
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[#1e2521]">
              Nothing saved yet
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#727a73]">
              Tap the heart on any recipe you love and it will appear here for
              your next cooking moment.
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Favourite;
