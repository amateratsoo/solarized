const canvasContainerEl = document.querySelector('.decorative-img');

function setAnimation({ target, clientX, clientY }) {
  const canvasContainer = window.getComputedStyle(target);
  const remainingElSize = window.getComputedStyle(
    document.querySelector('.login-container')
    );

  /*
    to get clientX relative to the element we do
    clientX - width of the remaining elements
  */

  const remainingElWidth = [...remainingElSize.getPropertyValue('width')]
    .filter(item => item !== 'p' && item !== 'x')
    .join('');

  const canvasContainerWidth = [...canvasContainer.getPropertyValue('width')]
    .filter(item => item !== 'p' && item !== 'x')
    .join('');

  const canvasContainerHeight = [...canvasContainer.getPropertyValue('height')]
    .filter(item => item !== 'p' && item !== 'x')
    .join('');

  const translationPercentage = 6;
  

  if (clientX - remainingElWidth < (canvasContainerWidth - 185) / 2) {
    canvasContainerEl.style.setProperty('--mouse-pos-x', `${translationPercentage}%`);
  }

  else if (clientX - remainingElWidth > (canvasContainerWidth - 185) / 2) {
    canvasContainerEl.style.setProperty('--mouse-pos-x', `-${translationPercentage}%`);
  }


  if (clientY < (canvasContainerHeight - 129) / 2) {
    canvasContainerEl.style.setProperty('--mouse-pos-y', `${translationPercentage}%`);
  }

  else if (clientY > (canvasContainerHeight - 129) / 2) {
    canvasContainerEl.style.setProperty('--mouse-pos-y', `-${translationPercentage}%`);
  }

  
  return () => {
    canvasContainer.addEventListener('mouseleave', () => {
      canvasContainerEl.style.setProperty('--mouse-pos-x', '0');
      canvasContainerEl.style.setProperty('--mouse-pos-y', '0');
    })
  }
}

function animateMesh() {
  canvasContainerEl.addEventListener('mousemove', setAnimation);
}

export { animateMesh };
