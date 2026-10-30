import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Favourite from "../pages/Favourite";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-recipes" element={<Create />} />
      <Route path="/fav" element={<Favourite />} />
    </Routes>
  );
};

export default Mainroutes;
