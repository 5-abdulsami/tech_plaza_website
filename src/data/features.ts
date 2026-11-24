import type { IconName } from '@/components/ui/icons';

export interface Feature {
  icon: IconName;
  /** Short spec-sheet key, e.g. "Access". */
  key: string;
  title: string;
  body: string;
}

export const customerFeatures: Feature[] = [
  {
    icon: 'eye',
    key: 'Access',
    title: 'Browse without signing up',
    body: 'Look through every shop and product as a guest. Make an account only when you want to chat, save or follow.',
  },
  {
    icon: 'building',
    key: 'Coverage',
    title: 'Every plaza in one app',
    body: 'Switch between Rawalpindi’s tech plazas, or browse all of them at once.',
  },
  {
    icon: 'sliders',
    key: 'Search',
    title: 'Search, filter, sort',
    body: 'Find products or shops by name, narrow down by category and sort by price.',
  },
  {
    icon: 'messages',
    key: 'Messaging',
    title: 'Real-time chat',
    body: 'Message the shop directly, with read receipts and the product attached.',
  },
  {
    icon: 'heart',
    key: 'Shortlist',
    title: 'Save favourites',
    body: 'Keep a shortlist and come back to compare before you decide.',
  },
  {
    icon: 'star',
    key: 'Reputation',
    title: 'Follow and rate shops',
    body: 'Follow the shops you trust, and rate them so other buyers know too.',
  },
  {
    icon: 'bell',
    key: 'Alerts',
    title: 'Reply notifications',
    body: 'Get a push notification as soon as a shop replies.',
  },
  {
    icon: 'badge-check',
    key: 'Verification',
    title: 'Verified shops only',
    body: 'Every shop is checked and every listing is reviewed before you see it.',
  },
];

export const ownerFeatures: Feature[] = [
  {
    icon: 'store',
    key: 'Storefront',
    title: 'Your own storefront',
    body: 'Logo, location in the plaza, description and all your products on one shop page.',
  },
  {
    icon: 'image-plus',
    key: 'Listings',
    title: 'Listings that sell',
    body: 'Add up to 5 photos per product, set a price, and mark it negotiable or fixed.',
  },
  {
    icon: 'eye-off',
    key: 'Inventory',
    title: 'Live or hidden in one tap',
    body: 'Sold out? Hide a listing and bring it back later without typing it again.',
  },
  {
    icon: 'messages',
    key: 'Messaging',
    title: 'Customer chats',
    body: 'Buyers message you about a specific product, and you reply from your phone.',
  },
  {
    icon: 'dashboard',
    key: 'Dashboard',
    title: 'Simple dashboard',
    body: 'Live listings, unread chats, your rating and your followers at a glance.',
  },
  {
    icon: 'users',
    key: 'Reputation',
    title: 'Followers and ratings',
    body: 'Build a reputation customers can see before they walk in.',
  },
];

export const trustPoints: Feature[] = [
  {
    icon: 'id-card',
    key: 'Identity',
    title: 'Identity-checked shops',
    body: 'Shop owners verify with their CNIC, and one CNIC can run only one active shop.',
  },
  {
    icon: 'file-check',
    key: 'Listings',
    title: 'Every product reviewed',
    body: 'Our team checks new listings before customers can see them.',
  },
  {
    icon: 'lock',
    key: 'Documents',
    title: 'Private documents stay private',
    body: 'CNIC images are kept in private storage. Only the shop owner and our admins can open them.',
  },
  {
    icon: 'shield-check',
    key: 'Contact',
    title: 'Your contact details are protected',
    body: 'Other users can’t see your email or phone number. You talk through in-app chat.',
  },
];
