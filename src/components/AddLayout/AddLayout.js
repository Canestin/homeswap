import React, { useEffect, useState } from "react";
import styles from "./AddLayout.module.scss";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const notFilled = "#e0e0e0";
function AddLayout({ children, title, description, level, data }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const handleNext = () => {
    if (level < 8 && !data.isValid) return;
    data.dispatch();
    switch (level) {
      case 1:
        navigate("../place");
        break;
      case 2:
        navigate("../numbers");
        break;
      case 3:
        navigate("../equipment");
        break;
      case 4:
        navigate("../photos");
        break;
      case 5:
        navigate("../title");
        break;
      case 6:
        navigate("../description");
        break;
      case 7:
        navigate("../publish");
        break;
      case 8:
        alert("Félicitations ! Votre annonce a été publiée.");
        navigate("/dashboard");

        break;
      default:
        console.error("Error");
    }
  };

  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <span>Save</span>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        {children}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottom__level__container}>
          <div style={{ backgroundColor: level > 0 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 1 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 2 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 3 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 4 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 5 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 6 ? "black" : notFilled }} />
          <div style={{ backgroundColor: level > 7 ? "black" : notFilled }} />
        </div>
        <div className={styles.bottom__action__container}>
          <span
            onClick={handlePrev}
            className={level === 8 && styles.isNotVisible}
          >
            Back
          </span>
          <span
            className={!data.isValid ? styles.disable : ""}
            onClick={handleNext}
          >
            {level === 8 ? "Publish" : "Next"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddLayout;
