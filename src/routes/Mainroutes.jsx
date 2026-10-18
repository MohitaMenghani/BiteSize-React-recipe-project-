import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-recipes" element={<Create />} />
    </Routes>
  );
};

export default Mainroutes;
