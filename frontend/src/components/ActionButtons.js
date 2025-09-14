import React from 'react';
import './ActionButtons.css';

const ActionButtons = () => {
  const handleExportReport = () => {
    // Handle export functionality
    console.log('Export report clicked');
  };

  const handleNewProject = () => {
    // Handle new project functionality
    console.log('New project clicked');
  };

  return (
    <div className="action-buttons">
      <button className="action-button export-button" onClick={handleExportReport}>
        <div className="button-icon-container">
          <div className="button-icon">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 2V15M12.5 15L8.5 11M12.5 15L16.5 11M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <span className="button-text">تصدير التقرير</span>
      </button>

      <button className="action-button new-project-button" onClick={handleNewProject}>
        <div className="button-icon-container">
          <div className="button-icon">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5V19M5.5 12H19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <span className="button-text">مشروع جديد</span>
      </button>
    </div>
  );
};

export default ActionButtons;
