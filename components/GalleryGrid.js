"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Filterable photo grid with a keyboard-friendly lightbox.
export default function GalleryGrid({ photos }) {
  const groups = ["All", ...new Set(photos.map((p) => p.group))];
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState(-1);
  const shown = group === "All" ? photos : photos.filter((p) => p.group === group);

  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => setOpen((i) => (i + d + shown.length) % shown.length), [shown.length]);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="filter-tabs">
        {groups.map((g) => (
          <button key={g} type="button" className={g === group ? "is-active" : ""} onClick={() => setGroup(g)}>
            {g}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {shown.map((p, i) => (
          <button key={p.src} type="button" className="gallery-item" onClick={() => setOpen(i)}>
            <Image src={p.src} alt={p.title} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw" />
            <span className="gallery-zoom" aria-hidden="true">+</span>
            <span className="gallery-cap">{p.title}</span>
          </button>
        ))}
      </div>

      {open >= 0 && shown[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[open].title} onClick={close}>
          <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close">×</button>
          <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <div className="lb-img">
              <Image src={shown[open].src} alt={shown[open].title} fill sizes="90vw" />
            </div>
            <figcaption>
              {shown[open].title} <span>· {shown[open].group}</span>
            </figcaption>
          </figure>
          <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
