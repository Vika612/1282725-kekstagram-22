const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


const main = document.querySelector('main');
const successText = successTemplate.cloneNode(true);
const errorText = errorTemplate.cloneNode(true);


const onCloseOutClick = (evt) => {
  const el = evt.target;
  if (el.classList.contains('success') || el.classList.contains('success__button') ||
  el.classList.contains('error') || el.classList.contains('error__button')) {
    onCloseMessageKeydown();
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
  document.addEventListener('click', onCloseOutClick);
  document.addEventListener('keydown', onCloseMessageKeydown);
};

const onCloseMessageKeydown = () => {
  successText.remove();
  errorText.remove();

  document.removeEventListener('click', onCloseOutClick);
  document.removeEventListener('keydown', onCloseMessageKeydown);
};


export {showMessage};
