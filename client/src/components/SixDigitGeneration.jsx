import { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";

function generatePatientID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}


export default function SixDigitGeneration({patientID, setPatientID}){
  useEffect(() => {
    const id = generatePatientID();
    setPatientID(id);
  }, []);

  return(
    <div className="bg-[#FFFFFF] p-4 mt-10 text-black">
      <div className="flex items-start mb-4">
        <div className="bg-blue-100 p-1 rounded-full">
          <BsPersonFill className="text-blue-700 text-4xl" />
        </div>
        <span className="font-bold ml-2 self-center">Patient identification</span>
      </div>
      <div className="flex flex-col items-start mt-2">
        <div>Patient Number</div>
        <input
          type="text"
          value={patientID}
          readOnly
          className="border-2 border-gray-300 rounded p-2 bg-[#F9FAFB] text-black"
        />
        <div className="mt-1 text-sm">
          Unique 6-character identifier (auto-generated for new patients)
        </div>
      </div>
    </div>
  )
}