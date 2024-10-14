// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import ProtectedRoute from '../ProtectedRoute';

const Layout: React.FC = () => {
  return (
    <div className="grid grid-cols-[200px_1fr] min-h-screen bg-gray-100"> {/* Define el grid con dos columnas */}
      <Sidebar />
      <main className="p-6 overflow-y-auto"> {/* Se eliminaron h-full ya que grid se encarga de la altura */}
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </main>
    </div>
  );
};

export default Layout;
