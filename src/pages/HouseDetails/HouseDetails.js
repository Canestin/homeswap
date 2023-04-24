import React from "react";
import styles from "./HouseDetails.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import star from "../../images/star.png";
import posts from "../../images/posts";

function HouseDetails() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h2>Beautiful new studio in the center of the capital</h2>
				<div className={styles.meta_infos}>
					<img src={star} alt="star" />
					<span>4.5</span> {"•"}
					<span>10 comments</span> {"•"}
					<span>Paris, France</span>
				</div>

				<div className={styles.infos_images}>
					<div>
						<img src={posts[0]} alt="image_1" />
					</div>
					<div>
						<img src={posts[1]} alt="image_1" />
					</div>
					<div>
						<img src={posts[2]} alt="image_1" />
					</div>
					<div>
						<img src={posts[3]} alt="image_1" />
					</div>
					<div>
						<img src={posts[4]} alt="image_1" />
					</div>
				</div>

				<h1>Coming soon...</h1>
			</div>
			<Footer />
		</>
	);
}

export default HouseDetails;
