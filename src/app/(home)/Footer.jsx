"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo/2c851e25ba22c1716cf66563d4157775812054ee.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, name: value }));
        setErrors((prev) => ({ ...prev, name: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          name: "Only alphabets are allowed in name.",
        }));
      }
    } else if (name === "phone") {
      const sanitizedValue = value.replace(/\s+/g, "");
      setFormData((prev) => ({ ...prev, phone: sanitizedValue }));

      if (!/^\d{10}$/.test(sanitizedValue)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.propertyType)
      newErrors.propertyType = "Please select a property type.";

    try {
      const response = await fetch("api/send-mail", {
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
      setFormData({ name: "", phone: "", propertyType: "" });
      setErrors({});
      setErrorMessage("");

      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
  };

  return (
    <main className="bg-[#F2F1EC]">
      <section
        id="contact"
        className="containers flex flex-col-reverse md:grid md:grid-cols-2 justify-between xl:pt-16 pb-10 md:pt-10 pt-7 gap-y-5"
      >
        {/* LEFT SECTION */}
        <div className="text-black flex flex-col justify-between space-y-4">
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
        <div className="w-full xl:w-[80%] mx-auto xl:mr-auto bg-white text-black rounded-[20px] px-6 py-6 md:px-8 md:py-8 flex flex-col gap-y-4">
          <h3 className="font-viaoda text-[20px] md:text-[28px] leading-tight tracking-wide">
            Connect With Us
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 w-full"
          >
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
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
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
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
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
                <option value="Townhouse">Individual Home</option>
                <option value="Office">Office</option>
                <option value="Others">Others</option>
              </select>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyType}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#ED1846] text-white font-semibold py-2 rounded-md hover:bg-[#c5153a] transition-all"
            >
              Request a callback
            </button>

            {/* Messages */}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Footer;
