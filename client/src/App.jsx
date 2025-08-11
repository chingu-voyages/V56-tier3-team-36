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
import Footer from "./components/Footer";

import FindPatient from "./components/FindPatient";

const PrivateRoute = ({ condition, children }) => {
  return condition ? children : <Navigate to="/home" replace />;
};

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); //admin or surgical team
  const [showModal, setShowModal] = useState(false);

  const isAdmin = isAuthenticated && userRole === "admin";
  const isSurgeon = isAuthenticated && userRole === "surgical team";

//recieving data from the FindPatient component
const [patientData, setPatientData] = useState(null);

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
    
      } else if (
        usernameInput === "surgeon" &&
        passwordInput === "surgeon123"
      ) {
        console.log("Surgical team logged in");
        setIsAuthenticated(true);
        setUserRole("surgical team");
        setShowModal(false);
     
      } else {
        console.log("Invalid username or password");
        setIsAuthenticated(false);
      }
    };

  console.log("App rendering with logIn function:", typeof logIn);
  console.log("logIn function value:", logIn); // Debug log

  function handlePatientData(data){
    setPatientData(data)
  }

  return (
<>
      <Header logIn={logIn} isAdmin={isAdmin} isSurgeon={isSurgeon} />
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
{(<PatientStatusUpdate 
// onPatientData = {handlePatientData}
        // patient_number={patientData.patient_number}
        // first_name={patientData.first_name}
        // last_name={patientData.last_name}
        // statusOfPatient={patientData.statusOfPatient}

        />)}

{/* <FindPatient onPatientData = {handlePatientData} /> */}

                     </PrivateRoute>
            
      }/>

        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
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
