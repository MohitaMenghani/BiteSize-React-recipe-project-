import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import recipes from "../data/Recipes";

const recipeDetails = {
  "Creamy tomato rigatoni": {
    description:
      "Silky tomato sauce, garlic, and parmesan turn rigatoni into a comforting weeknight dinner with a little restaurant-style richness.",
    servings: "4 servings",
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      ["Rigatoni", "12 oz (340 g)"],
      ["Crushed tomatoes", "1 can (28 oz)"],
      ["Heavy cream", "1/2 cup (120 ml)"],
      ["Parmesan, finely grated", "1/2 cup (45 g)"],
      ["Garlic, minced", "3 cloves"],
      ["Olive oil", "2 tbsp"],
      ["Fresh basil", "1/4 cup, torn"],
      ["Kosher salt and pepper", "To taste"],
    ],
    instructions: [
      "Cook the rigatoni in well-salted water until just al dente. Reserve 1 cup of pasta water, then drain.",
      "Warm olive oil in a large skillet. Cook garlic for 30 seconds, then stir in crushed tomatoes and simmer for 10 minutes.",
      "Lower the heat and stir in cream and parmesan. Season with salt and pepper.",
      "Toss in the pasta, adding reserved pasta water a splash at a time until glossy. Finish with basil.",
    ],
    nutrition: ["520 kcal", "18 g", "76 g", "16 g"],
  },
  "Crispy herb chicken": {
    description:
      "Juicy chicken breasts with a golden herb crust and a bright lemon finish. A reliable dinner for busy nights.",
    servings: "4 servings",
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      ["Chicken breasts", "4 boneless, skinless"],
      ["Panko breadcrumbs", "1 cup (100 g)"],
      ["Fresh parsley, chopped", "1/4 cup"],
      ["Garlic, minced", "2 cloves"],
      ["Lemon zest", "1 lemon"],
      ["Egg", "1 large"],
      ["Olive oil", "3 tbsp"],
      ["Salt and black pepper", "To taste"],
    ],
    instructions: [
      "Heat the oven to 425°F (220°C). Pat the chicken dry and season both sides with salt and pepper.",
      "Mix panko, parsley, garlic, lemon zest, and 1 tablespoon of olive oil in a shallow bowl.",
      "Dip each chicken breast in beaten egg, then press into the herb crumb mixture.",
      "Bake on an oiled sheet for 25–30 minutes, until crisp and the center reaches 165°F (74°C).",
    ],
    nutrition: ["410 kcal", "39 g", "22 g", "19 g"],
  },
  "Honey ricotta toast": {
    description:
      "Creamy ricotta, sweet honey, and crisp sourdough make this easy toast feel special from the very first bite.",
    servings: "2 servings",
    prepTime: "5 min",
    cookTime: "10 min",
    ingredients: [
      ["Sourdough bread", "2 thick slices"],
      ["Whole-milk ricotta", "1/2 cup (125 g)"],
      ["Honey", "2 tbsp"],
      ["Fresh berries", "1/2 cup"],
      ["Pistachios, chopped", "2 tbsp"],
      ["Flaky salt", "1 pinch"],
    ],
    instructions: [
      "Toast the sourdough until deeply golden and crisp.",
      "Spread each slice generously with ricotta and arrange the berries on top.",
      "Drizzle with honey, sprinkle with pistachios and flaky salt, and serve immediately.",
    ],
    nutrition: ["320 kcal", "12 g", "42 g", "12 g"],
  },
  "Green goddess bowl": {
    description:
      "A fresh, colorful bowl packed with crisp greens, grains, avocado, and a creamy herb dressing.",
    servings: "2 servings",
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      ["Cooked quinoa", "1 1/2 cups"],
      ["Baby spinach", "2 cups"],
      ["Cucumber, sliced", "1/2"],
      ["Avocado, sliced", "1"],
      ["Chickpeas, drained", "1 cup"],
      ["Greek yogurt", "1/3 cup"],
      ["Lemon juice", "2 tbsp"],
      ["Fresh herbs", "1/2 cup, mixed"],
    ],
    instructions: [
      "Whisk yogurt, lemon juice, herbs, 1 tablespoon water, salt, and pepper into a pourable dressing.",
      "Divide quinoa and spinach between two bowls.",
      "Top with cucumber, avocado, and chickpeas. Spoon over the dressing and serve.",
    ],
    nutrition: ["390 kcal", "16 g", "51 g", "17 g"],
  },
  "Miso glazed salmon": {
    description:
      "Tender salmon is brushed with a savory-sweet miso glaze and roasted until caramelized at the edges.",
    servings: "4 servings",
    prepTime: "10 min",
    cookTime: "20 min",
    ingredients: [
      ["Salmon fillets", "4 (6 oz each)"],
      ["White miso", "3 tbsp"],
      ["Mirin", "2 tbsp"],
      ["Soy sauce", "1 tbsp"],
      ["Maple syrup", "1 tbsp"],
      ["Fresh ginger, grated", "1 tsp"],
      ["Scallions, sliced", "2"],
    ],
    instructions: [
      "Heat the oven to 400°F (200°C) and line a baking sheet with parchment.",
      "Whisk miso, mirin, soy sauce, maple syrup, and ginger together.",
      "Brush the glaze over the salmon and roast for 12–15 minutes, until it flakes easily.",
      "Broil for 1–2 minutes for a caramelized finish. Garnish with scallions.",
    ],
    nutrition: ["460 kcal", "42 g", "18 g", "25 g"],
  },
  "Berry cloud pavlova": {
    description:
      "A crisp meringue shell with a soft marshmallow center, cloudlike cream, and plenty of fresh berries.",
    servings: "8 servings",
    prepTime: "25 min",
    cookTime: "50 min",
    ingredients: [
      ["Egg whites", "4 large, room temperature"],
      ["Caster sugar", "1 cup (200 g)"],
      ["Cornstarch", "1 tsp"],
      ["White vinegar", "1 tsp"],
      ["Heavy cream", "1 cup (240 ml)"],
      ["Mixed berries", "2 cups"],
      ["Vanilla extract", "1 tsp"],
    ],
    instructions: [
      "Heat the oven to 250°F (120°C). Whip egg whites to soft peaks, then gradually beat in sugar until glossy.",
      "Fold in cornstarch and vinegar. Shape the meringue into a tall 8-inch circle on parchment.",
      "Bake for 50 minutes, then turn off the oven and let it cool completely inside.",
      "Top with whipped vanilla cream and berries just before serving.",
    ],
    nutrition: ["285 kcal", "4 g", "48 g", "10 g"],
  },
};
const SingleRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the recipe selected from the URL
  const recipe = recipes.find((item) => item.id === id);

  // Find its additional details using the title
  const details = recipe ? recipeDetails[recipe.title] : null;

  // Handle invalid recipe IDs
  if (!recipe) {
    return (
      <div>
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">Recipe not found</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-full bg-[#ef6d50] px-6 py-3 text-white"
          >
            Back to Home
          </button>
        </main>
      </div>
    );
  }

  // Combine the original recipe and its additional details
  const fullRecipe = {
    ...recipe,
    ...(details || {}),
  };

  return (
    <div>
      <Navbar />

      <main className="px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 font-semibold text-[#ef6d50]"
        >
          ← Back
        </button>

        <RecipeDetail recipe={fullRecipe} onClose={() => navigate(-1)} />
      </main>
    </div>
  );
};

