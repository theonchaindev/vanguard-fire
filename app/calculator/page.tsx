"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import AnimatedNumber from "@/components/AnimatedNumber";
import {
  hazardClasses,
  detectorTypes,
  agents,
  calcSprinklers,
  calcDetection,
  calcSuppression,
  calcExtinguishers,
  calcCost,
  gbp,
  type HazardKey,
  type DetectorKey,
  type AgentKey,
} from "@/lib/fire";

export default function CalculatorPage() {
  // Building
  const [area, setArea] = useState(1500);
  const [height, setHeight] = useState(4);
  const [floors, setFloors] = useState(2);
  const [hazard, setHazard] = useState<HazardKey>("OH2");

  // Systems toggles
  const [useSprinklers, setUseSprinklers] = useState(true);
  const [useDetection, setUseDetection] = useState(true);
  const [useSuppression, setUseSuppression] = useState(false);
  const [usePassive, setUsePassive] = useState(true);

  // Detection
  const [detector, setDetector] = useState<DetectorKey>("smoke");

  // Suppression
  const [agent, setAgent] = useState<AgentKey>("novec");
  const [roomVolume, setRoomVolume] = useState(300);
  const [temp, setTemp] = useState(20);

  const sprinklers = useMemo(() => calcSprinklers(area, hazard), [area, hazard]);
  const detection = useMemo(
    () => calcDetection(area, floors, detector),
    [area, floors, detector]
  );
  const suppression = useMemo(
    () => calcSuppression(roomVolume, agent, temp),
    [roomVolume, agent, temp]
  );
  const extinguishers = useMemo(
    () => calcExtinguishers(area, floors),
    [area, floors]
  );
  const cost = useMemo(
    () =>
      calcCost({
        area,
        floors,
        sprinklers,
        detection,
        suppression,
        includeSprinklers: useSprinklers,
        includeDetection: useDetection,
        includeSuppression: useSuppression,
        includePassive: usePassive,
      }),
    [
      area,
      floors,
      sprinklers,
      detection,
      suppression,
      useSprinklers,
      useDetection,
      useSuppression,
      usePassive,
    ]
  );

  return (
    <>
      <PageHeader
        eyebrow="Free tool"
        title="Fire protection calculator"
        subtitle="Estimate sprinkler water demand, detection coverage, suppression agent volume, extinguisher counts and indicative cost. Indicative only — always confirm with a fire engineer."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-28">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* -------------------------- INPUTS -------------------------- */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <Panel title="The building">
              <SliderRow
                label="Floor area (per storey)"
                value={area}
                unit="m²"
                min={50}
                max={20000}
                step={50}
                onChange={setArea}
              />
              <SliderRow
                label="Ceiling height"
                value={height}
                unit="m"
                min={2.4}
                max={14}
                step={0.1}
                decimals={1}
                onChange={setHeight}
              />
              <SliderRow
                label="Number of storeys"
                value={floors}
                unit=""
                min={1}
                max={40}
                step={1}
                onChange={setFloors}
              />

              <div className="mt-5">
                <Label>Occupancy / hazard class</Label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {(Object.keys(hazardClasses) as HazardKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setHazard(k)}
                      className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                        hazard === k
                          ? "border-flame bg-flame/15 text-white"
                          : "border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      <span className="block font-semibold">
                        {hazardClasses[k].label}
                      </span>
                      <span className="block text-[10px] text-white/40 leading-tight">
                        {hazardClasses[k].note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Systems to include">
              <Toggle
                label="Automatic sprinklers"
                on={useSprinklers}
                onChange={setUseSprinklers}
              />
              <Toggle
                label="Detection & alarm"
                on={useDetection}
                onChange={setUseDetection}
              />
              <Toggle
                label="Gaseous suppression"
                on={useSuppression}
                onChange={setUseSuppression}
              />
              <Toggle
                label="Passive protection"
                on={usePassive}
                onChange={setUsePassive}
              />
            </Panel>

            <AnimatePresence>
              {useDetection && (
                <Collapse>
                  <Panel title="Detection">
                    <Label>Detector type</Label>
                    <div className="mt-2 space-y-2">
                      {(Object.keys(detectorTypes) as DetectorKey[]).map((k) => (
                        <button
                          key={k}
                          onClick={() => setDetector(k)}
                          className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                            detector === k
                              ? "border-flame bg-flame/15"
                              : "border-white/10 text-white/60 hover:border-white/30"
                          }`}
                        >
                          {detectorTypes[k].label}
                          <span className="block text-[11px] text-white/40">
                            {detectorTypes[k].note}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {useSuppression && (
                <Collapse>
                  <Panel title="Gaseous suppression">
                    <Label>Clean agent</Label>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      {(Object.keys(agents) as AgentKey[]).map((k) => (
                        <button
                          key={k}
                          onClick={() => setAgent(k)}
                          className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                            agent === k
                              ? "border-flame bg-flame/15"
                              : "border-white/10 text-white/60 hover:border-white/30"
                          }`}
                        >
                          {agents[k].label}
                          <span className="block text-[11px] text-white/40">
                            {agents[k].note} · {agents[k].concentration}% design
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <SliderRow
                        label="Protected room volume"
                        value={roomVolume}
                        unit="m³"
                        min={20}
                        max={5000}
                        step={10}
                        onChange={setRoomVolume}
                      />
                      <SliderRow
                        label="Design temperature"
                        value={temp}
                        unit="°C"
                        min={0}
                        max={50}
                        step={1}
                        onChange={setTemp}
                      />
                    </div>
                  </Panel>
                </Collapse>
              )}
            </AnimatePresence>
          </div>

          {/* -------------------------- RESULTS -------------------------- */}
          <div className="space-y-6">
            {/* Headline cost */}
            <motion.div
              layout
              className="relative overflow-hidden rounded-3xl border border-flame/25 p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_-20%,rgba(225,29,42,0.35),transparent_55%)]" />
              <div className="absolute inset-0 bg-grid opacity-25" />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-flame">
                  Indicative installed cost
                </p>
                <div className="mt-2 font-display text-5xl md:text-6xl font-bold text-gradient-fire">
                  <AnimatedNumber value={cost.total} prefix="£" />
                </div>
                <p className="mt-2 text-sm text-white/50">
                  {(area * floors).toLocaleString("en-GB")} m² gross ·{" "}
                  {hazardClasses[hazard].label} · budgetary estimate ±25%
                </p>

                <div className="mt-6 space-y-2">
                  {cost.lines.map((l) => (
                    <div
                      key={l.label}
                      className="flex items-center justify-between border-b border-white/5 pb-2 text-sm"
                    >
                      <span className="text-white/60">{l.label}</span>
                      <span className="font-medium">{gbp(l.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sprinklers */}
            <AnimatePresence>
              {useSprinklers && (
                <Collapse>
                  <ResultCard
                    title="Sprinkler hydraulics"
                    standard="BS EN 12845"
                  >
                    <Metric
                      label="System demand"
                      value={sprinklers.systemFlow}
                      suffix=" L/min"
                    />
                    <Metric
                      label="Design flow (+hose)"
                      value={sprinklers.designFlow}
                      suffix=" L/min"
                    />
                    <Metric
                      label="Pump duty"
                      value={sprinklers.pumpDuty}
                      suffix=" L/min"
                    />
                    <Metric
                      label="Water store"
                      value={sprinklers.tankVolume}
                      decimals={1}
                      suffix=" m³"
                    />
                    <Metric
                      label="Supply duration"
                      value={sprinklers.duration}
                      suffix=" min"
                    />
                    <Metric
                      label="Sprinkler heads"
                      value={sprinklers.heads}
                    />
                    <Detail>
                      Based on a design density of{" "}
                      {hazardClasses[hazard].density} mm/min over an assumed area
                      of operation of {hazardClasses[hazard].amao} m².
                    </Detail>
                  </ResultCard>
                </Collapse>
              )}
            </AnimatePresence>

            {/* Detection */}
            <AnimatePresence>
              {useDetection && (
                <Collapse>
                  <ResultCard
                    title="Detection & alarm"
                    standard="BS 5839-1"
                  >
                    <Metric label="Detectors" value={detection.detectors} />
                    <Metric
                      label="Manual call points"
                      value={detection.callPoints}
                    />
                    <Metric label="Sounders" value={detection.sounders} />
                    <Metric label="Detection zones" value={detection.zones} />
                    <Detail>
                      {detectorTypes[detector].label} covering{" "}
                      {detectorTypes[detector].coverage} m² each, across {floors}{" "}
                      storey{floors > 1 ? "s" : ""}.
                    </Detail>
                  </ResultCard>
                </Collapse>
              )}
            </AnimatePresence>

            {/* Suppression */}
            <AnimatePresence>
              {useSuppression && (
                <Collapse>
                  <ResultCard
                    title="Gaseous suppression"
                    standard="ISO 14520 / NFPA 2001"
                  >
                    <Metric
                      label={`${suppression.agentLabel} required`}
                      value={suppression.quantity}
                      suffix={` ${suppression.unit}`}
                    />
                    <Metric
                      label="Design concentration"
                      value={suppression.concentration}
                      decimals={1}
                      suffix="%"
                    />
                    <Metric
                      label="Cylinders (indicative)"
                      value={suppression.cylinders}
                    />
                    <Metric
                      label="Protected volume"
                      value={suppression.volume}
                      suffix=" m³"
                    />
                    <Detail>
                      {agents[agent].type === "halocarbon"
                        ? "Halocarbon mass from W = (V/s)·(C/(100−C)) at the selected temperature."
                        : "Inert agent volume from X = 2.303·(Vs/S)·log₁₀(100/(100−C))."}
                    </Detail>
                  </ResultCard>
                </Collapse>
              )}
            </AnimatePresence>

            {/* Extinguishers — always shown */}
            <ResultCard title="Portable extinguishers" standard="BS 5306-8">
              <Metric label="Total units" value={extinguishers.total} />
              <Metric label="Water / spray" value={extinguishers.water} />
              <Metric label="CO₂" value={extinguishers.co2} />
              <Metric label="Foam" value={extinguishers.foam} />
              <Detail>
                Minimum provision with ≤30 m travel distance to the nearest
                extinguisher on each storey.
              </Detail>
            </ResultCard>

            <p className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-xs text-white/40 leading-relaxed">
              ⚠︎ This calculator provides indicative budgetary figures using
              simplified British and international standard formulas. It is not a
              substitute for a full hydraulic calculation, fire risk assessment
              or engineered design by a competent fire engineer. Vanguard Fire
              Protection accepts no liability for decisions made on these figures.
            </p>

            <a
              href="/contact"
              className="block rounded-2xl bg-flame px-7 py-5 text-center font-semibold text-white hover:bg-ember transition-colors glow-ring"
            >
              Turn this estimate into an engineered design →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------ UI helpers ------------------------------- */

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
      <h3 className="font-display uppercase tracking-tight text-lg">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-medium uppercase tracking-wide text-white/50">
      {children}
    </label>
  );
}

function SliderRow({
  label,
  value,
  unit,
  min,
  max,
  step,
  decimals = 0,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  decimals?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <span className="font-display text-sm text-flame">
          {value.toLocaleString("en-GB", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
          {unit && <span className="text-white/40"> {unit}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-flame cursor-pointer"
      />
    </div>
  );
}

function Toggle({
  label,
  on,
  onChange,
}: {
  label: string;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="flex w-full items-center justify-between py-2.5 text-left"
    >
      <span className={on ? "text-white" : "text-white/50"}>{label}</span>
      <span
        className={`relative h-6 w-11 rounded-full transition-colors ${
          on ? "bg-flame" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            on ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}

function Collapse({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

function ResultCard({
  title,
  standard,
  children,
}: {
  title: string;
  standard: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/8 bg-white/[0.02] p-7"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl uppercase tracking-tight">
          {title}
        </h3>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/45">
          {standard}
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
        {children}
      </div>
    </motion.div>
  );
}

function Metric({
  label,
  value,
  suffix = "",
  decimals = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <div>
      <div className="font-display text-2xl font-bold">
        <AnimatedNumber value={value} decimals={decimals} suffix={suffix} />
      </div>
      <div className="mt-0.5 text-xs text-white/45">{label}</div>
    </div>
  );
}

function Detail({ children }: { children: React.ReactNode }) {
  return (
    <p className="col-span-2 sm:col-span-3 mt-1 text-xs leading-relaxed text-white/40">
      {children}
    </p>
  );
}
