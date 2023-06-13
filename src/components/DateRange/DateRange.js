import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { addDays } from "date-fns";
import { useState } from "react";
import "./DateRange.scss";
import { useSelector, useDispatch } from "react-redux";
import { setDates } from "../../redux/datesSlice";

const DateRange = () => {
  const dates = useSelector((state) => state.dates);
  const dispatch = useDispatch();

  return (
    <DateRangePicker
      onChange={(item) => dispatch(setDates([item.selection]))}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={dates}
      direction="horizontal"
      preventSnapRefocus={true}
      calendarFocus="backwards"
      rangeColors={["#780016", "#780016"]}
      className="dateRangePicker"
    />
  );
};

export default DateRange;
