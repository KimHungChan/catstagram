import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { uploadImage } from "../../Api/Api";
import "./ImageUpload.scss";

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
        <>
          <div className="upload-container">
            {images.length <= 0 ? (
              <div className="drop-container">
                <button
                  className="drop-zone"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                ></button>
                <h1>Click or drop here</h1>
              </div>
            ) : (
              imageList.map((image, index) => (
                <>
                  <div key={index} className="image-item">
                    <img src={image.dataURL} alt="" width="100" />
                    <div className="upload-button-container">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      uploadImage(images[0]?.file, "").then(() => {
                        onImageRemove(index);
                      })
                    }
                  >
                    Upload Image
                  </button>
                </>
              ))
            )}
          </div>
        </>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
