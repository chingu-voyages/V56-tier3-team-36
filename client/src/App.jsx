"use client";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { LogInModal } from "./components/LogInModal";

import Home from "./pages/Home";
import PatientInformation from "./pages/PatientInformation";
import PatientStatusUpdate from "./pages/PatientStatusUpdate";
import PatientStatus from "./pages/PatientStatus";
import Footer from './components/Footer'

function PrivateRoute({ children, allowedRoles, isAuthenticated, userRole }) {
  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

function AppContent() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); //admin or surgical team
  const [showModal, setShowModal] = useState(false);

  const logIn = () => {
      console.log("Login button clicked from App.jsx!");
      setShowModal(true);
      console.log("showModal set to true");
  }

  const handleClose = () => {
      setShowModal(false);
  };

  const handleLogin = (e) => {
  
      e.preventDefault();
      const usernameInput = e.target.username.value;
      const passwordInput = e.target.password.value;

      if (usernameInput === "admin" && passwordInput === "admin123") {
        console.log("Admin logged in");
        setIsAuthenticated(true);
        setUserRole("admin");
        setShowModal(false);
        navigate("/patientinformation");
      } else if (
        usernameInput === "surgeon" &&
        passwordInput === "surgeon123"
      ) {
        console.log("Surgical team logged in");
        setIsAuthenticated(true);
        setUserRole("surgical team");
        setShowModal(false);
        navigate("/patientstatusupdate");
      } else {
        console.log("Invalid username or password");
        setIsAuthenticated(false);
      }
    };


  console.log("App rendering with logIn function:", typeof logIn);
  console.log("logIn function value:", logIn); // Debug log


  return (
<>
      <Header logIn={logIn}  />
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
            <PrivateRoute
              allowedRoles={["admin"]}
              isAuthenticated={isAuthenticated}
              userRole={userRole}
            >
              <PatientInformation />
            </PrivateRoute>
          }
        />
        {/* Surgical Team User Route */}

        <Route
          path="/patientstatusupdate"
          element={
            <PrivateRoute
              allowedRoles={["surgical team"]}
              isAuthenticated={isAuthenticated}
              userRole={userRole}
            >
              <PatientStatusUpdate />
            </PrivateRoute>
          }
        />

        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <Router>
       <div className="min-h-screen flex flex-col">
        <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patientinformation" element={<PatientInformation />} />
        <Route path="/patientstatusupdate" element={<PatientStatusUpdate />} />
        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
          
      {/* <AppContent /> */}
      <Footer />
       </div>
    </Router>
  );
}

export default App;
