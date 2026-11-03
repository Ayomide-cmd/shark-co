
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { Drop } from "../types";

const images = [
  "/lagosdrop.jpg",
  "/losangeles.jpg",
  "/seouldrop.jpg",
  "/londondrop.jpg",
];

export default function Drops({ items }: { items: Drop[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  if (!items.length) return null;

  const goTo = (direction: number) => {
    setActiveIndex((current) =>
      (current + direction + items.length) % items.length
    );
  };

  const handlePointerDown = (e: PointerEvent<HTMLElement>) => {
    startX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    if (dragX < -45) goTo(1);
    if (dragX > 45) goTo(-1);

    setDragX(0);
    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    setDragX(0);
    setIsDragging(false);
  };

  return (
    <section id="drops" className="section section--cream drops">
      <div className="section__head">
        <h2>Upcoming drops</h2>
        <a className="link" href="#drops">
          See all drops
        </a>
      </div>

      <div className="drops__stage">
        <div
          className={`drops__deck ${isDragging ? "is-dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {items.map((drop, index) => {
            let position = index - activeIndex;

            if (position > items.length / 2) {
              position -= items.length;
            }

            if (position < -items.length / 2) {
              position += items.length;
            }

            if (Math.abs(position) > 2) return null;

            const active = position === 0;

            return (
              <article
                key={drop.id}
                className={`drops__card ${
                  active ? "is-active" : ""
                }`}
                style={{
                  zIndex: 10 - Math.abs(position),
                  transform: `
                    translateX(calc(-50% + ${
                      position * 105
                    }px))
                    translateY(${Math.abs(position) * 13}px)
                    rotate(${position * 7}deg)
                    scale(${active ? 1 : 0.88})
                    ${
                      active && isDragging
                        ? `translateX(${dragX}px) rotate(${dragX * 0.025}deg)`
                        : ""
                    }
                  `,
                }}
              >
                <div className="drops__image-wrap">
                  <img
                    src={images[index % images.length]}
                    alt={`${drop.city} drop`}
                    draggable={false}
                  />
                </div>

                <div className="drops__card-info">
                  <div>
                    <span className="drops__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{drop.city}</h3>
                  </div>

                  <p>{drop.date}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="drops__footer">
        <div className="drops__pagination">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.city} drop`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`drops__dot ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveIndex(index);
                setDragX(0);
              }}
            />
          ))}
        </div>

        <div className="drops__controls">
          <button
            type="button"
            aria-label="Previous drop"
            onClick={() => goTo(-1)}
          >
            &#8592;
          </button>

          <button
            type="button"
            aria-label="Next drop"
            onClick={() => goTo(1)}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}



