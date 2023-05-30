import React, { useEffect, useState } from "react";
import styles from "./AddTitle.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { BiInfoCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../../redux/houseSlice";

const title = "Now give your ad a title (type: house)";
const description = "Short titles are usually the most effective.";

const TITLE_LENGTH_LIMIT = 42;

function AddTitle() {
  const [textValue, setTextValue] = useState("");
  const [textLength, setTextLength] = useState(0);
  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  const dispatchAction = () => {
    dispatch(setTitle(textValue));
  };

  useEffect(() => {
    if (!!house.ad_title) {
      setTextValue(house.ad_title);
    }
  }, []);
  return (
    <div>
      <AddLayout
        data={{
          isValid: textLength > 5 && textLength < TITLE_LENGTH_LIMIT,
          dispatch: dispatchAction,
        }}
        title={title}
        description={description}
        level={6}
      >
        <textarea
          className={`${styles.textarea} ${
            textLength > TITLE_LENGTH_LIMIT && styles.alert
          }`}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            setTextLength(e.target.value.length);
          }}
          name="title"
        />

        <p style={{ marginTop: 30, marginBottom: 20 }}>
          {textLength}/{TITLE_LENGTH_LIMIT}
        </p>

        {textLength > TITLE_LENGTH_LIMIT && (
          <div className={styles.alertLenght}>
            <BiInfoCircle />
            <span>{TITLE_LENGTH_LIMIT} caractères autorisés au maximum.</span>
          </div>
        )}
      </AddLayout>
    </div>
  );
}

export default AddTitle;
