import Image from "next/image";
import React from "react";
import cover from "../../../public/455df9bf1de508f13a412df303e54b6f181f21be-min.jpg";
import shade from "../../../public/Frame 2147223264 (2).svg";
const WorkCycle = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src={cover}
          alt="cover"
          className="w-full h-[220px] md:h-[450px] xl:h-[600px] 2xl:h-[800px] object-center object-cover"
        />
        <Image
          src={shade}
          alt="white-shadow"
          className="absolute -bottom-1 w-full"
        />
      </div>
      <div className="h-[500px] bg-[#F2F1EC]"></div>
    </section>
  );
};

export default WorkCycle;
