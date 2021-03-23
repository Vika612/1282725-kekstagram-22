const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const uploadFile = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview > img' );

const onInputFileChange = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();

    const onReaderLoad = () => {
      preview.src = reader.result;
    }
    reader.addEventListener('load', onReaderLoad);
    reader.readAsDataURL(file);
  }
}
uploadFile.addEventListener('change', onInputFileChange);
