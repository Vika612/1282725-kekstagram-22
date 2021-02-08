const getRandomInteger = function (min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }
  window.console.error('error message');
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getCharacterLength = function (str, max = 140) {
  return str.length <= max;
};
getCharacterLength('');

// ----------------------------------------------------------------- //

const OBJECT_COUNT = 25;

const DESCRIPTIONS = [
  'description 1',
  'description 2',
  'description 3',
  'description 4',
  'description 5',
  'description 6',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Анна',
  'Борис',
  'Владимир',
  'Гоша',
  'Дуся',
  'Евгений',
];

const likes = {
  MIN: 15,
  MAX: 200,
};

const createPhotoDescription = () => {
  return {
    id: getRandomInteger(1, 25),
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(likes.MIN, likes.MAX),
    comments: {
      id: getRandomInteger(1, 25),
      avatar: 'img/avatar' + getRandomInteger(1, 6) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
  };
};

new Array(OBJECT_COUNT).fill(null).map(() => createPhotoDescription());
