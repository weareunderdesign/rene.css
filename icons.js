// Fetches the canonical sprite once and inlines it so <use href="#name">
// resolves same-document. Single source of truth: renecss.org/icons.svg
(() => {
  const SPRITE = 'https://renecss.org/icons.svg';
  const inject = async () => {
    try {
      const r = await fetch(SPRITE);
      if (!r.ok) return;
      const t = await r.text();
      const wrap = document.createElement('div');
      wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
      wrap.setAttribute('aria-hidden', 'true');
      wrap.innerHTML = t;
      document.body.insertBefore(wrap, document.body.firstChild);
    } catch {}
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
