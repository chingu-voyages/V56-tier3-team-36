import React from 'react';
import Header from '../components/Header';
import StatusFlowGuide from '../components/StatusFlowGuide';
import FindPatient from '../components/FindPatient';    
import Footer from '../components/Footer';
export default function PatientStatusUpdate() {
    return (
        <div>
        <Header />
        <div className="bg-blue-background pt-40">
        <h1 className='text-4xl font-bold'>Patient Status Update</h1>
        <p className='text-xl text-gray-600 p-6 '>Update patient status throughout the surgical journey. Enter patient number to begin.</p>
    <StatusFlowGuide /> 
    <FindPatient />
    <Footer />
    </div>
</div>
);
    }