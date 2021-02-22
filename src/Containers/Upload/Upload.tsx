import React, { useState } from "react";
import { ImageListType } from "react-images-uploading";
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
    <ImageUpload images={images} onChange={onChange} maxNumber={maxNumber} />
  );
};

export default Upload;
