import React from "react";
import styles from "./Publish.module.scss";
import AddLayout from "../../../components/AddLayout/AddLayout";
import Post from "../../../components/Post/Post";
import { useSelector } from "react-redux";
import { createHouse, uploadImages } from "../../../services/housingService";

const title = "Publish your ad!";
const description = "Everything has been configured, let's take the big step!";

function Publish() {
  const house = useSelector((state) => state.house);

  const dispatchAction = async () => {
    uploadImages([
      house.photo_one_to_send,
      house.photo_two_to_send,
      house.photo_three_to_send,
    ]);
    await createHouse(house);
  };
  return (
    <div>
      <AddLayout
        data={{ isValid: true, dispatch: dispatchAction }}
        title={title}
        description={description}
        level={8}
      >
        <div className={styles.content}>
          <Post
            img={house.photo_one_to_display}
            location={[house.city, house.country]}
            dates={["3 July", "28 July"]}
          />
        </div>
      </AddLayout>
    </div>
  );
}

export default Publish;
