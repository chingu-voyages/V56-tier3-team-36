import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PatientInformation from './pages/PatientInformation'
import PatientStatusUpdate from './pages/PatientStatusUpdate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patientinformation" element={<PatientInformation />} />
        <Route path="/patientstatusupdate" element={<PatientStatusUpdate />} />
      </Routes>
    </Router>
  )
}


export default App
