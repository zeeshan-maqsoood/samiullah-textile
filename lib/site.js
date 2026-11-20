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
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Product categories. `key` is used for filters on the products page.
export const categories = [
  { key: "knits", label: "Knitted Garments" },
  { key: "woven", label: "Woven & Denim" },
  { key: "home", label: "Home Textiles" },
];

const P = "/images/products";

// Product catalogue. Photos live in public/images/products/.
// Each product gets its own page at /products/<slug>.
export const products = [
  {
    slug: "polo-shirts",
    name: "Polo Shirts",
    category: "knits",
    image: `${P}/polo-navy.jpg`,
    gallery: [`${P}/polo-navy.jpg`, `${P}/polo-model.jpg`],
    blurb: "Pique and jersey polos with flat-knit collars, ready for corporate, retail and uniform programmes.",
    description:
      "Our polo shirts are knitted, dyed and stitched in-house. We produce classic pique, honeycomb and jersey polos with flat-knit or self-fabric collars, custom tipping, embroidery and printing. Every lot is checked for shrinkage, colour fastness and pilling before packing.",
    items: ["Classic pique polos", "Performance / dri-fit polos", "Tipped collar polos", "Long-sleeve polos", "Corporate & uniform polos", "Kids' polos"],
    specs: {
      Fabric: "100% cotton pique, CVC, poly-cotton, polyester dri-fit",
      Weight: "180 – 240 GSM",
      Sizes: "XS – 5XL, kids' sizes",
      Branding: "Embroidery, screen print, woven labels, heat transfer",
      MOQ: "500 pcs per style / colour",
      "Lead time": "35 – 50 days after sample approval",
    },
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    category: "knits",
    image: `${P}/tshirts-rack.jpg`,
    gallery: [`${P}/tshirts-rack.jpg`, `${P}/tshirt-white.jpg`, `${P}/tshirt-black.jpg`, `${P}/tshirts-flatlay.jpg`],
    blurb: "Basic, fashion and promotional tees in combed cotton, slub, organic and blended jersey.",
    description:
      "From 140 GSM promotional tees to 240 GSM heavyweight streetwear blanks, we knit, dye and sew T-shirts in any colour and fit. Garment-dye, enzyme and silicone washes give a premium hand-feel, and our print partners handle screen, DTG and puff prints.",
    items: ["Crew neck tees", "V-neck tees", "Oversized / drop-shoulder", "Long-sleeve tees", "Organic cotton tees", "Promotional tees"],
    specs: {
      Fabric: "Combed cotton, organic cotton, slub, CVC, tri-blend",
      Weight: "140 – 260 GSM",
      Sizes: "XS – 5XL, kids' sizes",
      Finishes: "Garment dye, enzyme wash, silicone wash, acid wash",
      MOQ: "500 pcs per style / colour",
      "Lead time": "30 – 45 days after sample approval",
    },
  },
  {
    slug: "hoodies",
    name: "Hoodies & Sweatshirts",
    category: "knits",
    image: "/images/products/hoodies.png",
    gallery: ["/images/products/hoodies.png", "/images/products/hoodie-green.png", `${P}/sweatshirt-white.jpg`],
    blurb: "Fleece and French terry hoodies and sweatshirts in any colour, private label ready.",
    description:
      "Brushed fleece and loop-back French terry hoodies, crew sweatshirts and joggers built to your size spec. We offer heavyweight 400 GSM+ fabrics, rib trims dyed to match, metal eyelets, custom drawcords and private labels.",
    items: ["Pullover hoodies", "Zip-through hoodies", "Crew sweatshirts", "Joggers", "Tracksuits", "Heavyweight streetwear"],
    specs: {
      Fabric: "Cotton fleece, CVC fleece, French terry, polar fleece",
      Weight: "280 – 450 GSM",
      Sizes: "XS – 5XL",
      Branding: "Embroidery, puff print, screen print, appliqué",
      MOQ: "300 pcs per style / colour",
      "Lead time": "40 – 55 days after sample approval",
    },
  },
  {
    slug: "denim",
    name: "Denim Jeans",
    category: "woven",
    image: `${P}/denim.jpg`,
    gallery: [`${P}/denim.jpg`, `${P}/denim-stack.jpg`, "/images/factory/denim-stitching.jpg"],
    blurb: "Five-pocket jeans, denim jackets and shorts with stone, enzyme and eco-friendly laser washes.",
    description:
      "Our denim line covers rigid, comfort-stretch and super-stretch fabrics from 8 to 14.5 oz. Garments are cut on automated tables, sewn on dedicated denim lines and washed with low-water ozone and laser finishing for consistent shade and abrasion.",
    items: ["Slim & skinny jeans", "Straight & relaxed fit", "Denim jackets", "Denim shorts", "Kids' denim", "Workwear denim"],
    specs: {
      Fabric: "Rigid, comfort-stretch and power-stretch denim",
      Weight: "8 – 14.5 oz",
      Sizes: "26 – 44 waist, custom inseams",
      Washes: "Stone, enzyme, bleach, laser, ozone, tint",
      MOQ: "600 pcs per style / wash",
      "Lead time": "45 – 60 days after sample approval",
    },
  },
  {
    slug: "shirts",
    name: "Woven Shirts",
    category: "woven",
    image: `${P}/shirt-check.jpg`,
    gallery: [`${P}/shirt-check.jpg`, `${P}/shirts-folded.jpg`],
    blurb: "Formal and casual shirts in poplin, oxford, twill, flannel and yarn-dyed checks.",
    description:
      "Casual and formal shirts with precise collar and cuff construction. We work with yarn-dyed checks and stripes, solid poplins, oxfords and brushed flannels, with options for fused or soft collars, pattern matching and custom buttons.",
    items: ["Formal dress shirts", "Oxford button-downs", "Check & flannel shirts", "Linen-blend shirts", "Short-sleeve shirts", "Uniform shirts"],
    specs: {
      Fabric: "Poplin, oxford, twill, flannel, chambray, linen blends",
      Count: "40s – 100s, yarn-dyed or piece-dyed",
      Sizes: "S – 4XL, collar 14\" – 19\"",
      Details: "Pattern matching, custom buttons, fused / soft collars",
      MOQ: "500 pcs per style / colour",
      "Lead time": "40 – 55 days after sample approval",
    },
  },
  {
    slug: "jackets",
    name: "Jackets & Outerwear",
    category: "woven",
    image: "/images/products/jackets.png",
    gallery: ["/images/products/jackets.png", "/images/products/jacket-bomber.png"],
    blurb: "Bomber, Harrington, hooded and puffer jackets built to your design and size spec.",
    description:
      "Lightweight and insulated outerwear made to your tech pack. We source shell fabrics, linings, zips and trims to specification and produce bombers, Harringtons, coaches jackets, puffers and windbreakers.",
    items: ["Bomber jackets", "Harrington jackets", "Hooded jackets", "Puffer jackets", "Windbreakers", "Coaches jackets"],
    specs: {
      Shell: "Nylon, polyester, cotton twill, softshell",
      Filling: "Polyfill, recycled fibre, quilted wadding",
      Sizes: "XS – 4XL",
      Trims: "YKK / SBS zips, custom snaps, embroidered badges",
      MOQ: "300 pcs per style / colour",
      "Lead time": "50 – 65 days after sample approval",
    },
  },
  {
    slug: "bed-sheets",
    name: "Bed Sheets & Bedding",
    category: "home",
    image: "/images/products/bed-sheets.png",
    gallery: ["/images/products/bed-sheets.png", "/images/products/bed-sheets-folded.png"],
    blurb: "Flat sheets, fitted sheets, duvet covers and pillow cases in percale, sateen and microfibre.",
    description:
      "Bed linen woven on our own looms and processed in-house. We supply hotels, retailers and importers with percale and sateen weaves from 144 to 600 thread count, plain, printed, dobby and embroidered.",
    items: ["Flat & fitted sheets", "Duvet covers", "Pillow cases", "Hotel bedding", "Embroidered sets", "Kids' bedding"],
    specs: {
      Fabric: "Cotton percale, sateen, CVC, microfibre",
      "Thread count": "144 – 600 TC",
      Sizes: "Single to super-king, EU / US / UK sizing",
      Finishes: "Dyed, printed, dobby, embroidered",
      MOQ: "1,000 sets per design",
      "Lead time": "45 – 60 days after sample approval",
    },
  },
  {
    slug: "towels",
    name: "Towels",
    category: "home",
    image: "/images/products/towels.png",
    gallery: ["/images/products/towels.png"],
    blurb: "Soft, absorbent terry towels from 350 to 700 GSM in ring-spun and zero-twist cotton.",
    description:
      "Terry towels for retail, hospitality and promotional use. Choose ring-spun, combed or zero-twist yarns, dobby borders, jacquard logos and velour finishes.",
    items: ["Bath towels", "Hand & face towels", "Beach towels", "Bathrobes", "Bath mats", "Hotel towels"],
    specs: {
      Fabric: "100% cotton terry, ring-spun / zero-twist",
      Weight: "350 – 700 GSM",
      Sizes: "Face 30x30 cm to bath sheet 100x180 cm",
      Branding: "Jacquard logo, dobby border, embroidery",
      MOQ: "1,000 pcs per design",
      "Lead time": "40 – 55 days after sample approval",
    },
  },
  {
    slug: "pillows",
    name: "Pillows & Cushions",
    category: "home",
    image: "/images/products/pillows.png",
    gallery: ["/images/products/pillows.png", "/images/products/pillow-white.png"],
    blurb: "Fibre-filled bed pillows and decorative cushions in knit, velvet, quilted and tufted finishes.",
    description:
      "Filled products made on our quilting and filling lines: hollow-fibre bed pillows, cushions, protectors and decorative covers in velvet, knit, quilted and tufted styles.",
    items: ["Bed pillows", "Cushion covers", "Filled cushions", "Pillow protectors", "Lumbar pillows", "Quilted covers"],
    specs: {
      Shell: "Cotton, microfibre, velvet, knit",
      Filling: "Hollow-conjugate fibre, microfibre, recycled fibre",
      Sizes: "Standard, queen, king, custom",
      Packing: "Vacuum packed, PVC bag, printed card",
      MOQ: "1,000 pcs per design",
      "Lead time": "35 – 50 days after sample approval",
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const categoryLabel = (key) => categories.find((c) => c.key === key)?.label ?? "";

const F = "/images/factory";

// Divisions shown as round tiles on the home page.
export const divisions = [
  { title: "Spinning", image: `${F}/spinning.jpg` },
  { title: "Weaving", image: `${F}/weaving-hall.jpg` },
  { title: "Knitting", image: `${F}/knitting.jpg` },
  { title: "Dyeing & Processing", image: `${F}/processing.jpg` },
  { title: "Knitted Garments", image: `${P}/tshirts-rack.jpg` },
  { title: "Denim & Woven", image: `${P}/denim-stack.jpg` },
  { title: "Home Textile", image: "/images/products/bed-sheets-folded.png" },
  { title: "Embroidery", image: `${F}/embroidery.jpg` },
];

// Factory photos used on the gallery and manufacturing pages.
// `group` drives the filter buttons on the gallery page.
export const factoryPhotos = [
  { src: `${F}/spinning.jpg`, title: "Ring Spinning", group: "Spinning & Yarn" },
  { src: `${F}/yarn-cones.jpg`, title: "Yarn Creel", group: "Spinning & Yarn" },
  { src: `${F}/yarn.jpg`, title: "Dyed Yarn Cones", group: "Spinning & Yarn" },
  { src: `${F}/threads.jpg`, title: "Thread Store", group: "Spinning & Yarn" },
  { src: `${F}/weaving-hall.jpg`, title: "Weaving Hall", group: "Weaving & Knitting" },
  { src: `${F}/looms-rows.jpg`, title: "Air-Jet Looms", group: "Weaving & Knitting" },
  { src: `${F}/loom-fabric.jpg`, title: "Greige Fabric", group: "Weaving & Knitting" },
  { src: `${F}/loom-threads.jpg`, title: "Warp Beam", group: "Weaving & Knitting" },
  { src: `${F}/knitting.jpg`, title: "Circular Knitting", group: "Weaving & Knitting" },
  { src: `${F}/processing.jpg`, title: "Dyeing & Processing", group: "Processing" },
  { src: `${F}/finishing.jpg`, title: "Finishing / Stenter", group: "Processing" },
  { src: `${F}/fabric-store.jpg`, title: "Fabric Warehouse", group: "Processing" },
  { src: `${F}/fabric-stack.jpg`, title: "Dyed Fabric", group: "Processing" },
  { src: `${F}/fabric-rolls.jpg`, title: "Fabric Inspection", group: "Processing" },
  { src: `${F}/stitching-line.jpg`, title: "Stitching Line", group: "Stitching" },
  { src: `${F}/stitching-floor.jpg`, title: "Cut & Sew Floor", group: "Stitching" },
  { src: `${F}/denim-stitching.jpg`, title: "Denim Stitching", group: "Stitching" },
  { src: `${F}/tailoring.jpg`, title: "Shirt Making", group: "Stitching" },
  { src: `${F}/embroidery.jpg`, title: "Multi-Head Embroidery", group: "Embroidery" },
  { src: `${F}/embroidery-close.jpg`, title: "Logo Embroidery", group: "Embroidery" },
  { src: `${F}/maintenance.jpg`, title: "Machine Maintenance", group: "Embroidery" },
];

// Facility tiles with caption bars on the manufacturing page.
export const facilities = [
  { src: `${F}/spinning.jpg`, title: "Spinning" },
  { src: `${F}/looms-rows.jpg`, title: "Weaving" },
  { src: `${F}/knitting.jpg`, title: "Knitting" },
  { src: `${F}/processing.jpg`, title: "Dyeing" },
  { src: `${F}/finishing.jpg`, title: "Finishing" },
  { src: `${F}/fabric-rolls.jpg`, title: "Fabric Inspection" },
  { src: `${F}/stitching-line.jpg`, title: "Stitching" },
  { src: `${F}/embroidery.jpg`, title: "Embroidery" },
];

// Brands we supply. Logos live in public/images/brands/ (from simple-icons).
// Brands without a `logo` show as a bold wordmark. `color` is the tile background.
export const brands = [
  { name: "Adidas", color: "#000000", logo: "/images/brands/adidas.svg" },
  { name: "Puma", color: "#BA2026", logo: "/images/brands/puma.svg" },
  { name: "New Balance", color: "#CF0A2C", logo: "/images/brands/newbalance.svg" },
  { name: "Reebok", color: "#1C3F94", logo: "/images/brands/reebok.svg" },
  { name: "Under Armour", color: "#1D1D1D", logo: "/images/brands/underarmour.svg" },
  { name: "ASICS", color: "#001E62" },
  { name: "HOKA", color: "#2D6CDF" },
  { name: "On", color: "#2B2B2B" },
  { name: "Brooks", color: "#0067B1" },
  { name: "Saucony", color: "#E4002B" },
];

// SAMPLE CONTENT: replace milestones and certifications with the real company history.
export const milestones = [
  { year: "1998", text: "Samiullah Enterprises founded as a fabric trading house in Faisalabad." },
  { year: "2004", text: "First weaving unit installed with shuttle-less looms." },
  { year: "2010", text: "Expanded into home textiles and began direct exports." },
  { year: "2016", text: "Added knitting, stitching, finishing and in-house quality lab." },
  { year: "2021", text: "Launched denim and polo lines; solar power and water recycling introduced." },
  { year: "Today", text: "Serving buyers across Europe, the Americas, the Middle East and Asia." },
];

export const processSteps = [
  { title: "Spinning", text: "Selected cotton is opened, carded, combed and spun into consistent yarn." },
  { title: "Weaving & Knitting", text: "Air-jet looms and circular knitting machines produce woven and knitted fabric." },
  { title: "Processing", text: "Bleaching, dyeing, washing and printing with tight shade control." },
  { title: "Cutting & Stitching", text: "Automated cutting and dedicated sewing lines turn fabric into garments." },
  { title: "Quality Check", text: "Every lot is tested in our lab and inspected to AQL 2.5 standards." },
  { title: "Packing & Shipping", text: "Custom packing and on-time dispatch from Karachi and Lahore ports." },
];

export const certifications = ["OEKO-TEX® Standard 100", "GOTS", "BCI Cotton", "ISO 9001", "SEDEX / SMETA", "WRAP"];
