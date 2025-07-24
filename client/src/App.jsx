import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PatientInformation from './pages/PatientInformation'
import PatientStatus from './pages/PatientStatus'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patientinformation" element={<PatientInformation />} />
        <Route path="/patientstatus" element={<PatientStatus />} />
      </Routes>
    </Router>
  )
}


export default App
