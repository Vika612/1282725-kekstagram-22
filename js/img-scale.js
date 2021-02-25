const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let scaleValue = parseInt(scaleControlValue.value);


const setScaleImg = (value) => {
  scaleValue = value;
  scaleControlValue.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;
};

scaleControlSmaller.addEventListener('click', () => {
  if (scaleValue > MIN_SCALE && scaleValue <= MAX_SCALE) {
    scaleValue -= STEP_SCALE;
  }
  setScaleImg(scaleValue);
});


scaleControlBigger.addEventListener('click', () => {
  if (scaleValue >= MIN_SCALE && scaleValue < MAX_SCALE) {
    scaleValue += STEP_SCALE;
  }
  setScaleImg(scaleValue);
});

export {setScaleImg};
