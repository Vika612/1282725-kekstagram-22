import {getData} from './data.js';
import {renderPictures} from './thumbnails.js';
import {closeUploadImg, setFormSubmit} from './img-upload.js';
import {showAlert} from './util.js';
import {renderFilter} from './filtration.js';
import './validation.js';
import './load-file.js';


getData(
  (pictures) => {
    renderPictures(pictures);
    renderFilter(pictures)
  },
  () => {showAlert() },
);


setFormSubmit(closeUploadImg);
