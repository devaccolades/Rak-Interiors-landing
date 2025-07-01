// import React from "react";

// const WhyChoose = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-center py-12 px-4 md:px-12 lg:px-32">
//       <h2 className="font-viaoda  text-start text-[32px] lg:text-[48px] leading-[32px] lg:leading-[48px] font-light tracking-wide mb-8">
//         WHY CHOOSE <span className="text-red-500">RAK</span> <br className="" />
//         INTERIORS – BANGALORE
//       </h2>

//       <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  mb-12 w-full max-w-5xl">
//         <div className="bg-zinc-800 rounded-2xl p-6 text-center space-y-2">
//           <h3 className="font-poppins text-[24px] lg:text-[36px] leading-[24px] lg:leading-[36px] font-semibold">
//             Committed On-<br />Time <span className="text-red-500">Delivery</span>
//           </h3>
//           <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%]   text-zinc-300">
//             We don’t just plan fast — we deliver fast. Timelines you can trust.
//           </p>
//         </div>
//         <div className="bg-zinc-800 rounded-2xl p-6 text-center space-y-2">
//           <h3 className="font-poppins text-[24px] lg:text-[36px] leading-[24px] lg:leading-[36px]  font-semibold">
//             100% In-House <br /> Execution
//           </h3>
//           <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
//             No third-party delays. Carpentry, electrical, and painting all under one roof.
//           </p>
//         </div>
//         <div className="bg-zinc-800 rounded-2xl p-6 text-center space-y-2">
//           <h3 className="font-poppins text-[24px] lg:text-[36px] leading-[24px] lg:leading-[36px]  font-semibold">
//             14 Years in <span className="text-red-500">Bangalore</span>
//           </h3>
//           <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
//             South India’s most trusted interior brand is now available in your city.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-center">
//         <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40227.01240348991!2d77.651326!3d12.906673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f689a013d7%3A0x668a86701a9453a9!2sRAK%20Interiors!5e1!3m2!1sen!2sus!4v1751350580313!5m2!1sen!2sus"
//             width="100%"
//             height="600"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="rounded-2xl w-full h-full"
//           ></iframe>
//         </div>
//         <div className="w-full md:w-1/2 space-y-4">
//           <h3 className=" font-poppins text-2xl font-medium">
//             Visit Our <span className="text-red-500">Bangalore</span> Experience Centre
//           </h3>
//           <p className="font-poppins text-sm text-zinc-300">
//             <span className="font-semibold">RAK Interiors – Bangalore Studio</span><br />
//             1692/B, 27 Main, 25th B Cross Rd, PWD Quarters, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, India
//           </p>
//           <div className="flex items-center space-x-2">
//             <span className="text-red-500">📞</span>
//             <span className="font-poppins text-lg font-semibold">+91 9544512345</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;


import React from "react";

const WhyChoose = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-start py-12 px-4 md:px-12 lg:px-32">
      <h2 className="font-viaoda w-full text-left text-[32px] lg:text-[48px] leading-[32px] lg:leading-[48px] font-light tracking-wide mb-8">
        WHY CHOOSE <span className="text-red-500">RAK</span> <br />
        INTERIORS – BANGALORE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-6 w-full max-w-5xl">
        <div className="bg-zinc-800 rounded-2xl p-8 text-left space-y-2">
          <h3 className="font-poppins text-[24px] lg:text-[28px] font-semibold">
            Committed On-<br />Time <span className="text-red-500">Delivery</span>
          </h3>
          <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
            We don’t just plan fast — we deliver fast. Timelines you can trust.
          </p>
        </div>
        <div className="bg-zinc-800 rounded-2xl p-8 text-left space-y-2">
          <h3 className="font-poppins text-[24px] lg:text-[28px] font-semibold">
            100% In-House <br /> Execution
          </h3>
          <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
            No third-party delays. Carpentry, electrical, and painting all under one roof.
          </p>
        </div>
        <div className="bg-zinc-800 rounded-2xl p-8 text-left space-y-2">
          <h3 className="font-poppins text-[24px] lg:text-[28px] font-semibold">
            14 Years in <span className="text-red-500">Bangalore</span>
          </h3>
          <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
            South India’s most trusted interior brand is now available in your city.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl border-t border-gray-500 mb-12"></div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl items-start">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40227.01240348991!2d77.651326!3d12.906673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f689a013d7%3A0x668a86701a9453a9!2sRAK%20Interiors!5e1!3m2!1sen!2sus!4v1751350580313!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full h-[300px]"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h3 className="font-poppins text-2xl font-medium">
            Visit Our <span className="text-red-500">Bangalore</span> <br /> Experience Centre
          </h3>
          <div className="space-y-2">
          <p className="font-poppins font-semibold text-[14px] lg:text-[16px] leading-[100%] text-white">
            RAK Interiors – Bangalore Studio
            
          </p>
          <p className="font-poppins text-[14px] lg:text-[16px] leading-[100%] text-zinc-300">
            
            1692/B, 27 Main, 25th B Cross Rd, PWD <br /> Quarters, Sector 2, HSR Layout,<br /> Bengaluru, Karnataka 560102, India
          </p>
          </div>
          <div className=" items-center space-x-2">
            <p className="text-red-500">Call Us</p>
            <p className="font-poppins text-lg font-semibold">+91 9544512345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;