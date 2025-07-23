import { useState, useEffect } from "react";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import SixDigitGeneration from "./SixDigitGeneration";

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
      region: "",
      country: "",
    });
  };

  return (
    <div>
      <SixDigitGeneration patientID={patientID} setPatientID={setPatientID}/>
      <form onSubmit={handleSubmit}>
        <PersonalInformation formData={formData} handleChange={handleChange} />
        <AddressInformation formData={formData} handleChange={handleChange} />
        <div className="mt-6">
          <button
            type="submit"
            className="!bg-green-600 text-black px-6 py-2 rounded"
          >
            Update Patient
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
