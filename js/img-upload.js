import {isEscEvent} from './util.js';
import {setScaleImg} from './img-scale.js';
import {addEffects, destroySlider} from './img-effects.js';
import {sendData} from './data.js';
import {showMessage} from './message.js';
import {resetFields} from './validation.js';

const DEFAULT_SCALE = 100;
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const uploadSubmit = document.querySelector('.img-upload__form');


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
  resetFields();
};

const onSuccessMessage = () => {
  showMessage('success');
  resetPage();
};

const onErrorMessage = () => {
  showMessage('error');
  resetPage();
};

const resetPage = () => {
  closeUploadImg();
};

const setFormSubmit = () => {
  uploadSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSuccessMessage,
      onErrorMessage,
      new FormData(evt.target),
    );
  });
};

uploadFile.addEventListener('change', () => {
  openUploadImg();
});

uploadCancel.addEventListener('click', () => {
  closeUploadImg();
});


export {setFormSubmit, closeUploadImg};
