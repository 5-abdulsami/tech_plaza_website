/** Plazas currently available in the app's plaza selector. */
export interface Plaza {
  name: string;
  area: string;
  /** The launch plaza is highlighted on the site. */
  launch?: boolean;
}

export const plazas: Plaza[] = [
  { name: 'Dubai Plaza', area: '6th Road, Murree Road', launch: true },
  { name: 'Umair Center', area: '6th Road, Satellite Town' },
  { name: 'Techno City II', area: '6th Road, Satellite Town' },
  { name: 'Noor Mobile Plaza', area: '6th Road, Satellite Town' },
  { name: 'Singapore Plaza', area: 'Bank Road, Saddar' },
  { name: 'Imperial Market', area: 'Raja Bazaar' },
];

/** Mirrors the app's product_categories table. */
export const categories = [
  'Mobile Phones',
  'Laptops',
  'Computers',
  'Tablets',
  'Gaming',
  'Accessories',
  'Audio',
];
