import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/GalleryGrid";
import { factoryPhotos } from "@/lib/site";

export const metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Inside the factory"
        title="Gallery"
        text="Machinery, people and processes behind every garment we ship."
        image="/images/factory/looms-rows.jpg"
      />
      <section className="section section-dark">
        <div className="container">
          <GalleryGrid photos={factoryPhotos} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
