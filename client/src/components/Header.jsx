import React, { useState, useEffect, memo } from "react";
import { BsHospital } from "react-icons/bs";
import Btn from "./Btn";
// import { LogInModal } from "./LogInModal";
import TimeDisplay from "./TimeDisplay";

function Header({logIn}) {
    console.log("Header rendered with logIn function:", typeof logIn); // Debug log

  // const [now, setNow] = React.useState(new Date());
  // const [initialRenderTime] = useState(new Date()); // No 'setInitialRenderTime' needed if it never changes
  // const [showModal, setShowModal] = useState(false); // Add modal state


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setNow(new Date());
  //   }, 1000); // Update every second
  //   return () => clearInterval(intervalId); //
  //   // Cleanup the interval on component unmount
  // }, []);

  // // Options for the full date format (e.g., "Sunday, July 13, 2025")
  // const fullDateOptions = {
  //   weekday: "long", // "Sunday"
  //   year: "numeric", // "2025"
  //   month: "long", // "July"
  //   day: "numeric", // "13"
  // };

  // // Options for the short time format (e.g., "1:05 PM")
  // const shortTimeOptions = {
  //   hour: "numeric", // "1"
  //   minute: "2-digit", // "05"
  //   hour12: true, // "PM"
  // };

//   const logIn = () => {
// setShowModal(true); // Show the modal
//     console.log("Login button clicked");
//   };

  return (
    <div className="w-full">
      <header className="text-white bg-gray-800 font-bold flex items-center justify-between top-0 left-0 fixed w-full">
        <div className="flex items-center">
          <BsHospital className="md:text-6xl text-3xl m-4 text-blue-600" />
          <div className="flex flex-col justify-items-start items-start">
            <h1 className="text-left md:text-3xl text-lg">SurgiTrack</h1>
            <h2 className="font-medium text-sm">Track your loved one's procedure</h2>
          </div>
        </div>
        <div className="m-4 flex flex-col justify-items-center items-end">
 
          <TimeDisplay />

          <Btn
          text="Login"
  onClick={logIn}/>

      <button 
            onClick={() => {
              console.log("=== DIRECT BUTTON TEST ===");
              console.log("logIn type:", typeof logIn);
              console.log("logIn value:", logIn);
              if (logIn) {
                console.log("Direct button calling logIn...");
                logIn();
              } else {
                console.log("logIn is undefined in direct button!");
              }
            }}
            style={{background: 'green', color: 'white', padding: '10px', marginTop: '5px'}}
          >
            TEST DIRECT
          </button>
        </div>
      </header>
    </div>
  );
}
export default memo(Header, (prevProps, nextProps) => {
return true;
});