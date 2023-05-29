import React, { useState } from "react";
import styles from "./AddEquipments.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { BiWifi, BiTv, BiCar, BiBath } from "react-icons/bi";
import {
  MdOutlineKitchen,
  MdLocalParking,
  MdOutlineSportsMartialArts,
  MdPool,
  MdBeachAccess,
  MdFireExtinguisher,
} from "react-icons/md";
import {
  GiWashingMachine,
  GiShower,
  GiPianoKeys,
  GiRiver,
  GiSmokeBomb,
} from "react-icons/gi";
import { FiAperture } from "react-icons/fi";
import { BsPersonWorkspace } from "react-icons/bs";

const title = "Let travelers know what amenities your accommodation has";
const description =
  "You will be able to add equipment once your ad is published.";

function AddEquipments() {
  const [equipmentList, setEquipmentList] = useState([]);

  console.log("equipement", equipmentList);

  return (
    <div>
      <AddLayout title={title} description={description} level={4}>
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
        <div className={styles.container} style={{ marginBottom: 50 }}>
          <div className={`${styles.item} ${styles.selected}`}>
            <MdPool />
            <p>Pool</p>
          </div>
          <div className={styles.item}>
            <BiBath />
            <p>Bathtub</p>
          </div>
          <div className={styles.item}>
            <GiShower />
            <p>Outdoor Shower</p>
          </div>
          <div className={styles.item}>
            <GiPianoKeys />
            <p>Piano</p>
          </div>
          <div className={styles.item}>
            <GiRiver />
            <p>Access to the lake</p>
          </div>
          <div className={styles.item}>
            <MdBeachAccess />
            <p>Beach access</p>
          </div>
          <div className={styles.item}>
            <MdFireExtinguisher />
            <p>Extinguisher</p>
          </div>
          <div className={styles.item}>
            <GiSmokeBomb />
            <p>Smoke detector</p>
          </div>
        </div>
      </AddLayout>
    </div>
  );
}

export default AddEquipments;
