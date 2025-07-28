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
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("API response error");
      }

      setSuccessMessage("Form submitted successfully!");
      setFormData({ name: "", phone: "" });

      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
  };

  return (
   <div
  className="flex justify-center items-center md:h-[80vh] "
>
      <section
        className="containers grid grid-cols-1 md:grid-cols-[55%_1fr] gap-5 lg:gap-10 py-[20px]
            lg:py-[40px] items-center "
      >
        <div className="w-full space-y-3">
          <h1 className="font-viaoda text-[34px] md:text-[40px] lg:text-[56px] leading-[100%] uppercase tracking-normal"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.2)" }}
          >
            Redefining Interiors in{" "}
            <span className="text-[#ED1846]"  style={{ textShadow: "2px 2px 6px rgba(255,255,255,0.2)" }}>Bangalore.</span>15 Finishes.
            <span className="text-[#ED1846]"  style={{ textShadow: "2px 2px 6px rgba(255,255,255,0.2)" }}>Endless</span> Possibilities.{" "}
          </h1>
          <p className="md:w-[65%] font-poppins text-[16px]"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.2)" }}>
            Work with the best interior designers in town to transform your space
            with unmatched style.
          </p>
        </div>
        <div className="w-full xl:w-[90%] mx-auto bg-[#23232320] backdrop-blur-lg rounded-[20px] p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-y-2 text-white">
          <h3 className="font-viaoda text-[24px] lg:text-[32px] leading-[120%] tracking-wide">
            Packages start from <span className="text-[#ED1846]  font-bold" >₹5.9 </span>Lakhs.
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
                className="w-full px-4 py-2 text-white bg-[#23232303] backdrop-blur-lg border  rounded-md focus:outline-none"
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
                className="w-full px-4 py-2 text-white bg-[#23232303] backdrop-blur-lg border  rounded-md focus:outline-none"
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
    </div>

  );
};

export default HeroSection;
