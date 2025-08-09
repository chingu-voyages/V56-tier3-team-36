export default function PatientStatusUpdate (){

    function handleSubmit(event){
        event.preventDefault();
        console.log("Button was pressed")
        //handle moving patient status to the next available status here
    }
    return (
 <div className="bg-white px-20 py-10 m-8 mb-30 rounded-2xl shadow-lg flex flex-col items-center">
           <div className="flex gap-5"> 
            
            <div>
                <form onSubmit={handleSubmit}>
                    <h4>Patient XYZ Current Status: </h4>
                   <h4>Move Patient *XYZ* to ____ Status</h4>
                    <button className="bg-blue-600 p-4 mt-4 rounded-2xl shadow-md flex flex-col hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                    type="submit"
                    >                
<h1 className="text-md font-bold text-white flex items-center gap-3">
                        Next Status placeholder</h1>
                        </button>
                </form>
            </div>
            </div>
</div>
      
         )
}