import React, { useState } from "react";

export default function SearchPatient({ onSearch }) {
  const [patientNumber, setPatientNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientNumber.length === 6) {
      onSearch(patientNumber);
    } else {
      alert("Please enter a 6-character patient number.");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Find Patient to Update
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter 6-character patient number"
          value={patientNumber}
          onChange={(e) => setPatientNumber(e.target.value)}
          maxLength={6}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          Search Patient
        </button>
      </form>
    </div>
  );
}
