import React from "react";
import styles from "./Footer.module.scss";
import { TfiLinkedin, TfiFacebook } from "react-icons/tfi";
import { GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr";
import sendImg from "../../images/send-email.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>HomeSwap</h2>
          <span>About</span>
          <span>Our team</span>
          <span>How it works</span>
        </div>
        <div>
          <h2>Support</h2>
          <span>FAQ</span>
          <span>Contact</span>
          <span>Terms & Conditions</span>
        </div>
        <div>
          <h2>Themes</h2>
          <span>Travel in Europe</span>
          <span>Traveling in December</span>
          <span>Just travel</span>
        </div>
        <div>
          <h2>Subscribe to Newsletter</h2>
          <span>Your email</span>
          <div className={styles.sendEmail}>
            <input type="text" />
            <div>
              <img src={sendImg} alt="send email" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2023 HomeSwap - ISEP</span>
        <div>
          <div>
            <TfiLinkedin />
          </div>
          <div>
            <TfiFacebook />
          </div>
          <div>
            <GrInstagram />
          </div>
          <div>
            <GrYoutube />
          </div>
          <div>
            <GrTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
