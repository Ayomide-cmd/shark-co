import { Link } from "react-router-dom";
import type { Product } from "../types";

export default function ShopPage({
  items,
}: {
  items: Product[];
}) {
  return (
    <section className="section shop-page">
      <Link to="/" className="back-home">
  <span aria-hidden="true">←</span>
  Back to Home
</Link>
      <div className="shop-page__header">
        <div>
          <p className="shop-page__eyebrow">
            SHARK.CO / COLLECTION 001
          </p>

          <h1>Shop All.</h1>

          <p className="shop-page__description">
            Find your fit. Swim with the sharks.
          </p>
        </div>

        <p className="shop-page__count">
          {items.length} PRODUCTS
        </p>
      </div>

      <div className="grid grid--4 shop-page__grid">
        {items.map((product) => {
          const firstVariant = product.variants[0];
          const image = firstVariant?.images[0];

          return (
            <Link
              key={product.id}
              to={`/shop/${product.slug}`}
              className="card card--product shop-card"
            >
              <div className="shop-card__image">
                {image ? (
                  <img
                    src={image}
                    alt={`${product.name} in ${firstVariant.color}`}
                    loading="lazy"
                  />
                ) : (
                  <span>Image coming soon</span>
                )}
              </div>

              <div className="shop-card__details">
                <div>
                  <h2>{product.name}</h2>

                  <p className="shop-card__colour">
                    {product.variants.length}{" "}
                    {product.variants.length === 1
                      ? "option"
                      : "colour options"}
                  </p>
                </div>

                <p className="shop-card__price">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="shop-card__swatches">
                {product.variants.map((variant) => (
                  <span
                    key={variant.id}
                    className="shop-card__swatch"
                    style={{ backgroundColor: variant.swatch }}
                    title={variant.color}
                    aria-label={variant.color}
                  />
                ))}
              </div>
            </Link>
          
          
          );
        })}
      </div>
    </section>
  );
}

      