import carpenterAsset from "../assets/carpenter.jpg";
import cleaningAsset from "../assets/cleaning.jpg";

const fromPublic = (file) => `/images/services/${file}`;

const services = [
  {
    name: "Plumber",
    price: "₹299+",
    img: fromPublic("plumber.jpg"),
    slug: "plumber",
  },
  {
    name: "Electrician",
    price: "₹249+",
    img: fromPublic("electrician.jpg"),
    slug: "electrician",
  },
  {
    name: "Carpenter",
    price: "₹399+",
    img: carpenterAsset,
    slug: "carpenter",
  },
  {
    name: "House Cleaning",
    price: "₹499+",
    img: cleaningAsset,
    slug: "cleaning",
  },
  {
    name: "Hair Cutting",
    price: "₹199+",
    img: fromPublic("hair.jpg"),
    slug: "hair",
  },
  {
    name: "AC Repair",
    price: "₹599+",
    img: fromPublic("ac.jpg"),
    slug: "ac-repair",
  },
];

export default services;