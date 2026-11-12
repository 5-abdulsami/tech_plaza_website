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
