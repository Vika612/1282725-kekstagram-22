const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


const main = document.querySelector('main');
const successText = successTemplate.cloneNode(true);
const errorText = errorTemplate.cloneNode(true);


const showMessage = (result) => {
  switch (result) {
    case 'success':
      main.appendChild(successText);
      break;
    case 'error':
      main.appendChild(errorText);
      break;
  }
  document.addEventListener('click', closeMessage);
  document.addEventListener('keydown', closeMessage);
};


const closeMessage = () => {
  successText.remove();
  errorText.remove();

  document.removeEventListener('click', closeMessage);
  document.removeEventListener('keydown', closeMessage);
};

export {showMessage};
