import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: {
    default: `${site.name} | Textile Manufacturer & Exporter Since ${site.founded}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} has manufactured and exported bed sheets, towels, pillows, hoodies and jackets from ${site.address.city}, ${site.address.country} since ${site.founded}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
