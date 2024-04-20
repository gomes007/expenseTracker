import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New Shoes",
    amount: 99.99,
    date: new Date("2024-04-18"),
  },
  {
    id: "e2",
    description: "New Shirt",
    amount: 49.99,
    date: new Date("2024-04-17"),
  },
  {
    id: "e3",
    description: "New Pants",
    amount: 69.99,
    date: new Date("2022-07-16"),
  },
  {
    id: "e4",
    description: "New Hat",
    amount: 29.99,
    date: new Date("2021-08-17"),
  },
  {
    id: "e5",
    description: "New Socks",
    amount: 19.99,
    date: new Date("2021-09-18"),
  },
  {
    id: "e6",
    description: "New Shirt",
    amount: 49.99,
    date: new Date("2021-06-15"),
  },
  {
    id: "e7",
    description: "New Pants",
    amount: 69.99,
    date: new Date("2022-07-16"),
  },
  {
    id: "e8",
    description: "New Hat",
    amount: 29.99,
    date: new Date("2021-08-17"),
  },
  {
    id: "e9",
    description: "New Socks",
    amount: 19.99,
    date: new Date("2021-09-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updateItem;
      return updatedExpenses;
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
    
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }


  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } }); // Alterar para 'data' em vez de 'expenseData'
  }
  

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
