// lib/api/transactions.ts
import { TotalTransactionApi, TransactionApi } from '@/types/transaction';

export async function getTransactions(): Promise<TransactionApi[]> {
  const url = `http://localhost:5000/api/transaction/getAll`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // IMPORTANT (cookies / auth)
      cache: 'no-store', // Next.js SSR safe
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response?.status}`);
    }

    const result: TransactionApi[] = await response.json();
    console.log('ABCD---transactions fetched', result);

    return result;
  } catch (error: any) {
    console.error('Failed to fetch transactions:', error.message);
    throw error; // rethrow so Next.js error boundary can catch it
  }
}


export async function getTotals(): Promise<TotalTransactionApi[]> {
  const url = `http://localhost:5000/api/transaction/getTotalAmounts`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // IMPORTANT (cookies / auth)
      cache: 'no-store', // Next.js SSR safe
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response?.status}`);
    }

    const result: TotalTransactionApi[] = await response.json();
    console.log('ABCD---totals fetched', result);

    return result;
  } catch (error: any) {
    console.error('Failed to fetch transactions:', error.message);
    throw error; // rethrow so Next.js error boundary can catch it
  }
}


export async function createTransaction(formData: any) {
  const url = `http://localhost:5000/api/transaction/create`;
  try {
    const response = await fetch(url,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({type:formData.type,amount:formData.amount,personId:formData.personId,notes:formData.description,isMutual:formData.isMutual,purpose:formData.purpose || null}),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log('ABCD---transaction added',result);
    return result;
  } catch (error:any) {
    console.error(error.message);
  }
}