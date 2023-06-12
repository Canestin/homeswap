import React, { useEffect, useState } from "react";
import { GrLocation, GrCalendar } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";
import { useSelector } from "react-redux";
import DateRange from "../../components/DateRange/DateRange";

function Search({ posts, setposts }) {
  const [showDates, setShowDates] = useState(false);
  const [datesToDisplay, setDatesToDisplay] = useState();
  const dates = useSelector((state) => state.dates);

  useEffect(() => {
    let d = [];
    const ds = [dates[0].startDate, dates[0].endDate];
    for (const date of ds) {
      const jour = ("0" + date.getDate()).slice(-2);
      const mois = ("0" + (date.getMonth() + 1)).slice(-2);
      const annee = date.getFullYear().toString().substr(-2);
      d.push(`${jour}/${mois}/${annee}`);
    }

    setDatesToDisplay(`${d[0]} - ${d[1]}`);
  }, [dates]);

  const handleSearch = () => {
    if (dates[0].startDate && dates[0].endDate) {
      setposts(
        posts.filter((p) => {
          console.log("p de chez p de papidou", p);
          const date = new Date(p.date_created);
          const dateToCompare = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
          return (
            dateToCompare >= datesToDisplay.split(" - ")[0] &&
            dateToCompare <= datesToDisplay.split(" - ")[1]
          );
        })
      );
    }

    setShowDates(false);
  };

  return (
    <div className={styles.topSearch}>
      <div>
        <GrLocation size={24} />
        <div className={styles.topSearchInfos}>
          <span>Where ?</span>
          <input
            onFocus={() => setShowDates(false)}
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
          <input
            value={datesToDisplay}
            onClick={() => setShowDates(true)}
            // onFocus={(v) => setShowDates(!v)}
            // onBlur={() => setShowDates(false)}
            type="text"
            placeholder="jj/mm/aa - jj/mm/aa"
          />
        </div>
      </div>
      <div onClick={handleSearch}>
        <RiSearch2Line />
      </div>

      {showDates && (
        <div className={styles.calendar}>
          <DateRange />
        </div>
      )}
    </div>
  );
}

export default Search;
