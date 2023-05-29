import React, { useEffect, useState } from "react";
import styles from "./Availability.module.scss";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Search from "../../components/Search/Search";
import { getHouses } from "../../routes/housing";

function Availability() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getHouses();
      setposts(posts);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const pageHeight = document.documentElement.offsetHeight;

      if (scrollPosition === pageHeight || scrollPosition + 1 >= pageHeight) {
        setPage(page + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);

      setTimeout(() => {
        setposts(posts.concat(posts));
        setLoading(false);
      }, 1000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Availability</h1>

        <Search />

        <div className={styles.posts}>
          {posts.map((post, id) => (
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

        {loading && (
          <div className={styles.loading}>
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Availability;
