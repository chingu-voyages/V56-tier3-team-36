import { useState, useEffect } from "react";
import AddPatient from "../components/AddPatient";
import UpdatePatient from "../components/UpdatePatient";

export default function PatientInformation() {
  const [patientID, setPatientID] = useState("");
  const [mode, setMode] = useState("add");

  return (
    <div className="bg-[#242424]">
      <div className="bg-[#3d3b3b] p-4">
        <div className="font-bold mt-2 text-white">
          Patient Information Management
        </div>
        <div className="text-white">
          Add new patients or update existing patient information. All required
          fields must be completed.
        </div>
        <div className="mt-2">
          <button
            className="!bg-blue-600 text-white px-4 py-2 mr-4"
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
      </div>
      {mode === "add" ? <AddPatient /> : <UpdatePatient></UpdatePatient>}
    </div>
  );
}
