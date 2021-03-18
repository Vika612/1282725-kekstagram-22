import {renderPictures} from './thumbnails.js';
import {DEBOUNCE_INTERVAL, debounce} from './util.js';


const PIC_COUNT_RANDOM = 10;
const FilterType = {
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
let currentFilterItem = filterForm.querySelector('.img-filters__button--active');


const renderRandomPictures = (pictures) => {
  const picturesRandom = pictures.slice().sort(() => Math.random() - 0.5)
  renderPictures(picturesRandom.slice(0, PIC_COUNT_RANDOM));
};

const sortPicturesByComments = (a, b) => {
  return b.comments.length - a.comments.length;
};

const toggleFilters = (currentBtn) => {
  if (currentFilterItem) {
    currentFilterItem.classList.remove('img-filters__button--active');
  }
  currentFilterItem = currentBtn;
  currentFilterItem.classList.add('img-filters__button--active');
};

const renderFilter = (pictures) => {
  filter.classList.remove('img-filters--inactive');

  const onFilterChange = debounce((evt) => {
    if (currentFilterItem !== evt.target) {
      toggleFilters(evt.target);

      switch (evt.target.id) {
        case FilterType.RANDOM:
          renderRandomPictures(pictures);
          break;
        case FilterType.DISCUSSED:
          renderPictures(pictures.slice().sort(sortPicturesByComments));
          break;
        default:
          renderPictures(pictures);
      }
    }
  }, DEBOUNCE_INTERVAL)

  filterForm.addEventListener('click', onFilterChange);
};


export {renderFilter};
