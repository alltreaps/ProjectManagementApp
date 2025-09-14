import React from 'react';
import './FinancialCard.css';

const FinancialCard = ({ title, revenue, expenses, period }) => {
  return (
    <div className="financial-card">
      <div className="financial-header">
        <h3>{title}</h3>
        <span className="period">{period}</span>
      </div>
      <div className="financial-stats">
        <div className="stat-item">
          <div className="stat-amount revenue">{revenue}</div>
          <div className="stat-label">صافي الربح</div>
        </div>
        <div className="stat-item">
          <div className="stat-amount expenses">{expenses}</div>
          <div className="stat-label">إجمالي الإيرادات</div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCard;
