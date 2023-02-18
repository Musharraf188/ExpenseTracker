// 3rd  this components split from App.js

import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
// Data Received from App Components thuru Props
const Expenses = (props) => {
const [filteredYear, setfilteredYear] = useState('2020')
  const filteredChangeHandler = selectedYear =>{
setfilteredYear(selectedYear)
console.log(selectedYear)
  }
 
  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
 
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilter={filteredChangeHandler} />
      {/* passing data to components  */}
      {/* ExpenseItem.js print from Here..!*/}
      {/* rendering dummy expenses..! */}
    <ExpensesChart expenses={filteredExpense} />
 <ExpensesList items={filteredExpense} />
      {/* & Passing Data to ExpenseItem Components thuru props */}
    </Card>
    </div>
  );
};

export default Expenses;
