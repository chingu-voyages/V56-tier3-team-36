import { useState } from "react";
import AddPatient from "../components/AddPatient";
import UpdatePatient from "../components/UpdatePatient";

export default function PatientInformation() {
  const [mode, setMode] = useState("add");

  return (
    <div className="bg-[#F7FAFC]">
      <div className="font-bold mt-50 text-black text-3xl">
        Patient Information Management
      </div>

      <div className="bg-[#FFFFFF] p-15 mt-15 mb-15 max-w-6xl mx-auto rounded-3xl shadow-md">
        <div className="text-black mb-10 text-lg">
          Add new patients or update existing patient information. All required
          fields must be completed.
        </div>

        <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <button
            onClick={() => setMode("add")}
            className={`text-black font-medium px-6 py-3 rounded-lg w-full max-w-xs sm:w-auto sm:max-w-none ${
              mode === "add"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            Add new patient
          </button>

          <button
            onClick={() => setMode("update")}
            className={`text-black font-medium px-6 py-3 rounded-lg w-full max-w-xs sm:w-auto sm:max-w-none ${
              mode === "update"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            Update existing patient
          </button>
        </div>
      </div>

      {mode === "add" ? <AddPatient /> : <UpdatePatient />}
    </div>
  );
}
