/* global noUiSlider:readonly */

const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsItem = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview');


const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const changeParametr = (effect) => {
  if (effect === 'marvin') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  } else if (effect === 'phobos') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
  } else if (effect === 'heat') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
  }
};

const onSliderChange = (effect) => {
  changeParametr(effect);
  slider.noUiSlider.on('update', (values, handle) => {
    switch (effect) {
      case 'chrome':
        imgUploadPreview.style.filter = `grayscale(${values[handle]})`;
        break;
      case 'sepia':
        imgUploadPreview.style.filter = `sepia(${values[handle]})`;
        break;
      case 'marvin':
        imgUploadPreview.style.filter = `invert(${values[handle]}%)`;
        break;
      case 'phobos':
        imgUploadPreview.style.filter = `blur(${values[handle]}px)`;
        break;
      case 'heat':
        imgUploadPreview.style.filter = `brightness(${values[handle]})`;
        break;
    }
    effectLevelValue.value = values[handle];
  });
};

const getFilterChange = () => {
  effectsItem.forEach((effect) => {
    effect.addEventListener('click', () => {
      if (effect.value === 'none') {
        slider.style.display = 'none';
        imgUploadPreview.style.filter = 'none';
      } else {
        slider.style.display = 'block';
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
