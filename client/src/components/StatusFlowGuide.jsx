import { BiSolidRightArrow } from "react-icons/bi";

export default function StatusFlowGuide() {
    return (
        <div className="bg-white p-4 m-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Status Flow Guide</h2>
           <div className="flex flex-row justify-between mb-4">
            <ol className="flex flex-row flex-wrap gap-2 pl-2 justify-start items-center">
                
                <div className="flex flex-row justify-center items-center gap-2">
                    <li className="status-flow-guide-button">1. Checked In </li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div> 

                <div className="flex flex-row justify-center items-center gap-2">
                <li className="status-flow-guide-button">2. Pre-Procedure</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className="status-flow-guide-button">3. In Process</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className="status-flow-guide-button">4. Closing</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className="status-flow-guide-button">5. Recovery</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                <li className="status-flow-guide-button">6. Complete</li>
                <BiSolidRightArrow className="text-1xl text-blue-600" />
                </div>


                <li className="status-flow-guide-button">7. Dismissal</li>
            </ol>
            </div>

            <p className="text-gray-600"><span className="font-bold">Rules:</span> Statuses cannot be skipped. Can only move forwrad or back one step. No minimum time between updates </p>
            </div>
    );
}