import React from "react";
import { Link } from "react-router-dom";
import { BsHospital } from "react-icons/bs";
import Btn from "./Btn";
import TimeDisplay from "./TimeDisplay";

function Header({ logIn, handleLogout, isAuthenticated, isAdmin, isSurgeon }) {
  return (
    <div className="w-full mb-10">
      <header
        className="text-white bg-gray-800 font-bold flex flex-col top-0 left-0 fixed w-full z-50">
        <div className="flex w-full items-center">
          <div className="flex items-center">
            <BsHospital className="text-2xl sm:text-4xl md:text-6xl m-3 md:m-4 text-blue-600" />

            <div className="flex flex-col items-start">
              <Link
                to="/home"
                className="text-left text-[clamp(1rem,3.2vw,1.875rem)] hover:text-blue-300 transition-colors duration-200"
              >
                <h1>SurgiTrack</h1>
              </Link>
              <h2 className="font-medium text-xs sm:text-sm text-left">
                Track your loved one's procedure
              </h2>
            </div>
          </div>

          <div className="m-4 flex flex-col items-end ml-auto">
            <TimeDisplay />
          </div>
        </div>

        <nav className="flex items-center justify-end gap-3 sm:gap-4 mb-3 px-4">
          <Link to="/home" className="text-xs sm:text-sm text-blue-600 hover:underline">Home</Link>

          {isAdmin && (
            <Link to="/patientinformation" className="text-xs sm:text-sm text-blue-600 hover:underline">
              Patient Information
            </Link>
          )}

          {(isAdmin || isSurgeon) && (
            <Link to="/patientstatusupdate" className="text-xs sm:text-sm text-blue-600 hover:underline">
              Patient Status Update
            </Link>
          )}

          <Link to="/patientstatus" className="text-xs sm:text-sm text-blue-600 hover:underline">Status Board</Link>

          {isAuthenticated ? (
            <Btn
              text="Logout"
              onClick={handleLogout}
              className="w-24"
            />
          ) : (
            <Btn
              text="Login"
              onClick={logIn}
              className="w-24"
            />
          )}
        </nav>
      </header>
    </div>
  );
}
export default Header;
