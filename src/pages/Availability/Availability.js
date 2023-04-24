import React, { useEffect, useState } from "react";
import styles from "./Availability.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import { duplicatePosts } from "../../data/fakePosts";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrLocation, GrCalendar } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";

function Availability() {
	const [posts, setposts] = useState(duplicatePosts);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	useEffect(() => {
		function handleScroll() {
			const scrollPosition =
				window.innerHeight + document.documentElement.scrollTop;
			const pageHeight = document.documentElement.offsetHeight;

			if (scrollPosition === pageHeight || scrollPosition + 1 >= pageHeight) {
				setPage(page + 1);
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [page]);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setposts(duplicatePosts.concat(posts));
			setLoading(false);
		}, 1000);
	}, [page]);

	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1>Availability</h1>

				<div className={styles.topSearch}>
					<div>
						<GrLocation size={24} />
						<div className={styles.topSearchInfos}>
							<span>Where ?</span>
							<input type="text" placeholder="Find a destination" />
						</div>
					</div>
					<div>
						<GrCalendar size={20} />
						<div className={styles.topSearchInfos}>
							<span>When ?</span>
							<input type="text" placeholder="Select a date" />
						</div>
					</div>
					<div>
						<RiSearch2Line />
					</div>
				</div>

				<div className={styles.post}>
					{posts.map((post, id) => (
						<Post
							key={id}
							img={post.img}
							location={post.location}
							dates={post.dates}
							rating={post.rating}
							style={styles.onePost}
						/>
					))}
				</div>

				{loading && (
					<div className={styles.loading}>
						<AiOutlineLoading3Quarters />
					</div>
				)}
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Availability;
