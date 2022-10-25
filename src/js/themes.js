const root = document.documentElement.style;

const darkThemeColors = {
  backgroundColor: '#18181b',

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

function darkTheme(sleepInMiliseconds) {
  const sleep = setTimeout(() => {
    root.setProperty('--background-color', darkThemeColors.backgroundColor);
    return clearTimeout(sleep);
  }, sleepInMiliseconds);

  root.setProperty('--primary-color', darkThemeColors.primaryColor);
  root.setProperty('--secondary-color', darkThemeColors.secondaryColor);
  root.setProperty('--accent-color', darkThemeColors.accentColor);
  root.setProperty('--checkbox-box-shadow', darkThemeColors.checkboxBoxShadow);
  root.setProperty('--input-color', darkThemeColors.inputColor);
  root.setProperty('--links-color', darkThemeColors.linksColor);
  root.setProperty('--icons-color', darkThemeColors.iconsColor);
  root.setProperty('--moon-toggle-color', darkThemeColors.moonToggleColor);
  root.setProperty('--text', darkThemeColors.text);
  root.setProperty('--input-text', darkThemeColors.inputText);
  root.setProperty('--font-primary', darkThemeColors.fontPrimary);
  root.setProperty('--font-secondary', darkThemeColors.fontSecondary);
}

const lightThemeColors = {
  backgroundColor: '#f5f5f5',

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

function lightTheme() {
  root.setProperty('--background-color', lightThemeColors.backgroundColor);
  root.setProperty('--primary-color', lightThemeColors.primaryColor);
  root.setProperty('--secondary-color', lightThemeColors.secondaryColor);
  root.setProperty('--accent-color', lightThemeColors.accentColor);
  root.setProperty('--checkbox-box-shadow', lightThemeColors.checkboxBoxShadow);
  root.setProperty('--input-color', lightThemeColors.inputColor);
  root.setProperty('--links-color', lightThemeColors.linksColor);
  root.setProperty('--icons-color', lightThemeColors.iconsColor);
  root.setProperty('--moon-toggle-color', lightThemeColors.moonToggleColor);
  root.setProperty('--text', lightThemeColors.text);
  root.setProperty('--input-text', lightThemeColors.inputText);
  root.setProperty('--font-primary', lightThemeColors.fontPrimary);
  root.setProperty('--font-secondary', lightThemeColors.fontSecondary);
}

export { darkTheme, lightTheme };
