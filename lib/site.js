// Central company info. Edit here and every page updates.
export const site = {
  name: "Samiullah Enterprises",
  short: "Samiullah",
  founded: 1998,
  tagline: "Woven with trust since 1998",
  address: {
    line1: "P#5 Sargodha Rd, Usman Colony Noorpur",
    city: "Faisalabad",
    region: "Punjab",
    country: "Pakistan",
  },
  phone: "+92 321 8554646",
  email: "samiullahfsd4646@gmail.com",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM (PKT)",
};

export const yearsInBusiness = () => new Date().getFullYear() - site.founded;

export const fullAddress = () =>
  [site.address.line1, site.address.city, site.address.region, site.address.country].join(", ");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/contact", label: "Contact" },
];

// Product photos live in public/images/products/.
export const products = [
  {
    slug: "bed-sheets",
    name: "Bed Sheets & Bedding",
    image: "/images/products/bed-sheets.png",
    image2: "/images/products/bed-sheets-folded.png",
    blurb: "Flat sheets, fitted sheets, duvet covers and pillow cases in percale, sateen and microfibre.",
    items: ["Flat & fitted sheets", "Duvet covers", "Pillow cases", "Hotel bedding", "Embroidered sets"],
  },
  {
    slug: "towels",
    name: "Towels",
    image: "/images/products/towels.png",
    blurb: "Soft, absorbent terry towels from 350 to 700 GSM in ring-spun and zero-twist cotton.",
    items: ["Bath towels", "Hand & face towels", "Beach towels", "Bathrobes", "Bath mats"],
  },
  {
    slug: "pillows",
    name: "Pillows & Cushions",
    image: "/images/products/pillows.png",
    image2: "/images/products/pillow-white.png",
    blurb: "Fibre-filled bed pillows and decorative cushions in knit, velvet, quilted and tufted finishes.",
    items: ["Bed pillows", "Cushion covers", "Filled cushions", "Pillow protectors", "Lumbar pillows"],
  },
  {
    slug: "hoodies",
    name: "Hoodies & Sweatshirts",
    image: "/images/products/hoodies.png",
    image2: "/images/products/hoodie-green.png",
    blurb: "Fleece and French terry hoodies and sweatshirts in any colour, private label ready.",
    items: ["Pullover hoodies", "Zip hoodies", "Sweatshirts", "Joggers", "Tracksuits"],
  },
  {
    slug: "jackets",
    name: "Jackets & Outerwear",
    image: "/images/products/jackets.png",
    image2: "/images/products/jacket-bomber.png",
    blurb: "Bomber, Harrington, hooded and puffer jackets built to your design and size spec.",
    items: ["Bomber jackets", "Harrington jackets", "Hooded jackets", "Puffer jackets", "Windbreakers"],
  },
];

// SAMPLE CONTENT: replace milestones and certifications with the real company history.
export const milestones = [
  { year: "1998", text: "Samiullah Enterprises founded as a fabric trading house in Faisalabad." },
  { year: "2004", text: "First weaving unit installed with shuttle-less looms." },
  { year: "2010", text: "Expanded into home textiles and began direct exports." },
  { year: "2016", text: "Added stitching, finishing and in-house quality lab." },
  { year: "2021", text: "Solar power and water recycling introduced across units." },
  { year: "Today", text: "Serving buyers across Europe, the Americas, the Middle East and Asia." },
];

export const processSteps = [
  { title: "Spinning", text: "Selected cotton is opened, carded, combed and spun into consistent yarn." },
  { title: "Weaving", text: "Air-jet and rapier looms produce greige fabric in many constructions." },
  { title: "Processing", text: "Bleaching, dyeing and printing with tight shade control." },
  { title: "Stitching", text: "Cut-and-sew lines turn fabric into finished made-ups." },
  { title: "Quality Check", text: "Every lot is tested in our lab and inspected to AQL standards." },
  { title: "Packing & Shipping", text: "Custom packing and on-time dispatch from Karachi and Lahore ports." },
];

export const certifications = ["OEKO-TEX® Standard 100", "GOTS", "BCI Cotton", "ISO 9001", "SEDEX / SMETA", "WRAP"];
