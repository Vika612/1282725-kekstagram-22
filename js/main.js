// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }
  window.console.error('error message');
};
getRandomInteger(0, 100);


// Функция для проверки максимальной длины строки.

const getCharacterLength = function (str, max = 140) {
  return str.length <= max;
};
getCharacterLength('');
