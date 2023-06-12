import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Messaging.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import user1 from "../../images/user1.png";
import post from "../../seed/images/houses/11.1.jpeg";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import { useNavigate } from "react-router-dom";

function Messaging() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div>
          <p>Messages</p>
          <div className={styles.conversations_container}>
            <Conversation
              profile={{
                speaker: { username: "Emma" },
                lastMessage: "Hello",
                lastMessageDate: "2021-05-20T10:00:00",
              }}
            />
            <Conversation
              profile={{
                speaker: { username: "John" },
                lastMessage: "Hello",
                lastMessageDate: "2021-05-20T10:00:00",
              }}
            />
            <Conversation
              profile={{
                speaker: { username: "Curry" },
                lastMessage: "Hello",
                lastMessageDate: "2021-05-20T10:00:00",
              }}
            />
            <Conversation
              profile={{
                speaker: { username: "Marie" },
                lastMessage: "Hello",
                lastMessageDate: "2021-05-20T10:00:00",
              }}
            />
            <Conversation
              profile={{
                speaker: { username: "Jane" },
                lastMessage: "Hello",
                lastMessageDate: "2021-05-20T10:00:00",
              }}
            />
          </div>
        </div>
        <div>
          <p>Host Jane</p>
          <div className={styles.messages_container}>
            <div>
              <Message
                message={{
                  content:
                    "Hello Madame Jane, we are very happy to have you as our guest!",
                }}
                type="other"
              />
              <Message
                message={{
                  content:
                    "Lorem ipsum oodit aut fugit, sed consequuntur magni dolores eos.",
                }}
                type="me"
              />
              <Message
                message={{
                  content: "Hello Madame Jane, we are very happy...",
                }}
                type="other"
              />
              <Message
                message={{
                  content: "Lorem ipsum oodit aut fugit sed.",
                }}
                type="me"
              />
              <Message
                message={{
                  content:
                    "Hello Madame Jane, we are very happy to have you as our guest!",
                }}
                type="other"
              />
              <Message
                message={{
                  content:
                    "Lorem ipsum oodit aut fugit, sed consequuntur magni dolores eos.",
                }}
                type="me"
              />
              <Message
                message={{
                  content: "Hello Madame Jane, we are very happy...",
                }}
                type="other"
              />
              <Message
                message={{
                  content: "Lorem ipsum oodit aut fugit sed.",
                }}
                type="me"
              />
              <Message
                message={{
                  content:
                    "Hello Madame Jane, we are very happy to have you as our guest!",
                }}
                type="other"
              />
              <Message
                message={{
                  content:
                    "Lorem ipsum oodit aut fugit, sed consequuntur magni dolores eos.",
                }}
                type="me"
              />
              <Message
                message={{
                  content: "Hello Madame Jane, we are very happy...",
                }}
                type="other"
              />
              <Message
                message={{
                  content: "Lorem ipsum oodit aut fugit sed.",
                }}
                type="me"
              />
              <Message
                message={{
                  content:
                    "Hello Madame Jane, we are very happy to have you as our guest!",
                }}
                type="other"
              />
              <Message
                message={{
                  content:
                    "Lorem ipsum oodit aut fugit, sed consequuntur magni dolores eos.",
                }}
                type="me"
              />
              <Message
                message={{
                  content: "Hello Madame Jane, we are very happy...",
                }}
                type="other"
              />
              <Message
                message={{
                  content: "Lorem ipsum oodit aut fugit sed.",
                }}
                type="me"
              />
            </div>

            <div className={styles.message_input_container}>
              <input type="text" placeholder="Ecrivez votre message" />
              <div>
                <RiSendPlaneFill />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Details</p>
          <div className={styles.details_container}>
            <div className={styles.details_img}>
              <img src={post} alt="post" />
            </div>

            <div
              onClick={() => navigate("/house-details")}
              className={styles.details_see_more}
            >
              <SeeMoreButton text="See accommodation details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messaging;

function Conversation({ profile }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(profile.lastMessageDate);
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const lastWeek = new Date(today.setDate(today.getDate() - 7));

    const dayNames = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    if (date.toDateString() === today.toDateString()) {
      // If the message was sent today
      const time = date.toLocaleTimeString("fr-FR", options);
      setFormattedDate(time);
    } else if (date.toDateString() === yesterday.toDateString()) {
      // If the message was sent yesterday
      setFormattedDate("Hier");
    } else if (date.toDateString() === lastWeek.toDateString()) {
      // If the message was sent last week
      const dayName = dayNames[date.getDay()];
      setFormattedDate(dayName);
    } else {
      // If the message was sent last week
      // const d = date.toLocaleDateString("fr-FR");
      // setFormattedDate(d);
      const time = date.toLocaleTimeString("fr-FR", options);
      setFormattedDate(time);
    }
  }, [profile, profile.lastMessageDate]);

  let lastMessage = "";
  const sizeOfLastMessage = profile.lastMessage.length;
  if (sizeOfLastMessage > 20)
    lastMessage = profile.lastMessage.slice(0, 20).concat("...");
  else lastMessage = profile.lastMessage;

  return (
    <div className={styles.conv}>
      <div>
        <img
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={user1}
          alt="women"
        />
        <div className={`${styles.statusLine} ${styles.offline}`} />
      </div>

      <div className={styles.infosprofile}>
        <div className={styles.nameAndHour}>
          <span style={{ fontWeight: "bold", fontSize: "13px" }}>
            {profile?.speaker?.username}
          </span>
          <span style={{ color: "gray", fontSize: "11px" }}>
            {formattedDate}
          </span>
        </div>
        <div className={styles.lastMessageContainer}>
          <span style={{ color: "gray" }}>{lastMessage}</span>
          <div className={styles.messageCheck}>
            <AiOutlineCheck />
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({ message, type }) {
  // const type = message.sender_id === loggedUserId ? "me" : "other";
  return (
    <div
      className={`${styles.message} ${
        type === "me" ? styles.myMessage : styles.otherMessage
      }`}
    >
      <span>{message.content}</span>
    </div>
  );
}
