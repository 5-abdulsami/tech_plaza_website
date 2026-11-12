export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: Faq[];
}

const general: Faq[] = [
  {
    q: 'What is Tech Plaza?',
    a: 'Tech Plaza is an app that lists the electronics shops in Rawalpindi’s tech plazas and the products they sell. You can browse, compare prices and chat with a shop before you visit.',
  },
  {
    q: 'Can I buy or pay for products in the app?',
    a: 'No. Tech Plaza is for finding products and talking to shops. You agree the final price with the shop and buy in person, so you can check the item before you pay.',
  },
  {
    q: 'Do I need an account?',
    a: 'Not to browse. You can look at every shop and product as a guest. You need a free account to chat with shops, save favourites, follow shops or leave a rating.',
  },
  {
    q: 'Is the app free?',
    a: 'Yes, for customers it is completely free. Shops can also list for free while we launch.',
  },
  {
    q: 'Which plazas are on Tech Plaza?',
    a: 'We are starting with Dubai Plaza, Rawalpindi, and the app already includes Umair Center, Techno City II, Noor Mobile Plaza, Singapore Plaza and Imperial Market. More will follow.',
  },
  {
    q: 'How do I know a shop is genuine?',
    a: 'Every shop owner verifies their identity with a CNIC, and our team approves the shop before it appears. New products are reviewed too. Shop ratings from other customers help as well.',
  },
];

const customers: Faq[] = [
  {
    q: 'Is the listed price final?',
    a: 'A price marked “Negotiable” is open to offers in chat. A “Fixed” price is what the shop charges. Prices and stock can change, so confirm with the shop before you go.',
  },
  {
    q: 'How do I contact a shop?',
    a: 'Open a product and tap the message button. The chat is linked to that product, and you get a notification when the shop replies.',
  },
  {
    q: 'Can shops see my phone number or email?',
    a: 'No. Shops see your name and profile photo in chat. Your email and phone number are not shown to other users.',
  },
  {
    q: 'How do ratings work?',
    a: 'Signed-in customers can give a shop 1 to 5 stars, and can change their rating later. We remove ratings that look fake or abusive.',
  },
];

const owners: Faq[] = [
  {
    q: 'What do I need to list my shop?',
    a: 'A physical shop in one of our plazas, your CNIC, and an Android phone. Sign up in the app as a shop owner and fill in your shop details.',
  },
  {
    q: 'How long does approval take?',
    a: 'We aim to review new shops within one to two working days. You can see your status in the app at any time, and if we need changes we tell you why.',
  },
  {
    q: 'Why are my products reviewed?',
    a: 'So customers only see real, accurately described items. Most listings are approved quickly. If one is rejected, you get feedback and can edit it.',
  },
  {
    q: 'How much does it cost?',
    a: 'Listing is free while we launch, and every approved shop gets the Basic plan. Paid plans with more listings may be introduced later. We will tell you well before anything changes.',
  },
  {
    q: 'How many products can I list?',
    a: 'The Basic plan includes 10 live listings, plus room to keep 20 hidden ones. Hidden listings stay saved and can go live again in one tap.',
  },
  {
    q: 'Can I see who follows my shop?',
    a: 'You see how many people follow your shop. To protect customers’ privacy, follower names are not shown.',
  },
];

const account: Faq[] = [
  {
    q: 'I forgot my password',
    a: 'On the sign-in screen, tap “Forgot password” and we will email you a link to set a new one. If you signed up with Google, use “Continue with Google” instead.',
  },
  {
    q: 'How do I turn off notifications?',
    a: 'Go to Settings in the app and switch off Push notifications. You can also manage them in your phone’s settings.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Follow the steps on our account deletion page. We delete your account and the data linked to it, except anything we must keep by law.',
  },
];

/** Short list for the home page. */
export const homeFaqs: Faq[] = general;

/** Grouped list for the help centre. */
export const helpFaqs: FaqGroup[] = [
  { id: 'general', title: 'General', items: general },
  { id: 'customers', title: 'For customers', items: customers },
  { id: 'shop-owners', title: 'For shop owners', items: owners },
  { id: 'account', title: 'Account & privacy', items: account },
];

export const ownerFaqs: Faq[] = owners;
