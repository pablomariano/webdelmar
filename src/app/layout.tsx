import type { Metadata } from "next";
import { Sansita_Swashed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Nacional de Mujeres del Mar",
  description:
    "Red Nacional de Mujeres de la Pesca Artesanal, el Borde Costero y las Aguas Continentales de Chile. Despensa del Mar — emprendedoras del mar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sansitaSwashed.variable}>
      <body className="min-h-screen flex flex-col">
        <div className="fixed inset-0 wave-bg -z-10" />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
