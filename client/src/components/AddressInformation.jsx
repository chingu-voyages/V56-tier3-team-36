import { IoLocationSharp } from "react-icons/io5";

export default function AddressInformation({ formData, handleChange }) {
  return (
    <div className="bg-[#FFFFFF] p-8 mt-10 text-black max-w-4xl mx-auto rounded-3xl shadow-md">
      <div className="flex items-start mb-4">
        <div className="bg-purple-100 p-1 rounded-full">
          <IoLocationSharp className="text-purple-700 text-4xl" />
        </div>
        <span className="font-bold ml-2 self-center text-2xl">
          Address Information
        </span>
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
          required
          className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
            required
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
            required
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
          required
          className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black"
        >
          <option value="USA">USA</option>
        </select>
      </div>
    </div>
  );
}
