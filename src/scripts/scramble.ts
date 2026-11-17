/**
 * Split-flap style text: when an element with `data-scramble` scrolls into
 * view, its letters cycle through random characters and settle left to right.
 * The real text is in the HTML from the start, so it is accessible and works
 * without JavaScript.
 */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function run(el: HTMLElement, delay: number): void {
  const final = el.dataset.text ?? el.textContent ?? '';
  el.dataset.text = final;
  const frames = 18;
  let frame = 0;

  const tick = () => {
    const settled = Math.floor((frame / frames) * final.length);
    el.textContent = [...final]
      .map((ch, i) => (i < settled || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
      .join('');
    frame += 1;
    if (frame <= frames) window.setTimeout(tick, 40);
    else el.textContent = final;
  };

  window.setTimeout(tick, delay);
}

export function initScramble(): void {
  const items = [...document.querySelectorAll<HTMLElement>('[data-scramble]')];
  if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        run(el, Number(el.dataset.scrambleDelay ?? 0));
        observer.unobserve(el);
      }
    },
    { threshold: 0.6 },
  );

  items.forEach((el) => {
    // Lock the width so the row doesn't jitter while letters change.
    el.style.minWidth = `${el.offsetWidth}px`;
    observer.observe(el);
  });
}
