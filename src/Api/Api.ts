const axios = require("axios");

const uploadImage = (file: File, sub_id: string) => {
  axios
    .post("https://api.thecatapi.com/v1/images/upload", {
      file: file,
      sub_id: sub_id,
    })
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

export { uploadImage };
