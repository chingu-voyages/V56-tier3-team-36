'use client';
import React, { useState, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { LogInModal } from './components/LogInModal'

import Home from './pages/Home'
import PatientInformation from './pages/PatientInformation'
import PatientStatusUpdate from './pages/PatientStatusUpdate'
import PatientStatus from './pages/PatientStatus'

function PrivateRoute({ children, allowedRoles, isAuthenticated, userRole }) {
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace/>;
  }
  
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}



function App() {

 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [userRole, setUserRole] = useState(null); //admin or surgical team
const [showModal, setShowModal] = useState(false);

  // const userName = users.map((user) => user.username);
  // const password = users.map((user) => user.password);

    // Use useRef to create a stable function reference
  const logInRef = useRef();
  logInRef.current = () => {
    console.log("Login button clicked from App.jsx!");
    setShowModal(true);
    console.log("showModal set to true");
  };

  // Create stable function that doesn't change on re-renders
  const logIn = useCallback(() => {
    logInRef.current();
  }, []);
 
  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);


    const handleLogin = useCallback((e) => {
    e.preventDefault();
    const usernameInput = e.target.username.value;
    const passwordInput = e.target.password.value;

    if (usernameInput === "admin" && passwordInput === "admin123") {
      console.log("Admin logged in");
      setIsAuthenticated(true);
      setUserRole('admin');
      setShowModal(false); // Close modal directly
    } else if (usernameInput === "surgeon" && passwordInput === "surgeon123") {
      console.log("Surgical team logged in");
      setIsAuthenticated(true);
      setUserRole('surgical team');
      setShowModal(false); // Close modal directly
    } else {
      console.log("Invalid username or password");
      setIsAuthenticated(false);
    }
  }, []); // Empty dependency array

    console.log("App rendering with logIn function:", typeof logIn);

  return (
    <Router>
      <Header logIn={logIn} />
{showModal && (
      <LogInModal
onClose={handleClose}
handleLogin={handleLogin}
      />
)}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

{/* Admin User Route */}
        <Route path="/patientinformation" 
        element={
        <PrivateRoute allowedRoles={['admin']}
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        >
        <PatientInformation /> 
        </PrivateRoute>
        }
        />
{/* Surgical Team User Route */}

        <Route path="/patientstatusupdate" 
        element={
        <PrivateRoute 
        allowedRoles={['surgical team']}
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        >

        <PatientStatusUpdate />
      </PrivateRoute>
      } 
      />


        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
    </Router>
  )
}


export default App;
