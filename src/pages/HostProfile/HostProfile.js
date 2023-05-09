import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  IoCheckmarkOutline,
  IoLanguageOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { VscVerified } from "react-icons/vsc";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import fakeComments from "../../data/FakeComments";
import { fakePosts } from "../../data/FakePosts";
import meImg from "../../images/me.png";
import styles from "./HostProfile.module.scss";

function HostProfile() {
  const [scroll, setScroll] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleClickPrev = () => {
    if (scroll === 0) return;
    setTranslateX(translateX + 50);
    setScroll(scroll - 1);
  };
  const handleClickNext = () => {
    if (scroll === 1) return;
    setTranslateX(translateX - 50);
    setScroll(scroll + 1);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.left_user}>
            <div className={styles.left_user_infos}>
              <img src={meImg} alt="user" />
              <p>Jane</p>
              <span>Host</span>
            </div>
            <div className={styles.left_user_stats}>
              <div>
                <h2>151</h2>
                <span>ratings</span>
              </div>
              <div>
                <h2>4.8</h2>
                <span>in overall rating</span>
              </div>
              <div>
                <h2>2</h2>
                <span>years of experience as a host</span>
              </div>
            </div>
          </div>

          <div className={styles.left_verif}>
            <h2>Verifications made by Jane</h2>

            <div>
              <IoCheckmarkOutline />
              <p>Identify</p>
            </div>
            <div>
              <IoCheckmarkOutline />
              <p>E-mail address</p>
            </div>

            <p>Learn more about identity verification</p>
          </div>
        </div>
        <div className={styles.right}>
          <h1>About me</h1>
          <div className={styles.right_intro}>
            <div>
              <div>
                <IoLanguageOutline />
                <span>Spoken languages : French </span>
              </div>
              <div>
                <IoLocationOutline />
                <span>I live in : Paris, France </span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              doloribus ullam cupiditate.
            </p>
          </div>

          <div className={styles.right_intro_title}>
            <h2>Traveler reviews of Jane</h2>
            <div>
              <div
                className={`${styles.scroll_prev} ${
                  scroll === 0 && styles.comments_no_scrollable
                }`}
                onClick={handleClickPrev}
              >
                <GrFormPrevious />
              </div>
              <div
                className={`${styles.scroll_next} ${
                  scroll === 1 && styles.comments_no_scrollable
                }`}
                onClick={handleClickNext}
              >
                <GrFormNext />
              </div>
            </div>
          </div>

          <div className={styles.right_comments_container}>
            <div
              style={{ transform: `translateX(${translateX}%)` }}
              className={styles.right_comments}
            >
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
          </div>

          <SeeMoreButton text="Afficher plus de commentaires" />

          <div className={styles.right_posts}>
            <h2>Announcements posted by Jane</h2>

            <div className={styles.posts}>
              {fakePosts.slice(0, 3).map((post, id) => (
                <Post
                  key={id}
                  img={post.img}
                  location={post.location}
                  rating={post.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HostProfile;
