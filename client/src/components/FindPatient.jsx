import { IoIosSearch } from "react-icons/io";
import {useState} from "react";
import PatientStatusUpdate from "./PatientStatusUpdate";

export default function FindPatient () {
const [searchId, setSearchId] = useState("");
const [showUpdatePatientStatus, setUpdatePatientStatus] = useState(false);

 async function handleFetchData(event) {
    event.preventDefault();
    console.log("submit button was pressed")
    console.log(searchId)
    if(searchId.trim() !== ""){
    setUpdatePatientStatus(true)
   
 try {
    const response = await fetch (`http://localhost:3000/patient-status/${searchId}`)
    if(!response.ok) throw new Error ('not a valid patient number');

    const data = await response.json();
    console.log(data);
    //do something with the data here
const patientInfo = {
     patient_number:  data.patient_number,
     first_name:  data.first_name,
     last_name: data.last_name,
     statusOfPatient: data.current_status
 }
// send the data up to the parent
onPatientData(patientInfo);

} catch(err){
    console.error(err.message)
}
} else{
    setUpdatePatientStatus(false);
    console.log("Search ID cannot be empty")
}
    //check to see if id is valid and in database
    //if not, return 'not a valid patient number'


    //if valid, return the new component 
    //new component will allow the logged in user to move one status forward and save this status to the database
}
 

    return (
        <div className="bg-white p-4 m-8 mb-30 rounded-2xl shadow-lg flex flex-col items-center">
           <div className="flex gap-5"> 
            <IoIosSearch className="bg-blue-search-background border-0 rounded-3xl text-4xl p-2 text-blue-500"/>
            <h1 className="text-2xl font-bold mb-4">Find Patient</h1>
            </div>
    <form onSubmit= {handleFetchData}>
            <p className="mb-4 text-lg font-semi-bold">Patient Number:</p>
        <input 
        className="border border-gray-300 p-2 rounded-xl w-100 text-center" 
        type="text"
        value={searchId}
        placeholder="Enter 6-character patient number"
        onChange={(e) => setSearchId(e.target.value)}
        />
        
        <div className="flex items-center justify-center">
     <button className=" bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
        type="submit"
        >
            <div className="flex gap-5 flex-row items-center"> 
                <h1 className="text-md font-bold text-white flex items-center gap-3">
                    <IoIosSearch className="text-xl"/> Search Patient</h1>
            </div>
        </button>
        </div>
        </form>
{showUpdatePatientStatus && <PatientStatusUpdate/>}
            </div>
    )
}