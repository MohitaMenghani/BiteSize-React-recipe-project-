import React from 'react'
import Navbar from "../components/Navbar";
const Create = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#f8f7f2]">
        <Navbar />

        {/* Hero section will go here */}

<section className="relative px-12 pb-10 pt-20">
  <div className="max-w-xl">
    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.4px] text-[#ef6d50]">
      <span className="h-[2px] w-7 bg-[#ef6d50]" />
      A blank canvas for good food
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

  <div className="absolute right-[10%] top-[230px] flex h-[108px] w-[108px] rotate-6 flex-col items-center justify-center rounded-full border border-[#526a51]/20 text-center">
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
      </div>
    </div>
  );
}

export default Create
