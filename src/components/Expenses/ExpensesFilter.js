import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectYearHandler = (e) => {
    props.onFilterSelected(e.target.value);
  };

  return (
    <div className="filterContainer">
      <div>Filter by year</div>
      <select
        className="filter"
        name="yearFilter"
        onChange={selectYearHandler}
        value={props.yearValue}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
