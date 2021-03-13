const URL_GET = 'https://22.javascript.pages.academy/kekstagram/data';
const URL_POST = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
  fetch(URL_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((pictures) => onSuccess(pictures))
    .catch((err) => onError(err))
};

const sendData = (onSuccess, onError, body) => {
  fetch(URL_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => onError());
};

export {getData, sendData};
