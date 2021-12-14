import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    
    const amounts = transactions.map(item => item.amount)
    const income = amounts
        .filter(amt => amt > 0)
        .reduce((acc, amt) => (acc += amt), 0)
    const expense = amounts
        .filter(amt => amt < 0)
        .reduce((acc, amt) => (acc += amt), 0)
    
        return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+₹{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-₹{Math.abs(expense)}</p>
            </div>
        </div>
    )
}