import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense, 
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;