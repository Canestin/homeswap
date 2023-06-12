import React, { useState } from "react";
import { GrLocation, GrCalendar } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

function Search({ posts, setposts }) {
  const [dates, setDdates] = useState([new Date(), new Date()]);

  console.log("dates de chez dates", dates);

  return (
    <div className={styles.topSearch}>
      <div>
        <GrLocation size={24} />
        <div className={styles.topSearchInfos}>
          <span>Where ?</span>
          <input
            onChange={(e) =>
              setposts(
                posts.filter(
                  (p) =>
                    p.city.includes(e.target.value.trim()) ||
                    p.country.includes(e.target.value.trim())
                )
              )
            }
            type="text"
            placeholder="Find a destination"
          />
        </div>
      </div>
      <div>
        <GrCalendar size={20} />
        <div className={styles.topSearchInfos}>
          <span>When ?</span>
          <input type="text" placeholder="Select a date" />
        </div>
      </div>
      <div>
        <RiSearch2Line />
      </div>
      <div className={styles.calendar}>
        <DateRangePicker onChange={setDdates} value={dates} />
      </div>
    </div>
  );
}

export default Search;
