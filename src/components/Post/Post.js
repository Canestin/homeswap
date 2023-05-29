import React from "react";
import styles from "./Post.module.scss";
import likeIcon from "../../images/like-icon.png";
import starIcon from "../../images/star.png";
import { useNavigate } from "react-router-dom";

const datesX = ["10 August", "25 August"];
const ratingX = 4.7;

export default function Post({ img, location, dates, rating, style, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/house-details/${id}`)}
      className={`${styles.container} ${style && style}`}
    >
      {ratingX && (
        <div className={`${styles.starIcon} ${styles.icon}`}>
          <img src={starIcon} alt="star icon" /> <span>{ratingX}</span>
        </div>
      )}
      <div className={`${styles.likeIcon} ${styles.icon}`}>
        <img src={likeIcon} alt="like icon" />
      </div>
      <div className={styles.imageContiner}>
        <img src={img} alt="Post" />
      </div>
      {location && <h3>{location[0] + ", " + location[1]}</h3>}
      {datesX && <p>{datesX[0] + " — " + datesX[1]}</p>}
    </div>
  );
}
