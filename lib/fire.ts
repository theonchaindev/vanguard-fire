/**
 * Fire protection engineering calculations.
 *
 * These use simplified industry formulas (BS EN 12845, BS 5839, BS 5306,
 * ISO 14520 / NFPA 2001) to give INDICATIVE results for early-stage planning.
 * Always confirm with a qualified fire engineer before installation.
 */

/* ----------------------------- Hazard classes ---------------------------- */

export type HazardKey = "LH" | "OH1" | "OH2" | "OH3" | "OH4" | "HHP";

export const hazardClasses: Record<
  HazardKey,
  {
    label: string;
    note: string;
    density: number; // mm/min  (= L/min/m²)
    amao: number; // assumed max area of operation (m²)
    duration: number; // water supply duration (min)
    hose: number; // additional hose-stream allowance (L/min)
  }
> = {
  LH: {
    label: "Light Hazard",
    note: "Offices, schools, hospitals, hotels",
    density: 2.25,
    amao: 84,
    duration: 30,
    hose: 0,
  },
  OH1: {
    label: "Ordinary Hazard 1",
    note: "Cinemas, restaurants, electronics",
    density: 5.0,
    amao: 72,
    duration: 60,
    hose: 0,
  },
  OH2: {
    label: "Ordinary Hazard 2",
    note: "Light engineering, bakeries, retail",
    density: 5.0,
    amao: 144,
    duration: 60,
    hose: 0,
  },
  OH3: {
    label: "Ordinary Hazard 3",
    note: "Warehousing, paper mills, garages",
    density: 5.0,
    amao: 216,
    duration: 60,
    hose: 0,
  },
  OH4: {
    label: "Ordinary Hazard 4",
    note: "High-stacked storage, distilleries",
    density: 5.0,
    amao: 360,
    duration: 60,
    hose: 0,
  },
  HHP: {
    label: "High Hazard Process",
    note: "Chemical plant, foam plastics, flammables",
    density: 12.5,
    amao: 260,
    duration: 90,
    hose: 1000,
  },
};

export type SprinklerResult = {
  systemFlow: number; // L/min
  designFlow: number; // L/min incl. hose
  duration: number; // min
  tankVolume: number; // m³
  heads: number;
  pumpDuty: number; // L/min rounded duty
};

export function calcSprinklers(
  area: number,
  hazard: HazardKey
): SprinklerResult {
  const h = hazardClasses[hazard];
  const systemFlow = h.density * h.amao; // L/min over area of operation
  const designFlow = systemFlow + h.hose;
  const tankLitres = designFlow * h.duration;
  const tankVolume = tankLitres / 1000; // m³
  // One head typically covers ~9–12 m²; use 12 m² for a light grid, fewer for HH
  const coveragePerHead = hazard === "HHP" ? 9 : hazard === "LH" ? 21 : 12;
  const heads = Math.ceil(area / coveragePerHead);
  const pumpDuty = Math.ceil(designFlow / 50) * 50;
  return {
    systemFlow: Math.round(systemFlow),
    designFlow: Math.round(designFlow),
    duration: h.duration,
    tankVolume: Math.round(tankVolume * 10) / 10,
    heads,
    pumpDuty,
  };
}

/* ------------------------------- Detection ------------------------------- */

export type DetectorKey = "smoke" | "heat" | "asd";

export const detectorTypes: Record<
  DetectorKey,
  { label: string; coverage: number; note: string }
> = {
  smoke: {
    label: "Point smoke (optical)",
    coverage: 100, // m² per detector, 7.5 m radius, flat ceiling
    note: "BS 5839-1, 7.5 m radius",
  },
  heat: {
    label: "Point heat",
    coverage: 50, // m² per detector, 5.3 m radius
    note: "BS 5839-1, 5.3 m radius",
  },
  asd: {
    label: "Aspirating (ASD/VESDA)",
    coverage: 500, // m² per sampling pipe run (indicative)
    note: "Class A high-sensitivity",
  },
};

export type DetectionResult = {
  detectors: number;
  callPoints: number;
  sounders: number;
  zones: number;
};

export function calcDetection(
  area: number,
  floors: number,
  detector: DetectorKey
): DetectionResult {
  const cov = detectorTypes[detector].coverage;
  const perFloor = Math.ceil(area / cov);
  const detectors = perFloor * floors;
  // Manual call points: ~2 per floor minimum (each exit), travel distance ≤45 m
  const callPoints = Math.max(2, Math.ceil(area / 400)) * floors;
  // Sounders: ≥65 dB(A) coverage, ~1 per 200 m²
  const sounders = Math.max(2, Math.ceil(area / 200)) * floors;
  // Zones: ≤2000 m² per zone, and never more than one floor per zone
  const zones = Math.max(floors, Math.ceil((area * floors) / 2000));
  return { detectors, callPoints, sounders, zones };
}

/* --------------------------- Gaseous suppression ------------------------- */

export type AgentKey = "novec" | "fm200" | "ig55";

export const agents: Record<
  AgentKey,
  {
    label: string;
    type: "halocarbon" | "inert";
    concentration: number; // design concentration %
    // halocarbon: superheated vapour specific volume s = k1 + k2*T (m³/kg)
    k1?: number;
    k2?: number;
    note: string;
  }
