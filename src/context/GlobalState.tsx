import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import { Transaction, Journal, ActionType } from '../types/types'

// initial state
const initialState: Journal = {
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
export function GlobalProvider({ children }){
   
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // actions
    state.deleteTransaction = (id: number) => {
        dispatch({
            type: ActionType.DELETE_TRANSACTION,
            payload: id
        });
    }

    state.addTransaction = (transaction: Transaction) => {
        dispatch({
            type: ActionType.ADD_TRANSACTION,
            payload: transaction
        })
    }
    
    return ( 
        <GlobalContext.Provider value={state}>
            { children }
        </GlobalContext.Provider>
    )
}