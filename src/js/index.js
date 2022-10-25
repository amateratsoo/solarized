import { darkTheme, lightTheme } from './themes.js';

const browserIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const favicon = document.querySelector('.favicon');

window.addEventListener('load', () => {
  const faviconType = browserIsDarkMode ? 'dark' : 'light';
  favicon.setAttribute('href', `public/icons/favicon-${faviconType}-scheme.png`);
});

const themeToogle = document.querySelector('.display-mode');
const passwordInput = document.querySelector('#password');
const showHidePasswordIcon = document.querySelector('.with-picture i');
const formCheckbox = document.querySelector('#keep-me-logged-in');

let isDarkTheme = false;

themeToogle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  const darkThemeWrapper = document.querySelector('.dark-theme-wrapper');
  const themeIcon = document.querySelector('.display-mode i');

  if (isDarkTheme) {
    themeIcon.setAttribute('class', 'ph-sun-bold');

    darkThemeWrapper.style.height = '100%';
    darkTheme(300);
  }

  else {
    themeIcon.setAttribute('class', 'ph-moon-bold');

    darkThemeWrapper.style.height = '0';
    lightTheme();
  }
})

let passwordIsHidden = true;

showHidePasswordIcon.addEventListener('click', () => {
  passwordIsHidden = !passwordIsHidden;

  const changeIcon = passwordIsHidden ? 'ph-eye-bold' : 'ph-eye-slash-bold';
  const passwordIsVisible = passwordIsHidden ? 'password' : 'text';

  passwordInput.setAttribute('type', passwordIsVisible);

  showHidePasswordIcon.removeAttribute('class');
  showHidePasswordIcon.setAttribute('class', changeIcon);
});

formCheckbox.addEventListener('click', event => {
  const isChecked = event.target.checked;
  const syntheticCheckbox = document.querySelector('.synthetic-checkbox');
  const checkboxIcon = document.querySelector('.synthetic-checkbox i');

  if (isChecked) {
    syntheticCheckbox.style.backgroundColor = 'var(--primary-color)';
    checkboxIcon.style.opacity = '1';
    return;
  }
  
  syntheticCheckbox.style.backgroundColor = 'var(--input-color)';
  checkboxIcon.style.opacity = '0';
});
