import React from 'react';
import './InvoiceCard.css';

const InvoiceCard = ({ 
  title, 
  client, 
  amount, 
  AmountLeft, 
  invoiceNumber, 
  date, 
  status = 'pending',
  actions = []
}) => {
  const getStatusText = (status) => {
    switch(status) {
      case 'partial': return 'جزئي';
      case 'pending': return 'معلقة';
      default: return 'معلقة';
    }
  };

  return (
    <div className="invoice-card">
      <div className="invoice-header">
        <div className="invoice-info">
          <h4>{title}</h4>
          <p className="client-name">{client}</p>
          <p className="invoice-number">{invoiceNumber}</p>
        </div>
        <div className="invoice-amount">
          <div className="amount-row">
            <span className="amount">{amount}</span>
            <span className="currency">ج.س</span>
          </div>
          <div className="amount-left-row">
            <span className="amount-left">{AmountLeft}</span>
            <span className="currency">ج.س</span>
          </div>
        </div>
      </div>
      <div className="invoice-footer">
        <span className="invoice-date">{date}
          <span className={`status-badge ${status}`}>
            {getStatusText(status)}
          </span></span>
        <div className="invoice-actions">
          {actions.map((action, index) => (
            <button 
              key={index} 
              className={`action-btn ${action.type}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
