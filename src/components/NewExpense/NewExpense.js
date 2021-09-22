import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const onSaveData = (savedData) => {
    const formInputDataSaved = {
      ...savedData,
      id: Math.random().toString(),
    };
    console.log(formInputDataSaved);
    props.onReceivedData(formInputDataSaved);
  };
  return (
    <div className="formContainer">
      <ExpenseForm onSavedData={onSaveData} />
    </div>
  );
};

export default NewExpense;
