const DEBOUNCE_INTERVAL = 500;

const debounce = (cb) => {
  let lastTimeout = null;

  return function () {
    const parameters = arguments;
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const onEscKeyDown = (evt) => {
  if (isEscEvent) {
    evt.stopPropagation();
  }
};

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка соединения';

  document.body.append(alertContainer);
}


export {DEBOUNCE_INTERVAL, debounce, isEscEvent, onEscKeyDown, showAlert};
