const getRandomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  window.console.error('error message');
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};


export {getRandomInteger, getRandomArrayElement};
