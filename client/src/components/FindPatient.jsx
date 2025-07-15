export default function FindPatient () {
    return (
        <div className="bg-white p-4 m-4 rounded-2xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Find Patient</h1>
            <p className="mb-4">Patient Number</p>
         <input 
        className="border border-gray-300 p-2 rounded-xl w-full" 
        type="text"
         placeholder="Enter 6-character patient number"/>
            </div>
    )
}