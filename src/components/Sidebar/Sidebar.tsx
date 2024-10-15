// src/components/Sidebar/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white h-full p-4">
      <ul className="space-y-4">
        <h1>Dashboard</h1>
        <li><a href="/users" className="block text-lg hover:underline">Usuarios</a></li>
        <li><a href="/employees" className="block text-lg hover:underline">Empleados</a></li>
        <li><a href="/projects" className="block text-lg hover:underline">Proyectos</a></li>
        <li><a href="/tasks" className="block text-lg hover:underline">Tareas</a></li>
        <li><a href="/report" className="block text-lg hover:underline">Reporte</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
