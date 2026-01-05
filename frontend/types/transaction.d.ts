export type TransactionType = 'deposit' | 'withdrawal';

export interface Transaction {
  id: string;          // mapped from _id
  type: TransactionType;
  amount: number;
  personId: string;    // Person ID
  personName: string;  // Person name
  notes: string;
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
  purpose: string;
  isMutual: boolean;
}

export interface TransactionApi {
  _id: string;
  type: TransactionType;
  amount: number;
  person: {
    _id: string;
    name: string;
  };
  notes?: string;
  createdAt: string;
  updatedAt: string;
  purpose: string;
  isMutual: boolean;
}


export interface TotalTransactionApi {
  totalDeposited: string;
  totalWithdrawn: string;
  totalInAccount: number;
  withdrawnByPurpose: {
    _id: string;
    total: string;
  };
}


interface TransactionsTableProps {
  transactions: Transaction[];
}