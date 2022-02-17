import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expensetitle={expense.title}
          expenseDate={expense.date}
          expenseAmount={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
