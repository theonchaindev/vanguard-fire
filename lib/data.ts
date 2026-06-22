/** Build a sized Unsplash URL from a photo id. */
export function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

/** Full-bleed fire imagery used behind the hero. */
export const heroImage = unsplash("1504328345606-18bbc8c9d7d1", 2000);

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string; // emoji-free icon key handled in component
  image: string;
};

export const services: Service[] = [
  {
    slug: "suppression",
    title: "Fire Suppression",
    tagline: "Protect what water can't touch.",
    description:
      "This highly specialised field demands the most meticulous design and project execution. Surtur Fire install, service and maintain gas suppression systems where water may pose a risk to critical IT infrastructure — keeping your business running.",
    features: [
      "Gas suppression design & install",
      "Critical IT & server room protection",
      "Clean-agent systems",
      "Service & ongoing maintenance",
    ],
    icon: "shield",
    image: unsplash("1516937941344-00b4e0337589"),
  },
  {
    slug: "detection",
    title: "Fire Detection",
    tagline: "See fire before it spreads.",
    description:
      "Surtur Fire specialises in cutting-edge fire detection for businesses and homes. We provide a wide range of conventional and addressable fire detection and alarm systems to suit all types of premises, using advanced smoke detectors and heat sensors to swiftly identify potential fire hazards.",
    features: [
      "Conventional & addressable systems",
      "Smoke detectors & heat sensors",
      "Suitable for all premises",
      "Service & ongoing maintenance",
    ],
    icon: "radar",
    image: unsplash("1542013936693-884638332954"),
  },
  {
    slug: "extinguishers",
    title: "Fire Extinguishers",
    tagline: "First-response, always ready.",
    description:
      "Our engineers are BAFE qualified to install, service and maintain all of your company's portable fire extinguishing needs — fully certificated, tagged and compliant.",
    features: [
      "BAFE qualified engineers",
      "Supply & installation",
      "Annual service & maintenance",
      "Full certification & tagging",
    ],
    icon: "spark",
    image: unsplash("1611273426858-450d8e3c9fce"),
  },
  {
    slug: "emergency-lighting",
    title: "Emergency Lighting",
    tagline: "Don't be left in the dark.",
    description:
      "At Surtur Fire we install, service and maintain your system to ensure your emergency exit routes have the safe and appropriate lighting required — so everyone can get out safely when it matters most.",
    features: [
      "Emergency lighting design",
      "Installation to current standards",
      "Exit route illumination",
      "Service & ongoing maintenance",
    ],
    icon: "bulb",
    image: unsplash("1614064642639-e398cf05badb"),
  },
];

