import React from "react";
import styles from "./Publish.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import Post from "../../components/Post/Post";
import post1 from "../../images/posts/post1.png";

const title = "Publier votre annonce";
const description = "Tout a été configuré, sautons le grand pas !";

function Publish() {
	return (
		<div>
			<AddLayout title={title} description={description} level={7}>
				<div className={styles.content}>
					<Post
						img={post1}
						location={["Paris", "France"]}
						dates={["3 July", "28 July"]}
					/>
				</div>
			</AddLayout>
		</div>
	);
}

export default Publish;
