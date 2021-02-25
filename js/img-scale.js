const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let scaleValue = parseInt(scaleControlValue.value);


const onScaleControlSmaller = () => {
  scaleControlSmaller.addEventListener('click', () => {
    if (scaleValue > MIN_SCALE) {
      scaleValue -= STEP_SCALE;
    }
    scaleControlValue.value = `${scaleValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;
  });
};

const onScaleControlBigger = () => {
  scaleControlBigger.addEventListener('click', () => {
    if (scaleValue < MAX_SCALE) {
      scaleValue += STEP_SCALE;
    }
    scaleControlValue.value = `${scaleValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;
  });
};

const removeScale = () => {
  imgUploadPreview.style = '';
  scaleControlSmaller.removeEventListener('click', onScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', onScaleControlBigger);
};

export {onScaleControlSmaller, onScaleControlBigger, removeScale};
