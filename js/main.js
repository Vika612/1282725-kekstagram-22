const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }
};


const getCharacterLength = function (str, max) {
  return str.length <= max;
};
