import Footer from "../components/Footer"
import SimpleTable from "../components/SimpleTable"
import { createRow } from "../components/CreateRow";

export default function PatientStatus(){
     // Table columns configuration.
  const columns = [
    { id: 'patientNo', label: 'Patient No:', minWidth: 100 },
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
    { patientNo: 'PT0007', currentStatus: 'Dismissal' }    
  ];

  //Create the table
  const rows = [];
  patients.map(
    (patient) => rows.push(
      createRow(
        columns,
        [ 
        patient.patientNo,
        patient.currentStatus
        ]
      )
    )
  );


  return(
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-2xl font-bold mb-6">Patient Status</h1>
        <div className="w-full flex justify-center">
          <SimpleTable columns={columns} rows={rows} />
        </div>
      </div>
      <Footer />
    </div>
  )
}