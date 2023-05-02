import React, { useState } from "react";
import styles from "./AddTitle.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import { BiInfoCircle } from "react-icons/bi";

const title = "À présent, donnez un titre à votre annonce (type : maison)";
const description = "Les titres courts sont généralement les plus efficaces.";

const TITLE_LENGTH_LIMIT = 42;

function AddTitle() {
	const [textValue, setTextValue] = useState("");
	const [textLength, setTextLength] = useState(0);

	return (
		<div>
			<AddLayout title={title} description={description}>
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
