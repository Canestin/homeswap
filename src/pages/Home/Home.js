import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import top from "../../images/top.jpg";
import { GrLocation, GrCalendar } from "react-icons/gr";
import writer1 from "../../images/writer1.png";
import writer2 from "../../images/writer2.png";
import writer3 from "../../images/writer3.png";
import search from "../../images/search.png";
import catnice from "../../images/catnice.png";
import support from "../../images/support.png";
import post1 from "../../images/post1.png";
import post2 from "../../images/post2.png";
import post3 from "../../images/post3.png";
import post4 from "../../images/post4.png";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.top}>
				<img src={top} alt="Vue sur la mer" />
				<div className={styles.topText}>
					<p>Find a free apartment for your vacation</p>
					<p>
						We have several thousand apartments for all tastes around the world
					</p>
				</div>

				<div className={styles.topSearch}>
					<div>
						<GrLocation size={20} />
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
				</div>
			</div>

			<div className={styles.whyUsContainer}>
				<div className={styles.textWhy}>
					<h1>Why Choose Us</h1>
					<p>
						The main reason is because our competitors have disgusting sites,
						but we can' t write that here, so the text here will be different
					</p>
				</div>

				<div className={styles.features}>
					<div className={styles.OneFeature}>
						<img src={search} alt="writer1" />
						<h3>Simple search process</h3>
						<p className={styles.textFeature}>
							We checked it out, even the kid did it, but it was my mom's
							friend's son
						</p>
					</div>
					<div className={styles.OneFeature}>
						<img src={catnice} alt="writer1" />
						<h3>24/7 Support</h3>
						<p className={styles.textFeature}>
							Is there something you don't understand? Feel free to call us.
							Phone number in the footer
						</p>
					</div>
					<div className={styles.OneFeature}>
						<img src={support} alt="writer1" />
						<h3>We are nice</h3>
						<p className={styles.textFeature}>
							Fantasy is over, there will be something really convincing here
						</p>
					</div>
				</div>
			</div>

			<div className={styles.commentsContainer}>
				<h1>Satisfied users</h1>
				<div className={styles.comments}>
					<div className={styles.oneComment}>
						<img src={writer1} alt="writer1" />
						<p className={styles.textComment}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className={styles.cityComment}>
							<span>John Doe </span> <span>- Paris, France</span>
						</div>
					</div>
					<div className={styles.oneComment}>
						<img src={writer2} alt="writer1" />
						<p className={styles.textComment}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className={styles.cityComment}>
							<span>John Doe</span>
							<span>- Paris, France</span>
						</div>
					</div>
					<div className={styles.oneComment}>
						<img src={writer3} alt="writer1" />
						<p className={styles.textComment}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className={styles.cityComment}>
							<span>John Doe</span>
							<span>- Paris, France</span>
						</div>
					</div>
				</div>
				<div>Plus d'avis</div>
			</div>

			<div className={styles.postsContainer}>
				<h1>Most Booked Homes For Rent This Month</h1>
				<div className={styles.posts}>
					<Post
						img={post1}
						location={["Paris", "France"]}
						dates={["3 July", "28 July"]}
						rating={4.8}
					/>
					<Post
						img={post2}
						location={["Barcelona", "Spain"]}
						dates={["4 July", "30 July"]}
						rating={4.7}
					/>
					<Post
						img={post3}
						location={["Brussels", "Belgium"]}
						dates={["12 July", "16 August"]}
						rating={4.8}
					/>
					<Post
						img={post4}
						location={["Lisbon", "Portugal"]}
						dates={["8 July", "27 August"]}
						rating={4.6}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
