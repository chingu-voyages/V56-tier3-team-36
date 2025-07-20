import { useState, useEffect } from "react";

function generatePatientID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export default function AddPatient() {
  const [patientID, setPatientID] = useState("");
  const [mode, setMode] = useState("add");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const id = generatePatientID();
    setPatientID(id);
  }, []);

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
      <form onSubmit={handleSubmit}>
        <div className="bg-[#3d3b3b] p-4 mt-10 text-white">
          <div className="flex items-start">
            <span>👤</span>
            <span className="font-bold ml-2">Patient identification</span>
          </div>
          <div className="flex flex-col items-start mt-2">
            <div>Patient Number</div>
            <input
              type="text"
              value={patientID}
              readOnly
              className="border border-black rounded p-2 bg-[#2e2e2e] text-white"
            />
            <div className="mt-1 text-sm">
              Unique 6-character identifier (auto-generated for new patients)
            </div>
          </div>
        </div>

        <div className="bg-[#3d3b3b] p-4 mt-10 text-white">
          <div className="flex items-center mb-4">
            <span className="mr-2">🧑</span>
            <span className="font-bold">Personal Information</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="mb-1">
                First Name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                Last Name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                Telephone Number <span className="text-red-500">*</span>
              </div>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(577) 123-4567"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                Contact Email Address <span className="text-red-500">*</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@example.com"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
              <div className="text-sm text-gray-300 mt-1">
                Email of person waiting for patient
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3d3b3b] p-4 mt-10 text-white">
          <div className="flex items-center mb-4">
            <span className="mr-2">🏠</span>
            <span className="font-bold">Address Information</span>
          </div>

          <div className="mb-4">
            <div className="mb-1">
              Street Address <span className="text-red-500">*</span>
            </div>
            <input
              name="street"
              type="text"
              value={formData.street}
              onChange={handleChange}
              placeholder="123 Main Street"
              className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="mb-1">
                City <span className="text-red-500">*</span>
              </div>
              <input
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                State/Province/state <span className="text-red-500">*</span>
              </div>
              <input
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                placeholder="State, Province, or Region"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <div className="mb-1">
              Country <span className="text-red-500">*</span>
            </div>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white"
            >
              <option>Select Country</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="!bg-green-600 text-white px-6 py-2 rounded"
          >
            Add Patient
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded shadow-md text-black">
            <h2 className="text-xl font-bold mb-2">
              Form submission successful
            </h2>
            <p>Patient added to the system successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
