
import React from 'react';
import './ActionButton.css';
import { ArrowUpCircleIcon, ArrowDownCircleIcon, ArrowPathIcon, TagIcon, PlusCircleIcon } from '@heroicons/react/24/solid';


const iconMap = {
  'arrow-up-circle': <ArrowUpCircleIcon style={{ width: 32, height: 32, color: '#fff' }} />,
  'arrow-down-circle': <ArrowDownCircleIcon style={{ width: 32, height: 32, color: '#fff' }} />,
  'arrow-path': <ArrowPathIcon style={{ width: 32, height: 32, color: '#fff' }} />,
  'tag': <TagIcon style={{ width: 32, height: 32, color: '#fff' }} />,
  'plus-circle': <PlusCircleIcon style={{ width: 32, height: 32, color: '#fff' }} />,
};

const ActionButton = ({ title, icon, color, onClick }) => {
  return (
    <button className={`action-button ${color}`} onClick={onClick}>
      <div className="action-icon-circle">
        <div className="action-icon">
          {iconMap[icon]}
        </div>
      </div>
      <span className="action-title">{title}</span>
    </button>
  );
};

export default ActionButton;
