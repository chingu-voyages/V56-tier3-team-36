import React, { useState, useEffect } from "react";
import { BsHospital } from "react-icons/bs";
import AdminLogInBtn from "./AdminLogInBtn";
import SurgicalTeamLogInBtn from "./SurgicalTeamLogInBtn";

export default function Header() {
  const [now, setNow] = React.useState(new Date());
  const [initialRenderTime] = useState(new Date()); // No 'setInitialRenderTime' needed if it never changes

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000); // Update every second
    return () => clearInterval(intervalId); //
    // Cleanup the interval on component unmount
  }, []);

  // Options for the full date format (e.g., "Sunday, July 13, 2025")
  const fullDateOptions = {
    weekday: "long", // "Sunday"
    year: "numeric", // "2025"
    month: "long", // "July"
    day: "numeric", // "13"
  };

  // Options for the short time format (e.g., "1:05 PM")
  const shortTimeOptions = {
    hour: "numeric", // "1"
    minute: "2-digit", // "05"
    hour12: true, // "PM"
  };

  return (
    <div className="w-full">
      <header className="text-black font-bold flex items-center justify-between top-0 left-0 fixed w-full bg-white">
        <div className="flex items-center">
          <BsHospital className="md:text-6xl text-3xl m-4 text-blue-600" />
          <div className="flex flex-col justify-items-start items-start">
            <h1 className="text-left md:text-3xl text-lg">Surgery Status Board</h1>
            <h2 className="font-medium text-sm">St. Mary's Medical Center</h2>
          </div>
        </div>
        <div className="m-4 flex flex-col justify-items-center items-end">
          <h3 className="md:text-3xl text-lg font-bold">{now.toLocaleTimeString()}</h3>
          <h3 className="md:text-sm text-xs font-medium">
            {now.toLocaleDateString(undefined, fullDateOptions)}
          </h3>
          <h3 className="text-blue-600 font-bold text-sm">
            Last Updated:{" "}
            {initialRenderTime.toLocaleTimeString(undefined, shortTimeOptions)}
          </h3>
<div className="flex flex-col w-full items-stretch md:flex-row gap-2 mt-2">
<div className="w-full">
          <AdminLogInBtn />
   </div>
        <div className="w-full">
          <SurgicalTeamLogInBtn />
</div>
</div>
        </div>
      </header>
    </div>
  );
}
