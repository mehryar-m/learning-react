import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [yearSelected, setYear] = useState("2020");

  const selectedYearHandler = (year) => {
    setYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter
        selected={yearSelected}
        onSelectedYear={selectedYearHandler}
      />
      <ExpensesList expenses = {filteredExpenses}></ExpensesList>
    </Card>
    </li>
  );
}

export default Expenses;
