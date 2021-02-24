import {isEscEvent} from './util.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const onEscPress = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadImg();
  }
};

const openUploadImg = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscPress);
};

const closeUploadImg = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
  uploadFile.value = '';
};

uploadFile.addEventListener('change', () => {
  openUploadImg();
});

uploadCancel.addEventListener('click', () => {
  closeUploadImg();
});
