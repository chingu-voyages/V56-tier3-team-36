import React from 'react';
import StatusFlowGuide from '../components/StatusFlowGuide';
import FindPatient from '../components/FindPatient';    
export default function PatientStatusUpdate() {
    return (
              
        <div className="bg-blue-background pt-50">
        <h1 className='text-4xl font-bold'>Patient Status Update</h1>
        <p className='text-xl text-gray-600 p-6 '>Update patient status throughout the surgical journey. Enter patient number to begin.</p>
    <StatusFlowGuide /> 
    <FindPatient />
   
    </div>

);
    }