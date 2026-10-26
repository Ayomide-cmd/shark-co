export default function Marquee({ title, words }: { title: string; words: string[] }) {
  const row = [...words, ...words];
  return (
    <section id="collections" className="section section--orange marquee">
      <h2>{title} the pack</h2>
      <div className="marquee__track" aria-hidden="true">
        <div className="marquee__row">{row.map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>
      <ul className="sr-only">{words.map(w => <li key={w}>{w}</li>)}</ul>
      <a className="btn btn--cream" href="#collections">View all crews</a>
    </section>
  );
}
