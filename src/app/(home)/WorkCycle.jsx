import Image from "next/image";
import React from "react";
import cover from "../../../public/455df9bf1de508f13a412df303e54b6f181f21be-min.jpg";
import shade from "../../../public/Frame 2147223264 (2).svg";
import direction from "../../../public/Button Icon.svg";
import direction90 from "../../../public/Button Icon (1).svg";
import img1 from "../../../public/icons/budget_7909268 1.svg";
import img2 from "../../../public/icons/customer-review_11655794 1.svg";
import img3 from "../../../public/icons/interior-design_12943067 1.svg";
import img4 from "../../../public/icons/autoshop_17228441 1.svg";
import img5 from "../../../public/icons/clock_1571669 1.svg";
import img6 from "../../../public/icons/construction-worker_4414775 1.svg";

const processSteps = [
  {
    title: "UNDERSTANDING CLIENT NEEDS",
    description:
      "Our sales team consists of attentive professionals who carefully listen to and analyze each client's specific requirements to ensure a tailored solution.",
    image: img2,
  },
  {
    title: "ROUGH ESTIMATION",
    description:
      "A rough estimate of the proposed work is shared for the client’s review. Upon confirmation, a booking amount is collected to initiate the next steps.",
    image: img1,
  },
  {
    title: "Design & Quotation",
    description:
      "Once the design is finalized, our team takes precise measurements and creates a detailed 3D visualization. After approval, the final quotation is shared, and upon confirmation, site details are revalidated to begin production at our factory.",
    image: img3,
  },
  {
    title: "ON SITE WORK",
    description:
      "Once the products are ready, we collect the remaining 50% payment and deploy our skilled team and supervisors to begin on-site implementation.",
    image: img6,
  },
  {
    title: "KEY HANDOVER",
    description:
      "Within 45 working days, we hand over a fully completed home, crafted with care and precision, where every detail reflects perfection.",
    image: img4,
  },
  {
    title: "LIFE TIME SERVICE",
    description:
      "Our relationship doesn't end with project completion. We offer lifetime service support along with two complimentary services in the first year.",
    image: img5,
  },
];

const WorkCycle = () => {
  return (
    <main>
      <section className="relative">
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
      </section>
      <section className="bg-[#F2F1EC]">
        <div className="containers ">
          <div className="flex justify-center gap-3 py-3">
            <span
              className="bg-white py-[5px] px-[10px] text-[#ED1846] text-[13px] md:text-[16px] 
            rounded-[10px]"
            >
              #All over South India{" "}
            </span>
            <span
              className="bg-white py-[5px] px-[10px] text-[#ED1846] text-[13px] md:text-[16px] 
            rounded-[10px]"
            >
              #Customized Packages{" "}
            </span>
          </div>
          <h4
            className=" text-[36px] md:text-[48px] xl:text-[64px] uppercase leading-[100%] font-viaoda text-black text-center 
          py-2 md:py-[16px]"
          >
            <span className="text-[#ED1846]">our</span>Work Cycle
          </h4>
          <p className="font-poppins font-normal text-[13px] md:text-[16px] text-black text-center">
            Our workflow is very well defined and leaves no grey areas. From the
            very moment a client approaches RAK, a dedicated staff will assist
            them throughout the process. From discussing your requirements to
            designing and execution, we walk together with our clients to ensure
            satisfaction and the best client experience when designing their
            home interiors.
          </p>
          <div className="hidden md:grid grid-cols-3 gap-y-5 py-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex">
                <div className="relative bg-white p-5 rounded-[20px] md:space-y-3  shadow-md">
                  <div className="flex gap-1 items-center ">
                    <Image
                      src={step.image}
                      alt="icon"
                      className="md:w-[40px] lg:w-[60px] h-auto object-contain"
                    />
                    <h3 className="md:text-[16px] xl:text-[24px] leading-[120%] font-poppins tracking-tight font-normal uppercase mb-2">
                      <span className="text-black">
                        {step.title.split(" ").slice(0, -1).join(" ")}
                      </span>{" "}
                      <span className="text-[#ED1846]">
                        {step.title.split(" ").slice(-1)}
                      </span>
                    </h3>
                  </div>
                  <p className="text-black text-[14px] leading-[120%]">
                    {step.description}
                  </p>
                  {index == 2 && (
                    <Image
                      src={direction}
                      alt="direction"
                      className="absolute -bottom-2.5 left-1/2 rotate-90 transform -translate-x-1/2 translate-y-1/2"
                    />
                  )}
                </div>
                {index < processSteps.length - 1 && index !== 2 && (
                  <Image
                    src={direction}
                    alt="direction"
                    className={`${
                      index === 3 || index === 4 ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1  md:hidden py-5">
            {processSteps.map((step, index) => (
              <div key={index} className=" flex flex-col items-center">
                <div className="  p-5 rounded-[20px] shadow-md space-y-3 bg-white">
                  {/* Icon and Title */}
                  <div className="flex gap-2 items-center">
                    <Image
                      src={step.image}
                      alt="icon"
                      className="w-[40px] h-auto object-contain"
                    />
                    <h3 className="text-[18px] leading-[120%] font-poppins tracking-tight font-normal uppercase">
                      <span className="text-black">
                        {step.title.split(" ").slice(0, -1).join(" ")}
                      </span>{" "}
                      <span className="text-[#ED1846]">
                        {step.title.split(" ").slice(-1)}
                      </span>
                    </h3>
                  </div>

                  <p className="text-black text-[14px] leading-[156%]">
                    {step.description}
                  </p>
                </div>
                {index !== processSteps.length - 1 && (
                  <Image
                    src={direction90}
                    alt="direction"
                    className=" w-[30px] h-auto "
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkCycle;
