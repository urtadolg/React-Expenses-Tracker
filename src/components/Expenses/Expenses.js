import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
//teste chart
import ExpensesChart from "../Expenses/ExpensesChart";

function Expenses(props) {
  const [filterValue, filterChange] = useState("2020");
  const onFilterSelect = (filterData) => {
    filterChange(filterData);
  };
  console.log("on expenses js: ");
  console.log(filterValue);

  const filteredData = props.data.filter(
    (e) => e.date.getFullYear().toString() === filterValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterSelected={onFilterSelect}
        yearValue={filterValue}
      />
      <ExpensesChart filteredData={filteredData} />
      <ExpensesList filteredData={filteredData} />
    </Card>
  );
}

export default Expenses;
