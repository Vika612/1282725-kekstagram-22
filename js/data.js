import {getRandomInteger, getRandomArrayElement} from './random.js';

const OBJECT_COUNT = 25;
const MAX_AVATAR = 6;
const MAX_COMMENTS = 10;

const DESCRIPTIONS = ['description 1', 'description 2', 'description 3', 'description 4', 'description 5', 'description 6'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Анна', 'Борис', 'Владимир', 'Гоша', 'Дуся', 'Евгений'];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const createComment = (id) => {
  return {
    id: id,
    avatar: 'img/avatar' + getRandomInteger(1, MAX_AVATAR) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const getComments = () => {
  const comments = [];
  const countComments = getRandomInteger(1, MAX_COMMENTS);
  for (let i = 0; i < countComments; i++) {
    comments.push(createComment(i));
  }
  return comments;
};

const createPhoto = (id) => {
  const photoId = id + 1;
  return {
    id: photoId,
    url: 'photos/' + photoId + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: getComments(),
  }
};

const photos = new Array(OBJECT_COUNT).fill(null).map((item, id) => createPhoto(id));

export {photos};
