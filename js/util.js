const getRandomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
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


export {getRandomInteger, getRandomArrayElement, isEscEvent, onEscKeyDown, showAlert};
