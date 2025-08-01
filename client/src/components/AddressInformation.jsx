import { IoLocationSharp } from "react-icons/io5";

export default function AddressInformation({ formData, handleChange }){
  return(
    <div className="bg-[#FFFFFF] p-4 mt-10 text-black">
      <div className="flex items-start mb-4">
        <div className="bg-purple-100 p-1 rounded-full">
          <IoLocationSharp className="text-purple-700 text-4xl" />
        </div>
        <span className="font-bold ml-2 self-center">Address Information</span>
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
          className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black"
        >
          <option>Select Country</option>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
        </select>
      </div>
    </div>
  )
}