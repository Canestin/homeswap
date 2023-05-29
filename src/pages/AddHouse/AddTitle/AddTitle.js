import React, { useState } from "react";
import styles from "./AddTitle.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { BiInfoCircle } from "react-icons/bi";

const title = "Now give your ad a title (type: house)";
const description = "Short titles are usually the most effective.";

const TITLE_LENGTH_LIMIT = 42;

function AddTitle() {
  const [textValue, setTextValue] = useState("");
  const [textLength, setTextLength] = useState(0);

  return (
    <div>
      <AddLayout title={title} description={description} level={6}>
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
