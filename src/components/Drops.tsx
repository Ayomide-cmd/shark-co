import type { Drop } from "../types";

export default function Drops({ items }: { items: Drop[] }) {
  const images = [
    "/londondrop.jpg",
    "/seouldrop.jpg",
    "/lagosdrop.jpg",
    "/losangeles.jpg",
  ];

  return (
    <section id="drops" className="section section--cream">
      <div className="section__head">
        <h2>Upcoming drops</h2>
        <a className="link" href="#drops">See all upcoming drops</a>
      </div>

      <div className="grid grid--4">
        {items.map((d, index) => (
          <article key={d.id} className="card">
            <img
              src={images[index]}
              alt={`${d.city} drop`}
              style={{
                width: "100%",
                aspectRatio: "512 / 525",
                objectFit: "cover",
              }}
            />
            <h3>{d.city}</h3>
            <p>{d.date}</p>
            <a className="btn btn--blue" href="#drops">Get access</a>
          </article>
        ))}
      </div>
    </section>
  );
}