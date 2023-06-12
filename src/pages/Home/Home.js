import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import top from "../../images/top.jpg";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import search from "../../images/search.png";
import catnice from "../../images/catnice.png";
import support from "../../images/support.png";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import { Helmet } from "react-helmet";
import { getRecentHouses } from "../../routes/housing";

function DashboardHome() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const posts = await getRecentHouses();
      setRecentPosts(posts);
    };

    fetchRecentPosts();
  }, []);
  return (
    <>
      <Helmet>
        <title>HomeSwap</title>
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="Make your home profitable" />
        <meta property="og:title" content="HomeSwap" />
        <meta property="og:description" content="Make your home profitable" />
        <meta property="og:url" content="https://www.homeswap.co.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.container}>
        <Header />
        <div className={styles.top}>
          <img src={top} alt="Vue sur la mer" />
          <div className={styles.topText}>
            <p>Find a free apartment for your vacation</p>
            <p>
              We have several thousand apartments for all tastes around the
              world
            </p>
          </div>

          <div className={styles.topSearch}>
            <Search />
          </div>
        </div>

        <div className={styles.whyUsContainer}>
          <div className={styles.textWhy}>
            <h1>Why Choose Us</h1>
            <p>
              The main reason is because our competitors have disgusting sites,
              but we can' t write that here, so the text here will be different
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.OneFeature}>
              <img src={search} alt="user1" />
              <h3>Simple search process</h3>
              <p>
                We checked it out, even the kid did it, but it was my mom's
                friend's son
              </p>
            </div>
            <div className={styles.OneFeature}>
              <img src={catnice} alt="user1" />
              <h3>24/7 Support</h3>
              <p>
                Is there something you don't understand? Feel free to call us.
                Phone number in the footer
              </p>
            </div>
            <div className={styles.OneFeature}>
              <img src={support} alt="user1" />
              <h3>We are nice</h3>
              <p>
                Fantasy is over, there will be something really convincing here
              </p>
            </div>
          </div>
        </div>

        <div className={styles.commentsContainer}>
          <h1>Satisfied users</h1>
          <div className={styles.comments}>
            <div className={styles.oneComment}>
              <img src={user1} alt="user1" />
              <p className={styles.textComment}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className={styles.cityComment}>
                <span>John Doe </span> <span>- Paris, France</span>
              </div>
            </div>
            <div className={styles.oneComment}>
              <img src={user2} alt="user1" />
              <p className={styles.textComment}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className={styles.cityComment}>
                <span>John Doe</span>
                <span>- Paris, France</span>
              </div>
            </div>
            <div className={styles.oneComment}>
              <img src={user3} alt="user1" />
              <p className={styles.textComment}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className={styles.cityComment}>
                <span>John Doe</span>
                <span>- Paris, France</span>
              </div>
            </div>
          </div>
          <div>Plus d'avis</div>
        </div>

        <div className={styles.postsContainer}>
          <h1>Recently published houses</h1>
          <div className={styles.posts}>
            {recentPosts.map((post, id) => (
              <Post
                key={id}
                img={post.photo_one}
                location={[post.city, post.country]}
                dates={post.dates}
                rating={post.rating}
                style={styles.onePost}
                id={post.id}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashboardHome;
