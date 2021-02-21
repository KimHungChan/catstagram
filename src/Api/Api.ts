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
  return axios
    .get("https://api.thecatapi.com/v1/images/?limit=20", {
      headers: { "x-api-key": config.APIKEY },
    })
    .then((response: any) => response.data);
};

const favouritePost = (image_id: string, sub_id: string | null) => {
  // const form = new FormData();
  // form.append("file", file);
  axios
    .post(
      "https://api.thecatapi.com/v1/favourites",

      { image_id },
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

export { uploadImage, getImages, favouritePost };
