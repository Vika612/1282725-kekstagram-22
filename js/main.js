import {getData} from './data.js';
import {renderPictures} from './thumbnails.js';
import {closeUploadImg, setFormSubmit} from './img-upload.js';
import {showAlert} from './util.js';
import {renderFilter} from './filtration.js';


getData(
  (pictures) => {
    renderPictures(pictures);
    renderFilter(() => renderPictures(pictures))
  },
  () => {showAlert() },
);


setFormSubmit(closeUploadImg);
