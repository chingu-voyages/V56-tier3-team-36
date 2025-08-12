import { useState, useEffect } from "react";
import axios from "axios";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import SixDigitGeneration from "./SixDigitGeneration";
import SearchPatient from "./SearchPatient";
import { FaBuildingCircleCheck } from "react-icons/fa6";

export default function UpdatePatient() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [patientNumber, setPatientNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${backendURL}/update-patient/${patientNumber}`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          street_address: formData.street,
          city: formData.city,
          region: formData.state,
          country: formData.country,
          telephone: formData.phone,
          contact_email: formData.email,
        }
      );

      console.log("Update successful:", res.data);
      setShowPopup(true);
    } catch (error) {
      console.error(
        "Error updating patient:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (patientNumber) {
      axios
        .get(`${backendURL}/get-patient/${patientNumber}`)
        .then((res) => {
          const data = res.data;
          setFormData({
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            email: data.contact_email || "",
            phone: data.telephone || "",
            street: data.street_address || "",
            city: data.city || "",
            state: data.region || "",
            country: data.country || "",
          });
          setFetchError("");
        })
        .catch((error) => {
          console.error(
            "Failed to fetch patient:",
            error.response?.data || error.message
          );
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
          setFetchError(
            "Patient not found. Please check the patient number and try again."
          );
        });
    }
  }, [patientNumber]);

  return (
    <div>
      <SearchPatient settingPatientNumber={setPatientNumber} />
      {fetchError && (
        <div className="text-red-600 font-medium text-center mt-2">
          {fetchError}
        </div>
      )}
      <SixDigitGeneration
        patientNumber={patientNumber}
        setPatientNumber={setPatientNumber}
        isUpdatePage={true}
      />
      <form onSubmit={handleSubmit}>
        <PersonalInformation formData={formData} handleChange={handleChange} />
        <AddressInformation formData={formData} handleChange={handleChange} />
        <div className="mt-10 flex flex-col">
          <div className="flex flex-row bg-blue-600 text-white font-bold text-l self-center px-8 py-3 rounded-lg mb-4">
            <FaBuildingCircleCheck className="text-3xl mr-2" />
            <button type="submit">Update patient information</button>
          </div>
          <button
            type="button"
            className="bg-gray-200 font-medium text-gray-600 self-center px-6 py-3 rounded-lg mb-10"
            onClick={() =>
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                country: "",
              })
            }
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
