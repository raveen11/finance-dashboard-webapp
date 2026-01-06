
import FullDashboard from '@/components/fullDashboard';
import TotalFinance from '@/components/totalFinance';
import TransactionsTable from '@/components/transaction-table';
import { getTotals, getTransactions } from '@/lib/api/transactions';
import { TransactionModel } from '@/lib/models/TransactionModels';
import { transformDashboardData } from '@/lib/utilities/dashboardHelper';
export default async function Dashboard() {
    const apiTransactions = await getTransactions();
    const totalTransaction = await getTotals();
    const transformedData = transformDashboardData(totalTransaction);
    console.log('ABCBD-transformedData', totalTransaction, transformedData);
    const transactionModels =
        TransactionModel.fromApiArray(apiTransactions);

    // ✅ convert to plain objects
    const transactions =
        TransactionModel.toPlainArray(transactionModels);
    return (
        <>
            <TotalFinance
                transformedData={transformedData}
            />
            <TransactionsTable transactions={transactions} />
        </>
    )
}