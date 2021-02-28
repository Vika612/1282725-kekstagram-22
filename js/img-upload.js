import {isEscEvent} from './util.js';
import {setScaleImg} from './img-scale.js';
import {addEffects, destroySlider} from './img-effects.js';

const DEFAULT_SCALE = 100;
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview');

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
