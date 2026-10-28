

import { Link } from "react-router-dom";
import type { PastDrop } from "../types";

export default function PastDrops({
  items,
}: {
  items: PastDrop[];
}) {
  return (
    <section
      id="past-drops"
      className="section section--cream"
    >
      <div className="section__head">
        <h2>Past drops</h2>

        <Link to="/past-drops" className="link">
          See all past drops <span aria-hidden="true">→</span>
        </Link>
      </div>

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
    </section>
  );
}