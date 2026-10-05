import type { Metadata } from "next";
import { Archivo, Raleway } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Firnas.tech - Where Ideas Find Wings",
  description:
    "Firnas.Tech delivers innovative software solutions, web development, and digital services to help businesses grow and thrive in the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${raleway.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#050b08] text-white antialiased selection:bg-[#00BD5F] selection:text-black">
        {children}
      </body>
    </html>
  );
}
