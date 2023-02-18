// 5th component mode for separation of code. rendering Form from here..!
import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm =(props)=>{
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] =useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    })
    const titleChangeHandler = (event) =>{
       setUserInput(prevValue=>{
        return {...prevValue, enteredTitle: event.target.value}
       }); 
    }
    const amountChangeHandler = (event) =>{
        setUserInput(prevValue=>{
            return {...prevValue, enteredAmount: event.target.value}
           }); 
        }
    const dateChangeHandler = (event) =>{
        setUserInput(prevValue=>{
            return {...prevValue, enteredDate: event.target.value}
           }); 
        }
        // below function for submit the form data..!
        const submitHandler = (event) =>{
         event.preventDefault();
         const expenseData ={
            title :userInput.enteredTitle,
            price : +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
         };
         props.onSaveExpenseData(expenseData) //userData send from here to NewExpense.js
         setUserInput( { enteredTitle : '',enteredAmount : '', enteredDate : '' });
        }
    // below is a structure of Form..!
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount}  onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={userInput.enteredDate}   max='2026-01-01' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions '>
            <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;