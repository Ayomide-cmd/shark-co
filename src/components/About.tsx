import { useEffect, useRef, useState } from "react";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="lookbook" className="section section--blue about">
      <div>
        <p className="kicker">About Shark.co</p>
        <h2>More than clothes. A Frenzy.</h2>
        <p>
          Shark.co is a streetwear label built for people who move in groups
          and never stay still. We back independent makers, run pop-ups in
          every city we land in, and cut every piece to hold up from the
          skate park to the dance floor.
        </p>
        <a className="btn btn--orange" href="#lookbook">
          Meet the Sharks
        </a>
      </div>

      <div className="about__video">
        <video
          ref={videoRef}
          src={shouldLoad ? "/about.mp4" : undefined}
          poster="/about-poster.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}