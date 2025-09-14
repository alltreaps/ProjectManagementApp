import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      'جديد': { bg: '#F3E8FF', color: '#9333EA' },
      'في التصميم': { bg: '#FFEDD5', color: '#EA580C' },
      'جاهز للتركيب': { bg: '#DBEAFE', color: '#2563EB' },
      'مكتمل': { bg: '#DCFCE7', color: '#16A34A' }
    };
    
    const config = statusConfig[status] || { bg: '#F3F4F6', color: '#6B7280' };
    
    return (
      <span 
        className="status-badge"
        style={{ backgroundColor: config.bg, color: config.color }}
      >
        {status}
      </span>
    );
  };

  const getPaymentBadge = (paymentStatus) => {
    const paymentConfig = {
      'مسدد بالكامل': { bg: '#DCFCE7', color: '#16A34A' },
      'جزئي': { bg: '#FEF9C3', color: '#CA8A04' },
      'غير مسدد': { bg: '#FEE2E2', color: '#DC2626' }
    };
    
    const config = paymentConfig[paymentStatus] || { bg: '#F3F4F6', color: '#6B7280' };
    
    return (
      <span 
        className="payment-badge"
        style={{ backgroundColor: config.bg, color: config.color }}
      >
        {paymentStatus}
      </span>
    );
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-price-info">
          <div className="total-price">{project.totalPrice}</div>
          <div className="paid-amount">مدفوع: {project.paidAmount}</div>
          <div className="remaining-amount">متبقي: {project.remainingAmount}</div>
        </div>
        
        <div className="project-main-info">
          <div className="project-title-row">
            {getStatusBadge(project.status)}
            <h3 className="project-title">{project.title}</h3>
          </div>
          
          <div className="project-details">
            <div className="client-info">{project.clientInfo}</div>
            <div className="project-type">{project.projectType}</div>
            <div className="project-dates">{project.dates}</div>
          </div>
        </div>
      </div>

      <div className="project-badges">
        {getStatusBadge(project.status)}
        {getPaymentBadge(project.paymentStatus)}
      </div>

      <div className="project-progress">
        <div className="progress-info">
          <span className="progress-percentage">{project.progress}%</span>
          <span className="progress-label">التقدم</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="project-sections">
        <div className="sections-info">
          <span className="sections-label">الأقسام:</span>
          <div className="section-tags">
            {project.sections.map((section, index) => (
              <span key={index} className="section-tag">{section}</span>
            ))}
          </div>
        </div>
        
        <div className="project-actions">
          <button className="action-btn view-btn">عرض</button>
          <button className="action-btn collect-btn">تحصيل</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
