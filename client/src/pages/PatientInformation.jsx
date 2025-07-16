export default function PatientInformation() {
  return (
    <div className="bg-[#070707]">
      <div className="bg-[#3d3b3b] p-4">
        <div className="font-bold mt-2 text-white">
          Patient Information Management
        </div>
        <div className="text-white">
          Add new patients or update existing patient information. All required
          fields must be completed.
        </div>
        <div className="mt-2">
          <button className="!bg-blue-600 text-white px-4 py-2 mr-4">
            Add new patient
          </button>
          <button className="!bg-gray-500 px-4 py-2 mb-2">
            Update existing patient
          </button>
        </div>
      </div>

      <form>
        <div className="bg-[#3d3b3b] p-4 mt-10 text-white">
          <div className="flex items-start">
            <span>👤</span>
            <span className="font-bold ml-2">Patient identification</span>
          </div>
          <div className="flex flex-col items-start mt-2">
            <div>Patient Number</div>
            <input
              type="text"
              placeholder="6 letters"
              className="border border-black rounded p-2"
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
                name="firstName"
                type="text"
                placeholder="Enter first name"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                Last Name <span className="text-red-500">*</span>
              </div>
              <input
                name="lastName"
                type="text"
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
                placeholder="(577) 123-4567"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                Contact Email Address <span className="text-red-500">*</span>
              </div>
              <input
                name="email"
                type="email"
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
                placeholder="Enter city"
                className="border border-black rounded p-2 w-full bg-[#2e2e2e] text-white placeholder-gray-400"
              />
            </div>

            <div>
              <div className="mb-1">
                State/Province/Region <span className="text-red-500">*</span>
              </div>
              <input
                name="region"
                type="text"
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
    </div>
  );
}
