

import { Link } from "react-router-dom";
import type { PastDrop } from "../types";

export default function PastDropsPage({
  items,
}: {
  items: PastDrop[];
}) {
  return (
    <section className="section section--cream past-drops-page">
      <div className="past-drops-page__top">
        <Link to="/" className="link">
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <p className="past-drops-page__eyebrow">
          THE ARCHIVE
        </p>

        <h1>Past drops</h1>

        <p className="past-drops-page__description">
          Explore our previous drops, events, and experiences.
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid grid--4 past-drops-grid">
          {items.map((drop) => (
            <Link
              to={`/past-drops/${drop.id}`}
              key={drop.id}
              className="past-drop-card"
              aria-label={`View ${drop.name}`}
            >
              <div className="past-drop-card__image">
                {drop.image ? (
                  <img
                    src={drop.image}
                    alt={drop.name}
                    loading="lazy"
                  />
                ) : (
                  <div className="past-drop-card__placeholder">
                    {drop.name}
                  </div>
                )}

                <span
                  className="past-drop-card__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="past-drop-card__info">
                <h3>{drop.name}</h3>
                <p>{drop.city}</p>
                <p className="past-drop-card__date">
                  {drop.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="past-drops-page__empty">
          No past drops available yet.
        </p>
      )}
    </section>
  );
}