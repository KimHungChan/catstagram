import config from "../config.json";
const axios = require("axios");

const uploadImage = (file: any, sub_id: string) => {
  const form = new FormData();
  form.append("file", file);
  axios
    .post(
      "https://api.thecatapi.com/v1/images/upload",

      form,
      { headers: { "x-api-key": config.APIKEY } }
    )
    .then(function (response: Response) {
      // handle success
      console.log(response);
    })
    .catch(function (error: Error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const getImages = () => {
  axios
    .get(
      "https://api.thecatapi.com/v1/images/",

      { headers: { "x-api-key": config.APIKEY } }
    )
    .then(function (response: Response) {
      // handle success
      console.log(response);
    })
    .catch(function (error: Error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export { uploadImage, getImages };
