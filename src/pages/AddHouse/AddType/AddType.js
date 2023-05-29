import React, { useState } from "react";
import styles from "./AddType.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMeetingRoom, MdOutlineBedroomParent } from "react-icons/md";

const title = "What type of accommodation will be available to travellers?";
const description = "";

function AddType() {
  const [type, setType] = useState(null);

  return (
    <div>
      <AddLayout title={title} description={description} level={1}>
        <div
          onClick={() => setType("entire")}
          className={`${styles.item} ${type === "entire" && styles.selected}`}
        >
          <div>
            <p>An entire dwelling</p>
            <span>Travelers have the accommodation in its entirety.</span>
          </div>
          <AiOutlineHome size={40} />
        </div>
        <div
          onClick={() => setType("room")}
          className={`${styles.item} ${type === "room" && styles.selected}`}
        >
          <div>
            <p>Room</p>
            <span>
              Travelers have their own bedroom in an accommodation and have
              access to shared spaces.
            </span>
          </div>
          <MdOutlineMeetingRoom size={40} />
        </div>
        <div
          onClick={() => setType("shared_room")}
          className={`${styles.item} ${
            type === "shared_room" && styles.selected
          }`}
        >
          <div>
            <p>A shared room</p>
            <span>
              Travelers sleep in a common room or space that is shared with you
              or other people.
            </span>
          </div>
          <MdOutlineBedroomParent size={40} />
        </div>
      </AddLayout>
    </div>
  );
}

export default AddType;
