import React, { useState } from "react";
import styles from "./AddNumbers.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import { BiPlus, BiMinus } from "react-icons/bi";

const title = "Details on the number of places";
const description = "Give the main information about your accommodation.";

function AddNumbers() {
  const [travelers, setTravelers] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [beds, setBeds] = useState(0);

  return (
    <div>
      <AddLayout title={title} description={description} level={2}>
        <div className={styles.item}>
          <span>Travelers</span>
          <div>
            <div onClick={() => setTravelers((t) => (t = 0 ? t - 1 : 0))}>
              <BiMinus />
            </div>
            <span>{travelers}</span>
            <div onClick={() => setTravelers((t) => t + 1)}>
              <BiPlus />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Bedrooms</span>
          <div>
            <div onClick={() => setBedrooms((t) => (t = 0 ? t - 1 : 0))}>
              <BiMinus />
            </div>
            <span>{bedrooms}</span>
            <div onClick={() => setBedrooms((t) => t + 1)}>
              <BiPlus />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Beds</span>
          <div>
            <div onClick={() => setBeds((t) => (t = 0 ? t - 1 : 0))}>
              <BiMinus />
            </div>
            <span>{beds}</span>
            <div onClick={() => setBeds((t) => t + 1)}>
              <BiPlus />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Bathrooms</span>
          <div>
            <div onClick={() => setBathrooms((t) => (t = 0 ? t - 1 : 0))}>
              <BiMinus />
            </div>
            <span>{bathrooms}</span>
            <div onClick={() => setBathrooms((t) => t + 1)}>
              <BiPlus />
            </div>
          </div>
        </div>
      </AddLayout>
    </div>
  );
}

export default AddNumbers;
