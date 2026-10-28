import { Link, useParams } from "react-router-dom";
import type { PastDrop } from "../types";

export default function PastDropDetailPage({
  items,
}: {
  items: PastDrop[];
}) {
  const { id } = useParams<{ id: string }>();

  const drop = items.find((item) => item.id === id);

  if (!drop) {
    return (
      <section className="section section--cream">
        <div className="past-drop-detail__not-found">
          <p className="past-drops-page__eyebrow">
            THE ARCHIVE
          </p>

          <h1>Drop not found</h1>

          <p>
            This event may have been removed or does not exist.
          </p>

          <Link to="/past-drops" className="link">
            ← Browse all past drops
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--cream past-drop-detail">
      <Link to="/past-drops" className="link">
        <span aria-hidden="true">←</span> Back to past drops
      </Link>

      <article className="past-drop-detail__content">
        <div className="past-drop-detail__image">
          {drop.image ? (
            <img
              src={drop.image}
              alt={drop.name}
            />
          ) : (
            <div className="past-drop-card__placeholder">
              {drop.name}
            </div>
          )}
        </div>

        <div className="past-drop-detail__info">
          <p className="past-drops-page__eyebrow">
            FROM THE ARCHIVE
          </p>

          <h1>{drop.name}</h1>

          <p className="past-drop-detail__location">
            {drop.city}
          </p>

          <p className="past-drop-detail__date">
            {drop.date}
          </p>

          <Link to="/past-drops" className="link">
            Explore more past drops →
          </Link>
        </div>
      </article>
    </section>
  );
}
