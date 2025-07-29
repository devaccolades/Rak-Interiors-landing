"use client";
import React from "react";
import Image from "next/image";
import cover from "../../../public/b65609186001bca5f91c23472a1de2b9a95b2584-min.jpg";
import shade from "../../../public/Frame 2147223264 (2).svg";
import thumbnailImg from "../../../public/5b9d505582939dacf7dee937c4b9a3fadf84dcff-min.png";

const Testimonials = () => {
  return (
    <main className="bg-[#F2F1EC]">
      <section className="relative">
        <Image
          src={cover}
          alt="cover"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1000px] object-top object-cover"
        />
        <Image
          src={shade}
          alt="white-shadow"
          className="absolute -bottom-1 w-full"
        />
      </section>

      <section className="py-10 md:py-12 containers mx-auto">
  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
    
    {/* Left: Video */}
    <div className="w-full md:w-2/5 flex justify-center">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex justify-center">
        <video
          controls
          playsInline
          className="w-auto max-h-[430px] rounded-2xl border-4 border-white"
          poster="/thmbnail.jpeg"
        >
          <source src="/testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-3/5 text-center md:text-left mx-auto containers">
      <h3 className="text-sm md:text-base font-poppins font-medium text-gray-600">
        <span className="text-[#ED1846] font-semibold">#Happy</span> Clients
      </h3>
      <h4 className="mt-3 text-2xl md:text-[48px] font-viaoda font-normal md:max-w-[80%] text-gray-800 md:leading-[48px]">
        TRUSTED BY HOMEOWNERS ACROSS 
        <span className="text-[#ED1846]"> SOUTH INDIA</span>
      </h4>
      <p className="mt-4 text-gray-600 font-normal md:text-[16px] leading-relaxed md:max-w-xl font-poppins">
        From concept to completion, our clients count on us for quality,
        transparency, and timely delivery. Hear directly from those who made
        their dream spaces a reality.
      </p>
    </div>
  </div>
</section>


    </main>
  );
};

export default Testimonials;