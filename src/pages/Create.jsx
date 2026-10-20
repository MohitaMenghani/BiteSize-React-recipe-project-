import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Create = () => {
  const initialIngredients = [{ amount: "", name: "" }];
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [time, setTime] = useState("30 min");
const [servings, setServings] = useState("2 servings");
const [difficulty, setDifficulty] = useState("Easy");
const [ingredients, setIngredients] = useState(initialIngredients);
// const [steps, setSteps] = useState(initialSteps);
const [tags, setTags] = useState(["Dinner"]);
const [image, setImage] = useState("");
const [message, setMessage] = useState("");
const availableTags = ["Breakfast", "Lunch", "Dinner", "Vegetarian", "Sweet"];

const updateIngredient = (index, key, value) =>
  setIngredients((items) =>
    items.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
  );
const updateStep = (index, value) =>
  setSteps((items) => items.map((item, i) => (i === index ? value : item)));
const addIngredient = () =>
  setIngredients((items) => [...items, { amount: "", name: "" }]);
const addStep = () => setSteps((items) => [...items, ""]);
const removeIngredient = (index) =>
  setIngredients((items) =>
    items.length > 1 ? items.filter((_, i) => i !== index) : items,
  );
const removeStep = (index) =>
  setSteps((items) =>
    items.length > 1 ? items.filter((_, i) => i !== index) : items,
  );
const toggleTag = (tag) =>
  setTags((items) =>
    items.includes(tag)
      ? items.filter((item) => item !== tag)
      : [...items, tag],
  );
const handleImage = (event) => {
  const file = event.target.files[0];
  if (file) setImage(URL.createObjectURL(file));
};
const save = (event) => {
  event.preventDefault();
  setMessage(
    title.trim()
      ? "Your recipe is ready to share. Nice work!"
      : "Add a recipe name before publishing.",
  );
};
  return (
    <div>
      <div className="min-h-screen bg-[#f8f7f2]">
        <Navbar />

        {/* Hero section will go here */}

        <section className="relative px-12 pb-10 pt-20">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.4px] text-[#ef6d50]">
              <span className="h-0.5 w-7 bg-[#ef6d50]" />A blank canvas for good
              food
            </p>

            <h1 className="mt-6 font-serif text-7xl font-bold leading-[0.95] tracking-tight text-[#1e2521]">
              Bring your
              <br />
              <span className="italic text-[#ef6d50]">recipe</span> to life.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#727a73]">
              The best recipes start as a feeling. Capture yours here, one
              delicious detail at a time.
            </p>
          </div>

          <div className="absolute right-[10%] top-57.5 flex h-27 w-27 rotate-6 flex-col items-center justify-center rounded-full border border-[#526a51]/20 text-center">
            <span className="font-serif text-2xl font-bold italic text-[#ef6d50]">
              01
            </span>
            <span className="text-[11px] font-medium italic leading-3 text-[#526a51]">
              make it
              <br />
              yours
            </span>
          </div>
        </section>

        {/* Recipe form and live preview will go here */}

        <div
          className="grid grid-cols-[minmax(0,1.18fr)_minmax(330px,0.82fr)] items-start gap-6.75 pt-0 pb-20 px-[clamp(20px,5vw,76px)]"
          id="create"
        >
          <form
            onSubmit={save}
            className="relative rounded-[22px] border border-[#e4e6df] bg-[#fffefa] p-9.5"
          >
            <div className="border-b border-[#e9e6dd] pb-5">
              <h2 className="font-serif text-2xl font-bold text-[#1e2521]">
                Recipe details
              </h2>
              <p className="mt-2 text-sm text-[#727a73]">
                Start with the story behind your dish.
              </p>
            </div>
            <div className="mt-6">
              <label
                htmlFor="title"
                className="mb-2 block text-[13px] font-semibold text-[#1e2521]"
              >
                Recipe name
              </label>
              <input
                className="w-full rounded-[10px] border border-[#dedfd6] bg-[#fbfbf7] px-3.5 py-3 text-sm text-[#1e2521] outline-none transition focus:border-[#ef6d50] focus:ring-2 focus:ring-[#ef6d50]/10"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Lemon butter pasta"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="description"
                className="block text-[13px] font-semibold text-[#1e2521]"
              >
                A little introduction{" "}
                <span className="font-normal text-[#8a8f86]">(optional)</span>
              </label>
              <textarea
                className="mt-2 min-h-25 w-full resize-y rounded-[10px] border border-[#dedfd6] bg-[#fbfbf7] px-3.5 py-3 text-sm text-[#1e2521] outline-none transition placeholder:text-[#9a9e96] focus:border-[#ef6d50] focus:ring-2 focus:ring-[#ef6d50]/10"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What makes this one special?"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="recipe-image"
                className="mb-2 block text-[13px] font-semibold text-[#1e2521]"
              >
                Recipe photo{" "}
                <span className="font-normal text-[#8a8f86]">(optional)</span>
              </label>

              <label className="flex min-h-25 cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-[#b8c9b4] bg-[#f8faf5] px-4 py-5 text-center transition hover:bg-[#edf3e9]">
                <span className="text-2xl text-[#526a51]" aria-hidden="true">
                  ＋
                </span>
                <span className="mt-1 text-xs font-medium text-[#526a51]">
                  {image
                    ? "Photo added — choose another"
                    : "Add a delicious cover photo"}
                </span>

                <input
                  id="recipe-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="sr-only"
                />
              </label>

              {image && (
                <img
                  src={image}
                  alt="Selected recipe"
                  className="mt-3 h-40 w-full rounded-xl object-cover"
                />
              )}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-[13px] font-semibold text-[#1e2521]"
                >
                  Cooking time
                </label>

                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-[10px] border border-[#dedfd6] bg-[#fbfbf7] px-3 py-3 text-sm text-[#1e2521] outline-none focus:border-[#ef6d50]"
                >
                  <option>15 min</option>
                  <option>30 min</option>
                  <option>45 min</option>
                  <option>1 hour</option>
                  <option>2+ hours</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="servings"
                  className="mb-2 block text-[13px] font-semibold text-[#1e2521]"
                >
                  Serves
                </label>

                <select
                  id="servings"
                  value={servings}
                  onChange={(e) => setServings(e.target.value)}
                  className="w-full rounded-[10px] border border-[#dedfd6] bg-[#fbfbf7] px-3 py-3 text-sm text-[#1e2521] outline-none focus:border-[#ef6d50]"
                >
                  <option>1 serving</option>
                  <option>2 servings</option>
                  <option>4 servings</option>
                  <option>6+ servings</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="difficulty"
                className="mb-2 block text-[13px] font-semibold text-[#1e2521]"
              >
                Difficulty
              </label>

              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full rounded-[10px] border border-[#dedfd6] bg-[#fbfbf7] px-3 py-3 text-sm text-[#1e2521] outline-none focus:border-[#ef6d50]"
              >
                <option>Easy</option>
                <option>Intermediate</option>
                <option>Cheffy</option>
              </select>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-[#e9e6dd] pt-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1e2521]">
                  Ingredients
                </h3>
                <p className="mt-1 text-xs text-[#727a73]">
                  Everything you need to make it.
                </p>
              </div>

              <button
                className="rounded-full px-3 py-2 text-xs font-bold text-[#cf5039] transition hover:bg-[#ef6d50]/10"
                type="button"
                onClick={addIngredient}
              >
                ＋ Add ingredient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
