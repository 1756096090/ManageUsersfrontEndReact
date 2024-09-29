// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCrud from './components/User/User';
import UserEdit from './components/User/UserEdit';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/users" element={<UserCrud />} />
                <Route path="/users/edit/:id" element={<UserEdit />} />
            </Routes>
        </Router>
    );
};

export default App;
