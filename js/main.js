const getRandomInteger = (min, max) => {
  if (min >= 0 && min < max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }
  window.console.error('error message');
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getCharacterLength = (str, max = 140) => str.length <= max;
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
  const photos = [];
  for (let i = 0; i < OBJECT_COUNT; i++) {
    photos.push({
      id: photos.length,
      url: 'photos/' + (photos.length) + '.jpg',
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(likes.MIN, likes.MAX),
      comments: {
        id: photos.length,
        avatar: 'img/avatar' + getRandomInteger(1, 6) + '.svg',
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      },
    });
  }
  return photos;
};

createPhotoDescription();
