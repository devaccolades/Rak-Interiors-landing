"use client";
import React, { useState } from "react";
import Image from "next/image";
import cover from "../../../public/b65609186001bca5f91c23472a1de2b9a95b2584-min.jpg";
import shade from "../../../public/Frame 2147223264 (2).svg";
import thumbnailImg from "../../../public/5b9d505582939dacf7dee937c4b9a3fadf84dcff-min.png";

const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="bg-[#F2F1EC]">
      <section className="relative">
        <Image
          src={cover}
          alt="cover"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1200px] object-top object-cover"
        />
        <Image
          src={shade}
          alt="white-shadow"
          className="absolute -bottom-1 w-full"
        />
      </section>
      <section className="">
        <h3 className="text-[14px] font-poppins font-normal text-center text-black -mt-3 py-4">
          <span className="text-[#ED1846]">#Happy</span> Clients
        </h3>
        <div className="bg-white rounded-[40px] p-[10px] w-[800px] h-auto mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-[30px]">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full"
              >
                <Image
                  src={thumbnailImg}
                  alt="Video thumbnail"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ED1846] text-white px-4 py-2 rounded-full text-sm font-poppins">
                    ▶ Play
                  </div>
                </div>
              </button>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover rounded-[30px]"
                preload="auto"
                playsInline
                src="/WhatsApp_Video_2025-06-25_at_11.30.07_AM_1_7FBMQAN.mp4"
              ></video>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
