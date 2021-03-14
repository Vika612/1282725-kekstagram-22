import {getData} from './data.js';
import {renderPictures} from './thumbnails.js';
import {closeUploadImg, setFormSubmit} from './img-upload.js';
import {showAlert} from './util.js';


getData(
  (pictures) => {
    renderPictures(pictures);
  },
  () => {showAlert() },
);


setFormSubmit(closeUploadImg);
