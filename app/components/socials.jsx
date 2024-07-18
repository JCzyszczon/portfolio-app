import React from "react";
import AllLinks from "./allLinks";

function Socials() {
  return (
    <section className='fixed drop-shadow-2xl right-4 bottom-4 min-w-[150px] rounded-2xl duration-200 z-40 sm:flex hidden justify-center items-center px-6 navbar border border-borderColor text-xl gap-6'>
      <AllLinks />
    </section>
  );
}

export default Socials;
