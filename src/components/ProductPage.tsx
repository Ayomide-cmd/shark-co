import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Product, ProductVariant } from "../types";

function ProductDetails({
  product,
}: {
  product: Product;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0]?.id ?? ""
  );

  const [selectedImage, setSelectedImage] = useState(
    product.variants[0]?.images[0] ?? ""
  );

  const variant =
    product.variants.find(
      (item) => item.id === selectedVariantId
    ) ?? product.variants[0];

  useEffect(() => {
    setSelectedVariantId(product.variants[0]?.id ?? "");
    setSelectedImage(product.variants[0]?.images[0] ?? "");
  }, [product]);

  useEffect(() => {
    setSelectedImage(variant?.images[0] ?? "");
  }, [variant?.id]);

  function selectVariant(nextVariant: ProductVariant) {
    setSelectedVariantId(nextVariant.id);
    setSelectedImage(nextVariant.images[0] ?? "");
  }

  return (
    <section className="section product-page">
      <div className="product-page__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="product-layout">
        <div className="product-gallery">
          <div className="product-gallery__main">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={`${product.name}, ${variant.color}`}
              />
            ) : (
              <div className="product-gallery__empty">
                Image coming soon
              </div>
            )}
          </div>

          {variant.images.length > 1 && (
            <div className="product-gallery__thumbnails">
              {variant.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`product-gallery__thumbnail ${
                    selectedImage === image ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View ${
                    index === 0 ? "front" : "back"
                  } of ${product.name}`}
                  aria-pressed={selectedImage === image}
                >
                  <img src={image} alt="" />

                  <span>
                    {index === 0 ? "Front" : "Back"}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <p className="product-info__eyebrow">
            SHARK.CO / STREETWEAR
          </p>

          <h1>{product.name}</h1>

          <p className="product-info__price">
            ${product.price.toFixed(2)}
          </p>

          <div className="product-info__divider" />

          <div className="product-info__colour-heading">
            <span>Colour</span>
            <span>{variant.color}</span>
          </div>

          <div className="product-info__swatches">
            {product.variants.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`product-info__swatch ${
                  variant.id === option.id ? "is-active" : ""
                }`}
                style={{ backgroundColor: option.swatch }}
                onClick={() => selectVariant(option)}
                aria-label={`Select ${option.color}`}
                aria-pressed={variant.id === option.id}
                title={option.color}
              />
            ))}
          </div>

          <div className="product-info__variant-labels">
            {product.variants.map((option) => (
              <button
                key={option.id}
                type="button"
                className={
                  variant.id === option.id ? "is-active" : ""
                }
                onClick={() => selectVariant(option)}
              >
                {option.color}
              </button>
            ))}
          </div>

          <p className="product-info__note">
            Select a colour to view its images. Use the image
            thumbnails to switch between front and back views
            where available.
          </p>

          <div className="product-info__divider" />

          <p className="product-info__availability">
            {variant.images.length > 1
              ? "Front and back views available"
              : "Product view"}
          </p>

          <Link
            to="/shop"
            className="product-info__back-link"
          >
            ← Back to all merch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage({
  items,
}: {
  items: Product[];
}) {
  const { slug } = useParams();

  const product = items.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="section product-not-found">
        <h1>Product not found.</h1>
        <Link to="/shop">Return to shop</Link>
      </section>
    );
  }

  return <ProductDetails product={product} />;
}