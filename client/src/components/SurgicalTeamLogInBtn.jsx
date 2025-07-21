import { Link } from "react-router-dom";
import React from "react";
export default function SurgicalTeamLogInBtn() {
    return (
       <Link to="/patientstatusupdate" >
       <button className="bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 md:text-sm text-xs w-full md:w-35">
        Surgical Login
        </button>
        </Link>
    );
    }