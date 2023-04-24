import React from "react";
import styles from "./Post.module.css";
import likeIcon from "../../images/like-icon.png";
import starIcon from "../../images/star.png";

export default function Post({ img, location, dates, rating, style }) {
	return (
		<div className={`${styles.container} ${style && style}`}>
			<div className={`${styles.starIcon} ${styles.icon}`}>
				<img src={starIcon} alt="star icon" /> <span>{rating}</span>
			</div>
			<div className={`${styles.likeIcon} ${styles.icon}`}>
				<img src={likeIcon} alt="like icon" />
			</div>
			<div className={styles.imageContiner}>
				<img src={img} alt="Post" />
			</div>
			<h3>{location[0] + ", " + location[1]}</h3>
			<p>{dates[0] + " — " + dates[1]}</p>
		</div>
	);
}
