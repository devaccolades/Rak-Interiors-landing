"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../public/premium/0e1c6ce49492723c84e5cf6ad717c0fcd6c9011e-min-optimized.webp";
import img2 from "../../../public/premium/2ca551cbf98caffff7fad8a7cebf6da7083555f8-min-optimized.webp";
import img3 from "../../../public/premium/05da65c8e49b1a89897f13bac95b50fa05422a33-min-optimized.webp";
import img4 from "../../../public/premium/9e48c6da286e47501374b1bad8b5888a787ed491-min.webp";
import img5 from "../../../public/premium/21c9da060677311905f3bdc1ac8f9f36712c5cf9-min.webp";
import img6 from "../../../public/premium/071d67230b1ae511d42c66cebcbacdba43060792-min.webp";
import img7 from "../../../public/premium/492b3a9ad76208f771e18ac2d37d3fe5beb6e6e7-min-optimized.webp";
import img8 from "../../../public/premium/58997299caa96fa1a29cdb7d847dd5f6bee6d1aa-min.webp";
import img9 from "../../../public/premium/c33c9595e5b6c77f932e882f2708101fccdde100-min-optimized.webp";
import Image from "next/image";

const Premium = () => {
  const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="py-[40px]">
      <h4 className="containers text-[16px] font-poppins">
        <span className="text-[#ED1846] ">#Our Premium</span> Projects
      </h4>
      <div className="pl-[5%] lg:pl-[10%] mt-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, // important: keeps autoplay running
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 10 },
            1024: { slidesPerView: 2.5 },
            1440: { slidesPerView: 2.5 },
            1700: { slidesPerView: 3.5 },
          }}
          className=""
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" relative w-full h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] overflow-hidden rounded-[30px]">
                <Image
                  src={item}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover rounded-[30px]"
                  quality={100}
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Premium;
