import React from "react";
import styles from "./AddLayout.module.scss";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const notFilled = "#e0e0e0";
function AddLayout({ children, title, description, level }) {
	const navigate = useNavigate();

	const handleNext = () => {
		switch (level) {
			case 1:
				navigate("/add-numbers");
				break;
			case 2:
				navigate("/equipment");
				break;
			case 3:
				navigate("/add-photos");
				break;
			case 4:
				navigate("/add-title");
				break;
			case 5:
				navigate("/add-description");
				break;
			case 6:
				navigate("/publish");
				break;
			case 7:
				navigate("/");
				break;
			default:
				console.error("Error");
		}
	};

	const handlePrev = () => {
		navigate(-1);
	};
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<img src={logo} alt="logo" />
				<span>Enregistrer</span>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>

				{children}
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottom__level__container}>
					<div style={{ backgroundColor: level > 0 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 1 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 2 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 3 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 4 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 5 ? "black" : notFilled }} />
					<div style={{ backgroundColor: level > 6 ? "black" : notFilled }} />
				</div>
				<div className={styles.bottom__action__container}>
					<span
						onClick={handlePrev}
						className={level === 7 && styles.isNotVisible}
					>
						Retour
					</span>
					<span onClick={handleNext}>
						{level === 7 ? "Publier" : "Suivant"}
					</span>
				</div>
			</div>
		</div>
	);
}

export default AddLayout;
