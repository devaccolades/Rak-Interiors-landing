import Image from "next/image";
import React from "react";
import logo from "../../../public/logo/2c851e25ba22c1716cf66563d4157775812054ee.png";

const Navbar = () => {
  return (
    <nav className=" containers flex justify-between items-center py-[20px] md:py-[30px] lg:py-[40px]">
      <Image
        src={logo}
        alt="logo"
        className="w-[75px] lg:w-[100px] h-full object-contain"
      />
      <a href="#contact">
        <button className="bg-[#ED1846] text-white text-[13px] lg:text-[14px] leading-[100%] font-poppins font-medium p-[10px] rounded-[8px] cursor-pointer">
          Contact Us
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
