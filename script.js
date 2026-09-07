document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  function applyTheme(theme){
    if(theme === 'light'){
      body.classList.remove('dark');
      body.classList.add('light');
      toggle.textContent = 'Dark Mode';
      toggle.setAttribute('aria-pressed','true');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
      toggle.textContent = 'Light Mode';
      toggle.setAttribute('aria-pressed','false');
    }
  }

  // Initialize theme (dark by default)
  const stored = localStorage.getItem('theme');
  if(stored){
    applyTheme(stored);
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
