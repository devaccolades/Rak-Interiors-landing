import React from "react";
import Image from "next/image";
import elipseLeft from "../../../public/Ellipse-5.svg";
import elipseRight from "../../../public/Ellipse-6.svg";

const WhyChoose = () => {
  return (
    <div className=" relative  bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-start py-10 md:py-16 xl:py-20 ">
      <div className="containers">
        <h2 className="font-viaoda font-extralight w-full text-left text-[32px] lg:text-[48px] leading-[32px] lg:leading-[48px] tracking-wide mb-8">
          WHY CHOOSE <span className="text-red-500">RAK</span> <br />
          INTERIORS - BANGALORE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-8 mb-6 w-full">
          <div className="bg-zinc-800 rounded-2xl p-4 xl:p-6 text-left space-y-4">
            <h3 className="font-poppins text-[24px] xl:text-[36px] font-normal leading-[24px] xl:leading-[36px]">
              Committed On-
              <br />
              Time <span className="text-red-500">Delivery</span>
            </h3>
            <p className="font-poppins text-[14px] xl:text-[16px] leading-tight text-zinc-300">
              We don’t just plan fast — we deliver fast. Timelines you can
              trust.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-2xl p-4 xl:p-6 text-left space-y-4">
            <h3 className="font-poppins text-[24px] xl:text-[36px] font-normal leading-[24px] xl:leading-[36px]">
              100% In-House <br /> Execution
            </h3>
            <p className="font-poppins text-[14px] xl:text-[16px] leading-tight text-zinc-300">
              No third-party delays. Carpentry, electrical, and painting all
              under one roof.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-2xl p-4 xl:p-6 text-left space-y-4">
            <h3 className="font-poppins text-[24px] xl:text-[36px] font-normal leading-[24px] xl:leading-[36px]">
              14 Years in <span className="text-red-500">Bangalore</span>
            </h3>
            <p className="font-poppins text-[14px] xl:text-[16px] leading-tight text-zinc-300">
              South India’s most trusted interior brand is now available in your
              city.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <div className="absolute inset-0 border-t border-dashed border-gray-500"></div>
          <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-black via-transparent to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 xl:gap-20 w-full items-center">
          {/* Map Div */}
          <div className="w-full md:w-1/2 h-[270px] xl:h-[390px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40227.01240348991!2d77.651326!3d12.906673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f689a013d7%3A0x668a86701a9453a9!2sRAK%20Interiors!5e1!3m2!1sen!2sus!4v1751350580313!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full h-full"
            ></iframe>
          </div>

          {/* Text Div with same height as map */}
          <div className="w-full md:w-1/2 max-h-[390px] flex flex-col justify-between space-y-6 xl:space-y-8">
            <h3 className="font-poppins text-[24px] xl:text-[36px] leading-[24px] xl:leading-[36px] font-medium">
              Visit Our <span className="text-red-500">Bangalore</span> <br />
              Experience Centre
            </h3>
            <div className="space-y-2">
              <p className="font-poppins font-semibold text-[18px] xl:text-[20px] leading-[20px] text-white">
                RAK Interiors – Bangalore Studio
              </p>
              <p className="font-poppins text-[14px] xl:text-[16px] leading-tight text-zinc-300">
                1692/B, 27 Main, 25th B Cross Rd, PWD <br />
                Quarters, Sector 2, HSR Layout,
                <br /> Bengaluru, Karnataka 560102, India
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-red-500 font-poppins font-semibold text-[18px] xl:text-[20px] leading-[20px]">
                Call Us
              </p>
              <p className="font-poppins text-[24px] xl:text-[36px] leading-[36px] font-semibold">
                +91 7511167999
              </p>
            </div>
            <div className="text-white font-poppins font-medium md:text-[16px] xl:text-[20px]">
              <p>
                Find us in :{" "}
                <span className="text-[#ED1846] font-medium">
                  Kochi <span className="text-white">|</span> Calicut{" "}
                  <span className="text-white">|</span> Trivandrum{" "}
                  <span className="text-white">|</span> Bangalore
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
