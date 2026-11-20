import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ProductFilter from "@/components/ProductFilter";

export const metadata = { title: "Products" };

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Our Products"
        text="Polo shirts, T-shirts, denim, shirts, hoodies, outerwear and home textiles made to order. Custom fabrics, GSM, colours, labels and packing."
        image="/images/products/tshirts-rack.jpg"
      />
      <section className="section">
        <div className="container">
          <ProductFilter />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
