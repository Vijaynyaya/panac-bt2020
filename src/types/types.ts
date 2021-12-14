export interface Transaction {
  id: number;
  text: string;
  amount: number;
}
export interface Journal {
  transactions: Transaction[];
  addTransaction?: (transaction: Transaction) => void;
  deleteTransaction?: (id: number) => void;
}

export enum ActionType {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION'
}

export interface Action {
  type: ActionType;
  payload: any;
}