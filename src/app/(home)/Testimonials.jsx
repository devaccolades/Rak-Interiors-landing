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
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1000px] object-top object-cover"
        />
        <Image
          src={shade}
          alt="white-shadow"
          className="absolute -bottom-1 w-full"
        />
      </section>
      <section className="pb-10 md:pb-[60px]  w-full">
        <h3 className="text-[14px] font-poppins font-normal text-center text-black -mt-3 py-4">
          <span className="text-[#ED1846]">#Happy</span> Clients
        </h3>
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-[5px] md:p-[10px] w-[95%] md:w-[70%] xl:w-[60%] h-auto mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-[25px] md:rounded-[30px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-[30px]"
              src="https://www.youtube.com/embed/KNrU6-EuhTY?rel=0&autoplay=0&modestbranding=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
