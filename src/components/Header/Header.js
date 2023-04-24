import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";
import { BiUserCircle } from "react-icons/bi";
import Colors from "../../constants/Colors";

export default function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img src={logo} alt="logo" />
				<ul>
					<li>Disponibilités</li>
					<li>A Propos</li>
					<li>Contacts</li>
				</ul>
			</div>
			<div className={styles.right}>
				<BiUserCircle color={Colors.red} size={40} />
			</div>
		</div>
	);
}
