import type { Drop } from "../types";

export default function Drops({ items }: { items: Drop[] }) {
  const images = [
    "/lagosdrop.jpg",
    "/losangeles.jpg",
    "/seouldrop.jpg",
    "/londondrop.jpg",
  ];

  return (
    <section id="drops" className="section section--cream drops">
      <div className="section__head">
        <div>
          <h2>Upcoming drops</h2>
          <p className="drops__subtitle">
            Different cities. Different energy. One movement.
          </p>
        </div>
        <a className="link" href="#drops">
          See all drops
        </a>
      </div>

      <div className="drops__carousel">
        <div className="drops__track">
          {items.map((d, index) => (
            <article className="drops__slide" key={d.id}>
              <div className="drops__image-wrap">
                <img
                  src={images[index % images.length]}
                  alt={`${d.city} drop`}
                  className="drops__image"
                />
                <span className="drops__number">
                  DROP 0{index + 1}
                </span>
              </div>

              <div className="drops__info">
                <div>
                  <h3>{d.city}</h3>
                  <p>{d.date}</p>
                </div>
                <a className="btn btn--blue" href="#drops">
                  Get access
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="drops__footer">
        <span>SWIPE TO EXPLORE</span>
        <div className="drops__progress">
          {items.map((d, index) => (
            <span key={d.id} className="drops__dot" />
          ))}
        </div>
      </div>
    </section>
  );
}
