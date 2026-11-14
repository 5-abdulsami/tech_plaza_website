/**
 * Keeps the address bar clean: in-page section links (e.g. "/#features")
 * scroll smoothly without adding "#features" to the URL. Links still work
 * without JavaScript, because the hrefs keep their hash.
 */
export function initCleanAnchors(): void {
  const scrollTo = (id: string, smooth: boolean): boolean => {
    const target = document.getElementById(decodeURIComponent(id));
    if (!target) return false;
    target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    // Move focus for keyboard and screen reader users without jumping again.
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    return true;
  };

  const cleanUrl = () => history.replaceState(history.state, '', location.pathname + location.search);

  // Arrived with a hash (e.g. from another page): scroll there, then drop it.
  if (location.hash.length > 1) {
    const id = location.hash.slice(1);
    requestAnimationFrame(() => {
      if (scrollTo(id, false)) cleanUrl();
    });
  }

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link) return;

    const url = new URL(link.href, location.href);
    const samePage = url.origin === location.origin && url.pathname === location.pathname;
    if (!samePage || url.hash.length < 2) return;

    if (scrollTo(url.hash.slice(1), true)) {
      e.preventDefault();
      cleanUrl();
    }
  });
}
