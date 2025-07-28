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

      <section className="pb-10 md:pb-[60px] w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 px-4 md:px-10 xl:px-20">
          {/* Left: Video */}
          <div className="w-full md:w-1/4">
            <div className="relative w-full overflow-hidden rounded-[30px] md:rounded-[40px] flex justify-center">
              <video
                controls
                playsInline
                className="w-auto max-w-full max-h-[500px] object-contain rounded-[30px] md:rounded-[40px] mx-auto border-[3px] border-white"
                poster="/thmbnail.jpeg"
              >
                <source src="/testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

          {/* Right: Text */}
          <div className="w-full md:w-3/4">
            <h3 className="text-[14px] font-poppins font-normal text-left text-black">
              <span className="text-[#ED1846]">#Happy</span> Clients
            </h3>
            <h4 className="mt-4 text-xl md:text-2xl font-viaoda font-semibold leading-relaxed text-gray-700">
              Trusted by Homeowners Across               <span className="text-[#ED1846]">SOUTH INDIA</span>
            </h4>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 w-[60%]">
              From concept to completion, our clients count on us for quality, transparency, and timely delivery. Hear directly from those who made their dream spaces a reality.
            </p>
            {/* Add more text or a CTA button here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;