import React, { useState } from "react";
import { ImageListType } from "react-images-uploading";
import { uploadImage } from "../../Api/Api";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";

const Upload = () => {
  const [images, setImages]: any = useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUpload images={images} onChange={onChange} maxNumber={maxNumber} />
      <button onClick={() => uploadImage(images[0]?.file, "")}>
        Upload Images
      </button>
    </div>
  );
};

export default Upload;
