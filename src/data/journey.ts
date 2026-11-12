import type { ImageMetadata } from 'astro';
import type { IconName } from '@/components/ui/icons';
import home from '@/assets/screens/customer-home.png';
import product from '@/assets/screens/product-detail.png';
import shop from '@/assets/screens/shop-profile.png';
import chat from '@/assets/screens/chat.png';

export interface JourneyStep {
  icon: IconName;
  title: string;
  body: string;
  screen: ImageMetadata;
  alt: string;
}

/** The core customer loop: Discover → Product → Shop → Chat. */
export const journey: JourneyStep[] = [
  {
    icon: 'search',
    title: 'Discover',
    body: 'Pick a plaza, then search or filter by category and sort by price. You don’t need an account to look around.',
    screen: home,
    alt: 'Tech Plaza home screen with a plaza selector, search bar, category chips and product cards',
  },
  {
    icon: 'tag',
    title: 'Check the details',
    body: 'Swipe through real photos, read the description and see whether the price is fixed or open to offers.',
    screen: product,
    alt: 'Product page for a Dell Latitude laptop showing its price, photos and description',
  },
  {
    icon: 'store',
    title: 'Meet the shop',
    body: 'See where the shop is in the plaza, its rating, how many people follow it, and everything else it sells.',
    screen: shop,
    alt: 'Shop profile for Laptop Point in Dubai Plaza with its rating, about section and products',
  },
  {
    icon: 'message-circle',
    title: 'Chat, then visit',
    body: 'Ask about stock, condition or price. Every chat is linked to the product, so the shop knows exactly what you mean.',
    screen: chat,
    alt: 'Chat between a customer and Laptop Point about an HP EliteBook',
  },
];
