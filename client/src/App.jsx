"use client";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { LogInModal } from "./components/LogInModal";

import Home from "./pages/Home";
import PatientInformation from "./pages/PatientInformation";
import PatientStatusUpdate from "./pages/PatientStatusUpdate";
import PatientStatus from "./pages/PatientStatus";
import Footer from './components/Footer'
import ChatBot from "./components/ChatBot";

const PrivateRoute = ({ condition, children }) => {
  return condition ? children : <Navigate to="/home" replace />;
};

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); //admin or surgical team
  const [showModal, setShowModal] = useState(false);

  const isAdmin = isAuthenticated && userRole === "admin";
  const isSurgeon = isAuthenticated && userRole === "surgical team";

  const logIn = () => {
      setShowModal(true);
  }

  const handleClose = () => {
      setShowModal(false);
  };

  const handleLogin = (e) => {
  
      e.preventDefault();
      const usernameInput = e.target.username.value;
      const passwordInput = e.target.password.value;

      if (usernameInput === "admin" && passwordInput === "admin123") {
        setIsAuthenticated(true);
        setUserRole("admin");
        setShowModal(false);
    
      } else if (
        usernameInput === "surgeon" &&
        passwordInput === "surgeon123"
      ) {
        setIsAuthenticated(true);
        setUserRole("surgical team");
        setShowModal(false);
     
      } else {
        setIsAuthenticated(false);
      }
    };

  return (
<>
      <Header logIn={logIn} isAdmin={isAdmin} isSurgeon={isSurgeon} />
      {showModal && (
        <LogInModal onClose={handleClose} handleLogin={handleLogin} />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />

        {/* Admin User Route */}
        <Route 
            path="/patientinformation" 
            element={
              <PrivateRoute condition={isAdmin}>
                <PatientInformation />
              </PrivateRoute>
            } 
        />

        {/* Surgical Team OR Admin User Route */}

        <Route
          path="/patientstatusupdate"
          element={
              <PrivateRoute condition={(isAdmin || isSurgeon)}>
                <PatientStatusUpdate />
              </PrivateRoute>
            }
        />

        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
      <ChatBot />
      <Footer />
    </>
  );
}
function App() {
  return (
    <Router>
       <div className="min-h-screen flex flex-col">
         <AppContent />
       </div>
    </Router>
  );
}

export default App;
