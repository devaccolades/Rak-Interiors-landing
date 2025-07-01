import { Viaoda_Libre, Poppins } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
