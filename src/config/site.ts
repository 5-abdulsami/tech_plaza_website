/**
 * Site-wide settings. Change values here, not in components.
 */
export const site = {
  name: 'Tech Plaza',
  tagline: 'Discover Tech Near You',
  description:
    'Tech Plaza puts the electronics shops of Rawalpindi’s tech plazas on your phone. Browse phones, laptops and accessories, compare prices, and chat with the shop before you visit.',
  url: 'https://techplaza.app',
  locale: 'en_PK',
  city: 'Rawalpindi',
  /** Shown on legal pages. */
  legalUpdated: '12 November 2026',
  contact: {
    email: 'support@techplaza.app',
  },
  app: {
    androidPackage: 'com.samionyx.tech_plaza',
    /**
     * Set this to the Play Store listing URL once the app is published.
     * While it is null, download buttons show "Coming soon".
     */
    playStoreUrl: null as string | null,
  },
} as const;

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Plazas', href: '/#plazas' },
  { label: 'For shops', href: '/shop-owners' },
  { label: 'Help', href: '/help' },
] as const;

export const footerNav = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Features', href: '/#features' },
      { label: 'Plazas', href: '/#plazas' },
      { label: 'Trust & safety', href: '/#trust' },
    ],
  },
  {
    title: 'Shop owners',
    links: [
      { label: 'List your shop', href: '/shop-owners' },
      { label: 'How approval works', href: '/shop-owners#onboarding' },
      { label: 'Plans', href: '/shop-owners#plans' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', href: '/help' },
      { label: 'Contact us', href: '/help#contact' },
      { label: 'Delete your account', href: '/delete-account' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms & conditions', href: '/terms' },
    ],
  },
] as const;
