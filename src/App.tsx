import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Drops from "./components/Drops";
import About from "./components/About";
import Shop from "./components/Shop";
import ShopPage from "./components/ShopPage";
import ProductPage from "./components/ProductPage";
import Marquee from "./components/Marquee";
import PastDrops from "./components/PastDrops";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

import {
  upcomingDrops,
  pastDrops,
  products,
  crews,
} from "./data/content";

function HomePage() {
  return (
    <>
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
    </>
  );
}

function ShopRoute() {
  return (
    <>
      <Navbar />

      <main>
        <ShopPage items={products} />
      </main>

      <Footer />
    </>
  );
}

function ProductRoute() {
  return (
    <>
      <Navbar />

      <main>
        <ProductPage items={products} />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopRoute />} />
        <Route
          path="/shop/:slug"
          element={<ProductRoute />}
        />
      </Routes>
    </BrowserRouter>
  );
}