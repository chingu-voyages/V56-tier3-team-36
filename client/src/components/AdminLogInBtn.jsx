import Link from "react-router-dom";
import React from "react";
export default function AdminLogInBtn() {
    return (
       <Link to="/patientstatusupdate" className="flex items-center justify-center">
       <button className="bg-blue-600 text-white px-2 py-2 rounded-xl hover:bg-blue-700">
        Admin Login
        </button>
        </Link>
    );
    }