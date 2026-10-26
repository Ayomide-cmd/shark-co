import { useState, useEffect } from "react";

export default function Hero() {
  const [showSharks, setShowSharks] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let switchTimeout: ReturnType<typeof setTimeout>;
    let fadeTimeout: ReturnType<typeof setTimeout>;

    const cycle = () => {
      switchTimeout = setTimeout(() => {
        setVisible(false);

        fadeTimeout = setTimeout(() => {
          setShowSharks((current) => !current);
          setVisible(true);
          cycle();
        }, 600);
      }, 3000);
    };

    cycle();

    return () => {
      clearTimeout(switchTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <h1
        className={`hero__headline ${
          visible ? "is-visible" : "is-hidden"
        }`}
      >
        {showSharks ? (
          <>
            Swim with
            <br />
            the Sharks.
          </>
        ) : (
          <>
            For the
            <br />
            <span className="hero__accent">Cool Kids.</span>
          </>
        )}
      </h1>

      <p className="hero__sub">
        Streetwear cut for the ones who never stop moving.
      </p>

      <div className="hero__actions">
        <a className="btn btn--orange" href="#drops">
          Find drops
        </a>
        <a className="btn btn--ghost" href="#shop">
          Shop merch
        </a>
      </div>

      <ul className="hero__tags">
        <li>Streetwear</li>
        <li>Culture</li>
        <li>Community</li>
        <li>Shark</li>
      </ul>
    </section>
  );
}