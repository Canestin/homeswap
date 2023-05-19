import React from "react";
import { GrLocation, GrCalendar } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";

function Search() {
	return (
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
	);
}

export default Search;
