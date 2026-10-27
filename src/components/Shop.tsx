import { Link } from "react-router-dom";
import type { Product } from "../types";

export default function Shop({
  items,
}: {
  items: Product[];
}) {
  return (
    <section id="shop" className="section section--cream home-shop">
      <div className="section__head">
        <h2>Shop</h2>

        <Link className="link" to="/shop">
          See all merch
        </Link>
      </div>

      <div className="grid grid--4">
        {items.slice(0, 4).map((product) => {
          const firstVariant = product.variants[0];
          const image = firstVariant?.images[0];

          return (
            <Link
              key={product.id}
              to={`/shop/${product.slug}`}
              className="card card--product home-shop__card"
            >
              {image ? (
                <img
                  src={image}
                  alt={`${product.name} in ${firstVariant.color}`}
                  className="ph"
                  loading="lazy"
                />
              ) : (
                <div className="ph">Image coming soon</div>
              )}

              <h3>{product.name}</h3>

              <p>${product.price.toFixed(2)}</p>

              <span className="home-shop__hint">
                View product
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}