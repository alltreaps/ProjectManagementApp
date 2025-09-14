import React from 'react';
import ProjectStatistics from '../components/ProjectStatistics';
import FiltersSection from '../components/FiltersSection';
import ProjectCard from '../components/ProjectCard';
import ActionButtons from '../components/ActionButtons';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'مشروع لافتة المحل التجاري',
      status: 'جديد',
      paymentStatus: 'جزئي',
      totalPrice: '500,000 د.ع',
      paidAmount: '250,000',
      remainingAmount: '250,000',
      clientInfo: 'العميل: أحمد محمد • 0501234567',
      projectType: 'النوع: إعلان ضوئي • الأولوية: عالية',
      dates: 'بدء المشروع: 2024-01-10 • الموعد المتوقع: 2024-01-25',
      progress: 35,
      sections: ['التصميم', 'الورشة', 'التركيب']
    },
    {
      id: 2,
      title: 'طباعة بروشورات الشركة',
      status: 'مكتمل',
      paymentStatus: 'مسدد بالكامل',
      totalPrice: '80,000 د.ع',
      paidAmount: '80,000',
      remainingAmount: '0',
      clientInfo: 'العميل: سارة أحمد • 0509876543',
      projectType: 'النوع: طباعة • الأولوية: متوسطة',
      dates: 'بدء المشروع: 2024-01-05 • الموعد المتوقع: 2024-01-12',
      progress: 100,
      sections: ['التصميم', 'الطباعة']
    },
    {
      id: 3,
      title: 'تصميم نيون المطعم',
      status: 'جاهز للتركيب',
      paymentStatus: 'غير مسدد',
      totalPrice: '350,000 د.ع',
      paidAmount: '100,000',
      remainingAmount: '250,000',
      clientInfo: 'العميل: محمد علي • 0551122334',
      projectType: 'النوع: نيون • الأولوية: عالية',
      dates: 'بدء المشروع: 2024-01-08 • الموعد المتوقع: 2024-01-20',
      progress: 85,
      sections: ['التصميم', 'الورشة', 'التركيب']
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>المشاريع</h1>
        <p>إدارة المشاريع والمهام</p>
      </div>
      
      <div className="projects-content">
        <div className="projects-sidebar">
          <ProjectStatistics />
          <FiltersSection />
          <div className="projects-list">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;