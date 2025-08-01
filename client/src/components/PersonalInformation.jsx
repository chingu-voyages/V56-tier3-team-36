import { BsPersonVcard } from "react-icons/bs";

export default function PersonalInformation({ formData, handleChange }){
  return(
    <div className="bg-[#FFFFFF] p-4 mt-10 text-black">
      <div className="flex items-start mb-4">
        <div className="bg-green-100 p-2 rounded-full">
          <BsPersonVcard className="text-green-700 text-3xl" />
        </div>
        <span className="font-bold ml-2 self-center">Personal Information</span>
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
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
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
            className="border-2 border-gray-300 rounded p-2 w-full bg-[#FFFFFF] text-black placeholder-gray-400"
          />
          <div className="text-sm text-gray-300 mt-1">
            Email of person waiting for patient
          </div>
        </div>
      </div>
    </div>
  )
}