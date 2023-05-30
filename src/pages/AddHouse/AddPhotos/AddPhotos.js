import React, { useEffect, useState } from "react";
import styles from "./AddPhotos.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { TbPhotoPlus, TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../../redux/houseSlice";

const title = "Add some pictures of your house";
const description =
  "To start, you will need at least 3 photos. You can add more or make changes later.";

function AddPhotos() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [imageToSend1, setImageToSend1] = useState(null);
  const [imageToSend2, setImageToSend2] = useState(null);
  const [imageToSend3, setImageToSend3] = useState(null);
  const [image4, setImage4] = useState(null);

  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  const validator1 = !!image1 && !!image2 && !!image3;
  const validator2 =
    !!house.photo_one && !!house.photo_two && !!house.photo_three;
  const dispatchAction = () => {
    dispatch(
      setPhotos([
        "http://localhost:8080/images/houses/" + imageToSend1.name,
        "http://localhost:8080/images/houses/" + imageToSend2.name,
        "http://localhost:8080/images/houses/" + imageToSend3.name,
        imageToSend1,
        imageToSend2,
        imageToSend3,
        image1,
        image2,
        image3,
      ])
    );
  };

  useEffect(() => {
    if (validator2) {
      setImage1(house.photo_one_to_display);
      setImage2(house.photo_three_to_display);
      setImage3(house.photo_two_to_display);
      setImageToSend1(house.photo_one_to_send);
      setImageToSend2(house.photo_two_to_send);
      setImageToSend3(house.photo_three_to_send);
    }
  }, []);
  return (
    <div>
      <AddLayout
        data={{ isValid: validator1, dispatch: dispatchAction }}
        title={title}
        description={description}
        level={5}
      >
        <div className={styles.container}>
          <div
            onClick={() => {
              document.querySelector(".upload-image-1").click();
            }}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              className="upload-image-1"
              onChange={({ target: { files } }) => {
                if (files[0]) {
                  setImage1(URL.createObjectURL(files[0]));
                  setImageToSend1(files[0]);
                }
              }}
            />

            {image1 ? (
              <img
                src={image1}
                alt="accomodation"
                className={styles.uploadedImage}
              />
            ) : (
              <TbPhotoPlus color="#222" size={50} />
            )}
          </div>
          <div
            onClick={() => {
              document.querySelector(".upload-image-2").click();
            }}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              className="upload-image-2"
              onChange={({ target: { files } }) => {
                if (files[0]) {
                  setImage2(URL.createObjectURL(files[0]));
                  setImageToSend2(files[0]);
                }
              }}
            />

            {image2 ? (
              <img
                src={image2}
                alt="accomodation"
                className={styles.uploadedImage}
              />
            ) : (
              <TbPhotoPlus color="#222" size={50} />
            )}
          </div>
          <div
            onClick={() => {
              document.querySelector(".upload-image-3").click();
            }}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              className="upload-image-3"
              onChange={({ target: { files } }) => {
                if (files[0]) {
                  setImage3(URL.createObjectURL(files[0]));
                  setImageToSend3(files[0]);
                }
              }}
            />

            {image3 ? (
              <img
                src={image3}
                alt="accomodation"
                className={styles.uploadedImage}
              />
            ) : (
              <TbPhotoPlus color="#222" size={50} />
            )}
          </div>
          <div
            onClick={() => {
              document.querySelector(".upload-image-4").click();
            }}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              className="upload-image-4"
              onChange={({ target: { files } }) => {
                if (files[0]) {
                  setImage4(URL.createObjectURL(files[0]));
                }
              }}
            />

            {image4 ? (
              <img
                src={image4}
                alt="accomodation"
                className={styles.uploadedImage}
              />
            ) : (
              <>
                <TbPlus color="gray" size={40} />
                <span>Add one more</span>
              </>
            )}
          </div>
        </div>
      </AddLayout>
    </div>
  );
}

export default AddPhotos;
