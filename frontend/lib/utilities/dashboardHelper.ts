import { TotalTransactionApi } from "@/types/transaction";

export const WITHDRAW_PURPOSES = [
  { purpose: "Personal Loan", icon: "💼", color: "from-purple-600 to-purple-700" },
  { purpose: "Trading", icon: "📈", color: "from-cyan-600 to-cyan-700" },
  { purpose: "Real State Investment", icon: "🏠", color: "from-emerald-600 to-emerald-700" },
  { purpose: "Others", icon: "⋯", color: "from-amber-600 to-amber-700" },
] as const;

export interface TotalAmountItem {
  label: string;
  value: number; // must be number
}

export interface WithdrawPurposeItem {
  purpose: string;
  icon: string;
  color: string;
  amount: number; // must be number
}

export interface TransformedDashboardData {
  totalAmountArray: TotalAmountItem[];
  withdrawnPurposeArray: WithdrawPurposeItem[];
}

export function transformDashboardData(data: TotalTransactionApi): TransformedDashboardData {
  // 1️⃣ Total Amount Array (convert strings to numbers)
  const totalAmountArray: TotalAmountItem[] = [
    { label: "Deposited", value: Number(data.totalDeposited || 0) },
    { label: "Withdrawn", value: Number(data.totalWithdrawn || 0) },
    { label: "In Account", value: data.totalInAccount }, // already number
  ];

  // 2️⃣ Withdrawn By Purpose (map keys to fixed WITHDRAW_PURPOSES, convert to numbers)
  const withdrawnPurposeArray: WithdrawPurposeItem[] = WITHDRAW_PURPOSES.map((purposeItem) => ({
    ...purposeItem,
    amount: Number(data.withdrawnByPurpose[purposeItem.purpose] || 0),
  }));

  return { totalAmountArray, withdrawnPurposeArray };
}
