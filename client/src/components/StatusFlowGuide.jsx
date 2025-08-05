import { BiSolidRightArrow } from "react-icons/bi";

const getStatusColor = (status) => {
  switch (status) {
    case 'Checked In':
      return 'bg-blue-100'; 
    case 'Pre-Procedure':
      return 'bg-yellow-100'; 
    case 'In-Progress':
      return 'bg-red-200'; 
    case 'Closing':
      return 'bg-purple-200'; 
    case 'Recovery':
      return 'bg-orange-200'; 
    case 'Complete':
      return 'bg-green-100'; 
    default:
      return 'bg-gray-100';
  }
};

export default function StatusFlowGuide() {
    return (
        <div className="bg-white p-4 m-8 rounded-2xl shadow-lg flex items-center flex-col">
            <h2 className="text-2xl font-bold mb-6">Status Flow Guide</h2>
           <div className="flex flex-row justify-between mb-4">
            <ol className="flex flex-row flex-wrap gap-2 pl-2 justify-center items-center">
                
                <div className="flex flex-row justify-center items-center gap-2">
                    <li className={`status-flow-guide-button ${getStatusColor('Checked In')}`}>1. Checked In </li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div> 

                <div className="flex flex-row justify-center items-center gap-2">
                <li className={`status-flow-guide-button ${getStatusColor('Pre-Procedure')}`}>2. Pre-Procedure</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className={`status-flow-guide-button ${getStatusColor('In-Progress')}`}>3. In-Progress</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className={`status-flow-guide-button ${getStatusColor('Closing')}`}>4. Closing</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className={`status-flow-guide-button ${getStatusColor('Recovery')}`}>5. Recovery</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className={`status-flow-guide-button ${getStatusColor('Complete')}`}>6. Complete</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>


                <li className={`status-flow-guide-button ${getStatusColor('Dismissal')}`}>7. Dismissal</li>
            </ol>
            </div>

            <p className="text-gray-600"><span className="font-bold">Rules:</span> Statuses cannot be skipped. Can only move forward or back one step. No minimum time between updates </p>
            </div>
    );
}