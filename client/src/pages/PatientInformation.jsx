import { useState } from "react";
import AddPatient from "../components/AddPatient";
import UpdatePatient from "../components/UpdatePatient";

export default function PatientInformation() {
  //const [patientID, setPatientID] = useState("");
  const [mode, setMode] = useState("add");

  return (
    <div className="bg-blue-background pt-50 pb-5">
        <h1 className="text-4xl font-bold">
          Patient Information Management
        </h1>
        <p className='text-xl text-gray-600 p-6 '>
          Add new patients or update existing patient information. All required
          fields must be completed.
        </p>
        <div className="mt-6">
          <button
            className="!bg-blue-600 text-black px-4 py-2 mr-4"
            onClick={() => setMode("add")}
          >
            Add new patient
          </button>

          <button
            className="!bg-gray-500 px-4 py-2"
            onClick={() => setMode("update")}
          >
            Update existing patient
          </button>
        </div>
      {mode === "add" ? <AddPatient /> : <UpdatePatient></UpdatePatient>}
      
    </div>
    
  );
}
