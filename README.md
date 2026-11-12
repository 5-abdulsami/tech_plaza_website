# Tech Plaza website

The public website for [Tech Plaza](https://techplaza.app): the marketing pages, the shop owner guide, the help centre, and the legal pages the mobile app and Google Play link to.

Built with [Astro](https://astro.build) as a fully static site. No backend, no tracking, and almost no client-side JavaScript (just the menu, scroll reveal and the how-it-works stepper).

## Pages

| URL | Source | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home: hero, how it works, features, shop owners, trust, plazas, FAQ |
| `/shop-owners` | `src/pages/shop-owners.astro` | Onboarding steps, tools, free-to-list section, owner FAQ |
| `/help` | `src/pages/help.astro` | Help centre with grouped FAQs and contact options |
| `/privacy` | `src/pages/privacy.md` | Privacy policy (needed for the Play Store listing) |
| `/terms` | `src/pages/terms.md` | Terms & conditions |
| `/delete-account` | `src/pages/delete-account.md` | Account deletion instructions (needed for the Play Store data safety form) |
| `/404` | `src/pages/404.astro` | Not found page |

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build into dist/
npm run preview   # serve the production build
```

## Project structure

```
src/
├── assets/            Images processed at build time (app screenshots, logo)
├── components/
│   ├── layout/        Header, Footer, PageHeader
│   ├── sections/      Home page sections (Hero, HowItWorks, Features, ...)
│   ├── shop-owners/   Shop owner page sections
│   └── ui/            Reusable building blocks (Button, Icon, PhoneFrame, FaqList, ...)
├── config/site.ts     Site name, URLs, contact email, Play Store link, navigation
├── data/              All page copy that is a list: features, FAQs, plazas, onboarding steps
├── layouts/           BaseLayout (SEO, header, footer) and LegalLayout (Markdown pages)
├── pages/             One file per route
├── scripts/           Small client scripts (scroll reveal)
└── styles/            Design tokens and global styles
public/                Files served as-is (favicons, share image, robots.txt, manifest)
scripts/               Build helpers (brand asset generator)
```

## Common changes

- **App goes live on Google Play:** set `app.playStoreUrl` in `src/config/site.ts`. Every download button switches from "Coming soon" to a real link.
- **Contact email:** `contact.email` in `src/config/site.ts`.
- **Add or edit a plaza, category, FAQ, feature or onboarding step:** edit the matching file in `src/data/`.
- **Edit a legal page:** edit the Markdown file in `src/pages/` and update `legalUpdated` in `src/config/site.ts`.
- **Add an icon:** import it from `lucide-static` in `src/components/ui/icons.ts` and add it to the map.
- **Change the logo:** replace `src/assets/brand/logo.png`, then run `npm run brand` to regenerate the favicons, app icons and `public/og-image.png`.
- **Update a screenshot:** replace the PNG in `src/assets/screens/` (493 × 1071, phone screen only, without the Android navigation bar). Astro converts it to responsive WebP at build time.

## Design

Colours, type and spacing live in `src/styles/tokens.css` and mirror the app's `AppTheme` (`tech_plaza/lib/app/utils/app_theme.dart`): brand navy `#111E73`, accent amber `#F59E0B`, the slate neutral scale and Inter. Motion respects `prefers-reduced-motion`, and content stays visible if JavaScript is off.

## Deployment

The site is deployed on [Vercel](https://vercel.com) from the `main` branch. Every push to `main` deploys to production, and pull requests get preview URLs. `vercel.json` sets clean URLs, security headers, long-term caching for hashed assets, and a few redirects (`/privacy-policy`, `/terms-and-conditions`, `/support`).

### Domain (name.com)

In Vercel, open the project → **Settings → Domains**, add `techplaza.app` and `www.techplaza.app`, and set `techplaza.app` as the primary domain. Then in name.com → **Manage DNS Records**, add the records Vercel shows. They are normally:

| Type | Host | Answer | TTL |
| --- | --- | --- | --- |
| A | *(leave empty)* | `76.76.21.21` | 300 |
| CNAME | `www` | `cname.vercel-dns.com` | 300 |

Delete any other A, AAAA or CNAME records for the root or `www` (for example, name.com parking records). Vercel issues the HTTPS certificate automatically. `.app` domains only work over HTTPS, so the site won't open until the certificate is ready, usually within minutes of DNS updating.

### Support email

`support@techplaza.app` is used across the site. In name.com, use **Email Forwarding** to forward it to an inbox you check.

## Windows note

On Windows, Vite drops component CSS and scripts if the project path starts with a lowercase drive letter (for example `c:\` in some VS Code terminals). `astro.config.mjs` normalises this, so builds work from any terminal.
