import type { Drop } from "../types";
import Placeholder from "./Placeholder";
export default function Drops({ items }: { items: Drop[] }) {
  return (
    <section id="drops" className="section section--cream">
      <div className="section__head"><h2>Upcoming drops</h2><a className="link" href="#drops">See all upcoming drops</a></div>
      <div className="grid grid--4">
        {items.map(d => (
          <article key={d.id} className="card">
            <Placeholder src={d.image} label={d.city} ratio="512 / 525" />
            <h3>{d.city}</h3><p>{d.date}</p>
            <a className="btn btn--blue" href="#drops">Get access</a>
          </article>
        ))}
      </div>
    </section>
  );
}
