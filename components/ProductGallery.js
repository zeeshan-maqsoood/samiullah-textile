"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  return (
    <div className="pg">
      <div className="pg-main">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${name} – photo ${active + 1}`}
          fill
          sizes="(max-width: 980px) 100vw, 55vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="pg-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
