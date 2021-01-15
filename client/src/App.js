import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import { GlobalProvider } from "./context/globalState";

import "./App.css";
import TransactionsList from "./components/transactionsList";
import AddTransaction from "./components/addTransaction";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
