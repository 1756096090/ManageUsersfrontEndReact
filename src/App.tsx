import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCrud from './components/User/User';
import UserEdit from './components/User/UserEdit';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                {/* Rutas protegidas */}
                <Route path="/users"
                    element={
                        <ProtectedRoute>
                            <UserCrud />
                        </ProtectedRoute>
                    }
                />
                <Route path="/users/edit/:id"
                    element={
                        <ProtectedRoute>
                            <UserEdit />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
