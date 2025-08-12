import { useState } from "react";
import AddPatient from "../components/AddPatient";
import UpdatePatient from "../components/UpdatePatient";
import Footer from "../components/Footer"
import Header from "../components/Header";

export default function PatientInformation() {
  //const [patientID, setPatientID] = useState("");
  const [mode, setMode] = useState("add");

  return (
    <div className="bg-[#F7FAFC]">
      <div className="bg-[#FFFFFF] p-4 mt-40 mb-15 shadow-md">
        <div className="font-bold mt-2 text-black text-3xl">
          Patient Information Management
        </div>
        <div className="text-black mt-3 text-lg">
          Add new patients or update existing patient information. All required
          fields must be completed.
        </div>
        <div className="mt-10">
          <button
            onClick={() => setMode("add")}
            className={`text-black font-medium px-6 py-3 mr-4 rounded-lg ${
              mode === "add"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            Add new patient
          </button>

          <button
            onClick={() => setMode("update")}
            className={`text-black font-medium px-6 py-3 mr-4 rounded-lg ${
              mode === "update"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            Update existing patient
          </button>
        </div>
      </div>
      {mode === "add" ? <AddPatient /> : <UpdatePatient></UpdatePatient>}
    </div>
    
  );
}
