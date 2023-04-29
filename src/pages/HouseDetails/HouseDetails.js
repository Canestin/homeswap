import React from "react";
import styles from "./HouseDetails.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import star from "../../images/star.png";
import posts from "../../images/posts";
import host_img from "../../images/user3.png";
import CommentBar from "../../components/CommentBar/CommentBar";
import Comment from "../../components/Comment/Comment";
import fakeComments from "../../data/FakeComments";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";

function HouseDetails() {
	return (
		<>
			<Header />
			<div style={{ marginTop: 70 }} className={styles.container}>
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
			</div>

			<div className={styles.infos_container}>
				<div className={styles.infos_host}>
					<div className={styles.infos_host_title}>
						<div>
							<h1>Logement entier : Chez Jane</h1>
							<span>8 voyageurs • 4 chambres • 4 lits • 2 salles de bain</span>
						</div>
						<img src={host_img} alt="host profile img" />
					</div>
					<p>
						Maison de pêcheur rénovée entre St Malo et Dinard, la propriété
						accueille 8/10 personnes dans une ambiance chaleureuse. Grand
						salon/séjour avec cuisine équipée, 4 chambres (lit de 160),
						lingerie, 2 salles d’eau et wc sépare. Cheminee et decoration cosi
						pour réchauffer vos soirées. Pour des vacances en famille ou entre
						amis, vous avez un accès direct à la Rance pour des balades et
						baignade inoubliables. Venez vous détendre sous le saule et profitez
						de la Côte d Emeraude...
					</p>
					<p className={styles.see_more}>En savoir plus</p>

					<div className={styles.acc_offers}>
						<h2>Ce que propose ce logement</h2>

						<ul>
							<li>Wifi</li>
							<li>Cuisine</li>
							<li>Chauffage</li>
							<li>TV</li>
							<li>Machine à laver</li>
							<li>Cheminée</li>
							<li>Barbecue</li>
							<li>Table à langer</li>
							<li>Chaise haute</li>
							<li>Table à langer</li>
							<li>Chaise haute</li>
							<li>Table à langer</li>
						</ul>

						<SeeMoreButton text="Afficher les 20 équipements" />
					</div>
				</div>

				<div className={styles.infos_book}>
					<span>Ajoutez des dates pour voir le prix</span>

					<div className={styles.meta_infos}>
						<img src={star} alt="star" />
						<span>4.5</span> {"•"}
						<span>10 comments</span>
					</div>

					<div className={styles.infos_context}>
						<div>
							<span>ARRIVÉE</span>
							<span>22/05/2023</span>
						</div>
						<div>
							<span>DÉPART</span>
							<span>29/05/2023</span>
						</div>
						<div>
							<span>VOYAGEURS</span>
							<span>1 voyageur</span>
						</div>
					</div>

					<div className={styles.context_reserv}>Réserver</div>
				</div>
			</div>

			<div className={styles.container}>
				<div className={styles.comments_infos}>
					<img src={star} alt="star" />
					<span>4.5</span> {"•"}
					<span>10 comments</span>
				</div>

				<div className={styles.comments_notes}>
					<div>
						<span>Propreté</span>
						<CommentBar note={4.7} />
					</div>
					<div>
						<span>Communication</span>
						<CommentBar note={2.8} />
					</div>
					<div>
						<span>Précision</span>
						<CommentBar note={4.1} />
					</div>
					<div>
						<span>Emplacement</span>
						<CommentBar note={4.9} />
					</div>
				</div>

				<div className={styles.comments_container}>
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
				<SeeMoreButton text="Afficher plus de commentaires" />
			</div>

			<Footer />
		</>
	);
}

export default HouseDetails;
