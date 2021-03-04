const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const hashtagInput = document.querySelector('.text__hashtags');
const commentText = document.querySelector('.text__description');
const hashtagPattern = /ˆ#[A-Za-zА-Яа-я0-9]/;

const isHashtagEqual = (hashtags) => {
  for (let i = 0; i < hashtags.length - 1; i++) {
    if (hashtags[i] === hashtags[i + 1]) {
      return true;
    }
  }
};

const validateHashtag = () => {
  const hashtags = hashtagInput.value.trim().split(' ');

  hashtags.forEach((item, array) => {
    if (item.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хэштег не должен превышать ${MAX_HASHTAG_LENGTH} символов`);
    }
    else if (isHashtagEqual(hashtags)) {
      hashtagInput.setCustomValidity('Хэштеги не могут повторяться');
    }
    else if (array.length > MAX_HASHTAG_COUNT) {
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
  if (commentText.value > MAX_COMMENT_LENGTH) {
    commentText.setCustomValidity(`Комментарий не должен превышать ${MAX_COMMENT_LENGTH} символов`);
  } else {
    commentText.setCustomValidity('');
  }
  commentText.reportValidity();
};

hashtagInput.addEventListener('input', validateHashtag);

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


commentText.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


export {validateHashtag, validateLengthComment};
