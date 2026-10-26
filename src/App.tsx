import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Drops from "./components/Drops";
import About from "./components/About";
import Shop from "./components/Shop";
import Marquee from "./components/Marquee";
import PastDrops from "./components/PastDrops";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import { upcomingDrops, pastDrops, products, crews } from "./data/content";

export default function App() {
  return (<>
    <Navbar />
    <main>
      <Hero />
      <Drops items={upcomingDrops} />
      <About />
      <Shop items={products} />
      <Marquee title="Worn by" words={crews} />
      <PastDrops items={pastDrops} />
      <Membership />
    </main>
    <Footer />
  </>);
}