> = {
  novec: {
    label: "Novec 1230",
    type: "halocarbon",
    concentration: 5.3,
    k1: 0.0664,
    k2: 0.0002741,
    note: "3M™ FK-5-1-12, low GWP fluid",
  },
  fm200: {
    label: "FM-200 (HFC-227ea)",
    type: "halocarbon",
    concentration: 7.0,
    k1: 0.1269,
    k2: 0.000513,
    note: "Fast 10s discharge clean agent",
  },
  ig55: {
    label: "Inert gas (IG-55)",
    type: "inert",
    concentration: 40.0,
    note: "Argonite N₂/Ar blend, residue-free",
  },
};

export type SuppressionResult = {
  agentKey: AgentKey;
  agentLabel: string;
  concentration: number;
  /** halocarbon: kg of agent; inert: m³ of free agent at NTP */
  quantity: number;
  unit: "kg" | "m³";
  cylinders: number;
  volume: number; // protected volume m³
};

export function calcSuppression(
  volume: number,
  agentKey: AgentKey,
  tempC: number
): SuppressionResult {
  const a = agents[agentKey];
  const C = a.concentration;
  if (a.type === "halocarbon") {
    const s = (a.k1 ?? 0) + (a.k2 ?? 0) * tempC; // specific volume m³/kg
    // W = (V/s) * (C / (100 - C))
    const W = (volume / s) * (C / (100 - C));
    const cylinders = Math.max(1, Math.ceil(W / 120)); // ~120 kg usable per cylinder
    return {
      agentKey,
      agentLabel: a.label,
      concentration: C,
      quantity: Math.round(W),
      unit: "kg",
      cylinders,
      volume,
    };
  }
  // Inert gas volumetric: X = 2.303 * (Vs/S) * log10(100/(100-C))
  // Vs/S ≈ 1 at design temp; agent volume in m³ at NTP per m³ of hazard
  const factor = 2.303 * Math.log10(100 / (100 - C));
  const X = volume * factor; // m³ of inert agent at NTP
  const cylinders = Math.max(1, Math.ceil(X / 13.6)); // ~13.6 m³ free gas per 80 L / 300 bar cylinder
  return {
    agentKey,
    agentLabel: a.label,
    concentration: C,
    quantity: Math.round(X),
    unit: "m³",
    cylinders,
    volume,
  };
}

/* ------------------------------ Extinguishers ---------------------------- */

export function calcExtinguishers(area: number, floors: number) {
  // BS 5306-8: min 26A cover; ~1 unit per 200 m², min 2 per floor, ≤30 m travel
  const perFloor = Math.max(2, Math.ceil(area / 200));
  const total = perFloor * floors;
  return {
    total,
    co2: Math.max(1, Math.round(total * 0.25)),
    water: Math.max(1, Math.round(total * 0.55)),
    foam: Math.max(1, Math.round(total * 0.2)),
  };
}

/* --------------------------------- Cost ---------------------------------- */

export type CostLine = { label: string; value: number };

export function calcCost(opts: {
  area: number;
  floors: number;
  sprinklers: SprinklerResult;
  detection: DetectionResult;
  suppression?: SuppressionResult;
  includeSprinklers: boolean;
  includeDetection: boolean;
  includeSuppression: boolean;
  includePassive: boolean;
}): { lines: CostLine[]; total: number } {
  const gross = opts.area * opts.floors;
  const lines: CostLine[] = [];

  if (opts.includeSprinklers) {
    // ~£28–40 /m² installed + pump/tank lump
    const rate = 34;
    const value = gross * rate + opts.sprinklers.tankVolume * 900 + 18000;
    lines.push({ label: "Sprinkler system", value });
  }
  if (opts.includeDetection) {
    const value =
      opts.detection.detectors * 95 +
      opts.detection.callPoints * 70 +
      opts.detection.sounders * 60 +
      opts.detection.zones * 400 +
      4500; // panel
    lines.push({ label: "Detection & alarm", value });
  }
  if (opts.includeSuppression && opts.suppression) {
    const agentRate =
      opts.suppression.unit === "kg"
        ? opts.suppression.quantity * 95
        : opts.suppression.quantity * 18;
    const value = agentRate + opts.suppression.cylinders * 1800 + 12000;
    lines.push({ label: "Gaseous suppression", value });
  }
  if (opts.includePassive) {
    // fire-stopping & compartmentation ~£11 /m²
    lines.push({ label: "Passive protection", value: gross * 11 + 3000 });
  }

  // Extinguishers always sensible to include as a small line
  const ext = calcExtinguishers(opts.area, opts.floors);
  lines.push({ label: "Extinguishers & signage", value: ext.total * 85 });

  const subtotal = lines.reduce((s, l) => s + l.value, 0);
  // Design, commissioning & certification 12%
  const designFee = subtotal * 0.12;
  lines.push({ label: "Design, commissioning & certification", value: designFee });

  const total = subtotal + designFee;
  return { lines, total: Math.round(total) };
}

export function gbp(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}
