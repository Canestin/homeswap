import React, { useRef, useState } from "react";
import styles from "./HostProfile.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
	IoLanguageOutline,
	IoLocationOutline,
	IoCheckmarkOutline,
} from "react-icons/io5";
import { VscVerified } from "react-icons/vsc";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Comment from "../../components/Comment/Comment";
import fakeComments from "../../data/FakeComments";
import meImg from "../../images/me.png";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import { fakePosts } from "../../data/FakePosts";
import Post from "../../components/Post/Post";

function HostProfile() {
	const [scroll, setScroll] = useState(0);
	const [translateX, setTranslateX] = useState(0);

	const handleClickPrev = () => {
		if (scroll === 0) return;
		setTranslateX(translateX + 50);
		setScroll(scroll - 1);
	};
	const handleClickNext = () => {
		if (scroll === 1) return;
		setTranslateX(translateX - 50);
		setScroll(scroll + 1);
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.left_user}>
						<div className={styles.left_user_infos}>
							<img src={meImg} alt="user" />
							<p>Jane</p>
							<div>
								<span>Host</span>
								<VscVerified color="red" />
							</div>
						</div>
						<div className={styles.left_user_stats}>
							<div>
								<h2>151</h2>
								<span>évaluations</span>
							</div>
							<div>
								<h2>4.80</h2>
								<span>en note globale</span>
							</div>
							<div>
								<h2>2</h2>
								<span>années d'expériences en tant qu'hôte</span>
							</div>
						</div>
					</div>

					<div className={styles.left_verif}>
						<h2>Vérifications effectuées par Jane</h2>

						<div>
							<IoCheckmarkOutline />
							<p>Identité</p>
						</div>
						<div>
							<IoCheckmarkOutline />
							<p>Adresse e-mail</p>
						</div>

						<p>Learn more about identity verification</p>
					</div>
				</div>
				<div className={styles.right}>
					<h1>À propos de moi</h1>
					<div className={styles.right_intro}>
						<div>
							<div>
								<IoLanguageOutline />
								<span>Langues parlées : Français </span>
							</div>
							<div>
								<IoLocationOutline />
								<span>Je vis à : Paris, France </span>
							</div>
						</div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
							doloribus ullam cupiditate.
						</p>
					</div>

					<div className={styles.right_intro_title}>
						<h2>Commentaires des voyageurs sur Jane</h2>
						<div>
							<div
								className={`${styles.scroll_prev} ${
									scroll === 0 && styles.comments_no_scrollable
								}`}
								onClick={handleClickPrev}
							>
								<GrFormPrevious />
							</div>
							<div
								className={`${styles.scroll_next} ${
									scroll === 1 && styles.comments_no_scrollable
								}`}
								onClick={handleClickNext}
							>
								<GrFormNext />
							</div>
						</div>
					</div>

					<div className={styles.right_comments_container}>
						<div
							style={{ transform: `translateX(${translateX}%)` }}
							className={styles.right_comments}
						>
							{fakeComments.map((comment, i) => (
								<Comment
									key={i}
									writerImg={comment.writerImg}
									writerName={comment.writerName}
									date={comment.date}
									content={comment.content}
								/>
							))}
						</div>
					</div>

					<SeeMoreButton text="Afficher plus de commentaires" />

					<div className={styles.right_posts}>
						<h2>Annonces publiées par Jane</h2>

						<div className={styles.posts}>
							{fakePosts.slice(0, 3).map((post, id) => (
								<Post
									key={id}
									img={post.img}
									location={post.location}
									rating={post.rating}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default HostProfile;
