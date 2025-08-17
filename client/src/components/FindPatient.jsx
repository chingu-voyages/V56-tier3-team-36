import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import PatientStatusUpdate from "./PatientStatusUpdate";
import { getData } from "./GetDataFunction";

export default function FindPatient() {
  const [searchId, setSearchId] = useState("");
  const [showUpdatePatientStatus, setUpdatePatientStatus] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

async function handleFetchData(event) {
    event.preventDefault();
    setLoading(true);
    setNotFound(false);
    setPatientData(null);
    setUpdatePatientStatus(false);

    try {
      const data = await getData(searchId, backendUrl);
      setPatientData(data);
      setUpdatePatientStatus(true);
      console.log(data)
    } catch (err) {
      console.error(err.message);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
    if (notFound) {
      const timer = setTimeout(() => {
        setNotFound(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notFound]);
 

  if (loading) return <div className="message">Loading patient data...</div>;
  if (notFound) return <div>No patient found. Please try again in a moment.</div>;

  return (
    <div className="bg-white p-4 m-8 mb-30 rounded-2xl shadow-lg flex flex-col items-center">
      <div className="flex gap-5">
        <IoIosSearch className="bg-blue-search-background border-0 rounded-3xl text-4xl p-2 text-blue-500" />
        <h1 className="text-2xl font-bold mb-4">Find Patient</h1>
      </div>
      <form onSubmit={handleFetchData}>
        <p className="mb-4 text-lg font-semi-bold">Patient Number:</p>
        <input
          className="border border-gray-300 p-2 rounded-xl w-full text-center"
          type="text"
          value={searchId}
          placeholder="Enter 6-character patient number"
          onChange={(e) => setSearchId(e.target.value)}
        />

        <div className="flex items-center justify-center">
          <button
            className=" bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            type="submit"
          >
            <div className="flex gap-5 flex-row items-center">
              <h1 className="text-md font-bold text-white flex items-center gap-3">
                <IoIosSearch className="text-xl" /> Search Patient
              </h1>
            </div>
          </button>
        </div>
      </form>
      {showUpdatePatientStatus && <PatientStatusUpdate patient={patientData} />}
    </div>
  );
}
