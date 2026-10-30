import { createContext, useEffect, useState } from "react";
import recipes from "../data/Recipes";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const savedRecipes = localStorage.getItem("chefy-recipes");

      return savedRecipes ? JSON.parse(savedRecipes) : recipes;
    } catch (error) {
      console.error("Unable to load recipes:", error);
      return recipes;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("chefy-recipes", JSON.stringify(data));
    } catch (error) {
      console.error("Unable to save recipes:", error);
    }
  }, [data]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
