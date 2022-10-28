import { darkTheme, lightTheme } from './themes.js';
import { Gradient } from './gradient.js';
import { animateMesh } from './animateMesh.js';

const mesh = new Gradient();
mesh.initGradient('.mesh');

animateMesh();


const themeToggle = document.querySelector('.display-mode');
const passwordInput = document.querySelector('#password');
const showHidePasswordIcon = document.querySelector('.with-picture i');
const formCheckbox = document.querySelector('#keep-me-logged-in');

let isDarkTheme = false;

window.addEventListener('load', () => {
  if (window.localStorage.getItem('isDarkTheme') === 'true') {
    document.querySelector('.display-mode i').setAttribute('class', 'ph-sun-bold');
    document.querySelector('.dark-theme-wrapper').style.height = '100%';

    isDarkTheme = true;
  }
})

themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;

  if (isDarkTheme) {
    darkTheme(300);
  }

  else {
    lightTheme();
  }

  themeToggle.style.setProperty('pointer-events', 'none');
  const delay = setTimeout(() => {
    themeToggle.style.removeProperty('pointer-events');
    return clearTimeout(delay);

  }, 150);


  window.localStorage.setItem('isDarkTheme', isDarkTheme);
});


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
