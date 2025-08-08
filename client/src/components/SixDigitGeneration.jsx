import { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";

function generatePatientNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let number = "";
  for (let i = 0; i < 6; i++) {
    number += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return number;
}

export default function SixDigitGeneration({
  patientNumber,
  setPatientNumber,
  isUpdatePage = false,
}) {
  useEffect(() => {
    if (!isUpdatePage && !patientNumber) {
      const newNumber = generatePatientNumber();
      setPatientNumber(newNumber);
    }
  }, [isUpdatePage, patientNumber, setPatientNumber]);

  return (
    <div className="bg-[#FFFFFF] p-8 mt-10 text-black max-w-4xl mx-auto rounded-3xl shadow-md">
      <div className="flex items-start mb-4">
        <div className="bg-blue-100 p-1 rounded-full">
          <BsPersonFill className="text-blue-700 text-4xl" />
        </div>
        <span className="font-bold ml-3 self-center text-2xl">
          Patient Identification
        </span>
      </div>
      <div className="flex flex-col items-start mt-2">
        <div>Patient Number</div>
        <input
          type="text"
          value={patientNumber}
          readOnly
          className="border-2 border-gray-300 rounded p-2 bg-[#F9FAFB] text-black"
        />
        <div className="mt-1 text-sm">
          Unique 6-character identifier (auto-generated for new patients)
        </div>
      </div>
    </div>
  );
}
