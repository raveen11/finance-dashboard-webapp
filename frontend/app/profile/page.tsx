import FullDashboard from '@/components/fullDashboard';
import TotalFinance from '@/components/totalFinance';
import TransactionsTable from '@/components/transaction-table';
import { getTotals, getTransactions } from '@/lib/api/transactions';
import { TransactionModel } from '@/lib/models/TransactionModels';
import { Transaction } from '@/types/transaction';

export default async function Profile() {
  // Fetch & map transactions
  const apiTransactions = await getTransactions();
  const totalTransaction = await getTotals();

  const transactions = TransactionModel.fromApiArray(apiTransactions);
  console.log('ABCD-totalTransaction',totalTransaction)
  return (
    <div>
      <FullDashboard/>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <TotalFinance
          totalDeposited={Number(totalTransaction?.totalDeposited)}
          totalWithdrawn={Number(totalTransaction?.totalWithdrawn)}
          totalInAccount={Number(totalTransaction?.totalInAccount || 0)}
          withdrawnByPurpose={{
            "Personal Loan": 1200,
            "Trading": 800,
            "Real State Investment": 5000,
            "Others": 300
          }}
          />
     <TransactionsTable transactions={transactions} />
    </div>
  );
}
