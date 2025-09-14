import React, { useState } from 'react';
import './FiltersSection.css';

const FiltersSection = () => {
  const [activeProjectStatus, setActiveProjectStatus] = useState('جميع الحالات');
  const [activePaymentStatus, setActivePaymentStatus] = useState('جميع الحالات');
  const [activeProjectType, setActiveProjectType] = useState('الكل');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const projectStatusOptions = ['جميع الحالات', 'طلب جديد', 'في التصميم', 'في الورشة'];
  const paymentStatusOptions = ['جميع الحالات', 'مسدد بالكامل', 'مسدد جزئياً', 'غير مسدد'];
  const projectTypeOptions = ['الكل', 'جديدة', 'قديمة'];

  return (
    <div className="filters-section">
      <div className="filters-header">
        <h2>الفلاتر</h2>
      </div>

      <div className="filters-content">
        {/* Project Status Filter */}
        <div className="filter-group">
          <label className="filter-label">حالة المشروع</label>
          <div className="filter-buttons">
            {projectStatusOptions.map((option) => (
              <button
                key={option}
                className={`filter-button ${activeProjectStatus === option ? 'active' : ''}`}
                onClick={() => setActiveProjectStatus(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Status Filter */}
        <div className="filter-group">
          <label className="filter-label">حالة الدفع</label>
          <div className="filter-buttons">
            {paymentStatusOptions.map((option) => (
              <button
                key={option}
                className={`filter-button ${activePaymentStatus === option ? 'active' : ''}`}
                onClick={() => setActivePaymentStatus(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Project Type Filter */}
        <div className="filter-group">
          <label className="filter-label">المشاريع الجديدة</label>
          <div className="filter-buttons">
            {projectTypeOptions.map((option) => (
              <button
                key={option}
                className={`filter-button ${activeProjectType === option ? 'active' : ''}`}
                onClick={() => setActiveProjectType(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="date-filter-group">
          <div className="date-input-group">
            <label className="filter-label">من تاريخ</label>
            <input
              type="date"
              className="date-input"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              placeholder="--/--/--"
            />
          </div>
          <div className="date-input-group">
            <label className="filter-label">إلى تاريخ</label>
            <input
              type="date"
              className="date-input"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              placeholder="--/--/--"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
