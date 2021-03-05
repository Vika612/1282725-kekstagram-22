const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const hashtagInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');
const hashtagPattern = /^#[A-Za-zА-Яа-я0-9]+$/;


const validateHashtag = () => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);

  hashtags.forEach((item) => {
    if (item.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хэштег не должен превышать ${MAX_HASHTAG_LENGTH} символов`);
    }
    else if (item === '#') {
      hashtagInput.setCustomValidity('Хэштег не может состоять только из решётки');
    }
    else if (uniqueHashtags.size !== hashtags.length) {
      hashtagInput.setCustomValidity('Хэштеги не могут повторяться');
    }
    else if (hashtags.length > MAX_HASHTAG_COUNT) {
      hashtagInput.setCustomValidity(`Пожалуйста, не более ${MAX_HASHTAG_COUNT} хэштегов`);
    }
    else if (!hashtagPattern.test(item)) {
      hashtagInput.setCustomValidity('Хэштег должен начинаться с # и содержать только буквы и цифры');
    } else {
      hashtagInput.setCustomValidity('');
    }
  })
  hashtagInput.reportValidity();
};


const validateLengthComment = () => {
  return commentText.value > MAX_COMMENT_LENGTH ? `Комментарий не должен превышать ${MAX_COMMENT_LENGTH} символов` : '';
};


hashtagInput.addEventListener('input', validateHashtag);

commentText.addEventListener('input', validateLengthComment);

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentText.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


export {validateHashtag, validateLengthComment};
