// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import UserCrud from './components/User/User';
import UserEdit from './components/User/UserEdit';
import EmployeeCrud from './components/Employee/Employee';
import EmployeeEdit from './components/Employee/EmployeeEdit';
import ProyectCrud from './components/Proyect/Project';
import ProyectEdit from './components/Proyect/ProjectEdit';
import TaskCrud from './components/Task/Task';
import TaskEdit from './components/Task/TaskEdit';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/*" element={<Layout />}>
          <Route path="users" element={<UserCrud />} />
          <Route path="users/edit/:id" element={<UserEdit />} />
          <Route path="employees" element={<EmployeeCrud />} />
          <Route path="employees/edit/:id" element={<EmployeeEdit />} />
          <Route path="projects" element={<ProyectCrud />} />
          <Route path="projects/edit/:id" element={<ProyectEdit />} />
          <Route path="tasks" element={<TaskCrud />} />
          <Route path="tasks/edit/:id" element={<TaskEdit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
