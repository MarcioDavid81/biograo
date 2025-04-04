import { Metadata } from "next";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import MarqueeAviso from "./components/layout/Marquee";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "BioGrão Comércio Agrícola",
  description:
    "Comércio de soja, trigo e milho para produtores rurais de Jari/RS e região",
  icons: [
    {
      url: "../images/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen">
        <MarqueeAviso />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
