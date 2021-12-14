import { Journal, ActionType, Action } from "../types/types";

export const AppReducer = (state: Journal, action: Action): Journal => {
    switch(action.type) {
        case ActionType.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(each => each.id !== action.payload)
            }
        case ActionType.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        default:
            return state;
    }
}