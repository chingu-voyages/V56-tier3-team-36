import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PatientInformation from './pages/PatientInformation'
import PatientStatusUpdate from './pages/PatientStatusUpdate'
import PatientStatus from './pages/PatientStatus'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <Footer />
      </div>
    </Router>
  )
}


export default App
