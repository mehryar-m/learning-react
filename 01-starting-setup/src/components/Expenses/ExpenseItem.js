import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";
function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expensetitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
