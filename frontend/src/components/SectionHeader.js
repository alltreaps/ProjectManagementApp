import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, actionText, onActionClick }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {actionText && (
        <button className="section-action" onClick={onActionClick}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
