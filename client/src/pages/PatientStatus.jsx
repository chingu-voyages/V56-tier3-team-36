import React, { useEffect, useState } from "react";
import SimpleTable from "../components/SimpleTable"
import { createRow } from "../components/CreateRow";
import StatusFlowGuide from "../components/StatusFlowGuide";
import { getAllPatients, subscribePatientUpdates } from "../service/apiServicePatient";

export default function PatientStatus(){
     // Table columns configuration.
  const columns = [
    { id: 'patient_number', label: 'Patient No.', minWidth: 100 },
    { id: 'current_status', label: 'Current Status', minWidth: 100 }
  ];  
  
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getAllPatients();
        data.sort((a, b) => (a.patient_id > b.patient_id ? 1 : -1));
        setPatients(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchPatients();
    
  // SSE subscription
    const es = subscribePatientUpdates((updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((p) =>
        p.patient_number === updatedPatient.patient_number
          ? updatedPatient
          : p
      )
    );
  });

  return () => es.close(); 
}, []);

  const filteredPatients = patients
  .filter((p) => {
    const status = p.current_status?.trim(); // Removes empty/null statuses
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
        patient.patient_number,
        patient.current_status 
      ]
    )
  );

  return(
    <div className="bg-blue-background pt-50 flex-grow">
        <h1 className='text-4xl font-bold'>Status Board</h1>
        <StatusFlowGuide />
        <div className="bg-white p-4 m-8 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-auto">
            <SimpleTable columns={columns} rows={rows} />
          </div>
        </div>
        
    </div>
  )
}