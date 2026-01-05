
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
    console.log('ABCD--',totalTransaction,transformedData)
    const transactions = TransactionModel.fromApiArray(apiTransactions);
    return (
        <>
            <TotalFinance
                transformedData={transformedData}
            />
            <TransactionsTable transactions={transactions} />
        </>
    )
}