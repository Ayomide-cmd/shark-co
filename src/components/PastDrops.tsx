import type { PastDrop } from "../types";
import Placeholder from "./Placeholder";
export default function PastDrops({ items }: { items: PastDrop[] }) {
  return (
    <section id="stores" className="section section--cream">
      <div className="section__head"><h2>Past drops</h2><a className="link" href="#stores">See all past drops</a></div>
      <div className="grid grid--4">
        {items.map(d => (
          <article key={d.id} className="card">
            <Placeholder src={d.image} label={d.name} ratio="512 / 525" />
            <h3>{d.name}</h3><p>{d.city}</p><p>{d.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
