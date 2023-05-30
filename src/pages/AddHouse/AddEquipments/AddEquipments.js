import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setEquipements } from "../../../redux/houseSlice";

const title = "Let travelers know what amenities your accommodation has";
const description =
  "You will be able to add equipment once your ad is published.";

function AddEquipments() {
  const [equipmentList, setEquipmentList] = useState([]);
  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  const toggleEquipment = (el) => {
    if (equipmentList.includes(el)) {
      setEquipmentList((l) => l.filter((e) => e !== el));
    } else {
      setEquipmentList((l) => [...l, el]);
    }
  };
  const dispatchAction = () => {
    dispatch(setEquipements(equipmentList));
  };

  useEffect(() => {
    if (!!house.house_amenities && house.house_amenities.length > 0) {
      setEquipmentList(house.house_amenities);
    }
  }, []);

  return (
    <div>
      <AddLayout
        data={{ isValid: equipmentList.length > 0, dispatch: dispatchAction }}
        title={title}
        description={description}
        level={4}
      >
        <div className={styles.container}>
          <div
            onClick={() => toggleEquipment("wifi")}
            className={`${styles.item} ${
              equipmentList.includes("wifi") && styles.selected
            }`}
          >
            <BiWifi />
            <p>Wifi</p>
          </div>
          <div
            onClick={() => toggleEquipment("tv")}
            className={`${styles.item} ${
              equipmentList.includes("tv") && styles.selected
            }`}
          >
            <BiTv />
            <p>Television</p>
          </div>
          <div
            onClick={() => toggleEquipment("kitchen")}
            className={`${styles.item} ${
              equipmentList.includes("kitchen") && styles.selected
            }`}
          >
            <MdOutlineKitchen />
            <p>Kitchen</p>
          </div>
          <div
            onClick={() => toggleEquipment("washing-machine")}
            className={`${styles.item} ${
              equipmentList.includes("washing-machine") && styles.selected
            }`}
          >
            <GiWashingMachine />
            <p> Washing Machine</p>
          </div>
          <div
            onClick={() => toggleEquipment("free-parking")}
            className={`${styles.item} ${
              equipmentList.includes("free-parking") && styles.selected
            }`}
          >
            <MdLocalParking />
            <p>Free parking on site</p>
          </div>
          <div
            onClick={() => toggleEquipment("paid-parking")}
            className={`${styles.item} ${
              equipmentList.includes("paid-parking") && styles.selected
            }`}
          >
            <BiCar />
            <p>Paid parking on site</p>
          </div>
          <div
            onClick={() => toggleEquipment("air-conditioner")}
            className={`${styles.item} ${
              equipmentList.includes("air-conditioner") && styles.selected
            }`}
          >
            <FiAperture />
            <p> Air Conditioner</p>
          </div>
          <div
            onClick={() => toggleEquipment("person-workspace")}
            className={`${styles.item} ${
              equipmentList.includes("person-workspace") && styles.selected
            }`}
          >
            <BsPersonWorkspace />
            <p>Person Workspace</p>
          </div>
          <div
            onClick={() => toggleEquipment("space-sport")}
            className={`${styles.item} ${
              equipmentList.includes("space-sport") && styles.selected
            }`}
          >
            <MdOutlineSportsMartialArts />
            <p>Space for sports</p>
          </div>
        </div>
        <h2 className={styles.plus}>Do you have any unusual equipment?</h2>
        <div className={styles.container} style={{ marginBottom: 50 }}>
          <div
            onClick={() => toggleEquipment("pool")}
            className={`${styles.item} ${
              equipmentList.includes("pool") && styles.selected
            }`}
          >
            <MdPool />
            <p>Pool</p>
          </div>
          <div
            onClick={() => toggleEquipment("bathtub")}
            className={`${styles.item} ${
              equipmentList.includes("bathtub") && styles.selected
            }`}
          >
            <BiBath />
            <p>Bathtub</p>
          </div>
          <div
            onClick={() => toggleEquipment("outdoor-shower")}
            className={`${styles.item} ${
              equipmentList.includes("outdoor-shower") && styles.selected
            }`}
          >
            <GiShower />
            <p>Outdoor Shower</p>
          </div>
          <div
            onClick={() => toggleEquipment("piano")}
            className={`${styles.item} ${
              equipmentList.includes("piano") && styles.selected
            }`}
          >
            <GiPianoKeys />
            <p>Piano</p>
          </div>
          <div
            onClick={() => toggleEquipment("lake-access")}
            className={`${styles.item} ${
              equipmentList.includes("lake-access") && styles.selected
            }`}
          >
            <GiRiver />
            <p>Access to the lake</p>
          </div>
          <div
            onClick={() => toggleEquipment("beach-access")}
            className={`${styles.item} ${
              equipmentList.includes("beach-access") && styles.selected
            }`}
          >
            <MdBeachAccess />
            <p>Beach access</p>
          </div>
          <div
            onClick={() => toggleEquipment("extinguisher")}
            className={`${styles.item} ${
              equipmentList.includes("extinguisher") && styles.selected
            }`}
          >
            <MdFireExtinguisher />
            <p>Extinguisher</p>
          </div>
          <div
            onClick={() => toggleEquipment("smoke-detector")}
            className={`${styles.item} ${
              equipmentList.includes("smoke-detector") && styles.selected
            }`}
          >
            <GiSmokeBomb />
            <p>Smoke detector</p>
          </div>
        </div>
      </AddLayout>
    </div>
  );
}

export default AddEquipments;
