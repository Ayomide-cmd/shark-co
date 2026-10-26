import type { Product } from "../types";
import Placeholder from "./Placeholder";
export default function Shop({ items }: { items: Product[] }) {
  return (
    <section id="shop" className="section section--cream">
      <div className="section__head"><h2>Shop</h2><a className="link" href="#shop">See all merch</a></div>
      <div className="grid grid--4">
        {items.map(p => (
          <a key={p.id} href="#shop" className="card card--product">
            <Placeholder src={p.image} label={p.name} ratio="512 / 525" />
            <h3>{p.name}</h3><p>${p.price.toFixed(2)}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
