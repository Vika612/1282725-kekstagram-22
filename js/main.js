const getRandomInteger = function (min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
};
getRandomInteger();


const getCharacterLength = function (str, max) {
  return str.length <= max;
};
getCharacterLength();
