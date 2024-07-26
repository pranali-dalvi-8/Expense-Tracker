import React from "react";

function ExpenseList({filterdExpenses}){
    return(
        <div className="expense-list-container"> 
            <h3>{filterdExpenses.length>0 ?  'List Of Your Expenses' : null} </h3>
           <ul className="expense-list">
            {filterdExpenses.map(exp=>(
                <li className="expense-item" id={exp.id}>{exp.title} - {exp.amount} - {exp.category}</li>
            ))}
           </ul>
        </div>
    );
}
export default ExpenseList;