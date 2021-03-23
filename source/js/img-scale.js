const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let scaleValue = parseInt(scaleControlValue.value);


const checkScaleControls = (borderValue, scaleControlDisabled) => {
  scaleControlDisabled.disabled = (scaleValue === borderValue);
};

const setScaleImg = (value) => {
  scaleValue = value;
  scaleControlValue.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;

  checkScaleControls(MIN_SCALE, scaleControlSmaller);
  checkScaleControls(MAX_SCALE, scaleControlBigger);
};

const setScaleStep = (direction) => {
  scaleValue += STEP_SCALE * direction;
  if (scaleValue >= MIN_SCALE && scaleValue <= MAX_SCALE) {
    setScaleImg(scaleValue);
  }
};

scaleControlSmaller.addEventListener('click', () => {
  setScaleStep(-1);
});

scaleControlBigger.addEventListener('click', () => {
  setScaleStep(1);
});


export {setScaleImg};
