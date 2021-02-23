import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { uploadImage } from "../../Api/Api";
import Spinner from "../Spinner/Spinner";
import "./ImageUpload.scss";

const ImageUpload = ({ images, onChange, maxNumber }) => {
  const [uploading, setUploading] = useState(false);
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
                  {!uploading ? (
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
                        disabled={uploading}
                        onClick={() => {
                          setUploading(true);
                          uploadImage(images[0]?.file)
                            .then((response) => {
                              NotificationManager.success(
                                "Image uploaded",
                                "Success"
                              );
                              onImageRemove(index);
                              setUploading(false);
                            })
                            .catch((error) => {
                              onImageRemove(index);
                              setUploading(false);
                              NotificationManager.error(
                                "Image was too big, did not contain a Cat, was inappropriate, or the wrong file type.",
                                "Error",
                                5000,
                                () => {
                                  alert("callback");
                                }
                              );
                            });
                        }}
                      >
                        Upload Image
                      </button>
                    </>
                  ) : (
                    <Spinner />
                  )}
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
