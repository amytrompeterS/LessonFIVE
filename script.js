document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  function applyTheme(theme){
    const isLight = theme === 'light';

    body.classList.toggle('light', isLight);
    body.classList.toggle('dark', !isLight);
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  const stored = localStorage.getItem('theme');
  if(stored === 'light') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  toggle.addEventListener('click', function(){
    const current = body.classList.contains('light') ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
});
