import React from "react";
import { Link } from "react-router-dom"; // Change this line - use destructured import
import { BsHospital } from "react-icons/bs";
import Btn from "./Btn";
import { LogInModal } from "./LogInModal";
import TimeDisplay from "./TimeDisplay";
// import Link from "react-router-dom/Link";

function Header({ logIn, isAdmin, isSurgeon }) {
  console.log("Header rendered with logIn function:", typeof logIn); // Debug log

  return (
    <div className="w-full z-10">
      <header className="text-white bg-gray-800 font-bold flex items-center justify-between top-0 left-0 fixed w-full">
        <div className="flex items-center">
          <BsHospital className="md:text-6xl text-3xl m-4 text-blue-600" />
          <div className="flex flex-col justify-items-start items-start">
            <Link
              to="/home"
              className="text-left md:text-3xl text-lg hover:text-blue-300 transition-colors duration-200"
            >
              <h1>SurgiTrack</h1>
            </Link>
            <h2 className="font-medium text-sm">
              Track your loved one's procedure
            </h2>
          </div>
        </div>
        <div className="m-4 flex flex-col justify-items-center items-end">
          <TimeDisplay />
          <div className="flex items-center gap-6 mt-2">
            <Link to='/home' className="text-sm text-blue-600 hover:underline">Home</Link>
            {isAdmin && (
                      <Link to="/patientinformation" className="text-sm text-blue-600 hover:underline">
                        Patient Information
                      </Link>
                    )}
            {(isAdmin || isSurgeon) && (
                      <Link to="/patientstatusupdate" className="text-sm text-blue-600 hover:underline">
                        Patient Status Update
                      </Link>
                    )}
            <Link to='/patientstatus' className="text-sm text-blue-600 hover:underline">Status Board</Link>
            <Btn text="Login"
                 onClick={logIn}
            />
          </div>
          
        </div>
      </header>
    </div>
  );
}
export default Header;

