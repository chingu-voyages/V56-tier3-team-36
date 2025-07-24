import { IoIosSearch } from "react-icons/io";

export default function SearchPatientBtn() {
    return (
        <div className="bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col items-start hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            <div className="flex gap-5 flex-row items-center"> 
                <h1 className="text-md font-bold text-white flex items-center gap-3">
                    <IoIosSearch className="text-xl"/> Search Patient</h1>
            </div>
        </div>
    );
}