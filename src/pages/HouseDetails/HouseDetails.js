import React, { useEffect, useState } from "react";
import styles from "./HouseDetails.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import star from "../../images/star.png";
import host_img from "../../images/user3.png";
import CommentBar from "../../components/CommentBar/CommentBar";
import Comment from "../../components/Comment/Comment";
import fakeComments from "../../data/FakeComments";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import { useParams } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { getHouseById } from "../../routes/housing";
import { useNavigate } from "react-router-dom";

function HouseDetails() {
  const [houseDetails, setHouseDetails] = useState(null);
  const [poster, setPoster] = useState(null);
  const [showImages, setShowImages] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const { houseId } = useParams();
  const navigate = useNavigate();

  const handleClickImage = (scr) => {
    setShowImages(true);
    setScroll(scr);
    setTranslateX((100 / 3) * -scr);
  };
  const handleClickPrev = () => {
    if (scroll === 0) return;
    setTranslateX(translateX + 100 / 3);
    setScroll(scroll - 1);
  };
  const handleClickNext = () => {
    if (scroll === 2) return;
    setTranslateX(translateX - 100 / 3);
    setScroll(scroll + 1);
  };

  let timeOut;
  useEffect(() => {
    const fetchHouseDetails = async () => {
      const house = await getHouseById(houseId);
      setHouseDetails(house);

      if (!house) {
        timeOut = setTimeout(() => navigate("/availability"), 2000);
      } else {
        clearTimeout(timeOut);
      }
    };

    fetchHouseDetails();
  }, [houseId]);

  if (!houseDetails) {
    return (
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Not Found...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: 70 }} className={styles.container}>
        <h2>{houseDetails?.ad_title}</h2>
        <div className={styles.meta_infos}>
          <img src={star} alt="star" />
          <span>4.5</span> {"•"}
          <span>10 comments</span> {"•"}
          <span>
            {houseDetails?.city}, {houseDetails?.country}
          </span>
        </div>

        <div className={styles.infos_images}>
          <div onClick={() => handleClickImage(0)}>
            <img src={houseDetails?.photo_one} alt="image_1" />
          </div>
          <div onClick={() => handleClickImage(1)}>
            <img src={houseDetails?.photo_two} alt="image_2" />
          </div>
          <div onClick={() => handleClickImage(2)}>
            <img src={houseDetails?.photo_three} alt="image_3" />
          </div>
          {/* <div>
            <img src={posts[3]} alt="image_1" />
          </div>
          <div>
            <img src={posts[4]} alt="image_1" />
          </div> */}
        </div>
      </div>

      <div className={styles.infos_container}>
        <div className={styles.infos_host}>
          <div className={styles.infos_host_title}>
            <div>
              <h1>Entire accommodation: at Jane</h1>
              <span>
                {houseDetails?.number_of_travellers} travelers •{" "}
                {houseDetails?.number_of_beds} bedrooms •{" "}
                {houseDetails?.number_of_bedrooms} beds •{" "}
                {houseDetails?.number_of_bathrooms} bathrooms
              </span>
            </div>
            <img src={host_img} alt="host profile img" />
          </div>
          <p>{houseDetails?.description}</p>

          <div className={styles.acc_offers}>
            <h2>What this accommodation offers</h2>

            <ul>
              <li>Wifi</li>
              <li>Food</li>
              <li>Heating</li>
              <li>TV</li>
              <li>Washing machine</li>
              <li>Chimney</li>
              <li>Barbecue</li>
              <li>Dinner table</li>
              <li>High chair</li>
              <li>Dinner table</li>
              <li>High chair</li>
              <li>Dinner table</li>
            </ul>

            <SeeMoreButton text="Afficher les 20 équipements" />
          </div>
        </div>

        <div className={styles.infos_book}>
          <span>Add dates to see the price</span> <br />
          <div className={styles.meta_infos}>
            <img src={star} alt="star" />
            <span>4.5</span> {"•"}
            <span>10 comments</span>
          </div>
          <div className={styles.infos_context}>
            <div>
              <span>ARRIVAL</span>
              <span>22/05/2023</span>
            </div>
            <div>
              <span>DEPARTURE</span>
              <span>29/05/2023</span>
            </div>
            <div>
              <span>TRAVELERS</span>
              <span>1 Traveler</span>
            </div>
          </div>
          <div className={styles.context_reserv}>Book</div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.comments_infos}>
          <img src={star} alt="star" />
          <span>4.5</span> {"•"}
          <span>10 comments</span>
        </div>

        <div className={styles.comments_notes}>
          <div>
            <span>Cleanliness</span>
            <CommentBar note={4.7} />
          </div>
          <div>
            <span>Communication</span>
            <CommentBar note={2.8} />
          </div>
          <div>
            <span>Accuracy</span>
            <CommentBar note={4.1} />
          </div>
          <div>
            <span>Location</span>
            <CommentBar note={4.9} />
          </div>
        </div>

        <div className={styles.comments_container}>
          {fakeComments.map((comment, i) => (
            <Comment
              key={i}
              writerImg={comment.writerImg}
              writerName={comment.writerName}
              date={comment.date}
              content={comment.content}
            />
          ))}
        </div>
        <SeeMoreButton text="Show more comments" />
      </div>

      {showImages && (
        <div className={styles.seeImagesContainer}>
          <div
            className={`${styles.scroll_prev} ${
              scroll === 0 && styles.comments_no_scrollable
            }`}
            onClick={handleClickPrev}
          >
            <GrFormPrevious />
          </div>
          <div className={styles.seeImages}>
            <div
              style={{ transform: `translateX(${translateX}%)` }}
              className={styles.imageSlider}
            >
              <div>
                <img src={houseDetails?.photo_one} alt="image_1" />
              </div>
              <div>
                <img src={houseDetails?.photo_two} alt="image_2" />
              </div>
              <div>
                <img src={houseDetails?.photo_three} alt="image_3" />
              </div>
            </div>
          </div>
          <div
            className={`${styles.scroll_next} ${
              scroll === 2 && styles.comments_no_scrollable
            }`}
            onClick={handleClickNext}
          >
            <GrFormNext color="white" />
          </div>

          <div
            onClick={() => setShowImages(false)}
            className={styles.closeSeeImages}
          >
            <span>Close</span>
          </div>
          <div className={styles.currentImage}>
            <span>{scroll + 1}/3</span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HouseDetails;
