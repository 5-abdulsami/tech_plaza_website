/**
 * Generates favicons, app icons and the social share image into /public
 * from src/assets. Run after changing the logo: `npm run brand`.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const logo = `${root}src/assets/brand/logo.png`;
const screen = `${root}src/assets/screens/customer-home.png`;
const out = `${root}public/`;

const BRAND = '#111e73';
const DEEP = '#12324e';

await mkdir(out, { recursive: true });

const png = (size) => sharp(logo).resize(size, size).png().toBuffer();

/** ICO that wraps PNG images (supported by every current browser). */
function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })));
await writeFile(`${out}favicon.ico`, toIco(icoImages));

await writeFile(`${out}icon-192.png`, await png(192));
await writeFile(`${out}icon-512.png`, await png(512));

// Apple touch icons must be opaque.
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } })
  .composite([{ input: await png(160), gravity: 'center' }])
  .png()
  .toFile(`${out}apple-touch-icon.png`);

// Social share image, 1200×630.
const W = 1200;
const H = 630;
const phoneW = 280;
const phoneH = Math.round((phoneW * 1071) / 493);
const screenW = phoneW - 20;
const screenH = phoneH - 20;

const background = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="${DEEP}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.35" r="0.6">
      <stop offset="0" stop-color="#f59e0b" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g font-family="Inter, 'Segoe UI', Arial, sans-serif" fill="#ffffff">
    <text x="80" y="300" font-size="76" font-weight="700" letter-spacing="-2">Tech Plaza</text>
    <text x="80" y="370" font-size="38" font-weight="600" fill="#f59e0b">Know before you go</text>
    <text x="80" y="440" font-size="26" fill="#ffffff" fill-opacity="0.75">The electronics shops of Rawalpindi’s</text>
    <text x="80" y="478" font-size="26" fill="#ffffff" fill-opacity="0.75">tech plazas, in one app.</text>
    <text x="80" y="566" font-size="22" font-weight="600" fill="#ffffff" fill-opacity="0.9">techplaza.app</text>
  </g>
  <rect x="${W - phoneW - 90}" y="70" width="${phoneW}" height="${phoneH}" rx="44" fill="#0b1120"/>
</svg>`);

const roundedMask = Buffer.from(
  `<svg width="${screenW}" height="${screenH}"><rect width="${screenW}" height="${screenH}" rx="34" fill="#fff"/></svg>`,
);
const screenImg = await sharp(screen)
  .resize(screenW, screenH, { fit: 'cover', position: 'top' })
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(background)
  .composite([
    { input: await png(120), left: 80, top: 110 },
    { input: screenImg, left: W - phoneW - 90 + 10, top: 80 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${out}og-image.png`);

console.log('Brand assets written to public/');
