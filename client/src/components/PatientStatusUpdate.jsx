import { patientStatus } from "../assets/data/patientStatus";
import React, { useState, useEffect } from "react";

export default function PatientStatusUpdate({ patient }) {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(!patient);
  const [notFound, setNotFound] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Next Status Button was pressed");

    const movingToStatus = `${nextStatus(patient.current_status)}`;

    console.log(`This is the next patient status to set: ${movingToStatus}`);
    try {
      const response = await fetch(
        `${backendUrl}/update-patient-status/${patient.patient_number}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            current_status: movingToStatus,
          }),
        }
      );

      if (!response.ok) {
        console.error("Error, no patient number");
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Status updated successfully:", data);
      setStatusMessage(`✅ Patient moved to "${movingToStatus}" status.`);
    } catch (error) {
      console.error("Error updating status:", error);
      setStatusMessage("❌ Failed to update patient status.");
    }
  }

  // //function to move status to the next in displayed text, and return it

  function nextStatus(currentStatus) {
    if (!Array.isArray(patientStatus) || patientStatus.length === 0) {
      console.error("patientStatus is not a valid non-empty array");
      return null;
    }
    //handles if there is no patient status
    const currentIndex = patientStatus.indexOf(currentStatus);
    if (currentIndex === -1) {
      return patientStatus[0];
    }
    if (currentIndex === patientStatus.length - 1) {
      return patientStatus[0];
    } else {
      return patientStatus[currentIndex + 1];
    }
  }

  function previousStatus(currentStatus) {
    if (!Array.isArray(patientStatus) || patientStatus.length === 0) {
      console.error("patientStatus is not a valid non-empty array");
      return null;
    }

    const currentIndex = patientStatus.indexOf(currentStatus);

    if (currentIndex <= 0) {
      console.log(
        "Patient is at the first status. There is no previous status"
      );
      setStatusMessage(
        "Patient is at the first status. There are no previous statuses."
      );
      return null;
    }

    return patientStatus[currentIndex - 1];
  }

  // Button handler
  async function moveStatusBack(event) {
    const prevStatus = previousStatus(patient.current_status);

    if (!prevStatus) return; // No previous status, stop here

    try {
      const response = await fetch(
        `${backendUrl}/update-patient-status/${patient.patient_number}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ current_status: prevStatus }),
        }
      );

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data = await response.json();
      console.log("Status updated successfully:", data);
      setStatusMessage(`✅ Patient moved to "${prevStatus}" status.`);
    } catch (error) {
      console.error("Error updating status:", error);
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
              {" "}
              <span className="font-bold">Patient Number: </span>
              {patient.patient_number}{" "}
            </p>

            <p>
              <span className="font-bold">Current Status: </span>
              {patient.current_status ?? "None"}
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

            <h4 className="m-10">
              Click Below to Move Patient to{" "}
              <span className="font-bold">
                {nextStatus(patient.current_status)}
              </span>{" "}
              Status
            </h4>

            <button
              className="bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              type="submit"
            >
              <h1 className="text-md font-bold text-white flex items-center justify-center gap-3">
                Next Status
              </h1>
            </button>

            <button
              onClick={() => moveStatusBack(patient.current_status)}
              className="bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              type="button"
            >
              <h1 className="text-md font-bold text-white flex items-center justify-center gap-3">
                Previous Status
              </h1>
            </button>
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
