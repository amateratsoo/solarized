const root = document.documentElement.style;
const darkThemeWrapper = document.querySelector('.dark-theme-wrapper');
const themeIcon = document.querySelector('.display-mode i');

const arrOfProps = 
  [
    '--primary-color',
    '--secondary-color',
    '--accent-color',
    '--checkbox-box-shadow',
    '--input-color',
    '--links-color',
    '--icons-color',
    '--moon-toggle-color',
    '--text',
    '--input-text',
    '--font-primary',
    '--font-secondary'
  ]

const darkThemeColors = {
  primaryColor: '#7c3aed',
  secondaryColor: '#22222a',
  accentColor: '#a78bfa',
  checkboxBoxShadow: '#3f3f46',
  inputColor: '#202024',
  linksColor: '#8b5cf6',
  iconsColor: '#1E1E1E',
  moonToggleColor: '#3f3f46',

  text: '#7C7C8A',
  inputText: '#d1d5db',
  fontPrimary: '#f5f5f5',
  fontSecondary: '#7C7C8A'
}

const darkThemePropsValues = Object.entries(darkThemeColors);

function darkTheme(sleepInMiliseconds) {
  themeIcon.setAttribute('class', 'ph-sun-bold');
  darkThemeWrapper.style.height = '100%';

  const sleep = setTimeout(() => {
    root.setProperty('--background-color', '#18181b');
    return clearTimeout(sleep);
  }, sleepInMiliseconds);
  
  arrOfProps.forEach((prop, index) => root.setProperty(prop, darkThemePropsValues[index][1]));
}

const lightThemeColors = {
  primaryColor: '#8b5cf6',
  secondaryColor: '#d1d5db',
  accentColor: '#a78bfa',
  checkboxBoxShadow: '#9ca3af',
  inputColor: '#f5f5f5',
  linksColor: '#a78bfa',
  iconsColor: '#f5f5f5',
  moonToggleColor: '#1f2937',

  text: '#000000',
  inputText: '#000000',
  fontPrimary: '#1f2937',
  fontSecondary: '#4b5563'
}

const lightThemePropsValues = Object.entries(lightThemeColors);

function lightTheme() {
  themeIcon.setAttribute('class', 'ph-moon-bold');
  darkThemeWrapper.style.height = '0';
  root.setProperty('--background-color', '#f5f5f5');

  arrOfProps.forEach((prop, index) => root.setProperty(prop, lightThemePropsValues[index][1]));
}

export { darkTheme, lightTheme };
