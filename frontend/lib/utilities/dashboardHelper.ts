
export const WITHDRAW_PURPOSES = [
  {
    purpose: "Personal Loan",
    icon: "💼",
    color: "from-purple-600 to-purple-700",
  },
  {
    purpose: "Trading",
    icon: "📈",
    color: "from-cyan-600 to-cyan-700",
  },
  {
    purpose: "Real State Investment",
    icon: "🏠",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    purpose: "Others",
    icon: "⋯",
    color: "from-amber-600 to-amber-700",
  },
] as const;

type TotalsResponse = {
  totalDeposited: number;
  totalWithdrawn: number;
  totalInAccount: number;
  withdrawnByPurpose: Record<string, number>;
};

export function transformDashboardData(data: TotalsResponse) {
  // 1️⃣ Total Amount Array
  const totalAmountArray = [
    { label: "Deposited", value: data.totalDeposited },
    { label: "Withdrawn", value: data.totalWithdrawn },
    { label: "In Account", value: data.totalInAccount },
  ];

  // 2️⃣ Withdrawn By Purpose (fixed keys)
  const withdrawnPurposeArray = WITHDRAW_PURPOSES.map((purpose) => ({
    ...purpose,
    amount: data.withdrawnByPurpose[purpose.purpose] ?? 0,
  }));

  return {
    totalAmountArray,
    withdrawnPurposeArray,
  };
}
