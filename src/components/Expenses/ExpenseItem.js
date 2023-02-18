// // 1st components made for render expenses data..!
// // & Receiving Data in this components thuru props from Expenses.js ..!

// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// const ExpenseItem = (props) => {
  
//   // below is a structure of expenses..!
//   return (
//     <Card className="expense-item">
//       {/* rendering Date from ExpenseDate Component */}
//       <ExpenseDate date={props.date} />

//       {/* rendering title */}
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>

//         {/* rendering Price */}
//         <div className="expense-item__price">${props.price}</div>
//       </div>
//     </Card>
//   );
// };

// export default ExpenseItem;

// 1st comonenets made for rendering expenses list..!
// & Received expense data thuru props from Expenses.js..!
import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) =>{
  // below is a structure of Expenses List..!
 return <Card className='expense-item'>
<ExpenseDate date={props.date}/>
<div className='expense-item__description'>
<h2>{props.title}</h2>
<div className='expense-item__price'>{props.price}</div>
</div>
 </Card>
}

export default ExpenseItem;