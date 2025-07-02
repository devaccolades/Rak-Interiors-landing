"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo/2c851e25ba22c1716cf66563d4157775812054ee.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "", // Changed from email to propertyType
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle submission logic here
  };

  return (
    <main className="bg-[#F2F1EC]">
      <section className="containers grid grid-cols-1 md:grid-cols-2 justify-between xl:pt-16 pb-5 md:pt-10 pt-7 gap-y-5">
        {/* LEFT SECTION */}
        <div className="text-black flex flex-col justify-between min-h-[400px] space-y-4">
          <div className="space-y-3">
            <Image
              src={logo}
              alt="logo"
              className="w-[120px] xl:w-[200px] h-auto"
            />
            <div className="w-[80%] space-y-3">
              <h4 className="text-[24px] xl:text-[36px] font-poppins font-normal leading-[100%]">
                We Deliver Beautiful Interiors. On Time. With Zero Compromise.
              </h4>
              <p className="text-[14px] font-poppins font-normal">
                Share your details and let’s create a timeline-driven,
                finish-perfect space — right here in Bangalore.
              </p>
            </div>
          </div>
          {/* Moved to bottom */}
          <p className="text-[12px] font-poppins mt-4">
            Copyright © 2025{" "}
            <span className="text-[#ED1846] font-medium">RAK Interiors</span>{" "}
            All Rights Reserved
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full max-w-2xl mx-auto bg-white text-black rounded-[20px] px-6 py-6 md:px-8 md:py-8 flex flex-col gap-y-4">
          <h3 className="font-viaoda text-[20px] md:text-[28px] leading-tight tracking-wide">
            Connect With Us
          </h3>

          <form className="flex flex-col gap-y-4 w-full">
            {/* Name Field */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black bg-white border border-gray-400 rounded-md focus:outline-none"
              />
            </div>

            {/* Phone Field */}
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black bg-white border border-gray-400 rounded-md focus:outline-none"
              />
            </div>

            {/* Property Type Select Field */}
            <div className="w-full">
              <label
                htmlFor="propertyType"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black bg-white border border-gray-400 rounded-md focus:outline-none"
              >
                <option value="">Select Property Type</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#ED1846] text-white font-semibold py-2 rounded-md hover:bg-[#c5153a] transition-all"
            >
              Request a callback
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Footer;
