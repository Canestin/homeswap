import React, { useEffect, useState } from "react";
import styles from "./AddNumbers.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setNumbers } from "../../../redux/houseSlice";

const title = "Details on the number of places";
const description = "Give the main information about your accommodation.";

function AddNumbers() {
  const [travelers, setTravelers] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [beds, setBeds] = useState(0);

  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  const dispatchAction = () => {
    dispatch(
      setNumbers({
        travelers,
        bedrooms,
        bathrooms,
        beds,
      })
    );
  };
  const validator1 =
    !!house.number_of_travellers &&
    !!house.number_of_bedrooms &&
    !!house.number_of_beds &&
    !!house.number_of_bathrooms;
  const validator2 = !!travelers && !!bedrooms && !!bathrooms && !!beds;

  useEffect(() => {
    if (validator1) {
      setTravelers(house.number_of_travellers);
      setBedrooms(house.number_of_bedrooms);
      setBeds(house.number_of_beds);
      setBathrooms(house.number_of_bathrooms);
    }
  }, []);

  return (
    <div>
      <AddLayout
        data={{ isValid: validator2, dispatch: dispatchAction }}
        title={title}
        description={description}
        level={3}
      >
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
