import React from 'react'
import ConnectedExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"

const ExpenseDashboardPage = () => (
    <div>
        <p>this is dashboard page</p>
        <ExpenseListFilters /> 
        <ConnectedExpenseList/>
       
    </div>
);

export default ExpenseDashboardPage;
