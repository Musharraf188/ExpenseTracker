// 2nd Components for rendering Date..!

import React from "react";
import './ExpenseDate.css';
const ExpenseDate = (props) => {
{/* this finding for month from date */} const Month =props.date.toLocaleString('en-US', {month : 'long'});
{/* this finding for Day from date */} const Day =props.date.toLocaleString('en-US', {day : '2-digit'});
{/* this finding for Year from date */} const Year =props.date.getFullYear();
return <div className="expense-date">
<div className="expense-date__month">{Month}</div> 
<div className="expense-date__year">{Year}</div>
<div className="expense-date__day">{Day}</div>
</div>
};

export default ExpenseDate;