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
					<li>Availability</li>
					<li>About</li>
					<li>Contacts</li>
				</ul>
			</div>
			<div className={styles.right}>
				<span className={styles.putAcc}>List my property on HomeSwap</span>
				<BiUserCircle cursor="pointer" color={Colors.red} size={40} />
			</div>
		</div>
	);
}
