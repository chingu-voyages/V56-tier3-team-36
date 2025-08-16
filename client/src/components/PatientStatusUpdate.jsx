import React, { useState, useEffect } from "react";
import { patientStatus } from "../assets/data/patientStatus";

export default function PatientStatusUpdate({ patient }) {
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState(patient.current_status);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  function getNextStatus(currentStatus) {
    if (!Array.isArray(patientStatus) || patientStatus.length === 0)
      return null;
    const i = patientStatus.indexOf(currentStatus);
    if (i === -1) return patientStatus[0]; // fallback
    return patientStatus[(i + 1) % patientStatus.length];
  }

  function getPrevStatus(currentStatus) {
    if (!Array.isArray(patientStatus) || patientStatus.length === 0)
      return null;
    const i = patientStatus.indexOf(currentStatus);
    if (i === -1) return null; // unknown -> no prev
    if (i === 0) return null; // at first -> no prev
    return patientStatus[i - 1];
  }

  // labels for the dropdown
  const nextLabel = getNextStatus(updatedStatus);
  const prevLabel = getPrevStatus(updatedStatus);

  useEffect(() => {
    console.log("Status changed to:", updatedStatus);
  }, [updatedStatus]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedOption) {
      setStatusMessage("⚠️ Please select an option first.");
      return;
    }

    let newStatus = null;
    if (selectedOption === "next") {
      newStatus = getNextStatus(updatedStatus);
    } else if (selectedOption === "previous") {
      newStatus = getPrevStatus(updatedStatus);
    }

    if (!newStatus) {
      setStatusMessage("⚠️ Could not determine the new status.");
      return;
    }

    try {
      const res = await fetch(
        `${backendUrl}/update-patient-status/${patient.patient_number}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ current_status: newStatus }),
        }
      );

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      setUpdatedStatus(data.current_status ?? newStatus);
      setStatusMessage(
        `✅ Patient moved to "${data.current_status ?? newStatus}" status.`
      );
    } catch (err) {
      console.error("Error updating status:", err);
      setStatusMessage("❌ Failed to update patient status.");
    }
  }

  return (
    <div className="bg-white px-20 py-10 m-8 mb-30 rounded-2xl shadow-lg flex flex-col items-center">
      <div className="flex gap-5">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center flex-col mb-5"
          >
            <p>
              <span className="font-bold">Patient Number: </span>
              {patient.patient_number}
            </p>
            <p>
              <span className="font-bold">Current Status: </span>
              {updatedStatus ?? "None"}
            </p>
            <p>
              <span className="font-bold">Name: </span>
              {patient.first_name} {patient.last_name}
            </p>
            <p>
              <span className="font-bold">Address: </span>
              {patient.street_address}
            </p>
            <p>
              <span className="font-bold">City: </span>
              {patient.city}
            </p>
            <p>
              <span className="font-bold">State: </span>
              {patient.region}
            </p>
            <p>
              <span className="font-bold">Telephone: </span>
              {patient.telephone}
            </p>

            <div className="mt-10 w-full max-w-sm">
              <label
                htmlFor="patientDropdown"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Choose a status:
              </label>

              <select
                id="patientDropdown"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="">-- Select a Status --</option>
                <option value="previous" disabled={!prevLabel}>
                  Previous Status: {prevLabel ?? "N/A"}
                </option>
                <option value="next" disabled={!nextLabel}>
                  Next Status: {nextLabel ?? "N/A"}
                </option>
              </select>

              <button
                type="submit"
                className="bg-blue-600 p-4 mt-4 rounded-2xl shadow-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              >
                <h1 className="text-md font-bold text-white flex items-center justify-center gap-3">
                  Update Status
                </h1>
              </button>
            </div>
          </form>

          {statusMessage && (
            <p
              style={{
                color: statusMessage.startsWith("✅") ? "green" : "red",
              }}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
