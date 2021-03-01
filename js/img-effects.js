/* global noUiSlider:readonly */

const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsItem = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview');
let imgEffect = 'none';

const options = {
  'chrome': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  'sepia': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  'marvin': {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  'phobos': {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  'heat': {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
};

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return   Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};


const changeOptions = (effect) => {
  switch (effect) {
    case 'marvin':
      imgEffect = 'marvin';
      break;
    case 'phobos':
      imgEffect = 'phobos';
      break;
    case 'heat':
      imgEffect = 'heat';
      break;
  }
  slider.noUiSlider.updateOptions(options[imgEffect]);
};


const getFilterStyle = (effect, values, handle) => {
  switch (effect) {
    case 'chrome':
      return `grayscale(${values[handle]})`;
    case 'sepia':
      return`sepia(${values[handle]})`;
    case 'marvin':
      return`invert(${values[handle]}%)`;
    case 'phobos':
      return`blur(${values[handle]}px)`;
    case 'heat':
      return`brightness(${values[handle]})`;
  }
};


const onSliderChange = (effect) => {
  changeOptions(effect);
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    imgUploadPreview.style.filter = getFilterStyle(effect, values, handle);
  });
};


const getFilterChange = () => {
  effectsItem.forEach((effect) => {
    effect.addEventListener('click', () => {
      if (effect.value === 'none') {
        slider.classList.add('hidden');
        imgUploadPreview.style.filter = 'none';
      } else {
        slider.classList.remove('hidden');
        imgUploadPreview.classList.add(`.effects__preview--${effect.value}`);
        onSliderChange(effect.value);
      }
    })
  });
};


const destroySlider = () => {
  slider.noUiSlider.destroy();
};


const addEffects = () => {
  createSlider();
  getFilterChange();
};


export {addEffects, destroySlider};
