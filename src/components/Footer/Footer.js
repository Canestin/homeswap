import React from "react";
import styles from "./Footer.module.css";
import { TfiLinkedin, TfiFacebook } from "react-icons/tfi";
import { GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr";
import sendImg from "../../images/send-email.png";

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div>
					<h2>Title of section</h2>
					<span>Page title</span>
					<span>Page title</span>
					<span>Page title</span>
				</div>
				<div>
					<h2>Title of section</h2>
					<span>Page title</span>
					<span>Page title</span>
					<span>Page title</span>
				</div>
				<div>
					<h2>Title of section</h2>
					<span>Page title</span>
					<span>Page title</span>
					<span>Page title</span>
				</div>
				<div>
					<h2>Subscribe to Newsletter</h2>
					<span>Your email</span>
					<div className={styles.sendEmail}>
						<input type="text" />
						<div>
							<img src={sendImg} alt="send email" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<span>© 2023 HomeSwap - ISEP</span>
				<div>
					<div>
						<TfiLinkedin />
					</div>
					<div>
						<TfiFacebook />
					</div>
					<div>
						<GrInstagram />
					</div>
					<div>
						<GrYoutube />
					</div>
					<div>
						<GrTwitter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
