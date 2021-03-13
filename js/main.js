import {getData} from './api.js';
import {renderPictures} from './thumbnails.js';
import './full-photo.js';
import './img-upload.js';
import './validation.js';


getData((pictures) => {
  renderPictures(pictures);
});
