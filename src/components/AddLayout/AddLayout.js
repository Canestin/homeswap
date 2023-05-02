import React from "react";
import styles from "./AddLayout.module.scss";
import logo from "../../images/logo.png";

function AddLayout({ children, title, description }) {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<img src={logo} alt="logo" />
				<span>Enregistrer</span>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>

				{children}
			</div>

			<div className={styles.bottom}>
				<span>Retour</span>
				<span>Suivant</span>
			</div>
		</div>
	);
}

export default AddLayout;
