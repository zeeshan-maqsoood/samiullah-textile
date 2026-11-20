import Link from "next/link";
import Photo from "@/components/Photo";
import { categoryLabel } from "@/lib/site";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-card-media">
        <Photo src={product.image} alt={product.name} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw" />
        <span className="product-tag">{categoryLabel(product.category)}</span>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.blurb}</p>
        <span className="link-arrow">View product <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
