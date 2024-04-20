import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodName}>{periodName}</Text>
      <Text style={styles.expensesSum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 5,
    //margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
  periodName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary400,
  },
  expensesSum: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
