import {isEscEvent} from './util.js';

const COMMENTS_PER_STEP = 5;
const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
let loadedCommentsAmount = 0;
let allComments = [];


const createNewComment = ({avatar, name, message}) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newAvatar = document.createElement('img');
  newAvatar.classList.add('social__picture');
  newAvatar.src = avatar;
  newAvatar.alt = name;
  newAvatar.width = AVATAR_WIDTH;
  newAvatar.height = AVATAR_HEIGHT;
  newComment.appendChild(newAvatar);

  const newText = document.createElement('p');
  newText.classList.add('social__text');
  newText.textContent = message;
  newComment.appendChild(newText);

  return newComment;
};

const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentFragment.appendChild(createNewComment(comment));
  })
  socialComments.appendChild(commentFragment);
};

const renderCommentsCounter = (comments) => {
  commentsLoader.classList.toggle('hidden', comments.length <= loadedCommentsAmount);
  updateCommentCount();
};

const updateCommentCount = () => {
  socialCommentCount.innerHTML = `${socialComments.children.length} из <span class="comments-count">${allComments.length}</span> комментариев`;
};

const createBigPictureContent = ({url, likes, comments, description}) => {
  allComments = comments;

  socialComments.innerHTML = '';
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  loadedCommentsAmount = COMMENTS_PER_STEP;
  renderComments(comments.slice(0, COMMENTS_PER_STEP));
  renderCommentsCounter(comments);

  if (loadedCommentsAmount <= allComments.length) {
    commentsLoader.addEventListener('click', onLoadButtonClick);
  }
};

const onLoadButtonClick = () => {
  if (loadedCommentsAmount < allComments.length) {
    renderComments(allComments.slice(loadedCommentsAmount, loadedCommentsAmount + COMMENTS_PER_STEP));
    loadedCommentsAmount += COMMENTS_PER_STEP;
    renderCommentsCounter(allComments);

    if (loadedCommentsAmount >= allComments.length) {
      commentsLoader.removeEventListener('click', onLoadButtonClick);
    }
  }
};

const setPreviewClick = (preview, info) => {
  preview.addEventListener('click', () => {
    createBigPictureContent(info);
    openModal();
  });
};

const onDocumentKeyDown = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

bigPictureClose.addEventListener('click', () => {
  closeModal();
});


export {setPreviewClick};
