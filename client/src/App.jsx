"use client";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
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

import FindPatient from "./components/FindPatient";

const PrivateRoute = ({ condition, authReady, children }) => {
  if (!authReady) return null;
  return condition ? children : <Navigate to="/home" replace />;
};

function AppContent() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); //admin or surgical team
  const [showModal, setShowModal] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  const isAdmin = isAuthenticated && userRole === "admin";
  const isSurgeon = isAuthenticated && userRole === "surgical team";



//recieving data from the FindPatient component
const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem("st_auth");
      const storedRole = localStorage.getItem("st_role");
      if (storedAuth === "1" && storedRole) {
        setIsAuthenticated(true);
        setUserRole(storedRole);
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
    } catch {
      setIsAuthenticated(false);
      setUserRole(null);
    } finally {
      setAuthReady(true);
    }
  }, []);

  const persistAuth = (role) => {
    localStorage.setItem("st_auth", "1");
    localStorage.setItem("st_role", role);
  };
  const clearAuth = () => {
    localStorage.removeItem("st_auth");
    localStorage.removeItem("st_role");
  };

  const logIn = () => setShowModal(true);
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
      persistAuth("admin");
      setShowModal(false);
    } else if (usernameInput === "surgeon" && passwordInput === "surgeon123") {
      setIsAuthenticated(true);
      setUserRole("surgical team");
      persistAuth("surgical team");
      setShowModal(false);
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
      clearAuth();
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuthenticated(false);
    setUserRole(null);
    setShowModal(false);
    clearAuth();
    navigate("/home", { replace: true });
  };

  return (
    <>
      <Header
        logIn={logIn}
        handleLogout={handleLogout}
        isAdmin={isAdmin}
        isSurgeon={isSurgeon}
        isAuthenticated={isAuthenticated}
      />

      {showModal && (
        <LogInModal onClose={handleClose} handleLogin={handleLogin} />
      )}
      {/* <FindPatient onPatientData = {handlePatientData} /> */}
      
      {/* {patientData && (
        <PatientStatusUpdate 
        patient_number={patientData.patient_number}
        first_name={patientData.first_name}
        last_name={patientData.last_name}
        statusOfPatient={patientData.statusOfPatient}
        />
      )} */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/patientinformation"
          element={
            <PrivateRoute condition={isAdmin} authReady={authReady}>
              <PatientInformation />
            </PrivateRoute>
          }
        />

        <Route
          path="/patientstatusupdate"
          element={
            <PrivateRoute
              condition={isAdmin || isSurgeon}
              authReady={authReady}
            >
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
