import type { IconName } from '@/components/ui/icons';

export interface OnboardingStep {
  icon: IconName;
  title: string;
  body: string;
}

/** How a shop goes from sign-up to live, mirroring the app's shop status gate. */
export const onboarding: OnboardingStep[] = [
  {
    icon: 'smartphone',
    title: 'Sign up as a shop owner',
    body: 'Download the app, choose “Shop owner” and register with email or Google.',
  },
  {
    icon: 'id-card',
    title: 'Add your shop and CNIC',
    body: 'Enter your shop name, plaza and shop number, then upload your CNIC so we can verify you.',
  },
  {
    icon: 'clock',
    title: 'We review your shop',
    body: 'Our team checks your details. If something is missing, we tell you exactly what to fix.',
  },
  {
    icon: 'image-plus',
    title: 'List your products',
    body: 'Add photos, a price and a description. Each listing goes live once it has been reviewed.',
  },
  {
    icon: 'messages',
    title: 'Reply to customers',
    body: 'Buyers find your products and message you. Answer in the app and welcome them to your shop.',
  },
];

export interface Plan {
  name: string;
  price: number;
  activeListings: number;
  hiddenListings: number;
  highlight?: boolean;
}

/** Source of truth in the app: lib/app/models/subscription_model.dart. */
export const plans: Plan[] = [
  { name: 'Basic', price: 500, activeListings: 10, hiddenListings: 20 },
  { name: 'Standard', price: 1500, activeListings: 20, hiddenListings: 20, highlight: true },
  { name: 'Premium', price: 3000, activeListings: 30, hiddenListings: 20 },
];

/** Payment methods accepted when paid plans are switched on. */
export const paymentMethods = ['Easypaisa', 'JazzCash', 'bank transfer'];
