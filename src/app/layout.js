import Providers from "@/providers/providers";
import "./globals.css";
import { Rubik, Open_Sans, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const openSans = Open_Sans({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const inter = Inter({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Kicks Admin Panel",
  description: "Kicks eCommerce admin panal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} ${inter.variable}`}
      >
        <Toaster
          toastOptions={{
            style: {
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "bold",
              fontSize: "16px",
            },
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
