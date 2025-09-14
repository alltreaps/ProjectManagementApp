
import React from 'react';
import FinancialCard from '../components/FinancialCard';
import StatusCard from '../components/StatusCard';
import InvoiceCard from '../components/InvoiceCard';
import TransactionCard from '../components/TransactionCard';
import ActionButton from '../components/ActionButton';
import SectionHeader from '../components/SectionHeader';
import { 
  CurrencyDollarIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  PrinterIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Sample data
  const statusData = [
    { amount: '3,250,000', label: 'مدفوع', type: 'success', icon: <CurrencyDollarIcon className="w-6 h-6" /> },
    { amount: '1,250,000', label: 'معلق', type: 'warning', icon: <ClockIcon className="w-6 h-6" /> },
    { amount: '250,000', label: 'متأخر', type: 'danger', icon: <ExclamationTriangleIcon className="w-6 h-6" /> }
  ];

  const invoices = [
    {
      title: 'مشروع لوحة التحكم التجاري',
      client: 'العميل: أحمد محمد',
      amount: '500,000', 
      AmountLeft: '250,000',
      invoiceNumber: 'رقم الفاتورة: INV-001',
      date: 'استحقاق: 25-01-2024',
      status: 'partial',
      actions: [
        { label: 'تذكير', type: 'primary' },
        { label: 'تحصيل', type: 'success' },
      ]
    },
    {
      title: 'تصميم تطبيق المطعم',
      client: 'العميل: محمد علي',
      amount: '350,000',
      AmountLeft: '250,000',
      invoiceNumber: 'رقم الفاتورة: INV-002',
      date: 'استحقاق: 20-01-2024',
      status: 'pending',
      actions: [
        { label: 'تذكير', type: 'primary' },
        { label: 'تحصيل', type: 'success' },
      ]
    }
  ];

  const transactions = [
    {
      title: 'مشروع لوحة المحل التجاري',
      amount: '250,000',
      type: 'income',
      date: '15-01-2024 • أحمد محمد',
      icon: <ChartBarIcon className="w-5 h-5" />
    },
    {
      title: 'طباعة بروشورات الشركة',
      amount: '80,000',
      type: 'expense',
      date: '14-01-2024 • سارة أحمد',
      icon: <PrinterIcon className="w-5 h-5" />
    },
    {
      title: 'شراء الألمنيوم والزجاج',
      amount: '120,000',
      type: 'expense',
      date: '13-01-2024 • مورد المواد الخام',
      icon: <BuildingOfficeIcon className="w-5 h-5" />
    }
  ];

  const actionButtons = [
    { title: 'سند صرف جديد', icon: 'arrow-up-circle', color: 'red' },
    { title: 'سند قبض جديد', icon: 'arrow-down-circle', color: 'green' },
    { title: 'سند تحويل', icon: 'arrow-path', color: 'purple' },
    { title: 'مشروع جديد', icon: 'plus-circle', color: 'orange' }
  ];

  const monthlyExpenses = [
    { category: 'المواد الخام', amount: '850,000', color: '#f44336' },
    { category: 'الرواتب', amount: '620,000', color: '#2196f3' },
    { category: 'المرافق', amount: '210,000', color: '#ff9800' },
    { category: 'أخرى', amount: '120,000', color: '#4caf50' }
  ];

  return (
    <div className="dashboard">

      {/* Financial Overview */}
      <FinancialCard 
        title="الوضع المالي - يناير 2024"
        revenue="2,700,000"
        expenses="4,500,000"
      />

      {/* Status Cards */}
      <div className="status-grid">
        {statusData.map((status, index) => (
          <StatusCard 
            key={index}
            amount={status.amount}
            label={status.label}
            type={status.type}
            icon={status.icon}
          />
        ))}
      </div>

      {/* Pending Invoices */}
      <div className="section">
        <div className="invoices-list">
        <SectionHeader 
          title="الفواتير المعلقة" 
          actionText="عرض الكل"
        />
          {invoices.map((invoice, index) => (
            <InvoiceCard 
              key={index}
              title={invoice.title}
              client={invoice.client}
              amount={invoice.amount}
              AmountLeft={invoice.AmountLeft}
              invoiceNumber={invoice.invoiceNumber}
              date={invoice.date}
              status={invoice.status}
              actions={invoice.actions}
            />
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="section">
        <div className="transactions-list">
        <SectionHeader 
          title="المعاملات الأخيرة" 
          actionText="عرض الكل"
        />
          {transactions.map((transaction, index) => (
            <TransactionCard 
              key={index}
              title={transaction.title}
              amount={transaction.amount}
              type={transaction.type}
              date={transaction.date}
              icon={transaction.icon}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="actions-grid">
        {actionButtons.map((action, index) => (
          <ActionButton 
            key={index}
            title={action.title}
            icon={action.icon}
            color={action.color}
          />
        ))}
      </div>

    </div>
  );
};

export default Dashboard;
