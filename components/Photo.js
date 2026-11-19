import Image from "next/image";

export default function Photo({ src, alt, tall = false, label, contain = false, priority = false, sizes = "(max-width: 980px) 100vw, 50vw" }) {
  return (
    <div className={`photo ${tall ? "photo-tall" : ""} ${contain ? "photo-contain" : ""}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      {label && <span>{label}</span>}
    </div>
  );
}
