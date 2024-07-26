import React, { useState } from "react";

function ExpenseForm({addExpense}){
    const [title, setTitle]=useState('');
    const [amount, setAmount]=useState('');
    const [category, setCategory]=useState('');

    function handelSubmit(e){
        // addExpense({title:vegetable , amount:150 , category:food});
        e.preventDefault();
        addExpense({id:Date.now(),title,amount,category});
        setTitle('');
        setAmount('');
        setCategory('');
    }
    

    return(
        <div className="expense-form-container">
            <h2>Add New Expense!</h2>
            <form onSubmit={handelSubmit}  className="expense-form">
                <label>Expense Title : </label>
                <input 
                type="text" 
                placeholder="Enter Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required/>
                <br/>
                <label>Amount : </label>
                <input type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} 
                required/>
                <br/>
                <label>Category : </label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                    <option value="" disabled>select Category</option>
                    <option value="food">Food </option>
                    <option value="transport">Transport </option>
                    <option value="entertainment">Entertainment </option>
                    <option value="utility">Utility </option>
                    <option value="others">Others </option>
                </select>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            <hr/>

        </div>
    );
}
export default ExpenseForm;