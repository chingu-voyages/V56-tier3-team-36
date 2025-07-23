import { IoIosSearch } from "react-icons/io";
import SearchPatientBtn from "./SearchPatientBtn";


export default function FindPatient () {
    return (
        <div className="bg-white p-4 m-8 mb-30 rounded-2xl shadow-lg flex flex-col items-center">
           <div className="flex gap-5"> 
            <IoIosSearch className="bg-blue-search-background border-0 rounded-3xl text-4xl p-2 text-blue-500"/>
            <h1 className="text-2xl font-bold mb-4">Find Patient</h1>
            </div>

            <p className="mb-4 text-sm font-semi-bold">Patient Number</p>
         <input 
        className="border border-gray-300 p-2 rounded-xl w-100 text-center" 
        type="text"
         placeholder="Enter 6-character patient number"/>
    <SearchPatientBtn />
            </div>

    )
}