import Image from "next/image";

export default function PageHero({ eyebrow, title, text, image = "/images/factory/weaving-hall.jpg" }) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container page-hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
