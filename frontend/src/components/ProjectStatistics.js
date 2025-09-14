import React from 'react';
import './ProjectStatistics.css';

const ProjectStatistics = () => {
  const stats = [
    { value: '2', label: 'مشاريع جديدة', bgColor: '#FAF5FF', textColor: '#9333EA' },
    { value: '4', label: 'إجمالي المشاريع', bgColor: '#EFF6FF', textColor: '#2563EB' },
    { value: '2', label: 'غير مسددة', bgColor: '#FEF2F2', textColor: '#DC2626' },
    { value: '1', label: 'مكتملة', bgColor: '#F0FDF4', textColor: '#16A34A' }
  ];

  const financialStats = [
    { value: '1.4م', label: 'إجمالي الإيرادات' },
    { value: '0.4م', label: 'المسدد' },
    { value: '0.9م', label: 'المتبقي' }
  ];

  return (
    <div className="project-statistics">
      <div className="statistics-header">
        <h2>إحصائيات المشاريع</h2>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ backgroundColor: stat.bgColor }}
          >
            <div className="stat-value" style={{ color: stat.textColor }}>
              {stat.value}
            </div>
            <div className="stat-label">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="financial-overview">
        {financialStats.map((stat, index) => (
          <div key={index} className="financial-stat">
            <div className="financial-value">{stat.value}</div>
            <div className="financial-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatistics;
