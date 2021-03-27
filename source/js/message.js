const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


const main = document.querySelector('main');
const successText = successTemplate.cloneNode(true);
const errorText = errorTemplate.cloneNode(true);


const onDocumentClick = (evt) => {
  const el = evt.target;
  if (el.classList.contains('success') || el.classList.contains('success__button') ||
  el.classList.contains('error') || el.classList.contains('error__button')) {
    onDocumentKeydown();
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
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const onDocumentKeydown = () => {
  successText.remove();
  errorText.remove();

  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};


export {showMessage};
