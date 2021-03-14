import {onEscDown} from './util.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const hashtagInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');
const hashtagPattern = /^#[A-Za-zА-Яа-я0-9]+$/;


const validateHashtag = () => {
  let hashtags = hashtagInput.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .split(' ');

  const uniqueHashtags = new Set(hashtags);

  for (let i = 0; i < hashtags.length; i++) {

    if (hashtags[i].length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хэштег не должен превышать ${MAX_HASHTAG_LENGTH} символов`);
      return false;
    }
    else if (hashtags[i] === '#') {
      hashtagInput.setCustomValidity('Хэштег не может состоять только из решётки');
      return false;
    }
    else if (uniqueHashtags.size !== hashtags.length) {
      hashtagInput.setCustomValidity('Хэштеги не могут повторяться');
      return false;
    }
    else if (hashtags.length > MAX_HASHTAG_COUNT) {
      hashtagInput.setCustomValidity(`Пожалуйста, не более ${MAX_HASHTAG_COUNT} хэштегов`);
      return false;
    }
    else if (!hashtagPattern.test(hashtags[i].trim())) {
      hashtagInput.setCustomValidity('Хэштег должен начинаться с # и содержать только буквы и цифры');
      return false;
    }
  }
  hashtagInput.setCustomValidity('');
};

hashtagInput.addEventListener('input', () => {
  if (!validateHashtag(hashtagInput.value)) {
    hashtagInput.reportValidity();
  }
});
hashtagInput.addEventListener('keydown', onEscDown);



const validateLengthComment = () => {
  return commentText.value > MAX_COMMENT_LENGTH ? `Комментарий не должен превышать ${MAX_COMMENT_LENGTH} символов` : '';
};

commentText.addEventListener('input', validateLengthComment);
commentText.addEventListener('keydown', onEscDown);


const resetFields = () => {
  hashtagInput.value = '';
  commentText.value = '';
};

export {resetFields};
