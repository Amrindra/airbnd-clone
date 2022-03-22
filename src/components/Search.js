import React, { useState } from "react";
import "../styles/Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //   this is from the DATE PICKER package
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };
  //   this is from the DATE PICKER package
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
}

export default Search;
