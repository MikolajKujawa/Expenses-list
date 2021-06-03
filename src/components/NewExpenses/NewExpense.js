import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [formHandler, setFormHandler] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormHandler(false)
  };
  
  const showForm = () => {
    setFormHandler(true)
  }

  const stopShowForm = () => {
    setFormHandler(false)
  }

  return (
    <div className='new-expense'>
      {!formHandler && <button onClick={showForm}>Add New Expense</button>}
      {formHandler && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopShowingForm={stopShowForm}/>}
    </div>
  );
};

export default NewExpense;