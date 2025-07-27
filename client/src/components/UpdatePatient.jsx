import { useState, useEffect } from "react";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import SixDigitGeneration from "./SixDigitGeneration";
import SearchPatient from "./SearchPatient";
import { FaBuildingCircleCheck } from "react-icons/fa6";

export default function UpdatePatient() {
  const [patientID, setPatientID] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted the form:", formData);
    setShowPopup(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      country: "",
    });
  };

  return (
    <div>
      <SearchPatient/>
      <SixDigitGeneration patientID={patientID} setPatientID={setPatientID}/>
      <form onSubmit={handleSubmit}>
        <PersonalInformation formData={formData} handleChange={handleChange} />
        <AddressInformation formData={formData} handleChange={handleChange} />
        <div className="mt-10 flex flex-col">
          <div className="flex flex-row bg-blue-600 text-white font-bold text-l self-center px-8 py-3 rounded-lg mb-4">
            <FaBuildingCircleCheck className="text-3xl mr-2"/>
            <button
              type="submit"
            >
              Update patient information
            </button>
          </div>
          <button 
            type="button"
            className="bg-gray-200 font-medium text-gray-600 self-center px-6 py-3 rounded-lg mb-10"
            onClick={() => setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              street: "",
              city: "",
              state: "",
              country: "",
            })}
          >
            Clear form
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#F9FAFB] bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded shadow-md text-black">
            <h2 className="text-xl font-bold mb-2">
              Form submission successful
            </h2>
            <p>Patient added to the system successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-black rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
