import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" replace />;
    }
    try {
        const dataToken:any = jwtDecode(token);
        console.log("🚀 ~ dataToken:", dataToken)
        if (dataToken?.exp && dataToken.exp * 1000 < Date.now() && dataToken?.ID) {
            return <Navigate to="/" replace />;
        }
        
        
    } catch (error) {
        console.error("Error decoding token", error);
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
