import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalState";
import Transaction from "./transaction";

const TransactionsList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  //console.log(context);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
          // key can't be used in <li> element. Transaction is every item here.
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
