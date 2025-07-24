import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PatientInformation from './pages/PatientInformation'
<<<<<<< HEAD
import PatientStatusUpdate from './pages/PatientStatusUpdate'
=======
import PatientStatus from './pages/PatientStatus'
>>>>>>> 060247324b9599334b2cff7a1226ed6fa64823ab

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patientinformation" element={<PatientInformation />} />
<<<<<<< HEAD
        <Route path="/patientstatusupdate" element={<PatientStatusUpdate />} />
=======
        <Route path="/patientstatus" element={<PatientStatus />} />
>>>>>>> 060247324b9599334b2cff7a1226ed6fa64823ab
      </Routes>
    </Router>
  )
}


export default App
