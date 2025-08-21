export function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle') as HTMLInputElement | null;
  const logo = document.getElementById('site-logo') as HTMLImageElement | null;
  const icon = document.getElementById('dark-mode-icon') as HTMLImageElement | null;

  const saved = localStorage.getItem('site_mode') || 'light';

  document.documentElement.setAttribute('data-theme', saved);
  if (logo) logo.src = saved === 'dark' ? logo.dataset.dark! : logo.dataset.light!;
  if (icon) icon.src = saved === 'dark' ? icon.dataset.dark! : icon.dataset.light!;
  if (toggle) toggle.checked = saved === 'dark';

  toggle?.addEventListener('change', () => {
    const mode = toggle.checked ? 'dark' : 'light';
    localStorage.setItem('site_mode', mode);
    document.documentElement.setAttribute('data-theme', mode);
    if (logo) logo.src = mode === 'dark' ? logo.dataset.dark! : logo.dataset.light!;
    if (icon) icon.src = mode === 'dark' ? icon.dataset.dark! : icon.dataset.light!;
  });
}
