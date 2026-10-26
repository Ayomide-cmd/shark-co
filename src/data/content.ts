import type { Drop, PastDrop, Product } from "../types";
export const navLinks = ["Drops", "Lookbook", "Collections", "Stores", "Shop"];
export const upcomingDrops: Drop[] = [
  { id: "d1", city: "Lagos, Nigeria", date: "November 1, 2026" },
  { id: "d2", city: "Los Angeles", date: "November 14 - 16, 2026" },
  { id: "d3", city: "Seoul, South Korea", date: "December 5, 2026" },
  { id: "d4", city: "London, UK", date: "December 19, 2026" },
];
export const pastDrops: PastDrop[] = [
  { id: "p1", name: "Deep End Pop-up", city: "Lagos, Nigeria", date: "September 26, 2026" },
  { id: "p2", name: "Tidal Warehouse", city: "Los Angeles, CA", date: "August 12, 2026" },
  { id: "p3", name: "Reef Runway", city: "Miami, FL", date: "August 4, 2026" },
  { id: "p4", name: "Fin Season", city: "Accra, Ghana", date: "June 24, 2026" },
];
export const products: Product[] = [
  { id: "s1", name: "Shark Hoodie", price: 85 },
  { id: "s2", name: "Shark Cargo Pants", price: 95 },
  { id: "s3", name: "Shark Cap", price: 30 },
  { id: "s4", name: "Shark Tote Bag", price: 28 },
];
export const crews = ["SKATE","FIN","TIDE","REEF","DEEP","BITE","SWELL","SURGE","JAWS","WAKE","BRINE","CURRENT","DRIFT","LURE"];
