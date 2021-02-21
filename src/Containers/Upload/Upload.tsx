import React, { useState } from "react";
import { ImageListType } from "react-images-uploading";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";

const Upload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUpload images={images} onChange={onChange} maxNumber={maxNumber} />
      {console.log("🚀 ~ file: Upload.tsx ~ line 21 ~ Upload ~ images", images)}
      <button>Upload Images</button>
    </div>
  );
};

export default Upload;
