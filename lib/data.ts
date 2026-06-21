export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string; // emoji-free icon key handled in component
};

export const services: Service[] = [
  {
    slug: "sprinklers",
    title: "Automatic Sprinkler Systems",
    tagline: "Suppress fire at the source, automatically.",
    description:
      "Hydraulically calculated wet, dry, pre-action and deluge sprinkler systems designed to BS EN 12845 and LPC Rules. From single retail units to high-bay logistics warehouses.",
    features: [
      "Wet, dry & pre-action systems",
      "Hydraulic calculation & modelling",
      "ESFR high-bay warehouse design",
      "Pump house & tank installation",
    ],
    icon: "droplet",
  },
  {
    slug: "suppression",
    title: "Gaseous & Special Suppression",
    tagline: "Protect what water can't touch.",
    description:
      "Clean-agent (FM-200, Novec 1230, inert gas) and water-mist suppression for data centres, switch rooms and critical assets where downtime is not an option.",
    features: [
      "FM-200 & Novec 1230 clean agent",
      "Inert gas (IG-55 / IG-541)",
      "Watermist for plant & turbines",
      "Kitchen & CNC suppression",
    ],
    icon: "shield",
  },
  {
    slug: "detection",
    title: "Fire Detection & Alarms",
    tagline: "See fire before it spreads.",
    description:
      "Addressable detection, aspirating smoke detection (ASD) and voice alarm systems engineered to BS 5839, with graphical cause-and-effect and BMS integration.",
    features: [
      "Addressable L1–L5 systems",
      "Aspirating (VESDA) detection",
      "Voice alarm & PAVA",
      "Cause & effect programming",
    ],
    icon: "radar",
  },
  {
    slug: "passive",
    title: "Passive Fire Protection",
    tagline: "Build resistance into the structure.",
    description:
      "Fire-stopping, intumescent coatings, fire doors and compartmentation surveys that contain fire and protect escape routes for the required period of resistance.",
    features: [
      "Penetration fire-stopping",
      "Intumescent steel coatings",
      "Fire door installation & survey",
      "Compartmentation reporting",
    ],
    icon: "wall",
  },
  {
    slug: "extinguishers",
    title: "Extinguishers & Wet Risers",
    tagline: "First-response, always ready.",
    description:
      "Supply, commissioning and servicing of portable extinguishers, hose reels, dry and wet risers and hydrants to BS 5306 — fully certificated and tagged.",
    features: [
      "Extinguisher supply & service",
      "Dry & wet riser testing",
      "Hydrant & hose reel servicing",
      "BS 5306 certification",
    ],
    icon: "spark",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Compliance",
    tagline: "Stay protected, stay compliant.",
    description:
      "Planned preventative maintenance, 24/7 reactive callout and digital compliance records that keep you on the right side of the Regulatory Reform (Fire Safety) Order.",
    features: [
      "Planned maintenance contracts",
      "24/7 emergency callout",
      "Digital asset & compliance logs",
      "Fire risk assessments",
    ],
    icon: "wrench",
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
};

export const projects: Project[] = [
  {
    slug: "meridian-data-centre",
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
  { value: "1,200+", label: "Systems commissioned" },
  { value: "27 yrs", label: "Protecting UK assets" },
  { value: "99.98%", label: "Maintenance uptime" },
  { value: "24/7", label: "Emergency response" },
];
