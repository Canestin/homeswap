import React from "react";
import styles from "./HouseDetails.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import star from "../../images/star.png";
import posts from "../../images/posts";
import host_img from "../../images/user3.png";
import CommentBar from "../../components/CommentBar/CommentBar";
import Comment from "../../components/Comment/Comment";
import fakeComments from "../../data/FakeComments";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";

function HouseDetails() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 70 }} className={styles.container}>
        <h2>Beautiful new studio in the center of the capital</h2>
        <div className={styles.meta_infos}>
          <img src={star} alt="star" />
          <span>4.5</span> {"•"}
          <span>10 comments</span> {"•"}
          <span>Paris, France</span>
        </div>

        <div className={styles.infos_images}>
          <div>
            <img src={posts[0]} alt="image_1" />
          </div>
          <div>
            <img src={posts[1]} alt="image_1" />
          </div>
          <div>
            <img src={posts[2]} alt="image_1" />
          </div>
          <div>
            <img src={posts[3]} alt="image_1" />
          </div>
          <div>
            <img src={posts[4]} alt="image_1" />
          </div>
        </div>
      </div>

      <div className={styles.infos_container}>
        <div className={styles.infos_host}>
          <div className={styles.infos_host_title}>
            <div>
              <h1>Entire accommodation: Chez Jane</h1>
              <span>8 travelers • 4 bedrooms • 4 beds • 2 bathrooms</span>
            </div>
            <img src={host_img} alt="host profile img" />
          </div>
          <p>
            Renovated fisherman's house between St Malo and Dinard, the property
            accommodates 8/10 people in a warm atmosphere. Large living
            room/living room with fitted kitchen, 4 bedrooms (160 bed), linen
            room, 2 shower rooms and separate toilet. Fireplace and cozy
            decoration to warm up your evenings. For holidays with family or
            friends, you have direct access to the Rance for unforgettable walks
            and swimming. Come and relax under the willow and enjoy the Emerald
            Coast...
          </p>
          <p className={styles.see_more}>Learn more</p>

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
          <span>Add dates to see the price</span>

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

      <Footer />
    </>
  );
}

export default HouseDetails;
