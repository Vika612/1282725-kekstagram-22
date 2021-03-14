const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


const main = document.querySelector('main');
const successText = successTemplate.cloneNode(true);
const errorText = errorTemplate.cloneNode(true);


const closeOut = (evt) => {
  const target = evt.target.className;
  if (target === 'success' || target === 'success__button' ||
   target === 'error' || target === 'error__button') {
    closeMessage();
  }
};

const showMessage = (result) => {
  switch (result) {
    case 'success':
      main.appendChild(successText);
      break;
    case 'error':
      main.appendChild(errorText);
      break;
  }
  document.addEventListener('click', closeOut);
  document.addEventListener('keydown', closeMessage);
};

const closeMessage = () => {
  successText.remove();
  errorText.remove();

  document.removeEventListener('click', closeOut);
  document.removeEventListener('keydown', closeMessage);
};


export {showMessage};
