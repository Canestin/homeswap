import React, { useState } from "react";
import styles from "./AddPhotos.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import { TbPhotoPlus, TbPlus } from "react-icons/tb";

const title = "Ajoutez quelques photos de votre maison";
const description =
	"Pour commencer, vous aurez besoin d'au moins 3 photos. Vous pourrez en ajouter d'autres ou faire des modifications plus tard.";

function AddPhotos() {
	const [image1, setImage1] = useState(null);
	const [image2, setImage2] = useState(null);
	const [image3, setImage3] = useState(null);
	const [image4, setImage4] = useState(null);

	console.log("image1", image1);

	return (
		<div>
			<AddLayout title={title} description={description}>
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
								<span>Ajouter une de plus</span>
							</>
						)}
					</div>
				</div>
			</AddLayout>
		</div>
	);
}

export default AddPhotos;
