"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/site";

export default function ProductFilter() {
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? products : products.filter((p) => p.category === cat);
  const tabs = [{ key: "all", label: "All Products" }, ...categories];

  return (
    <>
      <div className="filter-tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={cat === t.key}
            className={cat === t.key ? "is-active" : ""}
            onClick={() => setCat(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {shown.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
