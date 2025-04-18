import { SELECTORS, CLASSES } from '../const.js'

export function initChangeTheme() {
  SELECTORS.changeThemeButton.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme');
    const changeTheme =
      currentTheme === 'dark' ? 'white' : 'dark';
    document.documentElement.setAttribute(
      'data-theme',
      changeTheme
    );
    localStorage.setItem('theme', changeTheme);
  });

  const getTheme = localStorage.getItem('theme');

  document.documentElement.setAttribute('data-theme', getTheme);
};