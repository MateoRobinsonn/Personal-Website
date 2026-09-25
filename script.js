const themeToggle = document.querySelector('#theme-toggle');
const revealItems = document.querySelectorAll('.reveal');

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  const isWinter = theme === 'winter';
  themeToggle.textContent = isWinter ? 'Autumn Mode' : 'Winter Mode';
  themeToggle.setAttribute('aria-label', `Switch to ${isWinter ? 'autumn' : 'winter'} theme`);
};

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'autumn' ? 'winter' : 'autumn';
  setTheme(nextTheme);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
setTheme(document.body.dataset.theme || 'autumn');
