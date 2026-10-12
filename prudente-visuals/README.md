# Prudente Visuals

React + Vite + TypeScript frontend with Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Develop

Run `npm install`, then `npm run dev`. Run `npm run build` for the production bundle in `dist`.

## Content

Update service and project data in `src/data/content.ts`. All portfolio entries are clearly labeled demonstration concepts using reference photography from Unsplash. Replace them with verified work, project years, and approved image assets. The typographic PV wordmark is a temporary identity. Verified contact details belong in `src/pages/Contact.tsx`.

## Inquiry integration

Copy `.env.example` to `.env.local` and set `VITE_INQUIRY_ENDPOINT` to an HTTPS endpoint accepting a JSON POST. The payload fields are `name`, `email`, `phone`, `company`, `service`, `budget`, `timeline`, and `description`. Return HTTP 2xx only after accepting the inquiry; other responses show a failure. Configure CORS for the site origin. Implement server-side validation, abuse protection, and email delivery on your backend. Never put secret API keys in Vite environment variables.

Without an endpoint the form validates inputs, explicitly reports that nothing was sent, retains entered details, and allows a local brief download. Personal data is not stored in browser storage.

## Hosting

Serve `dist` and configure history fallback to `index.html` for all application routes. Fonts and placeholder images use external Google Fonts and Unsplash resources. Replace them with self-hosted production assets when supplied. Page titles and descriptions update with routes; the base HTML has Open Graph metadata. For per-route social crawler metadata, add prerendering during backend integration.
