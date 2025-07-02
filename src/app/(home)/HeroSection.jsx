"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field, value) => {
    if (field === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, name: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          name: "Only alphabets are allowed in name.",
        }));
      }
    }

    if (field === "phone") {
      // Strip all whitespace
      const sanitizedValue = value.replace(/\s+/g, "");

      // Update the field value freely
      setFormData((prev) => ({ ...prev, phone: sanitizedValue }));

      // Show error if input is not valid
      if (!/^\d{10}$/.test(sanitizedValue)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submit
    if (!formData.name || !formData.phone) {
      setErrors({
        name: !formData.name ? "Name is required." : errors.name,
        phone: !formData.phone ? "Phone is required." : errors.phone,
      });
      return;
    }

    try {
      const response = await fetch("https://abc.com/fporm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("API response error");
      }

      setSuccessMessage("Form submitted successfully!");
      setFormData({ name: "", phone: "" });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
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
      <div className="w-full xl:w-[90%] mx-auto bg-[#232323] rounded-[20px] p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-y-2 text-white">
        <h3 className="font-viaoda text-[24px] lg:text-[32px] leading-[120%] tracking-wide">
          Packages start from ₹5.9 Lakhs.
        </h3>
        <p className="font-poppins text-[13px] lg:text-[16px] leading-[156%]">
          Ready to begin? Fill out the form and our team will get in touch soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          {/* Name Field */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#181818] border border-gray-500 rounded-md focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-white"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#181818] border border-gray-500 rounded-md focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ED1846] font-poppins font-medium text-white text-sm px-6 py-2 rounded-md  hover:bg-[#c5153a] transition-all cursor-pointer"
          >
            Enquire Now
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-400 text-sm font-medium mt-2">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-400 text-sm font-medium mt-2">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
