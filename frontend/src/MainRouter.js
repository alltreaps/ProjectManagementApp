import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import FinancePage from './pages/FinancePage';
import ProjectsPage from './pages/ProjectsPage';
import SettingsPage from './pages/SettingsPage';
import TasksPage from './pages/TasksPage';

// Layout wrapper for pages that need navigation
const AppLayout = ({ children }) => (
  <div className="app-layout">
    <main className="main-content">
      {children}
    </main>
    <NavBar />
  </div>
);

const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
      <Route path="/expenses" element={<AppLayout><FinancePage /></AppLayout>} />
      <Route path="/projects" element={<AppLayout><ProjectsPage /></AppLayout>} />
      <Route path="/reports" element={<AppLayout><TasksPage /></AppLayout>} />
      <Route path="/settings" element={<AppLayout><SettingsPage /></AppLayout>} />
    </Routes>
  </Router>
);

export default MainRouter;
