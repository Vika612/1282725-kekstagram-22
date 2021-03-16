import {renderPictures} from './thumbnails.js';

const PIC_COUNT_RANDOM = 10;

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
const filterBtns = filterForm.querySelectorAll('.img-filters__button');


const renderRandomPictures = (pictures) => {
  const picturesRandom = pictures.slice().sort(() => Math.random() - 0.5)
  renderPictures(picturesRandom.slice(0, PIC_COUNT_RANDOM));
};

const sortPicturesByComments = (pictureA, pictureB) => {
  const rankA = pictureA.comments.length;
  const rankB = pictureB.comments.length;

  return rankB - rankA;
};

const toggleFilters = (currentBtn) => {
  for (const filterBtn of filterBtns) {
    filterBtn.classList.remove('img-filters__button--active');
  }
  currentBtn.classList.add('img-filters__button--active');
};

const renderFilter = (pictures) => {
  filter.classList.remove('img-filters--inactive');

  const onFilterChange = (evt) => {
    toggleFilters(evt.target);

    if (evt.target.id === 'filter-random') {
      renderRandomPictures(pictures);
    } else if (evt.target.id === 'filter-discussed') {
      renderPictures(pictures.slice().sort(sortPicturesByComments));
    } else {
      renderPictures(pictures);
    }
  }
  filterForm.addEventListener('click', onFilterChange);
};


export {renderFilter};
