import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: {
    default: `${site.name} | Textile Manufacturer & Exporter Since ${site.founded}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} has manufactured and exported polo shirts, T-shirts, denim, shirts, hoodies, jackets and home textiles from ${site.address.city}, ${site.address.country} since ${site.founded}.`,
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
