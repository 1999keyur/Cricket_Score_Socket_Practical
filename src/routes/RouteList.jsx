import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProtectedRoute from '../pages/ProtectedRoute';

export default function RouteList() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
            </Routes>
        </>
    )
}