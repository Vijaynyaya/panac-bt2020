import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const total = transactions.reduce((acc, item) => (acc += item.amount), 0)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>₹{total}</h1>
        </>
    )
}