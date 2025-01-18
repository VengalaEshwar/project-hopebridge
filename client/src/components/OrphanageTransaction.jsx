import React from 'react';
// import './OrphanageTransaction.css'; // Optional: Add CSS for styling

function Transaction({ transaction }) {
  return (
    <div className="transaction">
      <p><strong>Transaction ID:</strong> {transaction.id}</p>
      <p><strong>Creditor Name:</strong> {transaction.creditorName}</p>
      <p><strong>Amount:</strong> {transaction.amount}rs</p>
      <p><strong>Date:</strong> {transaction.date}</p>
      <p><strong>Details:</strong> {transaction.details}</p>
    </div>
  );
}

function OrphanageTransaction() {
  const transactions = [
    {
      id: 'TX123456',
      creditorName: 'John Doe',
      amount: 500,
      date: '2025-01-15',
      details: 'Donation for education purposes.',
    },
    {
      id: 'TX123457',
      creditorName: 'Jane Smith',
      amount: 300,
      date: '2025-01-14',
      details: 'Monthly food donation.',
    },
    ,
    {
      id: 'TX123457',
      creditorName: 'Jane Smith',
      amount: 300,
      date: '2025-01-14',
      details: 'Monthly food donation.',
    },
    ,
    {
      id: 'TX123457',
      creditorName: 'Jane Smith',
      amount: 300,
      date: '2025-01-14',
      details: 'Monthly food donation.',
    },
    ,
    {
      id: 'TX123457',
      creditorName: 'Jane Smith',
      amount: 300,
      date: '2025-01-14',
      details: 'Monthly food donation.',
    },
  ];

  return (
    <div className="orphanage-transaction">
      <h2 className="text-red-400 text-4xl text-center">Transactions</h2>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default OrphanageTransaction;
