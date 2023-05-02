import React, { useState } from "react";
import styles from "./Equipment.module.scss";
import AddLayout from "../../components/AddLayout/AddLayout";
import { BiWifi, BiTv, BiCar, BiBath } from "react-icons/bi";
import {
	MdOutlineKitchen,
	MdLocalParking,
	MdOutlineSportsMartialArts,
	MdPool,
} from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { FiAperture } from "react-icons/fi";
import { BsPersonWorkspace } from "react-icons/bs";

const title =
	"Indiquez aux voyageurs quels sont les équipements de votre logement";
const description =
	"Vous pourrez ajouter des équipements une fois votre annonce publiée.";

function Equipment() {
	const [equipmentList, setEquipmentList] = useState([]);

	console.log("equipement", equipmentList);

	return (
		<div>
			<AddLayout title={title} description={description}>
				<div className={styles.container}>
					<div
						onClick={() => setEquipmentList((l) => [...l, "wifi"])}
						className={`${styles.item} ${styles.selected}`}
					>
						<BiWifi />
						<p>Wifi</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "tv"])}
						className={styles.item}
					>
						<BiTv />
						<p>Television</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "kitchen"])}
						className={styles.item}
					>
						<MdOutlineKitchen />
						<p>Kitchen</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "washing-machine"])}
						className={styles.item}
					>
						<GiWashingMachine />
						<p> Washing Machine</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "free-parking"])}
						className={styles.item}
					>
						<MdLocalParking />
						<p>Free parking on site</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "paid-parking"])}
						className={styles.item}
					>
						<BiCar />
						<p>Paid parking on site</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "air-conditioner"])}
						className={styles.item}
					>
						<FiAperture />
						<p> Air Conditioner</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "person-workspace"])}
						className={styles.item}
					>
						<BsPersonWorkspace />
						<p>Person Workspace</p>
					</div>
					<div
						onClick={() => setEquipmentList((l) => [...l, "space-sport"])}
						className={styles.item}
					>
						<MdOutlineSportsMartialArts />
						<p>Space for sports</p>
					</div>
				</div>
				<h2 className={styles.plus}>Do you have any unusual equipment?</h2>
				<div className={styles.container}>
					<div className={`${styles.item} ${styles.selected}`}>
						<MdPool />
						<p>Pool</p>
					</div>
					<div className={styles.item}>
						<BiBath />
						<p>Bathtub</p>
					</div>
					<div className={styles.item}>
						<MdOutlineKitchen />
						<p>Kitchen</p>
					</div>
					<div className={styles.item}>
						<GiWashingMachine />
						<p> Washing Machine</p>
					</div>
					<div className={styles.item}>
						<MdLocalParking />
						<p>Free parking on site</p>
					</div>
					<div className={styles.item}>
						<BiCar />
						<p>Paid parking on site</p>
					</div>
					<div className={styles.item}>
						<FiAperture />
						<p> Air Conditioner</p>
					</div>
					<div className={styles.item}>
						<BsPersonWorkspace />
						<p>Person Workspace</p>
					</div>
					<div className={styles.item}>
						<MdOutlineSportsMartialArts />
						<p>Space for sports</p>
					</div>
				</div>
				<h2 className={styles.plus}>Do you have this safety equipment?</h2>
				<div style={{ marginBottom: 60 }} className={styles.container}>
					<div className={`${styles.item} ${styles.selected}`}>
						<BiWifi />
						<p>Wifi</p>
					</div>
					<div className={styles.item}>
						<BiTv />
						<p>Television</p>
					</div>
					<div className={styles.item}>
						<MdOutlineKitchen />
						<p>Kitchen</p>
					</div>
					<div className={styles.item}>
						<GiWashingMachine />
						<p> Washing Machine</p>
					</div>
					<div className={styles.item}>
						<MdLocalParking />
						<p>Free parking on site</p>
					</div>
					<div className={styles.item}>
						<BiCar />
						<p>Paid parking on site</p>
					</div>
					<div className={styles.item}>
						<FiAperture />
						<p> Air Conditioner</p>
					</div>
					<div className={styles.item}>
						<BsPersonWorkspace />
						<p>Person Workspace</p>
					</div>
					<div className={styles.item}>
						<MdOutlineSportsMartialArts />
						<p>Space for sports</p>
					</div>
				</div>
			</AddLayout>
		</div>
	);
}

export default Equipment;
