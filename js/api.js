const URL_GET = 'https://22.javascript.pages.academy/kekstagram/data';
// const URL_POST = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(URL_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((pictures) => onSuccess(pictures))
    // .catch((err) => onError(err))
};

export {getData};
