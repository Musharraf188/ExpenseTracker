import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses";
// Root Components..!
// Arry of object for render Dumy Data..!

  const  INTIAL_EXPENSES = [
    {
      id: 1,
      title: "Car Insurance",
      price: 234.78,
      date: new Date(2021, 1, 12),
    },
  
    {
      id: 2,
      title: "Some Books",
      price: 56.98,
      date: new Date(2021, 3, 24),
    },
  
    {
      id: 3,
      title: "Aqua Water",
      price: 674.87,
      date: new Date(2022, 5, 6),
    },
  
    {
      id: 4,
      title: "Laptop Buying",
      price: 437.34,
      date: new Date(2022, 7, 18),
    },
    {
      id: 5,
      title: "Furniture",
      price: 1437.34,
      date: new Date(2020, 2, 8),
    },
    {
      id: 6,
      title: "Home Decor",
      price: 37.34,
      date: new Date(2020, 6, 4),
    },
    {
      id: 7,
      title: "Bike",
      price: 1437.34,
      date: new Date(2023, 2, 8),
    },
    {
      id: 8,
      title: "Car Purchase",
      price: 37.34,
      date: new Date(2023, 6, 4),
    },
  ];
  const App =()=>{
  const [expenses, setExpenses]=useState(INTIAL_EXPENSES)
  // user Input paases into expenses state.. then passes to expenses.js thuru props{item} map it in Expenses.js then passes to expenseItem.js components from Expenses.js & last Rendering Dynamic User Input from expenseItem.js
  const addHandler = (userInputReceivedFromExpenseForm_NewExpense) =>{
   setExpenses(prevValue=>{
    return [userInputReceivedFromExpenseForm_NewExpense, ...prevValue];
   })
      }

// finally 
  return (
    <div>
      {/* Rendering All Components or Data from here..! */}
   <NewExpense name={'mushraf'} onAdd={addHandler} />
      <Expenses items={expenses} />
      {/* Passing Dumy data thuru props into expenses..! */}
    </div>
  );
  }

export default App;
