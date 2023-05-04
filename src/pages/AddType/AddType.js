import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AddType.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import { BiPlus, BiMinus } from "react-icons/bi";

const title = "What type of accommodation will be available to travellers?";
const description = "";

function AddType() {
	const [travelers, setTravelers] = useState(0);
	const [bedrooms, setBedrooms] = useState(0);
	const [bathrooms, setBathrooms] = useState(0);
	const [beds, setBeds] = useState(0);

	return (
		<div>
			<AddLayout title={title} description={description} level={2}>
				<div
					onClick={() => setTravelers((t) => (t = 0 ? t - 1 : 0))}
					className={styles.item}
				>
					<div>
						<p>Un logement entier</p>
						<span>
							Les voyageurs disposent du logement dans son intégralité.
						</span>
					</div>
					<BiPlus />
				</div>
			</AddLayout>
		</div>
	);
}

export default AddType;
