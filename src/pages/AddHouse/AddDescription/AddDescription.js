import React, { useState } from "react";
import styles from "./AddDescription.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { BiInfoCircle } from "react-icons/bi";

const title = "Create your description";
const description = "Share what makes your home unique.";

const DESC_LENGTH_LIMIT = 700;

function AddDescription() {
  const [desc, setDesc] = useState(
    "Have a pleasant stay in this comfortable accommodation."
  );
  const [textLength, setTextLength] = useState(0);

  return (
    <div>
      <AddLayout title={title} description={description} level={7}>
        <textarea
          className={`${styles.textarea} ${
            textLength > DESC_LENGTH_LIMIT && styles.alert
          }`}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            setTextLength(e.target.value.length);
          }}
          name="title"
        />

        <p style={{ marginTop: 30, marginBottom: 20 }}>
          {textLength}/{DESC_LENGTH_LIMIT}
        </p>

        {textLength > DESC_LENGTH_LIMIT && (
          <div className={styles.alertLenght}>
            <BiInfoCircle />
            <span>{DESC_LENGTH_LIMIT} caractères autorisés au maximum.</span>
          </div>
        )}
      </AddLayout>
    </div>
  );
}

export default AddDescription;
