import Navbar from "../components/Navbar";
import CravingSection from "../components/CravingSection";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="px-12 py-20">
        <p className="text-sm uppercase tracking-widest text-red-500 font-bold">
          Your daily serving of inspiration
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tighter lg:px-12">
          Make something
          <br />
          <i>delicious</i> today.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Fresh ideas, thoughtful recipes, and the little spark that makes
          cooking feel like yours.
        </p>
      </section>
      <CravingSection />
    </div>
  );
};

export default Home;
