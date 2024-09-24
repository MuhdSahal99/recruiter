import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componenets/Header';
import Sidebar from '../componenets/Sidebar';

const EmployerLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar userType="employer" />
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployerLayout;