import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AddPlace.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";

const title = "Où est situé votre logement ?";
const description =
	"Votre adresse est uniquement communiquée aux voyageurs une fois leur réservation effectuée.";

function AddPlace() {
	const [showCountryLabel, setShowCountryLabel] = useState(false);
	const [showCityLabel, setShowCityLabel] = useState(false);
	const [showPostalCodeLabel, setShowPostalCodeLabel] = useState(false);
	const [showAddressLabel, setShowAddressLabel] = useState(false);
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [address, setAddress] = useState("");
	const countryRef = useRef(null);
	const cityRef = useRef(null);
	const postalCodeRef = useRef(null);
	const addressRef = useRef(null);

	const handleFocus = useCallback((inputRef) => {
		switch (inputRef) {
			case countryRef:
				setShowCountryLabel(true);
				break;
			case cityRef:
				setShowCityLabel(true);
				break;
			case postalCodeRef:
				setShowPostalCodeLabel(true);
				break;
			case addressRef:
				setShowAddressLabel(true);
				break;
			default:
				console.error("No matches found!");
		}
		inputRef.current.placeholder = "";
	}, []);

	const handleBlur = useCallback((inputRef) => {
		console.table("inputRef", inputRef);
		switch (inputRef.current.name) {
			case "country":
				if (!inputRef.current.value) {
					setShowCountryLabel(false);
				} else {
					setShowCountryLabel(true);
				}
				inputRef.current.placeholder = "Country";

				break;
			case "city":
				if (!inputRef.current.value) {
					setShowCityLabel(false);
				} else {
					setShowCityLabel(true);
				}
				inputRef.current.placeholder = "City";

				break;
			case "postalCode":
				if (!inputRef.current.value) {
					setShowPostalCodeLabel(false);
				} else {
					setShowPostalCodeLabel(true);
				}
				inputRef.current.placeholder = "Postal Code";

				break;
			case "address":
				if (!inputRef.current.value) {
					setShowAddressLabel(false);
				} else {
					setShowAddressLabel(true);
				}
				inputRef.current.placeholder = "Address";

				break;
			default:
				console.error("No matches found!");
		}
	}, []);

	useEffect(() => {
		const input1 = countryRef.current;
		input1.addEventListener("focus", () => handleFocus(countryRef));
		input1.addEventListener("blur", () => handleBlur(countryRef));

		const input2 = cityRef.current;
		input2.addEventListener("focus", () => handleFocus(cityRef));
		input2.addEventListener("blur", () => handleBlur(cityRef));

		const input3 = postalCodeRef.current;
		input3.addEventListener("focus", () => handleFocus(postalCodeRef));
		input3.addEventListener("blur", () => handleBlur(postalCodeRef));

		const input4 = addressRef.current;
		input4.addEventListener("focus", () => handleFocus(addressRef));
		input4.addEventListener("blur", () => handleBlur(addressRef));

		return () => {
			input1.removeEventListener("focus", () => handleFocus(countryRef));
			input1.removeEventListener("blur", () => handleBlur(countryRef));
			input2.removeEventListener("focus", () => handleFocus(cityRef));
			input2.removeEventListener("blur", () => handleBlur(cityRef));
			input3.removeEventListener("focus", () => handleFocus(postalCodeRef));
			input3.removeEventListener("blur", () => handleBlur(postalCodeRef));
			input4.removeEventListener("focus", () => handleFocus(addressRef));
			input4.removeEventListener("blur", () => handleBlur(addressRef));
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [!!country, !!city, !!postalCode, !!address]);

	return (
		<div>
			<AddLayout title={title} description={description}>
				<div className={styles.input}>
					{showCountryLabel && <span>Country</span>}
					<input
						ref={countryRef}
						type="text"
						name="country"
						placeholder="Country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
				</div>
				<div className={styles.input}>
					{showCityLabel && <span>City</span>}

					<input
						ref={cityRef}
						type="text"
						name="city"
						placeholder="City"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>
				<div className={styles.input}>
					{showPostalCodeLabel && <span>Postal Code</span>}
					<input
						ref={postalCodeRef}
						type="text"
						name="postalCode"
						placeholder="Postal code"
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}
					/>
				</div>
				<div className={styles.input}>
					{showAddressLabel && <span>Address</span>}
					<input
						ref={addressRef}
						type="text"
						name="address"
						placeholder="Address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
			</AddLayout>
		</div>
	);
}

export default AddPlace;
