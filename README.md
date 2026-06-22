# SurturFire Fire Protection

A clean, black-and-red marketing site for a UK fire protection contractor, featuring an in-depth, interactive **fire protection calculator**.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, **TypeScript** and **Framer Motion** for all animation.

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero with animated embers, services, process, featured projects, CTA |
| `/services` | Six fire-protection disciplines with detail panels |
| `/projects` | Six case studies across sectors with key stats |
| `/calculator` | Interactive engineering calculator (see below) |
| `/about` | Company story, values, accreditations |
| `/contact` | Animated enquiry form + contact details |

## The calculator

`/calculator` estimates, live as you adjust inputs:

- **Sprinkler hydraulics** — design density × area of operation → system flow, pump duty, water store and head count (BS EN 12845)
- **Detection & alarm** — detector / call-point / sounder / zone counts (BS 5839-1)
- **Gaseous suppression** — clean-agent mass (Novec 1230, FM-200) or inert-gas volume (IG-55) from the standard ISO 14520 / NFPA 2001 formulas
- **Portable extinguishers** — type split and counts (BS 5306-8)

All formulas live in [`lib/fire.ts`](lib/fire.ts). Figures are indicative for early planning only — not a substitute for an engineered design.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Deployed on Vercel. Push to `main` to trigger an automatic deployment.
