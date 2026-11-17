/**
 * Adds `.is-visible` to `[data-reveal]` elements as they scroll into view.
 * Elements are only hidden while the `.js` class is on <html>, so content
 * stays visible if scripts fail.
 *
 * "wipe" reveals start fully clipped, which gives them no visible area, so
 * their parent is observed instead.
 */
export function initReveal(): void {
  const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const targets = new Map<Element, HTMLElement[]>();
  for (const el of items) {
    const target = el.dataset.reveal === 'wipe' ? (el.parentElement ?? el) : el;
    targets.set(target, [...(targets.get(target) ?? []), el]);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        targets.get(entry.target)?.forEach((el) => el.classList.add('is-visible'));
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );

  targets.forEach((_, target) => observer.observe(target));
}
