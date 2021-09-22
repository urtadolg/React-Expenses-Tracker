import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import React from "react";

function ExpenseItem(props) {
  return (
    <Card className="componentContainer">
      <ExpenseDate date={props.date} />
      <div className="title-amount">
        <h2 className="title">{props.title}</h2>
        <p className="amount">${props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