export default SingleRecipe;
function RecipeDetail({ recipe, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2521]/60 p-2.5 sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="relative max-h-[92vh] w-full max-w-232.5 overflow-auto rounded-2xl bg-[#faf9f6] shadow-[0_24px_70px_rgba(30,37,33,0.28)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-detail-title"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close recipe"
          className="absolute right-4.5 top-4.5 z-10 flex h-9.5 w-9.5 items-center justify-center rounded-full border-0 bg-white/90 text-2xl leading-none text-[#1e2521] transition hover:bg-[#1e2521] hover:text-white"
        >
          ×
        </button>

        <div className="grid grid-cols-1">
          {/* Recipe image */}
          <img
            className="h-120 w-full object-cover"
            src={recipe.image}
            alt={recipe.title}
          />

          <div className="p-[clamp(26px,4vw,48px)]">
            {/* Category and chef */}
            <div className="text-sm font-semibold uppercase tracking-wider text-[#727a73]">
              {recipe.category} · {recipe.chef}
            </div>

            {/* Recipe title */}
            <h2
              id="recipe-detail-title"
              className="my-2.5 mb-3.5 text-[clamp(30px,4vw,46px)] leading-[1.05] font-bold text-[#1e2521]"
            >
              {recipe.title}
            </h2>

            {/* Description */}
            <p className="mb-5 text-sm leading-[1.65] text-[#727a73]">
              {recipe.description}
            </p>

            {/* Recipe information */}
            <div className="mb-6.25 grid grid-cols-3 gap-3 border-y border-[#e4e6df] py-[3.75 max-[500px]:grid-cols-2">
              {[
                { label: "Yield", value: recipe.servings },
                { label: "Prep", value: recipe.prepTime },
                { label: "Cook", value: recipe.cookTime },
              ].map((item) => (
                <div key={item.label}>
                  <strong className="block text-sm text-[#1e2521]">
                    {item.value}
                  </strong>
                  <span className="mt-0.75 block text-[11px] text-[#727a73]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            <div className="mt-6.5">
              <h3 className="mb-3.25 text-2xl font-bold text-[#1e2521]">
                Ingredients
              </h3>

              <ul className="m-0 list-disc pl-5 text-[13px] leading-[1.55] text-[#727a73]">
                {recipe.ingredients.map(([name, amount]) => (
                  <li key={name} className="mb-2.25 pl-0.75">
                    <strong className="text-[#1e2521]">{amount}</strong> {name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mt-6.5">
              <h3 className="mb-3.25 text-2xl font-bold text-[#1e2521]">
                How to make it
              </h3>

              <ol className="m-0 list-decimal pl-5 text-[13px] leading-[1.55] text-[#727a73]">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="mb-2.25 pl-0.75">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Nutrition */}
            <div className="mt-6.5">
              <h3 className="mb-3.25 text-2xl font-bold text-[#1e2521]">
                Nutrition per serving
              </h3>

              <div className="grid grid-cols-4 gap-2 max-[500px]:grid-cols-2">
                {recipe.nutrition.map((value, index) => (
                  <div
                    className="rounded-lg bg-[#dce6d4] p-2.5"
                    key={`${value}-${index}`}
                  >
                    <strong className="block text-sm text-[#1e2521]">
                      {value}
                    </strong>

                    <span className="mt-0.75 block text-[11px] text-[#727a73]">
                      {["Calories", "Protein", "Carbs", "Fat"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
