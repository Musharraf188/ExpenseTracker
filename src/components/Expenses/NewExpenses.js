
// 4th Component for adding new data from users Input..!

import React, { useState } from 'react';
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    // const {name , onAdd} = props
    const [isEditing, setIsEditing]=useState(false);
    const onSaveExpenseDataHandler=(expenseDataReceivedFromExpenseForm)=>{
const userInputReceivedFromExpenseForm ={
    ...expenseDataReceivedFromExpenseForm,
    id: Math.random().toString()
}
setIsEditing(false);
props.onAdd(userInputReceivedFromExpenseForm); //userData send from here to App.js
    }
    const onClickHandler = () =>{
        setIsEditing(true)
    }
    const stopEditing = () =>{
        setIsEditing(false);
    }
    return <div className='new-expense'>
{!isEditing &&<button onClick={onClickHandler}>Add New Expese</button>
}    {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>;
}

export default NewExpense;