import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Checkit Movies App",
  description: "A movie listing app that displays movies and allow search your favorite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${poppins.className} bg-black`}>
        <Navbar />
        <div className="max-w-7xl! mx-auto! px-4! ">
          {children}
        </div>
      </body>
    </html>
  );
}
