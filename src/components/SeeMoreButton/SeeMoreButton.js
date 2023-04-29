import React from "react";
import styles from "./SeeMoreButton.module.scss";

function SeeMoreButton({ onClick, text }) {
	return <div className={styles.acc_offers_see_all}>{text}</div>;
}

export default SeeMoreButton;
