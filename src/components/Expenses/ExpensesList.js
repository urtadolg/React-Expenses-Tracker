import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredData.length === 0) {
    return <h2 className="nothingFoundMessage">Nothing Found...</h2>;
  }

  return props.filteredData.map((element) => (
    <ExpenseItem
      key={element.id}
      title={element.title}
      amount={element.amount}
      date={element.date}
    />
  ));
};

export default ExpensesList;
