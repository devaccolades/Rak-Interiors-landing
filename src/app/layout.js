import { Viaoda_Libre, Poppins } from "next/font/google";
import "./globals.css";
import whatsapp from "../../public/whatsapp_2504957 1.svg";
import phone from "../../public/square.png";
import Image from "next/image";

const viaodaLibre = Viaoda_Libre({
  variable: "--font-viaoda-libre",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Rak Interiors",
  description: "Rak Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${viaodaLibre.variable} ${poppins.variable} antialiased`}
      >
        {children}

        <a
          href="https://wa.me/917511167999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-14 right-5 md:right-10 z-50 "
          aria-label="Chat on WhatsApp"
        >
          <Image
            src={whatsapp}
            alt="whatsapp"
            className="w-[40px] md:w-[60px] h-auto"
          />
        </a>
        <a
          href="tel:+917511167999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-32 right-5 md:right-10 z-50"
          aria-label="Call Us"
        >
          <Image
            src={phone}
            alt="phone icon"
            className="w-[40px] md:w-[60px] h-auto"
          />
        </a>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         suppressHydrationWarning
//         className={`${viaodaLibre.variable} ${poppins.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
