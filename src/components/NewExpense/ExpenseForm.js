import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpense, setAddNewExpense] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(userInput);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSavedData(userInput);

    //Invalid input handler

    console.log(e.target[0].value);
  };

  const onCancelHandler = () => {
    setAddNewExpense(false);
  };

  if (addNewExpense) {
    return (
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="formItem">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required={true}
          />
        </div>
        <div className="formItem">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required={true}
          />
        </div>
        <div className="formItem">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
            required={true}
          />
        </div>
        <div className="btnContainer">
          <div className="btnCancel" onClick={onCancelHandler}>
            Cancel
          </div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
  };

  return (
    <div className="addNewExpenseContainer">
      <p onClick={addNewExpenseHandler}>Add New Expense</p>
    </div>
  );
};

export default ExpenseForm;
