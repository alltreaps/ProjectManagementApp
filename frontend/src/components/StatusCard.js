import React from 'react';
import './StatusCard.css';

const StatusCard = ({ amount, label, type, icon }) => {
  return (
    <div className={`status-card ${type}`}>
      <div className="status-icon">
        {icon}
      </div>
      <div className="status-amount">{amount}</div>
      <div className="status-label">{label}</div>
    </div>
  );
};

export default StatusCard;
