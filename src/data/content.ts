import type { Drop, PastDrop, Product } from "../types";

export const navLinks = ["Drops", "Lookbook", "Collections", "Stores", "Shop"];
export const upcomingDrops: Drop[] = [
  { id: "d1", city: "Lagos, Nigeria", date: "November 1, 2026" },
  { id: "d2", city: "Los Angeles", date: "November 14 - 16, 2026" },
  { id: "d3", city: "Seoul, South Korea", date: "December 5, 2026" },
  { id: "d4", city: "London, UK", date: "December 19, 2026" },
];
export const pastDrops: PastDrop[] = [
  {
    id: "p1",
    name: "Deep End Pop-up",
    city: "Lagos, Nigeria",
    date: "September 26, 2026",
    image: "/deependpopup.jpg",
  },
  {
    id: "p2",
    name: "Tidal Warehouse",
    city: "Los Angeles, CA",
    date: "August 12, 2026",
    image: "/tidalwarehouse.jpg",
  },
  {
    id: "p3",
    name: "Reef Runway",
    city: "Miami, FL",
    date: "August 4, 2026",
    image: "/reefrunway.jpg",
  },
  {
    id: "p4",
    name: "Fin Season",
    city: "Accra, Ghana",
    date: "June 24, 2026",
    image: "/finseason.jpg",
  },
];

export const products: Product[] = [
  {
    id: "s1",
    slug: "cargo-jacket",
    name: "Cargo Jacket",
    price: 85,
    variants: [
      {
        id: "cargo-jacket-green",
        color: "Green",
        swatch: "#46543B",
        images: [
          "/cargojacket.PNG",
          "/cargojacketback.PNG",
        ],
      },
      {
        id: "cargo-jacket-ivory",
        color: "Ivory",
        swatch: "#E9E2D3",
        images: [
          "/ivoryjacketfront.JPG",
          "/ivoryjacketback.JPG",
        ],
      },
    ],
  },
  {
    id: "s2",
    slug: "cargo-tote",
    name: "Cargo Tote Bag",
    price: 28,
    variants: [
      {
        id: "cargo-tote-green",
        color: "Green",
        swatch: "#46543B",
        images: ["/cargotote.PNG"],
      },
      {
        id: "cargo-tote-ivory",
        color: "Ivory",
        swatch: "#E9E2D3",
        images: ["/ivorytote.JPG"],
      },
      {
        id: "cargo-tote-denim",
        color: "Denim",
        swatch: "#526D8A",
        images: ["/denimtote.JPG"],
      },
      {
        id: "cargo-tote-pink",
        color: "Pink",
        swatch: "#E8A3B5",
        images: ["/pinktote.JPG"],
      },
    ],
  },
  {
    id: "s3",
    slug: "cargo-cap",
    name: "Cargo Cap",
    price: 30,
    variants: [
      {
        id: "cargo-cap-green",
        color: "Green",
        swatch: "#46543B",
        images: [
          "/cargocap.JPG",
          "/cargocapback.JPG",
        ],
      },
      {
        id: "cargo-cap-pink",
        color: "Pink",
        swatch: "#E8A3B5",
        images: ["/pinkcap.JPG"],
      },
    ],
  },
 
  {
    id: "s4",
    slug: "cargo-pants",
    name: "Cargo Pants",
    price: 95,
    variants: [
      {
        id: "cargo-pants-green",
        color: "Cargo",
        swatch: "#46543B",
        images: ["/cargopants.PNG"],
      },
      {
        id: "cargo-pants-black",
        color: "Black",
        swatch: "#171717",
        images: ["/blackpants.JPG"],
      },
      {
        id: "cargo-pants-ivory",
        color: "Ivory",
        swatch: "#E9E2D3",
        images: ["/ivorypants.JPG"],
      },
    ],
  },
];

export const crews = ["LAGOS GANG","FIN","TIDE","REEF","DEEP","BITE","JAWS","WAKE","BRINE","CURRENT","DRIFT","LURE"];
