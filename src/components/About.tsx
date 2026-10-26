import Placeholder from "./Placeholder";
export default function About() {
  return (
    <section id="lookbook" className="section section--blue about">
      <div>
        <p className="kicker">About Shark.co</p>
        <h2>More than clothes. A pack.</h2>
        <p>Shark.co is a streetwear label built for people who move in groups and never stay still. We back independent makers, run pop-ups in every city we land in, and cut every piece to hold up from the skate park to the dance floor.</p>
        <a className="btn btn--orange" href="#lookbook">Our story</a>
      </div>
      <Placeholder label="Shark lookbook" ratio="800 / 560" />
    </section>
  );
}
