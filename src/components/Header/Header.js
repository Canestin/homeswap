import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";
import { BiUserCircle } from "react-icons/bi";
import Colors from "../../constants/Colors";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
        <ul>
          <li onClick={() => navigate("/availability")}>Availability</li>
          <li onClick={() => navigate("/host")}>Host</li>
          <li onClick={() => navigate("/messaging")}>Messaging</li>
        </ul>
      </div>
      <div className={styles.right}>
        <span
          onClick={() => navigate("/addhouse/type")}
          className={styles.putAcc}
        >
          Add my property
        </span>
        <BiUserCircle
          onClick={() => navigate("/signin")}
          cursor="pointer"
          color={Colors.blue}
          size={40}
        />
      </div>
    </div>
  );
}