export type Project = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  scope: string;
  stat: { label: string; value: string }[];
  summary: string;
  accent: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-data-centre",
    image: unsplash("1558494949-ef010cbdcc31"),
    name: "Meridian Tier III Data Centre",
    sector: "Data Centre",
    location: "Slough, UK",
    year: "2024",
    scope: "Novec 1230 + VESDA",
    summary:
      "Full clean-agent suppression and aspirating detection across 4 data halls with zero-downtime commissioning and N+1 cylinder redundancy.",
    stat: [
      { label: "Halls protected", value: "4" },
      { label: "Discharge time", value: "10s" },
      { label: "Downtime", value: "0" },
    ],
    accent: "#ff3b1f",
  },
  {
    slug: "northgate-logistics",
    image: unsplash("1558618666-fcd25c85cd64"),
    name: "Northgate Logistics Hub",
    sector: "Warehouse",
    location: "Daventry, UK",
    year: "2023",
    scope: "ESFR Sprinklers",
    summary:
      "ESFR high-bay sprinkler protection for a 42,000 m² distribution centre, including a dedicated pump house and 600 m³ storage tank.",
    stat: [
      { label: "Floor area", value: "42k m²" },
      { label: "Sprinkler heads", value: "9,200" },
      { label: "Tank volume", value: "600 m³" },
    ],
    accent: "#e11d2a",
  },
  {
    slug: "regent-tower",
    image: unsplash("1486406146926-c627a92ad1ab"),
    name: "Regent Tower Residential",
    sector: "Residential",
    location: "Manchester, UK",
    year: "2024",
    scope: "Detection + Passive",
    summary:
      "Post-Grenfell remediation: full compartmentation survey, fire-stopping and a BS 5839 Part 1 L2 detection upgrade across 28 storeys.",
    stat: [
      { label: "Storeys", value: "28" },
      { label: "Dwellings", value: "214" },
      { label: "Doors replaced", value: "430" },
    ],
    accent: "#ff6a3d",
  },
  {
    slug: "ashford-foundry",
    image: unsplash("1581094794329-c8112a89af12"),
    name: "Ashford Steel Foundry",
    sector: "Industrial",
    location: "Sheffield, UK",
    year: "2022",
    scope: "Deluge + Watermist",
    summary:
      "High-hazard deluge and watermist suppression for molten-metal handling, with flame detection and an integrated emergency shutdown matrix.",
    stat: [
      { label: "Risk class", value: "HHP" },
      { label: "Flame detectors", value: "64" },
      { label: "Response", value: "<1s" },
    ],
    accent: "#ff3b1f",
  },
  {
    slug: "harbour-retail",
    image: unsplash("1504917595217-d4dc5ebe6122"),
    name: "Harbour Point Retail Park",
    sector: "Retail",
    location: "Bristol, UK",
    year: "2023",
    scope: "Wet Sprinkler + Alarms",
    summary:
      "Wet pipe sprinkler and addressable alarm install across 18 retail units with a shared landlord monitoring panel and PAVA evacuation.",
    stat: [
      { label: "Units", value: "18" },
      { label: "Zones", value: "36" },
      { label: "Programme", value: "11 wks" },
    ],
    accent: "#e11d2a",
  },
  {
    slug: "summit-hospital",
    image: unsplash("1538108149393-fbbd81895907"),
    name: "Summit NHS Treatment Centre",
    sector: "Healthcare",
    location: "Leeds, UK",
    year: "2024",
    scope: "Detection + Suppression",
    summary:
      "HTM 05-03 compliant detection, oxygen-store suppression and progressive-horizontal-evacuation cause & effect for a live acute care site.",
    stat: [
      { label: "Beds covered", value: "180" },
      { label: "Detectors", value: "2,400" },
      { label: "Phased works", value: "6" },
    ],
    accent: "#ff6a3d",
  },
];

export const stats = [
  { value: "UK-Wide", label: "Trusted across the UK" },
  { value: "BAFE", label: "Qualified engineers" },
  { value: "5.0★", label: "Rated by our clients" },
  { value: "24/7", label: "Ongoing support" },
];

export type Testimonial = { name: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Kevin Anderson",
    quote:
      "Surtur Fire's expertise in gas suppression systems is unparalleled. Thank you for your commitment to safety and reliability.",
  },
  {
    name: "Olivia Smith",
    quote:
      "Surtur Fire brought invaluable peace of mind to our home. The fire detection services were not only skillfully executed but also delivered with courtesy and respect.",
  },
  {
    name: "Terry Malone",
    quote:
      "Hats off to Surtur Fire! Your innovative fire detection technology has added an extra layer of security to our establishment. Grateful for your commitment to safety.",
  },
  {
    name: "John Bennett",
    quote:
      "Surtur Fire stands out for their exceptional service. The team's professionalism and efficiency make them our top choice for fire protection.",
  },
  {
    name: "Craig Haven",
    quote:
      "The expertise of Surtur Fire's team during the gas suppression system installation was truly impressive. They ensured a smooth process from start to finish.",
  },
  {
    name: "Lisa Turner",
    quote:
      "A big thank you to Surtur Fire for their prompt response and thorough installation of our fire detection system. Your dedication to our safety is truly commendable.",
  },
];
