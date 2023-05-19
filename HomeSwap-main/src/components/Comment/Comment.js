import React from "react";
import styles from "./Comment.module.scss";

function Comment({ writerImg, writerName, date, content }) {
	return (
		<div>
			<div className={styles.comment_header}>
				<img src={writerImg} alt="host profile img" />
				<div>
					<h3>{writerName}</h3>
					<span>{date}</span>
				</div>
			</div>
			<p className={styles.comment_body}>{content}</p>
		</div>
	);
}

export default Comment;
