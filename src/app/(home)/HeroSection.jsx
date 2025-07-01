import React from "react";

const HeroSection = () => {
  return (
    <section
      className="containers grid grid-cols-1 md:grid-cols-[55%_1fr] gap-5 lg:gap-10 py-[20px]
     lg:py-[40px] items-center"
    >
      <div className="w-full space-y-3">
        <h1 className="font-viaoda text-[36px] md:text-[40px] lg:text-[56px] leading-[100%] uppercase tracking-normal">
          Redefining Interiors in{" "}
          <span className="text-[#ED1846]">Bangalore.</span>15 Finishes.
          <span className="text-[#ED1846]">Endless</span> Possibilities.{" "}
        </h1>
        <p className="w-[65%] font-poppins text-[16px]">
          Work with the best interior designers in town to transform your space
          with unmatched style.
        </p>
      </div>
      <div className="bg-[#232323] rounded-[20px] p-[40px] flex flex-col gap-y-3">
        <h3 className="font-viaoda text-[32px] leading-[120%] tracking-wide">
          Packages start from <br /> ₹5.9 Lakhs.
        </h3>
        <p className="font-poppins text-[16px]">
          Ready to begin? Fill out the form and our team will get in touch soon.
        </p>
        <form action="" className="flex flex-col gap-y-4">
          {/* Name Field */}
          {/* <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="px-4 py-2 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED1846]"
            />
          </div> */}
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 text-white bg-[#181818] border border-gray-500 rounded-md focus:outline-none focus:border-[#ED1846] focus:ring-1 focus:ring-[#ED1846]"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#ED1846] bg-[#181818] px-1"
            >
              Name
            </label>
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="px-4 py-2 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED1846]"
            />
          </div>

          {/* Button */}
          <button className="bg-[#ED1846] text-white text-sm px-6 py-2 rounded-md mt-2">
            Enquire Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
