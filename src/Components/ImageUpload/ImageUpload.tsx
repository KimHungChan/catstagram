import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const ImageUpload = ({
  images,
  onChange,
  maxNumber,
}: {
  images: ImageListType;
  onChange: any;
  maxNumber: number;
}) => {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          {images.length <= 0 ? (
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
          ) : (
            imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
