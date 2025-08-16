import { useState, useEffect } from "react";
import axios from "axios";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import SixDigitGeneration from "./SixDigitGeneration";
import SearchPatient from "./SearchPatient";
import { FaBuildingCircleCheck } from "react-icons/fa6";

const onlyDigits = (v = "") => v.replace(/\D/g, "");
const formatUSPhone = (digits = "") => {
  const d = onlyDigits(digits).slice(0, 10);
  const len = d.length;
  if (len === 0) return "";
  if (len < 4) return `(${d}`;
  if (len < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};
const isValidUSPhone10 = (digits = "") => onlyDigits(digits).length === 10;

export default function UpdatePatient() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [patientNumber, setPatientNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneDisplay: "",
    phoneDigits: "",
    street: "",
    city: "",
    state: "",
    country: "US",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "phoneDisplay") {
      const digits = onlyDigits(value).slice(0, 10);
      const formatted = formatUSPhone(digits);
      setFormData((prev) => ({
        ...prev,
        phoneDisplay: formatted,
        phoneDigits: digits,
      }));
      setPhoneError(digits.length === 10 ? "" : "Enter a 10-digit US number");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidUSPhone10(formData.phoneDigits)) {
      setPhoneError("Enter a 10-digit US number");
      return;
    }

    try {
      const res = await axios.put(
        `${backendURL}/update-patient/${patientNumber}`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          street_address: formData.street,
          city: formData.city,
          region: formData.state,
          country: "US",
          telephone: formData.phoneDigits,
          contact_email: formData.email,
        }
      );
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
            phoneDisplay: formatUSPhone(data.telephone || ""),
            phoneDigits: onlyDigits(data.telephone || "").slice(0, 10),
            street: data.street_address || "",
            city: data.city || "",
            state: data.region || "",
            country: "US",
          });
          setFetchError("");
          setPhoneError(
            isValidUSPhone10(onlyDigits(data.telephone || ""))
              ? ""
              : "Enter a 10-digit US number"
          );
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
            phoneDisplay: "",
            phoneDigits: "",
            street: "",
            city: "",
            state: "",
            country: "US",
          });
          setFetchError(
            "Patient not found. Please check the patient number and try again."
          );
          setPhoneError("");
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
        <PersonalInformation
          formData={formData}
          handleChange={handleChange}
          phoneError={phoneError}
        />
        <AddressInformation formData={formData} handleChange={handleChange} />
        <div className="mt-10 flex flex-col">
          <button
            type="submit"
            className="flex flex-row bg-blue-600 text-white font-bold text-l self-center px-8 py-3 rounded-lg mb-4"
          >
            <FaBuildingCircleCheck className="text-3xl mr-2" />
            Update patient information
          </button>
          <button
            type="button"
            className="bg-gray-200 font-medium text-gray-600 self-center px-6 py-3 rounded-lg mb-10"
            onClick={() =>
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneDisplay: "",
                phoneDigits: "",
                street: "",
                city: "",
                state: "",
                country: "US",
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
            <p>Patient information updated successfully.</p>
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
