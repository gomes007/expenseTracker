import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const last7Days = getDateMinusDays(today, 7);
    return expense.date >= last7Days;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      fallbackText="No expenses found for the last 7 days"
      expensesPeriod="Last 7 days"
    />
  );
}

export default RecentExpenses;
