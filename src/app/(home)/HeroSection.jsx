"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
      <div className="bg-[#232323] rounded-[20px] p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-y-3">
        <h3 className="font-viaoda text-[24px] lg:text-[32px] leading-[120%] tracking-wide">
          Packages start from ₹5.9 Lakhs.
        </h3>
        <p className="font-poppins text-[13px] lg:text-[16px] leading-[156%]">
          Ready to begin? Fill out the form and our team will get in touch soon.
        </p>
        <form action="" className="flex flex-col gap-y-4">
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 text-white bg-[#181818] border border-gray-500 rounded-md focus:outline-none focus:border-[#ED1846] focus:ring-1 focus:ring-[#ED1846]"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 top-2 text-sm text-gray-400 transition-all bg-[#181818] px-1 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-500 
      peer-focus:top-2 
      peer-focus:text-sm 
      peer-focus:text-[#ED1846]`}
            >
              Name
            </label>
          </div>

          {/* Phone Field with Corner Label */}
          <div className="relative w-full">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 text-white bg-[#181818] border border-gray-500 rounded-md focus:outline-none focus:border-[#ED1846] focus:ring-1 focus:ring-[#ED1846]"
            />
            <label
              htmlFor="Phone"
              className={`absolute left-4 top-2 text-sm text-gray-400 transition-all bg-[#181818] px-1 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-500 
      peer-focus:top-2 
      peer-focus:text-sm 
      peer-focus:text-[#ED1846]`}
            >
              Phone
            </label>
          </div>

          {/* Button */}
          <button className="bg-[#ED1846] font-poppins font-medium text-white text-sm px-6 py-2 rounded-md mt-2">
            Enquire Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
