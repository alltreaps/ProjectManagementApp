import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  FolderIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 'home',
      label: 'الرئيسية',
      icon: <HomeIcon className="nav-icon" />,
      path: '/dashboard'
    },
    {
      id: 'projects',
      label: 'المشاريع',
      icon: <FolderIcon className="nav-icon" />,
      path: '/projects'
    },
    {
      id: 'expenses',
      label: 'الصرفيات',
      icon: <CurrencyDollarIcon className="nav-icon" />,
      path: '/expenses'
    },
    {
      id: 'reports',
      label: 'التقارير',
      icon: <ChartBarIcon className="nav-icon" />,
      path: '/reports'
    },
    {
      id: 'settings',
      label: 'الإعدادات',
      icon: <Cog6ToothIcon className="nav-icon" />,
      path: '/settings'
    }
  ];

  const getActiveTab = () => {
    const path = location.pathname;
    const activeItem = navItems.find(item => item.path === path);
    return activeItem ? activeItem.id : 'home';
  };

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${getActiveTab() === item.id ? 'active' : ''}`}
            onClick={() => handleTabClick(item.path)}
            title={item.label}
          >
            <div className="nav-icon-container">
              {item.icon}
            </div>
            <div className="nav-label-container">
              <span className="nav-label">{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;