import React from 'react';
import './TransactionCard.css';

const TransactionCard = ({ title, amount, type, date, icon }) => {
  return (
    <div className="transaction-card">
      <div className="transaction-content">
        <div className="transaction-icon-wrapper">
          <div className={`transaction-indicator ${type}`}>
            {type === 'income' ? '↓' : '↑'}
          </div>
        </div>
        <div className="transaction-details">
          <h4>{title}</h4>
          <span className="transaction-date">{date}</span>
        </div>
      </div>
      
      <div className="transaction-amount-section">
        <div className={`transaction-amount ${type}`}>
          <span className="amount-sign">{type === 'income' ? '+' : '-'}</span>
          <span className="amount-value">{amount}</span>
          <span className="currency">ج.س</span>
        </div>
        <div className="transaction-type">
          {type === 'income' ? 'تحويل داخلي' : 'نقد'}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
