import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// initial state
const initialState = {
    transactions: [
        { id: 1, text: "Movie", amount: -800},
        { id: 2, text: "Commission", amount: 10000 },
        { id: 3, text: "Royalty", amount: 80000 },
        { id: 4, text: "Legal Consultation", amount: -16500 }
    ]
}

// context initialized
export const GlobalContext = createContext(initialState);

// context provider
export const GlobalProvider = ({ children }) => {
   
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return ( 
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction }}>
            { children }
        </GlobalContext.Provider>
    )
}