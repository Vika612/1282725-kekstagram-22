import {isEscEvent} from './util.js';
import {setScaleImg} from './img-scale.js';
import {addEffects, destroySlider} from './img-effects.js';
import {sendData} from './data.js';

const DEFAULT_SCALE = 100;
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const uploadSubmit = document.querySelector('#upload-submit');

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
  setScaleImg(DEFAULT_SCALE);
  addEffects();
};

const closeUploadImg = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
  uploadFile.value = '';
  imgUploadPreview.style = '';
  destroySlider();
};

uploadFile.addEventListener('change', () => {
  openUploadImg();
});

uploadCancel.addEventListener('click', () => {
  closeUploadImg();
});

const setFormSubmit = (onSuccess, onError) => {
  uploadSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault(evt);

    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};

export {setFormSubmit, closeUploadImg};
