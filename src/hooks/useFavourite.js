import { useCallback, useEffect, useState } from "react";
//2 read
const STORAGE_KEY = "chefy-favourite-recipes";
const FAVOURITES_CHANGED_EVENT = "chefy:favourites-changed";
// 2 read
const readFavouriteIds = () => {
  try {
    const storedIds = window.localStorage.getItem(STORAGE_KEY);
    const parsedIds = storedIds ? JSON.parse(storedIds) : [];
    return Array.isArray(parsedIds) ? parsedIds : [];
  } catch (error) {
    console.error("Unable to read favourite recipes.", error);
    return [];
  }
};
// 3 save
const saveFavouriteIds = (ids) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(FAVOURITES_CHANGED_EVENT));
  } catch (error) {
    console.error("Unable to save favourite recipes.", error);
  }
};

export const useFavourites = () => {
  //4
  const [favouriteIds, setFavouriteIds] = useState(readFavouriteIds);

  useEffect(() => {
    const syncFavourites = () => setFavouriteIds(readFavouriteIds());

    window.addEventListener(FAVOURITES_CHANGED_EVENT, syncFavourites);
    window.addEventListener("storage", syncFavourites);

    return () => {
      window.removeEventListener(FAVOURITES_CHANGED_EVENT, syncFavourites);
      window.removeEventListener("storage", syncFavourites);
    };
  }, []);
  //5 Existing array ko mutate nahi karna; ek naya array banana hai. Isliye hum filter() aur spread operator use kar rahe hain.
  const toggleFavourite = useCallback((recipeId) => {
    setFavouriteIds((currentIds) => {
      const nextIds = currentIds.includes(recipeId)
        ? currentIds.filter((id) => id !== recipeId)
        : [...currentIds, recipeId];

      saveFavouriteIds(nextIds);
      return nextIds;
    });
  }, []);
//6
  return {
    favouriteIds,
    toggleFavourite,
    isFavourite: (recipeId) => favouriteIds.includes(recipeId),
  };
};
