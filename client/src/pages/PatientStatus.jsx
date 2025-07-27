import React, { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header";
import SimpleTable from "../components/SimpleTable"
import { createRow } from "../components/CreateRow";

export default function PatientStatus(){
     // Table columns configuration.
  const columns = [
    { id: 'patientNo', label: 'Patient No.', minWidth: 100 },
    { id: 'currentStatus', label: 'Current Status', minWidth: 100 }
  ];  
  
  // This will be replaced with a GET ALL request
  const patients = [
    { patientNo: 'PT0001', currentStatus: 'Checked In' },        
    { patientNo: 'PT0002', currentStatus: 'Pre-Procedure' },     
    { patientNo: 'PT0003', currentStatus: 'In-progress' },     
    { patientNo: 'PT0004', currentStatus: 'Closing' },          
    { patientNo: 'PT0005', currentStatus: 'Recovery' },      
    { patientNo: 'PT0006', currentStatus: 'Complete' }, 
    { patientNo: 'PT0007', currentStatus: 'Dismissal' },   
    { patientNo: 'PT0008', currentStatus: 'Checked In' },        
    { patientNo: 'PT0009', currentStatus: 'Pre-Procedure' },     
    { patientNo: 'PT0010', currentStatus: 'In-progress' },     
    { patientNo: 'PT0011', currentStatus: 'Closing' },          
    // { patientNo: 'PT0016', currentStatus: 'Pre-Procedure' },     
    // { patientNo: 'PT0017', currentStatus: 'In-progress' },     
    // { patientNo: 'PT0018', currentStatus: 'Closing' },          
    // { patientNo: 'PT0019', currentStatus: 'Recovery' },      
    // { patientNo: 'PT0020', currentStatus: 'Complete' }, 
    // { patientNo: 'PT0021', currentStatus: 'Dismissal' },
    { patientNo: 'PTTE22', currentStatus: 'Closing' }    
  ];

  const filteredPatients = patients
  .filter((p) => {
    const status = p.currentStatus?.trim(); // Removes empty/null statuses
    return status && status !== "Dismissal"; //Removes Patients with Dismissal Status
  })

  const pageSize = 8; // 8 Records to be on each page
  const totalPages = Math.ceil(filteredPatients.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 20000);
    return () => clearInterval(interval); 
  }, [totalPages]);

  const patientsPerPage = filteredPatients.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  let rows = patientsPerPage.map((patient) =>
    createRow(
      columns,
      [
        patient.patientNo,
        patient.currentStatus
      ]
    )
  );

  return(
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center pt-40">
        <h1 className="text-2xl font-bold mb-6">Patient Status</h1>
        <div className="w-full max-w-2xl px-4 overflow-auto">
            <SimpleTable columns={columns} rows={rows} />
        </div>
      </div>
      <Footer />
    </div>
  )
}